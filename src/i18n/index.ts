import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { fullControlTranslations } from './fullControl'

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
        title: 'Services',
        subtitle: 'Tailored solutions for your digital needs',
        packagesTitle: 'Our Offers',
        packagesSubtitle: 'Two billing models adapted to how you want to manage your project',
        allServicesTitle: 'All Our Services',
        allServicesSubtitle: 'Complete solutions for all your digital needs',
        packageStarter: 'Starter', packagePro: 'Professional', packageEnterprise: 'Enterprise',
        features: 'Features', getStarted: 'Get Started', mostPopular: 'Most Popular', bestValue: 'Best value',
        saasTitle: 'SaaS – Simplicity & Monthly Subscription',
        saasSubtitle: 'You only pay a monthly license, I manage the servers, maintenance and updates. The intellectual property and source code remain mine.',
        saasDeliveryNote: 'All SaaS plans are delivered in approximately 2 months.',
        saas: {
          goodDeal: {
            name: 'Good Deal',
            price: '15 500',
            priceUnit: 'F HT/mois',
            description: 'Accessible plan to launch your custom platform at low cost.',
            feature1: 'Secure hosting, maintenance and security updates included',
            feature2: 'Weekly backups and basic performance optimisation',
            feature3: 'Email support with answers within 48 business hours',
            feature4: '1 small content/design change per quarter included',
            annualPrice: 'Annual payment: 156,000 F HT instead of 186,000 F HT',
            annualSaving: 'Save 30,000 F per year compared to monthly payment.',
            annualHighlight: 'Start small: pay once a year and reduce your yearly cost.',
            annualPriceShort: '156 000 F HT/an',
            annualSavingShort: 'Save 30 000 F/year',
          },
          pro: {
            name: 'Pro',
            price: '25 700',
            priceUnit: 'F HT/mois',
            description: 'Balanced plan for growing businesses with regular follow‑up.',
            feature1: 'Dedicated cloud server, daily backups and advanced monitoring',
            feature2: 'Priority support (email + WhatsApp) with answers within 24h',
            feature3: 'Up to 2 functional evolutions per quarter included',
            feature4: 'Staging environment to test before going live',
            annualPrice: 'Annual payment: 258,400 F HT instead of 308,400 F HT',
            annualSaving: 'Save 50,000 F per year compared to monthly payment.',
            annualHighlight: 'Best balance between cost and value with annual billing.',
            annualPriceShort: '258 400 F HT/an',
            annualSavingShort: 'Save 50 000 F/year',
          },
          ultra: {
            name: 'Ultra',
            price: '40 900',
            priceUnit: 'F HT/mois',
            description: 'High‑end plan for demanding projects, with strategic support.',
            feature1: 'Premium infrastructure with very high availability and performance',
            feature2: 'VIP support 7/7 and monthly strategic follow‑up meeting',
            feature3: 'Up to 4 medium‑complexity evolutions per quarter included',
            feature4: 'Detailed reports on performance, security and usage',
            annualPrice: 'Annual payment: 430,800 F HT instead of 490,800 F HT',
            annualSaving: 'Save 60,000 F per year compared to monthly payment.',
            annualHighlight: 'Maximum long‑term value and partnership approach.',
            annualPriceShort: '430 800 F HT/an',
            annualSavingShort: 'Save 60 000 F/year',
          },
        },
        saasComparison: {
          title: 'Detailed comparison of SaaS plans',
          show: 'Show comparison table',
          hide: 'Hide comparison table',
          whichPlan: 'Which plan should you choose?',
          priceMonthly: 'Monthly price',
          priceYearly: 'Yearly price',
          saving: 'Yearly saving (vs monthly)',
          target: 'Best for',
          evolutions: 'Included evolutions per quarter',
          support: 'Support level',
          infrastructure: 'Infrastructure & reliability',
          targetGood: 'Solo entrepreneurs, small local businesses, first website',
          targetPro: 'Growing SMEs needing regular evolutions',
          targetUltra: 'Strategic projects that need maximum reliability & support',
          evolutionsGood: '1 small change / quarter',
          evolutionsPro: 'Up to 2 medium evolutions / quarter',
          evolutionsUltra: 'Up to 4 medium‑complexity evolutions / quarter',
          supportGood: 'Email support within 48 business hours',
          supportPro: 'Priority email + WhatsApp within 24h',
          supportUltra: 'VIP support 7/7 with fast response',
          infrastructureGood: 'Secure shared cloud, weekly backups',
          infrastructurePro: 'Dedicated cloud server, daily backups, monitoring',
          infrastructureUltra: 'Premium infrastructure, very high availability, advanced monitoring',
        },
        details: {
          saas: {
            label: 'SaaS Model',
            priceLabel: 'From',
            billingTitle: 'Monthly or annual billing',
            billingIntro:
              'Each SaaS plan can be paid monthly or in one annual payment with a financial advantage.',
            audienceTitle: 'Who is this model for?',
            audience:
              'Ideal for entrepreneurs and businesses who want to launch quickly, with a controlled monthly cost, without managing servers, deployment or technical maintenance.',
            ownershipTitle: 'Intellectual property & rights',
            ownership:
              'The application is operated in SaaS mode: you use the software and all its features, but the source code and intellectual property remain mine. You can stop at any time according to the terms of the contract.',
            clientResponsibilitiesTitle: 'Your responsibilities',
            clientResponsibilities:
              'Define your business needs, validate the main functional choices, provide content and data, and respect the terms of use and payment deadlines.',
            devResponsibilitiesTitle: 'My responsibilities',
            devResponsibilities:
              'Host and maintain the application, ensure security and updates, monitor performance, correct bugs and implement the evolutions included in the chosen plan.',
            stopTitle: 'If you stop the subscription',
            stop:
              'Access to the application and associated services is suspended after the notice period. A backup of your data can be provided according to the contract, but the code and intellectual property remain mine.',
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
        ...fullControlTranslations.fr,
        title: 'Services',
        subtitle: 'Solutions sur mesure pour vos besoins digitaux',
        packagesTitle: 'Nos Offres',
        packagesSubtitle: 'Deux modèles de facturation selon la façon dont vous voulez gérer votre projet',
        allServicesTitle: 'Tous nos Services',
        allServicesSubtitle: 'Des solutions complètes pour tous vos besoins digitaux',
        packageStarter: 'Starter', packagePro: 'Professionnel', packageEnterprise: 'Enterprise',
        features: 'Fonctionnalités', getStarted: 'Commencer', mostPopular: 'Le plus populaire', bestValue: 'Meilleur rapport qualité / prix',
        saasTitle: 'SaaS – Simplicité & Abonnement mensuel',
        saasSubtitle: "Vous ne payez qu'une licence mensuelle, je gère les serveurs, la maintenance et les mises à jour. La propriété intellectuelle et le code source restent à moi.",
        saasDeliveryNote: 'Tous les forfaits SaaS sont livrés en environ 2 mois.',
        saas: {
          goodDeal: {
            name: 'Good Deal',
            price: '15 500',
            priceUnit: 'F HT/mois',
            description: 'Forfait accessible pour lancer votre plateforme personnalisée à moindre coût.',
            feature1: 'Hébergement sécurisé, maintenance et mises à jour de sécurité inclus',
            feature2: 'Sauvegardes hebdomadaires et optimisation basique des performances',
            feature3: 'Support par email avec réponse sous 48h ouvrées',
            feature4: '1 petite modification de contenu/design par trimestre incluse',
            annualPrice: 'Paiement annuel : 156 000 F HT au lieu de 186 000 F HT',
            annualSaving: 'Économie de 30 000 F par an par rapport au paiement mensuel.',
            annualHighlight: 'Démarrez en douceur : en payant une fois par an, vous réduisez votre coût annuel.',
            annualPriceShort: '156 000 F HT/an',
            annualSavingShort: 'Économie 30 000 F/an',
          },
          pro: {
            name: 'Pro',
            price: '25 700',
            priceUnit: 'F HT/mois',
            description: 'Forfait équilibré pour les entreprises en croissance, avec suivi régulier.',
            feature1: 'Serveur cloud dédié, sauvegardes quotidiennes et monitoring avancé',
            feature2: 'Support prioritaire (email + WhatsApp) avec réponse sous 24h',
            feature3: 'Jusqu\'à 2 évolutions fonctionnelles par trimestre incluses',
            feature4: 'Environnement de pré‑production pour tester avant mise en ligne',
            annualPrice: 'Paiement annuel : 258 400 F HT au lieu de 308 400 F HT',
            annualSaving: 'Économie de 50 000 F par an par rapport au paiement mensuel.',
            annualHighlight: 'Meilleur équilibre coût / valeur avec une facturation annuelle.',
            annualPriceShort: '258 400 F HT/an',
            annualSavingShort: 'Économie 50 000 F/an',
          },
          ultra: {
            name: 'Ultra',
            price: '40 900',
            priceUnit: 'F HT/mois',
            description: 'Forfait haut de gamme pour projets stratégiques, avec accompagnement rapproché.',
            feature1: 'Infrastructure premium très haute disponibilité et performances optimisées',
            feature2: 'Support VIP 7j/7 et réunion stratégique mensuelle',
            feature3: 'Jusqu\'à 4 évolutions fonctionnelles de complexité moyenne par trimestre',
            feature4: 'Rapports détaillés sur performances, sécurité et usage de la plateforme',
            annualPrice: 'Paiement annuel : 430 800 F HT au lieu de 490 800 F HT',
            annualSaving: 'Économie de 60 000 F par an par rapport au paiement mensuel.',
            annualHighlight: 'Valeur maximale sur le long terme et véritable partenariat technique.',
            annualPriceShort: '430 800 F HT/an',
            annualSavingShort: 'Économie 60 000 F/an',
          },
        },
        saasComparison: {
          title: 'Comparaison détaillée des forfaits SaaS',
          show: 'Afficher le tableau comparatif',
          hide: 'Masquer le tableau comparatif',
          whichPlan: 'Quelle formule choisir ?',
          priceMonthly: 'Prix mensuel',
          priceYearly: 'Prix annuel',
          saving: 'Économie annuelle (vs mensuel)',
          target: 'Idéal pour',
          evolutions: 'Évolutions incluses par trimestre',
          support: 'Niveau de support',
          infrastructure: 'Infrastructure & fiabilité',
          targetGood: 'Entrepreneurs solos, petites activités locales, premier site',
          targetPro: 'PME en croissance avec besoins d\'évolutions régulières',
          targetUltra: 'Projets stratégiques exigeant fiabilité et support maximum',
          evolutionsGood: '1 petite modification / trimestre',
          evolutionsPro: 'Jusqu\'à 2 évolutions moyennes / trimestre',
          evolutionsUltra: 'Jusqu\'à 4 évolutions de complexité moyenne / trimestre',
          supportGood: 'Support email sous 48h ouvrées',
          supportPro: 'Support prioritaire email + WhatsApp sous 24h',
          supportUltra: 'Support VIP 7j/7 avec forte réactivité',
          infrastructureGood: 'Cloud sécurisé mutualisé, sauvegardes hebdomadaires',
          infrastructurePro: 'Serveur cloud dédié, sauvegardes quotidiennes, monitoring avancé',
          infrastructureUltra: 'Infrastructure premium, très haute disponibilité, monitoring avancé',
        },
        details: {
          saas: {
            label: 'Modèle SaaS',
            priceLabel: 'À partir de',
            billingTitle: 'Facturation mensuelle ou annuelle',
            billingIntro:
              'Chaque forfait SaaS peut être payé au mois ou en un seul paiement annuel avec un avantage financier clair.',
            audienceTitle: 'Pour qui est ce modèle ?',
            audience:
              'Idéal pour les entrepreneurs et entreprises qui veulent lancer rapidement, avec un coût mensuel maîtrisé, sans gérer les serveurs, le déploiement ou la maintenance technique.',
            ownershipTitle: 'Propriété intellectuelle & droits',
            ownership:
              "L'application est opérée en mode SaaS : vous utilisez le logiciel et toutes ses fonctionnalités, mais le code source et la propriété intellectuelle restent à moi. Vous pouvez arrêter quand vous voulez selon les conditions du contrat.",
            clientResponsibilitiesTitle: 'Vos responsabilités',
            clientResponsibilities:
              "Définir vos besoins métier, valider les grands choix fonctionnels, fournir les contenus et données, et respecter les conditions d'utilisation et les échéances de paiement.",
            devResponsibilitiesTitle: 'Mes responsabilités',
            devResponsibilities:
              "Héberger et maintenir l'application, assurer la sécurité et les mises à jour, surveiller les performances, corriger les bugs et mettre en place les évolutions prévues dans le forfait choisi.",
            stopTitle: "Si vous arrêtez l'abonnement",
            stop:
              "L'accès à l'application et aux services associés est suspendu après le préavis prévu. Une sauvegarde de vos données peut être fournie selon le contrat, mais le code et la propriété intellectuelle restent à moi.",
          },
          fullControl: {
            ...fullControlTranslations.fr.details.fullControl,
          },
          helper:
            'Cette fiche n’est pas un contrat juridique, mais une explication claire de la façon dont le modèle fonctionne. On finalise tout ensemble quand on discute de votre projet.',
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


