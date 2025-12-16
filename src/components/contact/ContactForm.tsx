import { useState, useEffect, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  CheckCircleIcon, 
  ExclamationCircleIcon,
  PaperAirplaneIcon,
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/solid'
import { EMAILJS_CONFIG, isEmailJSConfigured } from '../../config/emailjs'

const FORM_STORAGE_KEY = 'contact_form_draft'
const MIN_MESSAGE_LENGTH = 10
const MAX_MESSAGE_LENGTH = 2000

function ContactForm() {
  const { t } = useTranslation()
  
  // Charger les données sauvegardées au montage
  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem(FORM_STORAGE_KEY)
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (error) {
      console.error('Error loading saved form data:', error)
    }
    return { name: '', email: '', subject: '', message: '' }
  }

  const [formData, setFormData] = useState(loadSavedData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Sauvegarder automatiquement dans localStorage
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData))
      } catch (error) {
        console.error('Error saving form data:', error)
      }
    }, 500) // Debounce de 500ms

    return () => clearTimeout(timeoutId)
  }, [formData])

  // Nettoyer le localStorage après envoi réussi
  const clearSavedData = () => {
    try {
      localStorage.removeItem(FORM_STORAGE_KEY)
    } catch (error) {
      console.error('Error clearing saved form data:', error)
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.required') as string
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.required') as string
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.invalidEmail') as string
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.required') as string
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.required') as string
    } else if (formData.message.trim().length < MIN_MESSAGE_LENGTH) {
      newErrors.message = t('contact.form.errors.messageTooShort') as string
    } else if (formData.message.trim().length > MAX_MESSAGE_LENGTH) {
      newErrors.message = t('contact.form.errors.messageTooLong') as string
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      if (isEmailJSConfigured()) {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        )
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        // Mode développement : simuler l'envoi
        console.warn('EmailJS non configuré. Mode simulation activé.')
        await new Promise(resolve => setTimeout(resolve, 1000))
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('contact.form.title')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              {t('contact.form.subtitle')}
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="card space-y-6 shadow-xl dark:shadow-2xl"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
                {t('contact.form.name')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-secondary-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3.5 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.name 
                      ? 'border-danger-500 focus:ring-danger-500' 
                      : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder={t('contact.form.namePlaceholder') as string}
                />
              </div>
              {errors.name && (
                <p className="text-danger-500 text-sm mt-2 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
                {t('contact.form.email')}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-secondary-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-12 pr-4 py-3.5 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email 
                      ? 'border-danger-500 focus:ring-danger-500' 
                      : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder={t('contact.form.emailPlaceholder') as string}
                />
              </div>
              {errors.email && (
                <p className="text-danger-500 text-sm mt-2 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-secondary-900 dark:text-white">
                {t('contact.form.subject')}
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={`w-full px-4 py-3.5 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.subject 
                    ? 'border-danger-500 focus:ring-danger-500' 
                    : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                }`}
                placeholder={t('contact.form.subjectPlaceholder') as string}
              />
              {errors.subject && (
                <p className="text-danger-500 text-sm mt-2 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="message" className="block text-sm font-semibold text-secondary-900 dark:text-white">
                  {t('contact.form.message')}
                </label>
                <div className="flex items-center gap-2 text-xs text-secondary-500 dark:text-secondary-400">
                  <span className={formData.message.length > MAX_MESSAGE_LENGTH ? 'text-danger-500' : ''}>
                    {formData.message.length} / {MAX_MESSAGE_LENGTH}
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-secondary-400" />
                </div>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
                      setFormData({ ...formData, message: e.target.value })
                    }
                  }}
                  rows={6}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className={`w-full pl-12 pr-4 py-3.5 border rounded-xl bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? 'border-danger-500 focus:ring-danger-500' 
                      : formData.message.length > MAX_MESSAGE_LENGTH * 0.9
                      ? 'border-warning-500 focus:ring-warning-500'
                      : 'border-secondary-300 dark:border-secondary-600 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder={t('contact.form.messagePlaceholder') as string}
                />
              </div>
              {errors.message && (
                <p className="text-danger-500 text-sm mt-2 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.message}
                </p>
              )}
              {formData.message.length > 0 && formData.message.length < MIN_MESSAGE_LENGTH && (
                <p className="text-warning-600 dark:text-warning-400 text-sm mt-2 flex items-center gap-1">
                  <InformationCircleIcon className="w-4 h-4" />
                  {t('contact.form.errors.messageTooShort')} ({MIN_MESSAGE_LENGTH} {t('contact.form.errors.charactersMin')})
                </p>
              )}
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-success-600 dark:text-success-400 bg-success-50 dark:bg-success-900/20 p-4 rounded-xl border border-success-200 dark:border-success-800"
              >
                <CheckCircleIcon className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{t('contact.form.success')}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-danger-600 dark:text-danger-400 bg-danger-50 dark:bg-danger-900/20 p-4 rounded-xl border border-danger-200 dark:border-danger-800"
              >
                <ExclamationCircleIcon className="w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{t('contact.form.error')}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
              whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
              className="btn-primary w-full text-center py-4 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  {t('contact.form.sending')}
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="w-5 h-5" />
                  {t('contact.form.send')}
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm
