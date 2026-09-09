'use client'

import { motion } from 'framer-motion'

export default function SocialConnect() {
  const contactMethods = [
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Chat with us directly for quick support',
      action: 'Chat Now',
      href: 'https://wa.me/1234567890',
    },
    {
      icon: '📧',
      title: 'Email',
      description: 'hello@luxeessence.com',
      action: 'Send Email',
      href: 'mailto:hello@luxeessence.com',
    },
    {
      icon: '📱',
      title: 'Instagram',
      description: 'Follow for exclusive updates and behind-the-scenes content',
      action: 'Follow',
      href: 'https://instagram.com/luxeessence',
    },
    {
      icon: '🏢',
      title: 'Brand HQ',
      description: 'Visit our showroom in the heart of the city',
      action: 'Learn More',
      href: '#',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif mb-6">Connect With Us</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Reach out through your preferred channel. We're here to answer questions and share the Luxe Essence experience.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              variants={item}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group relative p-8 bg-dark-secondary border border-dark-tertiary rounded-lg hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{method.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400 font-light mb-6">{method.description}</p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-light transition-colors"
                >
                  {method.action}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H5" />
                  </svg>
                </motion.button>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Response Time Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-dark-secondary border border-dark-tertiary rounded-lg text-center"
        >
          <p className="text-gray-300 mb-2">
            <span className="text-accent font-semibold">Response Time:</span> We typically respond within 24 hours.
          </p>
          <p className="text-sm text-gray-500">
            For urgent matters, WhatsApp is the fastest way to reach us during business hours (9 AM - 6 PM UTC).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
