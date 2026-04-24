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
    images: [
      '/blogpress-preview.png',
      'https://image.thum.io/get/width/1200/crop/800/noanimate/https://blogpress-app.com'
    ],
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
    type: 'web-app',
    visibility: 'public',
    stack: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Express'],
    client: {
      name: 'TechStart Analytics',
      type: 'startup',
      translations: {
        en: {
          description: 'A fast-growing B2B SaaS startup providing analytics solutions for small and medium businesses, helping them make data-driven decisions.'
        },
        fr: {
          description: 'Une startup SaaS B2B en pleine croissance fournissant des solutions d\'analyse pour les petites et moyennes entreprises, les aidant à prendre des décisions basées sur les données.'
        }
      }
    },
    links: {
      official: 'https://techstart-analytics.example.com',
      github: 'https://github.com/example/techstart-dashboard'
    },
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop'
    ],
    translations: {
      en: {
        name: 'Analytics Dashboard SaaS',
        description: 'An interactive analytics dashboard for a B2B SaaS company, providing real-time data visualization, custom reports, and actionable insights to help businesses understand their performance metrics.',
        problem: 'Users needed better insights into their data but the existing dashboard was cluttered, slow, and didn\'t provide real-time updates. The interface was confusing for non-technical users, leading to low adoption rates.',
        solution: 'Created an interactive dashboard with real-time data updates using WebSockets, implemented D3.js for beautiful data visualizations, designed an intuitive UI with customizable widgets, and added export functionality for reports. Built a responsive design that works seamlessly on all devices.',
        impact: '40% increase in user engagement, 60% reduction in support tickets related to dashboard usage, 25% increase in premium subscriptions, and 90% user satisfaction rate. The dashboard is now the primary tool for 85% of active users.'
      },
      fr: {
        name: 'Tableau de Bord Analytics SaaS',
        description: 'Un tableau de bord analytique interactif pour une entreprise SaaS B2B, offrant une visualisation de données en temps réel, des rapports personnalisés et des insights actionnables pour aider les entreprises à comprendre leurs métriques de performance.',
        problem: 'Les utilisateurs avaient besoin de meilleures informations sur leurs données, mais le tableau de bord existant était encombré, lent et ne fournissait pas de mises à jour en temps réel. L\'interface était confuse pour les utilisateurs non techniques, entraînant de faibles taux d\'adoption.',
        solution: 'Création d\'un tableau de bord interactif avec des mises à jour de données en temps réel utilisant WebSockets, implémentation de D3.js pour de belles visualisations de données, conception d\'une interface intuitive avec des widgets personnalisables, et ajout d\'une fonctionnalité d\'export pour les rapports. Création d\'un design responsive qui fonctionne parfaitement sur tous les appareils.',
        impact: '40% d\'augmentation de l\'engagement des utilisateurs, 60% de réduction des tickets de support liés à l\'utilisation du tableau de bord, 25% d\'augmentation des abonnements premium, et 90% de taux de satisfaction des utilisateurs. Le tableau de bord est maintenant l\'outil principal pour 85% des utilisateurs actifs.'
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

