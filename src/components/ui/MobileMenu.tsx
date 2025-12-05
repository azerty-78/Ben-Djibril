import { NavLink, useNavigate } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

type MobileMenuProps = {
  onNavigate?: () => void
}

function MobileMenu({ onNavigate }: MobileMenuProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  
  const linkBase = 'px-3 py-2.5 rounded-lg font-medium transition-colors'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`

  const handleNavigation = (callback: () => void) => {
    setIsSubMenuOpen(false)
    // Fermer le menu principal avec un léger délai pour permettre l'animation
    setTimeout(() => {
      onNavigate?.()
    }, 150)
    // Exécuter la navigation après la fermeture du sous-menu
    setTimeout(() => {
      callback()
    }, 50)
  }

  const scrollToSection = (sectionId: string, path: string = '/services') => {
    handleNavigation(() => {
      navigate(path)
      setTimeout(() => {
        const section = document.querySelector(`[data-section="${sectionId}"]`)
        if (section) {
          const offset = 80 // Offset for sticky header
          const elementPosition = section.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 200)
    })
  }

  const scrollToSubSection = (sectionId: string, path: string = '/services') => {
    handleNavigation(() => {
      navigate(path)
      setTimeout(() => {
        const section = document.querySelector(`[data-subsection="${sectionId}"]`)
        if (section) {
          const offset = 80
          const elementPosition = section.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 200)
    })
  }

  const handleNavLinkClick = () => {
    setIsSubMenuOpen(false)
    // Fermer le menu principal avec une animation fluide
    setTimeout(() => {
      onNavigate?.()
    }, 200)
  }

  const serviceLinks = [
    { 
      onClick: () => scrollToSection('services'),
      label: t('nav.services')
    },
    { 
      onClick: () => scrollToSection('packages'),
      label: 'Forfaits'
    },
    { 
      onClick: () => scrollToSubSection('saas'),
      label: 'Good Deal (SaaS)'
    },
    { 
      onClick: () => scrollToSubSection('fullControl'),
      label: 'Full Control'
    },
  ]

  return (
    <nav className="grid gap-2 text-sm">
      <NavLink 
        to="/" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.home')}
      </NavLink>

      <Disclosure open={isSubMenuOpen} onChange={setIsSubMenuOpen} as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className={`${linkBase} flex items-center justify-between text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700 font-medium`}>
              <span>{t('nav.services')}</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ease-in-out ${open ? 'rotate-180' : ''} text-secondary-600 dark:text-secondary-400`} />
            </Disclosure.Button>
            <AnimatePresence mode="wait">
              {open && (
                <Disclosure.Panel
                  as={motion.div}
                  static
                  initial={{ height: 0, opacity: 0, x: -10 }}
                  animate={{ height: 'auto', opacity: 1, x: 0 }}
                  exit={{ height: 0, opacity: 0, x: -10 }}
                  transition={{ 
                    duration: 0.3, 
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: 0.2 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-1.5 mt-2 border-l-2 border-secondary-200 dark:border-secondary-700">
                    {serviceLinks.map((link, index) => (
                      <button
                        key={index}
                        onClick={link.onClick}
                        className={`${linkBase} text-sm w-full text-left bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200`}
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>

      <NavLink 
        to="/projects" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.projects')}
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.about')}
      </NavLink>
      <NavLink 
        to="/blog" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.blog')}
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {t('nav.contact')}
      </NavLink>
      <NavLink 
        to="/contact" 
        className="btn-primary w-full text-center mt-3 py-2.5"
        onClick={handleNavLinkClick}
      >
        {t('nav.contact')}
      </NavLink>
    </nav>
  )
}

export default MobileMenu

