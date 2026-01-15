import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FaWhatsapp } from 'react-icons/fa6'
import FooterSocialLinks from './FooterSocialLinks'

function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold gradient-text mb-3"
        >
          Ben Djibril
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed"
        >
          Ingénieur DevOps spécialisé en backend et mobile, créant des solutions digitales performantes pour entreprises internationales.
        </motion.p>
      </div>
      
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-between gap-2"
        >
          <a 
            href="tel:+237655938501" 
            className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex-1 group"
          >
            <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">+237 655 938 501</span>
          </a>
          <a
            href="https://wa.me/237655938501"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactez-moi sur WhatsApp"
            className="h-8 w-8 rounded-full bg-success-500 hover:bg-success-600 text-white flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg flex-shrink-0 hover:scale-110"
            title="Contacter sur WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
        </motion.div>
        
        <motion.a
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          href="mailto:bendjiril789@gmail.com" 
          className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        >
          <EnvelopeIcon className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
          <span className="text-sm">bendjiril789@gmail.com</span>
        </motion.a>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-start gap-3 text-secondary-600 dark:text-secondary-300"
        >
          <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="text-sm">Yaoundé, Cameroun</span>
        </motion.div>
      </div>

      <FooterSocialLinks />
    </motion.div>
  )
}

export default FooterBrand

