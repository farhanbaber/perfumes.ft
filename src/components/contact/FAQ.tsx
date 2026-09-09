'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'Shipping & Returns',
      items: [
        {
          question: 'What is the shipping cost?',
          answer: 'Free shipping on all orders over $100. Standard shipping is $10 for orders under $100 and takes 5-7 business days. Express shipping is available for $25 (2-3 business days).',
        },
        {
          question: 'Can I return my order?',
          answer: 'Yes! We offer a 30-day money-back guarantee. If you\'re not completely satisfied, simply return the product in its original condition for a full refund, no questions asked.',
        },
        {
          question: 'How long does delivery take?',
          answer: 'Standard delivery: 5-7 business days. Express: 2-3 business days. International orders: 10-15 business days.',
        },
      ],
    },
    {
      category: 'Product Information',
      items: [
        {
          question: 'How long does the fragrance last?',
          answer: 'Essence Noir has a longevity of 12-18 hours on the skin. The exact duration depends on your skin type, body chemistry, and application method.',
        },
        {
          question: 'Is this fragrance suitable for all genders?',
          answer: 'Absolutely. Essence Noir is a unisex fragrance designed to complement anyone\'s unique chemistry. We believe luxury transcends gender.',
        },
        {
          question: 'What is the concentration of the fragrance?',
          answer: 'Essence Noir is an Eau de Parfum with 20% fragrance concentration, making it more potent and longer-lasting than Eau de Toilette.',
        },
      ],
    },
    {
      category: 'Care & Storage',
      items: [
        {
          question: 'How should I store my fragrance?',
          answer: 'Store in a cool, dark place away from direct sunlight and extreme temperatures. Keep the bottle sealed when not in use. Avoid storing in bathrooms where humidity is high.',
        },
        {
          question: 'How do I apply the fragrance correctly?',
          answer: 'Apply 2-3 spritzes to pulse points: wrists, neck, and behind the ears. Do not rub your wrists together, as this breaks the fragrance molecules.',
        },
        {
          question: 'How long will the fragrance last once opened?',
          answer: 'When stored properly, Essence Noir will maintain its quality for 3-5 years. The fragrance may gradually fade in intensity over time.',
        },
      ],
    },
  ]

  return (
    <section className="py-24 bg-dark-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400">Everything you need to know about our products and services.</p>
        </motion.div>

        {/* FAQs by Category */}
        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h3 className="text-2xl font-serif font-bold text-accent mb-6">{category.category}</h3>

              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const globalIndex = catIdx * 10 + itemIdx
                  
                  return (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIdx * 10 + itemIdx) * 0.05 }}
                      className="border border-dark-tertiary rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedIndex(expandedIndex === globalIndex ? null : globalIndex)}
                        className="w-full px-8 py-4 flex justify-between items-start bg-dark-bg hover:bg-dark-tertiary transition-colors text-left"
                      >
                        <span className="text-white font-semibold pr-4">{item.question}</span>
                        <motion.div
                          animate={{ rotate: expandedIndex === globalIndex ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-accent flex-shrink-0"
                        >
                          ▼
                        </motion.div>
                      </button>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: expandedIndex === globalIndex ? 'auto' : 0,
                          opacity: expandedIndex === globalIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 py-6 bg-dark-secondary border-t border-dark-tertiary">
                          <p className="text-gray-400 font-light leading-relaxed">{item.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
