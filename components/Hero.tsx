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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
          className="space-y-12"
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
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-4 relative text-center"
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
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-6"
            >
              <div className="hidden md:block h-px w-16 bg-gradient-to-r from-transparent via-green-500 to-green-500" />
              <div className="text-center">
                <div className="text-lg md:text-xl lg:text-2xl font-light tracking-wider text-white/90 mb-1">
                  POST-QUANTUM
                </div>
                <div
                  className="text-base md:text-lg lg:text-xl font-medium tracking-wide"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  CRYPTOGRAPHY RESEARCHER
                </div>
                <div className="text-sm md:text-base lg:text-lg font-light text-green-400/80 mt-1">
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
              className="text-lg md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed text-center mb-8"
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
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
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
                  className="glass-strong rounded-xl p-5 border border-white/10 hover:border-green-500/50 transition-all text-center"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-6 md:gap-8 pt-6 border-t border-white/10"
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
                  className="text-center"
                >
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Ultra Premium CTA Buttons - Complete Redesign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mt-8"
          >
            {/* Primary CTA - Start Your Project */}
            <MagneticButton>
              <motion.a
                href="#contact"
                className="group relative px-16 py-8 text-white rounded-2xl font-bold text-xl tracking-wide overflow-hidden z-20"
                style={{ 
                  letterSpacing: '0.05em',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #10b981 100%)',
                  backgroundSize: '200% 200%',
                }}
                aria-label="Get started - Navigate to contact section"
                whileHover={{ 
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{ scale: 0.96 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  boxShadow: [
                    '0 0 40px rgba(16, 185, 129, 0.4), 0 0 80px rgba(16, 185, 129, 0.2)',
                    '0 0 60px rgba(16, 185, 129, 0.6), 0 0 120px rgba(16, 185, 129, 0.4), 0 0 180px rgba(16, 185, 129, 0.2)',
                    '0 0 40px rgba(16, 185, 129, 0.4), 0 0 80px rgba(16, 185, 129, 0.2)',
                  ],
                }}
                transition={{
                  backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear' },
                  boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(16, 185, 129, 0.5), rgba(255, 255, 255, 0.3))',
                    backgroundSize: '200% 200%',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-4">
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    Let&apos;s Build
                  </motion.span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-white"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
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
                </span>
                
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"
                  initial={false}
                  aria-hidden="true"
                />
                
                {/* Animated particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/40 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '50%',
                    }}
                    animate={{
                      y: [-20, -40, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.a>
            </MagneticButton>
            
            {/* Secondary CTA - Explore Solutions */}
            <MagneticButton>
              <motion.a
                href="#research"
                className="group relative px-16 py-8 text-white rounded-2xl font-bold text-xl tracking-wide overflow-hidden z-20 glass-strong border-2 border-white/20"
                style={{ letterSpacing: '0.05em' }}
                aria-label="View our services - Navigate to services section"
                whileHover={{ 
                  scale: 1.08,
                  y: -4,
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(251, 191, 36, 0.3), rgba(16, 185, 129, 0.3))',
                    backgroundSize: '200% 200%',
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-4">
                  <motion.span
                    className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    View Research
                  </motion.span>
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500/30 to-amber-500/30 backdrop-blur-sm flex items-center justify-center border border-white/20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="text-white"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
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
                </span>
                
                {/* Shimmer overlay */}
                <motion.div
                  className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"
                  initial={false}
                  aria-hidden="true"
                />
              </motion.a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

