import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import TestimonialCard from '../ui/TestimonialCard'
import { motion, AnimatePresence } from 'framer-motion'
import { mockTestimonials } from '../../data/mockData'
import { loadTestimonials, type Testimonial } from '../../utils/testimonials'
import AddTestimonialForm from '../testimonials/AddTestimonialForm'
import { ChatBubbleLeftRightIcon, StarIcon, PlusIcon } from '@heroicons/react/24/solid'

function TestimonialsSection() {
  const { t } = useTranslation()
  const [customTestimonials, setCustomTestimonials] = useState<Testimonial[]>([])
  const [showAddForm, setShowAddForm] = useState(false)
  
  // Helper pour obtenir les traductions avec fallback
  const getTranslation = (key: string, fallback: string) => {
    const translation = t(key)
    return translation && translation !== key ? translation : fallback
  }

  // Charger les témoignages depuis localStorage
  useEffect(() => {
    const loaded = loadTestimonials()
    setCustomTestimonials(loaded)
  }, [])

  // Fusionner mockTestimonials avec les témoignages personnalisés
  const allTestimonials = [
    ...mockTestimonials.map((t, i) => ({
      id: `mock-${i}`,
      name: t.name,
      role: t.role,
      company: t.company,
      content: t.content,
      rating: t.rating,
      image: undefined,
      createdAt: new Date().toISOString(),
    })),
    ...customTestimonials,
  ]

  const stats = {
    total: allTestimonials.length,
    averageRating: allTestimonials.length > 0 
      ? Math.round((allTestimonials.reduce((sum, t) => sum + t.rating, 0) / allTestimonials.length) * 10) / 10
      : 5,
    satisfaction: 95
  }

  const handleTestimonialAdded = () => {
    const loaded = loadTestimonials()
    setCustomTestimonials(loaded)
  }

  return (
    <section data-section="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-primary-400 rounded-full blur-xl"
              />
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20 dark:border-secondary-700/50">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                  <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white">
              {getTranslation('testimonials.title', 'Ce Que Disent les Clients de Mon Travail')}
            </h2>
          </motion.div>
          <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto px-2">
            {getTranslation('testimonials.subtitle', 'Vrais témoignages de clients qui ont expérimenté ma communication et mon service')}
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-3 sm:p-4 md:p-6 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm border-2 border-secondary-200/80 dark:border-secondary-700/80 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{stats.total}+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              {getTranslation('testimonials.stats.total', 'Témoignages')}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-3 sm:p-4 md:p-6 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm border-2 border-secondary-200/80 dark:border-secondary-700/80 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-warning-500" />
              ))}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              {stats.averageRating}/5 {getTranslation('testimonials.stats.averageRating', 'Note moyenne')}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="card text-center p-3 sm:p-4 md:p-6 bg-white/90 dark:bg-secondary-800/90 backdrop-blur-sm border-2 border-secondary-200/80 dark:border-secondary-700/80 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1">{stats.satisfaction}%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
              {getTranslation('testimonials.stats.satisfaction', 'Satisfaction')}
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>

        {/* CTA Add Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <PlusIcon className="w-5 h-5" />
            <span>{getTranslation('testimonials.addTestimonial', 'Ajouter un témoignage')}</span>
          </button>
          <p className="text-xs sm:text-sm text-secondary-500 dark:text-secondary-400 mt-4 px-4">
            {getTranslation('testimonials.addTestimonialDesc', 'Vous avez travaillé avec moi ? Partagez votre expérience !')}
          </p>
        </motion.div>
      </div>

      {/* Modal Add Testimonial */}
      <AnimatePresence>
        {showAddForm && (
          <AddTestimonialForm
            onClose={() => setShowAddForm(false)}
            onSuccess={handleTestimonialAdded}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default TestimonialsSection
