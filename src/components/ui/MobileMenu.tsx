import { NavLink } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function MobileMenu() {
  const { t } = useTranslation()
  const linkBase = 'px-3 py-2 rounded-lg'
  const linkClass = (isActive: boolean) =>
    `${linkBase} ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700'}`

  const serviceLinks = [
    { to: '/services?type=web', label: t('nav.serviceWeb') },
    { to: '/services?type=ecom', label: t('nav.serviceEcom') },
    { to: '/services?type=app', label: t('nav.serviceApp') },
    { to: '/services?type=consult', label: t('nav.serviceConsult') },
  ]

  return (
    <nav className="grid gap-2 text-sm">
      <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>{t('nav.home')}</NavLink>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${linkBase} flex items-center justify-between text-secondary-700 dark:text-secondary-200 hover:bg-secondary-100 dark:hover:bg-secondary-700`}>
              <span>{t('nav.services')}</span>
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
            </Disclosure.Button>
            <AnimatePresence>
              {open && (
                <Disclosure.Panel
                  as={motion.div}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-1 mt-2">
                    {serviceLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) => `${linkBase} text-sm ${isActive ? 'bg-primary-600 text-white' : 'text-secondary-600 dark:text-secondary-300'}`}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </Disclosure.Panel>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>

      <NavLink to="/projects" className={({ isActive }) => linkClass(isActive)}>{t('nav.projects')}</NavLink>
      <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>{t('nav.about')}</NavLink>
      <NavLink to="/blog" className={({ isActive }) => linkClass(isActive)}>{t('nav.blog')}</NavLink>
      <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>{t('nav.contact')}</NavLink>
      <NavLink to="/contact" className="btn-primary w-full text-center mt-2">{t('nav.contact')}</NavLink>
    </nav>
  )
}

export default MobileMenu

