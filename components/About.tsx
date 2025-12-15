'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Code2, Shield, Zap } from 'lucide-react'

const education = [
  {
    degree: 'PhD in Post-Quantum Cryptography',
    institution: 'National University of Sciences and Technology (NUST)',
    status: 'In Progress',
    icon: GraduationCap,
    color: 'from-green-500 to-emerald-600',
    description: 'Researching quantum-resistant cryptographic algorithms and developing next-generation encryption methods to secure digital communications against quantum computing threats.',
  },
  {
    degree: 'Masters in Information Security',
    institution: 'National University of Sciences and Technology (NUST)',
    status: 'Completed',
    icon: Shield,
    color: 'from-beige-400 to-beige-600',
    description: 'Specialized in cybersecurity, cryptographic protocols, and secure system design. Focused on advanced security architectures and threat mitigation strategies.',
  },
  {
    degree: 'Bachelors in Electrical Engineering',
    institution: 'National University of Sciences and Technology (NUST)',
    status: 'Completed',
    icon: Code2,
    color: 'from-amber-500 to-yellow-600',
    description: 'Foundation in electrical systems, signal processing, and embedded systems. Applied engineering principles to security and cryptography domains.',
  },
]

const expertise = [
  { name: 'Post-Quantum Cryptography', level: 95 },
  { name: 'Quantum Algorithms', level: 90 },
  { name: 'Cryptographic Protocols', level: 92 },
  { name: 'Information Security', level: 88 },
  { name: 'Research & Development', level: 93 },
  { name: 'Academic Writing', level: 90 },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-beige-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-beige-300 to-green-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A dedicated researcher pushing the boundaries of cryptography to secure our digital future
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
          >
            <Award className="w-8 h-8 text-green-400" />
            Education & Research Journey
          </motion.h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index < education.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent" />
                  )}
                  
                  <div className="glass-strong rounded-3xl p-8 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      initial={false}
                    />
                    
                    <div className="flex items-start gap-6 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/50 flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-beige-300 group-hover:to-green-500 group-hover:bg-clip-text transition-all">
                            {edu.degree}
                          </h4>
                          <motion.span
                            className={`px-4 py-1 rounded-full text-sm font-semibold ${
                              edu.status === 'In Progress'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-beige-500/20 text-beige-300 border border-beige-500/30'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.status}
                          </motion.span>
                        </div>
                        <p className="text-green-400/80 font-medium mb-3">{edu.institution}</p>
                        <p className="text-white/70 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="text-3xl font-bold text-white mb-12 flex items-center gap-4"
          >
            <Zap className="w-8 h-8 text-green-400" />
            Research Expertise
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-strong rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-green-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 1.1 + index * 0.1, duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

