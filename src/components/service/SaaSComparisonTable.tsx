import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="mt-8 overflow-x-auto rounded-2xl border border-secondary-100 dark:border-secondary-700 bg-white dark:bg-secondary-900"
        >
          <table className="min-w-full text-sm">
            <thead className="bg-secondary-50 dark:bg-secondary-900/70">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-500 dark:text-secondary-300">
                  {t('services.saasComparison.whichPlan')}
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-secondary-700 dark:text-secondary-100">
                  {t('services.saas.goodDeal.name')}
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-secondary-700 dark:text-secondary-100">
                  {t('services.saas.normal.name')}
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-secondary-700 dark:text-secondary-100">
                  {t('services.saas.premium.name')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-100 dark:divide-secondary-800">
              {rows.map((row) => (
                <tr key={row.key} className="align-top">
                  <td className="px-4 py-3 text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-100">
                    {row.label}
                  </td>
                  {[row.good, row.normal, row.premium].map((value, idx) => (
                    <td
                      key={idx}
                      className="px-4 py-3 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 text-center"
                    >
                      {value === 'CHECK' ? (
                        <CheckIcon className="w-4 h-4 inline text-emerald-500" />
                      ) : value === 'NO' ? (
                        <XMarkIcon className="w-4 h-4 inline text-secondary-400 dark:text-secondary-600" />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SaaSComparisonTable


