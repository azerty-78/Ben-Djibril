import { motion } from 'framer-motion'
import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/solid'
import type { Certification } from '../../data/certifications'

type CertificationCardProps = {
  certification: Certification
  index: number
}

function CertificationCard({ certification, index }: CertificationCardProps) {
  const isCompleted = certification.status === 'completed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-bl-full" />
      
      <div className="relative flex items-start gap-4">
        <div className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center ${
          isCompleted 
            ? 'bg-success-100 dark:bg-success-900/30' 
            : 'bg-warning-100 dark:bg-warning-900/30'
        }`}>
          {isCompleted ? (
            <CheckCircleIcon className="w-8 h-8 text-success-600 dark:text-success-400" />
          ) : (
            <ClockIcon className="w-8 h-8 text-warning-600 dark:text-warning-400" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
              {certification.name}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isCompleted
                ? 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300'
                : 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300'
            }`}>
              {isCompleted ? 'Certifié' : 'En cours'}
            </span>
          </div>
          
          <p className="text-sm text-secondary-600 dark:text-secondary-300 mb-3">
            {certification.issuer}
          </p>

          {certification.completionDate && (
            <p className="text-xs text-secondary-500 dark:text-secondary-400">
              Obtenu le {new Date(certification.completionDate).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}

          {certification.credentialId && (
            <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-1">
              ID: {certification.credentialId}
            </p>
          )}

          {certification.badgeUrl && (
            <a
              href={certification.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              Voir le badge →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CertificationCard

