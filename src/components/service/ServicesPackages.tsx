import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import PackageCard from '../ui/PackageCard'
import { mockServices } from '../../data/mockData'

function ServicesPackages() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
            {t('services.packagesTitle')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('services.packagesSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockServices.map((pkg) => (
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
      </div>
    </section>
  )
}

export default ServicesPackages


