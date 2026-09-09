'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      // In production, integrate with EmailJS or Formspree
      console.log('Form submitted:', data)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      reset()
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-400">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-accent mb-2">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full px-6 py-3 bg-dark-secondary border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-dark-tertiary focus:border-accent'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </motion.div>

          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-accent mb-2">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
              })}
              className={`w-full px-6 py-3 bg-dark-secondary border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.email ? 'border-red-500' : 'border-dark-tertiary focus:border-accent'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </motion.div>

          {/* Subject Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-accent mb-2">Subject</label>
            <input
              type="text"
              {...register('subject', { required: 'Subject is required' })}
              className={`w-full px-6 py-3 bg-dark-secondary border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                errors.subject ? 'border-red-500' : 'border-dark-tertiary focus:border-accent'
              }`}
              placeholder="How can we help?"
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
          </motion.div>

          {/* Message Field */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-accent mb-2">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              rows={6}
              className={`w-full px-6 py-3 bg-dark-secondary border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-dark-tertiary focus:border-accent'
              }`}
              placeholder="Your message here..."
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </motion.div>

          {/* Status Message */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-900/30 border border-green-500/50 rounded text-green-400 text-center"
            >
              ✓ Message sent successfully! We'll be in touch soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-900/30 border border-red-500/50 rounded text-red-400 text-center"
            >
              ✗ Something went wrong. Please try again.
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
