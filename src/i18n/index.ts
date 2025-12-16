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
        viewImages: 'View images',
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
          'web-dev': 'Web Development',
          'showcase': 'Showcase Website',
          'portfolio': 'Portfolio',
          'ecommerce': 'E-commerce',
          'web-app': 'Web Application',
          'mobile': 'Mobile Application',
          'desktop': 'Desktop Application',
          'api': 'API',
          'devops': 'DevOps & Cloud',
          'consulting': 'Consulting',
          'inventory': 'Inventory Management',
          'restaurant': 'Restaurant Management',
          'billing': 'Billing Software',
          'orders': 'Order Management',
          'pos': 'POS System',
          'crm': 'CRM',
          'delivery': 'Delivery Management',
          'booking': 'Booking System',
          'pharmacy': 'Pharmacy Management',
          'gym': 'Gym Management',
          'salon': 'Salon Management',
          'transport': 'Transport Management',
          'rental': 'Rental Management',
          'accounting': 'Accounting Software',
          'payroll': 'Payroll Management',
          'mobile-money': 'Mobile Money',
          'market': 'Marketplace',
          'parking': 'Parking Management',
          'school': 'School Management',
          'hospital': 'Hospital Management'
        },
        images: 'images',
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
          selectPlaceholder: 'Select project type',
          all: 'All Projects',
          showing: 'Showing',
          projects: 'projects',
          clear: 'Clear filter',
          noProjects: {
            title: 'No projects found',
            message: 'No {type} projects available at the moment. Please try another filter.',
            viewAll: 'View All Projects'
          }
        },
        clientTypes: {
          company: 'Company',
          individual: 'Individual',
          startup: 'Startup',
          ngo: 'NGO',
          government: 'Government'
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
        hero: {
          title: 'Get in Touch',
          subtitle: "I'm here to help bring your digital vision to life. Let's discuss your project and create something amazing together.",
          responseTime: 'Response within 24h',
          freeQuote: 'Free quote',
          available: 'Available worldwide'
        },
        form: {
          title: 'Send me a message',
          subtitle: 'Fill out the form below and I\'ll get back to you as soon as possible.',
          name: 'Full Name',
          namePlaceholder: 'John Doe',
          email: 'Email Address',
          emailPlaceholder: 'john@example.com',
          subject: 'Subject',
          subjectPlaceholder: 'Project inquiry',
          message: 'Message',
          messagePlaceholder: 'Tell me about your project...',
          send: 'Send Message',
          sending: 'Sending...',
          success: 'Message sent successfully! I\'ll get back to you soon.',
          error: 'Error sending message. Please try again or contact me directly.',
          errors: {
            required: 'This field is required',
            invalidEmail: 'Please enter a valid email address',
            messageTooShort: 'Message must be at least 10 characters'
          }
        },
        cards: {
          title: 'Other Ways to Reach Me',
          subtitle: 'Choose the method that works best for you',
          email: {
            title: 'Email',
            description: 'Send me an email and I\'ll respond within 24 hours.',
            action: 'Send Email'
          },
          phone: {
            title: 'Phone',
            description: 'Call me directly for urgent matters or quick questions.',
            action: 'Call Now'
          },
          whatsapp: {
            title: 'WhatsApp',
            description: 'Chat with me on WhatsApp for instant communication.',
            action: 'Chat on WhatsApp'
          },
          location: {
            title: 'Location',
            description: 'Based in Yaoundé, Cameroon. Available for remote work worldwide.',
            action: 'View on Map'
          },
          social: {
            title: 'Follow me on social media'
          },
          availability: {
            title: 'Availability',
            description: 'I\'m available Monday to Friday, 9 AM to 6 PM (WAT). For urgent matters, feel free to contact me anytime.'
          }
        },
        map: {
          title: 'Find Me',
          subtitle: 'Located in Yaoundé, Cameroon. Open to remote collaboration worldwide.',
          location: {
            title: 'My Location',
            address: 'Yaoundé, Cameroon',
            action: 'Open in Google Maps'
          },
          timezone: {
            label: 'Timezone',
            value: 'WAT (UTC+1)'
          },
          language: {
            label: 'Languages',
            value: 'FR / EN'
          },
          response: {
            label: 'Response Time',
            value: '< 24 hours'
          }
        },
        cta: {
          title: 'Ready to Start Your Project?',
          subtitle: 'Let\'s work together to bring your digital vision to life',
          benefits: {
            response: 'Response within 24h',
            quote: 'Free quote',
            consultation: 'Free consultation'
          },
          viewProjects: 'View My Projects',
          emailDirect: 'Email Me Directly'
        }
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
        viewImages: 'Voir les images',
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
          'web-dev': 'Développement Web',
          'showcase': 'Site Vitrine',
          'portfolio': 'Portfolio',
          'ecommerce': 'E-commerce',
          'web-app': 'Application Web',
          'mobile': 'Application Mobile',
          'desktop': 'Application Desktop',
          'api': 'API',
          'devops': 'DevOps & Cloud',
          'consulting': 'Conseil',
          'inventory': 'Gestion de Stock',
          'restaurant': 'Gestion de Restaurant',
          'billing': 'Logiciel de Facturation',
          'orders': 'Gestion de Commandes',
          'pos': 'Système de Caisse',
          'crm': 'CRM',
          'delivery': 'Gestion de Livraison',
          'booking': 'Système de Réservation',
          'pharmacy': 'Gestion de Pharmacie',
          'gym': 'Gestion de Salle de Sport',
          'salon': 'Gestion de Salon',
          'transport': 'Gestion de Transport',
          'rental': 'Gestion de Location',
          'accounting': 'Logiciel Comptable',
          'payroll': 'Gestion de Paie',
          'mobile-money': 'Mobile Money',
          'market': 'Place de Marché',
          'parking': 'Gestion de Parking',
          'school': 'Gestion Scolaire',
          'hospital': 'Gestion Hospitalière'
        },
        images: 'images',
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
          selectPlaceholder: 'Sélectionner un type de projet',
          all: 'Tous les projets',
          showing: 'Affichage de',
          projects: 'projets',
          clear: 'Effacer le filtre',
          noProjects: {
            title: 'Aucun projet trouvé',
            message: 'Aucun projet de type {type} disponible pour le moment. Veuillez essayer un autre filtre.',
            viewAll: 'Voir tous les projets'
          }
        },
        clientTypes: {
          company: 'Entreprise',
          individual: 'Particulier',
          startup: 'Startup',
          ngo: 'ONG',
          government: 'Gouvernement'
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
        hero: {
          title: 'Contactez-moi',
          subtitle: 'Je suis là pour vous aider à donner vie à votre vision digitale. Discutons de votre projet et créons quelque chose d\'extraordinaire ensemble.',
          responseTime: 'Réponse sous 24h',
          freeQuote: 'Devis gratuit',
          available: 'Disponible dans le monde entier'
        },
        form: {
          title: 'Envoyez-moi un message',
          subtitle: 'Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais.',
          name: 'Nom complet',
          namePlaceholder: 'Jean Dupont',
          email: 'Adresse email',
          emailPlaceholder: 'jean@exemple.com',
          subject: 'Sujet',
          subjectPlaceholder: 'Demande de projet',
          message: 'Message',
          messagePlaceholder: 'Parlez-moi de votre projet...',
          send: 'Envoyer le message',
          sending: 'Envoi en cours...',
          success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
          error: 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.',
          errors: {
            required: 'Ce champ est requis',
            invalidEmail: 'Veuillez entrer une adresse email valide',
            messageTooShort: 'Le message doit contenir au moins 10 caractères'
          }
        },
        cards: {
          title: 'Autres moyens de me joindre',
          subtitle: 'Choisissez la méthode qui vous convient le mieux',
          email: {
            title: 'Email',
            description: 'Envoyez-moi un email et je répondrai sous 24 heures.',
            action: 'Envoyer un email'
          },
          phone: {
            title: 'Téléphone',
            description: 'Appelez-moi directement pour les questions urgentes ou rapides.',
            action: 'Appeler maintenant'
          },
          whatsapp: {
            title: 'WhatsApp',
            description: 'Discutez avec moi sur WhatsApp pour une communication instantanée.',
            action: 'Chatter sur WhatsApp'
          },
          location: {
            title: 'Localisation',
            description: 'Basé à Yaoundé, Cameroun. Disponible pour le travail à distance dans le monde entier.',
            action: 'Voir sur la carte'
          },
          social: {
            title: 'Suivez-moi sur les réseaux sociaux'
          },
          availability: {
            title: 'Disponibilité',
            description: 'Je suis disponible du lundi au vendredi, de 9h à 18h (WAT). Pour les urgences, n\'hésitez pas à me contacter à tout moment.'
          }
        },
        map: {
          title: 'Me trouver',
          subtitle: 'Situé à Yaoundé, Cameroun. Ouvert à la collaboration à distance dans le monde entier.',
          location: {
            title: 'Ma localisation',
            address: 'Yaoundé, Cameroun',
            action: 'Ouvrir dans Google Maps'
          },
          timezone: {
            label: 'Fuseau horaire',
            value: 'WAT (UTC+1)'
          },
          language: {
            label: 'Langues',
            value: 'FR / EN'
          },
          response: {
            label: 'Temps de réponse',
            value: '< 24 heures'
          }
        },
        cta: {
          title: 'Prêt à démarrer votre projet ?',
          subtitle: 'Travaillons ensemble pour donner vie à votre vision digitale',
          benefits: {
            response: 'Réponse sous 24h',
            quote: 'Devis gratuit',
            consultation: 'Consultation gratuite'
          },
          viewProjects: 'Voir mes réalisations',
          emailDirect: 'M\'envoyer un email'
        }
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


