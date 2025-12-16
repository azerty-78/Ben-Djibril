import ContactHero from '../components/contact/ContactHero'
import ContactStats from '../components/contact/ContactStats'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import ContactMap from '../components/contact/ContactMap'
import ContactFAQ from '../components/contact/ContactFAQ'
import ContactCTA from '../components/contact/ContactCTA'

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <ContactHero />
      <ContactStats />
      <ContactForm />
      <ContactCards />
      <ContactMap />
      <ContactFAQ />
      <ContactCTA />
    </div>
  )
}

export default Contact
