import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

function HomeMicroTestimonial() {
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-16 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-10 right-10 w-40 h-40 bg-primary-300 dark:bg-primary-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -2 }}
            className="card relative overflow-hidden border-2 border-primary-200/80 dark:border-primary-700/80 bg-gradient-to-br from-white via-primary-50/40 to-white dark:from-secondary-800 dark:via-primary-900/20 dark:to-secondary-800 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 p-6 sm:p-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="flex-shrink-0"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 flex items-center justify-center shadow-lg">
                  <ChatBubbleLeftRightIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </motion.div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-3">
                  <span className="text-2xl sm:text-3xl text-primary-500/30 dark:text-primary-400/30 font-serif leading-none">"</span>
                  <p className="text-sm sm:text-base md:text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed italic flex-1">
                    {t('home.microTestimonial.quote') || 'Ben a su comprendre nos besoins rapidement et livrer une solution qui dépasse nos attentes. Communication excellente et livraison dans les temps.'}
                  </p>
                  <span className="text-2xl sm:text-3xl text-primary-500/30 dark:text-primary-400/30 font-serif leading-none self-end">"</span>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-3 pt-3 border-t border-secondary-200/50 dark:border-secondary-700/50">
                  <div>
                    <p className="text-sm sm:text-base font-bold text-secondary-900 dark:text-white">
                      {t('home.microTestimonial.author') || 'Client satisfait'}
                    </p>
                    <p className="text-[11px] sm:text-xs text-secondary-500 dark:text-secondary-400 font-medium">
                      {t('home.microTestimonial.role') || 'Projet e-commerce'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const testimonialsSection = document.querySelector('[data-section="testimonials"]')
                      if (testimonialsSection) {
                        const offset = 80
                        const elementPosition = testimonialsSection.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - offset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/60 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <span>{t('home.microTestimonial.cta') || 'Voir tous les témoignages'}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HomeMicroTestimonial
