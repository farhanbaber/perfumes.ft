'use client'

import { motion } from 'framer-motion'

export default function ProductCTA() {
  return (
    <section className="py-24 bg-[#0c0a08]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-4">Limited Availability</p>
          <div className="divider-gold mb-8" />
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Ready to Discover?</h2>
          <p className="text-[#888] text-lg font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Essence Noir is more than a fragrance — it&apos;s an invitation to experience luxury redefined.
            Limited availability ensures exclusivity for those who appreciate the finer things.
          </p>

          {/* Feature icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '✨', label: 'Premium Quality' },
              { icon: '🌿', label: 'Eco-Friendly' },
              { icon: '🚚', label: 'Free Shipping' },
              { icon: '🔒', label: 'Authentic' },
            ].map((f) => (
              <motion.div
                key={f.label}
                whileHover={{ y: -4, borderColor: 'rgba(212,165,116,0.4)' }}
                className="p-5 border border-[rgba(212,165,116,0.1)] bg-[rgba(212,165,116,0.02)] transition-all duration-300"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="text-xs tracking-wider text-[#888]">{f.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="p-6 border border-[rgba(212,165,116,0.15)] bg-[rgba(212,165,116,0.03)]">
            <p className="text-sm text-[#888]">
              <span className="text-[#d4a574] font-semibold">30-Day Money-Back Guarantee —</span>{' '}
              Not completely satisfied? Full refund, no questions asked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
