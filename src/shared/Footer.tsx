import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'

function Footer() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  
  // Les 8 services les plus demandés
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

  // Fonction pour scroller vers le haut de la page
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const pathname = path.split('?')[0] // Extraire le pathname sans les query params
    navigate(path)
    // Scroll vers le haut après la navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  // Fonction pour rediriger vers la section services
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
        // Si la section n'est pas trouvée, scroll vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 200)
  }
  
  return (
    <footer className="mt-auto border-t border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-3">Ben Djibril</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed">
                Ingénieur DevOps spécialisé en backend et mobile, créant des solutions digitales performantes pour entreprises internationales.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <a 
                  href="tel:+237655938501" 
                  className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex-1"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">+237 655 938 501</span>
                </a>
                <a
                  href="https://wa.me/237655938501"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactez-moi sur WhatsApp"
                  className="h-8 w-8 rounded-full bg-success-500 hover:bg-success-600 text-white flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg flex-shrink-0"
                  title="Contacter sur WhatsApp"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </a>
              </div>
              <a 
                href="mailto:contact@bendjibril.dev" 
                className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">contact@bendjibril.dev</span>
              </a>
              <div className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Yaoundé, Cameroun</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/237655938501"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 rounded-full bg-success-500 hover:bg-success-600 text-white flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg"
                title="Contacter sur WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/le_bendji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/Ben-Djibril"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/azerty-78"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100">Services</h4>
            <ul className="space-y-2.5">
              {popularServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.link}
                    onClick={(e) => handleLinkClick(e, service.link)}
                    className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/services"
                  onClick={handleViewAllServices}
                  className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium inline-flex items-center gap-1"
                >
                  Voir tous les services
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100">Pages</h4>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/" 
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={(e) => handleLinkClick(e, '/about')}
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  onClick={(e) => handleLinkClick(e, '/projects')}
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  onClick={(e) => handleLinkClick(e, '/services')}
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  onClick={(e) => handleLinkClick(e, '/blog')}
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100">Newsletter</h4>
            <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4 leading-relaxed">
              Recevez les dernières actualités, conseils et études de cas directement dans votre boîte mail.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full border border-secondary-300 dark:border-secondary-600 rounded-lg px-4 py-2.5 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
              />
              <button
                type="submit"
                className="btn-primary w-full text-sm"
              >
                S'abonner
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-secondary-200 dark:border-secondary-700">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {t('footer.legal')}
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {t('footer.privacy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-200 dark:border-secondary-700">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm">
            <p className="text-secondary-600 dark:text-secondary-300 text-center md:text-left">
              © {new Date().getFullYear()} <span className="font-semibold">Ben Djibril</span>. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
