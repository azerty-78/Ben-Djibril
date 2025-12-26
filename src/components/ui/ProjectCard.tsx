import { useState, useMemo, useCallback } from 'react'
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
  EyeIcon,
  PlayIcon,
  PhotoIcon
} from '@heroicons/react/24/outline'
import ImageLightbox from './ImageLightbox'
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
  images: string[]
}

// Default color for unknown types
const defaultColor = {
  gradient: 'from-gray-500 via-slate-500 to-gray-600',
  light: 'bg-gray-50 border-gray-200',
  dark: 'dark:bg-gray-900/20 dark:border-gray-800/30'
}

const typeColors: Partial<Record<ProjectType, { gradient: string; light: string; dark: string }>> = {
  'web-dev': {
    gradient: 'from-blue-500 via-cyan-500 to-blue-600',
    light: 'bg-blue-50 border-blue-200',
    dark: 'dark:bg-blue-900/20 dark:border-blue-800/30'
  },
  'showcase': {
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    light: 'bg-purple-50 border-purple-200',
    dark: 'dark:bg-purple-900/20 dark:border-purple-800/30'
  },
  'portfolio': {
    gradient: 'from-orange-500 via-red-500 to-orange-600',
    light: 'bg-orange-50 border-orange-200',
    dark: 'dark:bg-orange-900/20 dark:border-orange-800/30'
  },
  'ecommerce': {
    gradient: 'from-green-500 via-emerald-500 to-green-600',
    light: 'bg-green-50 border-green-200',
    dark: 'dark:bg-green-900/20 dark:border-green-800/30'
  },
  'web-app': {
    gradient: 'from-indigo-500 via-purple-500 to-indigo-600',
    light: 'bg-indigo-50 border-indigo-200',
    dark: 'dark:bg-indigo-900/20 dark:border-indigo-800/30'
  },
  'mobile': {
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    light: 'bg-purple-50 border-purple-200',
    dark: 'dark:bg-purple-900/20 dark:border-purple-800/30'
  },
  'api': {
    gradient: 'from-gray-500 via-slate-500 to-gray-600',
    light: 'bg-gray-50 border-gray-200',
    dark: 'dark:bg-gray-900/20 dark:border-gray-800/30'
  },
  'desktop': {
    gradient: 'from-teal-500 via-blue-500 to-teal-600',
    light: 'bg-teal-50 border-teal-200',
    dark: 'dark:bg-teal-900/20 dark:border-teal-800/30'
  },
}

const clientTypeIcons: Record<ProjectClient['type'], typeof BuildingOfficeIcon> = {
  'company': BuildingOfficeIcon,
  'individual': UserIcon,
  'startup': RocketLaunchIcon,
  'ngo': GlobeAltIcon,
  'government': BuildingOfficeIcon
}

