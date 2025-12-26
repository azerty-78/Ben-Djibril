import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowDownTrayIcon,
  PhoneIcon,
  FolderIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid'

function AboutCTAs() {
  const { t } = useTranslation()

  const ctas = [
    {
      key: 'downloadCV',
      icon: ArrowDownTrayIcon,
      color: 'primary',
      link: '#', // TODO: Ajouter le lien vers le CV
      external: false
    },
    {
      key: 'bookCall',
      icon: PhoneIcon,
      color: 'accent',
      link: '/contact?subject=appel',
      external: false
    },
    {
      key: 'viewProjects',
      icon: FolderIcon,
      color: 'success',
      link: '/projects',
      external: false
    },
    {
      key: 'contact',
      icon: ChatBubbleLeftRightIcon,
      color: 'warning',
      link: '/contact',
      external: false
    }
  ]

  const colorClasses = {
    primary: 'bg-primary-600 hover:bg-primary-500 text-white border-primary-600',
    accent: 'bg-accent-600 hover:bg-accent-500 text-white border-accent-600',
    success: 'bg-success-600 hover:bg-success-500 text-white border-success-600',
    warning: 'bg-warning-600 hover:bg-warning-500 text-white border-warning-600'
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
            {t('home.about.contactMe')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.about.contactDesc')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {ctas.map((cta, index) => {
              const Icon = cta.icon
              const colorClass = colorClasses[cta.color as keyof typeof colorClasses]

              const buttonContent = (
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`card p-6 ${colorClass} border-2 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {t(`home.about.cta.${cta.key}`)}
                      </h3>
                      <p className="text-sm opacity-90">
                        {t(`home.about.cta.${cta.key}Desc`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )

              return (
                <motion.div
                  key={cta.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {cta.external ? (
                    <a
                      href={cta.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {buttonContent}
                    </a>
                  ) : (
                    <Link to={cta.link} className="block">
                      {buttonContent}
                    </Link>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCTAs
