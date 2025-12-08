import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { fullControlTranslations } from './fullControl'
import { saasTranslations } from './saas'
import { servicesTranslations } from './services'

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
        ...fullControlTranslations.en,
        ...saasTranslations.en,
        title: 'Services',
        subtitle: 'Tailored solutions for your digital needs',
        heroDescription: 'I offer two flexible billing models to suit your needs: SaaS for monthly subscriptions with managed infrastructure, or Full Control for complete ownership of your project.',
        packagesTitle: 'Our Offers',
        packagesSubtitle: 'Two billing models adapted to how you want to manage your project',
        allServicesTitle: 'All Our Services',
        allServicesSubtitle: 'Complete solutions for all your digital needs',
        packageStarter: 'Starter', packagePro: 'Professional', packageEnterprise: 'Enterprise',
        features: 'Features', getStarted: 'Get Started', mostPopular: 'Most Popular', bestValue: 'Best value',
        details: {
          saas: {
            ...saasTranslations.en.details.saas,
          },
          fullControl: {
            ...fullControlTranslations.en.details.fullControl,
          },
          helper:
            'This overview is not a legal contract, but a clear explanation of how the model works. We finalize everything together when we discuss your project.',
          close: 'Close',
          contactCta: 'Discuss this plan',
          chooseServiceCta: 'Choose a service',
          requestQuoteCta: 'Request a quote',
          overviewTitle: 'How this plan works in practice',
        },
        requestQuote: 'Request a quote',
        ctaTitle: 'Ready to start your project?',
        ctaSubtitle: "Let's discuss your needs and find the best solution together",
        ctaButton: 'Contact me now',
        ...servicesTranslations.en,
      },
      projects: {
        title: 'Projects',
        subtitle: 'Real solutions for real businesses',
        description: 'Discover the projects I\'ve built for clients, showcasing innovative solutions and measurable results.',
        viewProject: 'View Project',
        viewCode: 'View Code',
        viewDemo: 'View Demo',
        problem: 'Problem',
        solution: 'Solution',
        impact: 'Impact',
        tags: 'Technologies',
        stack: 'Technology Stack',
        ctaPrimary: 'Start Your Project',
        ctaSecondary: 'View Projects',
        stats: {
          projects: 'Projects',
          clients: 'Clients',
          satisfaction: 'Satisfaction',
          weeks: 'Weeks'
        },
        types: {
          'web-app': 'Web Application',
          'mobile-app': 'Mobile Application',
          'ecommerce': 'E-commerce',
          'portfolio': 'Portfolio',
          'dashboard': 'Dashboard',
          'api': 'API',
          'desktop-app': 'Desktop Application'
        },
        visibility: {
          public: 'Public',
          private: 'Private',
          confidential: 'Confidential'
        },
        grid: {
          title: 'Featured Projects',
          subtitle: 'Explore my portfolio of successful projects',
          filter: 'Filter',
          filterBy: 'Filter by type',
          all: 'All',
          showing: 'Showing',
          projects: 'projects',
          clear: 'Clear filter',
          noProjects: 'No projects found with this filter.'
        },
        cta: {
          title: 'Ready to Start Your Project?',
          subtitle: 'Let\'s work together to bring your vision to life',
          description: 'I\'m always excited to take on new challenges and create innovative solutions.',
          button: 'Get in Touch'
        }
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
        ...fullControlTranslations.fr,
        ...saasTranslations.fr,
        title: 'Services',
        subtitle: 'Solutions sur mesure pour vos besoins digitaux',
        heroDescription: 'Je propose deux modèles de facturation flexibles adaptés à vos besoins : SaaS pour des abonnements mensuels avec infrastructure gérée, ou Full Control pour une propriété complète de votre projet.',
        packagesTitle: 'Nos Offres',
        packagesSubtitle: 'Deux modèles de facturation selon la façon dont vous voulez gérer votre projet',
        allServicesTitle: 'Tous nos Services',
        allServicesSubtitle: 'Des solutions complètes pour tous vos besoins digitaux',
        packageStarter: 'Starter', packagePro: 'Professionnel', packageEnterprise: 'Enterprise',
        features: 'Fonctionnalités', getStarted: 'Commencer', mostPopular: 'Le plus populaire', bestValue: 'Meilleur rapport qualité / prix',
        details: {
          saas: {
            ...saasTranslations.fr.details.saas,
          },
          fullControl: {
            ...fullControlTranslations.fr.details.fullControl,
          },
          helper:
            "Cette fiche n'est pas un contrat juridique, mais une explication claire de la façon dont le modèle fonctionne. On finalise tout ensemble quand on discute de votre projet.",
          close: 'Fermer',
          contactCta: 'Discuter de ce forfait',
          chooseServiceCta: 'Choix du service',
          requestQuoteCta: 'Demander un devis',
          overviewTitle: 'Comment ce forfait fonctionne concrètement',
        },
        requestQuote: 'Demander un devis',
        ctaTitle: 'Prêt à démarrer votre projet ?',
        ctaSubtitle: 'Discutons de vos besoins et trouvons ensemble la meilleure solution',
        ctaButton: 'Contactez-moi maintenant',
        ...servicesTranslations.fr,
      },
      projects: {
        title: 'Projets',
        subtitle: 'De vraies solutions pour de vraies entreprises',
        description: 'Découvrez les projets que j\'ai réalisés pour mes clients, mettant en avant des solutions innovantes et des résultats mesurables.',
        viewProject: 'Voir le projet',
        viewCode: 'Voir le code',
        viewDemo: 'Voir la démo',
        problem: 'Problème',
        solution: 'Solution',
        impact: 'Impact',
        tags: 'Technologies',
        stack: 'Stack Technologique',
        ctaPrimary: 'Démarrer votre projet',
        ctaSecondary: 'Voir les projets',
        stats: {
          projects: 'Projets',
          clients: 'Clients',
          satisfaction: 'Satisfaction',
          weeks: 'Semaines'
        },
        types: {
          'web-app': 'Application Web',
          'mobile-app': 'Application Mobile',
          'ecommerce': 'E-commerce',
          'portfolio': 'Portfolio',
          'dashboard': 'Tableau de Bord',
          'api': 'API',
          'desktop-app': 'Application Desktop'
        },
        visibility: {
          public: 'Public',
          private: 'Privé',
          confidential: 'Confidentiel'
        },
        grid: {
          title: 'Projets en vedette',
          subtitle: 'Explorez mon portfolio de projets réussis',
          filter: 'Filtrer',
          filterBy: 'Filtrer par type',
          all: 'Tous',
          showing: 'Affichage de',
          projects: 'projets',
          clear: 'Effacer le filtre',
          noProjects: 'Aucun projet trouvé avec ce filtre.'
        },
        cta: {
          title: 'Prêt à démarrer votre projet ?',
          subtitle: 'Travaillons ensemble pour donner vie à votre vision',
          description: 'Je suis toujours ravi de relever de nouveaux défis et de créer des solutions innovantes.',
          button: 'Me contacter'
        }
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


