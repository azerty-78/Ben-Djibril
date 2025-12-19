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
        home: 'Home', services: 'Services', projects: 'Projects', about: 'About', contact: 'Contact',
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
        segmentedCta: {
          business: 'I am a company / organization',
          individual: 'I am an individual / freelancer',
        },
        trustBar: {
          experience: '4+ years of experience',
          satisfaction: '100% client satisfaction',
          responseTime: 'Response under 24h',
        },
        videoTeaser: {
          badge: 'New',
          title: 'Discover my profile in 30 seconds',
          subtitle: 'Understand how I work, the type of projects I take on, and what you can expect from our collaboration.',
          cta: 'Watch the short intro',
        },
        services: {
          title: 'My Services',
          subtitle: 'Complete solutions for your digital needs',
          learnMore: 'Learn more',
          viewAll: 'View all services',
          newTag: 'New',
        },
        microTestimonial: {
          quote: 'Ben quickly understood our needs and delivered a solution that exceeded our expectations. Excellent communication and on-time delivery.',
          author: 'Satisfied Client',
          role: 'E-commerce Project',
          cta: 'See all testimonials',
        },
        cta: {
          title: 'Ready to start your project?',
          description: 'Let\'s discuss your project and create something amazing together',
          contactBtn: 'Contact Me',
          projectsBtn: 'View My Work',
          responseTime: 'Response under 24h',
          freeQuote: 'Free quote',
          freeConsultation: 'Free consultation',
        },
        clients: {
          title: 'Trusted by companies worldwide',
        },
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
        heroCtaSaas: 'View SaaS offers',
        heroCtaFull: 'View Full Control offers',
        heroCompare: {
          title: 'Which model is best for you?',
          rows: {
            ownership: {
              label: 'Code & project ownership',
              saas: 'I manage the infrastructure and code',
              full: 'You fully own the code and project'
            },
            billing: {
              label: 'Billing',
              saas: 'Monthly subscription',
              full: 'One-time project fee'
            },
            hosting: {
              label: 'Hosting & maintenance',
              saas: 'Included and fully managed',
              full: 'You choose where and how to host'
            },
            ideal: {
              label: 'Ideal for',
              saas: 'Startups & flexible budgets',
              full: 'Long-term projects & full control'
            }
          }
        },
        packagesTitle: 'Our Offers',
        packagesSubtitle: 'Two billing models adapted to how you want to manage your project',
        allServicesTitle: 'All Our Services',
        allServicesSubtitle: 'Complete solutions for all your digital needs',
        filters: {
          all: 'All',
          web: 'Websites & Showcases',
          ecommerce: 'E-commerce & POS',
          apps: 'Web & Mobile Apps',
          business: 'Business & Operations',
          vertical: 'Industry-specific'
        },
        sectors: {
          generic: 'General',
          personal: 'Personal / Portfolio',
          retail: 'Retail & Commerce',
          apps: 'Applications',
          internal: 'Internal Tools',
          backend: 'APIs & Integrations',
          infrastructure: 'Infrastructure & DevOps',
          consulting: 'Consulting',
          finance: 'Finance & Accounting',
          operations: 'Operations',
          crm: 'CRM & Clients',
          logistics: 'Logistics & Delivery',
          services: 'Services & Appointments',
          health: 'Health',
          sport: 'Sport & Fitness',
          beauty: 'Beauty & Care',
          realEstate: 'Real Estate & Rentals',
          hr: 'HR & Human Resources',
          marketplace: 'Marketplace',
          mobility: 'Mobility & Parking',
          education: 'Education'
        },
        actions: {
          more: 'Learn more',
          contact: 'Request a quote'
        },
        packageStarter: 'Starter', packagePro: 'Professional', packageEnterprise: 'Enterprise',
        features: 'Features', getStarted: 'Get Started', mostPopular: 'Most Popular', bestValue: 'Best value',
        idealForLabel: 'Ideal for',
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
          serviceContextTitle: 'You selected a specific service',
          serviceContextDescription: 'You are contacting me about: {{service}}. Give me a bit of context so I can answer with a precise proposal.',
          defaultSubjectPrefix: 'Request a quote for',
          defaultMessagePrefix: 'Hello, I would like to discuss a project about',
          errors: {
        required: 'This field is required',
            invalidEmail: 'Please enter a valid email address',
            messageTooShort: 'Message must be at least 10 characters',
            messageTooLong: 'Message is too long (max 2000 characters)',
            charactersMin: 'characters minimum',
            networkOffline: 'You appear to be offline. Please check your internet connection.',
            networkError: 'Network error. Please check your connection and try again.'
          },
          preferredContact: 'Preferred Contact Method',
          contactMethods: {
            email: 'Email',
            phone: 'Phone',
            whatsapp: 'WhatsApp',
            any: 'Any'
          },
          suggestions: {
            title: 'Suggested subjects',
            project: 'New Project Inquiry',
            quote: 'Request a Quote',
            support: 'Support Request',
            collaboration: 'Collaboration Opportunity',
            question: 'General Question'
          },
          keyboardShortcut: 'Press Ctrl/Cmd + Enter to submit',
          errorHelp: 'You can also contact me directly via email or phone.'
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
        },
        stats: {
          title: 'Contact Statistics',
          subtitle: 'My commitment to excellent communication',
          responseTime: 'Average Response Time',
          satisfaction: 'Client Satisfaction',
          messages: 'Messages Handled',
          rating: 'Average Rating'
        },
        faq: {
          title: 'Frequently Asked Questions',
          subtitle: 'Find answers to common questions about working with me',
          stillHaveQuestions: 'Still have questions?',
          contactDirectly: 'Contact me directly',
          items: {
            howLong: {
              question: 'How long does it take to get a response?',
              answer: 'I typically respond to all inquiries within 24 hours, often much sooner. For urgent matters, you can reach me directly via phone or WhatsApp.'
            },
            pricing: {
              question: 'How do you price your projects?',
              answer: 'Pricing depends on the scope, complexity, and timeline of your project. I offer both SaaS (subscription-based) and Full Control (one-time payment) models. Contact me for a free, personalized quote.'
            },
            process: {
              question: 'What is your development process?',
              answer: 'My process includes: 1) Initial consultation to understand your needs, 2) Proposal and quote, 3) Project planning and design, 4) Development with regular updates, 5) Testing and deployment, 6) Ongoing support and maintenance.'
            },
            remote: {
              question: 'Do you work remotely?',
              answer: 'Yes! I work with clients worldwide remotely. I\'m based in Yaoundé, Cameroon, but I\'m available for remote collaboration across different time zones.'
            },
            languages: {
              question: 'What languages do you speak?',
              answer: 'I\'m a native French speaker and have an intermediate level in English. I can communicate effectively in both languages for project discussions and documentation.'
            },
            support: {
              question: 'Do you provide ongoing support?',
              answer: 'Yes, I offer ongoing support and maintenance packages. This includes bug fixes, updates, security patches, and feature additions. Support terms are discussed and agreed upon before project start.'
            }
          }
        },
        nextSteps: {
          title: 'What Happens Next?',
          subtitle: 'Here\'s what to expect after sending your message',
          steps: {
            confirmation: {
              title: 'Message Received',
              description: 'Your message has been successfully sent and I\'ve received it.'
            },
            response: {
              title: 'Quick Response',
              description: 'I\'ll review your message and respond within 24 hours, usually much sooner.'
            },
            discussion: {
              title: 'Let\'s Discuss',
              description: 'We\'ll discuss your project needs and find the best solution together.'
            }
          },
          contactMethods: {
            email: 'Email Me Directly',
            phone: 'Call Me Now',
            whatsapp: 'Chat on WhatsApp',
            any: 'Contact Me'
          },
          viewProjects: 'View My Projects'
        },
        availability: {
          title: 'Current Availability',
          available: 'Available Now',
          unavailable: 'Currently Offline',
          currentTime: 'Current time',
          hours: 'Available Monday to Friday, 9 AM - 6 PM (WAT). For urgent matters, feel free to contact me anytime.'
        },
        whyChoose: {
          title: 'Why Choose Me?',
          subtitle: 'What sets me apart and makes me the right choice for your project',
          features: {
            response: {
              title: 'Fast Response',
              description: 'I respond to all inquiries within 24 hours, often much sooner. Quick communication is key to project success.'
            },
            quality: {
              title: 'Quality Guaranteed',
              description: 'I deliver high-quality code, following best practices and industry standards. Your project is in safe hands.'
            },
            pricing: {
              title: 'Transparent Pricing',
              description: 'Clear, upfront pricing with no hidden fees. Choose between SaaS or Full Control models that fit your budget.'
            },
            experience: {
              title: '4+ Years Experience',
              description: 'With 4 years of experience in backend, mobile, and DevOps, I bring expertise to every project.'
            },
            remote: {
              title: 'Remote Collaboration',
              description: 'Work with me from anywhere in the world. I\'m experienced in remote collaboration across time zones.'
            },
            support: {
              title: 'Ongoing Support',
              description: 'I provide continuous support and maintenance to ensure your project stays up-to-date and secure.'
            }
          }
        },
        testimonials: {
          title: 'What Clients Say About Working With Me',
          subtitle: 'Real feedback from clients who have experienced my communication and service',
          items: {
            client1: {
              name: 'Sarah M.',
              role: 'CEO',
              company: 'Tech Startup',
              content: 'Ben responded to my inquiry within hours and was incredibly professional throughout the entire project. His communication was clear and he always kept me updated.'
            },
            client2: {
              name: 'Jean-Pierre K.',
              role: 'Director',
              company: 'Educational Institution',
              content: 'Working with Ben was a pleasure. He understood our needs quickly and delivered exactly what we asked for. Highly recommend his services!'
            },
            client3: {
              name: 'Marie L.',
              role: 'Founder',
              company: 'E-commerce Business',
              content: 'Ben\'s responsiveness and attention to detail made our collaboration smooth. He was always available to answer questions and provide updates.'
            }
          }
        }
      },
      seo: {
        default: {
          title: 'Ben Djibril - DevOps Engineer | Professional Portfolio',
          description: 'Professional portfolio of Ben Djibril - DevOps Engineer specialized in backend, mobile, and DevOps development. International quality services.',
          keywords: 'DevOps, Backend, Mobile, Kotlin, Spring Boot, React, Portfolio, Developer, Full Stack'
        },
        home: {
          title: 'Ben Djibril - DevOps Engineer | Professional Portfolio',
          description: 'DevOps Engineer with 4 years of experience. Specialized in backend development with Spring Boot and mobile development with Kotlin Multiplatform. Creating robust, scalable digital solutions.',
          keywords: 'DevOps Engineer, Backend Developer, Mobile Developer, Spring Boot, Kotlin, Full Stack Developer, Portfolio'
        },
        services: {
          title: 'Services - Ben Djibril | Web, Mobile & DevOps Solutions',
          description: 'Professional development services: Web applications, Mobile apps, E-commerce, APIs, DevOps & Cloud. SaaS and Full Control billing models. Free quotes available.',
          keywords: 'Web Development, Mobile Apps, E-commerce, API Development, DevOps, Cloud Services, SaaS, Full Stack Development'
        },
        projects: {
          title: 'Projects - Ben Djibril | Portfolio of Realized Projects',
          description: 'Discover my portfolio of completed projects: web applications, mobile apps, e-commerce platforms, and DevOps solutions. Real client testimonials included.',
          keywords: 'Portfolio, Projects, Web Applications, Mobile Apps, E-commerce, Case Studies, Client Testimonials'
        },
        about: {
          title: 'About - Ben Djibril | DevOps Engineer Profile',
          description: 'Learn more about Ben Djibril: Medior Developer with 4 years of experience, specialized in backend and mobile development. Technology stack, certifications, and expertise.',
          keywords: 'About, Developer Profile, DevOps Engineer, Technology Stack, Certifications, Experience, Skills'
        },
        contact: {
          title: 'Contact - Ben Djibril | Get in Touch',
          description: 'Contact Ben Djibril for your development projects. Free quotes, 24h response time. Available worldwide. Discuss your web, mobile, or DevOps project.',
          keywords: 'Contact, Quote, Development Services, Consultation, Project Discussion, Get in Touch'
        }
      },
      notFound: { title: 'Page not found', back: 'Back to home' },
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', contact: 'Contact',
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
        segmentedCta: {
          business: 'Je suis une entreprise / organisation',
          individual: 'Je suis un particulier / freelance',
        },
        trustBar: {
          experience: '4+ ans d’expérience',
          satisfaction: '100% de satisfaction client',
          responseTime: 'Réponse sous 24h',
        },
        videoTeaser: {
          badge: 'Nouveau',
          title: 'Découvre mon profil en 30 secondes',
          subtitle: 'Comprends rapidement comment je travaille, les types de projets que je prends et ce que tu peux attendre de notre collaboration.',
          cta: 'Voir la courte présentation',
        },
        services: {
          title: 'Mes Services',
          subtitle: 'Solutions complètes pour vos besoins digitaux',
          learnMore: 'En savoir plus',
          viewAll: 'Voir tous les services',
          newTag: 'Nouveau',
        },
        microTestimonial: {
          quote: 'Ben a su comprendre nos besoins rapidement et livrer une solution qui dépasse nos attentes. Communication excellente et livraison dans les temps.',
          author: 'Client satisfait',
          role: 'Projet e-commerce',
          cta: 'Voir tous les témoignages',
        },
        cta: {
          title: 'Prêt à démarrer votre projet ?',
          description: 'Discutons de votre projet et créons ensemble quelque chose d\'extraordinaire',
          contactBtn: 'Me contacter',
          projectsBtn: 'Voir mes réalisations',
          responseTime: 'Réponse sous 24h',
          freeQuote: 'Devis gratuit',
          freeConsultation: 'Consultation gratuite',
        },
        clients: {
          title: 'Recommandé par des entreprises du monde entier',
        },
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
        heroCtaSaas: 'Voir les offres SaaS',
        heroCtaFull: 'Voir les offres Full Control',
        heroCompare: {
          title: 'Quel modèle est fait pour vous ?',
          rows: {
            ownership: {
              label: 'Propriété du code & du projet',
              saas: 'Je gère l’infrastructure et le code',
              full: 'Vous possédez totalement le code et le projet'
            },
            billing: {
              label: 'Facturation',
              saas: 'Abonnement mensuel',
              full: 'Paiement unique de projet'
            },
            hosting: {
              label: 'Hébergement & maintenance',
              saas: 'Inclus et entièrement géré',
              full: 'Vous choisissez où et comment héberger'
            },
            ideal: {
              label: 'Idéal pour',
              saas: 'Startups & budgets flexibles',
              full: 'Projets long terme & contrôle total'
            }
          }
        },
        packagesTitle: 'Nos Offres',
        packagesSubtitle: 'Deux modèles de facturation selon la façon dont vous voulez gérer votre projet',
        allServicesTitle: 'Tous nos Services',
        allServicesSubtitle: 'Des solutions complètes pour tous vos besoins digitaux',
        filters: {
          all: 'Tous',
          web: 'Sites & Vitrines',
          ecommerce: 'E-commerce & Caisse',
          apps: 'Apps Web & Mobile',
          business: 'Business & Gestion',
          vertical: 'Métiers spécifiques'
        },
        sectors: {
          generic: 'Général',
          personal: 'Personnel / Portfolio',
          retail: 'Retail & Commerce',
          apps: 'Applications',
          internal: 'Outils internes',
          backend: 'APIs & Intégrations',
          infrastructure: 'Infrastructure & DevOps',
          consulting: 'Conseil',
          finance: 'Finance & Comptabilité',
          operations: 'Opérations',
          crm: 'CRM & Clients',
          logistics: 'Logistique & Livraison',
          services: 'Services & Rendez-vous',
          health: 'Santé',
          sport: 'Sport & Fitness',
          beauty: 'Beauté & Bien-être',
          realEstate: 'Immobilier & Location',
          hr: 'RH & Ressources humaines',
          marketplace: 'Marketplace',
          mobility: 'Mobilité & Parking',
          education: 'Éducation'
        },
        actions: {
          more: 'En savoir plus',
          contact: 'Demander un devis'
        },
        packageStarter: 'Starter', packagePro: 'Professionnel', packageEnterprise: 'Enterprise',
        features: 'Fonctionnalités', getStarted: 'Commencer', mostPopular: 'Le plus populaire', bestValue: 'Meilleur rapport qualité / prix',
        idealForLabel: 'Idéal pour',
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
          serviceContextTitle: 'Service sélectionné',
          serviceContextDescription: 'Vous me contactez à propos de : {{service}}. Donnez-moi quelques détails pour que je puisse vous répondre avec une proposition adaptée.',
          defaultSubjectPrefix: 'Demande de devis pour',
          defaultMessagePrefix: 'Bonjour, je souhaite discuter d\'un projet concernant',
          errors: {
        required: 'Ce champ est requis',
            invalidEmail: 'Veuillez entrer une adresse email valide',
            messageTooShort: 'Le message doit contenir au moins 10 caractères',
            messageTooLong: 'Le message est trop long (maximum 2000 caractères)',
            charactersMin: 'caractères minimum',
            networkOffline: 'Vous semblez être hors ligne. Veuillez vérifier votre connexion internet.',
            networkError: 'Erreur réseau. Veuillez vérifier votre connexion et réessayer.'
          },
          preferredContact: 'Méthode de Contact Préférée',
          contactMethods: {
            email: 'Email',
            phone: 'Téléphone',
            whatsapp: 'WhatsApp',
            any: 'Peu importe'
          },
          suggestions: {
            title: 'Sujets suggérés',
            project: 'Demande de Nouveau Projet',
            quote: 'Demande de Devis',
            support: 'Demande de Support',
            collaboration: 'Opportunité de Collaboration',
            question: 'Question Générale'
          },
          keyboardShortcut: 'Appuyez sur Ctrl/Cmd + Entrée pour envoyer',
          errorHelp: 'Vous pouvez également me contacter directement par email ou téléphone.'
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
        },
        stats: {
          title: 'Statistiques de Contact',
          subtitle: 'Mon engagement pour une communication excellente',
          responseTime: 'Temps de Réponse Moyen',
          satisfaction: 'Satisfaction Client',
          messages: 'Messages Traités',
          rating: 'Note Moyenne'
        },
        faq: {
          title: 'Questions Fréquemment Posées',
          subtitle: 'Trouvez des réponses aux questions courantes sur le travail avec moi',
          stillHaveQuestions: 'Vous avez encore des questions ?',
          contactDirectly: 'Contactez-moi directement',
          items: {
            howLong: {
              question: 'Combien de temps faut-il pour obtenir une réponse ?',
              answer: 'Je réponds généralement à toutes les demandes sous 24 heures, souvent beaucoup plus rapidement. Pour les questions urgentes, vous pouvez me joindre directement par téléphone ou WhatsApp.'
            },
            pricing: {
              question: 'Comment tarifiez-vous vos projets ?',
              answer: 'Le tarif dépend de la portée, de la complexité et du délai de votre projet. Je propose deux modèles : SaaS (abonnement mensuel) et Full Control (paiement unique). Contactez-moi pour un devis gratuit et personnalisé.'
            },
            process: {
              question: 'Quel est votre processus de développement ?',
              answer: 'Mon processus comprend : 1) Consultation initiale pour comprendre vos besoins, 2) Proposition et devis, 3) Planification et conception du projet, 4) Développement avec mises à jour régulières, 5) Tests et déploiement, 6) Support et maintenance continus.'
            },
            remote: {
              question: 'Travaillez-vous à distance ?',
              answer: 'Oui ! Je travaille avec des clients du monde entier à distance. Je suis basé à Yaoundé, Cameroun, mais je suis disponible pour une collaboration à distance dans différents fuseaux horaires.'
            },
            languages: {
              question: 'Quelles langues parlez-vous ?',
              answer: 'Je suis francophone natif et j\'ai un niveau intermédiaire en anglais. Je peux communiquer efficacement dans les deux langues pour les discussions de projet et la documentation.'
            },
            support: {
              question: 'Fournissez-vous un support continu ?',
              answer: 'Oui, je propose des forfaits de support et de maintenance continus. Cela inclut les corrections de bugs, les mises à jour, les correctifs de sécurité et les ajouts de fonctionnalités. Les conditions de support sont discutées et convenues avant le début du projet.'
            }
          }
        },
        nextSteps: {
          title: 'Prochaines Étapes ?',
          subtitle: 'Voici ce à quoi vous pouvez vous attendre après l\'envoi de votre message',
          steps: {
            confirmation: {
              title: 'Message Reçu',
              description: 'Votre message a été envoyé avec succès et je l\'ai bien reçu.'
            },
            response: {
              title: 'Réponse Rapide',
              description: 'Je vais examiner votre message et répondre sous 24 heures, souvent beaucoup plus rapidement.'
            },
            discussion: {
              title: 'Discutons',
              description: 'Nous discuterons de vos besoins de projet et trouverons ensemble la meilleure solution.'
            }
          },
          contactMethods: {
            email: 'M\'envoyer un email',
            phone: 'M\'appeler maintenant',
            whatsapp: 'Chatter sur WhatsApp',
            any: 'Me contacter'
          },
          viewProjects: 'Voir mes réalisations'
        },
        availability: {
          title: 'Disponibilité Actuelle',
          available: 'Disponible Maintenant',
          unavailable: 'Actuellement Hors Ligne',
          currentTime: 'Heure actuelle',
          hours: 'Disponible du lundi au vendredi, 9h - 18h (WAT). Pour les urgences, n\'hésitez pas à me contacter à tout moment.'
        },
        whyChoose: {
          title: 'Pourquoi Me Choisir ?',
          subtitle: 'Ce qui me distingue et fait de moi le bon choix pour votre projet',
          features: {
            response: {
              title: 'Réponse Rapide',
              description: 'Je réponds à toutes les demandes sous 24 heures, souvent beaucoup plus rapidement. Une communication rapide est essentielle au succès du projet.'
            },
            quality: {
              title: 'Qualité Garantie',
              description: 'Je livre un code de haute qualité, en suivant les meilleures pratiques et les standards de l\'industrie. Votre projet est entre de bonnes mains.'
            },
            pricing: {
              title: 'Tarification Transparente',
              description: 'Tarification claire et transparente sans frais cachés. Choisissez entre les modèles SaaS ou Full Control qui correspondent à votre budget.'
            },
            experience: {
              title: '4+ Ans d\'Expérience',
              description: 'Avec 4 ans d\'expérience en backend, mobile et DevOps, j\'apporte de l\'expertise à chaque projet.'
            },
            remote: {
              title: 'Collaboration à Distance',
              description: 'Travaillez avec moi depuis n\'importe où dans le monde. Je suis expérimenté en collaboration à distance à travers les fuseaux horaires.'
            },
            support: {
              title: 'Support Continu',
              description: 'Je fournis un support et une maintenance continus pour garantir que votre projet reste à jour et sécurisé.'
            }
          }
        },
        testimonials: {
          title: 'Ce Que Disent les Clients de Mon Travail',
          subtitle: 'Vrais témoignages de clients qui ont expérimenté ma communication et mon service',
          items: {
            client1: {
              name: 'Sarah M.',
              role: 'PDG',
              company: 'Startup Tech',
              content: 'Ben a répondu à ma demande en quelques heures et a été incroyablement professionnel tout au long du projet. Sa communication était claire et il me tenait toujours informée.'
            },
            client2: {
              name: 'Jean-Pierre K.',
              role: 'Directeur',
              company: 'Institution Éducative',
              content: 'Travailler avec Ben a été un plaisir. Il a rapidement compris nos besoins et a livré exactement ce que nous avions demandé. Je recommande vivement ses services !'
            },
            client3: {
              name: 'Marie L.',
              role: 'Fondatrice',
              company: 'Entreprise E-commerce',
              content: 'La réactivité de Ben et son attention aux détails ont rendu notre collaboration fluide. Il était toujours disponible pour répondre aux questions et fournir des mises à jour.'
            }
          }
        }
      },
      seo: {
        default: {
          title: 'Ben Djibril - Ingénieur DevOps | Portfolio Professionnel',
          description: 'Portfolio professionnel de Ben Djibril - Ingénieur DevOps spécialisé en développement backend, mobile et DevOps. Services internationaux de qualité.',
          keywords: 'DevOps, Backend, Mobile, Kotlin, Spring Boot, React, Portfolio, Développeur, Full Stack'
        },
        home: {
          title: 'Ben Djibril - Ingénieur DevOps | Portfolio Professionnel',
          description: 'Ingénieur DevOps avec 4 ans d\'expérience. Spécialisé en développement backend avec Spring Boot et développement mobile avec Kotlin Multiplatform. Création de solutions digitales robustes et scalables.',
          keywords: 'Ingénieur DevOps, Développeur Backend, Développeur Mobile, Spring Boot, Kotlin, Développeur Full Stack, Portfolio'
        },
        services: {
          title: 'Services - Ben Djibril | Solutions Web, Mobile & DevOps',
          description: 'Services de développement professionnels : Applications web, Apps mobiles, E-commerce, APIs, DevOps & Cloud. Modèles de facturation SaaS et Full Control. Devis gratuits disponibles.',
          keywords: 'Développement Web, Applications Mobiles, E-commerce, Développement API, DevOps, Services Cloud, SaaS, Développement Full Stack'
        },
        projects: {
          title: 'Projets - Ben Djibril | Portfolio de Projets Réalisés',
          description: 'Découvrez mon portfolio de projets réalisés : applications web, apps mobiles, plateformes e-commerce et solutions DevOps. Témoignages clients inclus.',
          keywords: 'Portfolio, Projets, Applications Web, Applications Mobiles, E-commerce, Études de Cas, Témoignages Clients'
        },
        about: {
          title: 'À propos - Ben Djibril | Profil Ingénieur DevOps',
          description: 'En savoir plus sur Ben Djibril : Développeur Medior avec 4 ans d\'expérience, spécialisé en développement backend et mobile. Stack technologique, certifications et expertise.',
          keywords: 'À propos, Profil Développeur, Ingénieur DevOps, Stack Technologique, Certifications, Expérience, Compétences'
        },
        contact: {
          title: 'Contact - Ben Djibril | Me Contacter',
          description: 'Contactez Ben Djibril pour vos projets de développement. Devis gratuits, réponse sous 24h. Disponible dans le monde entier. Discutez de votre projet web, mobile ou DevOps.',
          keywords: 'Contact, Devis, Services de Développement, Consultation, Discussion de Projet, Me Contacter'
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


