import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ServicesCTA() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('services.ctaTitle')}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {t('services.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            {t('services.ctaButton')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesCTA


