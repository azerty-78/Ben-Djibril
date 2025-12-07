import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const popularServices = [
  { name: 'E-commerce', link: '/services?type=ecommerce' },
  { name: 'Gestion de Stock', link: '/services?type=inventory' },
  { name: 'Gestion de Restaurant', link: '/services?type=restaurant' },
  { name: 'Logiciel de Facturation', link: '/services?type=billing' },
  { name: 'Point de Vente (PDV)', link: '/services?type=pos' },
  { name: 'Gestion de Clients', link: '/services?type=crm' },
  { name: 'Applications Mobile', link: '/services?type=mobile' },
  { name: 'Applications Web', link: '/services?type=web-app' },
]

function FooterServices() {
  const navigate = useNavigate()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    navigate(path)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleViewAllServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    navigate('/services')
    setTimeout(() => {
      const servicesSection = document.querySelector('[data-section="services"]')
      if (servicesSection) {
        const offset = 80
        const elementPosition = servicesSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 200)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100"
      >
        Services
      </motion.h4>
      <ul className="space-y-2.5">
        {popularServices.map((service, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link 
              to={service.link}
              onClick={(e) => handleLinkClick(e, service.link)}
              className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors inline-flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              {service.name}
            </Link>
          </motion.li>
        ))}
        <motion.li
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="pt-2"
        >
          <Link 
            to="/services"
            onClick={handleViewAllServices}
            className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium inline-flex items-center gap-1 group"
          >
            Voir tous les services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  )
}

export default FooterServices

