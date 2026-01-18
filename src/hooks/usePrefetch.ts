import { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

// Définir les routes disponibles pour le préchargement
const ROUTES = ['/', '/services', '/projects', '/about', '/contact']

// Set pour éviter les doublons de prefetch
const prefetchedRoutes = new Set<string>()

/**
 * Hook optimisé pour précharger les routes et ressources
 * Précharge les pages les plus visitées et évite les doublons
 */
export function usePrefetch() {
  const location = useLocation()

  // Fonction pour précharger une route spécifique
  const prefetchRoute = useCallback((path: string) => {
    // Ne pas précharger la route actuelle ou si déjà préchargée
    if (path === location.pathname || prefetchedRoutes.has(path)) {
      return
    }

    // Marquer comme préchargée
    prefetchedRoutes.add(path)

    // Précharger la route avec React Router prefetch (si disponible)
    // Pour Vite, on précharge le chunk JS correspondant
    try {
      const prefetchLink = document.createElement('link')
      prefetchLink.rel = 'prefetch'
      prefetchLink.as = 'document'
      prefetchLink.href = path
      
      // Précharger seulement si le lien n'existe pas déjà
      if (!document.querySelector(`link[href="${path}"]`)) {
        document.head.appendChild(prefetchLink)
      }
    } catch (error) {
      // Ignorer les erreurs silencieusement
      console.debug('Prefetch failed for:', path, error)
    }
  }, [location.pathname])

  useEffect(() => {
    // Précharger les liens HTML présents sur la page
    const links = document.querySelectorAll('a[href^="/"]') as NodeListOf<HTMLAnchorElement>
    
    links.forEach((link) => {
      const href = link.getAttribute('href')
      if (!href || href === location.pathname) return

      // Utiliser la fonction de préchargement optimisée
      prefetchRoute(href)
    })

    // Précharger intelligemment les routes adjacentes (routes les plus probables)
    // Basé sur la route actuelle, précharger les routes liées
    const currentRouteIndex = ROUTES.indexOf(location.pathname)
    if (currentRouteIndex !== -1) {
      // Précharger la route suivante et précédente
      const adjacentRoutes = [
        ROUTES[currentRouteIndex + 1],
        ROUTES[currentRouteIndex - 1],
      ].filter(Boolean) as string[]

      // Précharger immédiatement les routes adjacentes (plus agressif)
      requestAnimationFrame(() => {
        adjacentRoutes.forEach(route => prefetchRoute(route))
      })
    }

    // Précharger les routes les plus visitées en arrière-plan (plus rapide)
    // (Home, Services, Contact sont les plus courantes)
    if (!prefetchedRoutes.has('/') && location.pathname !== '/') {
      requestAnimationFrame(() => {
        setTimeout(() => prefetchRoute('/'), 500)
      })
    }
    if (!prefetchedRoutes.has('/services') && location.pathname !== '/services') {
      requestAnimationFrame(() => {
        setTimeout(() => prefetchRoute('/services'), 700)
      })
    }
    if (!prefetchedRoutes.has('/contact') && location.pathname !== '/contact') {
      requestAnimationFrame(() => {
        setTimeout(() => prefetchRoute('/contact'), 900)
      })
    }
  }, [location.pathname, prefetchRoute])
}

