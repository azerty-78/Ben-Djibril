import { useTranslation } from 'react-i18next'
import { lazy, Suspense } from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TestimonialsSection = lazy(() => import('../components/sections/TestimonialsSection'))

function Home() {
  const { t } = useTranslation()
  
  return (
    <div className="space-y-0">
      <HeroSection />

      <AboutSection />

      <CertificationsSection />

      <section className="py-16 bg-secondary-50/50 dark:bg-secondary-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mes Services</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Solutions complètes pour vos besoins digitaux
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { title: t('home.card1.title'), desc: t('home.card1.desc'), icon: '🌐' },
              { title: t('home.card2.title'), desc: t('home.card2.desc'), icon: '💻' },
              { title: t('home.card3.title'), desc: t('home.card3.desc'), icon: '🛒' },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">{card.desc}</p>
                <Link to="/services" className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium">
                  En savoir plus →
                </Link>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
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
