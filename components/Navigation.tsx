'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'glass-strong border-b border-gold-500/10 shadow-2xl shadow-navy-950/80'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Name mark */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
            aria-label="Usama Mustafa — go to top"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-navy-900 font-black text-sm"
              style={{ background: 'linear-gradient(135deg, #E0C580, #C9A84C)' }}
            >
              UM
            </div>
            <span className="hidden sm:block text-sm font-semibold text-white/80 tracking-wider" style={{ letterSpacing: '0.1em' }}>
              USAMA MUSTAFA
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1" role="menubar">
            {navItems.map((item, index) => (
              <li key={item.name} role="none">
                <motion.a
                  href={item.href}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="relative px-5 py-2.5 text-xs font-semibold text-white/70 hover:text-white transition-all duration-300 group tracking-widest"
                  style={{ letterSpacing: '0.1em' }}
                  role="menuitem"
                >
                  {item.name.toUpperCase()}
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-gold-500/0 via-gold-400 to-gold-500/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"
                    initial={false}
                    aria-hidden="true"
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gold-500/10"
            style={{ background: 'rgba(7,16,32,0.97)', backdropFilter: 'blur(24px)' }}
            id="mobile-menu"
            role="menu"
          >
            <ul className="px-6 py-5 space-y-1">
              {navItems.map((item, index) => (
                <li key={item.name} role="none">
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ delay: index * 0.06 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-xs font-semibold text-white/70 hover:text-gold-300 hover:bg-gold-500/5 rounded-lg transition-all duration-300 min-h-[44px] flex items-center tracking-widest"
                    style={{ letterSpacing: '0.12em' }}
                    role="menuitem"
                  >
                    {item.name.toUpperCase()}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
