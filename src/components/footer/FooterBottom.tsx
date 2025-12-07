import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function FooterBottom() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-8 border-t border-secondary-200 dark:border-secondary-700"
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm">
        <p className="text-secondary-600 dark:text-secondary-300 text-center md:text-left">
          © {currentYear} <span className="font-semibold text-primary-600 dark:text-primary-400">Ben Djibril</span>. {t('footer.rights')}
        </p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary-500 dark:text-secondary-400 text-center md:text-right font-medium italic"
        >
          build your own legacy
        </motion.p>
      </div>
    </motion.div>
  )
}

export default FooterBottom

