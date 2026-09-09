'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_NUMBER = '1234567890' // ← replace with your actual WhatsApp number
const WA_MESSAGE = encodeURIComponent(
  'Hello! I came from your website and I\'m interested in Essence Noir. Could you help me?'
)
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Show tooltip once after 4 seconds
  useState(() => {
    const t = setTimeout(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 4000)
    }, 4000)
    return () => clearTimeout(t)
  })

  return (
    <div className="fixed bottom-24 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {(hovered || showTooltip) && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-gray-800 text-xs font-medium px-4 py-2.5 rounded-xl shadow-2xl whitespace-nowrap relative"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Chat with us on WhatsApp
            </span>
            {/* Arrow */}
            <div className="absolute right-3 -bottom-1.5 w-3 h-3 bg-white rotate-45 rounded-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 1.5 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        className="wa-pulse relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.346.636 4.638 1.84 6.648L2.667 29.333l6.872-1.8A13.267 13.267 0 0016.004 29.333c7.364 0 13.33-5.969 13.33-13.333S23.368 2.667 16.004 2.667zm0 24.267a11.01 11.01 0 01-5.615-1.537l-.402-.24-4.079 1.069 1.088-3.966-.262-.407A10.96 10.96 0 015.003 16c0-6.068 4.935-11.003 11.001-11.003S27.005 9.932 27.005 16c0 6.065-4.932 10.934-11.001 10.934zm6.034-8.197c-.33-.165-1.952-.963-2.254-1.073-.303-.11-.523-.165-.744.165-.22.33-.855 1.073-1.047 1.293-.193.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.637-.981-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.578-.083-.165-.744-1.793-1.019-2.455-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.882.412-.303.33-1.156 1.129-1.156 2.757s1.184 3.2 1.348 3.42c.165.22 2.33 3.558 5.648 4.99.79.34 1.406.543 1.887.694.793.252 1.514.216 2.085.131.636-.095 1.952-.798 2.227-1.568.275-.77.275-1.43.193-1.568-.083-.137-.303-.22-.633-.385z"/>
        </svg>

        {/* Online indicator dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
        </span>
      </motion.a>
    </div>
  )
}
