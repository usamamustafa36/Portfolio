'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Rocket, Building2, BookOpen, Star } from 'lucide-react'

const stats = [
  {
    number: 45,
    suffix: '+',
    label: 'Projects Delivered',
    icon: Rocket,
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-500/20 to-emerald-600/10',
  },
  {
    number: 18,
    suffix: '+',
    label: 'Enterprise Clients',
    icon: Building2,
    gradient: 'from-amber-500 to-yellow-600',
    bgGradient: 'from-amber-500/20 to-yellow-600/10',
  },
  {
    number: 12,
    suffix: '+',
    label: 'Research Publications',
    icon: BookOpen,
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-500/20 to-pink-600/10',
  },
  {
    number: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: Star,
    gradient: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-500/20 to-cyan-600/10',
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
      {Math.floor(count)}
      {suffix}
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-4" style={{ letterSpacing: '-0.03em' }}>
            <span className="text-gradient-premium">Impact</span>{' '}
            <span className="text-white">Metrics</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed px-4" style={{ letterSpacing: '0.01em' }}>
            Proven results and measurable impact. These numbers reflect our commitment 
            to delivering exceptional value and driving innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  rotateY: 5,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-white/30 transition-all text-center group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Premium Icon Container */}
                <motion.div
                  className="relative mb-6 flex justify-center"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -15, 15, -10, 0],
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl group-hover:shadow-${stat.gradient.split(' ')[0].split('-')[1]}-500/60 transition-all duration-700 glow-green`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 text-white relative z-10 stroke-[2.5] drop-shadow-lg" />
                    
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)`,
                      }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Number */}
                <div className="relative z-10 mb-2 sm:mb-3">
                  <div className="text-gradient-green text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                </div>
                
                {/* Label */}
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300 relative z-10 break-words px-2">
                  {stat.label}
                </h3>
                
                {/* Decorative corner accent */}
                <motion.div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

