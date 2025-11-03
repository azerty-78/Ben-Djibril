import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

type LazyImageProps = {
  src: string
  alt: string
  className?: string
  placeholder?: string
}

function LazyImage({ src, alt, className = '', placeholder }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {!loaded && placeholder && (
        <div className="absolute inset-0 bg-secondary-200 dark:bg-secondary-700 animate-pulse" />
      )}
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  )
}

export default LazyImage

