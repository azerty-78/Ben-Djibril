export type ProjectType = 
  | 'web-dev'
  | 'showcase'
  | 'portfolio'
  | 'ecommerce'
  | 'web-app'
  | 'mobile'
  | 'desktop'
  | 'api'
  | 'devops'
  | 'consulting'
  | 'inventory'
  | 'restaurant'
  | 'billing'
  | 'orders'
  | 'pos'
  | 'crm'
  | 'delivery'
  | 'booking'
  | 'pharmacy'
  | 'gym'
  | 'salon'
  | 'transport'
  | 'rental'
  | 'accounting'
  | 'payroll'
  | 'mobile-money'
  | 'market'
  | 'parking'
  | 'school'
  | 'hospital'

export type ProjectVisibility = 'public' | 'private' | 'confidential'

export interface ProjectLinks {
  official?: string
  github?: string
  demo?: string
}

export interface ProjectClient {
  name: string
  type: 'company' | 'individual' | 'startup' | 'ngo' | 'government'
  translations: {
    en: {
      description: string
    }
    fr: {
      description: string
    }
  }
}

export interface Project {
  id: string
  type: ProjectType
  visibility: ProjectVisibility
  stack: string[]
  client: ProjectClient
  links: ProjectLinks
  images: string[] // Multiple images for the project
  translations: {
    en: {
      name: string
      description: string
      problem: string
      solution: string
      impact: string
    }
    fr: {
      name: string
      description: string
      problem: string
      solution: string
      impact: string
    }
  }
}

