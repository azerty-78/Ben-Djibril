import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

function HeroSection() {
  const { t } = useTranslation()

  const metrics = [
    { value: '50+', label: t('home.metrics.clients') },
    { value: '100+', label: t('home.metrics.projects') },
    { value: '98%', label: t('home.metrics.satisfaction') },
    { value: '2-4', label: t('home.metrics.delivery') + ' sem' },
  ]

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-accent-50/30 dark:from-primary-900/20 dark:via-transparent dark:to-accent-900/20" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-8 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/contact" className="btn-primary text-lg px-8 py-3 flex items-center gap-2 group">
              {t('home.ctaPrimary')}
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="btn-secondary text-lg px-8 py-3">
              {t('home.ctaSecondary')}
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="card text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-6">Trusted by companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, i) => (
                <div key={i} className="h-8 w-24 bg-secondary-200 dark:bg-secondary-700 rounded flex items-center justify-center text-xs text-secondary-500">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

