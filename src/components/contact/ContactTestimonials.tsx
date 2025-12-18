import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { StarIcon, QuoteIcon } from '@heroicons/react/24/solid'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

function ContactTestimonials() {
  const { t } = useTranslation()

  const testimonials: Testimonial[] = [
    {
      name: t('contact.testimonials.items.client1.name'),
      role: t('contact.testimonials.items.client1.role'),
      company: t('contact.testimonials.items.client1.company'),
      content: t('contact.testimonials.items.client1.content'),
      rating: 5
    },
    {
      name: t('contact.testimonials.items.client2.name'),
      role: t('contact.testimonials.items.client2.role'),
      company: t('contact.testimonials.items.client2.company'),
      content: t('contact.testimonials.items.client2.content'),
      rating: 5
    },
    {
      name: t('contact.testimonials.items.client3.name'),
      role: t('contact.testimonials.items.client3.role'),
      company: t('contact.testimonials.items.client3.company'),
      content: t('contact.testimonials.items.client3.content'),
      rating: 5
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
            >
              <QuoteIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 dark:text-primary-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
              {t('contact.testimonials.title')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              {t('contact.testimonials.subtitle')}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-secondary-200 dark:border-secondary-700 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-warning-500 fill-warning-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-secondary-200 dark:border-secondary-700">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactTestimonials
