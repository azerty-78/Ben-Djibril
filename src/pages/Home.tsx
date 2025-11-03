import { useTranslation } from 'react-i18next'
import { lazy, Suspense } from 'react'
import HeroSection from '../components/sections/HeroSection'
import { motion } from 'framer-motion'

const TestimonialsSection = lazy(() => import('../components/sections/TestimonialsSection'))

function Home() {
  const { t } = useTranslation()
  
  return (
    <div className="space-y-20">
      <HeroSection />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: t('home.card1.title'), desc: t('home.card1.desc') },
              { title: t('home.card2.title'), desc: t('home.card2.desc') },
              { title: t('home.card3.title'), desc: t('home.card3.desc') },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96" />}>
        <TestimonialsSection />
      </Suspense>
    </div>
  )
}

export default Home
