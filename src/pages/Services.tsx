import { useTranslation } from 'react-i18next'
import PackageCard from '../components/ui/PackageCard'
import { motion } from 'framer-motion'
import { mockServices } from '../data/mockData'

function Services() {
  const { t } = useTranslation()

  return (
    <div className="space-y-16 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h1>
        <p className="text-xl text-secondary-600 dark:text-secondary-300">{t('services.subtitle')}</p>
      </motion.div>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockServices.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              popular={pkg.popular}
              cta={t('services.getStarted')}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: t('services.serviceWeb.title'), desc: t('services.serviceWeb.desc') },
            { title: t('services.serviceEcom.title'), desc: t('services.serviceEcom.desc') },
            { title: t('services.serviceApp.title'), desc: t('services.serviceApp.desc') },
            { title: t('services.serviceConsult.title'), desc: t('services.serviceConsult.desc') },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
