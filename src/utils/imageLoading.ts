/**
 * Utilitaires pour optimiser le chargement des images
 * Corrige les problèmes de lazy loading avec Microsoft Edge
 */

/**
 * Détermine si une image doit être chargée en eager ou lazy
 * Les images au-dessus de la ligne de flottaison doivent être en eager
 */
export function getImageLoadingStrategy(
  isAboveFold: boolean = false,
  isCritical: boolean = false
): 'eager' | 'lazy' {
  // Les images critiques ou au-dessus de la ligne de flottaison doivent être en eager
  if (isCritical || isAboveFold) {
    return 'eager'
  }
  
  // Pour les autres, utiliser lazy mais avec un fallback pour Edge
  return 'lazy'
}

/**
 * Ajoute un attribut fetchpriority pour optimiser le chargement
 */
export function getImageAttributes(
  isAboveFold: boolean = false,
  isCritical: boolean = false
): { loading: 'eager' | 'lazy'; fetchPriority?: 'high' | 'low' } {
  const loading = getImageLoadingStrategy(isAboveFold, isCritical)
  
  return {
    loading,
    ...(isCritical || isAboveFold ? { fetchPriority: 'high' as const } : { fetchPriority: 'low' as const }),
  }
}
