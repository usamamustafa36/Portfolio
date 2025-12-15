'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypewriterProps {
  texts: string[]
  onComplete?: () => void
  className?: string
}

export default function Typewriter({ texts, onComplete, className = '' }: TypewriterProps) {
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [isTypingLine1, setIsTypingLine1] = useState(true)
  const [isTypingLine2, setIsTypingLine2] = useState(false)

  useEffect(() => {
    if (texts.length < 2) return

    const line1Text = texts[0] // "Usama Mustafa"
    const line2Text = texts[1] // "Portfolio"
    let timeout: NodeJS.Timeout

    if (isTypingLine1) {
      // Typing first line
      if (line1.length < line1Text.length) {
        timeout = setTimeout(() => {
          setLine1(line1Text.slice(0, line1.length + 1))
        }, 100)
      } else {
        // First line complete, start second line
        setIsTypingLine1(false)
        setIsTypingLine2(true)
      }
    } else if (isTypingLine2) {
      // Typing second line
      if (line2.length < line2Text.length) {
        timeout = setTimeout(() => {
          setLine2(line2Text.slice(0, line2.length + 1))
        }, 100)
      } else {
        // Both lines complete
        setIsTypingLine2(false)
        if (onComplete) {
          setTimeout(() => onComplete(), 1000)
        }
      }
    }

    return () => clearTimeout(timeout)
  }, [line1, line2, isTypingLine1, isTypingLine2, texts, onComplete])

  const textStyle = {
    background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #22c55e 100%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
    filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))',
  }

  return (
    <motion.div
      className={`text-center flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* First Line - Usama Mustafa */}
      <div className="flex items-center justify-center">
        <span 
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          style={textStyle}
        >
          {line1}
          {isTypingLine1 && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-1 h-12 md:h-16 lg:h-20 ml-2 align-middle"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
              }}
            />
          )}
        </span>
      </div>

      {/* Second Line - Portfolio */}
      {line1.length === texts[0]?.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center mt-4"
        >
          <span 
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={textStyle}
          >
            {line2}
            {isTypingLine2 && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-1 h-12 md:h-16 lg:h-20 ml-2 align-middle"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                }}
              />
            )}
          </span>
        </motion.div>
      )}
    </motion.div>
  )
}

