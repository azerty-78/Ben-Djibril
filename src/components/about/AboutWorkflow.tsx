import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/solid'

function AboutWorkflow() {
  const { t } = useTranslation()

  const steps = [
    {
      key: 'discovery',
      icon: MagnifyingGlassIcon,
      color: 'primary'
    },
    {
      key: 'design',
      icon: PaintBrushIcon,
      color: 'accent'
    },
    {
      key: 'development',
      icon: CodeBracketIcon,
      color: 'success'
    },
    {
      key: 'testing',
      icon: CheckBadgeIcon,
      color: 'warning'
    },
    {
      key: 'deployment',
      icon: RocketLaunchIcon,
      color: 'primary'
    },
    {
      key: 'support',
      icon: WrenchScrewdriverIcon,
      color: 'accent'
    }
  ]

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
            {t('home.about.workflow.title')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.about.workflow.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-400" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                const colorClasses = {
                  primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-700',
                  accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 border-accent-200 dark:border-accent-700',
                  success: 'bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400 border-success-200 dark:border-success-700',
                  warning: 'bg-warning-100 dark:bg-warning-900/30 text-warning-600 dark:text-warning-400 border-warning-200 dark:border-warning-700'
                }

                return (
                  <motion.div
                    key={step.key}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start gap-6"
                  >
                    {/* Icon & Line connector */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses]} border-2 shadow-lg`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 card p-6 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border-2 ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[2]} ${colorClasses[step.color as keyof typeof colorClasses].split(' ')[3]}`}>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-secondary-900 dark:text-white">
                        {t(`home.about.workflow.${step.key}.title`)}
                      </h3>
                      <p className="text-base text-secondary-600 dark:text-secondary-300 leading-relaxed">
                        {t(`home.about.workflow.${step.key}.desc`)}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutWorkflow
