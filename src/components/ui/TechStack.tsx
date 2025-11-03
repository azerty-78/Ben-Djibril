import { useState } from 'react'
import { motion } from 'framer-motion'

type TechItem = {
  name: string
  slug: string
  category?: string
}

type TechStackProps = {
  title: string
  items: TechItem[]
  columns?: 2 | 3 | 4 | 5 | 6
}

function TechItemCard({ item, index }: { item: TechItem; index: number }) {
  const [hasError, setHasError] = useState(false)
  const iconName = item.slug.toLowerCase().replace(/\s+/g, '')
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors group"
    >
      {!hasError ? (
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={iconUrl}
            alt={item.name}
            className="w-8 h-8"
            style={{ 
              // Pas de filtre pour garder les couleurs originales
            }}
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div 
          className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-lg"
        >
          {item.name.charAt(0)}
        </div>
      )}
      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 text-center">
        {item.name}
      </span>
    </motion.div>
  )
}

function TechStack({ title, items, columns = 4 }: TechStackProps) {
  return (
    <div className="space-y-4">
      {title && <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">{title}</h3>}
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} gap-4`}>
        {items.map((item, index) => (
          <TechItemCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default TechStack
