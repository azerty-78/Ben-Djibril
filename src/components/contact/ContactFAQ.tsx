import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import Accordion from '../ui/Accordion'

function ContactFAQ() {
  const { t } = useTranslation()

  const faqItems = [
    {
      question: t('contact.faq.items.howLong.question'),
      answer: t('contact.faq.items.howLong.answer'),
    },
    {
      question: t('contact.faq.items.pricing.question'),
      answer: t('contact.faq.items.pricing.answer'),
    },
    {
      question: t('contact.faq.items.process.question'),
      answer: t('contact.faq.items.process.answer'),
    },
    {
      question: t('contact.faq.items.remote.question'),
      answer: t('contact.faq.items.remote.answer'),
    },
    {
      question: t('contact.faq.items.languages.question'),
      answer: t('contact.faq.items.languages.answer'),
    },
    {
      question: t('contact.faq.items.support.question'),
      answer: t('contact.faq.items.support.answer'),
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
            >
              <QuestionMarkCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 dark:text-primary-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('contact.faq.title')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion items={faqItems} />
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-secondary-600 dark:text-secondary-300 mb-4">
              {t('contact.faq.stillHaveQuestions')}
            </p>
            <a
              href="mailto:bendjiril789@gmail.com"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
            >
              {t('contact.faq.contactDirectly')}
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactFAQ
