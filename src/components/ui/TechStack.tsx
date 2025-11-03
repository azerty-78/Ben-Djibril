import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type TechItem = {
  name: string
  slug: string
  category?: string
}

type TechStackProps = {
  title: string
  items: TechItem[]
  columns?: 2 | 3 | 4 | 5 | 6
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

function TechItemCard({ item, index }: { item: TechItem; index: number }) {
  const [hasError, setHasError] = useState(false)
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const iconName = item.slug.toLowerCase().replace(/\s+/g, '')
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`
  const iconColor = iconColors[iconName] || iconColors[item.slug.toLowerCase()] || '#6366f1'

  // Charger et colorer le SVG avec la couleur officielle
  useEffect(() => {
    if (svgContent) return // Déjà chargé
    
    fetch(iconUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.text()
      })
      .then(svg => {
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
        // Si le fetch échoue, on essaie avec l'image directe
        setHasError(false) // On garde hasError à false pour utiliser l'img fallback
      })
  }, [iconUrl, iconColor, svgContent])

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
      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300 text-center">
        {item.name}
      </span>
    </motion.div>
  )
}

function TechStack({ title, items, columns = 4 }: TechStackProps) {
  return (
    <div className="space-y-4">
      {title && <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">{title}</h3>}
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-${columns} gap-4`}>
        {items.map((item, index) => (
          <TechItemCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default TechStack
