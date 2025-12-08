import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import ProjectsCTA from '../components/projects/ProjectsCTA'

function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </div>
  )
}

export default Projects
