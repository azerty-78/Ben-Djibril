import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ClockIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

function ContactAvailability() {
  const { t } = useTranslation()
  const [isAvailable, setIsAvailable] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now)
      
      // Vérifier la disponibilité (9h-18h WAT, lundi-vendredi)
      const day = now.getUTCDay() // 0 = dimanche, 6 = samedi
      const hour = now.getUTCHours() + 1 // WAT = UTC+1
      
      // Lundi (1) à Vendredi (5), 9h-18h
      const isWeekday = day >= 1 && day <= 5
      const isWorkingHours = hour >= 9 && hour < 18
      
      setIsAvailable(isWeekday && isWorkingHours)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Mise à jour chaque minute

    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Africa/Douala' // WAT timezone
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto pt-8 sm:pt-12 md:pt-16 mb-8 sm:mb-12"
    >
      <div className={`bg-gradient-to-br ${
        isAvailable 
          ? 'from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 border-success-200 dark:border-success-800' 
          : 'from-secondary-50 to-secondary-100 dark:from-secondary-800/50 dark:to-secondary-900/50 border-secondary-200 dark:border-secondary-700'
      } rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border-2 relative overflow-hidden`}>
        {/* Effet de brillance subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        <div className="flex items-start gap-4 sm:gap-6 relative z-10">
          <motion.div 
            className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl ${
              isAvailable 
                ? 'bg-success-500 shadow-lg shadow-success-500/50' 
                : 'bg-secondary-400 shadow-lg shadow-secondary-400/30'
            } flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isAvailable ? (
              <CheckCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
            ) : (
              <XCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" />
            )}
          </motion.div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 dark:text-white">
                {t('contact.availability.title')}
              </h3>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`w-3 h-3 rounded-full shadow-md ${
                  isAvailable ? 'bg-success-500 shadow-success-500/50' : 'bg-secondary-400 shadow-secondary-400/30'
                }`}
              />
            </div>
            <p className={`text-base sm:text-lg md:text-xl font-semibold ${
              isAvailable 
                ? 'text-success-700 dark:text-success-300' 
                : 'text-secondary-600 dark:text-secondary-400'
            }`}>
              {isAvailable 
                ? t('contact.availability.available')
                : t('contact.availability.unavailable')
              }
            </p>
            <div className="flex items-center gap-2 text-sm sm:text-base text-secondary-600 dark:text-secondary-400 bg-white/50 dark:bg-secondary-800/30 rounded-lg px-3 py-2 w-fit">
              <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>
                {t('contact.availability.currentTime')}: <span className="font-semibold">{formatTime(currentTime)}</span> (WAT)
              </span>
            </div>
            <p className="text-sm sm:text-base text-secondary-600 dark:text-secondary-400 leading-relaxed">
              {t('contact.availability.hours')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactAvailability
