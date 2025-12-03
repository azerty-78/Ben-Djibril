import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import PackageCard from '../ui/PackageCard'
import ServiceDetailsDialog from './ServiceDetailsDialog'
import SaaSComparisonTable from './SaaSComparisonTable'
import type { PlanId } from './ServiceDetailsDialog'

function ServicesPackages() {
  const { t } = useTranslation()
  const [selectedPlan, setSelectedPlan] = useState<PlanId | null>(null)
  const [showComparison, setShowComparison] = useState(false)

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-secondary-900">
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
        <div className="mb-16">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-secondary-900 dark:text-white">
              {t('services.saasTitle')}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              {t('services.saasSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
            <PackageCard
              name={t('services.saas.normal.name')}
              price={t('services.saas.normal.price')}
              secondaryPrice={t('services.saas.normal.annualPrice')}
              savingLabel={t('services.saas.normal.annualSaving')}
              description={t('services.saas.normal.description')}
              features={[
                t('services.saas.normal.feature1'),
                t('services.saas.normal.feature2'),
                t('services.saas.normal.feature3'),
                t('services.saas.normal.feature4'),
              ]}
              cta={t('services.getStarted')}
              onClick={() => setSelectedPlan('saas-normal')}
              className="md:translate-y-2"
            />

            <PackageCard
              name={t('services.saas.goodDeal.name')}
              price={t('services.saas.goodDeal.price')}
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
              className="md:-translate-y-3 md:scale-110 shadow-xl"
            />

            <PackageCard
              name={t('services.saas.premium.name')}
              price={t('services.saas.premium.price')}
              secondaryPrice={t('services.saas.premium.annualPrice')}
              savingLabel={t('services.saas.premium.annualSaving')}
              description={t('services.saas.premium.description')}
              features={[
                t('services.saas.premium.feature1'),
                t('services.saas.premium.feature2'),
                t('services.saas.premium.feature3'),
                t('services.saas.premium.feature4'),
              ]}
              cta={t('services.getStarted')}
              onClick={() => setSelectedPlan('saas-premium')}
              className="md:translate-y-2"
            />
          </div>

          {/* Comparison button and table */}
          <div className="mt-8 text-center">
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
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-secondary-900 dark:text-white">
              {t('services.fullControlTitle')}
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              {t('services.fullControlSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
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
              className="md:translate-y-2"
            />

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
              className="md:-translate-y-3 md:scale-110 shadow-xl"
            />

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
              className="md:translate-y-2"
            />
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


