import { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PackageCard from '../ui/PackageCard'
import ServiceDetailsDialog from './ServiceDetailsDialog'
import SaaSComparisonTable from './SaaSComparisonTable'
import type { PlanId } from './ServiceDetailsDialog'

function ServicesPackages() {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const saasScrollRef = useRef<HTMLDivElement | null>(null)
  const fullScrollRef = useRef<HTMLDivElement | null>(null)

  // Détecter le paramètre plan dans l'URL et ouvrir le dialogue
  useEffect(() => {
    const planParam = searchParams.get('plan')
    if (planParam) {
      const validPlans: PlanId[] = [
        'saas-goodDeal',
        'saas-pro',
        'saas-ultra',
        'full-ultraSpeed',
        'full-speed',
        'full-normal',
      ]
      if (validPlans.includes(planParam as PlanId)) {
        setSelectedPlan(planParam as PlanId)
        // Nettoyer l'URL après ouverture
        setSearchParams({}, { replace: true })
      }
    }
  }, [searchParams, setSearchParams])

  return (
    <section data-section="packages" className="py-16 md:py-20 bg-white dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
            {t('services.packagesTitle')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('services.packagesSubtitle')}
          </p>
        </motion.div>

        {/* SaaS category */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-6 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-secondary-900 dark:text-white">
              {t('services.saasTitle')}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              {t('services.saasSubtitle')}
            </p>
            <p className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-medium mt-3 max-w-3xl mx-auto">
              {t('services.saasDeliveryNote')}
            </p>
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
                  onClick={() => setSelectedPlan('saas-goodDeal')}
                  className="shadow-xl"
                />
              </div>

              {/* Normal */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-1">
                    <PackageCard
                      name={t('services.saas.pro.name')}
                      price={t('services.saas.pro.price')}
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
                      onClick={() => setSelectedPlan('saas-pro')}
                    />
              </div>

              {/* Premium */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-3">
                    <PackageCard
                      name={t('services.saas.ultra.name')}
                      price={t('services.saas.ultra.price')}
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
                      onClick={() => setSelectedPlan('saas-ultra')}
                    />
              </div>
            </div>
          </div>

          {/* Comparison button and table */}
          <div className="mt-8 text-center hidden md:block">
            <button
              type="button"
              onClick={() => setShowComparison((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/30 px-6 py-3 text-sm font-semibold text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>
                {showComparison
                  ? t('services.saasComparison.hide')
                  : t('services.saasComparison.show')}
              </span>
              <motion.span
                animate={{ rotate: showComparison ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-600 dark:text-primary-400"
              >
                ↓
              </motion.span>
            </button>
          </div>
          <SaaSComparisonTable open={showComparison} />
        </div>

        {/* Full Control category */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-6 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-secondary-900 dark:text-white">
              {t('services.fullControlTitle')}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              {t('services.fullControlSubtitle')}
            </p>
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
                  description={t('services.fullControl.speed.description')}
                  features={[
                    t('services.fullControl.speed.feature1'),
                    t('services.fullControl.speed.feature2'),
                    t('services.fullControl.speed.feature3'),
                    t('services.fullControl.speed.feature4'),
                  ]}
                  popular
                  popularLabel={t('services.bestValue')}
                  cta={t('services.requestQuote')}
                  onClick={() => setSelectedPlan('full-speed')}
                  className="shadow-xl"
                />
              </div>

              {/* Ultra Speed */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-1">
                <PackageCard
                  name={t('services.fullControl.ultraSpeed.name')}
                  price={t('services.fullControl.ultraSpeed.price')}
                  description={t('services.fullControl.ultraSpeed.description')}
                  features={[
                    t('services.fullControl.ultraSpeed.feature1'),
                    t('services.fullControl.ultraSpeed.feature2'),
                    t('services.fullControl.ultraSpeed.feature3'),
                    t('services.fullControl.ultraSpeed.feature4'),
                  ]}
                  cta={t('services.requestQuote')}
                  onClick={() => setSelectedPlan('full-ultraSpeed')}
                />
              </div>

              {/* Normal */}
              <div className="min-w-[calc(100vw-3rem)] sm:min-w-[320px] flex-shrink-0 snap-center md:min-w-0 w-full md:w-auto md:translate-y-2 md:order-3">
                <PackageCard
                  name={t('services.fullControl.normal.name')}
                  price={t('services.fullControl.normal.price')}
                  description={t('services.fullControl.normal.description')}
                  features={[
                    t('services.fullControl.normal.feature1'),
                    t('services.fullControl.normal.feature2'),
                    t('services.fullControl.normal.feature3'),
                    t('services.fullControl.normal.feature4'),
                  ]}
                  cta={t('services.requestQuote')}
                  onClick={() => setSelectedPlan('full-normal')}
                />
              </div>
            </div>
          </div>
        </div>
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


