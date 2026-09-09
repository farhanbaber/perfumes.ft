'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }

    setStatus('loading')

    // Simulate API call (replace with actual EmailJS/Formspree integration)
    setTimeout(() => {
      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
      
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 bg-dark-tertiary border border-dark-tertiary text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </motion.button>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`absolute bottom-0 left-0 right-0 p-3 text-center text-sm ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {message}
        </motion.div>
      )}
    </form>
  )
}
