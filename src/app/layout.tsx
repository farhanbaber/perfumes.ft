import type { ReactNode } from 'react'
import '../styles/globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Luxe Essence — Minimalist Luxury Perfume',
  description: 'Experience the essence of luxury with our minimalist, meticulously crafted perfume brand.',
  keywords: 'luxury perfume, minimalist fragrance, exclusive scent, Essence Noir',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
