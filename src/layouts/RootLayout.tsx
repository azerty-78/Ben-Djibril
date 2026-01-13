import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { usePrefetch } from '../hooks/usePrefetch'
import { useScrollToTop } from '../hooks/useScrollToTop'
import profileImage from '../assets/bendjibril.jpg'

function RootLayout() {
  usePrefetch()
  useScrollToTop()
  const [isProfileImageOpen, setIsProfileImageOpen] = useState(false)

  // Bloquer le scroll du body quand la lightbox est ouverte
  useEffect(() => {
    if (isProfileImageOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isProfileImageOpen])

  // Fermer la lightbox avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isProfileImageOpen) {
        setIsProfileImageOpen(false)
      }
    }
    if (isProfileImageOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isProfileImageOpen])
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800">
      <Navbar onProfileImageClick={() => setIsProfileImageOpen(true)} />
      <main className="flex-1">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <Footer />

      {/* Profile Image Lightbox - Rendu au niveau du layout */}
      <AnimatePresence>
        {isProfileImageOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/80 dark:bg-black/90 backdrop-blur-sm"
              onClick={() => setIsProfileImageOpen(false)}
            />
            
            {/* Lightbox Content */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsProfileImageOpen(false)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 dark:bg-white/20 hover:bg-white/20 dark:hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-10 shadow-lg"
                  aria-label="Fermer"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="relative w-full h-full max-w-3xl max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-secondary-800 p-2">
                  <img
                    src={profileImage}
                    alt="Ben Djibril - Photo de profil"
                    className="max-w-full max-h-full w-auto h-auto object-contain object-center"
                    style={{
                      imageRendering: 'auto',
                      imageRendering: '-webkit-optimize-contrast',
                    }}
                    loading="eager"
                    draggable={false}
                  />
                </div>

                {/* Close hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center whitespace-nowrap"
                >
                  Cliquez en dehors ou sur ✕ pour fermer
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default RootLayout


