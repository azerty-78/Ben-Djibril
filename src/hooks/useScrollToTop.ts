import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook qui fait défiler instantanément vers le haut de la page lors de la navigation,
 * sauf si l'URL contient un hash (section spécifique)
 * Optimisé pour éviter les transitions désagréables - le scroll se fait sans animation
 * pendant le chargement de la page
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Scroll instantané vers le haut pour éviter les transitions désagréables
    // Le scroll est fait immédiatement, avant que le contenu ne soit visible
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })

    // Si l'URL contient un hash, on scroll vers la section avec un offset pour la navbar
    // Mais seulement après que la page soit chargée
    if (hash) {
      // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.querySelector(hash)
          if (element) {
            const offset = 80 // Offset pour la navbar sticky
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            // Scroll instantané pour éviter la transition visible
            window.scrollTo({ top: Math.max(0, offsetPosition), left: 0, behavior: 'instant' as ScrollBehavior })
          }
        })
      })
    }
  }, [pathname, hash])
}
