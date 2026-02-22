'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Activity, FileCheck, ShieldCheck, GraduationCap } from 'lucide-react'

const stats = [
  {
    number: 3,
    suffix: '+',
    label: 'Years in QA & Ops',
    sublabel: 'Proven track record',
    icon: Activity,
  },
  {
    number: 56,
    suffix: '',
    label: 'Web Apps Tested',
    sublabel: 'At Augmenteck',
    icon: FileCheck,
  },
  {
    number: 1,
    suffix: '',
    label: 'ISO 27001 Certified',
    sublabel: 'Lead Auditor — PECB',
    icon: ShieldCheck,
  },
  {
    number: 2,
    suffix: '',
    label: 'Degrees (EE + InfoSec)',
    sublabel: 'B.Sc. & M.Sc. NUST',
    icon: GraduationCap,
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (isInView) {
      const duration = 1600
      const steps = 50
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
    <div ref={ref} className="text-4xl sm:text-5xl font-black">
      {Math.floor(count)}{suffix}
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: '#020B18' }}
    >
      {/* Separator lines */}
      <div className="gold-divider mb-12 max-w-3xl mx-auto" style={{ opacity: 0.3 }} />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="glass rounded-2xl p-5 sm:p-6 card-gold-border text-center group transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                >
                  <Icon className="w-5 h-5 text-gold-400" />
                </div>

                <div className="text-gradient-gold mb-1">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-white/80 text-xs sm:text-sm font-semibold mb-0.5 leading-tight">
                  {stat.label}
                </h3>
                <p className="text-white/35 text-[10px] sm:text-xs">{stat.sublabel}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="gold-divider mt-12 max-w-3xl mx-auto" style={{ opacity: 0.3 }} />
    </section>
  )
}
