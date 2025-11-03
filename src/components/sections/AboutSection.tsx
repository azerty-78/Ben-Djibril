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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('home.about.title')}</h2>
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
              <p className="text-lg text-secondary-700 dark:text-secondary-300 leading-relaxed">
                {t('home.about.bio')}
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                  {t('home.about.skills')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.slice(0, 6).map((lang, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                    >
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technologies complètes */}
          <div className="space-y-8 mb-12">
            <TechStack
              title="Langages de programmation"
              items={programmingLanguages}
              columns={5}
            />

            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-secondary-100">Frameworks</h3>
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
              <h3 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-secondary-100">Bases de données</h3>
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

            <TechStack
              title="Technologies DevOps"
              items={technologies}
              columns={3}
            />

            <TechStack
              title="Hébergement & Cloud"
              items={hosting}
              columns={5}
            />

            <TechStack
              title="Design"
              items={design}
              columns={2}
            />

            <TechStack
              title="Versioning"
              items={versioning}
              columns={2}
            />
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
              <h3 className="text-xl font-semibold mb-2">{t('home.about.skills')}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Expertise en développement web moderne et technologies cloud
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
                5+ ans d'expérience dans le développement d'applications web et mobiles
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
              <h3 className="text-xl font-semibold mb-2">{t('home.about.education')}</h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Formation continue en développement logiciel et architecture cloud
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
