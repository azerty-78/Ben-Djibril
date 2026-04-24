import { motion } from 'framer-motion'
import type { TechItemWithLevel } from '../../data/techStack'
import TechStack from '../ui/TechStack'

type TechStackFilterableProps = {
  title: string
  description?: string
  items: TechItemWithLevel[]
  columns?: 2 | 3 | 4 | 5 | 6
  icon?: React.ReactNode
  iconBg?: string
}

function TechStackFilterable({
  title,
  description,
  items,
  columns = 4,
  icon,
  iconBg = 'bg-primary-100 dark:bg-primary-900/30'
}: TechStackFilterableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card p-6 md:p-8"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        {icon && (
          <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">{title}</h3>
          {description && (
            <p className="text-sm text-secondary-500 dark:text-secondary-400">{description}</p>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <TechStack 
        items={items.map(item => ({ name: item.name, slug: item.slug, level: item.level }))} 
        title="" 
        columns={columns}
        showLevelBadge={true}
      />
    </motion.div>
  )
}

export default TechStackFilterable
