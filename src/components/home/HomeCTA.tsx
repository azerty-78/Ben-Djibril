import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  RocketLaunchIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/solid'

function HomeCTA() {
  const { t } = useTranslation()
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-300 rounded-full blur-3xl" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-accent-300/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-2xl" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <RocketLaunchIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
          >
            {t('home.cta.title') || 'Prêt à démarrer votre projet ?'}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto px-4"
          >
            {t('home.cta.description') || 'Discutons de votre projet et créons ensemble quelque chose d\'extraordinaire'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-secondary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <StarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              <span>{t('home.cta.contactBtn') || 'Me contacter'}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="group relative inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
            >
              <span>{t('home.cta.projectsBtn') || 'Voir mes réalisations'}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-white/80"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
              <span>{t('home.cta.responseTime') || 'Réponse sous 24h'}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
              <span>{t('home.cta.freeQuote') || 'Devis gratuit'}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
              <span>{t('home.cta.freeConsultation') || 'Consultation gratuite'}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeCTA

