import ContactHero from '../components/contact/ContactHero'
import ContactAvailability from '../components/contact/ContactAvailability'
import ContactStats from '../components/contact/ContactStats'
import ContactWhyChoose from '../components/contact/ContactWhyChoose'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import ContactTestimonials from '../components/contact/ContactTestimonials'
import ContactMap from '../components/contact/ContactMap'
import ContactFAQ from '../components/contact/ContactFAQ'
import ContactCTA from '../components/contact/ContactCTA'
import ScrollToTop from '../components/ui/ScrollToTop'

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <ContactHero />
      <div className="container mx-auto px-4 sm:px-6">
        <ContactAvailability />
          </div>
      <ContactStats />
      <ContactWhyChoose />
      <ContactForm />
      <ContactCards />
      <ContactTestimonials />
      <ContactMap />
      <ContactFAQ />
      <ContactCTA />
      <ScrollToTop />
    </div>
  )
}

export default Contact
