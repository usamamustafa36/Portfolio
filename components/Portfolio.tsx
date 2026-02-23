'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'ISO/IEC 27001 Lead Auditor',
    issuer: 'PECB',
    description:
      'Certified Lead Auditor for Information Security Management Systems (ISMS). Demonstrates expertise in auditing, assessing, and ensuring organizations meet internationally recognised information security standards.',
    relevance: 'Directly applicable to embedded product security, compliance testing, and audit-ready documentation — aligning with Motive\'s regulated fleet technology environment.',
    tags: ['Information Security', 'Audit', 'Compliance', 'ISMS'],
    color: 'from-gold-600 to-gold-500',
    credential: 'PECB Certified',
  },
  {
    title: 'Diploma: Web 3.0 & AI',
    issuer: 'PIAIC (Presidential Initiative for Artificial Intelligence & Computing)',
    description:
      'Comprehensive training in emerging technologies including artificial intelligence, machine learning, and next-generation web architectures. Covers practical applications and modern development paradigms.',
    relevance: 'Supports cross-functional knowledge in modern software environments, AI-driven testing tools, and staying current with industry technology trends — key in Motive\'s AI-powered platform.',
    tags: ['AI & Machine Learning', 'Modern Tech', 'Web 3.0'],
    color: 'from-navy-500 to-navy-400',
    credential: 'PIAIC Certified',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-16 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1426 0%, #0F1E36 50%, #0B1426 100%)' }}
    >
      {/* Decorative element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
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
            <span className="section-label">Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}>
            Certifications &{' '}
            <span className="text-gradient-gold">Credentials</span>
          </h2>
          <div className="gold-divider max-w-xs mb-5" />
          <p className="text-white/55 text-sm sm:text-base max-w-2xl leading-relaxed">
            Formal credentials that reinforce the technical and professional foundation required
            for excellence in embedded QA engineering.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24, rotateX: -6 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.2, duration: 0.7, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-8 card-gold-border group transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <Award className="w-5 h-5 sm:w-7 sm:h-7 text-gold-400" />
                </div>
                <div
                  className="text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    border: '1px solid rgba(201,168,76,0.25)',
                    color: '#D4B45A',
                    letterSpacing: '0.12em',
                  }}
                >
                  {cert.credential}
                </div>
              </div>

              <h3 className="text-white font-bold text-lg sm:text-xl mb-1 leading-tight">
                {cert.title}
              </h3>
              <p className="text-gold-400/70 text-xs font-medium mb-4">{cert.issuer}</p>

              {/* Divider */}
              <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.25), transparent)' }} />

              <p className="text-white/65 text-sm leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>

              {/* Relevance to Motive */}
              <div
                className="rounded-xl p-4 mb-4"
                style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}
              >
                <p className="text-xs text-gold-300/80 leading-relaxed">
                  <span className="text-gold-400 font-semibold">Relevant to Motive: </span>
                  {cert.relevance}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full text-white/60"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 glass rounded-2xl p-6 card-gold-border"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex-shrink-0">
              <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-1"
                style={{ letterSpacing: '0.15em' }}>
                Languages
              </h4>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { lang: 'English', level: 'Fluent' },
                { lang: 'Urdu', level: 'Native' },
              ].map((l) => (
                <div key={l.lang} className="flex items-center gap-2">
                  <span className="text-white/80 text-sm font-medium">{l.lang}</span>
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full text-gold-500/80"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.15)' }}
                  >
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
