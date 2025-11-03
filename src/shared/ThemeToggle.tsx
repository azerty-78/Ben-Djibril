import { useTheme } from '../theme/ThemeProvider'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      className="px-2.5 py-2 rounded-lg text-sm bg-secondary-100 dark:bg-secondary-700 hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
      aria-label={theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'}
      title={theme === 'dark' ? 'Thème clair' : 'Thème sombre'}
    >
      {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  )
}

export default ThemeToggle


