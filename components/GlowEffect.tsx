'use client'

import { motion } from 'framer-motion'

interface GlowEffectProps {
  children: React.ReactNode
  className?: string
}

export default function GlowEffect({ children, className = '' }: GlowEffectProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: 1.02,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {children}
    </motion.div>
  )
}

