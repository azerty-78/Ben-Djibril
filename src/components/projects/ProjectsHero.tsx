import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  RocketLaunchIcon,
  StarIcon
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

function ProjectsHero() {
  const { t } = useTranslation()

  // Memoize variants to prevent re-creation on each render
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }), [])

  const iconVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.9, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }), [])

  // Memoize stats to prevent re-creation
  const stats = useMemo(() => [
    { value: '5+', label: t('projects.stats.projects') },
    { value: '4+', label: t('projects.stats.clients') },
    { value: '100%', label: t('projects.stats.satisfaction') },
    { value: '4-12', label: t('projects.stats.weeks') },
  ], [t])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration - Optimized with will-change */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -top-12 sm:-top-16 -right-8 sm:-right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl will-change-transform"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          className="absolute -bottom-12 sm:-bottom-16 -left-8 sm:-left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl will-change-transform"
        />
      </div>

      {/* Animated floating icons - Reduced animation complexity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 sm:left-20 w-14 h-14 sm:w-18 sm:h-18 text-primary-300 dark:text-primary-500 opacity-30 will-change-transform"
        >
          <CodeBracketIcon />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          className="absolute top-40 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 text-accent-300 dark:text-accent-500 opacity-30 will-change-transform"
        >
          <RocketLaunchIcon />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 12, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
          className="absolute bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 text-primary-400 dark:text-primary-500 opacity-25 will-change-transform"
        >
          <StarIcon />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30"
            aria-hidden="true"
          >
            <CodeBracketIcon className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6 leading-tight"
          >
            {t('projects.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t('projects.subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-secondary-500 dark:text-secondary-400 mb-8 sm:mb-10 max-w-xl mx-auto px-4"
          >
            {t('projects.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12"
          >
            <Link
              to="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 flex items-center gap-2 group w-full sm:w-auto justify-center shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label={t('projects.ctaPrimary')}
            >
              {t('projects.ctaPrimary')}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="#projects-grid"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3.5 w-full sm:w-auto text-center transition-all duration-200"
              aria-label={t('projects.ctaSecondary')}
            >
              {t('projects.ctaSecondary')}
            </a>
          </motion.div>

          {/* Stats - Optimized with reduced motion support */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.08, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsHero
