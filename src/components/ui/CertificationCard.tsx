import { motion } from 'framer-motion'
import { CheckCircleIcon, ClockIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import type { Certification } from '../../data/certifications'

type CertificationCardProps = {
  certification: Certification
  index: number
}

function CertificationCard({ certification, index }: CertificationCardProps) {
  const isCompleted = certification.status === 'completed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card relative overflow-hidden group cursor-pointer"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
        isCompleted 
          ? 'from-success-500/10 to-success-600/10' 
          : 'from-warning-500/10 to-warning-600/10'
      }`} />
      
      {/* Decorative corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
        isCompleted 
          ? 'from-success-400/20 to-success-500/10' 
          : 'from-warning-400/20 to-warning-500/10'
      } rounded-bl-full opacity-50`} />
      
      <div className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 p-6">
        {/* Icon container */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg ${
            isCompleted 
              ? 'bg-gradient-to-br from-success-500 to-success-600' 
              : 'bg-gradient-to-br from-warning-500 to-warning-600'
          }`}
        >
          <motion.div
            animate={isCompleted ? { 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {
              rotate: [0, 360]
            }}
            transition={isCompleted ? {
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            } : {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {isCompleted ? (
              <CheckCircleIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            ) : (
              <ClockIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            )}
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg md:text-xl font-bold text-secondary-900 dark:text-white leading-tight">
              {certification.name}
            </h3>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 ${
                isCompleted
                  ? 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300'
                  : 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300'
              }`}
            >
              {isCompleted ? '✓ Certifié' : '⏳ En cours'}
            </motion.span>
          </div>
          
          <p className="text-sm md:text-base text-secondary-600 dark:text-secondary-300 mb-4 font-medium">
            {certification.issuer}
          </p>

          <div className="space-y-2">
            {certification.completionDate && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                <p className="text-xs md:text-sm text-secondary-500 dark:text-secondary-400">
                  Obtenu le {new Date(certification.completionDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </motion.div>
            )}

            {certification.credentialId && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.35 }}
                className="flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                <p className="text-xs md:text-sm text-secondary-500 dark:text-secondary-400 font-mono">
                  ID: {certification.credentialId}
                </p>
              </motion.div>
            )}
          </div>

          {certification.badgeUrl && (
            <motion.a
              href={certification.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-semibold hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors group"
            >
              Voir le badge
              <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationCard
