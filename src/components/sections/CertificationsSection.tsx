import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CertificationCard from '../ui/CertificationCard'
import { certifications } from '../../data/certifications'
import { AcademicCapIcon, TrophyIcon, StarIcon } from '@heroicons/react/24/solid'

function CertificationsSection() {
  const { t } = useTranslation()
  
  const completedCount = certifications.filter(c => c.status === 'completed').length
  const inProgressCount = certifications.filter(c => c.status === 'in-progress').length
  const totalCount = certifications.length

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <AcademicCapIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white">
              {t('home.about.certifications')}
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto px-2">
            Certifications professionnelles validant mes compétences en DevOps et Cloud
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-3 sm:p-4 md:p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <TrophyIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{totalCount}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              Total
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-3 sm:p-4 md:p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{completedCount}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              Certifiées
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-3 sm:p-4 md:p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-warning-500 to-warning-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <AcademicCapIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{inProgressCount}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              En cours
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} certification={cert} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 px-4">
            Continuellement en formation pour rester à jour avec les dernières technologies
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection
