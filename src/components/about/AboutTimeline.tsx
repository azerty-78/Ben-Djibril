import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { AcademicCapIcon, TrophyIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid'

function AboutTimeline() {
  const { t } = useTranslation()

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
            {t('home.about.timeline.title')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.about.timeline.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline verticale */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400" />

            <div className="space-y-12 md:space-y-16">
              {/* Education Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-2 border-primary-200 dark:border-primary-700 flex items-center justify-center shadow-lg">
                      <AcademicCapIcon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card p-6 md:p-8 bg-gradient-to-br from-white to-primary-50/30 dark:from-secondary-800 dark:to-secondary-800/50 border-2 border-primary-200 dark:border-primary-700">
                    <div className="flex items-center gap-2 mb-3">
                      <AcademicCapIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                        {t('home.about.timeline.education.title')}
                      </h3>
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold mb-2 text-secondary-900 dark:text-white">
                      {t('home.about.timeline.education.iai.title')}
                    </h4>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-3">
                      {t('home.about.timeline.education.iai.subtitle')}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary-600 dark:text-secondary-400">
                      <div className="flex items-center gap-2">
                        <BuildingOfficeIcon className="w-4 h-4" />
                        <span>{t('home.about.timeline.education.iai.institution')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{t('home.about.timeline.education.iai.period')}</span>
                      </div>
                    </div>
                    
                    <p className="text-base text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      {t('home.about.timeline.education.iai.desc')}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 border-2 border-accent-200 dark:border-accent-700 flex items-center justify-center shadow-lg">
                      <TrophyIcon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 card p-6 md:p-8 bg-gradient-to-br from-white to-accent-50/30 dark:from-secondary-800 dark:to-secondary-800/50 border-2 border-accent-200 dark:border-accent-700">
                    <div className="flex items-center gap-2 mb-3">
                      <TrophyIcon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                      <h3 className="text-lg font-semibold text-accent-700 dark:text-accent-300 uppercase tracking-wide">
                        {t('home.about.timeline.achievements.title')}
                      </h3>
                    </div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold mb-2 text-secondary-900 dark:text-white">
                      {t('home.about.timeline.achievements.canam2023.title')}
                    </h4>
                    <p className="text-lg text-accent-600 dark:text-accent-400 font-semibold mb-3">
                      {t('home.about.timeline.achievements.canam2023.subtitle')}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary-600 dark:text-secondary-400">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{t('home.about.timeline.achievements.canam2023.period')}</span>
                      </div>
                    </div>
                    
                    <p className="text-base text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">
                      {t('home.about.timeline.achievements.canam2023.desc')}
                    </p>

                    {/* Placeholder pour l'image du certificat */}
                    <div className="mt-4 p-4 bg-secondary-100 dark:bg-secondary-800 rounded-lg border-2 border-dashed border-secondary-300 dark:border-secondary-700 text-center">
                      <p className="text-sm text-secondary-500 dark:text-secondary-400">
                        {t('home.about.timeline.achievements.canam2023.imageAlt')} - Image à venir
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTimeline
