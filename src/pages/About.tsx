import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import TechStack from '../components/ui/TechStack'
import CertificationsSection from '../components/sections/CertificationsSection'
import {
  programmingLanguages,
  frameworks,
  databases,
  technologies,
  hosting,
  design,
  versioning,
} from '../data/techStack'
import { CodeBracketIcon, ServerIcon, CircleStackIcon, CloudIcon, PaintBrushIcon, CommandLineIcon } from '@heroicons/react/24/solid'

function About() {
  const { t } = useTranslation()

  return (
    <div className="space-y-16 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-secondary-900 dark:text-white">
          {t('home.about.title')}
        </h1>
        <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-4">
          {t('home.about.subtitle')}
        </p>
        <p className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
          {t('home.about.bio')}
        </p>
      </motion.div>

      {/* Photo & Bio */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-secondary-800 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-6xl font-bold">
                      BD
                    </div>
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
              <div>
                <h2 className="text-3xl font-bold mb-4 text-secondary-900 dark:text-secondary-100">
                  {t('home.about.title')}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-1">
                      {t('home.about.realName')}
                    </h3>
                    <p className="text-base font-medium text-secondary-900 dark:text-secondary-100">
                      Kone Djibril Benjamin
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 mb-1">
                      {t('home.about.publicName')}
                    </h3>
                    <p className="text-base font-medium text-primary-600 dark:text-primary-400">
                      Ben Djibril
                    </p>
                  </div>
                </div>

                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed mb-4">
                  {t('home.about.bio')}
                </p>
                <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                  {t('home.about.bioExtended')}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">4</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">{t('home.about.experience')}</div>
                </div>
                <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold gradient-text mb-1">{t('home.about.level')}</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Médior</div>
                </div>
                <div className="bg-success-50 dark:bg-success-900/20 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold gradient-text mb-1">🇫🇷</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Français (Natif)</div>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold gradient-text mb-1">🇬🇧</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Anglais (Intermédiaire)</div>
                </div>
              </div>

              <div className="pt-4 border-t border-secondary-200 dark:border-secondary-700">
                <h3 className="text-lg font-semibold mb-3 text-secondary-900 dark:text-secondary-100">
                  {t('home.about.specialties')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
                    Backend (Spring Boot)
                  </span>
                  <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-medium">
                    Mobile (Kotlin Multiplatform)
                  </span>
                  <span className="px-4 py-2 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-lg text-sm font-medium">
                    DevOps
                  </span>
                  <span className="px-4 py-2 bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 rounded-lg text-sm font-medium">
                    Full-Stack
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies détaillées */}
      <section className="container mx-auto px-4 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Stack Technologique</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300">
            Technologies et outils que je maîtrise et utilise au quotidien
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Langages de programmation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <CodeBracketIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold">Langages de programmation</h3>
            </div>
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Classés par ordre de compétence, du plus maîtrisé au moins maîtrisé
            </p>
            <TechStack items={programmingLanguages} title="" columns={5} />
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <ServerIcon className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              <h3 className="text-2xl font-bold">Frameworks</h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-secondary-100">Backend</h4>
                <TechStack items={frameworks.backend} title="" columns={3} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-secondary-100">Frontend</h4>
                <TechStack items={frameworks.frontend} title="" columns={3} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-secondary-100">Mobile</h4>
                <TechStack items={frameworks.mobile} title="" columns={3} />
              </div>
            </div>
          </motion.div>

          {/* Bases de données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <CircleStackIcon className="w-8 h-8 text-success-600 dark:text-success-400" />
              <h3 className="text-2xl font-bold">Bases de données</h3>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-secondary-100">SQL</h4>
                <TechStack items={databases.sql} title="" columns={3} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-secondary-100">NoSQL</h4>
                <TechStack items={databases.nosql} title="" columns={3} />
              </div>
            </div>
          </motion.div>

          {/* Technologies DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <CommandLineIcon className="w-8 h-8 text-warning-600 dark:text-warning-400" />
              <h3 className="text-2xl font-bold">Technologies DevOps</h3>
            </div>
            <TechStack items={technologies} title="" columns={3} />
          </motion.div>

          {/* Hébergement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <CloudIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h3 className="text-2xl font-bold">Hébergement & Cloud</h3>
            </div>
            <TechStack items={hosting} title="" columns={4} />
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <PaintBrushIcon className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              <h3 className="text-2xl font-bold">Design</h3>
            </div>
            <TechStack items={design} title="" columns={2} />
          </motion.div>

          {/* Versioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <CodeBracketIcon className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
              <h3 className="text-2xl font-bold">Versioning</h3>
            </div>
            <TechStack items={versioning} title="" columns={2} />
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <CertificationsSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Intéressé par mon profil ?</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            Discutons de votre projet et voyons comment je peux vous aider
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3 inline-block">
            Me contacter
          </a>
        </motion.div>
      </section>
    </div>
  )
}

export default About
