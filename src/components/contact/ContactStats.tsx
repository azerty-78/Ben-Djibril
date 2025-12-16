import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ClockIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  StarIcon
} from '@heroicons/react/24/solid'
import CountUp from '../ui/CountUp'

interface StatCardProps {
  icon: React.ReactNode
  value: number | string
  label: string
  suffix?: string
  delay?: number
  color: string
}

function StatCard({ icon, value, label, suffix = '', delay = 0, color }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-secondary-200 dark:border-secondary-700 transition-all duration-300 text-center"
    >
      <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${color} mb-4 shadow-lg`}>
        <div className="text-white text-2xl sm:text-3xl">
          {icon}
        </div>
      </div>
      <div className="mb-2">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white">
          {typeof value === 'number' ? <CountUp end={value} duration={2} /> : value}
        </span>
        {suffix && (
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-600 dark:text-secondary-400 ml-1">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 font-medium">
        {label}
      </p>
    </motion.div>
  )
}

function ContactStats() {
  const { t } = useTranslation()

  const stats = [
    {
      icon: <ClockIcon className="w-8 h-8" />,
      value: 24,
      suffix: 'h',
      label: t('contact.stats.responseTime'),
      color: 'from-primary-500 to-primary-600',
      delay: 0
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      value: 100,
      suffix: '%',
      label: t('contact.stats.satisfaction'),
      color: 'from-success-500 to-success-600',
      delay: 0.1
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      value: 50,
      suffix: '+',
      label: t('contact.stats.messages'),
      color: 'from-accent-500 to-accent-600',
      delay: 0.2
    },
    {
      icon: <StarIcon className="w-8 h-8" />,
      value: 4.9,
      suffix: '/5',
      label: t('contact.stats.rating'),
      color: 'from-warning-500 to-warning-600',
      delay: 0.3
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
              {t('contact.stats.title')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              {t('contact.stats.subtitle')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactStats
