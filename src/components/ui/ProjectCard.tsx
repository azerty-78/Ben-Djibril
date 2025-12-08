import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

type ProjectCardProps = {
  title: string
  description: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  image?: string
  projectUrl?: string
  codeUrl?: string
  client?: string
}

function ProjectCard({
  title,
  description,
  problem,
  solution,
  impact,
  tags,
  image,
  projectUrl,
  codeUrl,
  client,
}: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-secondary-900 rounded-2xl shadow-lg hover:shadow-2xl border border-secondary-100 dark:border-secondary-800 overflow-hidden transition-all duration-300 h-full flex flex-col"
    >
      {/* Image/Header Section */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500 via-primary-400 to-accent-500 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-4xl font-bold opacity-80">
              {title.charAt(0)}
            </div>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Client Badge */}
        {client && (
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-secondary-900/90 backdrop-blur-sm text-xs font-semibold text-secondary-900 dark:text-white">
            {client}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Problem, Solution, Impact */}
        <div className="space-y-3 mb-4 flex-1">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-accent-50/50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-800/30">
            <ExclamationTriangleIcon className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-xs font-semibold text-accent-700 dark:text-accent-300 uppercase tracking-wide">
                {t('projects.problem')}
              </span>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 mt-1 leading-relaxed">
                {problem}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50/50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30">
            <LightBulbIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-xs font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                {t('projects.solution')}
              </span>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 mt-1 leading-relaxed">
                {solution}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-success-50/50 dark:bg-success-900/20 border border-success-100 dark:border-success-800/30">
            <ChartBarIcon className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="text-xs font-semibold text-success-700 dark:text-success-300 uppercase tracking-wide">
                {t('projects.impact')}
              </span>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 mt-1 leading-relaxed">
                {impact}
              </p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-medium border border-secondary-200 dark:border-secondary-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 sm:gap-3 mt-auto pt-4 border-t border-secondary-100 dark:border-secondary-800">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2 group/btn"
            >
              {t('projects.viewProject')}
              <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2"
            >
              <CodeBracketIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{t('projects.viewCode')}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

