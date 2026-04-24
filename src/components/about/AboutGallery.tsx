import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ComputerDesktopIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/solid'
import setupWorkImage from '../../assets/ben-djibirl/ben-djibril-setup-work.JPG'
import graduationImage from '../../assets/ben-djibirl/ben-djibirl-graduation.JPG'
import workImage from '../../assets/ben-djibirl/ben-djibril-work.JPG'
import officialImage from '../../assets/ben-djibirl/ben-djibril-official-with-glass-nbg.png'

function AboutGallery() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const galleryItems = [
    {
      key: 'setup',
      icon: ComputerDesktopIcon,
      color: 'primary',
      image: setupWorkImage
    },
    {
      key: 'whiteboard',
      icon: PresentationChartBarIcon,
      color: 'accent',
      image: graduationImage
    },
    {
      key: 'conference',
      icon: UserGroupIcon,
      color: 'success',
      image: workImage
    },
    {
      key: 'environment',
      icon: BuildingOfficeIcon,
      color: 'warning',
      image: officialImage
    }
  ]

  // Pattern SVG pour placeholder
  const PatternSVG = ({ color }: { color: string }) => (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id={`pattern-${color}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill={color} opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#pattern-${color})`} />
    </svg>
  )

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
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
            {t('home.about.gallery.title')}
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            {t('home.about.gallery.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryItems.map((item, index) => {
              const Icon = item.icon
              const colorMap = {
                primary: '#6366f1',
                accent: '#ec4899',
                success: '#10b981',
                warning: '#f59e0b'
              }
              const color = colorMap[item.color as keyof typeof colorMap]

              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="card overflow-hidden border-2 border-secondary-200 dark:border-secondary-700"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 dark:from-secondary-800 dark:to-secondary-900">
                    {item.image ? (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedImage({
                            src: item.image,
                            alt: t(`home.about.gallery.${item.key}`)
                          })
                        }
                        className="w-full h-full group/image"
                        aria-label={`Agrandir: ${t(`home.about.gallery.${item.key}`)}`}
                      >
                        <img
                          src={item.image}
                          alt={t(`home.about.gallery.${item.key}`)}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                          loading="lazy"
                        />
                      </button>
                    ) : (
                      <>
                        <PatternSVG color={color} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                              item.color === 'primary' ? 'bg-primary-100 dark:bg-primary-900/30' :
                              item.color === 'accent' ? 'bg-accent-100 dark:bg-accent-900/30' :
                              item.color === 'success' ? 'bg-success-100 dark:bg-success-900/30' :
                              'bg-warning-100 dark:bg-warning-900/30'
                            }`}>
                              <Icon className={`w-8 h-8 ${
                                item.color === 'primary' ? 'text-primary-600 dark:text-primary-400' :
                                item.color === 'accent' ? 'text-accent-600 dark:text-accent-400' :
                                item.color === 'success' ? 'text-success-600 dark:text-success-400' :
                                'text-warning-600 dark:text-warning-400'
                              }`} />
                            </div>
                            <p className="text-sm font-semibold text-secondary-700 dark:text-secondary-300 px-4">
                              {t(`home.about.gallery.${item.key}`)}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 md:top-3 md:right-3 w-10 h-10 rounded-full bg-black/70 text-white text-xl font-semibold hover:bg-black/90 transition-colors"
                aria-label="Fermer l'image"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full max-h-[90vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default AboutGallery
