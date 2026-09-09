'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Specifications() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const specs = [
    {
      title: 'Size & Volume',
      content: {
        '50ml': 'Travel-friendly size, perfect for on-the-go luxury.',
        '100ml': 'Our signature size, lasting 3-4 months with daily use.',
        '200ml': 'Reserve collection for true devotees.',
      },
    },
    {
      title: 'Longevity & Projection',
      content: {
        'Longevity': '12-18 hours of subtle presence',
        'Projection': 'Intimate to moderate—meant to be discovered, not announced',
        'Sillage': 'Elegant and refined, respecting personal space',
      },
    },
    {
      title: 'Ingredients',
      content: {
        'Alcohol': 'Premium grain alcohol (85%)',
        'Fragrance Concentration': '20% parfum (Eau de Parfum)',
        'Natural Extracts': 'Bergamot, Oud, Sandalwood, Jasmine',
        'Cruelty-Free': '✓ No animal testing, Vegan-approved',
      },
    },
    {
      title: 'Usage & Care',
      content: {
        'Application': 'Apply to pulse points: wrists, neck, behind ears',
        'Dosage': '2-3 spritzes per application',
        'Storage': 'Keep in a cool, dark place away from direct sunlight',
        'Shelf Life': '3-5 years when stored properly',
      },
    },
    {
      title: 'Sustainability',
      content: {
        'Bottle Material': 'Recycled glass with minimalist design',
        'Packaging': '100% recyclable, plastic-free',
        'Sourcing': 'Ethically sourced ingredients from fair-trade partners',
      },
    },
  ]

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Specifications</h2>
          <p className="text-lg text-gray-400">Everything you need to know about Essence Noir</p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="border border-dark-tertiary rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center bg-dark-secondary hover:bg-dark-tertiary transition-colors text-left"
              >
                <h3 className="text-lg font-serif font-bold text-white">{spec.title}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-accent"
                >
                  ▼
                </motion.div>
              </button>

              {/* Content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === idx ? 'auto' : 0,
                  opacity: expandedIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6 bg-dark-bg border-t border-dark-tertiary space-y-4">
                  {typeof spec.content === 'object' &&
                    Object.entries(spec.content).map(([key, value]) => (
                      <div key={key} className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <span className="text-accent font-semibold min-w-[150px]">{key}</span>
                        <span className="text-gray-400 font-light mt-2 md:mt-0 flex-1 md:text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
