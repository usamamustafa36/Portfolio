'use client'

import { motion } from 'framer-motion'

interface LogoAnimationProps {
  size?: number
}

export default function LogoAnimation({ size = 200 }: LogoAnimationProps) {
  return (
    <motion.div 
      className="relative" 
      style={{ width: size, height: size }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        {/* Outer Metallic Ring - Draws first with smooth animation */}
        <motion.circle
          cx="60"
          cy="60"
          r="55"
          fill="none"
          stroke="url(#metallicRing)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0, rotate: -90 }}
          animate={{ pathLength: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            pathLength: { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.8, ease: 'easeOut' },
            rotate: { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
        />

        {/* Outer Hexagon Shield - Draws second with elegant timing */}
        <motion.path
          d="M 60 10 L 100 30 L 100 70 L 60 110 L 20 70 L 20 30 Z"
          stroke="url(#shieldGradient1)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0, scale: 0.95 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ 
            pathLength: { duration: 1.6, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.6, delay: 0.2, ease: 'easeOut' },
            scale: { duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
          }}
        />

        {/* Middle Hexagon - Draws third with fill animation */}
        <motion.path
          d="M 60 18 L 92 34 L 92 66 L 60 102 L 28 66 L 28 34 Z"
          stroke="url(#shieldGradient2)"
          strokeWidth="2"
          fill="url(#shieldFill)"
          initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4, fillOpacity: 0.3 }}
          transition={{ 
            pathLength: { duration: 1.3, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.8, delay: 0.5, ease: 'easeOut' },
            fillOpacity: { duration: 0.6, delay: 1.2, ease: 'easeOut' }
          }}
        />

        {/* Inner Hexagon - Draws fourth with core glow */}
        <motion.path
          d="M 60 26 L 84 38 L 84 62 L 60 94 L 36 62 L 36 38 Z"
          stroke="url(#shieldGradient3)"
          strokeWidth="1.5"
          fill="url(#coreFill)"
          initial={{ pathLength: 0, opacity: 0, fillOpacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6, fillOpacity: 0.5 }}
          transition={{ 
            pathLength: { duration: 1.1, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.7, delay: 0.8, ease: 'easeOut' },
            fillOpacity: { duration: 0.5, delay: 1.5, ease: 'easeOut' }
          }}
        />

        {/* Arrow Shaft - Draws fifth with momentum */}
        <motion.line
          x1="35"
          y1="60"
          x2="55"
          y2="60"
          stroke="url(#arrowGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0, x: -2 }}
          animate={{ pathLength: 1, opacity: 1, x: 0 }}
          transition={{ 
            pathLength: { duration: 0.9, delay: 1.1, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.5, delay: 1.1, ease: 'easeOut' },
            x: { duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }
          }}
        />

        {/* Arrow Head - Draws last with impact */}
        <motion.path
          d="M 50 45 L 65 60 L 50 75"
          stroke="url(#arrowGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0, scale: 0.9 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ 
            pathLength: { duration: 0.7, delay: 1.4, ease: [0.43, 0.13, 0.23, 0.96] },
            opacity: { duration: 0.4, delay: 1.4, ease: 'easeOut' },
            scale: { duration: 0.5, delay: 1.8, ease: [0.34, 1.56, 0.64, 1] }
          }}
        />

        {/* Speed Lines - Appear after arrow with sequential reveal */}
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
            initial={{ pathLength: 0, opacity: 0, x: -5 }}
            animate={{ pathLength: 1, opacity: 0.95, x: 0 }}
            transition={{ 
              pathLength: { duration: 0.5, delay: 1.7 + i * 0.08, ease: [0.43, 0.13, 0.23, 0.96] },
              opacity: { duration: 0.4, delay: 1.7 + i * 0.08, ease: 'easeOut' },
              x: { duration: 0.5, delay: 1.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }
            }}
          />
        ))}

        {/* Corner Accents - Appear last with elegant pop */}
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
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 2.0 + i * 0.08,
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
          />
        ))}

        {/* Particle Effects - Final touch with radial burst */}
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
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 1],
                x: [0, Math.cos(angle) * 3, 0],
                y: [0, Math.sin(angle) * 3, 0],
              }}
              transition={{ 
                scale: { duration: 0.6, delay: 2.4 + i * 0.06, ease: [0.34, 1.56, 0.64, 1] },
                opacity: { duration: 0.4, delay: 2.4 + i * 0.06, ease: 'easeOut' },
                x: { duration: 0.8, delay: 2.4 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
                y: { duration: 0.8, delay: 2.4 + i * 0.06, ease: [0.22, 1, 0.36, 1] }
              }}
            />
          )
        })}

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="metallicRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#22c55e" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="75%" stopColor="#16a34a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
          </linearGradient>

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

          <linearGradient id="shieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.15" />
          </linearGradient>

          <radialGradient id="coreFill" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
          </radialGradient>

          <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="30%" stopColor="#22c55e" />
            <stop offset="60%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>

          <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
          </linearGradient>

          <radialGradient id="accentGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.7" />
          </radialGradient>

          <radialGradient id="particleGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>

      {/* Multi-layer glow effects - building up */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, rgba(16, 185, 129, 0.3) 40%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-0 rounded-full blur-4xl"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 70%)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 1.4, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Final pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 60%)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0, 0.8, 0.6],
          scale: [0.9, 1.15, 1],
        }}
        transition={{ 
          duration: 1.5, 
          delay: 2.9, 
          ease: [0.22, 1, 0.36, 1],
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5
        }}
      />
    </motion.div>
  )
}

