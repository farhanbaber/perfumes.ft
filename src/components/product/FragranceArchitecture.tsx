'use client'

import { motion } from 'framer-motion'

export default function FragranceArchitecture() {
  const pyramid = [
    {
      tier: 'top',
      label: 'Top Notes',
      duration: '5-15 minutes',
      description: 'First Impression',
      notes: ['Bergamot', 'Grapefruit', 'Citrus'],
      color: 'from-yellow-400 to-orange-400',
    },
    {
      tier: 'heart',
      label: 'Heart Notes',
      duration: '1-4 hours',
      description: 'Core Identity',
      notes: ['Amber', 'Lavender', 'Jasmine'],
      color: 'from-purple-400 to-pink-400',
    },
    {
      tier: 'base',
      label: 'Base Notes',
      duration: '6-24 hours',
      description: 'Long-lasting Aura',
      notes: ['Oud', 'Sandalwood', 'Vanilla'],
      color: 'from-amber-700 to-amber-900',
    },
  ]

  return (
    <section className="py-24 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">The Olfactory Pyramid</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Understanding the three dimensions of our fragrance—a journey through time and sensation.
          </p>
        </motion.div>

        {/* Pyramid Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pyramid.map((tier, idx) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Tier Card */}
              <div className="relative h-full p-8 bg-dark-bg border border-dark-tertiary rounded-lg overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Number Indicator */}
                  <div className="inline-block mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center text-white font-bold`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold mb-2 text-white">
                    {tier.label}
                  </h3>

                  {/* Description */}
                  <p className="text-accent text-sm font-light mb-3">{tier.description}</p>

                  {/* Duration */}
                  <div className="inline-block mb-6 px-3 py-1 bg-dark-secondary border border-dark-tertiary rounded-full text-xs text-gray-300">
                    {tier.duration}
                  </div>

                  {/* Notes */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-accent tracking-widest">KEY INGREDIENTS</p>
                    <div className="flex flex-wrap gap-2">
                      {tier.notes.map((note) => (
                        <motion.span
                          key={note}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 bg-dark-secondary border border-dark-tertiary rounded-full text-xs text-gray-300 hover:text-accent hover:border-accent transition-colors"
                        >
                          {note}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-dark-bg border border-dark-tertiary rounded-lg text-center"
        >
          <p className="text-gray-400 mb-4">
            <span className="text-white font-semibold">The Journey:</span> Top notes create the initial impression, heart notes develop the character, and base notes provide the lasting impression.
          </p>
          <p className="text-sm text-gray-500">
            This carefully balanced composition ensures your fragrance evolves beautifully throughout the day.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
