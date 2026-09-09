'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  const handleSub = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSubStatus('loading')
    await new Promise((r) => setTimeout(r, 1000))
    setSubStatus('done')
    setEmail('')
    setTimeout(() => setSubStatus('idle'), 4000)
  }

  const cols = [
    {
      title: 'Navigate',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Our Product', href: '/product' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Shipping & Returns', href: '#' },
        { label: 'FAQ', href: '/contact' },
        { label: 'Size Guide', href: '#' },
        { label: 'Track Order', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'WhatsApp', href: 'https://wa.me/1234567890', external: true },
        { label: 'Instagram', href: 'https://instagram.com/luxeessence', external: true },
        { label: 'Email Us', href: 'mailto:hello@luxeessence.com', external: true },
        { label: 'TikTok', href: 'https://tiktok.com/@luxeessence', external: true },
      ],
    },
  ]

  return (
    <footer className="relative bg-[#060604] overflow-hidden">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(212,165,116,0.3)] to-transparent" />

      {/* Newsletter band */}
      <div className="relative py-16 border-b border-[rgba(212,165,116,0.08)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,165,116,0.05) 0%, transparent 70%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-2">Inner Circle</p>
            <h3 className="text-2xl md:text-3xl font-serif text-white">Join our exclusive community</h3>
          </div>
          <form onSubmit={handleSub} className="flex gap-0 w-full md:w-auto max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={subStatus !== 'idle'}
              className="flex-1 px-5 py-3.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(212,165,116,0.25)] border-r-0 text-white placeholder-[#444] focus:border-[#d4a574] focus:outline-none transition-colors text-sm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={subStatus !== 'idle'}
              className="btn-primary text-xs whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {subStatus === 'loading' ? '···' : subStatus === 'done' ? '✓ Done' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span
                className="text-2xl font-serif font-bold"
                style={{
                  background: 'linear-gradient(135deg, #f0d090 0%, #d4a574 45%, #b8864e 75%, #e6b88a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Luxe Essence
              </span>
              <p className="text-[9px] tracking-[4px] text-[#d4a574]/50 uppercase mt-1">Maison de Parfum</p>
            </div>
            <p className="text-[#555] text-sm font-light leading-relaxed mb-6">
              Minimalist luxury perfumery. Crafted for those who appreciate that true elegance never announces itself.
            </p>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded border border-green-700/40 bg-green-900/10 text-green-400 text-xs tracking-wider hover:border-green-500 hover:bg-green-900/20 transition-all duration-300"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.346.636 4.638 1.84 6.648L2.667 29.333l6.872-1.8A13.267 13.267 0 0016.004 29.333c7.364 0 13.33-5.969 13.33-13.333S23.368 2.667 16.004 2.667zm6.034 18.07c-.33-.165-1.952-.963-2.254-1.073-.303-.11-.523-.165-.744.165-.22.33-.855 1.073-1.047 1.293-.193.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.637-.981-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.578-.083-.165-.744-1.793-1.019-2.455-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.882.412-.303.33-1.156 1.129-1.156 2.757s1.184 3.2 1.348 3.42c.165.22 2.33 3.558 5.648 4.99.79.34 1.406.543 1.887.694.793.252 1.514.216 2.085.131.636-.095 1.952-.798 2.227-1.568.275-.77.275-1.43.193-1.568-.083-.137-.303-.22-.633-.385z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Link columns */}
          {cols.map((col, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (ci + 1) * 0.08 }}
            >
              <h4 className="section-label mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="text-[#555] hover:text-[#d4a574] text-sm font-light transition-colors duration-300 flex items-center gap-2"
                      >
                        {l.label}
                        {l.label === 'WhatsApp' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        )}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(212,165,116,0.08)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#333] text-xs tracking-wider">
            © {year} Luxe Essence. All rights reserved.
          </p>
          <div className="divider-gold hidden md:block" style={{ width: 40 }} />
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <a key={t} href="#" className="text-[#333] hover:text-[#d4a574] text-xs tracking-wider transition-colors duration-300">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
