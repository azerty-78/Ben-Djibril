import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/solid'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
  color: string
}

function FeatureCard({ icon, title, description, delay = 0, color }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-secondary-200 dark:border-secondary-700 transition-all duration-300"
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-lg`}>
        <div className="text-white text-2xl sm:text-3xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

function ContactWhyChoose() {
  const { t } = useTranslation()

  const features = [
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: t('contact.whyChoose.features.response.title'),
      description: t('contact.whyChoose.features.response.description'),
      color: 'from-primary-500 to-primary-600',
      delay: 0
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: t('contact.whyChoose.features.quality.title'),
      description: t('contact.whyChoose.features.quality.description'),
      color: 'from-success-500 to-success-600',
      delay: 0.1
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: t('contact.whyChoose.features.pricing.title'),
      description: t('contact.whyChoose.features.pricing.description'),
      color: 'from-accent-500 to-accent-600',
      delay: 0.2
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: t('contact.whyChoose.features.experience.title'),
      description: t('contact.whyChoose.features.experience.description'),
      color: 'from-purple-500 to-purple-600',
      delay: 0.3
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: t('contact.whyChoose.features.remote.title'),
      description: t('contact.whyChoose.features.remote.description'),
      color: 'from-blue-500 to-blue-600',
      delay: 0.4
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: t('contact.whyChoose.features.support.title'),
      description: t('contact.whyChoose.features.support.description'),
      color: 'from-rose-500 to-rose-600',
      delay: 0.5
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('contact.whyChoose.title')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              {t('contact.whyChoose.subtitle')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactWhyChoose
