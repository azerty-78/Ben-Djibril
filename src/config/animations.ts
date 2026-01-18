/**
 * Configuration cohérente des animations pour toute l'application
 * Harmonise les délais, durées et effets d'animation
 */

// Durées standardisées pour les animations
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  medium: 0.6,
  slow: 0.8,
} as const

// Délais standardisés pour les animations séquentielles
export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
  xlong: 0.5,
} as const

// Easing functions pour des animations fluides
export const ANIMATION_EASING = {
  default: [0.4, 0, 0.2, 1] as const, // ease-in-out
  smooth: [0.25, 0.1, 0.25, 1] as const, // cubic-bezier smooth
  spring: [0.68, -0.55, 0.265, 1.55] as const, // spring-like
  easeOut: [0.22, 1, 0.36, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
} as const

// Variantes d'animation standardisées pour les éléments communs
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: ANIMATION_DURATION.normal,
    ease: ANIMATION_EASING.default,
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

// Variantes pour les animations avec viewport (scroll-based)
export const fadeInUpOnView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

export const scaleInOnView = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

// Configuration pour les animations de stagger (éléments en liste)
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: ANIMATION_DELAY.short,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: ANIMATION_EASING.default,
    },
  },
}

// Configuration pour les animations de hover
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: ANIMATION_EASING.default,
  },
}

export const hoverLift = {
  whileHover: { y: -5, scale: 1.02 },
  whileTap: { y: 0, scale: 1 },
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: ANIMATION_EASING.default,
  },
}

// Fonction helper pour créer des animations séquentielles
export const createStaggeredAnimation = (
  baseDelay: number = ANIMATION_DELAY.none,
  staggerIncrement: number = ANIMATION_DELAY.short
) => (index: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    delay: baseDelay + index * staggerIncrement,
    ease: ANIMATION_EASING.default,
  },
})

// Animation pour les sections hero (première section de chaque page)
export const heroAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

// Animation pour les cards (carte de projet, service, etc.)
export const cardAnimation = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: {
    duration: ANIMATION_DURATION.medium,
    ease: ANIMATION_EASING.default,
  },
}

// Animation pour les boutons
export const buttonAnimation = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.98 },
  transition: {
    duration: ANIMATION_DURATION.fast,
    ease: ANIMATION_EASING.default,
  },
}
