import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook qui fait défiler instantanément vers le haut de la page lors de la navigation,
 * sauf si l'URL contient un hash (section spécifique)
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Si l'URL contient un hash, on scroll vers la section avec un offset pour la navbar
    if (hash) {
      // Petit délai pour s'assurer que le DOM est prêt
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 80 // Offset pour la navbar sticky
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo(0, Math.max(0, offsetPosition))
        }
      }, 100)
    } else {
      // Sinon, on scroll instantanément vers le haut de la page (sans transition)
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
}
