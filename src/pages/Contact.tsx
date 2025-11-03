import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t('contact.title')}</h1>
      <p className="text-secondary-700 dark:text-secondary-300">{t('contact.subtitle')}</p>
      <form className="card grid gap-4 max-w-xl">
        <input className="border border-secondary-300 dark:border-secondary-600 rounded-lg px-3 py-2 bg-white dark:bg-secondary-800" placeholder={t('contact.name') as string} />
        <input className="border border-secondary-300 dark:border-secondary-600 rounded-lg px-3 py-2 bg-white dark:bg-secondary-800" placeholder={t('contact.email') as string} type="email" />
        <textarea className="border border-secondary-300 dark:border-secondary-600 rounded-lg px-3 py-2 bg-white dark:bg-secondary-800" placeholder={t('contact.message') as string} rows={5} />
        <button className="btn-primary w-fit">{t('contact.send')}</button>
      </form>
    </div>
  )
}

export default Contact


