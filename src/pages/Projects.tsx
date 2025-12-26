import SEO from '../components/seo/SEO'
import ProjectsHero from '../components/projects/ProjectsHero'
import ProjectsComingSoon from '../components/projects/ProjectsComingSoon'
import ProjectsCTA from '../components/projects/ProjectsCTA'

function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <SEO />
      <ProjectsHero />
      <ProjectsComingSoon />
      <ProjectsCTA />
    </div>
  )
}

export default Projects
