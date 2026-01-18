import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook optimisé qui fait défiler instantanément vers le haut de la page lors de la navigation
 * Scroll ultra-rapide pour une navigation fluide
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Scroll instantané vers le haut IMMÉDIATEMENT (sans attendre)
    // Utiliser scrollTo avec behavior: 'auto' pour un scroll instantané
    if (window.scrollTo) {
      window.scrollTo(0, 0)
    } else {
      // Fallback pour les anciens navigateurs
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    // Si l'URL contient un hash, scroll vers la section après un court délai
    if (hash) {
      // Utiliser un seul requestAnimationFrame pour être plus rapide
      requestAnimationFrame(() => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 80 // Offset pour la navbar sticky
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          // Scroll instantané
          window.scrollTo(0, Math.max(0, offsetPosition))
        }
      })
    }
  }, [pathname, hash])
}
