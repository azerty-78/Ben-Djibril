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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/30 dark:from-primary-900/20 dark:via-transparent dark:to-accent-900/20" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="pt-0 sm:pt-2 md:pt-4 pb-4 sm:pb-6 md:pb-8 mb-6 overflow-visible">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-[1.4] sm:leading-[1.3] md:leading-[1.25] lg:leading-[1.2] md:whitespace-nowrap overflow-visible min-h-[1.2em]">
              {t('home.title')}
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-8 max-w-2xl mx-auto px-4">
            {t('home.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <Link to="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2 group w-full sm:w-auto justify-center">
              {t('home.ctaPrimary')}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 w-full sm:w-auto text-center">
              {t('home.ctaSecondary')}
            </Link>
          </div>

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

          <div className="mt-12 md:mt-16">
            <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 mb-4 sm:mb-6">
              Trusted by companies worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-70 hover:opacity-100 transition-opacity">
              {companies.map((company, i) => (
                <a
                  key={i}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 sm:h-16 w-24 sm:w-32 bg-white dark:bg-secondary-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-sm hover:shadow-md border border-secondary-200 dark:border-secondary-700"
                  title={company.name}
                >
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-8 sm:h-10 w-auto max-w-full object-contain px-2"
                    />
                  ) : (
                    <span className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 font-medium text-center px-2">
                      {company.name.split(' ')[0]}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
