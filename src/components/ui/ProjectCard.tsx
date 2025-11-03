import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

type ProjectCardProps = {
  title: string
  description: string
  problem: string
  solution: string
  impact: string
  tags: string[]
  image?: string
  projectUrl?: string
  codeUrl?: string
  client?: string
}

function ProjectCard({
  title,
  description,
  problem,
  solution,
  impact,
  tags,
  image,
  projectUrl,
  codeUrl,
  client,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card group"
    >
      {image && (
        <div className="h-48 bg-secondary-200 dark:bg-secondary-700 rounded-lg mb-4 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-xl">
            {title}
          </div>
        </div>
      )}

      <div className="mb-4">
        {client && <span className="text-xs text-secondary-500 dark:text-secondary-400">{client}</span>}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-secondary-600 dark:text-secondary-300 mb-4">{description}</p>
      </div>

      <div className="space-y-3 mb-4 text-sm">
        <div>
          <span className="font-semibold text-accent-600 dark:text-accent-400">Problem:</span>
          <p className="text-secondary-600 dark:text-secondary-300">{problem}</p>
        </div>
        <div>
          <span className="font-semibold text-primary-600 dark:text-primary-400">Solution:</span>
          <p className="text-secondary-600 dark:text-secondary-300">{solution}</p>
        </div>
        <div>
          <span className="font-semibold text-success-600 dark:text-success-400">Impact:</span>
          <p className="text-secondary-600 dark:text-secondary-300">{impact}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
          >
            View Project
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
          >
            <CodeBracketIcon className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard

