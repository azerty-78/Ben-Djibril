import { useTranslation } from 'react-i18next'
import { lazy, Suspense } from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  GlobeAltIcon, 
  DevicePhoneMobileIcon, 
  ShoppingBagIcon 
} from '@heroicons/react/24/solid'

const TestimonialsSection = lazy(() => import('../components/sections/TestimonialsSection'))

function Home() {
  const { t } = useTranslation()
  
  const services = [
    { 
      title: t('home.card1.title'), 
      desc: t('home.card1.desc'), 
      icon: DevicePhoneMobileIcon,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-100 dark:bg-primary-900/30',
      textColor: 'text-primary-600 dark:text-primary-400',
      link: '/services?type=mobile'
    },
    { 
      title: t('home.card2.title'), 
      desc: t('home.card2.desc'), 
      icon: GlobeAltIcon,
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-100 dark:bg-accent-900/30',
      textColor: 'text-accent-600 dark:text-accent-400',
      link: '/services?type=web'
    },
    { 
      title: t('home.card3.title'), 
      desc: t('home.card3.desc'), 
      icon: ShoppingBagIcon,
      color: 'from-success-500 to-success-600',
      bgColor: 'bg-success-100 dark:bg-success-900/30',
      textColor: 'text-success-600 dark:text-success-400',
      link: '/services?type=ecommerce'
    },
  ]
  
  return (
    <div className="space-y-0">
      <HeroSection />

      <AboutSection />

      <CertificationsSection />

      <section className="py-16 md:py-20 bg-secondary-50/50 dark:bg-secondary-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">Mes Services</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Solutions complètes pour vos besoins digitaux
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
                  whileHover={{ y: -5 }}
                  className="card hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
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
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
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
              Voir tous les services
            </Link>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 bg-secondary-50/50 dark:bg-secondary-900/30" />}>
        <TestimonialsSection />
      </Suspense>

      <section className="py-16 bg-white dark:bg-secondary-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">Prêt à démarrer votre projet ?</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
              Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8 py-3">
                Me contacter
              </Link>
              <Link to="/projects" className="btn-secondary text-lg px-8 py-3">
                Voir mes réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
