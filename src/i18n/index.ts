import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language?.toLowerCase() || 'fr'
const initialLang = savedLang || (browserLang.startsWith('fr') ? 'fr' : 'en')

export const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home', services: 'Services', projects: 'Projects', about: 'About', blog: 'Blog', contact: 'Contact',
        serviceWeb: 'Web Development', serviceEcom: 'E-commerce', serviceApp: 'Web Apps', serviceConsult: 'Consulting'
      },
      footer: {
        legal: 'Legal notice', privacy: 'Privacy policy', rights: 'All rights reserved.'
      },
      home: {
        title: 'DevOps Engineer',
        subtitle: 'I help companies build performant, international digital products with a focus on backend, mobile, and DevOps.',
        card1: { title: 'Mobile Applications', desc: 'Cross-platform apps with Kotlin Multiplatform.' },
        card2: { title: 'Web apps', desc: 'Scalable, secure, business‑oriented.' },
        card3: { title: 'E‑commerce', desc: 'Conversion, performance, internationalization.' },
        ctaPrimary: 'Get Started', ctaSecondary: 'View Projects',
        metrics: { clients: 'Clients', projects: 'Projects', satisfaction: 'Satisfaction', delivery: 'Avg Delivery' },
        about: {
          title: 'About Me',
          subtitle: 'Medior Developer | 4 Years of Experience | DevOps Engineer',
          bio: 'Hi, I\'m Kone Djibril Benjamin, but you can call me Ben Djibril. I\'m a Medior Developer with 4 years of experience, specializing in backend development with Spring Boot and mobile development with Kotlin (not just native). I\'m passionate about creating robust, scalable digital solutions that help businesses thrive in the digital age.',
          bioExtended: 'As a DevOps Engineer, I excel in backend and mobile development, with solid frontend skills that make me a complete full-stack developer. My expertise spans from building RESTful APIs with Spring Boot to crafting cross-platform mobile applications with Kotlin Multiplatform. I work extensively with modern cloud technologies, containerization, and CI/CD pipelines to deliver high-quality solutions.',
          languages: 'Languages',
          languagesDesc: 'Native French speaker, intermediate English level',
          realName: 'Full Name',
          publicName: 'Public Name',
          experience: 'Experience',
          level: 'Level',
          specialties: 'Specialties',
          techStack: 'Technology Stack',
          techStackDesc: 'Technologies and tools I master and use daily',
          certifications: 'Certifications',
          contactMe: 'Interested in my profile?',
          contactDesc: 'Let\'s discuss your project and see how I can help you',
          contactBtn: 'Contact Me'
        }
      },
      services: {
        title: 'Services',
        subtitle: 'Tailored solutions for your digital needs',
        packageStarter: 'Starter', packagePro: 'Professional', packageEnterprise: 'Enterprise',
        features: 'Features', getStarted: 'Get Started', mostPopular: 'Most Popular',
        serviceWebDev: { title: 'Web Development', desc: 'Modern, responsive websites', feature1: 'Responsive design', feature2: 'SEO optimization', feature3: 'Fast loading', feature4: 'Modern frameworks' },
        serviceShowcase: { title: 'Showcase Websites', desc: 'Professional showcase sites', feature1: 'Custom design', feature2: 'SEO optimized', feature3: 'Contact forms', feature4: 'Fast performance' },
        servicePortfolio: { title: 'Portfolio', desc: 'Personal or professional portfolios', feature1: 'Creative design', feature2: 'Project showcase', feature3: 'CV integration', feature4: 'Social media links' },
        serviceEcom: { title: 'E-commerce', desc: 'Online stores that convert', feature1: 'Payment integration', feature2: 'Inventory management', feature3: 'Shopping cart', feature4: 'Admin dashboard' },
        serviceApp: { title: 'Web Applications', desc: 'Custom business solutions', feature1: 'Custom features', feature2: 'User authentication', feature3: 'Database integration', feature4: 'API development' },
        serviceMobile: { title: 'Mobile Applications', desc: 'Cross-platform mobile apps', feature1: 'iOS & Android', feature2: 'Kotlin Multiplatform', feature3: 'Native performance', feature4: 'Offline support' },
        serviceDesktop: { title: 'Desktop Applications', desc: 'Native desktop applications', feature1: 'Cross-platform', feature2: 'Native UI', feature3: 'System integration', feature4: 'Offline mode' },
        serviceAPI: { title: 'API Development', desc: 'RESTful and GraphQL APIs', feature1: 'REST API', feature2: 'GraphQL', feature3: 'Documentation', feature4: 'Security & Auth' },
        serviceDevOps: { title: 'DevOps & Cloud', desc: 'Infrastructure and deployment', feature1: 'CI/CD pipelines', feature2: 'Docker & Kubernetes', feature3: 'Cloud deployment', feature4: 'Monitoring & Logs' },
        serviceConsult: { title: 'Consulting', desc: 'Expert advice and audits', feature1: 'Code review', feature2: 'Architecture audit', feature3: 'Performance optimization', feature4: 'Technical consulting' }
      },
      projects: {
        title: 'Projects',
        subtitle: 'Real solutions for real businesses',
        viewProject: 'View Project', viewCode: 'View Code', problem: 'Problem', solution: 'Solution', impact: 'Impact',
        tags: 'Technologies'
      },
      testimonials: {
        title: 'What clients say',
        subtitle: 'Trusted by businesses worldwide'
      },
      contact: {
        title: 'Contact',
        subtitle: "Let's discuss your project",
        send: 'Send',
        name: 'Your name',
        email: 'Email',
        message: 'Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.',
        required: 'This field is required',
        invalidEmail: 'Invalid email address'
      },
      notFound: { title: 'Page not found', back: 'Back to home' },
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', blog: 'Blog', contact: 'Contact',
        serviceWeb: 'Développement Web', serviceEcom: 'E-commerce', serviceApp: 'Applications Web', serviceConsult: 'Conseil'
      },
      footer: {
        legal: 'Mentions légales', privacy: 'Politique de confidentialité', rights: 'Tous droits réservés.'
      },
      home: {
        title: 'Ingénieur DevOps',
        subtitle: 'J\'aide les entreprises à concevoir des produits digitaux performants et internationaux. Spécialisé en DevOps, backend et mobile, je maîtrise également le frontend pour une approche full-stack complète.',
        card1: { title: 'Applications Mobile', desc: 'Applications cross-platform avec Kotlin Multiplatform.' },
        card2: { title: 'Apps web', desc: 'Scalables, sécurisées, orientées business.' },
        card3: { title: 'E‑commerce', desc: 'Conversion, performance, internationalisation.' },
        ctaPrimary: 'Commencer', ctaSecondary: 'Voir les projets',
        metrics: { clients: 'Clients', projects: 'Projets', satisfaction: 'Satisfaction', delivery: 'Délai moyen' },
        about: {
          title: 'À propos de moi',
          subtitle: 'Développeur Médior | 4 ans d\'expérience | Ingénieur DevOps',
          bio: 'Bonjour, je suis Kone Djibril Benjamin, mais vous pouvez m\'appeler Ben Djibril. Je suis un développeur Médior avec 4 ans d\'expérience, spécialisé en développement backend avec Spring Boot et en développement mobile avec Kotlin (pas que du natif). Je suis passionné par la création de solutions digitales robustes et scalables qui aident les entreprises à prospérer à l\'ère du numérique.',
          bioExtended: 'En tant qu\'ingénieur DevOps, j\'excelle en développement backend et mobile, avec des compétences frontend solides qui font de moi un développeur full-stack complet. Mon expertise s\'étend de la création d\'APIs RESTful avec Spring Boot au développement d\'applications mobiles cross-platform avec Kotlin Multiplatform. Je travaille beaucoup avec les technologies cloud modernes, la conteneurisation et les pipelines CI/CD pour livrer des solutions de haute qualité.',
          languages: 'Langues',
          languagesDesc: 'Français natif, anglais niveau intermédiaire',
          realName: 'Nom complet',
          publicName: 'Nom public',
          experience: 'Expérience',
          level: 'Niveau',
          specialties: 'Spécialités',
          techStack: 'Stack Technologique',
          techStackDesc: 'Technologies et outils que je maîtrise et utilise au quotidien',
          certifications: 'Certifications',
          contactMe: 'Intéressé par mon profil ?',
          contactDesc: 'Discutons de votre projet et voyons comment je peux vous aider',
          contactBtn: 'Me contacter'
        }
      },
      services: {
        title: 'Services',
        subtitle: 'Solutions sur mesure pour vos besoins digitaux',
        packageStarter: 'Starter', packagePro: 'Professionnel', packageEnterprise: 'Enterprise',
        features: 'Fonctionnalités', getStarted: 'Commencer', mostPopular: 'Le plus populaire',
        serviceWebDev: { title: 'Développement Web', desc: 'Sites web modernes et responsives', feature1: 'Design responsive', feature2: 'Optimisation SEO', feature3: 'Chargement rapide', feature4: 'Frameworks modernes' },
        serviceShowcase: { title: 'Sites Vitrines', desc: 'Sites vitrines professionnels', feature1: 'Design sur mesure', feature2: 'SEO optimisé', feature3: 'Formulaires de contact', feature4: 'Performance optimale' },
        servicePortfolio: { title: 'Portfolio', desc: 'Portfolios personnels ou professionnels', feature1: 'Design créatif', feature2: 'Présentation de projets', feature3: 'Intégration CV', feature4: 'Liens réseaux sociaux' },
        serviceEcom: { title: 'E-commerce', desc: 'Boutiques en ligne qui convertissent', feature1: 'Intégration paiement', feature2: 'Gestion des stocks', feature3: 'Panier d\'achat', feature4: 'Tableau de bord admin' },
        serviceApp: { title: 'Applications Web', desc: 'Solutions métier sur mesure', feature1: 'Fonctionnalités personnalisées', feature2: 'Authentification utilisateur', feature3: 'Intégration base de données', feature4: 'Développement API' },
        serviceMobile: { title: 'Applications Mobile', desc: 'Apps mobiles cross-platform', feature1: 'iOS & Android', feature2: 'Kotlin Multiplatform', feature3: 'Performance native', feature4: 'Support hors ligne' },
        serviceDesktop: { title: 'Applications Desktop', desc: 'Applications desktop natives', feature1: 'Cross-platform', feature2: 'Interface native', feature3: 'Intégration système', feature4: 'Mode hors ligne' },
        serviceAPI: { title: 'Développement API', desc: 'APIs RESTful et GraphQL', feature1: 'API REST', feature2: 'GraphQL', feature3: 'Documentation', feature4: 'Sécurité & Auth' },
        serviceDevOps: { title: 'DevOps & Cloud', desc: 'Infrastructure et déploiement', feature1: 'Pipelines CI/CD', feature2: 'Docker & Kubernetes', feature3: 'Déploiement cloud', feature4: 'Monitoring & Logs' },
        serviceConsult: { title: 'Conseil', desc: 'Conseil expert et audits', feature1: 'Revue de code', feature2: 'Audit architecture', feature3: 'Optimisation performance', feature4: 'Conseil technique' }
      },
      projects: {
        title: 'Projets',
        subtitle: 'De vraies solutions pour de vraies entreprises',
        viewProject: 'Voir le projet', viewCode: 'Voir le code', problem: 'Problème', solution: 'Solution', impact: 'Impact',
        tags: 'Technologies'
      },
      testimonials: {
        title: 'Ce que disent les clients',
        subtitle: 'Recommandé par des entreprises du monde entier'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Discutons de votre projet',
        send: 'Envoyer',
        name: 'Votre nom',
        email: 'Email',
        message: 'Message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi. Veuillez réessayer.',
        required: 'Ce champ est requis',
        invalidEmail: 'Adresse email invalide'
      },
      notFound: { title: 'Page introuvable', back: 'Retour à l\'accueil' },
    }
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  })

export default i18n


