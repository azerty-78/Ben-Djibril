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
  ogImage = '/favicon.png',
  ogUrl,
  twitterCard = 'summary',
}: SEOProps) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  useEffect(() => {
    const lang = i18n.language
    const baseUrl = window.location.origin
    const currentUrl = `${baseUrl}${location.pathname}${location.search}`
    
    // Update document title avec variations du nom
    if (title) {
      document.title = title
    } else {
      // Default title based on route avec variations du nom
      const routeTitles: Record<string, string> = {
        '/': t('seo.home.title') as string,
        '/services': t('seo.services.title') as string,
        '/projects': t('seo.projects.title') as string,
        '/about': t('seo.about.title') as string,
        '/contact': t('seo.contact.title') as string,
      }
      const baseTitle = routeTitles[location.pathname] || 'Ben Djibril - Portfolio Professionnel'
      // S'assurer que les deux noms sont présents dans le titre
      if (!baseTitle.includes('Kone Djibril Benjamin') && !baseTitle.includes('Kone')) {
        document.title = `${baseTitle} | Kone Djibril Benjamin`
      } else {
        document.title = baseTitle
      }
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

    // Description avec variations du nom
    const baseDescription = description || (() => {
      const routeDescriptions: Record<string, string> = {
        '/': t('seo.home.description') as string,
        '/services': t('seo.services.description') as string,
        '/projects': t('seo.projects.description') as string,
        '/about': t('seo.about.description') as string,
        '/contact': t('seo.contact.description') as string,
      }
      return routeDescriptions[location.pathname] || t('seo.default.description') as string
    })()
    // Enrichir la description avec les deux noms si pas déjà présents
    let metaDescription = baseDescription
    if (!baseDescription.includes('Kone Djibril Benjamin') && !baseDescription.includes('Ben Djibril')) {
      metaDescription = `${baseDescription} | Ben Djibril (Kone Djibril Benjamin) - Portfolio professionnel.`
    } else if (!baseDescription.includes('Kone Djibril Benjamin')) {
      metaDescription = `${baseDescription} | Kone Djibril Benjamin, également connu sous le nom de Ben Djibril.`
    }
    updateMetaTag('description', metaDescription)

    // Keywords avec variations du nom pour le référencement
    const baseKeywords = keywords || (() => {
      const routeKeywords: Record<string, string> = {
        '/': t('seo.home.keywords') as string,
        '/services': t('seo.services.keywords') as string,
        '/projects': t('seo.projects.keywords') as string,
        '/about': t('seo.about.keywords') as string,
        '/contact': t('seo.contact.keywords') as string,
      }
      return routeKeywords[location.pathname] || t('seo.default.keywords') as string
    })()
    // Ajouter les variations du nom pour améliorer le référencement
    const enhancedKeywords = `${baseKeywords}, Ben Djibril, Kone Djibril Benjamin, Benjamin Kone Djibril, Djibril Benjamin, Ben Djibril Portfolio, Kone Djibril Benjamin Portfolio, Ben Djibril Developer, Kone Djibril Benjamin Developer`
    updateMetaTag('keywords', enhancedKeywords)
    
    // Meta tags supplémentaires pour le référencement
    updateMetaTag('author', 'Kone Djibril Benjamin (Ben Djibril)')
    updateMetaTag('name', 'Ben Djibril - Kone Djibril Benjamin')
    updateMetaTag('application-name', 'Ben Djibril Portfolio')
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateMetaTag('googlebot', 'index, follow')
    updateMetaTag('bingbot', 'index, follow')

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

    // Fonction helper pour les balises link
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`)
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', rel)
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    // Canonical URL
    updateLinkTag('canonical', currentUrl)

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

    // Structured Data (JSON-LD) pour améliorer le référencement
    let existingJsonLd = document.querySelector('script[type="application/ld+json"]')
    if (existingJsonLd) {
      existingJsonLd.remove()
    }
    
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kone Djibril Benjamin',
      alternateName: ['Ben Djibril', 'Benjamin Kone Djibril', 'Djibril Benjamin'],
      jobTitle: 'DevOps Engineer',
      description: metaDescription,
      url: currentUrl,
      image: `${baseUrl}${ogImage}`,
      sameAs: [
        // Ajoutez vos réseaux sociaux ici si vous en avez
      ],
      knowsAbout: [
        'DevOps',
        'Backend Development',
        'Mobile Development',
        'Spring Boot',
        'Kotlin',
        'React',
        'Full Stack Development'
      ],
      alumniOf: [
        {
          '@type': 'Organization',
          name: 'ENS Y'
        },
        {
          '@type': 'Organization',
          name: 'UY2 SOA'
        }
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Kobe Corporation'
      }
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, location, t, i18n.language])

  return null
}

export default SEO
