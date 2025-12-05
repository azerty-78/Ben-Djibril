import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { i18n: i18nInstance } = useTranslation()
  const current = i18n.language || i18nInstance.language

  const setLang = (lng: 'fr' | 'en') => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lang', lng)
    document.documentElement.lang = lng
  }

  const toggleLanguage = () => {
    const newLang = current.startsWith('fr') ? 'en' : 'fr'
    setLang(newLang)
  }

  return (
    <>
      {/* Version mobile : icône seule qui bascule */}
      <button
        onClick={toggleLanguage}
        className="md:hidden px-3 py-2 rounded-lg text-sm bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors font-semibold"
        aria-label={current.startsWith('fr') ? 'Switch to English' : 'Changer en français'}
        title={current.startsWith('fr') ? 'EN' : 'FR'}
      >
        {current.startsWith('fr') ? 'FR' : 'EN'}
      </button>

      {/* Version desktop : deux boutons */}
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={() => setLang('fr')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${current.startsWith('fr') ? 'bg-primary-600 text-white' : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-600'}`}
        >
          FR
        </button>
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${current.startsWith('en') ? 'bg-primary-600 text-white' : 'bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-white hover:bg-secondary-200 dark:hover:bg-secondary-600'}`}
        >
          EN
        </button>
      </div>
    </>
  )
}

export default LanguageSwitcher
