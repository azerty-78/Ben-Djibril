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
      className="py-12 md:py-16 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-secondary-900/50 dark:via-secondary-800/30 dark:to-secondary-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card relative overflow-hidden border-2 border-primary-200 dark:border-primary-700 bg-gradient-to-br from-white to-primary-50/30 dark:from-secondary-800 dark:to-primary-900/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base md:text-lg text-secondary-700 dark:text-secondary-200 leading-relaxed mb-3 italic">
                  "{t('home.microTestimonial.quote') || 'Ben a su comprendre nos besoins rapidement et livrer une solution qui dépasse nos attentes. Communication excellente et livraison dans les temps.'}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-secondary-900 dark:text-white">
                      {t('home.microTestimonial.author') || 'Client satisfait'}
                    </p>
                    <p className="text-[10px] sm:text-xs text-secondary-500 dark:text-secondary-400">
                      {t('home.microTestimonial.role') || 'Projet e-commerce'}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {t('home.microTestimonial.cta') || 'Voir tous les témoignages'}
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
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
