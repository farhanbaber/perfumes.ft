'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Alexandra Chen',
    role: 'Luxury Brand Director, Paris',
    content: 'Luxe Essence redefined my understanding of minimalist luxury. The fragrance is elegantly complex — understated yet utterly unforgettable. It speaks before you even enter the room.',
    rating: 5,
    initial: 'A',
  },
  {
    name: 'Marcus Sterling',
    role: 'Master Perfumer, London',
    content: 'Every element feels deeply intentional. From the sustainable glass bottle to the precise olfactory pyramid — this brand respects the true art of perfumery at the highest level.',
    rating: 5,
    initial: 'M',
  },
  {
    name: 'Sophia Gautier',
    role: 'Fashion Editor, Milan',
    content: 'Finally, a fragrance that matches my aesthetic completely. Luxe Essence is not just a scent — it is a statement of identity, the perfect complement to a life lived beautifully.',
    rating: 5,
    initial: 'S',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative py-28 bg-[#0c0a08] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(212,165,116,0.5) 0px, transparent 1px, transparent 80px)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,165,116,0.15)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,165,116,0.15)] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Testimonials</p>
          <div className="divider-gold mb-6" />
          <h2 className="text-5xl md:text-6xl font-serif">Loved by Connoisseurs</h2>
        </motion.div>

        {/* Large quote mark */}
        <div
          className="absolute top-32 left-1/2 -translate-x-1/2 text-[180px] font-serif leading-none pointer-events-none select-none"
          style={{ color: 'rgba(212,165,116,0.04)' }}
        >
          "
        </div>

        {/* Testimonial card */}
        <div className="relative min-h-[340px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center max-w-3xl mx-auto"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      background: 'linear-gradient(135deg, #f0d090, #d4a574)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: 22,
                    }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-serif italic text-[#d0ccc4] leading-relaxed mb-10">
                "{testimonials[active].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif font-bold mb-2"
                  style={{ background: 'linear-gradient(135deg, #d4a574, #8a5820)', color: '#080808' }}
                >
                  {testimonials[active].initial}
                </div>
                <p
                  className="font-semibold text-base"
                  style={{
                    background: 'linear-gradient(135deg, #f0d090, #d4a574)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {testimonials[active].name}
                </p>
                <p className="text-[#555] text-xs tracking-[2px] uppercase">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative h-px transition-all duration-500 focus:outline-none"
              style={{ width: i === active ? 40 : 20 }}
              aria-label={`Testimonial ${i + 1}`}
            >
              <span
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: i === active
                    ? 'linear-gradient(90deg, #d4a574, #f0d090)'
                    : 'rgba(212,165,116,0.25)',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
