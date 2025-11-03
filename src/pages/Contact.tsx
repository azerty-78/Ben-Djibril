import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = t('contact.required') as string
    if (!formData.email.trim()) {
      newErrors.email = t('contact.required') as string
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.invalidEmail') as string
    }
    if (!formData.message.trim()) newErrors.message = t('contact.required') as string
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      // TODO: Remplacer par tes clés EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div className="space-y-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
        <p className="text-xl text-secondary-600 dark:text-secondary-300">{t('contact.subtitle')}</p>
      </motion.div>

      <section className="container mx-auto px-4 max-w-2xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="card space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t('contact.name')}
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full border rounded-lg px-4 py-3 bg-white dark:bg-secondary-800 ${
                errors.name ? 'border-danger-500' : 'border-secondary-300 dark:border-secondary-600'
              }`}
              placeholder={t('contact.name') as string}
            />
            {errors.name && <p className="text-danger-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t('contact.email')}
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full border rounded-lg px-4 py-3 bg-white dark:bg-secondary-800 ${
                errors.email ? 'border-danger-500' : 'border-secondary-300 dark:border-secondary-600'
              }`}
              placeholder={t('contact.email') as string}
            />
            {errors.email && <p className="text-danger-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className={`w-full border rounded-lg px-4 py-3 bg-white dark:bg-secondary-800 ${
                errors.message ? 'border-danger-500' : 'border-secondary-300 dark:border-secondary-600'
              }`}
              placeholder={t('contact.message') as string}
            />
            {errors.message && <p className="text-danger-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {status === 'success' && (
            <div className="flex items-center gap-2 text-success-600 dark:text-success-400 bg-success-50 dark:bg-success-900/20 p-4 rounded-lg">
              <CheckCircleIcon className="w-5 h-5" />
              <span>{t('contact.success')}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-danger-600 dark:text-danger-400 bg-danger-50 dark:bg-danger-900/20 p-4 rounded-lg">
              <ExclamationCircleIcon className="w-5 h-5" />
              <span>{t('contact.error')}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full text-center"
          >
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>
        </motion.form>
      </section>
    </div>
  )
}

export default Contact
