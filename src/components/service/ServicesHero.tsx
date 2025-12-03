import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function ServicesHero() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary-900 dark:text-white">
            {t('services.title')}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero


