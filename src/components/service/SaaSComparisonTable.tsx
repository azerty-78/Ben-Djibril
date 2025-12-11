import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  CheckIcon,
  XMarkIcon,
  InformationCircleIcon,
  ChartBarIcon,
  ServerIcon,
  ClockIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  CloudIcon,
  CloudArrowUpIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  NoSymbolIcon,
} from '@heroicons/react/24/outline'

type SaaSComparisonTableProps = {
  open: boolean
}

function SaaSComparisonTable({ open }: SaaSComparisonTableProps) {
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
      id: 'goodDeal',
      name: t('services.saas.goodDeal.name'),
      oldPrice: '200 000 f (HT)',
      currentPrice: t('services.saas.goodDeal.price'),
      priceUnit: t('services.saas.goodDeal.priceUnit'),
      description: t('services.saas.goodDeal.description'),
      planId: 'saas-goodDeal' as const,
      color: 'primary',
    },
    {
      id: 'pro',
      name: t('services.saas.pro.name'),
      oldPrice: '450 000 f (HT)',
      currentPrice: t('services.saas.pro.price'),
      priceUnit: t('services.saas.pro.priceUnit'),
      description: t('services.saas.pro.description'),
      planId: 'saas-pro' as const,
      color: 'secondary',
    },
    {
      id: 'ultra',
      name: t('services.saas.ultra.name'),
      oldPrice: '600 000 f (HT)',
      currentPrice: t('services.saas.ultra.price'),
      priceUnit: t('services.saas.ultra.priceUnit'),
      description: t('services.saas.ultra.description'),
      planId: 'saas-ultra' as const,
      color: 'accent',
    },
  ]

  const rows = [
    {
      key: 'priceMonthly',
      label: t('services.saasComparison.priceMonthly'),
      icon: ChartBarIcon,
      good: `${t('services.saas.goodDeal.price')} ${t('services.saas.goodDeal.priceUnit')}`,
      pro: `${t('services.saas.pro.price')} ${t('services.saas.pro.priceUnit')}`,
      ultra: `${t('services.saas.ultra.price')} ${t('services.saas.ultra.priceUnit')}`,
      type: 'text' as const,
    },
    {
      key: 'priceYearly',
      label: t('services.saasComparison.priceYearly'),
      icon: ChartBarIcon,
      good: t('services.saas.goodDeal.annualPriceShort'),
      pro: t('services.saas.pro.annualPriceShort'),
      ultra: t('services.saas.ultra.annualPriceShort'),
      type: 'text' as const,
    },
    {
      key: 'saving',
      label: t('services.saasComparison.saving'),
      icon: ChartBarIcon,
      good: t('services.saas.goodDeal.annualSavingShort'),
      pro: t('services.saas.pro.annualSavingShort'),
      ultra: t('services.saas.ultra.annualSavingShort'),
      type: 'text' as const,
    },
    {
      key: 'storage',
      label: t('services.saasComparison.storage'),
      icon: CloudIcon,
      good: t('services.saasComparison.storageGood'),
      pro: t('services.saasComparison.storagePro'),
      ultra: t('services.saasComparison.storageUltra'),
      type: 'text' as const,
    },
    {
      key: 'backups',
      label: t('services.saasComparison.backups'),
      icon: CloudArrowUpIcon,
      good: t('services.saasComparison.backupsGood'),
      pro: t('services.saasComparison.backupsPro'),
      ultra: t('services.saasComparison.backupsUltra'),
      type: 'text' as const,
    },
    {
      key: 'domainEmail',
      label: t('services.saasComparison.domainEmail'),
      icon: GlobeAltIcon,
      good: t('services.saasComparison.domainEmailGood'),
      pro: t('services.saasComparison.domainEmailPro'),
      ultra: t('services.saasComparison.domainEmailUltra'),
      type: 'text' as const,
    },
    {
      key: 'email',
      label: t('services.saasComparison.email'),
      icon: EnvelopeIcon,
      good: t('services.saasComparison.emailGood'),
      pro: t('services.saasComparison.emailPro'),
      ultra: t('services.saasComparison.emailUltra'),
      type: 'text' as const,
    },
    {
      key: 'interfaces',
      label: t('services.saasComparison.interfaces'),
      icon: UserGroupIcon,
      good: t('services.saasComparison.interfacesGood'),
      pro: t('services.saasComparison.interfacesPro'),
      ultra: t('services.saasComparison.interfacesUltra'),
      type: 'text' as const,
    },
    {
      key: 'crud',
      label: t('services.saasComparison.crud'),
      icon: WrenchScrewdriverIcon,
      good: t('services.saasComparison.crudGood'),
      pro: t('services.saasComparison.crudPro'),
      ultra: t('services.saasComparison.crudUltra'),
      type: 'text' as const,
    },
    {
      key: 'search',
      label: t('services.saasComparison.search'),
      icon: MagnifyingGlassIcon,
      good: t('services.saasComparison.searchGood'),
      pro: t('services.saasComparison.searchPro'),
      ultra: t('services.saasComparison.searchUltra'),
      type: 'text' as const,
    },
    {
      key: 'target',
      label: t('services.saasComparison.target'),
      icon: UserGroupIcon,
      good: t('services.saasComparison.targetGood'),
      pro: t('services.saasComparison.targetPro'),
      ultra: t('services.saasComparison.targetUltra'),
      type: 'text' as const,
    },
    {
      key: 'evolutions',
      label: t('services.saasComparison.evolutions'),
      icon: WrenchScrewdriverIcon,
      good: t('services.saasComparison.evolutionsGood'),
      pro: t('services.saasComparison.evolutionsPro'),
      ultra: t('services.saasComparison.evolutionsUltra'),
      type: 'text' as const,
    },
    {
      key: 'seo',
      label: t('services.saasComparison.seo'),
      icon: SparklesIcon,
      good: t('services.saasComparison.seoGood'),
      pro: t('services.saasComparison.seoPro'),
      ultra: t('services.saasComparison.seoUltra'),
      type: 'text' as const,
    },
    {
      key: 'security',
      label: t('services.saasComparison.security'),
      icon: ShieldCheckIcon,
      good: t('services.saasComparison.securityGood'),
      pro: t('services.saasComparison.securityPro'),
      ultra: t('services.saasComparison.securityUltra'),
      type: 'text' as const,
    },
    {
      key: 'ads',
      label: t('services.saasComparison.ads'),
      icon: NoSymbolIcon,
      good: t('services.saasComparison.adsGood'),
      pro: t('services.saasComparison.adsPro'),
      ultra: t('services.saasComparison.adsUltra'),
      type: 'text' as const,
    },
    {
      key: 'infrastructure',
      label: t('services.saasComparison.infrastructure'),
      icon: ServerIcon,
      good: t('services.saasComparison.infrastructureGood'),
      pro: t('services.saasComparison.infrastructurePro'),
      ultra: t('services.saasComparison.infrastructureUltra'),
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
                      {t('services.saasComparison.whichPlan')}
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
                        {/* Old Price (Strikethrough) */}
                        <div className="mb-2">
                          <span className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 line-through">
                            {plan.oldPrice}
                          </span>
                        </div>

                        {/* Current Price */}
                        <div className="mb-4 flex items-baseline justify-center gap-1.5">
                          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
                            {plan.currentPrice}
                          </span>
                          {plan.priceUnit && (
                            <span className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 font-normal">
                              {plan.priceUnit}
                            </span>
                          )}
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
                          {t('services.getStarted')} →
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
                    const values = [row.good, row.pro, row.ultra]

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

export default SaaSComparisonTable
