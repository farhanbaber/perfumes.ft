'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/* ── Particle dot ── */
function Particle({ x, y, size, dur, delay }: { x: string; y: string; size: number; dur: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: x, top: y, width: size, height: size, background: 'rgba(212,165,116,0.6)' }}
      animate={{ y: [0, -28, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
      transition={{ duration: dur, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

/* ── SVG Bottle ── */
function HeroBottle() {
  return (
    <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      {/* Cap top */}
      <rect x="80" y="12" width="40" height="10" rx="4" fill="url(#capTop)"/>
      {/* Spray tip */}
      <rect x="91" y="5" width="18" height="9" rx="3" fill="#c49060"/>
      <rect x="98" y="1" width="5" height="6" rx="1.5" fill="#b07840"/>
      {/* Cap body */}
      <rect x="70" y="22" width="60" height="32" rx="6" fill="url(#capBody)"/>
      {/* Cap shine */}
      <rect x="74" y="25" width="10" height="22" rx="4" fill="white" opacity="0.12"/>
      {/* Neck */}
      <rect x="80" y="54" width="40" height="44" rx="5" fill="url(#neck)"/>
      <rect x="84" y="57" width="8" height="36" rx="3" fill="white" opacity="0.08"/>
      {/* Shoulder */}
      <path d="M62 96 Q60 116 50 136 L50 282 Q50 304 100 304 Q150 304 150 282 L150 136 Q140 116 138 96 Z" fill="url(#body)"/>
      {/* Inner glass shine left */}
      <path d="M66 104 Q64 124 56 144 L56 248 L64 248 L64 144 Q70 124 72 104 Z" fill="white" opacity="0.06"/>
      {/* Inner glass shine right */}
      <path d="M134 104 Q136 124 144 144 L144 200 L136 200 L136 144 Q130 124 128 104 Z" fill="white" opacity="0.035"/>
      {/* Liquid */}
      <path d="M54 168 L146 168 L146 282 Q146 296 100 296 Q54 296 54 282 Z" fill="url(#liquid)" opacity="0.55"/>
      {/* Liquid shimmer */}
      <path d="M54 168 L146 168 L146 175 Q100 185 54 175 Z" fill="url(#liquidShimmer)" opacity="0.4"/>
      {/* Label bg */}
      <rect x="60" y="180" width="80" height="92" rx="5" fill="#0e0e0e" opacity="0.7"/>
      {/* Label border outer */}
      <rect x="62" y="182" width="76" height="88" rx="4" fill="none" stroke="url(#labelBorder)" strokeWidth="0.8"/>
      {/* Label border inner */}
      <rect x="67" y="187" width="66" height="78" rx="3" fill="none" stroke="#d4a574" strokeWidth="0.3" opacity="0.3"/>
      {/* Label: brand */}
      <text x="100" y="210" textAnchor="middle" fill="url(#goldText)" fontSize="7.5" fontFamily="Georgia,serif" letterSpacing="3.5" opacity="1">LUXE</text>
      <text x="100" y="223" textAnchor="middle" fill="url(#goldText)" fontSize="7.5" fontFamily="Georgia,serif" letterSpacing="3.5" opacity="1">ESSENCE</text>
      {/* Label divider */}
      <line x1="74" y1="229" x2="126" y2="229" stroke="url(#lineFade)" strokeWidth="0.6"/>
      {/* Product name */}
      <text x="100" y="246" textAnchor="middle" fill="#e6c090" fontSize="13" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.95">Essence Noir</text>
      {/* Volume */}
      <text x="100" y="261" textAnchor="middle" fill="#888" fontSize="5.5" fontFamily="Arial,sans-serif" letterSpacing="2.5" opacity="0.9">100 ml  ·  EAU DE PARFUM</text>
      {/* Bottom shadow */}
      <ellipse cx="100" cy="304" rx="50" ry="7" fill="url(#bottomShadow)" opacity="0.3"/>

      <defs>
        <linearGradient id="capTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0c878"/>
          <stop offset="100%" stopColor="#a86c30"/>
        </linearGradient>
        <linearGradient id="capBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7a5228"/>
          <stop offset="35%" stopColor="#e0b068"/>
          <stop offset="65%" stopColor="#f5d590"/>
          <stop offset="100%" stopColor="#6a4218"/>
        </linearGradient>
        <linearGradient id="neck" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6a4820"/>
          <stop offset="40%" stopColor="#d4a060"/>
          <stop offset="70%" stopColor="#f0c878"/>
          <stop offset="100%" stopColor="#5a3810"/>
        </linearGradient>
        <linearGradient id="body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#1a1208"/>
          <stop offset="25%"  stopColor="#3a2810" stopOpacity="0.9"/>
          <stop offset="45%"  stopColor="#d4a574" stopOpacity="0.22"/>
          <stop offset="60%"  stopColor="#f8e8c8" stopOpacity="0.10"/>
          <stop offset="80%"  stopColor="#2a1c08" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#120c04"/>
        </linearGradient>
        <linearGradient id="liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#d4a574" stopOpacity="0.5"/>
          <stop offset="60%"  stopColor="#8a5820" stopOpacity="0.65"/>
          <stop offset="100%" stopColor="#4a2c08" stopOpacity="0.8"/>
        </linearGradient>
        <linearGradient id="liquidShimmer" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent"/>
          <stop offset="50%"  stopColor="#f0d090" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <linearGradient id="labelBorder" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#f0d090"/>
          <stop offset="50%"  stopColor="#d4a574"/>
          <stop offset="100%" stopColor="#8a5820"/>
        </linearGradient>
        <linearGradient id="goldText" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#f0d090"/>
          <stop offset="50%"  stopColor="#d4a574"/>
          <stop offset="100%" stopColor="#e6b870"/>
        </linearGradient>
        <linearGradient id="lineFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="transparent"/>
          <stop offset="50%"  stopColor="#d4a574"/>
          <stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <radialGradient id="bottomShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#d4a574" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  )
}

const particles = [
  { x: '8%',  y: '20%', size: 3, dur: 4.2, delay: 0 },
  { x: '18%', y: '65%', size: 2, dur: 5.1, delay: 0.8 },
  { x: '80%', y: '15%', size: 4, dur: 3.8, delay: 0.3 },
  { x: '90%', y: '55%', size: 2, dur: 6.0, delay: 1.2 },
  { x: '72%', y: '80%', size: 3, dur: 4.5, delay: 0.6 },
  { x: '35%', y: '88%', size: 2, dur: 5.5, delay: 1.5 },
  { x: '55%', y: '10%', size: 2, dur: 4.8, delay: 2.0 },
]

export default function HeroSection() {
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section className="relative min-h-screen flex items-center bg-[#080808] overflow-hidden pt-20">

      {/* ── Deep background gradient ── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#1a0f04] via-[#0a0804] to-[#080808]" />
        {/* Top-right amber bloom */}
        <motion.div
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.18) 0%, transparent 70%)' }}
        />
        {/* Bottom-left bloom */}
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 11, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(180,120,60,0.12) 0%, transparent 70%)' }}
        />
        {/* Centre vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(8,8,8,0.6) 100%)' }} />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>

      {/* ── Thin horizontal rule ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,165,116,0.3)] to-transparent" />

      {/* ── Content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

        {/* Left ── text */}
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#d4a574]" />
            <span className="section-label">Discover Luxury</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#d4a574]" />
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="font-serif leading-[1.1] mb-6">
            The Art of<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #f0d090 0%, #d4a574 40%, #b8864e 70%, #e6b88a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Elegance
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={item} className="divider-gold mb-8 ml-0" style={{ margin: '0 0 2rem 0' }} />

          {/* Body */}
          <motion.p variants={item} className="text-[#a09890] text-lg font-light leading-relaxed mb-10 max-w-lg">
            Experience timeless sophistication. Each drop is a masterpiece—crafted with precision, inspired by nature, designed for those who understand that true luxury whispers rather than shouts.
          </motion.p>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: '100%', label: 'Natural Extracts' },
              { value: '18h',  label: 'Longevity' },
              { value: '3×',   label: 'Award Winning' },
            ].map((s) => (
              <div key={s.label} className="relative p-4 border border-[rgba(212,165,116,0.12)] bg-[rgba(212,165,116,0.03)] text-center">
                <p
                  className="text-2xl font-serif font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #f0d090, #d4a574)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[10px] tracking-[2px] uppercase text-[#666] mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Link href="/product">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="btn-primary">
                Discover the Scent
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="btn-secondary">
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right ── bottle */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center"
        >
          {/* Outer soft ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[340px] h-[340px] rounded-full"
            style={{ border: '1px solid rgba(212,165,116,0.08)' }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[420px] h-[420px] rounded-full"
            style={{ border: '1px dashed rgba(212,165,116,0.05)' }}
          />

          {/* Glow behind bottle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ opacity: [0.2, 0.45, 0.2], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-56 h-56 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.35) 0%, transparent 70%)' }}
            />
          </div>

          {/* Bottle card */}
          <div className="relative z-10 w-64 h-80 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-52 h-auto"
            >
              <HeroBottle />
            </motion.div>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="absolute top-8 -right-4 md:right-0 glass-card px-4 py-3 rounded-lg shadow-xl"
          >
            <p className="section-label mb-1">Eau de Parfum</p>
            <p className="text-white text-sm font-serif italic">Essence Noir</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-14 -left-4 md:left-0 glass-card px-4 py-3 rounded-lg shadow-xl"
          >
            <div className="flex gap-0.5 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}
                  style={{
                    background: 'linear-gradient(135deg,#f0d090,#d4a574)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontSize: 13,
                  }}
                >★</span>
              ))}
            </div>
            <p className="text-[11px] text-[#888]">4.9 · 2,400+ reviews</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label" style={{ letterSpacing: '5px', fontSize: '9px' }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#d4a574] to-transparent" />
      </motion.div>
    </section>
  )
}
