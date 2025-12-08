import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { projects, getProjectTypes, type ProjectType, getProjectByLang } from '../../data/projects'
import { 
  FunnelIcon,
  XMarkIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ServerIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline'

const typeIcons: Record<ProjectType, typeof ComputerDesktopIcon> = {
  'web-app': ComputerDesktopIcon,
  'mobile-app': DevicePhoneMobileIcon,
  'ecommerce': ShoppingBagIcon,
  'portfolio': BriefcaseIcon,
  'dashboard': ChartBarIcon,
  'api': ServerIcon,
  'desktop-app': CommandLineIcon
}

function ProjectsGrid() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language as 'en' | 'fr'
  const [selectedFilter, setSelectedFilter] = useState<ProjectType | 'all'>('all')

  // Get all unique project types
  const projectTypes = getProjectTypes()

  // Filter projects based on selected type
  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(project => project.type === selectedFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section 
      id="projects-grid"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-secondary-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('projects.grid.title')}
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300">
            {t('projects.grid.subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3">
            {/* Filter Label */}
            <div className="flex items-center gap-2 text-secondary-700 dark:text-secondary-300 mb-2 sm:mb-0">
              <FunnelIcon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-sm sm:text-base font-semibold">
                {t('projects.grid.filterBy')}:
              </span>
            </div>

            {/* Filter Buttons Container */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {/* All Filter */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter('all')}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedFilter === 'all'
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 hover:shadow-md'
                }`}
              >
                {t('projects.grid.all')}
              </motion.button>

              {/* Type Filters */}
              {projectTypes.map((type) => {
                const Icon = typeIcons[type]
                return (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedFilter(type)}
                    className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition-all duration-200 flex items-center gap-2 ${
                      selectedFilter === type
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                        : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 hover:shadow-md'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t(`projects.types.${type}`)}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Active Filter Indicator */}
          {selectedFilter !== 'all' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <div className="px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <span className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {filteredProjects.length}
                  </span>{' '}
                  {t('projects.grid.showing')} {t(`projects.types.${selectedFilter}`).toLowerCase()}
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter('all')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors text-sm sm:text-base font-medium"
              >
                <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('projects.grid.clear')}
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project) => {
                const projectData = getProjectByLang(project, currentLang)
                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    layout
                  >
                    <ProjectCard
                      id={project.id}
                      name={projectData.name}
                      description={projectData.description}
                      problem={projectData.problem}
                      solution={projectData.solution}
                      impact={projectData.impact}
                      stack={project.stack}
                      client={project.client}
                      links={project.links}
                      type={project.type}
                      visibility={project.visibility}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 sm:py-16"
            >
              <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-400">
                {t('projects.grid.noProjects')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsGrid
