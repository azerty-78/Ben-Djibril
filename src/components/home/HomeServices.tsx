import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  ShoppingBagIcon,
  SparklesIcon,
  FireIcon,
} from '@heroicons/react/24/solid'

function HomeServices() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  const scrollToServiceSection = (serviceType: string) => {
    navigate(`/services?type=${serviceType}`)
    // Use a longer timeout to ensure the page has loaded
    setTimeout(() => {
      // Scroll to services list section
      const section = document.querySelector('[data-section="services"]')
      if (section) {
        const offset = 100
        const elementPosition = section.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        // Fallback: scroll to top if section not found
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 500)
  }
  
  const services = [
    { 
      title: t('home.card1.title'), 
      desc: t('home.card1.desc'), 
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-100 dark:bg-primary-900/30',
      textColor: 'text-primary-600 dark:text-primary-400',
      link: '/services?type=mobile',
      serviceType: 'mobile',
      tag: 'popular' as const,
      tagLabel: t('services.mostPopular'),
    },
    { 
      title: t('home.card2.title'), 
      desc: t('home.card2.desc'), 
      icon: GlobeAltIcon,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-100 dark:bg-accent-900/30',
      textColor: 'text-accent-600 dark:text-accent-400',
      link: '/services?type=web',
      serviceType: 'web',
      tag: 'new' as const,
      tagLabel: t('home.services.newTag') || 'New',
    },
    { 
      title: t('home.card3.title'), 
      desc: t('home.card3.desc'), 
      icon: ShoppingBagIcon,
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-100 dark:bg-success-900/30',
      textColor: 'text-success-600 dark:text-success-400',
      link: '/services?type=ecommerce',
      serviceType: 'ecommerce',
    },
  ]

  return (
    <section id="home-services" data-section="home-services" className="py-16 md:py-20 bg-secondary-50/50 dark:bg-secondary-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
            {t('home.services.title') || 'Mes Services'}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.services.subtitle') || 'Solutions complètes pour vos besoins digitaux'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => scrollToServiceSection(service.serviceType || 'web')}
                className="card hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-visible"
              >
                {/* Tag badge */}
                {service.tag && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg ${
                        service.tag === 'popular'
                          ? 'bg-primary-600 text-white'
                          : 'bg-accent-500 text-white'
                      }`}
                    >
                      {service.tag === 'popular' ? (
                        <FireIcon className="w-3 h-3" />
                      ) : (
                        <SparklesIcon className="w-3 h-3" />
                      )}
                      <span>{service.tagLabel}</span>
                    </motion.div>
                  </div>
                )}

                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 2 
                    }}
                  >
                    <IconComponent className={`w-8 h-8 ${service.textColor}`} />
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium group-hover:gap-3 transition-all">
                  {t('home.services.learnMore') || 'En savoir plus'}
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/services" className="btn-primary text-lg px-8 py-3 inline-block">
            {t('home.services.viewAll') || 'Voir tous les services'}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeServices

