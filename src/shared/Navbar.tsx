import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from '../components/ui/MobileMenu'

function Navbar() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linkBase = 'px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-lg text-sm transition-colors'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-secondary-900/60 backdrop-blur border-b border-secondary-200 dark:border-secondary-700">
      <Disclosure open={isMenuOpen} onChange={setIsMenuOpen}>
        {({ open }) => (
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between py-2.5 sm:py-3">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
                <NavLink 
                  to="/" 
                  className="text-lg sm:text-xl font-bold gradient-text whitespace-nowrap"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ben Djibril
                </NavLink>
              </div>

              <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm">
                <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>{t('nav.home')}</NavLink>
                <NavLink to="/services" className={({ isActive }) => linkClass(isActive)}>{t('nav.services')}</NavLink>
                <NavLink to="/projects" className={({ isActive }) => linkClass(isActive)}>{t('nav.projects')}</NavLink>
                <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>{t('nav.about')}</NavLink>
                <NavLink to="/blog" className={({ isActive }) => linkClass(isActive)}>{t('nav.blog')}</NavLink>
                <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>{t('nav.contact')}</NavLink>
              </div>

              <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
                <LanguageSwitcher />
                <ThemeToggle />
                <NavLink to="/contact" className="btn-primary text-sm px-4 py-2 whitespace-nowrap">Contact</NavLink>
              </div>

              <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                <LanguageSwitcher />
                <ThemeToggle />
                <Disclosure.Button 
                  aria-label="Menu" 
                  className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors flex-shrink-0"
                >
                  {open ? <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" /> : <Bars3Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                </Disclosure.Button>
              </div>
            </div>

            <AnimatePresence>
              {open && (
                <Disclosure.Panel
                  as={motion.div}
                  static
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="pb-3 sm:pb-4">
                    <MobileMenu onNavigate={() => setIsMenuOpen(false)} />
                  </div>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </div>
        )}
      </Disclosure>
    </header>
  )
}

export default Navbar


