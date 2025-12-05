import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CloudIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

function ServicesHero() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -top-16 -right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-10 w-72 sm:w-[26rem] h-72 sm:h-[26rem] bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-300">
                SaaS & Full Control · {t('services.title')}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-secondary-900 dark:text-white leading-tight">
              {t('services.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-4 sm:mb-6">
              {t('services.subtitle')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              {t('services.heroDescription')}
            </p>

            {/* Pills for SaaS vs Full Control */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-secondary-900/70 shadow-md border border-primary-100 dark:border-primary-700/60">
                <div className="w-9 h-9 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center">
                  <CloudIcon className="w-5 h-5 text-primary-600 dark:text-primary-300" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300">
                    SaaS
                  </p>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                    {t('services.saasSubtitle')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-secondary-900/70 shadow-md border border-accent-100 dark:border-accent-700/60">
                <div className="w-9 h-9 rounded-xl bg-accent-50 dark:bg-accent-900/40 flex items-center justify-center">
                  <CodeBracketIcon className="w-5 h-5 text-accent-600 dark:text-accent-300" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-300">
                    Full Control
                  </p>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                    {t('services.fullControlSubtitle')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-3xl bg-primary-500/10 dark:bg-primary-400/10 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 w-24 h-24 rounded-full bg-accent-500/10 dark:bg-accent-400/10 blur-2xl" />

            <div className="relative bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm rounded-3xl border border-secondary-100 dark:border-secondary-700 shadow-2xl p-5 sm:p-6 md:p-8">
              <div className="grid gap-4 sm:gap-5">
                {/* SaaS card preview */}
                <div className="rounded-2xl border border-primary-100 dark:border-primary-700 bg-primary-50/70 dark:bg-primary-900/40 p-4 sm:p-5 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-primary-600 dark:text-primary-300 font-semibold">
                        SaaS
                      </p>
                      <p className="text-sm sm:text-base font-bold text-secondary-900 dark:text-white">
                        {t('services.saas.goodDeal.name')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-secondary-500 dark:text-secondary-400 line-through">
                        18 500 F HT
                      </p>
                      <p className="text-xl sm:text-2xl font-extrabold text-primary-700 dark:text-primary-300">
                        15 500 F
                      </p>
                      <p className="text-[10px] sm:text-xs text-secondary-600 dark:text-secondary-300">
                        {t('services.saas.goodDeal.priceUnit')}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                    {t('services.saas.goodDeal.shortDesc')}
                  </p>
                </div>

                {/* Full Control card preview */}
                <div className="rounded-2xl border border-accent-100 dark:border-accent-700 bg-accent-50/70 dark:bg-accent-900/40 p-4 sm:p-5 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-accent-600 dark:text-accent-300 font-semibold">
                        Full Control
                      </p>
                      <p className="text-sm sm:text-base font-bold text-secondary-900 dark:text-white">
                        {t('services.fullControl.speed.name')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-secondary-500 dark:text-secondary-400">
                        {t('services.fullControl.speed.deliveryTime')}
                      </p>
                      <p className="text-[10px] sm:text-xs text-secondary-600 dark:text-secondary-300">
                        {t('services.fullControl.speed.price')}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                    {t('services.fullControl.speed.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero


