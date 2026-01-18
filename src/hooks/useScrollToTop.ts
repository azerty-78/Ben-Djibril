import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook optimisé qui fait défiler instantanément vers le haut AVANT que le contenu ne soit visible
 * Le scroll se fait pendant que le loader est affiché pour éviter l'effet désagréable
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()
  const isScrollingRef = useRef(false)

  useEffect(() => {
    // Marquer qu'on est en train de scroller
    isScrollingRef.current = true

    // Scroll INSTANTANÉ vers le haut AVANT tout rendu
    // Utiliser directement les propriétés pour un scroll immédiat
    if (document.documentElement) {
      document.documentElement.scrollTop = 0
    }
    if (document.body) {
      document.body.scrollTop = 0
    }
    // Double méthode pour garantir le scroll
    window.scrollTo(0, 0)
    
    // Forcer le scroll même si le navigateur essaie de l'animer
    requestAnimationFrame(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
      
      // Si l'URL contient un hash, scroll vers la section
      if (hash) {
        requestAnimationFrame(() => {
          const element = document.querySelector(hash)
          if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            // Scroll instantané
            document.documentElement.scrollTop = Math.max(0, offsetPosition)
            document.body.scrollTop = Math.max(0, offsetPosition)
            window.scrollTo(0, Math.max(0, offsetPosition))
          }
          isScrollingRef.current = false
        })
      } else {
        isScrollingRef.current = false
      }
    })
  }, [pathname, hash])
}
