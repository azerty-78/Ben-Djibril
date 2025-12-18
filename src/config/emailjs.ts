// Configuration EmailJS
// Pour obtenir vos clés, allez sur https://www.emailjs.com/
// 1. Créez un compte
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template email
// 4. Récupérez vos clés dans le dashboard

export const EMAILJS_CONFIG = {
  // Clé publique (Public Key) - Trouvable dans Account > API Keys
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Service ID - Trouvable dans Email Services
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Template ID pour le formulaire de contact
  CONTACT_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'YOUR_CONTACT_TEMPLATE_ID',
  
  // Template ID pour la newsletter
  NEWSLETTER_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID || 'YOUR_NEWSLETTER_TEMPLATE_ID',
}

// Fonction pour vérifier si EmailJS est configuré
export const isEmailJSConfigured = () => {
  return (
    EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
    EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_CONFIG.CONTACT_TEMPLATE_ID !== 'YOUR_CONTACT_TEMPLATE_ID' &&
    EMAILJS_CONFIG.NEWSLETTER_TEMPLATE_ID !== 'YOUR_NEWSLETTER_TEMPLATE_ID'
  )
}










