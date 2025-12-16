import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

function ContactHero() {
  const { t } = useTranslation()

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute -top-12 sm:-top-16 -right-8 sm:-right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute -bottom-12 sm:-bottom-16 -left-8 sm:-left-10 w-56 sm:w-72 md:w-[26rem] h-56 sm:h-72 md:h-[26rem] bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mb-6"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center border-2 border-primary-200 dark:border-primary-800"
            >
              <EnvelopeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 dark:text-primary-400" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                delay: 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center border-2 border-accent-200 dark:border-accent-800"
            >
              <ChatBubbleLeftRightIcon className="w-8 h-8 sm:w-10 sm:h-10 text-accent-600 dark:text-accent-400" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6 leading-tight"
          >
            {t('contact.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t('contact.hero.subtitle')}
          </motion.p>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-secondary-600 dark:text-secondary-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span>{t('contact.hero.responseTime')}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-secondary-400" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse" />
              <span>{t('contact.hero.freeQuote')}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-secondary-400" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span>{t('contact.hero.available')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
