import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { XMarkIcon, CloudIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export type PlanId =
  | 'saas-goodDeal'
  | 'saas-normal'
  | 'saas-premium'
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

  if (!open || !planId) return null

  let baseKey = ''
  let category: 'saas' | 'fullControl' = 'saas'

  switch (planId) {
    case 'saas-goodDeal':
      baseKey = 'services.saas.goodDeal'
      category = 'saas'
      break
    case 'saas-normal':
      baseKey = 'services.saas.normal'
      category = 'saas'
      break
    case 'saas-premium':
      baseKey = 'services.saas.premium'
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
  const description = t(`${baseKey}.description`)
  const features = [
    t(`${baseKey}.feature1`),
    t(`${baseKey}.feature2`),
    t(`${baseKey}.feature3`),
    t(`${baseKey}.feature4`),
  ]

  const detailsBaseKey =
    category === 'saas' ? 'services.details.saas' : 'services.details.fullControl'

  const contactLink = `/contact?plan=${planId}`

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
          <div className="px-4 sm:px-6 md:px-8 pt-3.5 sm:pt-4 md:pt-5 pb-2.5 sm:pb-3.5 md:pb-4 border-b border-secondary-100 dark:border-secondary-800 bg-gradient-to-r from-primary-50/90 via-white to-accent-50/80 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800/90">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex items-start gap-2.5 sm:gap-3.5">
                <div className="hidden sm:flex w-11 h-11 rounded-2xl bg-primary-600/90 text-white items-center justify-center shadow-lg">
                  {category === 'saas' ? (
                    <CloudIcon className="w-6 h-6" />
                  ) : (
                    <ShieldCheckIcon className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-1.5">
                    {category === 'saas'
                      ? t('services.details.saas.label')
                      : t('services.details.fullControl.label')}
                  </p>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary-900 dark:text-white mb-1">
                    {name}
                  </h2>
                  <p className="text-[0.7rem] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-300 max-w-xl md:max-w-2xl">
                    {description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="inline-flex flex-col items-end px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-primary-600 text-white shadow-lg min-w-[8.5rem] sm:min-w-[9rem]">
                  <span className="text-[0.65rem] sm:text-xs uppercase tracking-wide opacity-80">
                    {category === 'saas'
                      ? t('services.details.saas.priceLabel')
                      : t('services.details.fullControl.priceLabel')}
                  </span>
                  <span className="text-sm sm:text-base font-semibold">{price}</span>
                  {category === 'saas' && (
                    <span className="mt-1 text-[0.7rem] sm:text-xs text-white/90">
                      {t(`${baseKey}.annualHighlight`)}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={t('services.details.close')}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-secondary-200/80 dark:border-secondary-600/80 bg-white/80 dark:bg-secondary-900/80 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 sm:px-8 py-5 sm:py-6 space-y-6 max-h-[75vh] overflow-y-auto bg-white dark:bg-secondary-900">
            {/* Overview */}
            <div className="border border-secondary-100 dark:border-secondary-700 rounded-xl p-4 bg-secondary-50/60 dark:bg-secondary-900/50">
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-1.5">
                {t('services.details.overviewTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed mb-2">
                {description}
              </p>
              {category === 'saas' && (
                <p className="text-[0.7rem] sm:text-xs text-secondary-600 dark:text-secondary-300">
                  {t('services.details.saas.billingIntro')}
                </p>
              )}
            </div>

            {category === 'saas' && (
              <div className="border border-primary-100 dark:border-primary-700 rounded-xl p-4 bg-primary-50/60 dark:bg-primary-900/30">
                <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-1.5">
                  {t('services.details.saas.billingTitle')}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-secondary-700 dark:text-secondary-100">
                  <li>{t(`${baseKey}.annualPrice`)}</li>
                  <li>{t(`${baseKey}.annualSaving`)}</li>
                </ul>
              </div>
            )}

            {/* Features */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-3">
                {t('services.features')}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-200"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Audience & ownership */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  {t(`${detailsBaseKey}.audienceTitle`)}
                </h3>
                <p className="text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                  {t(`${detailsBaseKey}.audience`)}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  {t(`${detailsBaseKey}.ownershipTitle`)}
                </h3>
                <p className="text-sm text-secondary-700 dark:text-secondary-200 leading-relaxed">
                  {t(`${detailsBaseKey}.ownership`)}
                </p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="border border-secondary-100 dark:border-secondary-700 rounded-xl p-4 bg-secondary-50/60 dark:bg-secondary-900/60">
                <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  {t(`${detailsBaseKey}.clientResponsibilitiesTitle`)}
                </h3>
                <p className="text-xs text-secondary-600 dark:text-secondary-300">
                  {t(`${detailsBaseKey}.clientResponsibilities`)}
                </p>
              </div>
              <div className="border border-primary-100 dark:border-primary-700 rounded-xl p-4 bg-primary-50/60 dark:bg-primary-900/40">
                <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                  {t(`${detailsBaseKey}.devResponsibilitiesTitle`)}
                </h3>
                <p className="text-xs text-secondary-700 dark:text-secondary-100">
                  {t(`${detailsBaseKey}.devResponsibilities`)}
                </p>
              </div>
            </div>

            {/* Stop / cancellation */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                {t(`${detailsBaseKey}.stopTitle`)}
              </h3>
              <p className="text-xs text-secondary-700 dark:text-secondary-200 leading-relaxed">
                {t(`${detailsBaseKey}.stop`)}
              </p>
            </div>
          </div>

          {/* Footer actions */}
          <div className="px-6 sm:px-8 py-4 sm:py-5 border-t border-secondary-100 dark:border-secondary-800 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center bg-secondary-50/60 dark:bg-secondary-900/80">
            <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300">
              {t('services.details.helper')}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-secondary-300 dark:border-secondary-600 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100/70 dark:hover:bg-secondary-800 transition-colors"
              >
                {t('services.details.close')}
              </button>
              <Link
                to={contactLink}
                className="px-4 py-2 rounded-lg bg-primary-600 text-white text-xs sm:text-sm font-semibold hover:bg-primary-500 shadow-md hover:shadow-lg transition-colors"
              >
                {t('services.details.contactCta')}
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ServiceDetailsDialog


