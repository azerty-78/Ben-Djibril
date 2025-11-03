import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6'

function Footer() {
  const { t } = useTranslation()
  
  const services = [
    { name: 'Développement Web', link: '/services?type=web-dev' },
    { name: 'Sites Vitrines', link: '/services?type=showcase' },
    { name: 'Portfolio', link: '/services?type=portfolio' },
    { name: 'E-commerce', link: '/services?type=ecommerce' },
    { name: 'Applications Web', link: '/services?type=web-app' },
    { name: 'Applications Mobile', link: '/services?type=mobile' },
    { name: 'Applications Desktop', link: '/services?type=desktop' },
    { name: 'API Development', link: '/services?type=api' },
    { name: 'DevOps & Cloud', link: '/services?type=devops' },
    { name: 'Consulting', link: '/services?type=consulting' },
  ]
  
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
              <div className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300">
                <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+33 6 00 00 00 00</span>
              </div>
              <div className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300">
                <EnvelopeIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">contact@bendev.dev</span>
              </div>
              <div className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Remote · Worldwide</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white text-secondary-700 dark:text-secondary-300 flex items-center justify-center transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-secondary-900 dark:text-secondary-100">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.link} 
                    className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/services" 
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
                <Link to="/" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-secondary-600 dark:text-secondary-300">
              © {new Date().getFullYear()} <span className="font-semibold">Ben Djibril</span>. {t('footer.rights')}
            </p>
            <p className="text-secondary-500 dark:text-secondary-400">
              Fait avec ❤️ par <span className="font-medium text-primary-600 dark:text-primary-400">Benjamin</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
