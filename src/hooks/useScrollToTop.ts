import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook optimisé qui fait défiler instantanément vers le haut AVANT que le contenu ne soit visible
 * Le scroll se fait pendant que le loader est affiché pour éviter l'effet désagréable
 * Gère également la navigation vers les sections via hash (#section-id)
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()
  const isScrollingRef = useRef(false)
  const hashTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Nettoyer le timeout précédent si il existe
    if (hashTimeoutRef.current) {
      clearTimeout(hashTimeoutRef.current)
      hashTimeoutRef.current = null
    }

    // Marquer qu'on est en train de scroller
    isScrollingRef.current = true

    // Si l'URL contient un hash, on ne scroll pas vers le haut mais on attend que le contenu soit chargé
    if (hash) {
      // Attendre que le contenu soit rendu avant de scroller vers le hash
      const scrollToHash = (attempt = 0) => {
        // Essayer plusieurs méthodes pour trouver l'élément
        let element: Element | null = null
        
        // Méthode 1: Chercher par ID direct
        element = document.querySelector(hash)
        
        // Méthode 2: Chercher par data-section
        if (!element) {
          const sectionId = hash.replace('#', '')
          element = document.querySelector(`[data-section="${sectionId}"]`)
        }
        
        // Méthode 3: Chercher par data-subsection
        if (!element) {
          const subsectionId = hash.replace('#', '')
          element = document.querySelector(`[data-subsection="${subsectionId}"]`)
        }
        
        if (element) {
          const offset = 80 // Offset pour le header sticky
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          
          // Scroll avec un léger délai pour s'assurer que le layout est stable
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
              })
              isScrollingRef.current = false
            })
          })
        } else if (attempt < 10) {
          // Si l'élément n'est pas trouvé, réessayer après un délai (max 10 tentatives)
          hashTimeoutRef.current = setTimeout(() => {
            scrollToHash(attempt + 1)
          }, 100)
        } else {
          // Après 10 tentatives, abandonner et scroll vers le haut
          window.scrollTo(0, 0)
          isScrollingRef.current = false
        }
      }
      
      // Attendre que le DOM soit prêt et que le contenu soit chargé
      // Utiliser plusieurs méthodes pour s'assurer que le contenu est prêt
      const tryScroll = () => {
        // Attendre un peu pour que React ait fini de rendre
        setTimeout(() => {
          scrollToHash()
        }, 100)
      }
      
      if (document.readyState === 'complete') {
        tryScroll()
      } else {
        window.addEventListener('load', tryScroll, { once: true })
        // Fallback avec timeout plus long pour les pages lourdes
        hashTimeoutRef.current = setTimeout(tryScroll, 800)
      }
    } else {
      // Pas de hash, scroll vers le haut instantanément
      if (document.documentElement) {
        document.documentElement.scrollTop = 0
      }
      if (document.body) {
        document.body.scrollTop = 0
      }
      window.scrollTo(0, 0)
      
      requestAnimationFrame(() => {
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        window.scrollTo(0, 0)
        isScrollingRef.current = false
      })
    }

    // Nettoyage
    return () => {
      if (hashTimeoutRef.current) {
        clearTimeout(hashTimeoutRef.current)
        hashTimeoutRef.current = null
      }
    }
  }, [pathname, hash])
}
