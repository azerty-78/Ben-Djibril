import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/24/solid'
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
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.5 }}
      className={`card relative w-full overflow-visible ${
        popular ? 'ring-2 ring-primary-500 dark:ring-primary-400 md:scale-105 pt-6 md:pt-6' : ''
      } ${className ?? ''}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full z-10 shadow-lg whitespace-nowrap">
          {popularLabel}
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold mb-1 text-secondary-900 dark:text-white">
          {name}
        </h3>
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
          </div>
          {deliveryTime && (
            <div className="mt-2">
              <span className="text-xs sm:text-sm text-primary-600 dark:text-primary-400 font-semibold">
                {deliveryTime}
              </span>
            </div>
          )}
          {(secondaryPrice || savingLabel) && (
            <div className="mt-3 pt-3 border-t border-secondary-200/50 dark:border-secondary-700/50">
              {secondaryPrice && (
                <div className="flex items-start gap-2 mb-2">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed flex-1">
                    {secondaryPrice}
                  </p>
                </div>
              )}
              {savingLabel && (
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center mt-0.5">
                    <svg className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941a1 1 0 102 0v-.1a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 8.234 6 9.009 6 10c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941a1 1 0 102 0v-.1a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 leading-relaxed flex-1">
                    {savingLabel}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
            <span className="text-secondary-700 dark:text-secondary-300 break-words flex-1 min-w-0">{feature}</span>
          </li>
        ))}
      </ul>

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
    </motion.div>
  )
}

export default PackageCard