export const projects: Project[] = [
  {
    id: '1',
    type: 'web-app',
    visibility: 'public',
    stack: ['React.js', 'Spring Boot', 'Kotlin', 'MongoDB', 'Docker', 'JWT', 'OAuth2'],
    client: {
      name: 'Kobe Corporation',
      type: 'startup',
      translations: {
        en: {
          description: 'A content publishing and social networking SaaS platform focused on long-form content and community engagement.'
        },
        fr: {
          description: 'Une plateforme SaaS de blogging et réseau social orientée publication de contenus longs et engagement communautaire.'
        }
      }
    },
    links: {
      official: 'https://blogpress-app.com'
    },
    images: [],
    translations: {
      en: {
        name: 'BlogPress - Blogging & Social Platform (Sep-Dec 2025)',
        description: 'A SaaS platform for long-form content publishing with community features, subscriptions, and social sharing.',
        problem: 'Creators and communities needed a single platform to publish rich long-form content, embed media, manage audience subscriptions, and keep secure user onboarding without juggling multiple disconnected tools.',
        solution: 'Built BlogPress with a rich-text editor, Markdown support, embedded media, subscriptions, and sharing workflows. Implemented secure JWT authentication with OAuth2 providers (Google and GitHub), based on a headless API architecture with SSR for performance and SEO.',
        impact: 'Delivered an integrated publishing and social experience from September to December 2025, reducing tooling fragmentation for creators and providing a scalable base for growth and community engagement.'
      },
      fr: {
        name: 'BlogPress - Plateforme de Blogging & Réseau Social (Sept-Dec 2025)',
        description: 'Une plateforme SaaS de publication de contenus longs avec fonctionnalités communautaires, abonnements et partage social.',
        problem: 'Les créateurs et communautés avaient besoin d\'une plateforme unique pour publier du contenu long, embarquer des médias, gérer les abonnements et sécuriser l\'onboarding utilisateur, sans multiplier les outils séparés.',
        solution: 'Développement de BlogPress avec éditeur rich-text, support Markdown, médias embarqués, système d\'abonnements et partage. Mise en place d\'une authentification sécurisée JWT + OAuth2 (Google et GitHub), avec architecture API headless et SSR pour la performance et le SEO.',
        impact: 'Projet réalisé de septembre à décembre 2025 avec une expérience unifiée de publication et de réseau social, réduisant la fragmentation des outils côté créateurs et posant une base scalable pour la croissance de la communauté.'
      }
    }
  },
  {
    id: '2',
    type: 'consulting',
    visibility: 'public',
    stack: ['React', 'Spring Boot', 'Kotlin', 'Docker', 'PostgreSQL', 'Strapi'],
    client: {
      name: 'KOBE Corporation',
      type: 'company',
      translations: {
        en: {
          description: 'Yaoundé, Cameroon - Client contracts. Custom web development, technical consulting, and integrations for SMEs and institutions.'
        },
        fr: {
          description: 'Yaoundé, Cameroun - Contrats clients. Développement web sur mesure, conseil technique et intégrations pour PME et institutions.'
        }
      }
    },
    links: {
      official: 'https://kobecorporation.com'
    },
    images: [],
    translations: {
      en: {
        name: 'KOBE Corporation - Full-Stack Client Projects (Dec 2025 - Present)',
        description: 'Custom full-stack web development, technical consulting, and integrations for SMEs and institutions.',
        problem: 'Many local organizations needed reliable digital products and architecture guidance but lacked end-to-end delivery capabilities across product scoping, engineering, and operations.',
        solution: 'Delivered full project cycles from requirements to maintenance: specifications, development, testing, deployment, and post-delivery support. Built and shipped client-ready web applications and integrations using Next.js, Spring Boot, Kotlin, Docker, PostgreSQL, and Strapi.',
        impact: 'Enabled clients to accelerate digital transformation with production-ready platforms, clearer technical direction, and maintainable full-stack architectures aligned with business needs.'
      },
      fr: {
        name: 'KOBE Corporation - Projets Clients Full-Stack (Déc 2025 - présent)',
        description: 'Développement web full-stack sur mesure, conseil technique et intégrations pour PME et institutions.',
        problem: 'De nombreuses structures locales avaient besoin de solutions digitales fiables et d\'un accompagnement architectural, sans disposer d\'une capacité de livraison complète de bout en bout.',
        solution: 'Réalisation du cycle complet projet : cahier des charges, développement, recette, déploiement, livraison et maintenance. Conception et mise en production d\'applications web et d\'intégrations clients avec Next.js, Spring Boot, Kotlin, Docker, PostgreSQL et Strapi.',
        impact: 'Accélération de la transformation digitale des clients grâce à des plateformes prêtes pour la production, une direction technique plus claire et des architectures full-stack maintenables alignées sur les besoins métier.'
      }
    }
  },
  {
    id: '3',
    type: 'web-dev',
    visibility: 'private',
    stack: ['Next.js 14', 'Strapi v4', 'PostgreSQL 15', 'Docker', 'Nginx', 'GitHub Actions'],
    client: {
      name: 'GIZ-TRIDOM',
      type: 'ngo',
      translations: {
        en: {
          description: 'Multisite institutional portal bid response in progress (Jan - X 2026): bilingual FR/EN platform for multiple entities.'
        },
        fr: {
          description: 'Offre technique multisite en cours (Janv. - X 2026) : portail institutionnel bilingue FR/EN multi-entités.'
        }
      }
    },
    links: {},
    images: [],
    translations: {
      en: {
        name: 'GIZ-TRIDOM Multisite Portal (Technical Offer in Progress, Jan - X 2026)',
        description: 'Bid response for a bilingual FR/EN institutional multisite portal for multiple entities.',
        problem: 'The project requires a robust multisite architecture with strict quality constraints, including accessibility compliance and high performance standards across multiple environments and stakeholders.',
        solution: 'Designed a decoupled architecture using Strapi v4 as headless CMS, Next.js 14 frontend, and PostgreSQL 15. Planned multi-environment deployment workflows with Docker, Nginx, and GitHub Actions CI/CD.',
        impact: 'Provides a scalable and maintainable foundation aligned with WCAG 2.1 and Core Web Vitals requirements, reducing delivery risk for a complex institutional portal.'
      },
      fr: {
        name: 'Portail Multisite GIZ-TRIDOM (Offre Technique en cours, Janv. - X 2026)',
        description: 'Réponse à appel d\'offres GIZ pour un portail institutionnel bilingue FR/EN multi-entités.',
        problem: 'Le projet nécessite une architecture multisite robuste avec des contraintes qualité élevées, notamment la conformité accessibilité et des exigences fortes de performance sur plusieurs environnements.',
        solution: 'Conception d\'une architecture découplée avec Strapi v4 (CMS headless), Next.js 14 et PostgreSQL 15. Préparation des déploiements multi-environnements avec Docker, Nginx et pipelines GitHub Actions.',
        impact: 'Mise en place d\'une base scalable et maintenable alignée avec WCAG 2.1 et Core Web Vitals, réduisant les risques de livraison pour un portail institutionnel complexe.'
      }
    }
  }
]

// Helper function to get project by language
export const getProjectByLang = (project: Project, lang: 'en' | 'fr') => {
  return {
    ...project,
    ...project.translations[lang],
    client: {
      ...project.client,
      description: project.client.translations[lang].description
    }
  }
}

// Get all unique project types
export const getProjectTypes = (): ProjectType[] => {
  return Array.from(new Set(projects.map(p => p.type))) as ProjectType[]
}

