'use client'

import { } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import ParticleBackground from '@/components/ParticleBackground'
import FloatingShapes from '@/components/FloatingShapes'
import AnimatedGradient from '@/components/AnimatedGradient'
import MagneticButton from '@/components/MagneticButton'
import Logo from '@/components/Logo'

const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false })

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen sm:min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-0"
    >
      {/* Animated Background Layers */}
      <AnimatedGradient />
      <FloatingShapes />
      <ParticleBackground />
      
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Stable Gradient Overlay - No Pulsing */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-900/90 to-slate-950/95 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/15 via-transparent to-green-950/15 z-10" />
      {/* Static subtle glow - no animation */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                       radial-gradient(circle at 70% 60%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)`,
        }}
      />

      {/* Premium Content Container with Glass Effect */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Static glass container - no animation */}
        <div className="absolute inset-0 -z-10 rounded-3xl glass opacity-20 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-8 md:space-y-12"
        >
          {/* Premium Logo - Icon Only with Enhanced Entrance */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.2, 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              type: 'spring',
              stiffness: 100,
            }}
            className="mb-12 relative"
            style={{ perspective: 1000 }}
          >
            {/* Additional glow effect for hero */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-full blur-4xl"
              style={{
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(251, 191, 36, 0.3) 50%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className="flex justify-center">
              <Logo size="lg" variant="icon" />
            </div>
          </motion.div>


          {/* Compact Name Display with Rich Content */}
          <div className="relative mb-8">
            {/* Smaller Name Display */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-3 sm:mb-4 relative text-center px-2"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.03em',
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              {/* First Name */}
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block relative"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #34d399 50%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                USAMA
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 w-3/4"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.span>
              
              {/* Last Name */}
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block relative mt-1"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #ffffff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MUSTAFA
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400 w-3/4"
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.span>
            </motion.h1>

            {/* Compact Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-6 mb-4 sm:mb-6 px-4"
            >
              <div className="hidden md:block h-px w-16 bg-gradient-to-r from-transparent via-green-500 to-green-500" />
              <div className="text-center">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wider text-white/90 mb-1">
                  POST-QUANTUM
                </div>
                <div
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium tracking-wide px-2"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  CRYPTOGRAPHY RESEARCHER
                </div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-green-400/80 mt-1">
                  PhD Candidate • NUST
                </div>
              </div>
              <div className="hidden md:block h-px w-16 bg-gradient-to-l from-transparent via-green-500 to-green-500" />
            </motion.div>
          </div>

          {/* Rich Content Section - Compact and Informative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto"
          >
            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 font-light leading-relaxed text-center mb-6 sm:mb-8 px-4 sm:px-6"
              style={{ letterSpacing: '0.02em', lineHeight: '1.6' }}
            >
              Pioneering{' '}
              <span className="text-gradient-green font-semibold">quantum-resistant encryption</span>
              {' '}to secure the digital future against quantum computing threats
            </motion.p>

            {/* Research Focus Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 sm:px-0"
            >
              {[
                { title: 'Lattice-Based', desc: 'Cryptographic Schemes', icon: '🔐' },
                { title: 'Hash-Based', desc: 'Digital Signatures', icon: '🔑' },
                { title: 'Code-Based', desc: 'Encryption Algorithms', icon: '💻' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="glass-strong rounded-xl p-4 sm:p-5 border border-white/10 hover:border-green-500/50 transition-all text-center"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white/60 leading-tight">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-white/10 px-4"
            >
              {[
                { label: 'Publications', value: '2+', color: 'text-green-400' },
                { label: 'Institution', value: 'NUST', color: 'text-emerald-400' },
                { label: 'Research Area', value: 'PQC', color: 'text-green-300' },
                { label: 'Status', value: 'PhD', color: 'text-emerald-300' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.1 + index * 0.08, duration: 0.4 }}
                  className="text-center min-w-[60px] sm:min-w-0"
                >
                  <div className={`text-xl sm:text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Revolutionary CTA Buttons - Split Panel Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mt-6 sm:mt-8 px-4 w-full max-w-4xl mx-auto"
          >
            {/* Primary CTA - Geometric Split Design */}
            <motion.a
              href="#contact"
              className="group relative w-full sm:w-auto min-w-[280px] sm:min-w-[320px] h-[80px] sm:h-[90px] flex items-center overflow-hidden cursor-pointer"
              aria-label="Get started - Navigate to contact section"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Left Accent Panel - Animated Green Bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[6px] sm:w-[8px] bg-gradient-to-b from-green-400 via-green-500 to-green-600"
                initial={{ scaleY: 1 }}
                whileHover={{ scaleY: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    y: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>

              {/* Main Content Panel */}
              <div className="flex-1 h-full bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border-l-0 border-r border-t border-b border-white/10 relative pl-4 sm:pl-6 pr-4 sm:pr-6 flex items-center justify-between group-hover:border-white/20 transition-all duration-500">
                {/* Text Content */}
                <div className="flex flex-col items-start justify-center">
                  <motion.span
                    className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    Let&apos;s Build
                  </motion.span>
                  <motion.span
                    className="text-green-400/70 text-xs sm:text-sm font-medium mt-0.5"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Start Your Project
                  </motion.span>
                </div>

                {/* Right Icon Container */}
                <motion.div
                  className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Outer Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-green-500/50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  {/* Inner Icon */}
                  <motion.div
                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/50"
                    whileHover={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' }}
                  >
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-white"
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <path
                        d="M7 15L13 10L7 5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Animated Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>

              {/* Right Edge Accent */}
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-green-500/50 to-transparent"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, width: '4px' }}
              />
            </motion.a>

            {/* Secondary CTA - Asymmetric Split Design */}
            <motion.a
              href="#research"
              className="group relative w-full sm:w-auto min-w-[280px] sm:min-w-[320px] h-[80px] sm:h-[90px] flex items-center overflow-hidden cursor-pointer"
              aria-label="View research - Navigate to research section"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Left Accent Panel - Animated Blue/Teal Bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[6px] sm:w-[8px] bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600"
                initial={{ scaleY: 1 }}
                whileHover={{ scaleY: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{
                    y: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>

              {/* Main Content Panel */}
              <div className="flex-1 h-full bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border-l-0 border-r border-t border-b border-white/10 relative pl-4 sm:pl-6 pr-4 sm:pr-6 flex items-center justify-between group-hover:border-white/20 transition-all duration-500">
                {/* Text Content */}
                <div className="flex flex-col items-start justify-center">
                  <motion.span
                    className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-tight"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    View Research
                  </motion.span>
                  <motion.span
                    className="text-cyan-400/70 text-xs sm:text-sm font-medium mt-0.5"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    Explore Publications
                  </motion.span>
                </div>

                {/* Right Icon Container - Different Style */}
                <motion.div
                  className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                  whileHover={{ rotate: -45, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Hexagon Shape */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/50" />
                  </motion.div>
                  {/* Inner Icon */}
                  <motion.div
                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 rotate-45"
                    whileHover={{ boxShadow: '0 0 30px rgba(6, 182, 212, 0.8)', rotate: 0 }}
                  >
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-white -rotate-45"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <path
                        d="M10 3L17 10L10 17M17 10H3"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Animated Diagonal Lines */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(6, 182, 212, 0.1) 10px,
                      rgba(6, 182, 212, 0.1) 20px
                    )`,
                  }}
                />
              </div>

              {/* Right Edge Accent */}
              <motion.div
                className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, width: '4px' }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

