import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  CheckCircleIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

interface ContactNextStepsProps {
  preferredContact?: string
}

function ContactNextSteps({ preferredContact = 'email' }: ContactNextStepsProps) {
  const { t } = useTranslation()

  const steps = [
    {
      icon: <CheckCircleIcon className="w-6 h-6" />,
      title: t('contact.nextSteps.steps.confirmation.title'),
      description: t('contact.nextSteps.steps.confirmation.description'),
      color: 'from-success-500 to-success-600'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: t('contact.nextSteps.steps.response.title'),
      description: t('contact.nextSteps.steps.response.description'),
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: t('contact.nextSteps.steps.discussion.title'),
      description: t('contact.nextSteps.steps.discussion.description'),
      color: 'from-accent-500 to-accent-600'
    },
  ]

  const contactMethods = {
    email: {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      text: t('contact.nextSteps.contactMethods.email'),
      href: 'mailto:contact@bendjibril.dev'
    },
    phone: {
      icon: <PhoneIcon className="w-5 h-5" />,
      text: t('contact.nextSteps.contactMethods.phone'),
      href: 'tel:+237655938501'
    },
    whatsapp: {
      icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
      text: t('contact.nextSteps.contactMethods.whatsapp'),
      href: 'https://wa.me/237655938501'
    },
    any: {
      icon: <EnvelopeIcon className="w-5 h-5" />,
      text: t('contact.nextSteps.contactMethods.any'),
      href: 'mailto:contact@bendjibril.dev'
    }
  }

  const selectedMethod = contactMethods[preferredContact as keyof typeof contactMethods] || contactMethods.email

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-8"
    >
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-800 shadow-xl">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-success-500 rounded-full mb-4"
          >
            <CheckCircleIcon className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-secondary-900 dark:text-white mb-2">
            {t('contact.nextSteps.title')}
          </h3>
          <p className="text-secondary-600 dark:text-secondary-300">
            {t('contact.nextSteps.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-4 bg-white dark:bg-secondary-800 rounded-xl p-4 shadow-md"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-secondary-900 dark:text-white mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-secondary-600 dark:text-secondary-300">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={selectedMethod.href}
            target={selectedMethod.href.startsWith('http') ? '_blank' : undefined}
            rel={selectedMethod.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex-1 btn-primary flex items-center justify-center gap-2 py-3"
          >
            {selectedMethod.icon}
            {selectedMethod.text}
          </a>
          <Link
            to="/projects"
            className="flex-1 btn-secondary flex items-center justify-center gap-2 py-3"
          >
            {t('contact.nextSteps.viewProjects')}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactNextSteps
