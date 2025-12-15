'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoAnimation from '@/components/LogoAnimation'
import Typewriter from '@/components/Typewriter'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [typewriterComplete, setTypewriterComplete] = useState(false)

  useEffect(() => {
    // Ensure loading screen shows on every page load
    setIsLoading(true)
    document.body.style.overflow = 'hidden'

    // After typewriter completes, show main website
    const completeTimer = setTimeout(() => {
      if (typewriterComplete) {
        setIsLoading(false)
        setTimeout(() => {
          document.body.style.overflow = 'auto'
        }, 300)
      }
    }, 10000) // Max 10 seconds total

    return () => {
      clearTimeout(completeTimer)
      document.body.style.overflow = 'auto'
    }
  }, [typewriterComplete])

  const handleTypewriterComplete = () => {
    setTypewriterComplete(true)
    setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        document.body.style.overflow = 'auto'
      }, 800)
    }, 500)
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden gap-12"
        >
          {/* Logo and Typewriter appear simultaneously */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center relative"
          >
            <LogoAnimation size={280} />
          </motion.div>

          {/* Typewriter below logo */}
          {!typewriterComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <Typewriter
                texts={['Usama Mustafa', 'Portfolio']}
                onComplete={handleTypewriterComplete}
                className="min-h-[100px] flex items-center justify-center"
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

