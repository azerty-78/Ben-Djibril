import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { CodeBracketIcon, RocketLaunchIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import TechStack from '../ui/TechStack'
import {
  programmingLanguages,
  frameworks,
  databases,
  technologies,
  hosting,
  design,
  versioning,
} from '../../data/techStack'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-white dark:bg-secondary-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">{t('home.about.title')}</h2>
            <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              {t('home.about.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
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
              <div className="space-y-4">
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

              <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                {t('home.about.bio')}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                  <div className="text-2xl font-bold gradient-text mb-1">4</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">{t('home.about.experience')}</div>
                </div>
                <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4">
                  <div className="text-2xl font-bold gradient-text mb-1">{t('home.about.level')}</div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-400">Médior</div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400">
                  {t('home.about.languages')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-lg text-sm font-medium">
                    🇫🇷 Français (Natif)
                  </span>
                  <span className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium">
                    🇬🇧 Anglais (Intermédiaire)
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technologies complètes */}
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Langages de programmation</h3>
              <TechStack
                title=""
                items={programmingLanguages}
                columns={5}
              />
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Frameworks</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-secondary-700 dark:text-secondary-300">Backend</h4>
                  <TechStack items={frameworks.backend} title="" columns={3} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3 text-secondary-700 dark:text-secondary-300">Frontend</h4>
                  <TechStack items={frameworks.frontend} title="" columns={3} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3 text-secondary-700 dark:text-secondary-300">Mobile</h4>
                  <TechStack items={frameworks.mobile} title="" columns={3} />
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Bases de données</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-secondary-700 dark:text-secondary-300">SQL</h4>
                  <TechStack items={databases.sql} title="" columns={3} />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-3 text-secondary-700 dark:text-secondary-300">NoSQL</h4>
                  <TechStack items={databases.nosql} title="" columns={3} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Technologies DevOps</h3>
              <TechStack
                title=""
                items={technologies}
                columns={3}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Hébergement & Cloud</h3>
              <TechStack
                title=""
                items={hosting}
                columns={5}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Design</h3>
              <TechStack
                title=""
                items={design}
                columns={2}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Versioning</h3>
              <TechStack
                title=""
                items={versioning}
                columns={2}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CodeBracketIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.about.specialties')}</h3>
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
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <RocketLaunchIcon className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.about.experience')}</h3>
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
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('home.about.languages')}</h3>
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
