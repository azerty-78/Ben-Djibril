import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactCards from '../components/contact/ContactCards'
import ContactMap from '../components/contact/ContactMap'
import ContactCTA from '../components/contact/ContactCTA'

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900">
      <ContactHero />
      <ContactForm />
      <ContactCards />
      <ContactMap />
      <ContactCTA />
    </div>
  )
}

export default Contact
