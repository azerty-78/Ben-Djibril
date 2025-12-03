import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

type SaaSComparisonTableProps = {
  open: boolean
}

function SaaSComparisonTable({ open }: SaaSComparisonTableProps) {
  const { t } = useTranslation()

  const rows = [
    {
      key: 'priceMonthly',
      label: t('services.saasComparison.priceMonthly'),
      good: t('services.saas.goodDeal.price'),
      normal: t('services.saas.normal.price'),
      premium: t('services.saas.premium.price'),
    },
    {
      key: 'priceYearly',
      label: t('services.saasComparison.priceYearly'),
      good: t('services.saas.goodDeal.annualPriceShort'),
      normal: t('services.saas.normal.annualPriceShort'),
      premium: t('services.saas.premium.annualPriceShort'),
    },
    {
      key: 'saving',
      label: t('services.saasComparison.saving'),
      good: t('services.saas.goodDeal.annualSavingShort'),
      normal: t('services.saas.normal.annualSavingShort'),
      premium: t('services.saas.premium.annualSavingShort'),
    },
    {
      key: 'target',
      label: t('services.saasComparison.target'),
      good: t('services.saasComparison.targetGood'),
      normal: t('services.saasComparison.targetNormal'),
      premium: t('services.saasComparison.targetPremium'),
    },
    {
      key: 'evolutions',
      label: t('services.saasComparison.evolutions'),
      good: t('services.saasComparison.evolutionsGood'),
      normal: t('services.saasComparison.evolutionsNormal'),
      premium: t('services.saasComparison.evolutionsPremium'),
    },
    {
      key: 'support',
      label: t('services.saasComparison.support'),
      good: t('services.saasComparison.supportGood'),
      normal: t('services.saasComparison.supportNormal'),
      premium: t('services.saasComparison.supportPremium'),
    },
    {
      key: 'infrastructure',
      label: t('services.saasComparison.infrastructure'),
      good: t('services.saasComparison.infrastructureGood'),
      normal: t('services.saasComparison.infrastructureNormal'),
      premium: t('services.saasComparison.infrastructurePremium'),
    },
  ]

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: 20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 overflow-hidden"
        >
          <div className="overflow-x-auto rounded-2xl border-2 border-primary-200 dark:border-primary-800 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 shadow-xl">
            <div className="min-w-full">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 px-6 py-4">
                <h4 className="text-lg font-bold text-white text-center">
                  {t('services.saasComparison.title')}
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-secondary-100/80 dark:bg-secondary-800/80 border-b-2 border-secondary-200 dark:border-secondary-700">
                    <tr>
                      <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-secondary-700 dark:text-secondary-200">
                        {t('services.saasComparison.whichPlan')}
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300 bg-primary-50/50 dark:bg-primary-900/20">
                        {t('services.saas.goodDeal.name')}
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-secondary-700 dark:text-secondary-200">
                        {t('services.saas.normal.name')}
                      </th>
                      <th className="px-4 sm:px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-accent-700 dark:text-accent-300 bg-accent-50/50 dark:bg-accent-900/20">
                        {t('services.saas.premium.name')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800 bg-white dark:bg-secondary-900">
                    {rows.map((row, rowIdx) => (
                      <tr
                        key={row.key}
                        className={`align-top transition-colors ${
                          rowIdx % 2 === 0
                            ? 'bg-white dark:bg-secondary-900'
                            : 'bg-secondary-50/50 dark:bg-secondary-800/30'
                        } hover:bg-primary-50/30 dark:hover:bg-primary-900/10`}
                      >
                        <td className="px-4 sm:px-6 py-4 text-xs sm:text-sm font-semibold text-secondary-800 dark:text-secondary-100">
                          {row.label}
                        </td>
                        {[row.good, row.normal, row.premium].map((value, idx) => (
                          <td
                            key={idx}
                            className={`px-4 sm:px-6 py-4 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 text-center ${
                              idx === 0
                                ? 'bg-primary-50/30 dark:bg-primary-900/10'
                                : idx === 2
                                ? 'bg-accent-50/30 dark:bg-accent-900/10'
                                : ''
                            }`}
                          >
                            {value === 'CHECK' ? (
                              <CheckIcon className="w-5 h-5 mx-auto text-emerald-500" />
                            ) : value === 'NO' ? (
                              <XMarkIcon className="w-5 h-5 mx-auto text-secondary-400 dark:text-secondary-600" />
                            ) : (
                              <span className="font-medium">{value}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SaaSComparisonTable


