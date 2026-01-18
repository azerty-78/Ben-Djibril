import { memo } from 'react'
import { motion } from 'framer-motion'
import FooterBrand from '../components/footer/FooterBrand'
import FooterServices from '../components/footer/FooterServices'
import FooterPages from '../components/footer/FooterPages'
import FooterNewsletter from '../components/footer/FooterNewsletter'
import FooterBottom from '../components/footer/FooterBottom'

const Footer = memo(function Footer() {
  return (
    <footer className="mt-auto border-t border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          <FooterBrand />
          <FooterServices />
          <FooterPages />
          <FooterNewsletter />
        </motion.div>

        <FooterBottom />
      </div>
    </footer>
  )
}

})

export default Footer
