import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MapPinIcon } from '@heroicons/react/24/solid'

function ContactMap() {
  const { t } = useTranslation()

  // Coordonnées de Yaoundé, Cameroun - URL d'embed Google Maps
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5!2d11.5021!3d3.8480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfb3c0b0b0b0%3A0x0!2sYaound%C3%A9!5e0!3m2!1sfr!2scm!4v1234567890'

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('contact.map.title')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              {t('contact.map.subtitle')}
            </p>
          </div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-200 dark:border-secondary-700"
          >
            {/* Map iframe */}
            <div className="relative w-full h-96 sm:h-[500px]">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title={t('contact.map.title') as string}
              />
            </div>

            {/* Overlay info card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-secondary-200 dark:border-secondary-700 max-w-xs"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-900 dark:text-white mb-1">
                    {t('contact.map.location.title')}
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {t('contact.map.location.address')}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Yaoundé,Cameroun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    {t('contact.map.location.action')} →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl">
              <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-1">
                {t('contact.map.timezone.label')}
              </p>
              <p className="text-lg font-bold text-secondary-900 dark:text-white">
                {t('contact.map.timezone.value')}
              </p>
            </div>
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl">
              <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-1">
                {t('contact.map.language.label')}
              </p>
              <p className="text-lg font-bold text-secondary-900 dark:text-white">
                {t('contact.map.language.value')}
              </p>
            </div>
            <div className="text-center p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-xl">
              <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-1">
                {t('contact.map.response.label')}
              </p>
              <p className="text-lg font-bold text-secondary-900 dark:text-white">
                {t('contact.map.response.value')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactMap
