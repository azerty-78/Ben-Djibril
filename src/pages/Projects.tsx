import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ui/ProjectCard'
import { motion } from 'framer-motion'
import { mockProjects } from '../data/mockData'

function Projects() {
  const { t } = useTranslation()

  return (
    <div className="space-y-16 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h1>
        <p className="text-xl text-secondary-600 dark:text-secondary-300">{t('projects.subtitle')}</p>
      </motion.div>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <ProjectCard
              key={index}
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
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
