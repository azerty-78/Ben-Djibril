import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const { t } = useTranslation()
  return (
    <header className="bg-white/80 dark:bg-secondary-800/80 backdrop-blur border-b border-secondary-200 dark:border-secondary-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold gradient-text">BenDev</NavLink>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`}>{t('nav.home')}</NavLink>
          <NavLink to="/services" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`}>{t('nav.services')}</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`}>{t('nav.projects')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`}>{t('nav.about')}</NavLink>
          <NavLink to="/blog" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`}>{t('nav.blog')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-lg ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`}>{t('nav.contact')}</NavLink>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar


