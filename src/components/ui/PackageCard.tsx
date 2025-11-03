import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

type PackageCardProps = {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
  ctaLink?: string
}

function PackageCard({ name, price, description, features, popular, cta, ctaLink = '/contact' }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`card relative ${popular ? 'ring-2 ring-primary-500 dark:ring-primary-400 scale-105' : ''}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="text-4xl font-bold gradient-text mb-2">{price}</div>
        <p className="text-secondary-600 dark:text-secondary-300 text-sm">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckIcon className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
            <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={ctaLink} className="btn-primary w-full text-center block">
        {cta}
      </Link>
    </motion.div>
  )
}

export default PackageCard

