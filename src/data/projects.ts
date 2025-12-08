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
  description: string
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
    type: 'ecommerce',
    visibility: 'public',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    client: {
      name: 'FashionHub',
      type: 'company',
      description: 'A leading fashion retailer in West Africa, specializing in trendy clothing and accessories for young professionals.'
    },
    links: {
      official: 'https://fashionhub.example.com',
      github: 'https://github.com/example/fashionhub',
      demo: 'https://demo.fashionhub.example.com'
    },
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&h=800&fit=crop'
    ],
    translations: {
      en: {
        name: 'E-commerce Fashion Platform',
        description: 'A modern, scalable e-commerce solution designed for a fashion retailer, featuring real-time inventory management, secure payment processing, and an intuitive shopping experience.',
        problem: 'The client was using a legacy system that couldn\'t handle peak traffic during sales events, resulting in slow load times, frequent crashes, and lost revenue. The old platform also lacked modern features like real-time inventory tracking and mobile optimization.',
        solution: 'Built a scalable Next.js platform with optimized database queries, integrated Stripe for secure payments, implemented real-time inventory management, and created a fully responsive design optimized for mobile users. Added features like wishlist, product recommendations, and advanced search.',
        impact: '50% faster load times, 30% increase in conversions, 95% reduction in downtime during peak traffic, and 40% increase in mobile sales. The platform now handles 10x more concurrent users without performance issues.'
      },
      fr: {
        name: 'Plateforme E-commerce Mode',
        description: 'Une solution e-commerce moderne et scalable conçue pour un détaillant de mode, avec gestion d\'inventaire en temps réel, traitement de paiement sécurisé et une expérience d\'achat intuitive.',
        problem: 'Le client utilisait un système obsolète qui ne pouvait pas gérer le trafic de pointe pendant les événements de vente, entraînant des temps de chargement lents, des plantages fréquents et des pertes de revenus. L\'ancienne plateforme manquait également de fonctionnalités modernes comme le suivi d\'inventaire en temps réel et l\'optimisation mobile.',
        solution: 'Création d\'une plateforme Next.js scalable avec des requêtes de base de données optimisées, intégration de Stripe pour les paiements sécurisés, implémentation d\'une gestion d\'inventaire en temps réel, et création d\'un design entièrement responsive optimisé pour les utilisateurs mobiles. Ajout de fonctionnalités comme la liste de souhaits, les recommandations de produits et la recherche avancée.',
        impact: '50% de temps de chargement plus rapides, 30% d\'augmentation des conversions, 95% de réduction des temps d\'arrêt pendant le trafic de pointe, et 40% d\'augmentation des ventes mobiles. La plateforme gère maintenant 10x plus d\'utilisateurs simultanés sans problèmes de performance.'
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
      description: 'A fast-growing B2B SaaS startup providing analytics solutions for small and medium businesses, helping them make data-driven decisions.'
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
  },
  {
    id: '3',
    type: 'mobile',
    visibility: 'public',
    stack: ['Kotlin Multiplatform', 'Android', 'iOS', 'Spring Boot', 'PostgreSQL'],
    client: {
      name: 'HealthCare Plus',
      type: 'company',
      description: 'A healthcare technology company providing telemedicine services and patient management solutions across multiple countries in Africa.'
    },
    links: {
      official: 'https://healthcareplus.example.com',
      github: 'https://github.com/example/healthcare-mobile'
    },
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop'
    ],
    translations: {
      en: {
        name: 'Telemedicine Mobile App',
        description: 'A cross-platform mobile application for telemedicine services, enabling patients to book appointments, consult with doctors via video calls, manage prescriptions, and access medical records securely.',
        problem: 'The healthcare provider needed a mobile solution to reach patients in remote areas, but developing separate native apps for Android and iOS was too expensive and time-consuming. They also needed real-time synchronization of patient data across platforms.',
        solution: 'Developed a Kotlin Multiplatform application that works seamlessly on both Android and iOS, reducing development time by 40%. Integrated video calling capabilities, secure patient data management with end-to-end encryption, offline mode for areas with poor connectivity, and real-time synchronization with the backend Spring Boot API.',
        impact: '60% increase in patient appointments, 45% reduction in no-shows through automated reminders, 80% patient satisfaction rate, and 30% cost reduction in patient management. The app now serves over 50,000 active users across 3 countries.'
      },
      fr: {
        name: 'Application Mobile Télémédecine',
        description: 'Une application mobile cross-platform pour les services de télémédecine, permettant aux patients de prendre rendez-vous, consulter des médecins via des appels vidéo, gérer les ordonnances et accéder aux dossiers médicaux en toute sécurité.',
        problem: 'Le prestataire de soins de santé avait besoin d\'une solution mobile pour atteindre les patients dans les zones reculées, mais le développement d\'applications natives séparées pour Android et iOS était trop coûteux et prenait trop de temps. Ils avaient également besoin d\'une synchronisation en temps réel des données des patients entre les plateformes.',
        solution: 'Développement d\'une application Kotlin Multiplatform qui fonctionne parfaitement sur Android et iOS, réduisant le temps de développement de 40%. Intégration de capacités d\'appel vidéo, gestion sécurisée des données des patients avec chiffrement de bout en bout, mode hors ligne pour les zones à faible connectivité, et synchronisation en temps réel avec l\'API backend Spring Boot.',
        impact: '60% d\'augmentation des rendez-vous patients, 45% de réduction des absences grâce aux rappels automatisés, 80% de taux de satisfaction des patients, et 30% de réduction des coûts de gestion des patients. L\'application sert maintenant plus de 50 000 utilisateurs actifs dans 3 pays.'
      }
    }
  },
  {
    id: '4',
    type: 'portfolio',
    visibility: 'public',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    client: {
      name: 'Creative Agency Studio',
      type: 'company',
      description: 'A boutique creative agency specializing in brand identity, web design, and digital marketing for creative professionals and small businesses.'
    },
    links: {
      official: 'https://creativestudio.example.com',
      github: 'https://github.com/example/creative-studio-portfolio'
    },
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop'
    ],
    translations: {
      en: {
        name: 'Creative Portfolio Website',
        description: 'A modern, visually stunning portfolio website for a creative agency, featuring smooth animations, interactive galleries, and a seamless user experience that showcases the agency\'s work and attracts new clients.',
        problem: 'The agency\'s old website was outdated, didn\'t reflect their modern brand identity, and had poor mobile experience. It wasn\'t generating enough leads and potential clients couldn\'t easily view their portfolio or contact them.',
        solution: 'Redesigned the entire website with modern UI/UX principles, implemented smooth animations using Framer Motion, created an interactive project gallery with filtering capabilities, optimized for mobile devices, and integrated a contact form with email notifications. Added dark mode support and improved SEO.',
        impact: '3x increase in lead generation, 50% increase in website traffic, 70% increase in contact form submissions, and 90% improvement in mobile user engagement. The new website helped the agency secure 5 major new clients within the first 3 months.'
      },
      fr: {
        name: 'Site Portfolio Créatif',
        description: 'Un site portfolio moderne et visuellement époustouflant pour une agence créative, avec des animations fluides, des galeries interactives et une expérience utilisateur sans faille qui présente le travail de l\'agence et attire de nouveaux clients.',
        problem: 'L\'ancien site web de l\'agence était obsolète, ne reflétait pas leur identité de marque moderne et avait une mauvaise expérience mobile. Il ne générait pas assez de leads et les clients potentiels ne pouvaient pas facilement voir leur portfolio ou les contacter.',
        solution: 'Refonte complète du site web avec des principes UI/UX modernes, implémentation d\'animations fluides avec Framer Motion, création d\'une galerie de projets interactive avec capacités de filtrage, optimisation pour les appareils mobiles, et intégration d\'un formulaire de contact avec notifications par email. Ajout du support du mode sombre et amélioration du SEO.',
        impact: '3x d\'augmentation de la génération de leads, 50% d\'augmentation du trafic du site web, 70% d\'augmentation des soumissions de formulaire de contact, et 90% d\'amélioration de l\'engagement des utilisateurs mobiles. Le nouveau site web a aidé l\'agence à sécuriser 5 nouveaux clients majeurs dans les 3 premiers mois.'
      }
    }
  }
]

// Helper function to get project by language
export const getProjectByLang = (project: Project, lang: 'en' | 'fr') => {
  return {
    ...project,
    ...project.translations[lang]
  }
}

// Get all unique project types
export const getProjectTypes = (): ProjectType[] => {
  return Array.from(new Set(projects.map(p => p.type))) as ProjectType[]
}

