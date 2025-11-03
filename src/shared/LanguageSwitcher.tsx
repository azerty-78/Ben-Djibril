import i18n from '../i18n'

function LanguageSwitcher() {
  const current = i18n.language
  const setLang = (lng: 'fr' | 'en') => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lang', lng)
    document.documentElement.lang = lng
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang('fr')}
        className={`px-3 py-2 rounded-lg text-sm ${current.startsWith('fr') ? 'bg-primary-600 text-white' : 'bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600'}`}
      >FR</button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-2 rounded-lg text-sm ${current.startsWith('en') ? 'bg-primary-600 text-white' : 'bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600'}`}
      >EN</button>
    </div>
  )
}

export default LanguageSwitcher


