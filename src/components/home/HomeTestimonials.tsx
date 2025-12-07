import { lazy, Suspense } from 'react'
import TestimonialsSection from '../sections/TestimonialsSection'

function HomeTestimonials() {
  return (
    <Suspense fallback={<div className="h-96 bg-secondary-50/50 dark:bg-secondary-900/30" />}>
      <TestimonialsSection />
    </Suspense>
  )
}

export default HomeTestimonials

