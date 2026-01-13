import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SEO from '../components/seo/SEO'
import TechStack from '../components/ui/TechStack'
import TechStackFilterable from '../components/about/TechStackFilterable'
import CertificationsSection from '../components/sections/CertificationsSection'
import AboutTimeline from '../components/about/AboutTimeline'
import AboutGallery from '../components/about/AboutGallery'
import AboutCTAs from '../components/about/AboutCTAs'
import profileImage from '../assets/ben-djibirl/ben-djibril-official-with-glass-nbg.png'
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
  StarIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
  BriefcaseIcon
} from '@heroicons/react/24/solid'

function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <SEO />
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-secondary-900 dark:via-secondary-900 dark:to-secondary-800 relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-700 mb-4 sm:mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-primary-700 dark:text-primary-300">
                À propos de moi
              </span>
            </motion.div>

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
                  <img
                    src={profileImage}
                    alt="Ben Djibril"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Identity Cards - Enhanced */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card p-4 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border border-secondary-200 dark:border-secondary-700"
                  >
                    <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-2 uppercase tracking-wide">
                      {t('home.about.realName')}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      Kone Djibril Benjamin
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 border border-primary-200 dark:border-primary-700"
                  >
                    <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 mb-2 uppercase tracking-wide">
                      {t('home.about.publicName')}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400">
                      Ben Djibril
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card p-4 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border border-secondary-200 dark:border-secondary-700"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <BriefcaseIcon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                        {t('home.about.identity.role')}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      {t('home.about.identity.roleValue')}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card p-4 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border border-secondary-200 dark:border-secondary-700"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPinIcon className="w-4 h-4 text-accent-600 dark:text-accent-400" />
                      <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                        {t('home.about.identity.location')}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      {t('home.about.identity.locationValue')}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card p-4 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border border-secondary-200 dark:border-secondary-700"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <ClockIcon className="w-4 h-4 text-warning-600 dark:text-warning-400" />
                      <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                        {t('home.about.identity.timezone')}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      {t('home.about.identity.timezoneValue')}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="card p-4 bg-gradient-to-br from-white to-secondary-50 dark:from-secondary-800 dark:to-secondary-800/50 border border-secondary-200 dark:border-secondary-700"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <GlobeAltIcon className="w-4 h-4 text-success-600 dark:text-success-400" />
                      <h3 className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wide">
                        {t('home.about.identity.availability')}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      {t('home.about.identity.availabilityValue')}
                    </p>
                  </motion.div>
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

                {/* Stats Grid - Enhanced with icons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700"
                  >
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">4</div>
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                      {t('home.about.experience')}
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card text-center p-4 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 border border-accent-200 dark:border-accent-700"
                  >
                    <div className="text-lg md:text-xl font-bold gradient-text mb-1">{t('home.about.level')}</div>
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">Médior</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card text-center p-4 bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 border border-success-200 dark:border-success-700"
                  >
                    <GlobeAltIcon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 text-success-600 dark:text-success-400" />
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                      {t('home.about.identity.languageNative')}
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700"
                  >
                    <GlobeAltIcon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 text-primary-600 dark:text-primary-400" />
                    <div className="text-xs md:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                      {t('home.about.identity.languageIntermediate')}
                    </div>
                  </motion.div>
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
            <TechStackFilterable
              title="Langages de programmation"
              description="Classés par ordre de compétence"
              items={programmingLanguages}
              columns={5}
              icon={<CodeBracketIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
              iconBg="bg-primary-100 dark:bg-primary-900/30"
            />

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
                  <TechStack items={frameworks.backend.map(item => ({ name: item.name, slug: item.slug, level: item.level }))} title="" columns={3} showLevelBadge={true} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Frontend</h4>
                  <TechStack items={frameworks.frontend.map(item => ({ name: item.name, slug: item.slug, level: item.level }))} title="" columns={3} showLevelBadge={true} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">Mobile</h4>
                  <TechStack items={frameworks.mobile.map(item => ({ name: item.name, slug: item.slug, level: item.level }))} title="" columns={3} showLevelBadge={true} />
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
                  <TechStack items={databases.sql.map(item => ({ name: item.name, slug: item.slug, level: item.level }))} title="" columns={3} showLevelBadge={true} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">NoSQL</h4>
                  <TechStack items={databases.nosql.map(item => ({ name: item.name, slug: item.slug, level: item.level }))} title="" columns={3} showLevelBadge={true} />
                </div>
              </div>
            </motion.div>

            {/* DevOps Technologies */}
            <TechStackFilterable
              title="Technologies DevOps"
              description="Conteneurisation & Orchestration"
              items={technologies}
              columns={3}
              icon={<CommandLineIcon className="w-6 h-6 text-warning-600 dark:text-warning-400" />}
              iconBg="bg-warning-100 dark:bg-warning-900/30"
            />

            {/* Hosting & Cloud */}
            <TechStackFilterable
              title="Hébergement & Cloud"
              description="Cloud providers & Hosting platforms"
              items={hosting}
              columns={4}
              icon={<CloudIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
              iconBg="bg-primary-100 dark:bg-primary-900/30"
            />

            {/* Design Tools */}
            <TechStackFilterable
              title="Design"
              description="UI/UX Design tools"
              items={design}
              columns={2}
              icon={<PaintBrushIcon className="w-6 h-6 text-accent-600 dark:text-accent-400" />}
              iconBg="bg-accent-100 dark:bg-accent-900/30"
            />

            {/* Versioning */}
            <TechStackFilterable
              title="Versioning"
              description="Code versioning & Collaboration"
              items={versioning}
              columns={2}
              icon={<CodeBracketIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />}
              iconBg="bg-secondary-100 dark:bg-secondary-800"
            />
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

      {/* Timeline Section */}
      <AboutTimeline />

      {/* Gallery Section */}
      <AboutGallery />

      {/* CTAs Section */}
      <AboutCTAs />
    </div>
  )
}

export default About
