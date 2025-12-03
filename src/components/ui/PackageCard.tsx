import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

type PackageCardProps = {
  name: string
  price: string
  secondaryPrice?: string
  savingLabel?: string
  description: string
  features: string[]
  popular?: boolean
  popularLabel?: string
  cta: string
  ctaLink?: string
  onClick?: () => void
  className?: string
}

function PackageCard({
  name,
  price,
  secondaryPrice,
  savingLabel,
  description,
  features,
  popular,
  popularLabel,
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
      className={`card relative ${
        popular ? 'ring-2 ring-primary-500 dark:ring-primary-400 md:scale-105' : ''
      } ${className ?? ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
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

        <div className="flex items-end justify-between gap-2">
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text leading-none mb-1">
              {price}
            </div>
            {secondaryPrice && (
              <p className="text-[0.7rem] sm:text-xs text-secondary-500 dark:text-secondary-400">
                {secondaryPrice}
              </p>
            )}
          </div>

          {savingLabel && (
            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 text-[0.7rem] sm:text-xs font-semibold">
              {savingLabel}
            </div>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
            <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
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

