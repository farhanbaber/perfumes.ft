import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InteractiveGallery from '@/components/product/InteractiveGallery'
import FragranceArchitecture from '@/components/product/FragranceArchitecture'
import Specifications from '@/components/product/Specifications'
import ProductCTA from '@/components/product/ProductCTA'

export default function ProductPage() {
  return (
    <main className="bg-[#080808]">
      <Navigation />
      <div className="pt-20" />
      <InteractiveGallery />
      <FragranceArchitecture />
      <Specifications />
      <ProductCTA />
      <Footer />
    </main>
  )
}
