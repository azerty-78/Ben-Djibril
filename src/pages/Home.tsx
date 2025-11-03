import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-5xl font-bold gradient-text mb-4">{t('home.title')}</h1>
        <p className="text-lg text-secondary-700 dark:text-secondary-300 max-w-2xl mx-auto">{t('home.subtitle')}</p>
      </section>
      <section className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">{t('home.card1.title')}</h3>
          <p className="text-secondary-600 dark:text-secondary-300">{t('home.card1.desc')}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">{t('home.card2.title')}</h3>
          <p className="text-secondary-600 dark:text-secondary-300">{t('home.card2.desc')}</p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold mb-2">{t('home.card3.title')}</h3>
          <p className="text-secondary-600 dark:text-secondary-300">{t('home.card3.desc')}</p>
        </div>
      </section>
    </div>
  )
}

export default Home


