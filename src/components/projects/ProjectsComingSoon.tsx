import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { 
  CodeBracketIcon, 
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/solid'

function ProjectsComingSoon() {
  const { t } = useTranslation()

  return (
    <section 
      id="projects-grid"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon avec animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 mb-8 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl shadow-primary-500/30"
          >
            <CodeBracketIcon className="w-12 h-12 sm:w-14 sm:h-14" />
          </motion.div>

          {/* Titre */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6"
          >
            {t('projects.comingSoon.title', { defaultValue: 'Projets en cours de mise à jour' })}
          </motion.h2>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-secondary-600 dark:text-secondary-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t('projects.comingSoon.message', { 
              defaultValue: 'Je suis en train de mettre à jour mes projets avec des détails complets. Ils seront bientôt disponibles !' 
            })}
          </motion.p>

          {/* Indicateur de chargement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
              <ClockIcon className="w-6 h-6 text-primary-600 dark:text-primary-400 animate-pulse" />
              <span className="text-sm sm:text-base font-semibold text-primary-700 dark:text-primary-300">
                {t('projects.comingSoon.working', { defaultValue: 'Travail en cours...' })}
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-accent-50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800">
              <SparklesIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              <span className="text-sm sm:text-base font-semibold text-accent-700 dark:text-accent-300">
                {t('projects.comingSoon.soon', { defaultValue: 'Bientôt disponible' })}
              </span>
            </div>
          </motion.div>

          {/* Animation de chargement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin" />
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-base sm:text-lg text-secondary-500 dark:text-secondary-400 mb-6">
              {t('projects.comingSoon.cta', { 
                defaultValue: 'En attendant, n\'hésitez pas à me contacter pour discuter de vos projets !' 
              })}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block btn-primary px-8 py-3 text-base sm:text-lg"
              >
                {t('projects.comingSoon.contactButton', { defaultValue: 'Me contacter' })}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsComingSoon
