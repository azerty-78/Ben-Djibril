import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa6'

interface SocialLink {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  bgColor: string
  hoverBgColor: string
  textColor: string
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://wa.me/237655938501',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    bgColor: 'bg-success-500',
    hoverBgColor: 'hover:bg-success-600',
    textColor: 'text-white'
  },
  {
    href: 'https://www.facebook.com/share/1apyznqNgf/',
    icon: FaFacebook,
    label: 'Facebook',
    bgColor: 'bg-secondary-100 dark:bg-secondary-800',
    hoverBgColor: 'hover:bg-primary-600 dark:hover:bg-primary-600',
    textColor: 'text-secondary-700 dark:text-secondary-300 hover:text-white'
  },
  {
    href: 'https://www.instagram.com/le_bendji?igsh=MTRmcjlyZTJmdDRncQ==',
    icon: FaInstagram,
    label: 'Instagram',
    bgColor: 'bg-secondary-100 dark:bg-secondary-800',
    hoverBgColor: 'hover:bg-primary-600 dark:hover:bg-primary-600',
    textColor: 'text-secondary-700 dark:text-secondary-300 hover:text-white'
  },
  {
    href: 'https://x.com/le_bendji',
    icon: FaXTwitter,
    label: 'X (Twitter)',
    bgColor: 'bg-secondary-100 dark:bg-secondary-800',
    hoverBgColor: 'hover:bg-primary-600 dark:hover:bg-primary-600',
    textColor: 'text-secondary-700 dark:text-secondary-300 hover:text-white'
  },
  {
    href: 'https://www.linkedin.com/in/Ben-Djibril',
    icon: FaLinkedin,
    label: 'LinkedIn',
    bgColor: 'bg-secondary-100 dark:bg-secondary-800',
    hoverBgColor: 'hover:bg-primary-600 dark:hover:bg-primary-600',
    textColor: 'text-secondary-700 dark:text-secondary-300 hover:text-white'
  },
  {
    href: 'https://github.com/azerty-78',
    icon: FaGithub,
    label: 'GitHub',
    bgColor: 'bg-secondary-100 dark:bg-secondary-800',
    hoverBgColor: 'hover:bg-primary-600 dark:hover:bg-primary-600',
    textColor: 'text-secondary-700 dark:text-secondary-300 hover:text-white'
  },
]

function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-3 pt-2">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`h-10 w-10 rounded-full ${social.bgColor} ${social.hoverBgColor} ${social.textColor} flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg`}
            title={social.label}
          >
            <IconComponent className="w-5 h-5" />
          </motion.a>
        )
      })}
    </div>
  )
}

export default FooterSocialLinks

