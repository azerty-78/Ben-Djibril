import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon, ArrowDownTrayIcon, ArrowRightIcon, GlobeAltIcon } from '@heroicons/react/24/solid'
import profileImage from '../../assets/ben-djibirl/ben-djibril-official-no-glass.jpeg'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section data-section="about" className="py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute top-20 -right-20 w-64 h-64 bg-primary-200 dark:bg-primary-600 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-20 -left-20 w-72 h-72 bg-accent-200 dark:bg-accent-600 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700 mb-4 sm:mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-300">
                À propos de moi
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary-900 dark:text-white">{t('home.about.title')}</h2>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto leading-relaxed">
              {t('home.about.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 via-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl"
              />
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 p-1.5 shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-secondary-800 overflow-hidden">
                    <motion.img
                      src={profileImage}
                      alt="Ben Djibril"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4 mb-6">
                <div className="card p-4 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/30 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700">
                  <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-1.5 uppercase tracking-wide">
                    {t('home.about.realName')}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                    Kone Djibril Benjamin
                  </p>
                </div>
                <div className="card p-4 bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-900/30 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700">
                  <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-1.5 uppercase tracking-wide">
                    {t('home.about.publicName')}
                  </h3>
                  <p className="text-base md:text-lg font-semibold text-primary-600 dark:text-primary-400">
                    Ben Djibril
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed mb-6">
                {t('home.about.bio')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="card p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">4</div>
                  <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 font-medium">{t('home.about.experience')}</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="card p-4 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700"
                >
                  <div className="text-xl md:text-2xl font-bold gradient-text mb-1">{t('home.about.level')}</div>
                  <div className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 font-medium">Médior</div>
                </motion.div>
              </div>

              <div className="card p-4 bg-gradient-to-br from-success-50 to-success-100/50 dark:from-success-900/20 dark:to-success-800/20 border border-success-200 dark:border-success-700">
                <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-3 uppercase tracking-wide">
                  {t('home.about.languages')}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-success-100 dark:bg-success-900/40 text-success-700 dark:text-success-300 rounded-xl text-sm font-semibold shadow-sm"
                  >
                    <span className="text-lg">🇫🇷</span>
                    <span>Français (Natif)</span>
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 rounded-xl text-sm font-semibold shadow-sm"
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span>Anglais (Intermédiaire)</span>
                  </motion.span>
                </div>
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  <span>{t('home.about.downloadCV') || 'Télécharger mon CV'}</span>
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold transition-all duration-300"
                >
                  <span>{t('home.about.viewFullProfile') || 'Voir mon profil complet'}</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Informations pour convaincre les clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-6 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-900/20 dark:to-emerald-800/20 border-2 border-emerald-200 dark:border-emerald-700"
            >
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                {t('home.about.clientSatisfaction') || 'Satisfaction client'}
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-300">
                {t('home.about.clientSatisfactionDesc') || 'Tous mes clients sont satisfaits de mes services et recommandent mon travail'}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/20 border-2 border-primary-200 dark:border-primary-700"
            >
              <div className="text-4xl font-bold gradient-text mb-2">&lt; 24h</div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                {t('home.about.responseTime') || 'Temps de réponse'}
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-300">
                {t('home.about.responseTimeDesc') || 'Je réponds à toutes les demandes sous 24h, souvent beaucoup plus rapidement'}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="card p-4 sm:p-5 md:p-6 bg-gradient-to-br from-accent-50 to-accent-100/50 dark:from-accent-900/20 dark:to-accent-800/20 border-2 border-accent-200 dark:border-accent-700"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl sm:rounded-2xl shadow-lg">
                <GlobeAltIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-secondary-900 dark:text-white mb-1.5 sm:mb-2">
                {t('home.about.worldwide') || 'Disponible mondialement'}
              </h3>
              <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed">
                {t('home.about.worldwideDesc') || 'Je travaille avec des clients du monde entier, en français et en anglais'}
              </p>
            </motion.div>
          </motion.div>

          {/* Technologies résumées - Rediriger vers /about pour les détails */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="card p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary-50 to-accent-50/30 dark:from-primary-900/20 dark:to-accent-900/20 border-2 border-primary-200 dark:border-primary-700">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-secondary-900 dark:text-white mb-1.5 sm:mb-2">
                    {t('home.about.techStack')}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-300">
                    {t('home.about.techStackDesc')}
                  </p>
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all whitespace-nowrap w-full sm:w-auto flex-shrink-0"
                >
                  <span>{t('home.about.viewFullStack') || 'Voir le stack complet'}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                </Link>
              </div>
              
              {/* Aperçu rapide des principales technologies */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4">
                <div className="text-center p-2.5 sm:p-3 bg-white/60 dark:bg-secondary-800/60 rounded-lg border border-primary-100 dark:border-primary-800/50">
                  <p className="text-[10px] sm:text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-0.5 sm:mb-1">Backend</p>
                  <p className="text-xs sm:text-sm font-bold text-secondary-900 dark:text-white">Spring Boot</p>
                </div>
                <div className="text-center p-2.5 sm:p-3 bg-white/60 dark:bg-secondary-800/60 rounded-lg border border-primary-100 dark:border-primary-800/50">
                  <p className="text-[10px] sm:text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-0.5 sm:mb-1">Mobile</p>
                  <p className="text-xs sm:text-sm font-bold text-secondary-900 dark:text-white">Kotlin</p>
                </div>
                <div className="text-center p-2.5 sm:p-3 bg-white/60 dark:bg-secondary-800/60 rounded-lg border border-primary-100 dark:border-primary-800/50">
                  <p className="text-[10px] sm:text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-0.5 sm:mb-1">Frontend</p>
                  <p className="text-xs sm:text-sm font-bold text-secondary-900 dark:text-white">React</p>
                </div>
                <div className="text-center p-2.5 sm:p-3 bg-white/60 dark:bg-secondary-800/60 rounded-lg border border-primary-100 dark:border-primary-800/50">
                  <p className="text-[10px] sm:text-xs font-semibold text-secondary-600 dark:text-secondary-400 mb-0.5 sm:mb-1">DevOps</p>
                  <p className="text-xs sm:text-sm font-bold text-secondary-900 dark:text-white">Docker</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <CodeBracketIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">{t('home.about.specialties')}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Backend (Spring Boot), Mobile (Kotlin), DevOps & Full-Stack
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <RocketLaunchIcon className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">{t('home.about.experience')}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                4 ans d'expérience en développement backend et mobile
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                >
                  <AcademicCapIcon className="w-8 h-8 text-success-600 dark:text-success-400" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white">{t('home.about.languages')}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Français (Natif), Anglais (Intermédiaire)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
