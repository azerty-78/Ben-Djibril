import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook pour gérer un chargement progressif avec étapes
 * Affiche différentes étapes de chargement pour une meilleure UX
 */
export type LoadingStage = 'idle' | 'starting' | 'loading' | 'rendering' | 'complete'

export function useProgressiveLoading() {
  const location = useLocation()
  const [loadingStage, setLoadingStage] = useState<LoadingStage>('idle')
  const [progress, setProgress] = useState(0)
  const previousPathname = useRef(location.pathname)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Si le pathname a changé, démarrer le chargement progressif
    if (location.pathname !== previousPathname.current) {
      previousPathname.current = location.pathname
      
      // Étape 1: Starting (0-20%)
      setLoadingStage('starting')
      setProgress(0)

      // Nettoyer les intervalles précédents
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      // Simuler une progression naturelle
      let currentProgress = 0
      const targetProgress = 100
      const increment = 2 // 2% par intervalle
      const intervalTime = 30 // 30ms = progression fluide
      let currentStage: 'starting' | 'loading' | 'rendering' = 'starting'
      
      progressIntervalRef.current = setInterval(() => {
        currentProgress += increment
        
        // Étape 2: Loading (20-60%)
        if (currentProgress >= 20 && currentStage === 'starting') {
          currentStage = 'loading'
          setLoadingStage('loading')
        }
        
        // Étape 3: Rendering (60-90%)
        if (currentProgress >= 60 && currentStage === 'loading') {
          currentStage = 'rendering'
          setLoadingStage('rendering')
        }

        if (currentProgress >= targetProgress) {
          currentProgress = targetProgress
          if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current)
            progressIntervalRef.current = null
          }
        }
        
        setProgress(currentProgress)
      }, intervalTime)

      // Vérifier si la page est prête
      const checkPageReady = () => {
        // Vérifier si la section hero est visible
        const heroSelectors = [
          'section:first-of-type',
          'main > div > section:first-child',
          'section[class*="hero" i]',
          '[data-section="hero"]',
        ]

        for (const selector of heroSelectors) {
          try {
            const heroElement = document.querySelector(selector)
            if (heroElement) {
              const rect = heroElement.getBoundingClientRect()
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

      // Démarrer la vérification après un court délai
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = requestAnimationFrame(() => {
          let attempts = 0
          const maxAttempts = 15

          const checkReady = () => {
            attempts++
            
            if (checkPageReady()) {
              // Page prête ! Compléter le chargement
              setLoadingStage('rendering')
              setProgress(90)
              
              // Attendre un peu pour que le rendu soit complet
              setTimeout(() => {
                setLoadingStage('complete')
                setProgress(100)
                
                // Masquer complètement après un court délai
                setTimeout(() => {
                  setLoadingStage('idle')
                  setProgress(0)
                }, 200)
              }, 100)
              return
            }

            if (attempts < maxAttempts) {
              rafRef.current = requestAnimationFrame(checkReady)
            } else {
              // Timeout : compléter quand même
              setLoadingStage('complete')
              setProgress(100)
              setTimeout(() => {
                setLoadingStage('idle')
                setProgress(0)
              }, 200)
            }
          }

          rafRef.current = requestAnimationFrame(checkReady)
        })
      })

      // Timeout de sécurité
      const safetyTimeout = setTimeout(() => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current)
          progressIntervalRef.current = null
        }
        setLoadingStage('complete')
        setProgress(100)
        setTimeout(() => {
          setLoadingStage('idle')
          setProgress(0)
        }, 200)
      }, 1000)

      // Nettoyer
      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current)
          progressIntervalRef.current = null
        }
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current)
          rafRef.current = null
        }
        clearTimeout(safetyTimeout)
      }
    }
  }, [location.pathname])

  // Nettoyer à la destruction
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const isLoading = loadingStage !== 'idle' && loadingStage !== 'complete'

  return {
    isLoading,
    loadingStage,
    progress,
  }
}
