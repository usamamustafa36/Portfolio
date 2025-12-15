'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
}

export default function GlitchText({ text, className = '', delay = 0 }: GlitchTextProps) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`relative inline-block ${className}`}
    >
      <span className={`relative z-10 inline-block ${glitch ? 'animate-glitch' : ''}`}>
        {text}
      </span>
      {glitch && (
        <>
          <span
            className="absolute inset-0 z-0 bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent blur-sm animate-glitch-split"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
          >
            {text}
          </span>
          <span
            className="absolute inset-0 z-0 bg-gradient-to-r from-beige-400 to-beige-300 bg-clip-text text-transparent blur-sm animate-glitch-split-reverse"
            style={{ clipPath: 'inset(50% 0 0 0)' }}
          >
            {text}
          </span>
        </>
      )}
    </motion.span>
  )
}

