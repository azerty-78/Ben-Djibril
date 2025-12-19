import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CloudIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

function ServicesHero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const scrollToSection = (sectionId: string) => {
    navigate('/services')
    setTimeout(() => {
      const section = document.querySelector(`[data-section="${sectionId}"]`)
      if (section) {
        const offset = 80
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 200)
  }
  
  const scrollToSubSection = (subsectionId: string) => {
    navigate('/services')
    setTimeout(() => {
      const section = document.querySelector(`[data-subsection="${subsectionId}"]`)
      if (section) {
        const offset = 80
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        // Si la sous-section n'est pas trouvée, scroll vers la section packages
        const packagesSection = document.querySelector('[data-section="packages"]')
        if (packagesSection) {
          const offset = 80
          const elementPosition = packagesSection.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }, 200)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute -top-12 sm:-top-16 -right-8 sm:-right-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute -bottom-12 sm:-bottom-16 -left-8 sm:-left-10 w-56 sm:w-72 md:w-[26rem] h-56 sm:h-72 md:h-[26rem] bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center"
        >
          {/* Text content */}
          <motion.div
            variants={itemVariants}
            className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700 mb-4 sm:mb-5 md:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-300 whitespace-nowrap">
                SaaS & Full Control · {t('services.title')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-3 sm:mb-4 md:mb-6 text-secondary-900 dark:text-white leading-[1.1] sm:leading-tight"
            >
              {t('services.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-secondary-600 dark:text-secondary-300 leading-relaxed mb-3 sm:mb-4 md:mb-6"
            >
              {t('services.subtitle')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {t('services.heroDescription')}
            </motion.p>

            {/* Pills for SaaS vs Full Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6"
            >
              <motion.button
                type="button"
                onClick={() => scrollToSubSection('saas')}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-white dark:bg-secondary-900/70 shadow-md hover:shadow-lg border border-primary-100 dark:border-primary-700/60 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary-50 dark:bg-primary-900/40 flex items-center justify-center flex-shrink-0">
                  <CloudIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-300" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[10px] xs:text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300">
                    SaaS
                  </p>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 line-clamp-2">
                    {t('services.saasSubtitle')}
                  </p>
                </div>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollToSubSection('fullControl')}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl bg-white dark:bg-secondary-900/70 shadow-md hover:shadow-lg border border-accent-100 dark:border-accent-700/60 transition-all duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent-50 dark:bg-accent-900/40 flex items-center justify-center flex-shrink-0">
                  <CodeBracketIcon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-600 dark:text-accent-300" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-[10px] xs:text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-300">
                    Full Control
                  </p>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-secondary-700 dark:text-secondary-200 line-clamp-2">
                    {t('services.fullControlSubtitle')}
                  </p>
                </div>
              </motion.button>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4 sm:mb-6"
            >
              <button
                type="button"
                onClick={() => scrollToSubSection('saas')}
                className="w-full sm:w-auto btn-primary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base"
              >
                {t('services.heroCtaSaas')}
              </button>
              <button
                type="button"
                onClick={() => scrollToSubSection('fullControl')}
                className="w-full sm:w-auto btn-secondary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base"
              >
                {t('services.heroCtaFull')}
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 mb-6 sm:mb-8 text-[10px] xs:text-xs sm:text-sm text-secondary-600 dark:text-secondary-300"
            >
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span className="font-medium">
                  {t('contact.hero.responseTime')}
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-500 dark:bg-primary-400" />
                <span className="font-medium">
                  {t('contact.hero.freeQuote')}
                </span>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-500 dark:bg-accent-400" />
                <span className="font-medium">
                  {t('contact.hero.available')}
                </span>
              </div>
            </motion.div>

            {/* Mini comparaison SaaS vs Full Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden md:block"
            >
              <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white/80 dark:bg-secondary-900/70 backdrop-blur-sm p-4 sm:p-5">
                <p className="text-xs sm:text-sm font-semibold text-secondary-700 dark:text-secondary-200 mb-3">
                  {t('services.heroCompare.title')}
                </p>
                <div className="grid grid-cols-[1.2fr,1fr,1fr] gap-3 text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                  <div />
                  <div className="font-semibold text-center text-primary-700 dark:text-primary-300">
                    SaaS
                  </div>
                  <div className="font-semibold text-center text-accent-700 dark:text-accent-300">
                    Full Control
                  </div>

                  {(['ownership', 'billing', 'hosting', 'ideal'] as const).map((rowKey) => (
                    <div key={rowKey} className="contents">
                      <div className="py-1 border-t border-secondary-100 dark:border-secondary-800 text-left">
                        {t(`services.heroCompare.rows.${rowKey}.label`)}
                      </div>
                      <div className="py-1 border-t border-secondary-100 dark:border-secondary-800 text-[11px] leading-snug text-secondary-700 dark:text-secondary-300">
                        {t(`services.heroCompare.rows.${rowKey}.saas`)}
                      </div>
                      <div className="py-1 border-t border-secondary-100 dark:border-secondary-800 text-[11px] leading-snug text-secondary-700 dark:text-secondary-300">
                        {t(`services.heroCompare.rows.${rowKey}.full`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-md mx-auto lg:mx-0 order-1 lg:order-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 h-16 sm:h-20 rounded-3xl bg-primary-500/10 dark:bg-primary-400/10 blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -3, 3, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -bottom-6 sm:-bottom-8 -right-3 sm:-right-4 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-accent-500/10 dark:bg-accent-400/10 blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="relative bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm rounded-3xl border border-secondary-100 dark:border-secondary-700 shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300"
            >
              <div className="grid gap-3 sm:gap-4 md:gap-5">
                {/* SaaS card preview */}
                <motion.button
                  type="button"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => scrollToSubSection('saas')}
                  className="w-full rounded-2xl border border-primary-100 dark:border-primary-700 bg-primary-50/70 dark:bg-primary-900/40 p-3 sm:p-4 md:p-5 shadow-md hover:shadow-lg transition-all duration-300 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] xs:text-xs uppercase tracking-wide text-primary-600 dark:text-primary-300 font-semibold mb-1">
                        SaaS
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-secondary-900 dark:text-white line-clamp-1">
                        {t('services.saas.goodDeal.name')}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[9px] xs:text-xs text-secondary-500 dark:text-secondary-400 line-through">
                        18 500 F HT
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary-700 dark:text-primary-300">
                        15 500 F
                      </p>
                      <p className="text-[9px] xs:text-[10px] sm:text-xs text-secondary-600 dark:text-secondary-300">
                        {t('services.saas.goodDeal.priceUnit')}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                    {t('services.saas.goodDeal.shortDesc')}
                  </p>
                </motion.button>

                {/* Full Control card preview */}
                <motion.button
                  type="button"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={() => scrollToSubSection('fullControl')}
                  className="w-full rounded-2xl border border-accent-100 dark:border-accent-700 bg-accent-50/70 dark:bg-accent-900/40 p-3 sm:p-4 md:p-5 shadow-md hover:shadow-lg transition-all duration-300 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
                >
                  <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] xs:text-xs uppercase tracking-wide text-accent-600 dark:text-accent-300 font-semibold mb-1">
                        Full Control
                      </p>
                      <p className="text-xs sm:text-sm md:text-base font-bold text-secondary-900 dark:text-white line-clamp-1">
                        {t('services.fullControl.speed.name')}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[9px] xs:text-xs text-secondary-500 dark:text-secondary-400">
                        {t('services.fullControl.speed.deliveryTime')}
                      </p>
                      <p className="text-[9px] xs:text-[10px] sm:text-xs text-secondary-600 dark:text-secondary-300 font-semibold">
                        {t('services.fullControl.speed.price')}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] xs:text-xs sm:text-sm text-secondary-700 dark:text-secondary-200">
                    {t('services.fullControl.speed.description')}
                  </p>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero


