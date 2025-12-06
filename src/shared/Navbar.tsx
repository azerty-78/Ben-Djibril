import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from '../components/ui/MobileMenu'

function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fermer le menu quand la route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Détecter le scroll pour améliorer l'effet visuel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkBase = 'px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${
      isActive 
        ? 'text-primary-600 dark:text-primary-400' 
        : 'text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400'
    }`

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-md shadow-md dark:shadow-lg dark:shadow-black/30 border-b border-secondary-200/80 dark:border-secondary-700/80' 
          : 'bg-white/80 dark:bg-secondary-900/80 backdrop-blur-sm border-b border-secondary-200/50 dark:border-secondary-700/50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between py-3 sm:py-3.5 lg:py-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <NavLink 
              to="/" 
              className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap hover:scale-105 transition-transform duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Ben Djibril
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm">
            <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {t('nav.home')}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {t('nav.services')}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {t('nav.projects')}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {t('nav.about')}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {t('nav.blog')}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {t('nav.contact')}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      layoutId="activeNavLink"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <ThemeToggle />
            <NavLink 
              to="/contact" 
              className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              {t('nav.contact')}
            </NavLink>
          </div>

          <div className="lg:hidden flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Menu"
              className="p-2.5 rounded-xl bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100 hover:bg-secondary-200 dark:hover:bg-secondary-700 active:scale-95 transition-all duration-200 flex-shrink-0 shadow-sm"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="pb-4 pt-2 border-t border-secondary-200/50 dark:border-secondary-700/50 mt-2">
                <MobileMenu onNavigate={() => setIsMenuOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
