import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-10 border-t border-secondary-200 dark:border-secondary-700 bg-white/60 dark:bg-secondary-900/40 backdrop-blur">
      <div className="container mx-auto px-4 py-10 text-sm text-secondary-600 dark:text-secondary-300 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <p className="font-semibold">BenDev</p>
          <p className="text-secondary-500">© {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">{t('footer.legal')}</a>
          <a href="#" className="hover:underline">{t('footer.privacy')}</a>
        </div>
        <div className="flex md:justify-end justify-center gap-3">
          <a href="#" aria-label="Twitter" className="hover:opacity-80">𝕏</a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80">in</a>
          <a href="#" aria-label="GitHub" className="hover:opacity-80">GH</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer


