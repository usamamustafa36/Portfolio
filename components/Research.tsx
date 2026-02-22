'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'

const experience = [
  {
    title: 'Project & Quality Assurance Support',
    company: 'Augmenteck',
    location: 'Remote',
    period: 'Jun 2025 – Present',
    type: 'Current',
    responsibilities: [
      'Support QA engineering for 56 citizen-facing web applications, ensuring robust integration with backend systems.',
      'Develop and execute test cases and scripts based on documented requirements; validate functionality against expected outcomes.',
      'Perform system integration and regression testing to identify defects and ensure stability after updates.',
      'Utilize JIRA to log, track, and manage detailed bug reports; collaborate with development teams to troubleshoot and verify fixes.',
      'Maintain comprehensive test documentation including a Requirements Traceability Matrix (RTM) for full test coverage and audit readiness.',
      'Ensure application data handling complies with internal privacy and information-security guidelines.',
    ],
  },
  {
    title: 'Operations & Documentation Coordinator',
    company: 'InoTech Solutions',
    location: 'Pakistan',
    period: 'Jan 2023 – May 2025',
    type: 'Previous',
    responsibilities: [
      'Progressed from operational support to coordination role, focusing on data validation and quality reviews for multi-project delivery.',
      'Collected and validated operational data; used SQL to query databases and generate reports on process metrics for management oversight.',
      'Reviewed deliverables for accuracy, consistency, and completeness prior to submission, ensuring compliance with internal standards.',
      'Tracked task completion and basic compliance indicators across teams; coordinated with technical and non-technical stakeholders to resolve documentation gaps.',
    ],
  },
  {
    title: 'Junior Operations Support',
    company: 'Special Communications Organization (Telecom)',
    location: 'Pakistan',
    period: 'Oct 2020 – Dec 2022',
    type: 'Previous',
    responsibilities: [
      'Supported documentation and operational tracking for regulated telecom and infrastructure projects.',
      'Maintained status trackers, site readiness records, and service documentation under supervision.',
      'Assisted with compliance-related reporting and structured management updates.',
    ],
  },
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 sm:py-28 md:py-36 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1426 0%, #0F1E36 50%, #0B1426 100%)' }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/3 w-px h-full opacity-5"
          style={{ background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-gold-500/60" />
            <span className="section-label">Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}>
            Professional{' '}
            <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="gold-divider max-w-xs" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.4), rgba(201,168,76,0.1), transparent)' }}
          />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + index * 0.2, duration: 0.7 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-3 h-3 rounded-full border-2 border-gold-500 hidden sm:block"
                  style={{ background: index === 0 ? '#C9A84C' : '#071020', transform: 'translateX(-50%)' }}
                />

                {/* Card */}
                <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 card-gold-border group transition-all duration-300 hover:shadow-lg"
                  style={{ '--hover-shadow': '0 8px 32px rgba(201,168,76,0.08)' } as React.CSSProperties}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                      >
                        <Briefcase className="w-5 h-5 text-gold-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1">
                          {job.title}
                        </h3>
                        <p className="text-gold-400/80 font-semibold text-sm">{job.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 items-center">
                      {job.type === 'Current' && (
                        <span className="text-[10px] font-bold tracking-wider px-3 py-1 rounded-full text-navy-900"
                          style={{ background: 'linear-gradient(135deg, #E0C580, #C9A84C)', letterSpacing: '0.1em' }}>
                          CURRENT
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-white/45 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/45 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Thin gold divider */}
                  <div className="h-px mb-5" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }} />

                  {/* Responsibilities */}
                  <ul className="space-y-2.5">
                    {job.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.2 + i * 0.06, duration: 0.5 }}
                        className="flex items-start gap-3 text-sm text-white/65 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