function ProjectCard({
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
  images,
}: ProjectCardProps) {
  const { t } = useTranslation()
  
  // Memoize expensive computations
  const ClientIcon = useMemo(() => clientTypeIcons[client.type], [client.type])
  const typeColor = useMemo(() => typeColors[type] || defaultColor, [type])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const handleImageClick = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  // Memoize stack display
  const displayedStack = useMemo(() => stack.slice(0, 5), [stack])
  const remainingStackCount = useMemo(() => Math.max(0, stack.length - 5), [stack.length])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="group relative bg-white dark:bg-secondary-900 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl border border-secondary-100 dark:border-secondary-800 overflow-hidden transition-all duration-300 h-full flex flex-col"
      >
        {/* Image/Header Section */}
        <div 
          className={`relative h-56 sm:h-64 bg-gradient-to-br ${typeColor.gradient} overflow-hidden cursor-pointer`} 
          onClick={() => handleImageClick(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleImageClick(0)
            }
          }}
          aria-label={`${t('projects.viewImages')} ${name}`}
        >
          {/* Actual Image or Placeholder */}
          {images && images.length > 0 ? (
            <>
              <img
                src={images[0]}
                alt={name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
              />
              {/* Image Count Badge */}
              {images.length > 1 && (
                <div className="absolute top-4 left-4 z-30 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md flex items-center gap-1.5">
                  <PhotoIcon className="w-4 h-4 text-white" aria-hidden="true" />
                  <span className="text-xs font-bold text-white">
                    {images.length} {t('projects.images')}
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
              </div>
              
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-6xl sm:text-7xl font-bold opacity-90 drop-shadow-lg"
                >
                  {name.charAt(0)}
                </motion.div>
              </div>
            </>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-20" />
          
          {/* Type Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 z-30 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-lg border border-white/20"
          >
            <span className="text-xs font-bold text-secondary-900 dark:text-white uppercase tracking-wide">
              {t(`projects.types.${type}`)}
            </span>
          </motion.div>

          {/* Visibility Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-4 right-4 z-30"
          >
            {visibility === 'public' ? (
              <div className="px-3.5 py-2 rounded-xl bg-green-500/95 backdrop-blur-md flex items-center gap-1.5 shadow-lg border border-green-400/30">
                <EyeIcon className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white">
                  {t('projects.visibility.public')}
                </span>
              </div>
            ) : visibility === 'private' ? (
              <div className="px-3.5 py-2 rounded-xl bg-yellow-500/95 backdrop-blur-md flex items-center gap-1.5 shadow-lg border border-yellow-400/30">
                <LockClosedIcon className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white">
                  {t('projects.visibility.private')}
                </span>
              </div>
            ) : (
              <div className="px-3.5 py-2 rounded-xl bg-red-500/95 backdrop-blur-md flex items-center gap-1.5 shadow-lg border border-red-400/30">
                <LockClosedIcon className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white">
                  {t('projects.visibility.confidential')}
                </span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col">
          {/* Title & Description */}
          <div className="mb-5">
            <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
              {name}
            </h3>
            <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-300 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Client Information Section */}
          <div className="mb-5 p-4 rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100/50 dark:from-secondary-800/50 dark:to-secondary-900/50 border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-start gap-3">
              <div className={`p-2.5 rounded-lg ${typeColor.light} ${typeColor.dark} flex-shrink-0`}>
                <ClientIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-sm font-bold text-secondary-900 dark:text-white">
                    {client.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-secondary-200 dark:bg-secondary-700 text-xs font-medium text-secondary-600 dark:text-secondary-400">
                    {t(`projects.clientTypes.${client.type}`)}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {client.translations[t('projects.lang') as 'en' | 'fr']?.description || client.translations.en.description}
                </p>
              </div>
            </div>
          </div>

          {/* Problem, Solution, Impact */}
          <div className="space-y-3 mb-5 flex-1">
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-accent-50/60 dark:bg-accent-900/20 border border-accent-100 dark:border-accent-800/30 hover:bg-accent-50 dark:hover:bg-accent-900/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/40 flex-shrink-0" aria-hidden="true">
                <ExclamationTriangleIcon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-accent-700 dark:text-accent-300 uppercase tracking-wide block mb-1.5">
                  {t('projects.problem')}
                </span>
                <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed line-clamp-3">
                  {problem}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-primary-50/60 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/30 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex-shrink-0" aria-hidden="true">
                <LightBulbIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-primary-700 dark:text-primary-300 uppercase tracking-wide block mb-1.5">
                  {t('projects.solution')}
                </span>
                <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed line-clamp-3">
                  {solution}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-success-50/60 dark:bg-success-900/20 border border-success-100 dark:border-success-800/30 hover:bg-success-50 dark:hover:bg-success-900/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-success-100 dark:bg-success-900/40 flex-shrink-0" aria-hidden="true">
                <ChartBarIcon className="w-5 h-5 text-success-600 dark:text-success-400" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-success-700 dark:text-success-300 uppercase tracking-wide block mb-1.5">
                  {t('projects.impact')}
                </span>
                <p className="text-xs sm:text-sm text-secondary-700 dark:text-secondary-300 leading-relaxed line-clamp-3">
                  {impact}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stack Tags */}
          <div className="mb-5">
            <p className="text-xs font-bold text-secondary-700 dark:text-secondary-400 mb-2.5 uppercase tracking-wide">
              {t('projects.stack')}
            </p>
            <div className="flex flex-wrap gap-2">
              {displayedStack.map((tech, index) => (
                <motion.span
                  key={`${tech}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="px-3 py-1.5 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg text-xs font-semibold border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
              {remainingStackCount > 0 && (
                <span className="px-3 py-1.5 bg-secondary-100 dark:bg-secondary-800 text-secondary-500 dark:text-secondary-400 rounded-lg text-xs font-semibold border border-secondary-200 dark:border-secondary-700">
                  +{remainingStackCount}
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-auto pt-5 border-t border-secondary-100 dark:border-secondary-800">
            {links.official && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={links.official}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-primary text-xs sm:text-sm px-4 py-3 flex items-center justify-center gap-2 group/btn font-semibold"
              >
                {t('projects.viewProject')}
                <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.a>
            )}
            {links.github && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm px-4 py-3 flex items-center justify-center gap-2 font-semibold"
              >
                <CodeBracketIcon className="w-4 h-4" />
                <span className="hidden sm:inline">{t('projects.viewCode')}</span>
              </motion.a>
            )}
            {links.demo && !links.official && (
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm px-4 py-3 flex items-center justify-center gap-2 font-semibold"
              >
                <PlayIcon className="w-4 h-4" />
                {t('projects.viewDemo')}
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Image Lightbox */}
      {images && images.length > 0 && (
        <ImageLightbox
          images={images}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

export default ProjectCard
