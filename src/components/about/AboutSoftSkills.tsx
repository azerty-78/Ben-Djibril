import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  LightBulbIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid'

function AboutSoftSkills() {
  const { t } = useTranslation()

  const skills = [
    {
      key: 'communication',
      icon: ChatBubbleLeftRightIcon,
      color: 'primary'
    },
    {
      key: 'rigor',
      icon: CheckCircleIcon,
      color: 'accent'
    },
    {
      key: 'pedagogy',
      icon: AcademicCapIcon,
      color: 'success'
    },
    {
      key: 'problemSolving',
      icon: LightBulbIcon,
      color: 'warning'
    },
    {
      key: 'timeManagement',
      icon: ClockIcon,
      color: 'primary'
    },
    {
      key: 'teamwork',
      icon: UserGroupIcon,
      color: 'accent'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary-50 dark:bg-secondary-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
            {t('home.about.softSkills.title')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.about.softSkills.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              const colorClasses = {
                primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-primary-200 dark:border-primary-700',
                accent: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 border-accent-200 dark:border-accent-700',
                success: 'bg-success-100 dark:bg-success-900/30 text-success-600 dark:text-success-400 border-success-200 dark:border-success-700',
                warning: 'bg-warning-100 dark:bg-warning-900/30 text-warning-600 dark:text-warning-400 border-warning-200 dark:border-warning-700'
              }

              return (
                <motion.div
                  key={skill.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`card p-6 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border-2 ${colorClasses[skill.color as keyof typeof colorClasses].split(' ')[2]} ${colorClasses[skill.color as keyof typeof colorClasses].split(' ')[3]}`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses[skill.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">
                    {t(`home.about.softSkills.${skill.key}.title`)}
                  </h3>
                  <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {t(`home.about.softSkills.${skill.key}.desc`)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSoftSkills
