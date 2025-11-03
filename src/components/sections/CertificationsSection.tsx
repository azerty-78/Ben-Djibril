import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CertificationCard from '../ui/CertificationCard'
import { certifications } from '../../data/certifications'
import { AcademicCapIcon } from '@heroicons/react/24/solid'

function CertificationsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white dark:bg-secondary-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <AcademicCapIcon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            <h2 className="text-4xl md:text-5xl font-bold">Certifications</h2>
          </div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Certifications professionnelles en cours et obtenues
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.name} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection

