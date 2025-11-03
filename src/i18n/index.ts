import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language?.toLowerCase() || 'fr'
const initialLang = savedLang || (browserLang.startsWith('fr') ? 'fr' : 'en')

export const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home', services: 'Services', projects: 'Projects', about: 'About', blog: 'Blog', contact: 'Contact'
      },
      footer: {
        legal: 'Legal notice', privacy: 'Privacy policy', rights: 'All rights reserved.'
      },
      home: {
        title: 'Full‑Stack Developer',
        subtitle: 'I help companies build performant, international digital products.',
        card1: { title: 'Business websites', desc: 'Fast, modern, SEO‑friendly.' },
        card2: { title: 'Web apps', desc: 'Scalable, secure, business‑oriented.' },
        card3: { title: 'E‑commerce', desc: 'Conversion, performance, internationalization.' },
      },
      contact: { title: 'Contact', subtitle: 'Let’s talk about your project.', send: 'Send', name: 'Your name', email: 'Email', message: 'Message' },
      notFound: { title: 'Page not found', back: 'Back to home' },
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil', services: 'Services', projects: 'Projets', about: 'À propos', blog: 'Blog', contact: 'Contact'
      },
      footer: {
        legal: 'Mentions légales', privacy: 'Politique de confidentialité', rights: 'Tous droits réservés.'
      },
      home: {
        title: 'Développeur Full‑Stack',
        subtitle: 'J’aide les entreprises à concevoir des produits digitaux performants et internationaux.',
        card1: { title: 'Sites vitrines', desc: 'Rapides, modernes, SEO‑friendly.' },
        card2: { title: 'Apps web', desc: 'Scalables, sécurisées, orientées business.' },
        card3: { title: 'E‑commerce', desc: 'Conversion, performance, internationalisation.' },
      },
      contact: { title: 'Contact', subtitle: 'Discutons de votre projet.', send: 'Envoyer', name: 'Votre nom', email: 'Email', message: 'Message' },
      notFound: { title: 'Page introuvable', back: 'Retour à l’accueil' },
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


