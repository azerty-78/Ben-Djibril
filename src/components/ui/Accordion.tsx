import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

interface AccordionProps {
  items: AccordionItemProps[]
  className?: string
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-secondary-200 dark:border-secondary-700 rounded-xl overflow-hidden bg-white dark:bg-secondary-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary-50 dark:hover:bg-secondary-700/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-secondary-900 dark:text-white pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className="w-5 h-5 text-secondary-500 dark:text-secondary-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-secondary-600 dark:text-secondary-300 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Accordion({ items, className = '' }: AccordionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  )
}

export default Accordion
