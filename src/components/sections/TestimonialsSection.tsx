import { useTranslation } from 'react-i18next'
import TestimonialCard from '../ui/TestimonialCard'
import { motion } from 'framer-motion'
import { mockTestimonials } from '../../data/mockData'
import { ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/react/24/solid'

function TestimonialsSection() {
  const { t } = useTranslation()

  const stats = {
    total: mockTestimonials.length,
    averageRating: 5,
    satisfaction: 95
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50" />
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white">
              {t('testimonials.title')}
            </h2>
          </motion.div>
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-4 md:p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700"
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stats.total}+</div>
            <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              Témoignages
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-4 md:p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700"
          >
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-warning-500" />
              ))}
            </div>
            <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              {stats.averageRating}/5
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-4 md:p-6 bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm border border-secondary-200 dark:border-secondary-700"
          >
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stats.satisfaction}%</div>
            <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              Satisfaction
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {mockTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-secondary-500 dark:text-secondary-400">
            Vous avez travaillé avec moi ? <span className="text-primary-600 dark:text-primary-400 font-medium cursor-pointer hover:underline">Laissez un témoignage</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
