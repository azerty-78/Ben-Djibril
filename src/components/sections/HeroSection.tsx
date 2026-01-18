import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import CountUp from '../ui/CountUp'
import { companies } from '../../data/companies'

function HeroSection() {
  const { t } = useTranslation()

  const metrics = [
    { value: 4, label: t('home.metrics.clients'), suffix: '+' },
    { value: 5, label: t('home.metrics.projects'), suffix: '+' },
    { value: 95, label: t('home.metrics.satisfaction'), suffix: '%' },
    { value: '4-12', label: t('home.metrics.delivery'), suffix: '' },
  ]

  return (
    <section className="relative pt-4 sm:pt-6 md:pt-8 pb-16 md:pb-24 overflow-visible">
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          {/* Trust bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-secondary-600 dark:text-secondary-300 mb-4 sm:mb-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
              <span>{t('home.trustBar.experience')}</span>
            </span>
            <span className="hidden sm:inline text-secondary-400 dark:text-secondary-500">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{t('home.trustBar.satisfaction')}</span>
            </span>
            <span className="hidden sm:inline text-secondary-400 dark:text-secondary-500">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
              <span>{t('home.trustBar.responseTime')}</span>
            </span>
          </div>

          <div className="pt-0 sm:pt-2 md:pt-4 pb-4 sm:pb-6 md:pb-8 mb-4 sm:mb-6 overflow-visible">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-[1.4] sm:leading-[1.3] md:leading-[1.25] lg:leading-[1.2] md:whitespace-nowrap overflow-visible min-h-[1.2em]">
              {t('home.title')}
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {t('home.subtitle')}
          </p>

          {/* Segmented CTAs: business vs individual */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-6 md:mb-8">
            <Link
              to="/services?audience=business"
              className="w-full sm:w-auto inline-flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <span className="text-sm sm:text-base font-semibold text-left">
                {t('home.segmentedCta.business')}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs opacity-90">
                <span>{t('home.segmentedCta.businessSubtext')}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/services?audience=individual"
              className="w-full sm:w-auto inline-flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white/90 dark:bg-secondary-900/80 border border-secondary-200 dark:border-secondary-700 text-secondary-900 dark:text-secondary-50 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-sm sm:text-base font-semibold text-left">
                {t('home.segmentedCta.individual')}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-secondary-600 dark:text-secondary-300">
                <span>{t('home.segmentedCta.individualSubtext')}</span>
              </span>
            </Link>
          </div>

          {/* Video teaser card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto mb-10 md:mb-14"
          >
            <div className="relative overflow-hidden rounded-2xl border border-secondary-200/80 dark:border-secondary-700/80 bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-sm hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5" />
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary-600/90 dark:bg-primary-500 flex items-center justify-center shadow-md">
                  <span className="inline-block w-3 h-3 sm:w-3.5 sm:h-3.5 border-l-[9px] border-l-white border-y-[6px] border-y-transparent translate-x-[1px]" />
                </div>
              </div>
              <div className="relative flex-1 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                    {t('home.videoTeaser.badge')}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-secondary-900 dark:text-white mb-0.5">
                  {t('home.videoTeaser.title')}
                </p>
                <p className="text-[11px] sm:text-xs text-secondary-600 dark:text-secondary-300 hidden sm:block">
                  {t('home.videoTeaser.subtitle')}
                </p>
              </div>
              <div className="relative hidden sm:block">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary-700 dark:text-primary-300 hover:underline"
                >
                  {t('home.videoTeaser.cta')}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12 md:mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card text-center p-4 sm:p-6"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {typeof metric.value === 'number' ? (
                    <CountUp end={metric.value} suffix={metric.suffix} duration={2} />
                  ) : (
                    <span>{metric.value}{metric.suffix}</span>
                  )}
                </div>
                <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Clients logos banner - circular images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 md:mt-16"
          >
            <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 mb-6 sm:mb-8 text-center font-medium">
              {t('home.clients.title') || 'Trusted by companies worldwide'}
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 flex-wrap">
              {companies.map((company, i) => (
                <motion.a
                  key={i}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="group relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden transition-all duration-300"
                  title={company.name}
                >
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                      loading="eager"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-sm sm:text-base md:text-lg text-white font-bold">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
