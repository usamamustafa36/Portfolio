'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, ClipboardCheck, Code2, Wrench } from 'lucide-react'

const skillCategories = [
  {
    icon: Cpu,
    title: 'Embedded & Hardware',
    subtitle: 'Hardware-Software Integration',
    skills: [
      'Electrical Engineering Fundamentals',
      'Hardware-Software Integration',
      'Communication Protocols (UART, I2C, CAN)',
      'Embedded Systems Architecture',
      'Signal Processing Concepts',
    ],
    note: 'Academic & foundational proficiency',
  },
  {
    icon: ClipboardCheck,
    title: 'Testing & QA',
    subtitle: 'Quality Assurance Lifecycle',
    skills: [
      'Manual Test Case Execution',
      'Regression & Integration Testing',
      'Bug Tracking & Reporting (JIRA)',
      'Requirements Traceability Matrix (RTM)',
      'SDLC / STLC Methodologies',
      'Mobile/Web Integration Testing',
    ],
    note: 'Hands-on professional experience',
  },
  {
    icon: Code2,
    title: 'Programming & Data',
    subtitle: 'Technical Proficiency',
    skills: [
      'C / C++ (Academic Projects)',
      'Python (Basic Scripting)',
      'SQL (Data Analysis & Reporting)',
      'Scripting for Test Automation',
      'Database Query & Validation',
    ],
    note: 'Practical application experience',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    subtitle: 'Professional Toolset',
    skills: [
      'JIRA (Issue & Sprint Management)',
      'Productivity Suites (MS Office)',
      'Documentation Platforms',
      'Agile / Scrum Workflows',
      'Test Documentation & RTM',
    ],
    note: 'Day-to-day professional tools',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #071020 0%, #0B1426 50%, #071020 100%)' }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-gold-500/60" />
            <span className="section-label">Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}>
            Technical{' '}
            <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="gold-divider max-w-xs mb-5" />
          <p className="text-white/55 text-sm sm:text-base max-w-2xl leading-relaxed">
            A cross-disciplinary skill set spanning hardware engineering fundamentals, quality assurance
            methodology, and programming — uniquely suited for embedded systems QA.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.12, duration: 0.7 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 card-gold-border group transition-all duration-300 flex flex-col"
              >
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(201,168,76,0.1)',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}
                  >
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-0.5">
                      {category.title}
                    </h3>
                    <p className="text-white/45 text-xs tracking-wide">{category.subtitle}</p>
                  </div>
                </div>

                {/* Thin divider */}
                <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.25), transparent)' }} />

                {/* Skills list */}
                <ul className="space-y-2.5 flex-grow">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#C9A84C', opacity: 0.7 }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-[10px] text-gold-500/60 uppercase tracking-widest font-medium">
                    {category.note}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Motive alignment note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 glass rounded-2xl p-6 sm:p-8 card-gold-border text-center"
        >
          <p className="text-white/60 text-sm leading-relaxed max-w-3xl mx-auto">
            Aligned with Motive&apos;s needs in{' '}
            <span className="text-gold-400 font-medium">hardware-software testing</span>,{' '}
            <span className="text-gold-400 font-medium">JIRA-based bug tracking</span>,{' '}
            <span className="text-gold-400 font-medium">SQL data analysis</span>, and{' '}
            <span className="text-gold-400 font-medium">Agile QA lifecycle</span> — ready to contribute
            to ELD and embedded product quality from day one.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
