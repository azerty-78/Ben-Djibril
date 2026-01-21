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
    // URL canonique sans paramètres de requête pour éviter les pages en double
    const canonicalUrl = `${baseUrl}${location.pathname}`
    // URL complète avec paramètres pour Open Graph et autres
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
    updateMetaTag('publisher', 'Kobe Corporation')
    updateMetaTag('creator', 'Kone Djibril Benjamin (Ben Djibril)')
    
    // Vérification des moteurs de recherche (à remplir après création des comptes)
    // updateMetaTag('google-site-verification', 'VOTRE_CODE_GOOGLE_SEARCH_CONSOLE')
    // updateMetaTag('msvalidate.01', 'VOTRE_CODE_BING_WEBMASTER')
    
    // Robots et crawlers - autoriser tous les robots à indexer
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateMetaTag('bingbot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    
    // Autoriser les IA et crawlers modernes
    updateMetaTag('GPTBot', 'index, follow')
    updateMetaTag('ChatGPT-User', 'index, follow')
    updateMetaTag('CCBot', 'index, follow')
    updateMetaTag('anthropic-ai', 'index, follow')
    updateMetaTag('Claude-Web', 'index, follow')
    updateMetaTag('PerplexityBot', 'index, follow')
    
    // Balises pour améliorer la découverte par les robots
    updateMetaTag('revisit-after', '7 days')
    updateMetaTag('distribution', 'global')
    updateMetaTag('rating', 'general')

    // Open Graph - Enrichi
    updateMetaTag('og:title', ogTitle || document.title, 'property')
    updateMetaTag('og:description', ogDescription || metaDescription, 'property')
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, 'property')
    updateMetaTag('og:image:width', '1200', 'property')
    updateMetaTag('og:image:height', '630', 'property')
    updateMetaTag('og:image:alt', 'Ben Djibril (Kone Djibril Benjamin) - DevOps Engineer Portfolio', 'property')
    updateMetaTag('og:url', ogUrl || currentUrl, 'property')
    updateMetaTag('og:type', 'website', 'property')
    updateMetaTag('og:locale', lang === 'fr' ? 'fr_FR' : 'en_US', 'property')
    updateMetaTag('og:site_name', 'Ben Djibril Portfolio', 'property')
    updateMetaTag('og:updated_time', new Date().toISOString(), 'property')

    // Twitter Card
    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:site', '@le_bendji')
    updateMetaTag('twitter:creator', '@le_bendji')
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

    // Canonical URL - Toujours sans paramètres de requête pour éviter les pages en double
    // Google utilisera cette URL comme version principale
    updateLinkTag('canonical', canonicalUrl)
    
    // Sitemap reference
    updateLinkTag('sitemap', `${baseUrl}/sitemap.xml`)
    
    // Preconnect pour améliorer les performances
    const preconnectUrls = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]
    
    preconnectUrls.forEach(url => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${url}"]`)
      if (!preconnect) {
        preconnect = document.createElement('link')
        preconnect.setAttribute('rel', 'preconnect')
        preconnect.setAttribute('href', url)
        if (url.includes('fonts.gstatic.com')) {
          preconnect.setAttribute('crossorigin', 'anonymous')
        }
        document.head.appendChild(preconnect)
      }
    })

    // Alternate languages - Important pour éviter les pages en double
    const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]')
    alternateLinks.forEach(link => link.remove())
    
    // Ajouter x-default pour indiquer la version par défaut (canonique)
    const defaultLink = document.createElement('link')
    defaultLink.setAttribute('rel', 'alternate')
    defaultLink.setAttribute('hreflang', 'x-default')
    defaultLink.setAttribute('href', canonicalUrl)
    document.head.appendChild(defaultLink)
    
    // Ajouter les versions linguistiques
    const languages = ['fr', 'en']
    languages.forEach(langCode => {
      const alternateLink = document.createElement('link')
      alternateLink.setAttribute('rel', 'alternate')
      alternateLink.setAttribute('hreflang', langCode)
      alternateLink.setAttribute('href', `${baseUrl}${location.pathname}?lang=${langCode}`)
      document.head.appendChild(alternateLink)
    })

    // Structured Data (JSON-LD) pour améliorer le référencement
    // Supprimer tous les scripts JSON-LD existants
    const existingJsonLd = document.querySelectorAll('script[type="application/ld+json"]')
    existingJsonLd.forEach(script => script.remove())
    
    // Person Schema - Principal
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Kone Djibril Benjamin',
      alternateName: ['Ben Djibril', 'Benjamin Kone Djibril', 'Djibril Benjamin', 'Ben Djibril Developer', 'Kone Djibril Benjamin Developer'],
      jobTitle: 'DevOps Engineer',
      description: metaDescription,
      url: canonicalUrl,
      image: `${baseUrl}${ogImage}`,
      sameAs: [
        'https://www.facebook.com/share/1apyznqNgf/',
        'https://www.instagram.com/le_bendji',
        'https://x.com/le_bendji',
        'https://www.linkedin.com/in/Ben-Djibril',
        'https://github.com/azerty-78',
        'https://www.kobecorporation.com',
      ],
      knowsAbout: [
        'DevOps',
        'Backend Development',
        'Mobile Development',
        'Spring Boot',
        'Kotlin',
        'React',
        'Full Stack Development',
        'Web Development',
        'E-commerce',
        'API Development',
        'Cloud Services'
      ],
      alumniOf: [
        {
          '@type': 'Organization',
          name: 'ENS Y',
          url: 'https://www.ens-yaounde.cm'
        },
        {
          '@type': 'Organization',
          name: 'UY2 SOA',
          url: 'https://www.univ-yaounde2.cm'
        }
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Kobe Corporation',
        url: 'https://www.kobecorporation.com'
      },
      // Ajouter des informations pour améliorer la découverte
      identifier: {
        '@type': 'PropertyValue',
        name: 'Portfolio Website',
        value: canonicalUrl
      }
    }
    
    // Website Schema - Pour améliorer la découverte du site
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Ben Djibril - Portfolio Professionnel',
      alternateName: ['Kone Djibril Benjamin Portfolio', 'Ben Djibril Developer Portfolio'],
      url: baseUrl,
      description: metaDescription,
      author: {
        '@type': 'Person',
        name: 'Kone Djibril Benjamin',
        alternateName: 'Ben Djibril'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Kobe Corporation',
        url: 'https://www.kobecorporation.com'
      },
      inLanguage: ['fr', 'en'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
    
    // Organization Schema - Pour Kobe Corporation
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kobe Corporation',
      url: 'https://www.kobecorporation.com',
      logo: `${baseUrl}/favicon.png`,
      sameAs: [
        'https://www.facebook.com/share/1apyznqNgf/',
        'https://www.instagram.com/le_bendji',
        'https://x.com/le_bendji',
        'https://www.linkedin.com/in/Ben-Djibril',
        'https://github.com/azerty-78',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+237-655-938-501',
        contactType: 'Customer Service',
        areaServed: 'Worldwide',
        availableLanguage: ['fr', 'en']
      }
    }
    
    // Breadcrumb Schema - Pour améliorer la navigation
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: baseUrl
        },
        ...(location.pathname !== '/' ? [{
          '@type': 'ListItem',
          position: 2,
          name: document.title.split(' - ')[0] || document.title,
          item: canonicalUrl
        }] : [])
      ]
    }
    
    // ProfessionalService Schema - Pour les services
    const professionalServiceSchema = location.pathname === '/services' ? {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Ben Djibril - Services de Développement',
      alternateName: 'Kone Djibril Benjamin - Development Services',
      description: metaDescription,
      url: canonicalUrl,
      provider: {
        '@type': 'Person',
        name: 'Kone Djibril Benjamin',
        alternateName: 'Ben Djibril',
        jobTitle: 'DevOps Engineer'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Worldwide'
      },
      serviceType: [
        'Web Development',
        'Mobile Development',
        'DevOps',
        'Backend Development',
        'E-commerce',
        'API Development'
      ]
    } : null
    
    // Créer et ajouter tous les scripts JSON-LD
    const schemas = [
      personSchema,
      websiteSchema,
      organizationSchema,
      breadcrumbSchema,
      ...(professionalServiceSchema ? [professionalServiceSchema] : [])
    ]
    
    schemas.forEach(schema => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    })
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, location, t, i18n.language])

  return null
}

export default SEO
