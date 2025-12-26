import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { BookOpenIcon, LightBulbIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

function AboutStory() {
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
            {t('home.about.story.title')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.about.story.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-6 md:p-8"
          >
            <p className="text-base md:text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
              {t('home.about.story.content')}
            </p>
          </motion.div>

          {/* Why DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6 md:p-8 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <LightBulbIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-secondary-900 dark:text-white">
                  {t('home.about.story.whyDevOps')}
                </h3>
                <p className="text-base text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  {t('home.about.story.whyDevOpsContent')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why International */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6 md:p-8 bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center">
                  <GlobeAltIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-secondary-900 dark:text-white">
                  {t('home.about.story.whyInternational')}
                </h3>
                <p className="text-base text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  {t('home.about.story.whyInternationalContent')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
