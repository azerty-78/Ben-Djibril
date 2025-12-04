import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  CheckIcon,
  XMarkIcon,
  InformationCircleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'

type FullControlComparisonTableProps = {
  open: boolean
}

function FullControlComparisonTable({ open }: FullControlComparisonTableProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleChooseService = () => {
    navigate('/services')
    // Scroll to services section after a short delay
    setTimeout(() => {
      const servicesSection = document.querySelector('[data-section="services"]')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const plans = [
    {
      id: 'ultraSpeed',
      name: t('services.fullControl.ultraSpeed.name'),
      price: t('services.fullControl.ultraSpeed.price'),
      deliveryTime: t('services.fullControl.ultraSpeed.deliveryTime'),
      description: t('services.fullControl.ultraSpeed.description'),
      planId: 'full-ultraSpeed' as const,
      color: 'primary',
    },
    {
      id: 'speed',
      name: t('services.fullControl.speed.name'),
      price: t('services.fullControl.speed.price'),
      deliveryTime: t('services.fullControl.speed.deliveryTime'),
      description: t('services.fullControl.speed.description'),
      planId: 'full-speed' as const,
      color: 'accent',
    },
    {
      id: 'normal',
      name: t('services.fullControl.normal.name'),
      price: t('services.fullControl.normal.price'),
      deliveryTime: t('services.fullControl.normal.deliveryTime'),
      description: t('services.fullControl.normal.description'),
      planId: 'full-normal' as const,
      color: 'secondary',
    },
  ]

  const rows = [
    {
      key: 'deliveryTime',
      label: t('services.fullControlComparison.deliveryTime'),
      icon: ClockIcon,
      ultraSpeed: t('services.fullControlComparison.deliveryTimeUltra'),
      speed: t('services.fullControlComparison.deliveryTimeSpeed'),
      normal: t('services.fullControlComparison.deliveryTimeNormal'),
      type: 'text' as const,
    },
    {
      key: 'price',
      label: t('services.fullControlComparison.price'),
      icon: CurrencyDollarIcon,
      ultraSpeed: t('services.fullControlComparison.priceUltra'),
      speed: t('services.fullControlComparison.priceSpeed'),
      normal: t('services.fullControlComparison.priceNormal'),
      type: 'text' as const,
    },
    {
      key: 'team',
      label: t('services.fullControlComparison.team'),
      icon: UserGroupIcon,
      ultraSpeed: t('services.fullControlComparison.teamUltra'),
      speed: t('services.fullControlComparison.teamSpeed'),
      normal: t('services.fullControlComparison.teamNormal'),
      type: 'text' as const,
    },
    {
      key: 'priority',
      label: t('services.fullControlComparison.priority'),
      icon: ShieldCheckIcon,
      ultraSpeed: t('services.fullControlComparison.priorityUltra'),
      speed: t('services.fullControlComparison.prioritySpeed'),
      normal: t('services.fullControlComparison.priorityNormal'),
      type: 'text' as const,
    },
    {
      key: 'testing',
      label: t('services.fullControlComparison.testing'),
      icon: ShieldCheckIcon,
      ultraSpeed: t('services.fullControlComparison.testingUltra'),
      speed: t('services.fullControlComparison.testingSpeed'),
      normal: t('services.fullControlComparison.testingNormal'),
      type: 'text' as const,
    },
    {
      key: 'training',
      label: t('services.fullControlComparison.training'),
      icon: AcademicCapIcon,
      ultraSpeed: t('services.fullControlComparison.trainingUltra'),
      speed: t('services.fullControlComparison.trainingSpeed'),
      normal: t('services.fullControlComparison.trainingNormal'),
      type: 'text' as const,
    },
    {
      key: 'support',
      label: t('services.fullControlComparison.support'),
      icon: WrenchScrewdriverIcon,
      ultraSpeed: t('services.fullControlComparison.supportUltra'),
      speed: t('services.fullControlComparison.supportSpeed'),
      normal: t('services.fullControlComparison.supportNormal'),
      type: 'text' as const,
    },
    {
      key: 'documentation',
      label: t('services.fullControlComparison.documentation'),
      icon: DocumentTextIcon,
      ultraSpeed: t('services.fullControlComparison.documentationUltra'),
      speed: t('services.fullControlComparison.documentationSpeed'),
      normal: t('services.fullControlComparison.documentationNormal'),
      type: 'text' as const,
    },
    {
      key: 'quality',
      label: t('services.fullControlComparison.quality'),
      icon: CodeBracketIcon,
      ultraSpeed: t('services.fullControlComparison.qualityUltra'),
      speed: t('services.fullControlComparison.qualitySpeed'),
      normal: t('services.fullControlComparison.qualityNormal'),
      type: 'text' as const,
    },
    {
      key: 'architecture',
      label: t('services.fullControlComparison.architecture'),
      icon: ServerIcon,
      ultraSpeed: t('services.fullControlComparison.architectureUltra'),
      speed: t('services.fullControlComparison.architectureSpeed'),
      normal: t('services.fullControlComparison.architectureNormal'),
      type: 'text' as const,
    },
  ]

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'button') => {
    const colors = {
      primary: {
        bg: 'bg-primary-50 dark:bg-primary-900/20',
        text: 'text-primary-700 dark:text-primary-300',
        border: 'border-primary-200 dark:border-primary-800',
        button: 'bg-primary-600 hover:bg-primary-500',
      },
      secondary: {
        bg: 'bg-secondary-50 dark:bg-secondary-800/20',
        text: 'text-secondary-700 dark:text-secondary-200',
        border: 'border-secondary-200 dark:border-secondary-700',
        button: 'bg-secondary-600 hover:bg-secondary-500',
      },
      accent: {
        bg: 'bg-accent-50 dark:bg-accent-900/20',
        text: 'text-accent-700 dark:text-accent-300',
        border: 'border-accent-200 dark:border-accent-800',
        button: 'bg-accent-600 hover:bg-accent-500',
      },
    }
    return colors[color as keyof typeof colors]?.[type] || ''
  }

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 overflow-hidden"
        >
          <div className="overflow-x-auto rounded-2xl border-2 border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 shadow-2xl">
            {/* Table with consistent column widths */}
            <table className="min-w-full table-fixed">
              <colgroup>
                <col className="w-[30%] md:w-[25%]" />
                <col className="w-[23.33%] md:w-[25%]" />
                <col className="w-[23.33%] md:w-[25%]" />
                <col className="w-[23.33%] md:w-[25%]" />
              </colgroup>

              {/* Header Row */}
              <thead>
                <tr className="border-b-2 border-secondary-200 dark:border-secondary-700">
                  {/* First Column - Features Label */}
                  <th className="hidden md:table-cell px-4 sm:px-6 py-6 md:py-8 bg-gradient-to-br from-secondary-50 to-secondary-100/50 dark:from-secondary-800 dark:to-secondary-900 border-r-2 border-secondary-200 dark:border-secondary-700">
                    <h3 className="text-base sm:text-lg font-bold text-secondary-900 dark:text-white text-center">
                      {t('services.fullControlComparison.whichPlan')}
                    </h3>
                  </th>

                  {/* Plan Headers */}
                  {plans.map((plan, idx) => (
                    <th
                      key={plan.id}
                      className={`px-4 sm:px-6 py-6 md:py-8 ${getColorClasses(plan.color, 'bg')} ${
                        idx < plans.length - 1
                          ? 'border-r-2 border-secondary-200 dark:border-secondary-700'
                          : ''
                      } ${idx === 0 ? 'md:border-l-2 border-secondary-200 dark:border-secondary-700' : ''}`}
                    >
                      <div className="text-center">
                        {/* Price */}
                        <div className="mb-3">
                          <span className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900 dark:text-white">
                            {plan.price}
                          </span>
                        </div>

                        {/* Delivery Time */}
                        <div className="mb-4">
                          <span className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">
                            {plan.deliveryTime}
                          </span>
                        </div>

                        {/* CTA Button */}
                        <button
                          type="button"
                          onClick={handleChooseService}
                          className={`inline-block w-full px-4 py-2.5 rounded-lg ${getColorClasses(
                            plan.color,
                            'button'
                          )} text-white text-sm font-semibold hover:shadow-lg transition-all duration-200 mb-4`}
                        >
                          {t('services.requestQuote')} →
                        </button>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed text-left">
                          {plan.description}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Features Table Body */}
              <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
                {rows.map((row, rowIdx) => {
                  const IconComponent = row.icon
                  const values = [row.ultraSpeed, row.speed, row.normal]

                  return (
                    <tr
                      key={row.key}
                      className={`transition-colors ${
                        rowIdx % 2 === 0
                          ? 'bg-white dark:bg-secondary-900'
                          : 'bg-secondary-50/30 dark:bg-secondary-800/20'
                      } hover:bg-primary-50/30 dark:hover:bg-primary-900/10`}
                    >
                      {/* Feature Label Column */}
                      <td className="hidden md:table-cell px-4 sm:px-6 py-4 align-top border-r-2 border-secondary-200 dark:border-secondary-700 bg-gradient-to-br from-secondary-50/50 to-secondary-100/30 dark:from-secondary-800/50 dark:to-secondary-900/30">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="flex items-start gap-1.5 flex-1">
                            <span className="text-xs sm:text-sm font-semibold text-secondary-800 dark:text-secondary-100">
                              {row.label}
                            </span>
                            <InformationCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary-400 dark:text-secondary-500 flex-shrink-0 mt-0.5" />
                          </div>
                        </div>
                      </td>

                      {/* Mobile: Feature Label in first cell */}
                      <td className="md:hidden px-4 sm:px-6 py-4 align-top border-r border-secondary-200 dark:border-secondary-700">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div className="flex items-start gap-1.5 flex-1">
                            <span className="text-xs sm:text-sm font-semibold text-secondary-800 dark:text-secondary-100">
                              {row.label}
                            </span>
                            <InformationCircleIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary-400 dark:text-secondary-500 flex-shrink-0 mt-0.5" />
                          </div>
                        </div>
                      </td>

                      {/* Plan Values */}
                      {plans.map((plan, planIdx) => {
                        const value = values[planIdx]
                        return (
                          <td
                            key={plan.id}
                            className={`px-4 sm:px-6 py-4 text-center align-top ${getColorClasses(
                              plan.color,
                              'bg'
                            )} ${
                              planIdx < plans.length - 1
                                ? 'border-r border-secondary-200 dark:border-secondary-700'
                                : ''
                            }`}
                          >
                            {value === 'CHECK' ? (
                              <CheckIcon className="w-5 h-5 mx-auto text-emerald-500 dark:text-emerald-400" />
                            ) : value === 'NO' ? (
                              <XMarkIcon className="w-5 h-5 mx-auto text-secondary-400 dark:text-secondary-500" />
                            ) : (
                              <span className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 font-medium">
                                {value}
                              </span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FullControlComparisonTable

