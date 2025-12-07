import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

function FooterNewsletter() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    // Simuler l'envoi de l'email
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
    setEmail('')
    
    // Réinitialiser le message après 3 secondes
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100"
      >
        Newsletter
      </motion.h4>
      <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4 leading-relaxed">
        Recevez les dernières actualités, conseils et études de cas directement dans votre boîte mail.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
            className="w-full border border-secondary-300 dark:border-secondary-600 rounded-lg pl-10 pr-4 py-2.5 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi...' : isSubmitted ? '✓ Abonné !' : "S'abonner"}
        </motion.button>
      </form>

      <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
        <ul className="space-y-2 text-sm">
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Link 
              to="#" 
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {t('footer.legal')}
            </Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Link 
              to="#" 
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors inline-flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {t('footer.privacy')}
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  )
}

export default FooterNewsletter

