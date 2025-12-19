import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CheckIcon, InformationCircleIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

type PackageCardProps = {
  name: string
  price: string
  priceUnit?: string
  oldPrice?: string
  secondaryPrice?: string
  savingLabel?: string
  description: string
  features: string[]
  popular?: boolean
  popularLabel?: string
  deliveryTime?: string
  cta: string
  ctaLink?: string
  onClick?: () => void
  className?: string
  cadenceBadge?: string
  idealFor?: string
  onCompare?: () => void
  compareLabel?: string
}

function PackageCard({
  name,
  price,
  priceUnit,
  oldPrice,
  secondaryPrice,
  savingLabel,
  description,
  features,
  popular,
  popularLabel,
  deliveryTime,
  cta,
  ctaLink = '/contact',
  onClick,
  className,
  cadenceBadge,
  idealFor,
  onCompare,
  compareLabel,
}: PackageCardProps) {
  const { t } = useTranslation()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.015, zIndex: 5 }}
      whileTap={{ scale: 0.98, zIndex: 5 }}
      transition={{ duration: 0.5 }}
      className={`card relative w-full overflow-visible ${
        popular ? 'ring-2 ring-primary-500 dark:ring-primary-400 md:scale-105 pt-6 md:pt-6 before:absolute before:inset-0 before:rounded-2xl before:bg-primary-500/5 before:blur-2xl before:-z-10' : ''
      } ${className ?? ''}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="relative bg-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-xl whitespace-nowrap">
            {popularLabel}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary-600 rotate-45" />
          </div>
        </div>
      )}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-secondary-900 dark:text-white">
            {name}
          </h3>
          {cadenceBadge && (
            <div className="flex-shrink-0 px-2.5 py-1 bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300 text-[0.65rem] sm:text-xs font-semibold rounded-full border border-accent-200 dark:border-accent-700">
              {cadenceBadge}
            </div>
          )}
        </div>
        <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3">
          {description}
        </p>

        <div className="space-y-1.5">
          {oldPrice && (
            <div className="mb-1">
              <span className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 line-through">
                {oldPrice}
              </span>
            </div>
          )}
          <div className="flex flex-wrap items-baseline gap-1.5 leading-tight">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text break-words overflow-wrap-anywhere max-w-full">
              {price}
            </span>
            {priceUnit && (
              <span className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 font-normal">
                {priceUnit}
              </span>
            )}
            <span className="text-[10px] sm:text-xs text-secondary-500 dark:text-secondary-400 font-medium ml-auto">
              HT
            </span>
          </div>
          {deliveryTime && (
            <div className="mt-2">
              <span className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-semibold">
                {deliveryTime}
              </span>
            </div>
          )}
          {(secondaryPrice || savingLabel) && (
            <div className="w-full mt-3 space-y-2">
              {secondaryPrice && (
                <div className="px-3 py-2 bg-primary-50/60 dark:bg-primary-900/20 rounded-lg border border-primary-200/50 dark:border-primary-800/50">
                  <p className="text-[0.7rem] sm:text-xs text-secondary-700 dark:text-secondary-300 leading-relaxed">
                    {secondaryPrice}
                  </p>
                </div>
              )}
              {savingLabel && (
                <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50/60 dark:bg-emerald-900/20 rounded-lg border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <p className="text-[0.7rem] sm:text-xs font-semibold text-emerald-700 dark:text-emerald-300 leading-relaxed">
                    {savingLabel}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => {
          // Détecter les termes clés pour ajouter des infobulles
          const hasMVP = feature.includes('MVP') && !feature.includes('MVPA')
          const hasMVPA = feature.includes('MVPA')
          const hasCRUD = feature.includes('CRUD')
          
          return (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
              <span className="text-secondary-700 dark:text-secondary-300 break-words flex-1 min-w-0">
                {feature.split(/(MVP|MVPA|CRUD)/).map((part, i) => {
                  if (part === 'MVP' && hasMVP) {
                    return (
                      <span key={i} className="group relative inline-block">
                        <span className="underline decoration-dotted decoration-primary-500 dark:decoration-primary-400 cursor-help">
                          {part}
                        </span>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-secondary-900 dark:bg-secondary-800 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-normal w-64">
                          MVP: Minimum Viable Product - Version de base avec les fonctionnalités essentielles pour lancer rapidement
                        </span>
                      </span>
                    )
                  }
                  if (part === 'MVPA' && hasMVPA) {
                    return (
                      <span key={i} className="group relative inline-block">
                        <span className="underline decoration-dotted decoration-primary-500 dark:decoration-primary-400 cursor-help">
                          {part}
                        </span>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-secondary-900 dark:bg-secondary-800 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-normal w-64">
                          MVPA: Minimum Vital Product Advanced - Version améliorée avec plus de fonctionnalités et capacités
                        </span>
                      </span>
                    )
                  }
                  if (part === 'CRUD' && hasCRUD) {
                    return (
                      <span key={i} className="group relative inline-block">
                        <span className="underline decoration-dotted decoration-primary-500 dark:decoration-primary-400 cursor-help">
                          {part}
                        </span>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-secondary-900 dark:bg-secondary-800 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-normal w-64">
                          CRUD: Create, Read, Update, Delete - Les 4 opérations de base pour gérer les données
                        </span>
                      </span>
                    )
                  }
                  return <span key={i}>{part}</span>
                })}
              </span>
            </li>
          )
        })}
      </ul>

      {idealFor && (
        <div className="mb-6 p-3 sm:p-4 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/30 dark:to-primary-800/20 rounded-xl border-2 border-primary-200 dark:border-primary-700 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
              <InformationCircleIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <p className="text-xs sm:text-sm font-bold text-primary-900 dark:text-primary-100 mb-1.5 uppercase tracking-wide">
                {t('services.idealForLabel')}
              </p>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed">
                {idealFor}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {onCompare && (
          <button
            type="button"
            onClick={onCompare}
            className="w-full px-4 py-2.5 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
          >
            {compareLabel || 'Comparer ce forfait'}
          </button>
        )}
        {onClick ? (
          <button
            type="button"
            onClick={onClick}
            className="btn-primary w-full text-center block"
          >
            {cta}
          </button>
        ) : (
          <Link to={ctaLink} className="btn-primary w-full text-center block">
            {cta}
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default PackageCard

