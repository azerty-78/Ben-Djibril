import SEO from '../components/seo/SEO'
import HomeHero from '../components/home/HomeHero'
import HomeAbout from '../components/home/HomeAbout'
import HomeCertifications from '../components/home/HomeCertifications'
import HomeServices from '../components/home/HomeServices'
import HomeMicroTestimonial from '../components/home/HomeMicroTestimonial'
import HomeTestimonials from '../components/home/HomeTestimonials'
import HomeCTA from '../components/home/HomeCTA'

function Home() {
  return (
    <div className="space-y-0">
      <SEO />
      <HomeHero />
      <HomeAbout />
      <HomeCertifications />
      <HomeServices />
      <HomeMicroTestimonial />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  )
}

export default Home
