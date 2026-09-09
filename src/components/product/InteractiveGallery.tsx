'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Bottle SVG ─────────────────────────────────────── */
function BottleView({ view }: { view: string }) {
  const rotations: Record<string, string> = {
    front:     'rotateY(0deg)',
    side:      'rotateY(28deg)',
    top:       'rotateX(38deg)',
    packaging: 'rotateY(-12deg) rotateX(6deg)',
  }
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ perspective: '900px' }}>
      <div style={{ transform: rotations[view] ?? 'rotateY(0deg)', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
        <svg viewBox="0 0 200 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-auto drop-shadow-2xl">
          <rect x="72" y="20" width="56" height="30" rx="6" fill="#d4a574" opacity="0.9"/>
          <rect x="80" y="14" width="40" height="12" rx="4" fill="#e6b88a"/>
          <rect x="92" y="8" width="16" height="8" rx="3" fill="#c49060"/>
          <rect x="98" y="2" width="4" height="8" rx="1" fill="#b07840"/>
          <rect x="82" y="50" width="36" height="40" rx="4" fill="url(#nkG)"/>
          <path d="M64 92 Q62 112 52 132 L52 278 Q52 298 100 298 Q148 298 148 278 L148 132 Q138 112 136 92 Z" fill="url(#bdG)"/>
          <path d="M68 100 Q66 120 58 140 L58 240 L66 240 L66 140 Q72 120 74 100 Z" fill="white" opacity="0.065"/>
          <path d="M132 100 Q134 120 142 140 L142 200 L134 200 L134 140 Q128 120 126 100 Z" fill="white" opacity="0.035"/>
          <path d="M54 162 L146 162 L146 278 Q146 292 100 292 Q54 292 54 278 Z" fill="url(#lqG)" opacity="0.5"/>
          <rect x="62" y="172" width="76" height="90" rx="4" fill="#0e0e0e" opacity="0.65"/>
          <rect x="64" y="174" width="72" height="86" rx="3" fill="none" stroke="url(#lbG)" strokeWidth="0.8"/>
          <rect x="69" y="179" width="62" height="76" rx="2" fill="none" stroke="#d4a574" strokeWidth="0.25" opacity="0.3"/>
          <text x="100" y="200" textAnchor="middle" fill="url(#gtx)" fontSize="7.5" fontFamily="Georgia,serif" letterSpacing="3.5">LUXE</text>
          <text x="100" y="213" textAnchor="middle" fill="url(#gtx)" fontSize="7.5" fontFamily="Georgia,serif" letterSpacing="3.5">ESSENCE</text>
          <line x1="74" y1="219" x2="126" y2="219" stroke="url(#lnG)" strokeWidth="0.6"/>
          <text x="100" y="235" textAnchor="middle" fill="#e6c090" fontSize="12" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.95">Essence Noir</text>
          <text x="100" y="250" textAnchor="middle" fill="#888" fontSize="5.5" fontFamily="Arial,sans-serif" letterSpacing="2.5" opacity="0.9">100 ml  ·  EAU DE PARFUM</text>
          <ellipse cx="100" cy="298" rx="50" ry="7" fill="url(#shG)" opacity="0.28"/>
          <defs>
            <linearGradient id="nkG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6a4820"/><stop offset="40%" stopColor="#d4a060"/><stop offset="100%" stopColor="#5a3810"/>
            </linearGradient>
            <linearGradient id="bdG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1a1208"/><stop offset="28%" stopColor="#d4a574" stopOpacity="0.22"/>
              <stop offset="58%" stopColor="#f8e8c8" stopOpacity="0.10"/><stop offset="100%" stopColor="#120c04"/>
            </linearGradient>
            <linearGradient id="lqG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="0.5"/><stop offset="100%" stopColor="#4a2c08" stopOpacity="0.8"/>
            </linearGradient>
            <linearGradient id="lbG" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f0d090"/><stop offset="50%" stopColor="#d4a574"/><stop offset="100%" stopColor="#8a5820"/>
            </linearGradient>
            <linearGradient id="gtx" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f0d090"/><stop offset="50%" stopColor="#d4a574"/><stop offset="100%" stopColor="#e6b870"/>
            </linearGradient>
            <linearGradient id="lnG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent"/><stop offset="50%" stopColor="#d4a574"/><stop offset="100%" stopColor="transparent"/>
            </linearGradient>
            <radialGradient id="shG" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="0.6"/><stop offset="100%" stopColor="#d4a574" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

/* ── View thumbnails ────────────────────────────────── */
const views = [
  { id: 'front',     label: 'Front',     icon: '🧴', desc: 'The iconic silhouette — clean, minimal, unmistakable.' },
  { id: 'side',      label: 'Side',      icon: '↔️', desc: 'Elegant curves crafted from premium recycled glass.' },
  { id: 'top',       label: "Bird's Eye", icon: '⬆️', desc: 'Precision-engineered spray nozzle, gilded in gold.' },
  { id: 'packaging', label: 'Gift Box',  icon: '📦', desc: 'Every order arrives in our signature matte black box.' },
]

const sizes = [
  { label: '50ml',  price: 129 },
  { label: '100ml', price: 189 },
  { label: '200ml', price: 279 },
]

/* ── Main component ─────────────────────────────────── */
export default function InteractiveGallery() {
  const [selected, setSelected]       = useState(0)
  const [activeSize, setActiveSize]   = useState(1)          // default 100ml
  const [qty, setQty]                 = useState(1)
  const [cartState, setCartState]     = useState<'idle' | 'added'>('idle')

  const handleCart = () => {
    setCartState('added')
    setTimeout(() => setCartState('idle'), 2200)
  }

  return (
    <section className="py-16 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Page heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="section-label mb-3">✦ Product Gallery</p>
          <div className="divider-gold mb-5" />
          <h1 className="text-5xl md:text-6xl font-serif">Essence Noir</h1>
          <p className="text-[#666] mt-3 font-light text-sm tracking-widest">EAU DE PARFUM</p>
        </motion.div>

        {/* ── 3-column layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Col 1 — thumbnail selector */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <p className="section-label mb-1">Select View</p>
            {views.map((v, i) => (
              <motion.button
                key={v.id}
                onClick={() => setSelected(i)}
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-3 p-3.5 border transition-all duration-300 text-left ${
                  selected === i
                    ? 'border-[rgba(212,165,116,0.6)] bg-[rgba(212,165,116,0.06)]'
                    : 'border-[rgba(212,165,116,0.1)] bg-transparent hover:border-[rgba(212,165,116,0.3)]'
                }`}
              >
                <div className={`w-9 h-9 flex items-center justify-center text-lg shrink-0 border ${
                  selected === i ? 'border-[#d4a574]/40 bg-[#d4a574]/10' : 'border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]'
                }`}>
                  {v.icon}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-semibold tracking-wider ${selected === i ? 'text-[#d4a574]' : 'text-[#aaa]'}`}>
                    {v.label}
                  </p>
                  <p className="text-[10px] text-[#555] mt-0.5 truncate">{v.desc}</p>
                </div>
              </motion.button>
            ))}

            {/* Quick facts */}
            <div className="mt-4 p-4 border border-[rgba(212,165,116,0.1)] bg-[rgba(212,165,116,0.02)] space-y-2.5">
              <p className="section-label mb-3">Quick Facts</p>
              {[
                ['Concentration', 'Eau de Parfum'],
                ['Longevity',     '12–18 hours'],
                ['Gender',        'Unisex'],
                ['Origin',        'Handcrafted'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-xs">
                  <span className="text-[#555]">{k}</span>
                  <span className="text-[#aaa]">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — main bottle display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <div className="relative border border-[rgba(212,165,116,0.12)] bg-gradient-to-b from-[#111009] to-[#080808] aspect-square flex items-center justify-center overflow-hidden">
              {/* Ambient glow */}
              <motion.div
                animate={{ opacity: [0.1, 0.22, 0.1], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute w-48 h-48 rounded-full blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,165,116,0.4) 0%, transparent 70%)' }}
              />
              {/* Corner marks */}
              {[['top-3 left-3 border-t border-l',''],['top-3 right-3 border-t border-r',''],
                ['bottom-3 left-3 border-b border-l',''],['bottom-3 right-3 border-b border-r','']].map(([cls],i) => (
                <div key={i} className={`absolute w-5 h-5 ${cls} border-[rgba(212,165,116,0.3)]`} />
              ))}

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 w-full h-full"
                >
                  <BottleView view={views[selected].id} />
                </motion.div>
              </AnimatePresence>

              {/* View badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[rgba(8,8,8,0.7)] backdrop-blur border border-[rgba(212,165,116,0.15)] text-[10px] text-[#888] tracking-widest">
                {views[selected].label.toUpperCase()}
              </div>
            </div>

            {/* View description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={selected}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-3 text-center text-[#555] text-xs font-light tracking-wide"
              >
                {views[selected].desc}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Col 3 — compact buy panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {/* Product name + price */}
            <div className="border-b border-[rgba(212,165,116,0.1)] pb-5">
              <p className="section-label mb-1">Signature Fragrance</p>
              <h2 className="text-3xl font-serif italic text-white mb-1">Essence Noir</h2>
              <div className="flex items-baseline gap-2 mt-3">
                <span
                  className="text-3xl font-serif font-bold"
                  style={{
                    background: 'linear-gradient(135deg,#f0d090,#d4a574)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ${sizes[activeSize].price}
                </span>
                <span className="text-[#555] text-xs">Free shipping over $100</span>
              </div>
              {/* Stars */}
              <div className="flex items-center gap-1.5 mt-2">
                {Array.from({length:5}).map((_,i) => (
                  <span key={i} style={{ color:'#d4a574', fontSize:13 }}>★</span>
                ))}
                <span className="text-[#555] text-xs ml-1">4.9 (2,400+)</span>
              </div>
            </div>

            {/* Size selector */}
            <div>
              <p className="section-label mb-3">Select Size</p>
              <div className="flex gap-2">
                {sizes.map((s, i) => (
                  <motion.button
                    key={s.label}
                    onClick={() => setActiveSize(i)}
                    whileTap={{ scale: 0.94 }}
                    className={`flex-1 py-2.5 text-xs font-semibold tracking-widest border transition-all duration-300 ${
                      activeSize === i
                        ? 'border-[#d4a574] bg-[rgba(212,165,116,0.12)] text-[#d4a574]'
                        : 'border-[rgba(212,165,116,0.15)] text-[#666] hover:border-[rgba(212,165,116,0.4)] hover:text-[#aaa]'
                    }`}
                  >
                    {s.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="section-label mb-3">Quantity</p>
              <div className="flex items-center border border-[rgba(212,165,116,0.2)] w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="px-4 py-2 text-[#888] hover:text-[#d4a574] hover:bg-[rgba(212,165,116,0.06)] transition-colors text-lg leading-none"
                >
                  −
                </button>
                <span className="px-5 py-2 text-white text-sm font-semibold border-x border-[rgba(212,165,116,0.2)] min-w-[3rem] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="px-4 py-2 text-[#888] hover:text-[#d4a574] hover:bg-[rgba(212,165,116,0.06)] transition-colors text-lg leading-none"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <motion.button
              onClick={handleCart}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full py-3.5 text-xs font-bold tracking-[2px] uppercase transition-all duration-300 ${
                cartState === 'added'
                  ? 'bg-green-700 text-white'
                  : 'btn-primary'
              }`}
            >
              {cartState === 'added' ? '✓ Added to Cart' : `Add to Cart — $${sizes[activeSize].price * qty}`}
            </motion.button>

            {/* Buy now */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full btn-secondary py-3.5 text-xs tracking-[2px]"
            >
              Buy Now
            </motion.button>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {[
                ['🔒', 'Secure Checkout'],
                ['🚚', 'Free Shipping'],
                ['↩️', '30-Day Returns'],
                ['✓', 'Authentic Guarantee'],
              ].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 text-[10px] text-[#555]">
                  <span className="text-sm">{icon}</span>
                  {label}
                </div>
              ))}
            </div>

            {/* WhatsApp enquiry */}
            <a
              href="https://wa.me/1234567890?text=Hi%2C%20I%27d%20like%20to%20order%20Essence%20Noir!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3 border border-green-800/40 bg-green-900/10 text-green-400 text-xs tracking-widest hover:border-green-600 hover:bg-green-900/20 transition-all duration-300"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.346.636 4.638 1.84 6.648L2.667 29.333l6.872-1.8A13.267 13.267 0 0016.004 29.333c7.364 0 13.33-5.969 13.33-13.333S23.368 2.667 16.004 2.667zm6.034 18.07c-.33-.165-1.952-.963-2.254-1.073-.303-.11-.523-.165-.744.165-.22.33-.855 1.073-1.047 1.293-.193.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.637-.981-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.578-.083-.165-.744-1.793-1.019-2.455-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.882.412-.303.33-1.156 1.129-1.156 2.757s1.184 3.2 1.348 3.42c.165.22 2.33 3.558 5.648 4.99.79.34 1.406.543 1.887.694.793.252 1.514.216 2.085.131.636-.095 1.952-.798 2.227-1.568.275-.77.275-1.43.193-1.568-.083-.137-.303-.22-.633-.385z"/>
              </svg>
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
