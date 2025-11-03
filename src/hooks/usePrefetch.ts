import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function usePrefetch() {
  const location = useLocation()

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="/"]') as NodeListOf<HTMLAnchorElement>
    
    links.forEach((link) => {
      const href = link.getAttribute('href')
      if (!href || href === location.pathname) return

      const prefetchLink = document.createElement('link')
      prefetchLink.rel = 'prefetch'
      prefetchLink.href = href
      document.head.appendChild(prefetchLink)
    })
  }, [location])
}

