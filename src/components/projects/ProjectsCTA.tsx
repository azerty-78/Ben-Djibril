import { useMemo } from 'react'
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

  // Memoize animation variants
  const floatingAnimation1 = useMemo(() => ({
    y: [0, -8, 0],
    rotate: [0, 8, 0],
  }), [])

  const floatingAnimation2 = useMemo(() => ({
    y: [0, 8, 0],
    rotate: [0, -8, 0],
  }), [])

  const floatingTransition1 = useMemo(() => ({
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const
  }), [])

  const floatingTransition2 = useMemo(() => ({
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.3
  }), [])

  const floatingTransition3 = useMemo(() => ({
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.6
  }), [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 relative overflow-hidden">
      {/* Background decoration - Optimized */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-300 rounded-full blur-3xl will-change-transform" />
      </div>

      {/* Animated shapes - Reduced complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl will-change-transform"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, -30, 0],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-accent-300/20 rounded-full blur-2xl will-change-transform"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg"
            aria-hidden="true"
          >
            <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            {t('projects.cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('projects.cta.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-10 max-w-xl mx-auto">
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
              aria-label={t('projects.cta.button')}
            >
              {t('projects.cta.button')}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Decorative Icons - Optimized animations */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-8 opacity-60">
            <motion.div
              animate={floatingAnimation1}
              transition={floatingTransition1}
              className="will-change-transform"
            >
              <StarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
            </motion.div>
            <motion.div
              animate={floatingAnimation2}
              transition={floatingTransition2}
              className="will-change-transform"
            >
              <RocketLaunchIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
            </motion.div>
            <motion.div
              animate={floatingAnimation1}
              transition={floatingTransition3}
              className="will-change-transform"
            >
              <StarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsCTA
