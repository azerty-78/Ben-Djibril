import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook optimisé pour gérer l'état de chargement pendant la navigation
 * Détection ultra-rapide de la section hero pour une navigation fluide
 */
export function useNavigationLoading() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const previousPathname = useRef(location.pathname)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Si le pathname a changé, on démarre le chargement IMMÉDIATEMENT
    if (location.pathname !== previousPathname.current) {
      // Afficher le loader AVANT tout pour masquer la transition
      setIsLoading(true)
      
      // Forcer le scroll vers le haut IMMÉDIATEMENT pendant que le loader est visible
      // Cela évite de voir l'effet de scroll désagréable
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
      
      previousPathname.current = location.pathname

      // Nettoyer les timeouts et intervalles précédents
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Fonction optimisée pour vérifier si la section hero est visible
      const checkHeroVisible = (): boolean => {
        // Sélecteurs optimisés par ordre de probabilité
        const heroSelectors = [
          'section:first-of-type',
          'main > div > section:first-child',
          'section[class*="hero" i]',
          '[data-section="hero"]',
          '[class*="Hero"]',
        ]

        // Utiliser querySelector qui est plus rapide que querySelectorAll
        for (const selector of heroSelectors) {
          try {
            const heroElement = document.querySelector(selector)
            if (heroElement) {
              const rect = heroElement.getBoundingClientRect()
              // Vérification simplifiée : si l'élément existe et est dans le viewport supérieur
              if (rect.top >= 0 && rect.top < window.innerHeight * 0.6) {
                return true
              }
            }
          } catch (e) {
            continue
          }
        }

        // Fallback : vérifier le premier élément principal
        const firstSection = document.querySelector('section, main > div, [data-section]')
        if (firstSection) {
          const rect = firstSection.getBoundingClientRect()
          if (rect.top >= 0 && rect.top < window.innerHeight * 0.4) {
            return true
          }
        }

        return false
      }

      // Fonction de vérification optimisée avec requestAnimationFrame
      const performCheck = () => {
        if (checkHeroVisible()) {
          // Détecté ! Masquer immédiatement le loader
          setIsLoading(false)
          return true
        }
        return false
      }

      // Vérification ultra-rapide avec plusieurs tentatives en raf
      let attempts = 0
      const maxAttempts = 20 // Réduit de 40 à 20 pour être plus rapide
      
      const checkWithRAF = () => {
        attempts++
        
        if (performCheck()) {
          return // Trouvé, on arrête
        }

        if (attempts < maxAttempts) {
          rafRef.current = requestAnimationFrame(checkWithRAF)
        } else {
          // Si après 20 tentatives on n'a rien trouvé, masquer quand même
          setIsLoading(false)
        }
      }

      // Démarrer la vérification immédiatement
      // Utiliser plusieurs requestAnimationFrame pour s'assurer que le DOM est prêt
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          if (!performCheck()) {
            // Si pas trouvé immédiatement, continuer avec les vérifications
            rafRef.current = requestAnimationFrame(checkWithRAF)
          }
        })
      })

      // Timeout de sécurité réduit : arrêter après 800ms maximum (au lieu de 2.5s)
      loadingTimeoutRef.current = setTimeout(() => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        setIsLoading(false)
      }, 800) // Réduit de 2500ms à 800ms

      // Nettoyer à la destruction
      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current)
          checkIntervalRef.current = null
        }
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current)
          loadingTimeoutRef.current = null
        }
      }
    }
  }, [location.pathname])

  // Nettoyer les timeouts à la destruction
  useEffect(() => {
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
    }
  }, [])

  return isLoading
}
