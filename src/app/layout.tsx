import type { ReactNode } from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Luxe Essence — Minimalist Luxury Perfume',
  description: 'Experience the essence of luxury with our minimalist, meticulously crafted perfume brand.',
  keywords: 'luxury perfume, minimalist fragrance, exclusive scent, Essence Noir',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
