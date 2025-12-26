import { motion } from 'framer-motion'

function ProjectCardSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-secondary-900 rounded-2xl sm:rounded-3xl shadow-lg border border-secondary-100 dark:border-secondary-800 overflow-hidden h-full flex flex-col"
    >
      {/* Image/Header Section Skeleton */}
      <div className="relative h-56 sm:h-64 bg-gradient-to-br from-secondary-200 to-secondary-300 dark:from-secondary-700 dark:to-secondary-800 animate-pulse">
        {/* Badge Skeleton */}
        <div className="absolute top-4 right-4 w-20 h-8 bg-secondary-300 dark:bg-secondary-600 rounded-xl animate-pulse" />
      </div>

      {/* Content Skeleton */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Title Skeleton */}
        <div className="mb-5">
          <div className="h-7 bg-secondary-200 dark:bg-secondary-700 rounded-lg mb-3 w-3/4 animate-pulse" />
          <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-full animate-pulse" />
          <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-2/3 mt-2 animate-pulse" />
        </div>

        {/* Client Info Skeleton */}
        <div className="mb-5 p-4 rounded-xl bg-secondary-100 dark:bg-secondary-800/50 border border-secondary-200 dark:border-secondary-700">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary-200 dark:bg-secondary-700 animate-pulse" />
            <div className="flex-1">
              <div className="h-4 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-1/2 mb-2 animate-pulse" />
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Problem/Solution/Impact Skeleton */}
        <div className="space-y-3 mb-5 flex-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-3.5 rounded-xl bg-secondary-100 dark:bg-secondary-800/30 border border-secondary-200 dark:border-secondary-700">
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-1/4 mb-2 animate-pulse" />
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-full animate-pulse" />
              <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-3/4 mt-1 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Stack Tags Skeleton */}
        <div className="mb-5">
          <div className="h-3 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-1/4 mb-2.5 animate-pulse" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-7 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-16 animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Actions Skeleton */}
        <div className="flex flex-col sm:flex-row gap-2.5 mt-auto pt-5 border-t border-secondary-100 dark:border-secondary-800">
          <div className="h-10 bg-secondary-200 dark:bg-secondary-700 rounded-lg flex-1 animate-pulse" />
          <div className="h-10 bg-secondary-200 dark:bg-secondary-700 rounded-lg w-20 animate-pulse" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCardSkeleton
