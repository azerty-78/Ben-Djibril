import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  XMarkIcon,
  CloudIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  KeyIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  StopCircleIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  ServerIcon,
  AcademicCapIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

export type PlanId =
  | 'saas-goodDeal'
  | 'saas-pro'
  | 'saas-ultra'
  | 'full-ultraSpeed'
  | 'full-speed'
  | 'full-normal'

type ServiceDetailsDialogProps = {
  open: boolean
  planId: PlanId | null
  onClose: () => void
}

function ServiceDetailsDialog({ open, planId, onClose }: ServiceDetailsDialogProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  if (!open || !planId) return null

  let baseKey = ''
  let category: 'saas' | 'fullControl' = 'saas'

  switch (planId) {
    case 'saas-goodDeal':
      baseKey = 'services.saas.goodDeal'
      category = 'saas'
      break
    case 'saas-pro':
      baseKey = 'services.saas.pro'
      category = 'saas'
      break
    case 'saas-ultra':
      baseKey = 'services.saas.ultra'
      category = 'saas'
      break
    case 'full-ultraSpeed':
      baseKey = 'services.fullControl.ultraSpeed'
      category = 'fullControl'
      break
    case 'full-speed':
      baseKey = 'services.fullControl.speed'
      category = 'fullControl'
      break
    case 'full-normal':
      baseKey = 'services.fullControl.normal'
      category = 'fullControl'
      break
  }

  const name = t(`${baseKey}.name`)
  const price = t(`${baseKey}.price`)
  const priceUnit = category === 'saas' ? t(`${baseKey}.priceUnit`) : undefined
  const deliveryTime = category === 'fullControl' ? t(`${baseKey}.deliveryTime`) : undefined
  const description = t(`${baseKey}.description`)
  const features = [
    t(`${baseKey}.feature1`),
    t(`${baseKey}.feature2`),
    t(`${baseKey}.feature3`),
    t(`${baseKey}.feature4`),
    ...(category === 'fullControl'
      ? [
          t(`${baseKey}.feature5`),
          t(`${baseKey}.feature6`),
          t(`${baseKey}.feature7`),
          t(`${baseKey}.feature8`),
        ]
      : []),
  ]

  const detailsBaseKey =
    category === 'saas' ? 'services.details.saas' : 'services.details.fullControl'

  const handleChooseService = () => {
    onClose()
    if (category === 'fullControl') {
      navigate('/contact')
    } else {
      navigate('/services')
      // Scroll to services section after a short delay
      setTimeout(() => {
        const servicesSection = document.querySelector('[data-section="services"]')
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-secondary-900 rounded-2xl lg:rounded-3xl shadow-2xl border border-secondary-100/80 dark:border-secondary-700/80 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-secondary-100 dark:border-secondary-800 bg-gradient-to-r from-primary-50/90 via-white to-accent-50/80 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800/90">
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="flex w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary-600/90 text-white items-center justify-center shadow-lg flex-shrink-0">
                  {category === 'saas' ? (
                    <CloudIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] text-primary-600 dark:text-primary-400 mb-0.5 sm:mb-1">
                    {category === 'saas'
                      ? t('services.details.saas.label')
                      : t('services.details.fullControl.label')}
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900 dark:text-white truncate">
                    {name}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <div className="inline-flex flex-col items-end px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-primary-600 text-white shadow-lg min-w-[6rem] sm:min-w-[8rem]">
                  <span className="hidden sm:inline text-[0.65rem] sm:text-xs uppercase tracking-wide opacity-80 mb-0.5">
                    {category === 'saas'
                      ? t('services.details.saas.priceLabel')
                      : t('services.details.fullControl.priceLabel')}
                  </span>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-baseline gap-1 leading-tight">
                      <span className="text-base sm:text-lg font-semibold">{price}</span>
                      {priceUnit && (
                        <span className="text-xs sm:text-sm opacity-90 font-normal">
                          {priceUnit}
                        </span>
                      )}
                    </div>
                    {deliveryTime && (
                      <span className="text-[0.65rem] sm:text-xs opacity-80">
                        {deliveryTime}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t('services.details.close')}
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-secondary-200/80 dark:border-secondary-600/80 bg-white/80 dark:bg-secondary-900/80 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors flex-shrink-0"
                >
                  <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 space-y-5 sm:space-y-6 max-h-[calc(90vh-160px)] sm:max-h-[calc(90vh-180px)] overflow-y-auto bg-white dark:bg-secondary-900 scrollbar-thin scrollbar-thumb-secondary-300 dark:scrollbar-thumb-secondary-600 scrollbar-track-transparent">
            {/* Overview */}
            <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary-50/80 to-primary-100/40 dark:from-primary-900/30 dark:to-primary-800/20">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary-600/10 dark:bg-primary-400/20 flex items-center justify-center">
                  <InformationCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {t('services.details.overviewTitle')}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
              {category === 'saas' && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary-200/60 dark:border-primary-700/40 flex items-start gap-3">
                  <CurrencyDollarIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                    {t('services.details.saas.billingIntro')}
                  </p>
                </div>
              )}
            </div>

            {category === 'saas' && (
              <div className="border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-emerald-50/80 to-emerald-100/40 dark:from-emerald-900/20 dark:to-emerald-800/10">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/20 flex items-center justify-center">
                    <CurrencyDollarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-3">
                      {t('services.details.saas.billingTitle')}
                    </h3>
                    <ul className="space-y-2.5 sm:space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">{t(`${baseKey}.annualPrice`)}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">{t(`${baseKey}.annualSaving`)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {category === 'fullControl' && (
              <>
                <div className="border border-primary-200 dark:border-primary-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary-50/80 to-primary-100/40 dark:from-primary-900/20 dark:to-primary-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary-600/10 dark:bg-primary-400/20 flex items-center justify-center">
                      <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-3">
                        {t('services.details.fullControl.deliverablesTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                        {t('services.details.fullControl.deliverables')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-accent-200 dark:border-accent-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-accent-50/80 to-accent-100/40 dark:from-accent-900/20 dark:to-accent-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-600/10 dark:bg-accent-400/20 flex items-center justify-center">
                      <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600 dark:text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.techStackTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.techStackDescription')}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.techStackBackend')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.techStackFrontend')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.techStackDatabase')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.techStackSecurity')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.techStackInfrastructure')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.techStackAdditional')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Infrastructure & Hosting */}
                <div className="border border-emerald-200 dark:border-emerald-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-emerald-50/80 to-emerald-100/40 dark:from-emerald-900/20 dark:to-emerald-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-600/10 dark:bg-emerald-400/20 flex items-center justify-center">
                      <ServerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.infrastructureTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.infrastructureDescription')}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.infrastructureServerUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.infrastructureServerSpeed')
                                : t('services.details.fullControl.infrastructureServerNormal')}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.infrastructureDomain')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.infrastructureSSL')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.infrastructureEmailsUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.infrastructureEmailsSpeed')
                                : t('services.details.fullControl.infrastructureEmailsNormal')}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.infrastructureCDNUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.infrastructureCDNSpeed')
                                : t('services.details.fullControl.infrastructureCDNNormal')}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.infrastructureBackupsUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.infrastructureBackupsSpeed')
                                : t('services.details.fullControl.infrastructureBackupsNormal')}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div className="border border-purple-200 dark:border-purple-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-purple-50/80 to-purple-100/40 dark:from-purple-900/20 dark:to-purple-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600/10 dark:bg-purple-400/20 flex items-center justify-center">
                      <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.securityTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.securityDescription')}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.securityAuth')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.securityProtection')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.securityHeaders')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.securityServer')}</span>
                        </li>
                        {planId !== 'full-ultraSpeed' && (
                          <li className="flex items-start gap-2">
                            <CheckCircleIcon className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                            <span>
                              {planId === 'full-speed'
                                ? t('services.details.fullControl.securityAdvancedSpeed')
                                : t('services.details.fullControl.securityAdvancedNormal')}
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Training */}
                <div className="border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-indigo-50/80 to-indigo-100/40 dark:from-indigo-900/20 dark:to-indigo-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-indigo-600/10 dark:bg-indigo-400/20 flex items-center justify-center">
                      <AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.trainingTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.trainingDescription')}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.trainingUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.trainingSpeed')
                                : t('services.details.fullControl.trainingNormal')}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span>{t('services.details.fullControl.trainingFormat')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div className="border border-orange-200 dark:border-orange-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-orange-50/80 to-orange-100/40 dark:from-orange-900/20 dark:to-orange-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-orange-600/10 dark:bg-orange-400/20 flex items-center justify-center">
                      <WrenchScrewdriverIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.supportTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.supportDescription')}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.supportUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.supportSpeed')
                                : t('services.details.fullControl.supportNormal')}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.supportBugsUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.supportBugsSpeed')
                                : t('services.details.fullControl.supportBugsNormal')}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Warranty */}
                <div className="border border-green-200 dark:border-green-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-green-50/80 to-green-100/40 dark:from-green-900/20 dark:to-green-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-600/10 dark:bg-green-400/20 flex items-center justify-center">
                      <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.warrantyTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.warrantyDescription')}
                      </p>
                      <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                        {planId === 'full-ultraSpeed'
                          ? t('services.details.fullControl.warrantyUltra')
                          : planId === 'full-speed'
                            ? t('services.details.fullControl.warrantySpeed')
                            : t('services.details.fullControl.warrantyNormal')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Limits & Exclusions */}
                <div className="border border-amber-200 dark:border-amber-800 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-amber-50/80 to-amber-100/40 dark:from-amber-900/20 dark:to-amber-800/10">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-amber-600/10 dark:bg-amber-400/20 flex items-center justify-center">
                      <ExclamationTriangleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                        {t('services.details.fullControl.limitsTitle')}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 mb-3 leading-relaxed">
                        {t('services.details.fullControl.limitsDescription')}
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">•</span>
                          <span>
                            {planId === 'full-ultraSpeed'
                              ? t('services.details.fullControl.limitsUltra')
                              : planId === 'full-speed'
                                ? t('services.details.fullControl.limitsSpeed')
                                : t('services.details.fullControl.limitsNormal')}
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5">•</span>
                          <span>{t('services.details.fullControl.limitsCommon')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Features */}
            <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-secondary-50/40 dark:bg-secondary-800/20">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-success-500/10 dark:bg-success-400/20 flex items-center justify-center">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-success-600 dark:text-success-400" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white">
                  {t('services.features')}
                </h3>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 bg-white/60 dark:bg-secondary-900/40 rounded-lg p-3 sm:p-4 border border-secondary-100/60 dark:border-secondary-700/40"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-success-500 dark:text-success-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience & ownership */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-accent-50/60 to-accent-100/30 dark:from-accent-900/20 dark:to-accent-800/10">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent-600/10 dark:bg-accent-400/20 flex items-center justify-center">
                    <UserGroupIcon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                      {t(`${detailsBaseKey}.audienceTitle`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                      {t(`${detailsBaseKey}.audience`)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-secondary-50/60 to-secondary-100/30 dark:from-secondary-800/20 dark:to-secondary-700/10">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary-600/10 dark:bg-secondary-400/20 flex items-center justify-center">
                    <KeyIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                      {t(`${detailsBaseKey}.ownershipTitle`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                      {t(`${detailsBaseKey}.ownership`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-white/60 dark:bg-secondary-900/40">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary-600/10 dark:bg-secondary-400/20 flex items-center justify-center">
                    <ClipboardDocumentCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                      {t(`${detailsBaseKey}.clientResponsibilitiesTitle`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                      {t(`${detailsBaseKey}.clientResponsibilities`)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-primary-200 dark:border-primary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary-50/60 to-primary-100/30 dark:from-primary-900/30 dark:to-primary-800/20">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary-600/10 dark:bg-primary-400/20 flex items-center justify-center">
                    <WrenchScrewdriverIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                      {t(`${detailsBaseKey}.devResponsibilitiesTitle`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                      {t(`${detailsBaseKey}.devResponsibilities`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stop / cancellation */}
            <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-secondary-50/50 dark:bg-secondary-800/30">
              <div className="flex items-start gap-3 mb-3 sm:mb-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-secondary-600/10 dark:bg-secondary-400/20 flex items-center justify-center">
                  <StopCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-secondary-900 dark:text-white mb-2">
                    {t(`${detailsBaseKey}.stopTitle`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                    {t(`${detailsBaseKey}.stop`)}
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Notice */}
            <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-blue-50/60 to-blue-100/30 dark:from-blue-900/20 dark:to-blue-800/10">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-600/10 dark:bg-blue-400/20 flex items-center justify-center">
                  <DocumentTextIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed flex-1">
                  {t('services.details.helper')}
                </p>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="sticky bottom-0 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-t border-secondary-100 dark:border-secondary-800 bg-white dark:bg-secondary-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] z-10">
            <div className="flex flex-row gap-2 sm:gap-3 justify-end items-center">
              <button
                type="button"
                onClick={onClose}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-secondary-300 dark:border-secondary-600 text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100/70 dark:hover:bg-secondary-800 transition-all duration-200 whitespace-nowrap"
              >
                {t('services.details.close')}
              </button>
              <button
                type="button"
                onClick={handleChooseService}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-primary-600 text-white text-xs sm:text-sm font-semibold hover:bg-primary-500 shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
              >
                {category === 'fullControl'
                  ? t('services.details.requestQuoteCta')
                  : t('services.details.chooseServiceCta')}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceDetailsDialog


