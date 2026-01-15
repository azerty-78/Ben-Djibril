import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/solid'
import { FaWhatsapp, FaLinkedin, FaXTwitter, FaGithub } from 'react-icons/fa6'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  description: string
  action: string
  href: string
  color: string
  delay?: number
}

function ContactCard({ icon, title, description, action, href, color, delay = 0 }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-secondary-200 dark:border-secondary-700 transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
      
      {/* Icon */}
      <div className="relative mb-4">
        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white text-2xl sm:text-3xl">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
          {description}
        </p>
        <span className={`inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-3 transition-all`}>
          {action}
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </span>
      </div>
    </motion.a>
  )
}

function ContactCards() {
  const { t } = useTranslation()

  const contactMethods = [
    {
      icon: <EnvelopeIcon className="w-8 h-8" />,
      title: t('contact.cards.email.title'),
      description: t('contact.cards.email.description'),
      action: t('contact.cards.email.action'),
      href: 'mailto:bendjiril789@gmail.com',
      color: 'from-primary-500 to-primary-600',
      delay: 0
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: t('contact.cards.phone.title'),
      description: t('contact.cards.phone.description'),
      action: t('contact.cards.phone.action'),
      href: 'tel:+237655938501',
      color: 'from-success-500 to-success-600',
      delay: 0.1
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: t('contact.cards.whatsapp.title'),
      description: t('contact.cards.whatsapp.description'),
      action: t('contact.cards.whatsapp.action'),
      href: 'https://wa.me/237655938501',
      color: 'from-green-500 to-green-600',
      delay: 0.2
    },
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      title: t('contact.cards.location.title'),
      description: t('contact.cards.location.description'),
      action: t('contact.cards.location.action'),
      href: 'https://maps.google.com/?q=Yaoundé,Cameroun',
      color: 'from-accent-500 to-accent-600',
      delay: 0.3
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/Ben-Djibril',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      name: 'Twitter',
      href: 'https://x.com/le_bendji',
      color: 'from-sky-500 to-sky-600'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: 'GitHub',
      href: 'https://github.com/azerty-78',
      color: 'from-gray-700 to-gray-800'
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
            {t('contact.cards.title')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('contact.cards.subtitle')}
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white mb-6">
            {t('contact.cards.social.title')}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-secondary-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-secondary-200 dark:border-secondary-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                <ClockIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  {t('contact.cards.availability.title')}
                </h4>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {t('contact.cards.availability.description')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCards
