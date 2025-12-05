import { useRef, useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CloudIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import PackageCard from '../ui/PackageCard'
import ServiceDetailsDialog from './ServiceDetailsDialog'
import SaaSComparisonTable from './SaaSComparisonTable'
import FullControlComparisonTable from './FullControlComparisonTable'
import SaaSVsFullControlComparison from './SaaSVsFullControlComparison'
import type { PlanId } from './ServiceDetailsDialog'

const VALID_PLANS: PlanId[] = [
  'saas-goodDeal',
  'saas-pro',
  'saas-ultra',
  'full-ultraSpeed',
  'full-speed',
  'full-normal',
]

function ServicesPackages() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [showSaaSComparison, setShowSaaSComparison] = useState(false)
  const [showFullControlComparison, setShowFullControlComparison] = useState(false)
  const saasScrollRef = useRef<HTMLDivElement | null>(null)
  const fullScrollRef = useRef<HTMLDivElement | null>(null)

  // Détecter le paramètre plan dans l'URL et ouvrir le dialogue
  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam && VALID_PLANS.includes(planParam as PlanId)) {
      setSelectedPlan(planParam as PlanId)
      // Nettoyer l'URL après ouverture
      setSearchParams({}, { replace: true })
    }
  }, [searchParams, setSearchParams])

  const handlePlanClick = useCallback((planId: PlanId) => {
    setSelectedPlan(planId)
  }, [])

  const toggleSaaSComparison = useCallback(() => {
    setShowSaaSComparison((prev) => !prev)
  }, [])

  const toggleFullControlComparison = useCallback(() => {
    setShowFullControlComparison((prev) => !prev)
  }, [])

  return (
    <section data-section="packages" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <CloudIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white">
              {t('services.packagesTitle')}
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto px-2">
            {t('services.packagesSubtitle')}
          </p>
        </motion.div>

        {/* SaaS category */}
        <motion.div
          data-subsection="saas"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <CloudIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white">
                {t('services.saasTitle')}
              </h3>
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-2 mb-3 sm:mb-4">
              {t('services.saasSubtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-primary-50 dark:bg-primary-900/30 rounded-lg sm:rounded-full border border-primary-200 dark:border-primary-800 max-w-full mx-auto"
            >
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse flex-shrink-0 mt-1 sm:mt-0" />
              <p className="text-xs sm:text-sm md:text-base text-primary-700 dark:text-primary-300 font-medium leading-relaxed break-words">
                {t('services.saasDeliveryNote')}
              </p>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 md:mt-8">
            <div
              ref={saasScrollRef}
              className="flex gap-4 overflow-x-auto overflow-y-visible pb-4 pt-6 snap-x snap-mandatory scrollbar-hide md:pb-0 md:grid md:grid-cols-3 md:gap-8 md:pt-4 md:overflow-visible md:snap-none -mx-4 px-6 md:mx-0 md:px-0"
            >
              {/* Good Deal – en premier sur mobile, au centre sur desktop */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:-translate-y-2 md:scale-105 md:order-2 relative">
                <PackageCard
                  name={t('services.saas.goodDeal.name')}
                  price={t('services.saas.goodDeal.price')}
                  priceUnit={t('services.saas.goodDeal.priceUnit')}
                  oldPrice="18 500 F HT"
                  secondaryPrice={t('services.saas.goodDeal.annualPrice')}
                  savingLabel={t('services.saas.goodDeal.annualSaving')}
                  description={t('services.saas.goodDeal.description')}
                  features={[
                    t('services.saas.goodDeal.feature1'),
                    t('services.saas.goodDeal.feature2'),
                    t('services.saas.goodDeal.feature3'),
                    t('services.saas.goodDeal.feature4'),
                  ]}
                  popular
                  popularLabel={t('services.mostPopular')}
                  cta={t('services.getStarted')}
                  onClick={() => handlePlanClick('saas-goodDeal')}
                  className="shadow-xl"
                />
              </div>

              {/* Normal */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-1">
                    <PackageCard
                      name={t('services.saas.pro.name')}
                      price={t('services.saas.pro.price')}
                      priceUnit={t('services.saas.pro.priceUnit')}
                      oldPrice="30 700 F HT"
                      secondaryPrice={t('services.saas.pro.annualPrice')}
                      savingLabel={t('services.saas.pro.annualSaving')}
                      description={t('services.saas.pro.description')}
                      features={[
                        t('services.saas.pro.feature1'),
                        t('services.saas.pro.feature2'),
                        t('services.saas.pro.feature3'),
                        t('services.saas.pro.feature4'),
                      ]}
                      cta={t('services.getStarted')}
                      onClick={() => handlePlanClick('saas-pro')}
                    />
              </div>

              {/* Premium */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-3">
                    <PackageCard
                      name={t('services.saas.ultra.name')}
                      price={t('services.saas.ultra.price')}
                      priceUnit={t('services.saas.ultra.priceUnit')}
                      oldPrice="50 900 F HT"
                      secondaryPrice={t('services.saas.ultra.annualPrice')}
                      savingLabel={t('services.saas.ultra.annualSaving')}
                      description={t('services.saas.ultra.description')}
                      features={[
                        t('services.saas.ultra.feature1'),
                        t('services.saas.ultra.feature2'),
                        t('services.saas.ultra.feature3'),
                        t('services.saas.ultra.feature4'),
                      ]}
                      cta={t('services.getStarted')}
                      onClick={() => handlePlanClick('saas-ultra')}
                    />
              </div>
            </div>
          </div>

          {/* Comparison button and table */}
          <div className="mt-8 text-center hidden md:block">
            <button
                    type="button"
                    onClick={toggleSaaSComparison}
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30 px-6 py-3 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    <span>
                      {showSaaSComparison
                        ? t('services.saasComparison.hide')
                        : t('services.saasComparison.show')}
                    </span>
              <motion.span
                animate={{ rotate: showSaaSComparison ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-600 dark:text-primary-400"
              >
                ↓
              </motion.span>
            </button>
          </div>
          <SaaSComparisonTable open={showSaaSComparison} />
        </motion.div>

        {/* Full Control category */}
        <motion.div
          data-subsection="fullControl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-400 rounded-full blur-xl opacity-50" />
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <CodeBracketIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white">
                {t('services.fullControlTitle')}
              </h3>
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto px-2 mb-3 sm:mb-4">
              {t('services.fullControlSubtitle')}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-accent-50 dark:bg-accent-900/30 rounded-lg sm:rounded-full border border-accent-200 dark:border-accent-800 max-w-full mx-auto"
            >
              <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse flex-shrink-0 mt-1 sm:mt-0" />
              <p className="text-xs sm:text-sm md:text-base text-accent-700 dark:text-accent-300 font-medium leading-relaxed break-words">
                {t('services.fullControlDeliveryNote')}
              </p>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto mt-6 md:mt-8">
            <div
              ref={fullScrollRef}
              className="flex gap-4 overflow-x-auto overflow-y-visible pb-4 pt-6 snap-x snap-mandatory scrollbar-hide md:pb-0 md:grid md:grid-cols-3 md:gap-8 md:pt-4 md:overflow-visible md:snap-none -mx-4 px-6 md:mx-0 md:px-0"
            >
              {/* Speed – en premier sur mobile, au centre sur desktop */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:-translate-y-2 md:scale-105 md:order-2 relative">
                <PackageCard
                  name={t('services.fullControl.speed.name')}
                  price={t('services.fullControl.speed.price')}
                  deliveryTime={t('services.fullControl.speed.deliveryTime')}
                  description={t('services.fullControl.speed.description')}
                  features={[
                    t('services.fullControl.speed.feature1'),
                    t('services.fullControl.speed.feature2'),
                    t('services.fullControl.speed.feature3'),
                    t('services.fullControl.speed.feature4'),
                    t('services.fullControl.speed.feature5'),
                    t('services.fullControl.speed.feature6'),
                    t('services.fullControl.speed.feature7'),
                    t('services.fullControl.speed.feature8'),
                  ]}
                  popular
                  popularLabel={t('services.bestValue')}
                  cta={t('services.requestQuote')}
                  onClick={() => handlePlanClick('full-speed')}
                  className="shadow-xl"
                />
              </div>

              {/* Ultra Speed */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-1">
                <PackageCard
                  name={t('services.fullControl.ultraSpeed.name')}
                  price={t('services.fullControl.ultraSpeed.price')}
                  deliveryTime={t('services.fullControl.ultraSpeed.deliveryTime')}
                  description={t('services.fullControl.ultraSpeed.description')}
                  features={[
                    t('services.fullControl.ultraSpeed.feature1'),
                    t('services.fullControl.ultraSpeed.feature2'),
                    t('services.fullControl.ultraSpeed.feature3'),
                    t('services.fullControl.ultraSpeed.feature4'),
                    t('services.fullControl.ultraSpeed.feature5'),
                    t('services.fullControl.ultraSpeed.feature6'),
                    t('services.fullControl.ultraSpeed.feature7'),
                    t('services.fullControl.ultraSpeed.feature8'),
                  ]}
                  cta={t('services.requestQuote')}
                  onClick={() => handlePlanClick('full-ultraSpeed')}
                />
              </div>

              {/* Normal */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-3">
                <PackageCard
                  name={t('services.fullControl.normal.name')}
                  price={t('services.fullControl.normal.price')}
                  deliveryTime={t('services.fullControl.normal.deliveryTime')}
                  description={t('services.fullControl.normal.description')}
                  features={[
                    t('services.fullControl.normal.feature1'),
                    t('services.fullControl.normal.feature2'),
                    t('services.fullControl.normal.feature3'),
                    t('services.fullControl.normal.feature4'),
                    t('services.fullControl.normal.feature5'),
                    t('services.fullControl.normal.feature6'),
                    t('services.fullControl.normal.feature7'),
                    t('services.fullControl.normal.feature8'),
                  ]}
                  cta={t('services.requestQuote')}
                  onClick={() => handlePlanClick('full-normal')}
                />
              </div>
            </div>
          </div>

          {/* Comparison button and table */}
          <div className="mt-8 text-center hidden md:block">
            <button
              type="button"
              onClick={toggleFullControlComparison}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30 px-6 py-3 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>
                {showFullControlComparison
                  ? t('services.fullControlComparison.hide')
                  : t('services.fullControlComparison.show')}
              </span>
              <motion.span
                animate={{ rotate: showFullControlComparison ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-600 dark:text-primary-400"
              >
                ↓
              </motion.span>
            </button>
          </div>
          <FullControlComparisonTable open={showFullControlComparison} />

          {/* SaaS vs Full Control Comparison */}
          <SaaSVsFullControlComparison />
        </motion.div>
      </div>

      <ServiceDetailsDialog
        open={selectedPlan !== null}
        planId={selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  )
}

export default ServicesPackages


