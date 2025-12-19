import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

type SEOProps = {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: 'summary' | 'summary_large_image'
}

function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage = '/favicon.jpg',
  ogUrl,
  twitterCard = 'summary',
}: SEOProps) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const lang = i18n.language
    const baseUrl = window.location.origin
    const currentUrl = `${baseUrl}${location.pathname}${location.search}`
    
    // Update document title
    if (title) {
      document.title = title
    } else {
      // Default title based on route
      const routeTitles: Record<string, string> = {
        '/': t('seo.home.title') as string,
        '/services': t('seo.services.title') as string,
        '/projects': t('seo.projects.title') as string,
        '/about': t('seo.about.title') as string,
        '/contact': t('seo.contact.title') as string,
      }
      document.title = routeTitles[location.pathname] || 'Ben Djibril - Portfolio Professionnel'
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Description
    const metaDescription = description || (() => {
      const routeDescriptions: Record<string, string> = {
        '/': t('seo.home.description') as string,
        '/services': t('seo.services.description') as string,
        '/projects': t('seo.projects.description') as string,
        '/about': t('seo.about.description') as string,
        '/contact': t('seo.contact.description') as string,
      }
      return routeDescriptions[location.pathname] || t('seo.default.description') as string
    })()
    updateMetaTag('description', metaDescription)

    // Keywords
    const metaKeywords = keywords || (() => {
      const routeKeywords: Record<string, string> = {
        '/': t('seo.home.keywords') as string,
        '/services': t('seo.services.keywords') as string,
        '/projects': t('seo.projects.keywords') as string,
        '/about': t('seo.about.keywords') as string,
        '/contact': t('seo.contact.keywords') as string,
      }
      return routeKeywords[location.pathname] || t('seo.default.keywords') as string
    })()
    updateMetaTag('keywords', metaKeywords)

    // Open Graph
    updateMetaTag('og:title', ogTitle || document.title, 'property')
    updateMetaTag('og:description', ogDescription || metaDescription, 'property')
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, 'property')
    updateMetaTag('og:url', ogUrl || currentUrl, 'property')
    updateMetaTag('og:type', 'website', 'property')
    updateMetaTag('og:locale', lang === 'fr' ? 'fr_FR' : 'en_US', 'property')

    // Twitter Card
    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:title', ogTitle || document.title)
    updateMetaTag('twitter:description', ogDescription || metaDescription)
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`)

    // Language
    const htmlLang = document.documentElement.getAttribute('lang')
    if (htmlLang !== lang) {
      document.documentElement.setAttribute('lang', lang)
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

    // Alternate languages
    const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]')
    alternateLinks.forEach(link => link.remove())
    
    const languages = ['fr', 'en']
    languages.forEach(langCode => {
      const alternateLink = document.createElement('link')
      alternateLink.setAttribute('rel', 'alternate')
      alternateLink.setAttribute('hreflang', langCode)
      alternateLink.setAttribute('href', `${baseUrl}${location.pathname}?lang=${langCode}`)
      document.head.appendChild(alternateLink)
    })
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, location, t, i18n.language])

  return null
}

export default SEO
