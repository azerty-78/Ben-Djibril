import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import type { TechLevel } from '../../data/techStack'

type TechItem = {
  name: string
  slug: string
  category?: string
  level?: TechLevel
}

type TechStackProps = {
  title: string
  items: TechItem[]
  columns?: 2 | 3 | 4 | 5 | 6
  showLevelBadge?: boolean
}

// Couleurs officielles des technologies
const iconColors: Record<string, string> = {
  kotlin: '#7F52FF',
  oracle: '#ED8B00', // Java
  java: '#ED8B00',
  html5: '#E34F26',
  css3: '#1572B6',
  javascript: '#F7DF1E',
  c: '#A8B9CC',
  cplusplus: '#00599C',
  typescript: '#3178C6',
  python: '#3776AB',
  spring: '#6DB33F',
  react: '#61DAFB',
  mysql: '#4479A1',
  postgresql: '#336791',
  mongodb: '#47A248',
  docker: '#2496ED',
  kubernetes: '#326CE5',
  ansible: '#EE0000',
  amazonaws: '#FF9900',
  hostinger: '#FF6C2C',
  ngrok: '#1F1E1E',
  cloudflare: '#F38020',
  vercel: '#000000',
  figma: '#F24E1E',
  canva: '#00C4CC',
  git: '#F05032',
  github: '#181717',
}

// Icônes qui n'existent pas dans simple-icons - utiliser directement le fallback
const missingIcons = new Set(['hostinger'])

function TechItemCard({ item, index, showLevelBadge = false }: { item: TechItem; index: number; showLevelBadge?: boolean }) {
  const { t } = useTranslation()
  const iconName = item.slug.toLowerCase().replace(/\s+/g, '')
  const iconColor = iconColors[iconName] || iconColors[item.slug.toLowerCase()] || '#6366f1'
  const shouldUseFallback = missingIcons.has(iconName)
  
  const [hasError, setHasError] = useState(shouldUseFallback)
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${iconName}.svg`

  // Charger et colorer le SVG avec la couleur officielle
  useEffect(() => {
    if (svgContent || hasError || shouldUseFallback) return // Déjà chargé, erreur gérée, ou icône manquante
    
    fetch(iconUrl)
      .then(res => {
        if (!res.ok) {
          setHasError(true)
          return
        }
        return res.text()
      })
      .then(svg => {
        if (!svg) return
        // Remplacer toutes les occurrences de fill par la couleur officielle
        let coloredSvg = svg
        // Remplacer fill="#000000", fill="#000", fill="currentColor", etc.
        coloredSvg = coloredSvg.replace(/fill="[^"]*"/g, `fill="${iconColor}"`)
        coloredSvg = coloredSvg.replace(/fill='[^']*'/g, `fill="${iconColor}"`)
        // Si pas de fill, en ajouter un
        if (!coloredSvg.includes('fill=')) {
          coloredSvg = coloredSvg.replace('<svg', `<svg fill="${iconColor}"`)
        }
        setSvgContent(coloredSvg)
      })
      .catch(() => {
        // Si le fetch échoue, utiliser directement le fallback (initiales)
        setHasError(true)
      })
  }, [iconUrl, iconColor, svgContent, hasError, shouldUseFallback])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors group"
    >
      {svgContent ? (
        <div 
          className="w-12 h-12 flex items-center justify-center"
          dangerouslySetInnerHTML={{ 
            __html: svgContent
              .replace(/width="[^"]*"/g, 'width="32"')
              .replace(/height="[^"]*"/g, 'height="32"')
              .replace(/class="[^"]*"/g, '')
          }}
        />
      ) : !hasError ? (
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            src={iconUrl}
            alt={item.name}
            className="w-8 h-8"
            style={{ 
              filter: iconColor === '#000000' || iconColor === '#1F1E1E' || iconColor === '#181717'
                ? 'none'
                : `brightness(0) saturate(100%) ${['#F7DF1E', '#FF9900', '#FF6C2C'].includes(iconColor) ? 'invert(1)' : ''}`,
            }}
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: iconColor }}
        >
          {item.name.charAt(0)}
        </div>
      )}
      <div className="flex flex-col items-center gap-1 w-full">
        <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 text-center">
          {item.name}
        </span>
        {showLevelBadge && item.level && (() => {
          const levelBadgeClasses = {
            daily: 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 border-success-200 dark:border-success-700',
            mastered: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-700',
            known: 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 border-secondary-200 dark:border-secondary-700'
          }
          return (
            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${levelBadgeClasses[item.level]}`}>
              {t(`home.about.techStackFilters.${item.level}`)}
            </span>
          )
        })()}
      </div>
    </motion.div>
  )
}

function TechStack({ title, items, columns = 4, showLevelBadge = false }: TechStackProps) {
  return (
    <div className="space-y-4">
      {title && <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">{title}</h3>}
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} gap-4`}>
        {items.map((item, index) => (
          <TechItemCard key={item.name} item={item} index={index} showLevelBadge={showLevelBadge} />
        ))}
      </div>
    </div>
  )
}

export default TechStack
