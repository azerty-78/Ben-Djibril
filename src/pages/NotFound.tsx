import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function NotFound() {
  const { t } = useTranslation()
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">{t('notFound.title')}</h1>
      <p className="text-secondary-700 dark:text-secondary-300">404</p>
      <NavLink to="/" className="btn-primary inline-block">{t('notFound.back')}</NavLink>
    </div>
  )
}

export default NotFound


