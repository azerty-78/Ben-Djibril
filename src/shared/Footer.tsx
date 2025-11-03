import { useTranslation } from 'react-i18next'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-10 border-t border-secondary-200 dark:border-secondary-700 bg-white/60 dark:bg-secondary-900/40 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-xl font-semibold">BenDev</p>
            <p className="text-secondary-600 dark:text-secondary-300">Design & développement de produits digitaux.</p>
            <div className="flex items-center gap-3 text-secondary-600 dark:text-secondary-300">
              <PhoneIcon className="w-4 h-4" /> <span>+33 6 00 00 00 00</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-600 dark:text-secondary-300">
              <EnvelopeIcon className="w-4 h-4" /> <span>contact@bendev.dev</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-600 dark:text-secondary-300">
              <MapPinIcon className="w-4 h-4" /> <span>Remote · Worldwide</span>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-3">Services</p>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
              <li><a href="#" className="hover:underline">Sites professionnels</a></li>
              <li><a href="#" className="hover:underline">Apps web</a></li>
              <li><a href="#" className="hover:underline">E‑commerce</a></li>
              <li><a href="#" className="hover:underline">Conseil & audit</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Entreprise</p>
            <ul className="space-y-2 text-secondary-600 dark:text-secondary-300">
              <li><a href="#" className="hover:underline">{t('footer.legal')}</a></li>
              <li><a href="#" className="hover:underline">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Newsletter</p>
            <p className="text-secondary-600 dark:text-secondary-300 mb-3">Actualités, études de cas et conseils.</p>
            <div className="flex gap-2">
              <input className="flex-1 border border-secondary-300 dark:border-secondary-600 rounded-lg px-3 py-2 bg-white dark:bg-secondary-800" placeholder="Votre email" />
              <button className="btn-primary">OK</button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-600 dark:text-secondary-300">
          <p>© {new Date().getFullYear()} BenDev. {t('footer.rights')}</p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full bg-secondary-200 dark:bg-secondary-700 flex items-center justify-center hover:opacity-80"><FaXTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-secondary-200 dark:bg-secondary-700 flex items-center justify-center hover:opacity-80"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="h-9 w-9 rounded-full bg-secondary-200 dark:bg-secondary-700 flex items-center justify-center hover:opacity-80"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


