'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function BottleSVG({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = size === 'sm' ? 'w-20 h-auto' : size === 'lg' ? 'w-56 h-auto' : 'w-36 h-auto'
  return (
    <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={dims}>
      <rect x="72" y="20" width="56" height="30" rx="6" fill="#d4a574" opacity="0.9"/>
      <rect x="80" y="14" width="40" height="12" rx="4" fill="#e6b88a"/>
      <rect x="92" y="8" width="16" height="8" rx="3" fill="#c49060"/>
      <rect x="98" y="2" width="4" height="8" rx="1" fill="#b07840"/>
      <rect x="82" y="50" width="36" height="40" rx="4" fill="url(#neckG2)"/>
      <path d="M64 92 Q62 112 52 132 L52 278 Q52 298 100 298 Q148 298 148 278 L148 132 Q138 112 136 92 Z" fill="url(#bodyG2)"/>
      <path d="M68 100 Q66 120 58 140 L58 240 Q60 240 66 240 L66 140 Q72 120 74 100 Z" fill="white" opacity="0.07"/>
      <path d="M58 165 L142 165 L142 278 Q142 292 100 292 Q58 292 58 278 Z" fill="url(#liquidG2)" opacity="0.45"/>
      <rect x="62" y="175" width="76" height="88" rx="4" fill="#1a1a1a" opacity="0.55"/>
      <rect x="64" y="177" width="72" height="84" rx="3" fill="none" stroke="#d4a574" strokeWidth="0.8" opacity="0.8"/>
      <text x="100" y="202" textAnchor="middle" fill="#d4a574" fontSize="8" fontFamily="Georgia,serif" letterSpacing="3" opacity="0.95">LUXE</text>
      <text x="100" y="215" textAnchor="middle" fill="#d4a574" fontSize="8" fontFamily="Georgia,serif" letterSpacing="3" opacity="0.95">ESSENCE</text>
      <line x1="72" y1="221" x2="128" y2="221" stroke="#d4a574" strokeWidth="0.5" opacity="0.6"/>
      <text x="100" y="235" textAnchor="middle" fill="#e6b88a" fontSize="11" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.9">Essence Noir</text>
      <text x="100" y="250" textAnchor="middle" fill="#aaa" fontSize="5.5" fontFamily="Arial,sans-serif" letterSpacing="2" opacity="0.8">100ml · EAU DE PARFUM</text>
      <ellipse cx="100" cy="298" rx="48" ry="6" fill="url(#shadowG2)" opacity="0.25"/>
      <defs>
        <linearGradient id="neckG2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6a40"/>
          <stop offset="40%" stopColor="#d4a574"/>
          <stop offset="100%" stopColor="#6a4a20"/>
        </linearGradient>
        <linearGradient id="bodyG2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a1f10"/>
          <stop offset="30%" stopColor="#d4a574" stopOpacity="0.25"/>
          <stop offset="60%" stopColor="#f0d5b0" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#1a1005"/>
        </linearGradient>
        <linearGradient id="liquidG2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#8a5a20" stopOpacity="0.55"/>
        </linearGradient>
        <radialGradient id="shadowG2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  )
}

const notes = [
  { tier: 'TOP NOTES', items: ['Bergamot', 'Grapefruit'], color: 'from-yellow-500/20 to-transparent' },
  { tier: 'HEART NOTES', items: ['Amber', 'Lavender', 'Jasmine'], color: 'from-purple-500/20 to-transparent' },
  { tier: 'BASE NOTES', items: ['Oud', 'Sandalwood', 'Vanilla'], color: 'from-amber-800/20 to-transparent' },
]

export default function FeaturedShowcase() {
  return (
    <section className="py-24 bg-dark-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-accent text-xs tracking-[4px] uppercase mb-4"
        >
          ✦ Signature Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-serif mb-20"
        >
          Essence Noir
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Product Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Outer ring glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-72 h-72 rounded-full bg-accent blur-3xl"
              />
            </div>

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute w-80 h-80 rounded-full border border-accent/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-96 h-96 rounded-full border border-accent/5"
              style={{ borderStyle: 'dashed' }}
            />

            {/* Card behind bottle */}
            <div className="relative z-10 w-72 h-80 bg-gradient-to-br from-dark-bg to-dark-tertiary border border-dark-tertiary rounded-2xl flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex flex-col items-center gap-3"
              >
                <BottleSVG size="lg" />
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-accent/40" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/40" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-accent/40" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-accent/40" />
            </div>

            {/* Size badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -right-2 top-8 flex flex-col gap-2 z-20"
            >
              {['50ml', '100ml', '200ml'].map((sz, i) => (
                <motion.div
                  key={sz}
                  whileHover={{ x: -4, backgroundColor: '#d4a574', color: '#0a0a0a' }}
                  className="px-3 py-1.5 bg-dark-bg border border-dark-tertiary rounded text-xs text-gray-400 cursor-pointer transition-all"
                >
                  {sz}
                </motion.div>
              ))}
            </motion.div>

            {/* Price badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-dark-bg px-6 py-2 rounded-full font-bold text-lg shadow-lg z-20"
            >
              From $189
            </motion.div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-accent text-xs tracking-[3px] uppercase"
              >
                Our Signature Fragrance
              </motion.span>
              <p className="text-gray-300 text-lg font-light mt-4 leading-relaxed">
                A sophisticated blend of citrus bergamot, warm amber, and mysterious oud. Created for those who appreciate subtlety and complexity—a fragrance that evolves throughout the day.
              </p>
            </div>

            {/* Fragrance notes */}
            <div className="space-y-3">
              {notes.map((note, idx) => (
                <motion.div
                  key={note.tier}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative p-4 rounded-lg bg-gradient-to-r ${note.color} border border-dark-tertiary`}
                >
                  <p className="text-accent text-xs font-semibold tracking-widest mb-2">{note.tier}</p>
                  <div className="flex flex-wrap gap-2">
                    {note.items.map((n) => (
                      <span key={n} className="text-sm text-gray-300 px-2 py-0.5 bg-dark-bg/60 rounded-full border border-dark-tertiary">
                        {n}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {['🌿 Vegan', '♻️ Eco Packaging', '✓ Cruelty-Free', '🏆 Award Winning'].map((tag) => (
                <span key={tag} className="text-xs text-gray-400 px-3 py-1.5 border border-dark-tertiary rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-2">
              <Link href="/product">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212,165,116,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Explore Full Details
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Enquire
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
