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
            <div className="flex flex-wrap items-center gap-1.5 text-[0.65rem] sm:text-[0.7rem] md:text-xs text-secondary-600 dark:text-secondary-400 leading-tight w-full mt-1.5">
              {secondaryPrice && (
                <span className="break-words">{secondaryPrice}</span>
              )}
              {secondaryPrice && savingLabel && (
                <span className="text-secondary-400 dark:text-secondary-500 flex-shrink-0">•</span>
              )}
              {savingLabel && (
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 break-words">
                  {savingLabel}
                </span>
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

