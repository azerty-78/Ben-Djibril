import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Hook pour précharger agressivement les chunks JS des pages
 * Améliore significativement la vitesse de navigation
 */
export function usePreloadRoutes() {
  const location = useLocation()

  useEffect(() => {
    // Routes à précharger avec leurs imports correspondants
    const routesToPreload: Record<string, () => Promise<any>> = {
      '/': () => import('../pages/Home'),
      '/services': () => import('../pages/Services'),
      '/projects': () => import('../pages/Projects'),
      '/about': () => import('../pages/About'),
      '/contact': () => import('../pages/Contact'),
    }

    // Précharger toutes les routes sauf la route actuelle (agressif)
    Object.entries(routesToPreload).forEach(([path, importFn], index) => {
      if (path !== location.pathname) {
        // Précharger avec un délai échelonné pour ne pas surcharger
        // Les routes les plus importantes sont préchargées en premier
        const delay = index * 50 // 0ms, 50ms, 100ms, etc.
        requestAnimationFrame(() => {
          setTimeout(() => {
            importFn().catch(() => {
              // Ignorer les erreurs silencieusement
            })
          }, delay)
        })
      }
    })
  }, [location.pathname])
}
