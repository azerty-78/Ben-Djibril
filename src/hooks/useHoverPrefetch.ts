import { useEffect, useRef } from 'react'

/**
 * Hook pour précharger les routes au survol (hover) des liens de navigation
 * Améliore significativement la vitesse de navigation perçue
 */
export function useHoverPrefetch() {
  const prefetchedOnHover = useRef(new Set<string>())

  useEffect(() => {
    const prefetchRoute = (path: string) => {
      // Éviter les doublons
      if (prefetchedOnHover.current.has(path)) {
        return
      }

      // Ne pas précharger si déjà sur cette route
      if (path === window.location.pathname) {
        return
      }

      prefetchedOnHover.current.add(path)

      try {
        // Créer un lien de prefetch
        const prefetchLink = document.createElement('link')
        prefetchLink.rel = 'prefetch'
        prefetchLink.as = 'document'
        prefetchLink.href = path
        
        // Vérifier si le lien n'existe pas déjà
        if (!document.querySelector(`link[href="${path}"]`)) {
          document.head.appendChild(prefetchLink)
        }
      } catch (error) {
        // Ignorer les erreurs silencieusement
        console.debug('Hover prefetch failed:', path)
      }
    }

    // Fonction pour gérer le hover sur les liens
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute('href')
      
      if (href && href.startsWith('/') && !href.includes('#')) {
        // Précharger après un court délai (100ms) pour éviter les préchargements inutiles
        const timeoutId = setTimeout(() => {
          prefetchRoute(href)
        }, 100)

        // Nettoyer le timeout si le curseur quitte le lien avant le délai
        target.addEventListener('mouseleave', () => {
          clearTimeout(timeoutId)
        }, { once: true })
      }
    }

    // Sélectionner tous les liens de navigation (NavLink React Router)
    const navLinks = document.querySelectorAll('a[href^="/"]')
    
    // Ajouter les listeners de hover
    navLinks.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover as EventListener)
    })

    // Nettoyer les listeners
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover as EventListener)
      })
    }
  }, [])
}
