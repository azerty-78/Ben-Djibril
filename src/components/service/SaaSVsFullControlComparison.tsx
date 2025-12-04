import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckIcon,
  XMarkIcon,
  CurrencyDollarIcon,
  KeyIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CircleStackIcon,
  ChartBarIcon,
  ClockIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

type SaaSVsFullControlComparisonProps = {
  open: boolean
}

function SaaSVsFullControlComparison({ open }: SaaSVsFullControlComparisonProps) {
  const { t } = useTranslation()

  const comparisonRows = [
    {
      key: 'payment',
      label: t('services.saasVsFullControl.comparisonTable.payment'),
      icon: CurrencyDollarIcon,
      saas: t('services.saasVsFullControl.comparisonTable.paymentSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.paymentFullControl'),
    },
    {
      key: 'codeOwnership',
      label: t('services.saasVsFullControl.comparisonTable.codeOwnership'),
      icon: KeyIcon,
      saas: t('services.saasVsFullControl.comparisonTable.codeOwnershipSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.codeOwnershipFullControl'),
    },
    {
      key: 'hosting',
      label: t('services.saasVsFullControl.comparisonTable.hosting'),
      icon: ServerIcon,
      saas: t('services.saasVsFullControl.comparisonTable.hostingSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.hostingFullControl'),
    },
    {
      key: 'maintenance',
      label: t('services.saasVsFullControl.comparisonTable.maintenance'),
      icon: WrenchScrewdriverIcon,
      saas: t('services.saasVsFullControl.comparisonTable.maintenanceSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.maintenanceFullControl'),
    },
    {
      key: 'modifications',
      label: t('services.saasVsFullControl.comparisonTable.modifications'),
      icon: CodeBracketIcon,
      saas: t('services.saasVsFullControl.comparisonTable.modificationsSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.modificationsFullControl'),
    },
    {
      key: 'resale',
      label: t('services.saasVsFullControl.comparisonTable.resale'),
      icon: ArrowRightIcon,
      saas: t('services.saasVsFullControl.comparisonTable.resaleSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.resaleFullControl'),
    },
    {
      key: 'dataOwnership',
      label: t('services.saasVsFullControl.comparisonTable.dataOwnership'),
      icon: CircleStackIcon,
      saas: t('services.saasVsFullControl.comparisonTable.dataOwnershipSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.dataOwnershipFullControl'),
    },
    {
      key: 'scalability',
      label: t('services.saasVsFullControl.comparisonTable.scalability'),
      icon: ChartBarIcon,
      saas: t('services.saasVsFullControl.comparisonTable.scalabilitySaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.scalabilityFullControl'),
    },
    {
      key: 'costLongTerm',
      label: t('services.saasVsFullControl.comparisonTable.costLongTerm'),
      icon: ClockIcon,
      saas: t('services.saasVsFullControl.comparisonTable.costLongTermSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.costLongTermFullControl'),
    },
    {
      key: 'support',
      label: t('services.saasVsFullControl.comparisonTable.support'),
      icon: WrenchScrewdriverIcon,
      saas: t('services.saasVsFullControl.comparisonTable.supportSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.supportFullControl'),
    },
    {
      key: 'updates',
      label: t('services.saasVsFullControl.comparisonTable.updates'),
      icon: SparklesIcon,
      saas: t('services.saasVsFullControl.comparisonTable.updatesSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.updatesFullControl'),
    },
    {
      key: 'idealFor',
      label: t('services.saasVsFullControl.comparisonTable.idealFor'),
      icon: UserGroupIcon,
      saas: t('services.saasVsFullControl.comparisonTable.idealForSaaS'),
      fullControl: t('services.saasVsFullControl.comparisonTable.idealForFullControl'),
    },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="max-w-7xl mx-auto mt-8 mb-12 p-6 sm:p-8 bg-gradient-to-br from-secondary-50 to-secondary-100/50 dark:from-secondary-900/50 dark:to-secondary-800/30 rounded-2xl border border-secondary-200 dark:border-secondary-700 shadow-xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white mb-3">
                {t('services.saasVsFullControl.title')}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm sm:text-base max-w-3xl mx-auto">
                {t('services.saasVsFullControl.subtitle')}
              </p>
            </div>

            {/* Principle Section */}
            <div className="mb-8 p-6 bg-white/60 dark:bg-secondary-900/40 rounded-xl border border-primary-200 dark:border-primary-800">
              <h4 className="text-lg sm:text-xl font-bold text-secondary-900 dark:text-white mb-3">
                {t('services.saasVsFullControl.principleTitle')}
              </h4>
              <div className="mb-4">
                <h5 className="text-base font-semibold text-primary-700 dark:text-primary-300 mb-2">
                  {t('services.saasVsFullControl.principleGeneral')}
                </h5>
                <p className="text-sm sm:text-base text-secondary-700 dark:text-secondary-200 leading-relaxed">
                  {t('services.saasVsFullControl.principleGeneralDesc')}
                </p>
              </div>
              <div>
                <h5 className="text-base font-semibold text-primary-700 dark:text-primary-300 mb-2">
                  {t('services.saasVsFullControl.fundamentalDifference')}
                </h5>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-secondary-300 dark:border-secondary-600">
                    <th className="text-left p-4 font-bold text-secondary-900 dark:text-white bg-secondary-100/50 dark:bg-secondary-800/50">
                      {t('services.saasVsFullControl.comparisonTable.criteria')}
                    </th>
                    <th className="text-center p-4 font-bold text-primary-700 dark:text-primary-300 bg-primary-50/50 dark:bg-primary-900/30">
                      {t('services.saasVsFullControl.comparisonTable.saas')}
                    </th>
                    <th className="text-center p-4 font-bold text-accent-700 dark:text-accent-300 bg-accent-50/50 dark:bg-accent-900/30">
                      {t('services.saasVsFullControl.comparisonTable.fullControl')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => {
                    const Icon = row.icon
                    return (
                      <tr
                        key={row.key}
                        className={`border-b border-secondary-200 dark:border-secondary-700 ${
                          index % 2 === 0
                            ? 'bg-white/40 dark:bg-secondary-900/20'
                            : 'bg-secondary-50/30 dark:bg-secondary-800/10'
                        }`}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-secondary-600 dark:text-secondary-400 flex-shrink-0" />
                            <span className="font-medium text-secondary-900 dark:text-white text-sm sm:text-base">
                              {row.label}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {row.key === 'modifications' || row.key === 'resale' ? (
                              <XMarkIcon className="w-5 h-5 text-red-500" />
                            ) : (
                              <CheckIcon className="w-5 h-5 text-green-500" />
                            )}
                            <span className="text-sm sm:text-base text-secondary-700 dark:text-secondary-200">
                              {row.saas}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <CheckIcon className="w-5 h-5 text-green-500" />
                            <span className="text-sm sm:text-base text-secondary-700 dark:text-secondary-200">
                              {row.fullControl}
                            </span>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SaaSVsFullControlComparison

