export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  rating: number // 1-5
  image?: string // URL ou base64
  createdAt: string
}

const STORAGE_KEY = 'portfolio_testimonials'

// Charger les témoignages depuis localStorage
export function loadTestimonials(): Testimonial[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error loading testimonials:', error)
  }
  return []
}

// Sauvegarder les témoignages dans localStorage
export function saveTestimonials(testimonials: Testimonial[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials))
  } catch (error) {
    console.error('Error saving testimonials:', error)
  }
}

// Ajouter un nouveau témoignage
export function addTestimonial(testimonial: Omit<Testimonial, 'id' | 'createdAt'>): Testimonial {
  const testimonials = loadTestimonials()
  const newTestimonial: Testimonial = {
    ...testimonial,
    id: `testimonial-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  }
  testimonials.push(newTestimonial)
  saveTestimonials(testimonials)
  return newTestimonial
}

// Supprimer un témoignage
export function deleteTestimonial(id: string): void {
  const testimonials = loadTestimonials()
  const filtered = testimonials.filter(t => t.id !== id)
  saveTestimonials(filtered)
}

// Mettre à jour un témoignage
export function updateTestimonial(id: string, updates: Partial<Testimonial>): void {
  const testimonials = loadTestimonials()
  const index = testimonials.findIndex(t => t.id === id)
  if (index !== -1) {
    testimonials[index] = { ...testimonials[index], ...updates }
    saveTestimonials(testimonials)
  }
}

// Convertir une image en base64
export function imageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
