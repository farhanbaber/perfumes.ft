'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/product' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'py-3 bg-[#080808]/90 backdrop-blur-xl border-b border-[rgba(212,165,116,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* ── Logo ── */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-2xl font-serif font-bold tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #f0d090 0%, #d4a574 45%, #b8864e 75%, #e6b88a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Luxe Essence
            </span>
            <span className="text-[9px] tracking-[4px] text-[#d4a574]/60 uppercase font-light mt-0.5 ml-0.5">
              Maison de Parfum
            </span>
          </motion.div>
        </Link>

        {/* ── Desktop Nav ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-10"
        >
          {navItems.map((item, i) => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`relative text-[11px] font-light tracking-[3px] uppercase transition-colors duration-300 ${
                    active ? 'text-[#d4a574]' : 'text-gray-400 hover:text-[#d4a574]'
                  }`}
                >
                  {item.label}
                  {/* Active underline */}
                  <motion.span
                    layoutId="nav-underline"
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574] to-transparent ${
                      active ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </motion.span>
              </Link>
            )
          })}

          {/* CTA pill */}
          <Link href="/product">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[10px] tracking-[2px] uppercase px-5 py-2.5 border border-[rgba(212,165,116,0.5)] text-[#d4a574] hover:bg-[rgba(212,165,116,0.08)] hover:border-[#d4a574] transition-all duration-300 cursor-pointer"
            >
              Shop Now
            </motion.span>
          </Link>
        </motion.div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-px w-7 bg-[#d4a574] origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="block h-px w-5 bg-[#d4a574]"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block h-px w-7 bg-[#d4a574] origin-center"
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-[#080808]/95 backdrop-blur-xl border-b border-[rgba(212,165,116,0.15)]"
          >
            <div className="flex flex-col px-8 py-8 gap-7">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    <span className="text-sm tracking-[3px] uppercase text-gray-300 hover:text-[#d4a574] transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              {/* Mobile WhatsApp link */}
              <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 text-sm tracking-[2px] uppercase text-green-400"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4">
                  <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.346.636 4.638 1.84 6.648L2.667 29.333l6.872-1.8A13.267 13.267 0 0016.004 29.333c7.364 0 13.33-5.969 13.33-13.333S23.368 2.667 16.004 2.667zm6.034 18.07c-.33-.165-1.952-.963-2.254-1.073-.303-.11-.523-.165-.744.165-.22.33-.855 1.073-1.047 1.293-.193.22-.385.247-.715.082-.33-.165-1.393-.513-2.654-1.637-.981-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.147.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.578-.083-.165-.744-1.793-1.019-2.455-.268-.644-.54-.557-.744-.567l-.633-.011c-.22 0-.578.083-.882.412-.303.33-1.156 1.129-1.156 2.757s1.184 3.2 1.348 3.42c.165.22 2.33 3.558 5.648 4.99.79.34 1.406.543 1.887.694.793.252 1.514.216 2.085.131.636-.095 1.952-.798 2.227-1.568.275-.77.275-1.43.193-1.568-.083-.137-.303-.22-.633-.385z"/>
                </svg>
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
