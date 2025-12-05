import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  ServerIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  StarIcon,
} from '@heroicons/react/24/solid'

type Service = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  color: string
  bgColor: string
  textColor: string
}

function ServicesList() {
  const { t } = useTranslation()

  const allServices: Service[] = [
    {
      id: 'web-dev',
      icon: GlobeAltIcon,
      title: t('services.serviceWebDev.title'),
      description: t('services.serviceWebDev.desc'),
      features: [
        t('services.serviceWebDev.feature1'),
        t('services.serviceWebDev.feature2'),
        t('services.serviceWebDev.feature3'),
        t('services.serviceWebDev.feature4'),
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'showcase',
      icon: DocumentTextIcon,
      title: t('services.serviceShowcase.title'),
      description: t('services.serviceShowcase.desc'),
      features: [
        t('services.serviceShowcase.feature1'),
        t('services.serviceShowcase.feature2'),
        t('services.serviceShowcase.feature3'),
        t('services.serviceShowcase.feature4'),
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 'portfolio',
      icon: StarIcon,
      title: t('services.servicePortfolio.title'),
      description: t('services.servicePortfolio.desc'),
      features: [
        t('services.servicePortfolio.feature1'),
        t('services.servicePortfolio.feature2'),
        t('services.servicePortfolio.feature3'),
        t('services.servicePortfolio.feature4'),
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-100 dark:bg-pink-900/30',
      textColor: 'text-pink-600 dark:text-pink-400',
    },
    {
      id: 'ecommerce',
      icon: ShoppingBagIcon,
      title: t('services.serviceEcom.title'),
      description: t('services.serviceEcom.desc'),
      features: [
        t('services.serviceEcom.feature1'),
        t('services.serviceEcom.feature2'),
        t('services.serviceEcom.feature3'),
        t('services.serviceEcom.feature4'),
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      id: 'web-app',
      icon: CodeBracketIcon,
      title: t('services.serviceApp.title'),
      description: t('services.serviceApp.desc'),
      features: [
        t('services.serviceApp.feature1'),
        t('services.serviceApp.feature2'),
        t('services.serviceApp.feature3'),
        t('services.serviceApp.feature4'),
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-100 dark:bg-primary-900/30',
      textColor: 'text-primary-600 dark:text-primary-400',
    },
    {
      id: 'mobile',
      icon: DevicePhoneMobileIcon,
      title: t('services.serviceMobile.title'),
      description: t('services.serviceMobile.desc'),
      features: [
        t('services.serviceMobile.feature1'),
        t('services.serviceMobile.feature2'),
        t('services.serviceMobile.feature3'),
        t('services.serviceMobile.feature4'),
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-100 dark:bg-accent-900/30',
      textColor: 'text-accent-600 dark:text-accent-400',
    },
    {
      id: 'desktop',
      icon: ComputerDesktopIcon,
      title: t('services.serviceDesktop.title'),
      description: t('services.serviceDesktop.desc'),
      features: [
        t('services.serviceDesktop.feature1'),
        t('services.serviceDesktop.feature2'),
        t('services.serviceDesktop.feature3'),
        t('services.serviceDesktop.feature4'),
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
      textColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'api',
      icon: ServerIcon,
      title: t('services.serviceAPI.title'),
      description: t('services.serviceAPI.desc'),
      features: [
        t('services.serviceAPI.feature1'),
        t('services.serviceAPI.feature2'),
        t('services.serviceAPI.feature3'),
        t('services.serviceAPI.feature4'),
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      id: 'devops',
      icon: CommandLineIcon,
      title: t('services.serviceDevOps.title'),
      description: t('services.serviceDevOps.desc'),
      features: [
        t('services.serviceDevOps.feature1'),
        t('services.serviceDevOps.feature2'),
        t('services.serviceDevOps.feature3'),
        t('services.serviceDevOps.feature4'),
      ],
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
      textColor: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      id: 'consulting',
      icon: WrenchScrewdriverIcon,
      title: t('services.serviceConsult.title'),
      description: t('services.serviceConsult.desc'),
      features: [
        t('services.serviceConsult.feature1'),
        t('services.serviceConsult.feature2'),
        t('services.serviceConsult.feature3'),
        t('services.serviceConsult.feature4'),
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      textColor: 'text-yellow-600 dark:text-yellow-400',
    },
  ]

  return (
    <section
      data-section="services"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-16 right-10 w-56 sm:w-80 h-56 sm:h-80 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-6 w-44 sm:w-64 h-44 sm:h-64 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                <GlobeAltIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white">
              {t('services.allServicesTitle')}
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto px-2">
            {t('services.allServicesSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {allServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card group cursor-pointer"
              >
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <IconComponent className={`w-8 h-8 ${service.textColor}`} />
                  </motion.div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-secondary-600 dark:text-secondary-300"
                    >
                      <span className="text-primary-600 dark:text-primary-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm group-hover:gap-3 transition-all"
                >
                  {t('services.requestQuote')}
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesList


