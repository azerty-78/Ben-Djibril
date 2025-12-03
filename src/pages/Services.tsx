import ServicesHero from '../components/service/ServicesHero'
import ServicesPackages from '../components/service/ServicesPackages'
import ServicesList from '../components/service/ServicesList'
import ServicesCTA from '../components/service/ServicesCTA'

function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <ServicesHero />
      <ServicesPackages />
      <ServicesList />
      <ServicesCTA />
    </div>
  )
}

export default Services
