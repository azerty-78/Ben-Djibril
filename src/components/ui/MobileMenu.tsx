import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

type MobileMenuProps = {
  onNavigate?: () => void
}

function MobileMenu({ onNavigate }: MobileMenuProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  
  // Fermer le menu quand la route change
  useEffect(() => {
    setIsSubMenuOpen(false)
    onNavigate?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  
  const linkBase = 'px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 relative'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${
      isActive 
        ? 'bg-primary-600 text-white shadow-md dark:shadow-lg' 
        : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800 active:scale-95'
    }`

  const handleNavigation = (callback: () => void) => {
    setIsSubMenuOpen(false)
    // Fermer le menu principal immédiatement
    onNavigate?.()
    // Exécuter la navigation
    callback()
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
    // Fermer le menu principal immédiatement
    onNavigate?.()
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
    <nav className="grid gap-2.5 text-sm">
      <NavLink 
        to="/" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-primary-400 rounded-r-full"
                layoutId="activeMobileNavLink"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span>{t('nav.home')}</span>
          </>
        )}
      </NavLink>

      <Disclosure open={isSubMenuOpen} onChange={setIsSubMenuOpen} as="div">
        {({ open }) => (
          <>
            <Disclosure.Button className={`${linkBase} justify-between text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-800 active:scale-95`}>
              <span>{t('nav.services')}</span>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDownIcon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              </motion.div>
            </Disclosure.Button>
            <AnimatePresence mode="wait">
              {open && (
                <Disclosure.Panel
                  as={motion.div}
                  static
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.25, 
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: 0.15 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 ml-2 space-y-1.5 mt-2 border-l-2 border-primary-200 dark:border-primary-800">
                    {serviceLinks.map((link, index) => (
                      <motion.button
                        key={index}
                        onClick={link.onClick}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-2.5 rounded-lg text-sm w-full text-left bg-secondary-50 dark:bg-secondary-900/50 text-secondary-700 dark:text-secondary-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 active:scale-95 transition-all duration-200 font-medium"
                      >
                        {link.label}
                      </motion.button>
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
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-primary-400 rounded-r-full"
                layoutId="activeMobileNavLink"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span>{t('nav.projects')}</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-primary-400 rounded-r-full"
                layoutId="activeMobileNavLink"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span>{t('nav.about')}</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/blog" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-primary-400 rounded-r-full"
                layoutId="activeMobileNavLink"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span>{t('nav.blog')}</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => linkClass(isActive)}
        onClick={handleNavLinkClick}
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-primary-400 rounded-r-full"
                layoutId="activeMobileNavLink"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span>{t('nav.contact')}</span>
          </>
        )}
      </NavLink>
      <NavLink 
        to="/contact" 
        className="btn-primary w-full text-center mt-4 py-3 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
        onClick={handleNavLinkClick}
      >
        {t('nav.contact')}
      </NavLink>
    </nav>
  )
}

export default MobileMenu

