'use client'

import { motion } from 'framer-motion'

export default function AnimatedGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Scientifically optimized gradient system - smooth, non-flashing */}
      {/* Primary ambient glow - very subtle, slow movement */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
                       radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.06) 0%, transparent 60%)`,
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1], // Smooth ease-in-out
        }}
      />
      
      {/* Secondary ambient layer - even more subtle */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 60% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 70%),
                       radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.04) 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
          delay: 1,
        }}
      />
      
      {/* Static base layer for stability - no animation */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.03) 0%, transparent 80%)`,
        }}
      />
    </div>
  )
}

