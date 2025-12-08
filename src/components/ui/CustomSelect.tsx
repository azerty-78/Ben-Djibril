import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline'

type Option = {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

type CustomSelectProps = {
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

function CustomSelect({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={selectRef} className={`relative ${className}`}>
      {/* Select Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white dark:bg-secondary-800 border-2 border-secondary-200 dark:border-secondary-700 text-left flex items-center justify-between gap-3 hover:border-primary-400 dark:hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {selectedOption?.icon && (
            <selectedOption.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
          )}
          <span className="text-sm sm:text-base font-medium text-secondary-900 dark:text-white truncate">
            {selectedOption?.label || placeholder}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDownIcon className="w-5 h-5 text-secondary-500 dark:text-secondary-400 flex-shrink-0" />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Options List */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20 w-full mt-2 bg-white dark:bg-secondary-800 rounded-xl border-2 border-secondary-200 dark:border-secondary-700 shadow-xl overflow-hidden"
            >
              <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary-300 dark:scrollbar-thumb-secondary-600 scrollbar-track-transparent">
                {options.map((option) => {
                  const isSelected = option.value === value
                  const Icon = option.icon
                  
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        onChange(option.value)
                        setIsOpen(false)
                      }}
                      className={`w-full px-4 sm:px-5 py-3 text-left flex items-center gap-3 transition-all duration-150 ${
                        isSelected
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700/50'
                      }`}
                    >
                      {Icon && (
                        <Icon className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className="text-sm sm:text-base font-medium flex-1">
                        {option.label}
                      </span>
                      {isSelected && (
                        <CheckIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                      )}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomSelect

