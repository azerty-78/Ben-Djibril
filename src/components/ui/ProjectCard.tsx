import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  UserIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  LockClosedIcon,
  EyeIcon
} from '@heroicons/react/24/outline'
import type { ProjectType, ProjectVisibility, ProjectLinks, ProjectClient } from '../../data/projects'

type ProjectCardProps = {
  id: string
  name: string
  description: string
  problem: string
  solution: string
  impact: string
  stack: string[]
  client: ProjectClient
  links: ProjectLinks
  type: ProjectType
  visibility: ProjectVisibility
}

const typeColors: Record<ProjectType, string> = {
  'web-app': 'from-blue-500 to-cyan-500',
  'mobile-app': 'from-purple-500 to-pink-500',
  'ecommerce': 'from-green-500 to-emerald-500',
  'portfolio': 'from-orange-500 to-red-500',
  'dashboard': 'from-indigo-500 to-purple-500',
  'api': 'from-gray-500 to-slate-500',
  'desktop-app': 'from-teal-500 to-blue-500'
}

const clientTypeIcons: Record<ProjectClient['type'], typeof BuildingOfficeIcon> = {
  'company': BuildingOfficeIcon,
  'individual': UserIcon,
  'startup': RocketLaunchIcon,
  'ngo': GlobeAltIcon,
  'government': BuildingOfficeIcon
}

function ProjectCard({
  id,
  name,
  description,
  problem,
  solution,
  impact,
  stack,
  client,
  links,
  type,
  visibility,
}: ProjectCardProps) {
  const { t } = useTranslation()
  const ClientIcon = clientTypeIcons[client.type]

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
      <div className={`relative h-48 bg-gradient-to-br ${typeColors[type]} overflow-hidden`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-white text-5xl sm:text-6xl font-bold opacity-80">
            {name.charAt(0)}
          </div>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm">
          <span className="text-xs font-semibold text-secondary-900 dark:text-white">
            {t(`projects.types.${type}`)}
          </span>
        </div>

        {/* Visibility Badge */}
        <div className="absolute top-4 right-4">
          {visibility === 'public' ? (
            <div className="px-3 py-1.5 rounded-lg bg-green-500/90 backdrop-blur-sm flex items-center gap-1.5">
              <EyeIcon className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-semibold text-white">
                {t('projects.visibility.public')}
              </span>
            </div>
          ) : visibility === 'private' ? (
            <div className="px-3 py-1.5 rounded-lg bg-yellow-500/90 backdrop-blur-sm flex items-center gap-1.5">
              <LockClosedIcon className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-semibold text-white">
                {t('projects.visibility.private')}
              </span>
            </div>
          ) : (
            <div className="px-3 py-1.5 rounded-lg bg-red-500/90 backdrop-blur-sm flex items-center gap-1.5">
              <LockClosedIcon className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-semibold text-white">
                {t('projects.visibility.confidential')}
              </span>
            </div>
          )}
        </div>

        {/* Client Badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="px-3 py-2 rounded-lg bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-1">
              <ClientIcon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-semibold text-secondary-900 dark:text-white">
                {client.name}
              </span>
            </div>
            <p className="text-xs text-secondary-600 dark:text-secondary-400 line-clamp-2">
              {client.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {name}
          </h3>
          <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Problem, Solution, Impact */}
        <div className="space-y-3 mb-4 flex-1">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-accent-50/50 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-800/30">
            <ExclamationTriangleIcon className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-accent-700 dark:text-accent-300 uppercase tracking-wide">
                {t('projects.problem')}
              </span>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 mt-1 leading-relaxed line-clamp-3">
                {problem}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-primary-50/50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30">
            <LightBulbIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wide">
                {t('projects.solution')}
              </span>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 mt-1 leading-relaxed line-clamp-3">
                {solution}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-success-50/50 dark:bg-success-900/20 border border-success-100 dark:border-success-800/30">
            <ChartBarIcon className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-success-700 dark:text-success-300 uppercase tracking-wide">
                {t('projects.impact')}
              </span>
              <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 mt-1 leading-relaxed line-clamp-3">
                {impact}
              </p>
            </div>
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-secondary-700 dark:text-secondary-400 mb-2 uppercase tracking-wide">
            {t('projects.stack')}
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-medium border border-secondary-200 dark:border-secondary-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto pt-4 border-t border-secondary-100 dark:border-secondary-800">
          {links.official && (
            <a
              href={links.official}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2 group/btn"
            >
              {t('projects.viewProject')}
              <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2"
            >
              <CodeBracketIcon className="w-4 h-4" />
              <span className="hidden sm:inline">{t('projects.viewCode')}</span>
            </a>
          )}
          {links.demo && !links.official && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm px-4 py-2.5 flex items-center justify-center gap-2"
            >
              {t('projects.viewDemo')}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
