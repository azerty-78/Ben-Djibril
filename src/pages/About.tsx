import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CircleStackIcon, 
  CloudIcon, 
  PaintBrushIcon, 
  CommandLineIcon,
  UserIcon,
  StarIcon
} from '@heroicons/react/24/solid'

function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-secondary-900 dark:text-white">
              {t('home.about.title')}
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-6">
              {t('home.about.subtitle')}
            </p>
            <p className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 leading-relaxed max-w-3xl mx-auto">
              {t('home.about.bio')}
            </p>
          </motion.div>

          {/* Photo & Personal Info */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-full aspect-square max-w-md mx-auto">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-400 via-primary-500 to-accent-500 p-1.5 shadow-2xl">
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-secondary-800 flex items-center justify-center">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-lg">
                        BD
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Identity Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="card p-4">
                    <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-2 uppercase tracking-wide">
                      {t('home.about.realName')}
                    </h3>
                    <p className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      Kone Djibril Benjamin
                    </p>
                  </div>
                  <div className="card p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
                    <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-2 uppercase tracking-wide">
                      {t('home.about.publicName')}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                      Ben Djibril
                    </p>
                  </div>
                </div>

                {/* Extended Bio */}
                <div className="card p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <UserIcon className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white">Mon parcours</h3>
                      <p className="text-base text-secondary-700 dark:text-secondary-300 leading-relaxed">
                        {t('home.about.bioExtended')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="card text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">4</div>
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                      {t('home.about.experience')}
                    </div>
                  </div>
                  <div className="card text-center p-4 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20">
                    <div className="text-lg md:text-xl font-bold gradient-text mb-1">{t('home.about.level')}</div>
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">Médior</div>
                  </div>
                  <div className="card text-center p-4 bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20">
                    <div className="text-2xl mb-1">🇫🇷</div>
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">Natif</div>
                  </div>
                  <div className="card text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
                    <div className="text-2xl mb-1">🇬🇧</div>
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">Intermédiaire</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="card p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <StarIcon className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                    <h3 className="text-lg font-bold text-secondary-900 dark:text-white">
                      {t('home.about.specialties')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-semibold">
                      Backend (Spring Boot)
                    </span>
                    <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-semibold">
                      Mobile (Kotlin Multiplatform)
                    </span>
                    <span className="px-4 py-2 bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 rounded-lg text-sm font-semibold">
                      DevOps
                    </span>
                    <span className="px-4 py-2 bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 rounded-lg text-sm font-semibold">
                      Full-Stack
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-secondary-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
              {t('home.about.techStack')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
              {t('home.about.techStackDesc')}
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <CodeBracketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Langages de programmation</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Classés par ordre de compétence</p>
                </div>
              </div>
              <TechStack items={programmingLanguages} title="" columns={5} />
            </motion.div>

            {/* Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center">
                  <ServerIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Frameworks</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Backend, Frontend & Mobile</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Backend</h4>
                  <TechStack items={frameworks.backend} title="" columns={3} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Frontend</h4>
                  <TechStack items={frameworks.frontend} title="" columns={3} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Mobile</h4>
                  <TechStack items={frameworks.mobile} title="" columns={3} />
                </div>
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center">
                  <CircleStackIcon className="w-6 h-6 text-success-600 dark:text-success-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Bases de données</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">SQL & NoSQL</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">SQL</h4>
                  <TechStack items={databases.sql} title="" columns={3} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">NoSQL</h4>
                  <TechStack items={databases.nosql} title="" columns={3} />
                </div>
              </div>
            </motion.div>

            {/* DevOps Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center">
                  <CommandLineIcon className="w-6 h-6 text-warning-600 dark:text-warning-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Technologies DevOps</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Conteneurisation & Orchestration</p>
                </div>
              </div>
              <TechStack items={technologies} title="" columns={3} />
            </motion.div>

            {/* Hosting & Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <CloudIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Hébergement & Cloud</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Cloud providers & Hosting platforms</p>
                </div>
              </div>
              <TechStack items={hosting} title="" columns={4} />
            </motion.div>

            {/* Design Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-xl flex items-center justify-center">
                  <PaintBrushIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Design</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">UI/UX Design tools</p>
                </div>
              </div>
              <TechStack items={design} title="" columns={2} />
            </motion.div>

            {/* Versioning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-xl flex items-center justify-center">
                  <CodeBracketIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">Versioning</h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">Code versioning & Collaboration</p>
                </div>
              </div>
              <TechStack items={versioning} title="" columns={2} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-20 bg-secondary-50 dark:bg-secondary-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
              {t('home.about.certifications')}
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              Certifications professionnelles validant mes compétences
            </p>
          </motion.div>
          <CertificationsSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {t('home.about.contactMe')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {t('home.about.contactDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {t('home.about.contactBtn')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
