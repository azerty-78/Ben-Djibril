import { useEffect, useRef } from 'react'

/**
 * Hook pour précharger les routes au survol (hover) des liens de navigation
 * Améliore significativement la vitesse de navigation perçue
 */
export function useHoverPrefetch() {
  const prefetchedOnHover = useRef(new Set<string>())
  const linkTimeoutsRef = useRef(new Map<Element, ReturnType<typeof setTimeout>>())

  useEffect(() => {
    const linkTimeouts = linkTimeoutsRef.current

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
    const handleLinkHover = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement
      const href = target.getAttribute('href')
      
      if (href && href.startsWith('/') && !href.includes('#')) {
        // Annuler tout timeout précédent pour ce lien
        const existingTimeout = linkTimeoutsRef.current.get(target)
        if (existingTimeout) {
          clearTimeout(existingTimeout)
        }

        // Précharger après un court délai (100ms) pour éviter les préchargements inutiles
        const timeoutId = setTimeout(() => {
          prefetchRoute(href)
          linkTimeoutsRef.current.delete(target)
        }, 100)

        linkTimeoutsRef.current.set(target, timeoutId)
      }
    }

    // Fonction pour gérer le mouseleave
    const handleLinkLeave = (e: Event) => {
      const target = e.currentTarget as Element
      const timeoutId = linkTimeoutsRef.current.get(target)
      if (timeoutId) {
        clearTimeout(timeoutId)
        linkTimeoutsRef.current.delete(target)
      }
    }

    // Observer les changements du DOM pour ajouter les listeners aux nouveaux liens
    const addListenersToLinks = () => {
      const navLinks = document.querySelectorAll('a[href^="/"]')
      
      navLinks.forEach((link) => {
        // Ne pas ajouter de listener si déjà présent
        if (!(link as any).__prefetchListenerAdded) {
          link.addEventListener('mouseenter', handleLinkHover)
          link.addEventListener('mouseleave', handleLinkLeave)
          ;(link as any).__prefetchListenerAdded = true
        }
      })
    }

    // Ajouter les listeners initialement
    addListenersToLinks()

    // Observer les changements du DOM pour ajouter les listeners aux nouveaux liens
    const observer = new MutationObserver(() => {
      addListenersToLinks()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Nettoyer les listeners
    return () => {
      observer.disconnect()
      const navLinks = document.querySelectorAll('a[href^="/"]')
      navLinks.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover)
        link.removeEventListener('mouseleave', handleLinkLeave)
        ;(link as any).__prefetchListenerAdded = false
      })
      // Nettoyer tous les timeouts
      linkTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout))
      linkTimeoutsRef.current.clear()
    }
  }, [])
}
