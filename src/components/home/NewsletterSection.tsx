'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="py-24 bg-dark-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
        <motion.div
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dark-bg border border-accent/30 mb-8"
        >
          <span className="text-2xl">✉️</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent text-xs tracking-[4px] uppercase mb-4"
        >
          ✦ Exclusive Access
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Be First to Know
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 font-light mb-10 text-lg leading-relaxed"
        >
          Join our inner circle. Get early access to new launches, exclusive member offers, and curated fragrance insights delivered to your inbox.
        </motion.p>

        {/* Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: '🎁', label: '10% off your first order' },
            { icon: '🔔', label: 'New launch alerts' },
            { icon: '✨', label: 'Members-only offers' },
          ].map((perk) => (
            <div key={perk.label} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{perk.icon}</span>
              <span>{perk.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          onSubmit={handleSubmit}
          className="relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-5 py-3.5 bg-dark-bg border border-dark-tertiary text-white placeholder-gray-600 focus:border-accent focus:outline-none transition-colors rounded-sm disabled:opacity-50"
          />
          <motion.button
            whileHover={{ scale: status === 'loading' ? 1 : 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border border-dark-bg border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </span>
            ) : status === 'success' ? (
              '✓ Subscribed!'
            ) : (
              'Subscribe'
            )}
          </motion.button>
        </motion.form>

        {/* Feedback messages */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-green-400 text-sm"
          >
            Welcome to the inner circle. Check your inbox for a welcome gift.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-400 text-sm"
          >
            Please enter a valid email address.
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-xs text-gray-600"
        >
          No spam, ever. Unsubscribe at any time. We respect your privacy.
        </motion.p>
      </div>
    </section>
  )
}
