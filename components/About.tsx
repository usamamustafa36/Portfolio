'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Shield, Cpu } from 'lucide-react'

const education = [
  {
    degree: "Master's in Information Security",
    institution: 'National University of Sciences and Technology (NUST)',
    period: '2022 – 2024',
    icon: Shield,
    description:
      'Specialized in cybersecurity, cryptographic protocols, secure system design, and information security management. Developed deep expertise in threat mitigation and security architectures.',
  },
  {
    degree: "Bachelor's in Electrical Engineering",
    institution: 'National University of Sciences and Technology (NUST)',
    period: '2016 – 2020',
    icon: Cpu,
    description:
      'Foundation in electrical systems, signal processing, embedded systems, and hardware design. Applied engineering principles to hardware-software integration and communication protocols.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071020 0%, #0B1426 50%, #071020 100%)' }}
    >
      {/* Subtle bg accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #1e3a5f, transparent)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-gold-500/60" />
            <span className="section-label">Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.02em' }}>
            About{' '}
            <span className="text-gradient-gold">Me</span>
          </h2>
          <div className="gold-divider mb-8 max-w-xs" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-5"
              style={{ letterSpacing: '0.18em' }}>
              Professional Summary
            </h3>
            <div className="space-y-4 text-white/75 text-base leading-relaxed">
              <p>
                Detail-oriented Electrical Engineer (B.Sc.) with a Master&apos;s in Information Security
                and proven experience in quality assurance. I bridge hardware and software by applying
                engineering principles to ensure system reliability and quality.
              </p>
              <p>
                Skilled in executing complete test cycles, validating requirements against specifications,
                and leveraging data analysis (SQL) to drive measurable quality outcomes. My EE background
                provides deep insight into embedded systems, communication protocols, and hardware-software
                integration.
              </p>
              <p>
                Actively seeking to apply my strong analytical and technical foundation to Embedded Systems
                QA — ensuring the reliability of products that power the physical world.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:usamamustafa1@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-300 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                usamamustafa1@gmail.com
              </a>
              <a
                href="https://github.com/usamamustafa36"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-300 transition-colors"
              >
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                github.com/usamamustafa36
              </a>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <h3 className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-6"
              style={{ letterSpacing: '0.18em' }}>
              Education
            </h3>

            <div className="space-y-5">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                    className="glass-strong rounded-2xl p-5 sm:p-6 card-gold-border group transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}
                      >
                        <Icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h4 className="text-white font-semibold text-sm sm:text-base leading-tight">
                            {edu.degree}
                          </h4>
                          <span className="text-[10px] font-medium text-gold-500/80 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20 whitespace-nowrap flex-shrink-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-gold-400/70 text-xs font-medium mb-2 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3 flex-shrink-0" />
                          {edu.institution}
                        </p>
                        <p className="text-white/55 text-xs sm:text-sm leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
