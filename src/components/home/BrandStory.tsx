'use client'

import { motion } from 'framer-motion'

const values = [
  {
    number: '01',
    title: 'Minimalist Design',
    description: 'Clean lines, purposeful aesthetics. Every element serves a purpose — no excess, only refinement.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Artisanal Craft',
    description: 'Each bottle is meticulously created by hand, with obsessive attention to every last detail.',
    icon: '◈',
  },
  {
    number: '03',
    title: 'Sustainable Luxury',
    description: 'Ethically sourced ingredients, recycled glass, and carbon-neutral shipping. Luxury with a conscience.',
    icon: '◎',
  },
  {
    number: '04',
    title: 'Timeless Appeal',
    description: 'A fragrance that transcends trends and seasons — designed to become your signature forever.',
    icon: '◇',
  },
]

export default function BrandStory() {
  return (
    <section className="relative py-28 bg-[#080808] overflow-hidden">
      {/* Subtle bg line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,165,116,0.06)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Our Philosophy</p>
          <div className="divider-gold mb-6" />
          <h2 className="text-5xl md:text-6xl font-serif mb-6">
            Crafted for the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f0d090, #d4a574, #e6b88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discerning
            </span>
          </h2>
          <p className="text-[#888] text-lg font-light max-w-2xl mx-auto leading-relaxed">
            We believe luxury is found in simplicity. Every element of Luxe Essence reflects our commitment to elegance, authenticity, and uncompromising excellence.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              whileHover={{ y: -4 }}
              className="group relative p-8 border border-[rgba(212,165,116,0.1)] bg-[rgba(212,165,116,0.02)] overflow-hidden transition-all duration-500 hover:border-[rgba(212,165,116,0.3)] hover:bg-[rgba(212,165,116,0.04)]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,165,116,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-3xl font-serif"
                  style={{
                    background: 'linear-gradient(135deg, #f0d090, #d4a574)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {v.icon}
                </span>
                <span className="text-[11px] tracking-[3px] text-[rgba(212,165,116,0.4)] font-light">{v.number}</span>
              </div>

              <h3 className="text-xl font-serif font-semibold text-white mb-3 group-hover:text-[#e6b88a] transition-colors duration-300">
                {v.title}
              </h3>
              <p className="text-[#888] font-light text-sm leading-relaxed">{v.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#d4a574] to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Brand quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="divider-gold mb-8" />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-[#c8c0b0] max-w-3xl mx-auto leading-relaxed">
            "Perfume is the art that makes memory speak."
          </blockquote>
          <p className="text-[#555] text-xs tracking-[3px] uppercase mt-4">— The Luxe Essence Philosophy</p>
        </motion.div>
      </div>
    </section>
  )
}
