import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactForm from '@/components/contact/ContactForm'
import FAQ from '@/components/contact/FAQ'
import SocialConnect from '@/components/contact/SocialConnect'

export default function ContactPage() {
  return (
    <main className="bg-dark-bg">
      <Navigation />
      <div className="pt-20" />
      <ContactForm />
      <SocialConnect />
      <FAQ />
      <Footer />
    </main>
  )
}
