import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import BrandStory from '@/components/home/BrandStory'
import FeaturedShowcase from '@/components/home/FeaturedShowcase'
import Testimonials from '@/components/home/Testimonials'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <main className="bg-dark-bg">
      <Navigation />
      <HeroSection />
      <BrandStory />
      <FeaturedShowcase />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
