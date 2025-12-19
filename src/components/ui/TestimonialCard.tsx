import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

type TestimonialCardProps = {
  name: string
  role: string
  company?: string
  image?: string
  content: string
  rating: number
  index?: number
}

function TestimonialCard({ name, role, company, image, content, rating, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card relative overflow-hidden group cursor-pointer h-full flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary-400/20 to-accent-400/10 rounded-bl-full opacity-50" />
      
      {/* Quote icon */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
        <div className="text-5xl sm:text-6xl md:text-7xl font-serif text-primary-600 dark:text-primary-400 leading-none">
          "
        </div>
      </div>

      <div className="relative p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col flex-1">
        {/* Rating */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
          className="flex items-center gap-0.5 sm:gap-1 mb-4 sm:mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15 + 0.2 + i * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              <StarIcon
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                  i < rating 
                    ? 'text-warning-500 fill-warning-500' 
                    : 'text-secondary-300 dark:text-secondary-700'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3 }}
          className="text-secondary-700 dark:text-secondary-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-sm sm:text-base md:text-lg relative z-10 flex-1"
        >
          <span className="text-primary-600 dark:text-primary-400 text-xl sm:text-2xl md:text-3xl font-bold leading-none inline-block mr-1">"</span>
          <span className="inline">{content}</span>
          <span className="text-primary-600 dark:text-primary-400 text-xl sm:text-2xl md:text-3xl font-bold leading-none inline-block ml-1">"</span>
        </motion.p>

        {/* Author */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-10 pt-4 border-t border-secondary-200/50 dark:border-secondary-700/50">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring" }}
            className="relative flex-shrink-0"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 p-0.5 shadow-lg ring-2 ring-primary-200/50 dark:ring-primary-700/50">
              <div className="w-full h-full rounded-full bg-white dark:bg-secondary-800 flex items-center justify-center overflow-hidden">
                {image ? (
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full rounded-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-base sm:text-lg md:text-xl font-bold">
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.5
              }}
              className="absolute inset-0 rounded-full bg-primary-400 blur-xl -z-10"
            />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <motion.h4
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.5 }}
              className="font-bold text-sm sm:text-base md:text-lg text-secondary-900 dark:text-white mb-1 truncate"
            >
              {name}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.6 }}
              className="text-[11px] sm:text-xs md:text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2"
            >
              {role}
              {company && (
                <span className="text-secondary-500 dark:text-secondary-500">
                  {' '}· <span className="hidden sm:inline">{company}</span>
                </span>
              )}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
