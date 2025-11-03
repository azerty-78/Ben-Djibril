import { useTranslation } from 'react-i18next'
import TestimonialCard from '../ui/TestimonialCard'
import { motion } from 'framer-motion'
import { mockTestimonials } from '../../data/mockData'

function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-secondary-50/50 dark:bg-secondary-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {mockTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

