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
      className="card relative overflow-hidden group cursor-pointer"
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/10 rounded-bl-full opacity-50" />
      
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="text-6xl md:text-7xl font-serif text-primary-600 dark:text-primary-400">
          "
        </div>
      </div>

      <div className="relative p-6 md:p-8">
        {/* Rating */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
          className="flex items-center gap-1 mb-6"
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
                className={`w-5 h-5 transition-colors ${
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
          className="text-secondary-700 dark:text-secondary-300 mb-8 leading-relaxed text-base md:text-lg relative z-10"
        >
          <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold leading-none">"</span>
          {content}
          <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold leading-none">"</span>
        </motion.p>

        {/* Author */}
        <div className="flex items-center gap-4 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4, type: "spring" }}
            className="relative flex-shrink-0"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-400 via-primary-500 to-accent-400 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-white dark:bg-secondary-800 flex items-center justify-center">
                {image ? (
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full rounded-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
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
              className="font-bold text-lg text-secondary-900 dark:text-white mb-1"
            >
              {name}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.6 }}
              className="text-sm text-secondary-600 dark:text-secondary-400"
            >
              {role}
              {company && (
                <span className="text-secondary-500 dark:text-secondary-500">
                  {' '}· {company}
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
