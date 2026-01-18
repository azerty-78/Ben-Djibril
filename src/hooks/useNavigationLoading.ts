import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook pour gérer l'état de chargement pendant la navigation
 * Affiche un loader jusqu'à ce que la section hero de la page soit visible
 */
export function useNavigationLoading() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)
  const previousPathname = useRef(location.pathname)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Si le pathname a changé, on démarre le chargement
    if (location.pathname !== previousPathname.current) {
      setIsLoading(true)
      previousPathname.current = location.pathname

      // Nettoyer les timeouts et intervalles précédents
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current)
      }

      // Fonction pour vérifier si la section hero est visible
      const checkHeroVisible = (): boolean => {
        // Essayer plusieurs sélecteurs pour trouver la section hero
        const heroSelectors = [
          'section[class*="hero" i]',
          '[data-section="hero"]',
          '.hero-section',
          'section:first-of-type',
          '[class*="Hero"]',
          'main section:first-child',
        ]

        let heroElement: Element | null = null
        for (const selector of heroSelectors) {
          try {
            heroElement = document.querySelector(selector)
            if (heroElement) break
          } catch (e) {
            // Ignorer les sélecteurs invalides
            continue
          }
        }

        // Si on trouve un élément hero, vérifier s'il est dans la fenêtre
        if (heroElement) {
          const rect = heroElement.getBoundingClientRect()
          // Vérifier si la section hero est visible (même partiellement)
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0

          if (isVisible && rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
            // La section hero est dans la partie supérieure de l'écran
            return true
          }
        } else {
          // Si pas de hero trouvé, utiliser le premier élément principal visible
          const firstSection = document.querySelector('section, main > div > section, [data-section]')
          if (firstSection) {
            const rect = firstSection.getBoundingClientRect()
            const isVisible = rect.top >= 0 && rect.top < window.innerHeight * 0.3

            if (isVisible) {
              return true
            }
          }
        }

        return false
      }

      // Attendre que React ait rendu le nouveau contenu
      // Utiliser requestAnimationFrame pour s'assurer que le DOM est mis à jour
      const startChecking = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Vérifier immédiatement si la section hero est déjà visible
            if (checkHeroVisible()) {
              setTimeout(() => {
                setIsLoading(false)
              }, 150)
              return
            }

            // Sinon, vérifier périodiquement
            let attempts = 0
            const maxAttempts = 40 // 40 * 50ms = 2 secondes max

            checkIntervalRef.current = setInterval(() => {
              attempts++
              if (checkHeroVisible() || attempts >= maxAttempts) {
                if (checkIntervalRef.current) {
                  clearInterval(checkIntervalRef.current)
                  checkIntervalRef.current = null
                }
                // Petit délai pour s'assurer que tout est bien rendu
                setTimeout(() => {
                  setIsLoading(false)
                }, 150)
              }
            }, 50) // Vérifier toutes les 50ms
          })
        })
      }

      startChecking()

      // Timeout de sécurité : arrêter le chargement après 2.5 secondes maximum
      loadingTimeoutRef.current = setTimeout(() => {
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current)
          checkIntervalRef.current = null
        }
        setIsLoading(false)
      }, 2500)

      // Nettoyer à la destruction du composant
      return () => {
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
