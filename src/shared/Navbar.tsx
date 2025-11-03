import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MobileMenu from '../components/ui/MobileMenu'

function Navbar() {
  const { t } = useTranslation()
  const linkBase = 'px-3 py-2 rounded-lg'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-secondary-900/60 backdrop-blur border-b border-secondary-200 dark:border-secondary-700">
      <Disclosure>
        {({ open }) => (
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <NavLink to="/" className="text-xl font-bold gradient-text">BenDev</NavLink>
              </div>

              <div className="hidden md:flex items-center gap-2 text-sm">
                <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>{t('nav.home')}</NavLink>
                <NavLink to="/services" className={({ isActive }) => linkClass(isActive)}>{t('nav.services')}</NavLink>
                <NavLink to="/projects" className={({ isActive }) => linkClass(isActive)}>{t('nav.projects')}</NavLink>
                <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>{t('nav.about')}</NavLink>
                <NavLink to="/blog" className={({ isActive }) => linkClass(isActive)}>{t('nav.blog')}</NavLink>
                <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>{t('nav.contact')}</NavLink>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
                <NavLink to="/contact" className="btn-primary ml-2">Contact</NavLink>
              </div>

              <div className="md:hidden flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
                <Disclosure.Button aria-label="Menu" className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100 hover:bg-secondary-200 dark:hover:bg-secondary-700">
                  {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden pb-4">
              <MobileMenu />
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </header>
  )
}

export default Navbar


