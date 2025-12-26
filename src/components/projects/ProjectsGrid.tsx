import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import CustomSelect from '../ui/CustomSelect'
import { projects, getProjectTypes, type ProjectType, getProjectByLang } from '../../data/projects'
import { 
  FunnelIcon,
  XMarkIcon,
  FolderOpenIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  StarIcon,
  ShoppingBagIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  CubeIcon,
  BuildingStorefrontIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  UserGroupIcon,
  TruckIcon,
  CalendarIcon,
  BeakerIcon,
  HeartIcon,
  ScissorsIcon,
  HomeIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  WalletIcon,
  MapPinIcon,
  AcademicCapIcon,
  BuildingLibraryIcon
} from '@heroicons/react/24/outline'

// Map project types to service icons - Moved outside component to prevent recreation
const getTypeIcon = (type: ProjectType) => {
  const iconMap: Record<ProjectType, typeof GlobeAltIcon> = {
    'web-dev': GlobeAltIcon,
    'showcase': DocumentTextIcon,
    'portfolio': StarIcon,
    'ecommerce': ShoppingBagIcon,
    'web-app': CodeBracketIcon,
    'mobile': DevicePhoneMobileIcon,
    'desktop': ComputerDesktopIcon,
    'api': ServerIcon,
    'devops': WrenchScrewdriverIcon,
    'consulting': CommandLineIcon,
    'inventory': CubeIcon,
    'restaurant': BuildingStorefrontIcon,
    'billing': CalculatorIcon,
    'orders': ClipboardDocumentListIcon,
    'pos': CreditCardIcon,
    'crm': UserGroupIcon,
    'delivery': TruckIcon,
    'booking': CalendarIcon,
    'pharmacy': BeakerIcon,
    'gym': HeartIcon,
    'salon': ScissorsIcon,
    'transport': TruckIcon,
    'rental': HomeIcon,
    'accounting': BanknotesIcon,
    'payroll': CurrencyDollarIcon,
    'mobile-money': WalletIcon,
    'market': MapPinIcon,
    'parking': MapPinIcon,
    'school': AcademicCapIcon,
    'hospital': BuildingLibraryIcon
  }
  return iconMap[type] || GlobeAltIcon
}

// Memoized variants to prevent recreation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: -15,
    transition: {
      duration: 0.25,
    },
  },
}

function ProjectsGrid() {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language as 'en' | 'fr'
  const [selectedFilter, setSelectedFilter] = useState<ProjectType | 'all'>('all')

  // Memoize project types
  const projectTypes = useMemo(() => getProjectTypes(), [])

  // Memoize filtered projects
  const filteredProjects = useMemo(() => {
    return selectedFilter === 'all'
      ? projects
      : projects.filter(project => project.type === selectedFilter)
  }, [selectedFilter])

  // Optimized scroll function with useCallback
  const handleFilterChange = useCallback((value: string) => {
    setSelectedFilter(value as ProjectType | 'all')
    // Scroll to results after state update
    requestAnimationFrame(() => {
      setTimeout(() => {
        const gridElement = document.getElementById('projects-grid-content')
        if (gridElement) {
          const offset = 100
          const elementPosition = gridElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        }
      }, 50)
    })
  }, [])

  // Memoize select options
  const selectOptions = useMemo(() => [
    {
      value: 'all',
      label: t('projects.grid.all'),
      icon: FolderOpenIcon
    },
    ...projectTypes.map(type => ({
      value: type,
      label: t(`projects.types.${type}`),
      icon: getTypeIcon(type)
    }))
  ], [t, projectTypes])

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
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('projects.grid.title')}
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300">
            {t('projects.grid.subtitle')}
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 sm:mb-10 md:mb-12 relative z-50"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-2xl mx-auto">
            {/* Filter Label */}
            <div className="flex items-center gap-2 text-secondary-700 dark:text-secondary-300">
              <FunnelIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold whitespace-nowrap">
                {t('projects.grid.filterBy')}:
              </span>
            </div>

            {/* Custom Select */}
            <div className="flex-1 sm:max-w-xs">
              <CustomSelect
                options={selectOptions}
                value={selectedFilter}
                onChange={handleFilterChange}
                placeholder={t('projects.grid.selectPlaceholder')}
              />
            </div>

            {/* Clear Filter Button */}
            {selectedFilter !== 'all' && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterChange('all')}
                className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2 whitespace-nowrap"
                aria-label={t('projects.grid.clear')}
              >
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                {t('projects.grid.clear')}
              </motion.button>
            )}
          </div>

          {/* Active Filter Info */}
          {selectedFilter !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex items-center justify-center"
            >
              <div className="px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <span className="text-sm sm:text-base text-secondary-700 dark:text-secondary-300">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {filteredProjects.length}
                  </span>{' '}
                  {t('projects.grid.showing')} {t(`projects.types.${selectedFilter}`).toLowerCase()}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid or Empty State */}
        <div id="projects-grid-content" className="relative z-10">
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
                        client={projectData.client}
                        links={project.links}
                        type={project.type}
                        visibility={project.visibility}
                        images={project.images}
                      />
                    </motion.div>
                  )
                })}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-16 sm:py-20 md:py-24"
              >
                <div className="max-w-md mx-auto">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary-100 dark:bg-secondary-800 mb-4">
                      <FolderOpenIcon className="w-10 h-10 sm:w-12 sm:h-12 text-secondary-400 dark:text-secondary-500" aria-hidden="true" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white mb-3">
                    {t('projects.grid.noProjects.title')}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-secondary-600 dark:text-secondary-400 mb-6">
                    {t('projects.grid.noProjects.message', { 
                      type: t(`projects.types.${selectedFilter}`).toLowerCase() 
                    })}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFilterChange('all')}
                    className="btn-primary px-6 py-3 flex items-center gap-2 mx-auto"
                    aria-label={t('projects.grid.noProjects.viewAll')}
                  >
                    {t('projects.grid.noProjects.viewAll')}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
