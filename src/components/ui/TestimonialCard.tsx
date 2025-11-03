import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

type TestimonialCardProps = {
  name: string
  role: string
  company?: string
  image?: string
  content: string
  rating: number
}

function TestimonialCard({ name, role, company, image, content, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-warning-500' : 'text-secondary-300 dark:text-secondary-700'}`}
          />
        ))}
      </div>

      <p className="text-secondary-700 dark:text-secondary-300 mb-6 italic">"{content}"</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-secondary-600 dark:text-secondary-400">
            {role}
            {company && ` at ${company}`}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard

