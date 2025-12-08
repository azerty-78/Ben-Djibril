import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  RocketLaunchIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/solid'

function ProjectsCTA() {
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
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg"
          >
            <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {t('projects.cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('projects.cta.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-10 sm:mb-12 max-w-xl mx-auto">
            {t('projects.cta.description')}
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary-600 rounded-xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-200 group"
            >
              {t('projects.cta.button')}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Decorative Icons */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-8 opacity-60">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <StarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <StarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsCTA

