import { motion, AnimatePresence } from 'framer-motion'

interface LoadingProps {
  isLoading: boolean
  progress?: number
  stage?: 'starting' | 'loading' | 'rendering' | 'complete'
}

function Loading({ isLoading, progress = 0, stage = 'loading' }: LoadingProps) {
  const getStageText = () => {
    switch (stage) {
      case 'starting':
        return 'Initialisation...'
      case 'loading':
        return 'Chargement...'
      case 'rendering':
        return 'Rendu...'
      case 'complete':
        return 'Finalisation...'
      default:
        return 'Chargement...'
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
          {/* Backdrop - Animation plus rapide */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[9999] bg-white dark:bg-secondary-900 backdrop-blur-sm"
            style={{ willChange: 'opacity' }}
          />
          
          {/* Loading Content - Animation optimisée avec progression */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[10000] flex items-center justify-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              {/* Spinner optimisé */}
              <div className="relative w-12 h-12 sm:w-16 sm:h-16" style={{ willChange: 'transform' }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="w-full h-full border-3 sm:border-4 border-primary-200 dark:border-primary-900 border-t-primary-600 dark:border-t-primary-400 rounded-full"
                  style={{ willChange: 'transform' }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute inset-1.5 sm:inset-2 w-full h-full border-3 sm:border-4 border-transparent border-r-accent-500 dark:border-r-accent-400 rounded-full"
                  style={{ willChange: 'transform' }}
                />
              </div>
              
              {/* Progress Bar */}
              <div className="w-48 sm:w-64 max-w-full px-4">
                <div className="h-1.5 sm:h-2 bg-secondary-200 dark:bg-secondary-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 rounded-full"
                    style={{ willChange: 'width' }}
                  />
                </div>
              </div>
              
              {/* Text avec étape */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="text-center"
              >
                <p className="text-xs sm:text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                  {getStageText()}
                </p>
                {progress > 0 && (
                  <p className="text-[10px] sm:text-xs text-secondary-500 dark:text-secondary-500 mt-1">
                    {Math.round(progress)}%
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Loading
