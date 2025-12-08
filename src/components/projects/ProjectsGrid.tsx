import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { mockProjects } from '../data/mockData'
import { 
  FunnelIcon,
  XMarkIcon 
} from '@heroicons/react/24/outline'

type Project = typeof mockProjects[0]

function ProjectsGrid() {
  const { t } = useTranslation()
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(mockProjects.flatMap(project => project.tags))
  )

  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === 'all'
    ? mockProjects
    : mockProjects.filter(project => project.tags.includes(selectedFilter))

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
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Filter Label */}
            <div className="flex items-center gap-2 text-secondary-700 dark:text-secondary-300">
              <FunnelIcon className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">
                {t('projects.grid.filter')}:
              </span>
            </div>

            {/* All Filter */}
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                selectedFilter === 'all'
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
              }`}
            >
              {t('projects.grid.all')}
            </button>

            {/* Tag Filters */}
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedFilter(tag)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                  selectedFilter === tag
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Active Filter Indicator */}
          {selectedFilter !== 'all' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex items-center justify-center gap-2"
            >
              <span className="text-sm text-secondary-600 dark:text-secondary-400">
                {t('projects.grid.showing')} {filteredProjects.length} {t('projects.grid.projects')}
              </span>
              <button
                onClick={() => setSelectedFilter('all')}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors text-sm"
              >
                <XMarkIcon className="w-4 h-4" />
                {t('projects.grid.clear')}
              </button>
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
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  variants={itemVariants}
                  layout
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    problem={project.problem}
                    solution={project.solution}
                    impact={project.impact}
                    tags={project.tags}
                    client={project.client}
                    projectUrl={project.projectUrl}
                    codeUrl={project.codeUrl}
                  />
                </motion.div>
              ))}
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

