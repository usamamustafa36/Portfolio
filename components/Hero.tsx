'use client'

import { motion } from 'framer-motion'
import ParticleBackground from '@/components/ParticleBackground'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-0"
    >
      {/* Subtle particle background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticleBackground />
      </div>

      {/* Deep navy gradient overlay */}
      <div className="absolute inset-0 z-10"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(201,168,76,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 70%, rgba(30,58,95,0.2) 0%, transparent 55%),
            linear-gradient(180deg, rgba(2,11,24,0.92) 0%, rgba(7,16,32,0.85) 50%, rgba(2,11,24,0.95) 100%)
          `,
        }}
      />

      {/* Decorative horizontal gold lines */}
      <div className="absolute top-1/4 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Discipline label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
            <span className="section-label">Embedded Systems · Quality Assurance</span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
          </motion.div>

          {/* Name */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.75rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight"
              style={{ letterSpacing: '-0.04em' }}
            >
              <span
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #EDD9A3 45%, #C9A84C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                USAMA
              </span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E0C580 50%, #FFFFFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MUSTAFA
              </span>
            </motion.h1>

            {/* Gold underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-3"
              style={{
                height: '1px',
                maxWidth: '480px',
                background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              }}
            />
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-2"
          >
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 tracking-wide"
              style={{ letterSpacing: '0.12em' }}
            >
              EMBEDDED QA ENGINEER
            </h2>
            <p className="text-sm sm:text-base text-white/50 font-light tracking-widest">
              Bridging Hardware & Software with Precision
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
            style={{ letterSpacing: '0.02em' }}
          >
            Detail-oriented Electrical Engineer with a Master&apos;s in Information Security —
            dedicated to delivering{' '}
            <span className="text-gradient-gold font-medium">quality, reliability, and precision</span>
            {' '}in embedded systems and hardware-software integration.
          </motion.p>

          {/* Key credentials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto pt-2"
          >
            {[
              { value: '3+', label: 'Years Experience' },
              { value: 'ISO', label: '27001 Certified' },
              { value: 'JIRA', label: 'Bug Tracking' },
              { value: 'EE', label: 'B.Sc. + M.Sc.' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
                className="glass rounded-xl p-2.5 sm:p-4 card-gold-border text-center"
              >
                <div
                  className="text-lg sm:text-2xl font-bold mb-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #E0C580, #C9A84C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA links */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href="#experience"
              className="px-8 py-3 rounded-full text-sm font-semibold tracking-wider text-navy-900 transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #E0C580, #C9A84C)',
                letterSpacing: '0.1em',
              }}
            >
              VIEW EXPERIENCE
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full text-sm font-semibold tracking-wider text-gold-300 border border-gold-500/40 hover:border-gold-400/70 hover:text-gold-200 transition-all duration-300 hover:scale-105"
              style={{ letterSpacing: '0.1em' }}
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-20"
        style={{ background: 'linear-gradient(to top, #071020, transparent)' }}
      />
    </section>
  )
}
