'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'icon'
}

export default function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-6xl',
  }

  const iconSizes = {
    sm: 32,
    md: 44,
    lg: 80,
  }

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current && isHovered) {
        const rect = logoRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove)
    } else {
      mouseX.set(0)
      mouseY.set(0)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovered, mouseX, mouseY])

  return (
    <motion.div
      ref={logoRef}
      className={`flex items-center gap-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: 1000,
      }}
    >
      {/* Premium Logo Icon - Ultra Advanced Design */}
      <motion.div
        className="relative"
        style={{
          width: iconSizes[size],
          height: iconSizes[size],
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        animate={size === 'lg' ? {
          rotate: 360,
        } : {}}
        transition={size === 'lg' ? {
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
        } : {
          duration: 0.6,
          type: 'spring',
        }}
        whileHover={size !== 'lg' ? { 
          scale: 1.1,
          z: 50,
        } : {}}
      >
        {/* Outer Glow Rings - Multiple Layers */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, rgba(251, 191, 36, 0.4) 30%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.5) 0%, rgba(34, 197, 94, 0.3) 40%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main SVG Container */}
        <svg
          width={iconSizes[size]}
          height={iconSizes[size]}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
          style={{
            filter: size === 'lg' 
              ? 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6)) drop-shadow(0 0 60px rgba(251, 191, 36, 0.4))' 
              : 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))',
          }}
        >
          {/* Outer Metallic Ring - Premium Gold/Green Gradient */}
          <motion.circle
            cx="60"
            cy="60"
            r="55"
            fill="none"
            stroke="url(#metallicRing)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              strokeDasharray: ['0 350', '350 0'],
              strokeDashoffset: [0, 350],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Main Shield Structure - Hexagonal with Premium Design */}
          <motion.g
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Outer Hexagon Shield - Metallic Border */}
            <motion.path
              d="M 60 10 L 100 30 L 100 70 L 60 110 L 20 70 L 20 30 Z"
              stroke="url(#shieldGradient1)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                strokeDasharray: ['0 400', '400 0'],
                strokeDashoffset: [0, 400],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                strokeDasharray: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                },
                strokeDashoffset: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
            />

            {/* Middle Hexagon - Subtle Glow */}
            <path
              d="M 60 18 L 92 34 L 92 66 L 60 102 L 28 66 L 28 34 Z"
              stroke="url(#shieldGradient2)"
              strokeWidth="2"
              fill="url(#shieldFill)"
              opacity="0.3"
            />

            {/* Inner Hexagon - Core Structure */}
            <path
              d="M 60 26 L 84 38 L 84 62 L 60 94 L 36 62 L 36 38 Z"
              stroke="url(#shieldGradient3)"
              strokeWidth="1.5"
              fill="url(#coreFill)"
              opacity="0.5"
            />
          </motion.g>

          {/* Forward Arrow - Premium Design with Motion */}
          <motion.g
            animate={{
              x: [0, 3, 0],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Arrow Shaft - Metallic */}
            <motion.line
              x1="35"
              y1="60"
              x2="55"
              y2="60"
              stroke="url(#arrowGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              animate={{
                strokeDasharray: ['0 25', '25 0'],
                strokeDashoffset: [0, 25],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Arrow Head - Premium Pointed Design */}
            <motion.path
              d="M 50 45 L 65 60 L 50 75"
              stroke="url(#arrowGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.g>

          {/* Speed Lines - Multiple Dynamic Layers */}
          <g opacity="0.9">
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1={70 + i * 4}
                y1={45 + i * 15}
                x2={85 + i * 6}
                y2={45 + i * 15}
                stroke="url(#speedGradient)"
                strokeWidth={3 - i * 0.5}
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  x1: [70 + i * 4, 72 + i * 4, 70 + i * 4],
                  x2: [85 + i * 6, 90 + i * 6, 85 + i * 6],
                  pathLength: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </g>

          {/* Corner Accents - Premium Metallic Dots */}
          {[
            { x: 60, y: 10, r: 3 },
            { x: 100, y: 30, r: 2.5 },
            { x: 100, y: 70, r: 2.5 },
            { x: 60, y: 110, r: 3 },
            { x: 20, y: 70, r: 2.5 },
            { x: 20, y: 30, r: 2.5 },
          ].map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r={point.r}
              fill="url(#accentGradient)"
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Particle Effects - Floating Orbs */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const radius = 40
            return (
              <motion.circle
                key={i}
                cx={60 + Math.cos(angle) * radius}
                cy={60 + Math.sin(angle) * radius}
                r="1.5"
                fill="url(#particleGradient)"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  cx: [60 + Math.cos(angle) * radius, 60 + Math.cos(angle) * (radius + 5), 60 + Math.cos(angle) * radius],
                  cy: [60 + Math.sin(angle) * radius, 60 + Math.sin(angle) * (radius + 5), 60 + Math.sin(angle) * radius],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
              />
            )
          })}

          {/* Premium Gradient Definitions */}
          <defs>
            {/* Metallic Ring Gradient */}
            <linearGradient id="metallicRing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#22c55e" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#16a34a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
            </linearGradient>

            {/* Shield Gradients - Multiple Layers */}
            <linearGradient id="shieldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="30%" stopColor="#22c55e" />
              <stop offset="60%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>

            <linearGradient id="shieldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="shieldGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.6" />
            </linearGradient>

            {/* Shield Fill - Subtle Glow */}
            <linearGradient id="shieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#16a34a" stopOpacity="0.15" />
            </linearGradient>

            {/* Core Fill - Premium Inner Glow */}
            <radialGradient id="coreFill" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
            </radialGradient>

            {/* Arrow Gradient - Metallic Motion */}
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="30%" stopColor="#22c55e" />
              <stop offset="60%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>

            {/* Speed Lines Gradient */}
            <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
            </linearGradient>

            {/* Accent Gradient - Premium Metallic */}
            <radialGradient id="accentGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.7" />
            </radialGradient>

            {/* Particle Gradient */}
            <radialGradient id="particleGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
            </radialGradient>
          </defs>
        </svg>

        {/* Animated Glow Effect Behind Logo - Premium Multi-Layer */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.7) 0%, rgba(251, 191, 36, 0.5) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.9, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full blur-4xl"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(34, 197, 94, 0.3) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
      
      {/* Company Name - Ultra Premium Typography with Advanced Effects */}
      {variant === 'full' && (
        <motion.div className="relative">
          <motion.span
            className={`font-bold tracking-tight ${sizeClasses[size]} bg-gradient-to-r from-white via-green-400 via-amber-300 to-white bg-clip-text text-transparent relative text-gradient-premium`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: 1, 
              x: 0,
            }}
            transition={{ 
              opacity: { delay: 0.1, duration: 0.6 },
              x: { delay: 0.1, duration: 0.6 },
            }}
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.03em',
              textShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(251, 191, 36, 0.3)',
            }}
          >
            OUTLANCE
          </motion.span>
          
          {/* Text Glow Effect - Premium Multi-Layer */}
          <motion.span
            className={`absolute inset-0 font-bold ${sizeClasses[size]} bg-gradient-to-r from-green-400 via-amber-400 to-green-400 bg-clip-text text-transparent blur-md opacity-50`}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              letterSpacing: '-0.03em',
              backgroundSize: '200% 200%',
            }}
          >
            OUTLANCE
          </motion.span>

          {/* Shimmer Overlay */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['-200% 0', '200% 0'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}
