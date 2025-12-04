import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
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

function SaaSVsFullControlComparison() {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-7xl mx-auto mt-12 md:mt-16 mb-12 md:mb-16 px-4 sm:px-6"
    >
      <div className="bg-gradient-to-br from-white/80 to-secondary-50/80 dark:from-secondary-800/80 dark:to-secondary-900/80 backdrop-blur-sm rounded-2xl border border-secondary-200 dark:border-secondary-700 shadow-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-10 right-10 w-48 h-48 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent-400 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="text-center mb-8 md:mb-10 relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <ChartBarIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white">
              {t('services.saasVsFullControl.title')}
            </h3>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-2">
            {t('services.saasVsFullControl.subtitle')}
          </p>
        </div>

        {/* Principle Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 md:mb-10 p-5 sm:p-6 md:p-8 bg-white/80 dark:bg-secondary-900/60 backdrop-blur-sm rounded-xl border border-primary-200 dark:border-primary-800 shadow-lg relative"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900 dark:text-white mb-4 md:mb-5">
            {t('services.saasVsFullControl.principleTitle')}
          </h4>
          <div className="mb-4 md:mb-5">
            <h5 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2 md:mb-3">
              {t('services.saasVsFullControl.principleGeneral')}
            </h5>
            <p className="text-sm sm:text-base md:text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed">
              {t('services.saasVsFullControl.principleGeneralDesc')}
            </p>
          </div>
          <div>
            <h5 className="text-base sm:text-lg font-semibold text-primary-700 dark:text-primary-300 mb-2 md:mb-3">
              {t('services.saasVsFullControl.fundamentalDifference')}
            </h5>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="overflow-x-auto -mx-4 sm:-mx-6 md:mx-0"
        >
          <div className="inline-block min-w-full align-middle px-4 sm:px-6 md:px-0">
            <table className="w-full border-collapse bg-white/60 dark:bg-secondary-900/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr className="border-b-2 border-secondary-300 dark:border-secondary-600">
                  <th className="text-left p-3 sm:p-4 md:p-5 font-bold text-xs sm:text-sm md:text-base text-secondary-900 dark:text-white bg-secondary-100/50 dark:bg-secondary-800/50 sticky left-0 z-10">
                    {t('services.saasVsFullControl.comparisonTable.criteria')}
                  </th>
                  <th className="text-center p-3 sm:p-4 md:p-5 font-bold text-xs sm:text-sm md:text-base text-primary-700 dark:text-primary-300 bg-primary-50/50 dark:bg-primary-900/30 min-w-[200px] sm:min-w-[250px]">
                    {t('services.saasVsFullControl.comparisonTable.saas')}
                  </th>
                  <th className="text-center p-3 sm:p-4 md:p-5 font-bold text-xs sm:text-sm md:text-base text-accent-700 dark:text-accent-300 bg-accent-50/50 dark:bg-accent-900/30 min-w-[200px] sm:min-w-[250px]">
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
                      <td className="p-3 sm:p-4 md:p-5 sticky left-0 z-10 bg-inherit">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-600 dark:text-secondary-400 flex-shrink-0" />
                          <span className="font-medium text-secondary-900 dark:text-white text-xs sm:text-sm md:text-base">
                            {row.label}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 sm:p-4 md:p-5 text-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                          {row.key === 'modifications' || row.key === 'resale' ? (
                            <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                          ) : (
                            <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          )}
                          <span className="text-xs sm:text-sm md:text-base text-secondary-700 dark:text-secondary-200 break-words">
                            {row.saas}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 sm:p-4 md:p-5 text-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                          <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm md:text-base text-secondary-700 dark:text-secondary-200 break-words">
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
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SaaSVsFullControlComparison

