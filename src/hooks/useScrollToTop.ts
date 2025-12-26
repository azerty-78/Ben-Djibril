import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook qui fait défiler vers le haut de la page lors de la navigation,
 * sauf si l'URL contient un hash (section spécifique)
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Si l'URL contient un hash, on laisse le navigateur gérer le scroll vers la section
    if (hash) {
      // Petit délai pour s'assurer que le DOM est prêt
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 80 // Offset pour la navbar sticky
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      // Sinon, on scroll vers le haut de la page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [pathname, hash])
}
