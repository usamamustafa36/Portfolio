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
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900 relative overflow-hidden"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-4">
            About <span className="bg-gradient-to-r from-beige-300 to-green-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            A dedicated researcher pushing the boundaries of cryptography to secure our digital future
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-12 sm:mb-16 md:mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 flex items-center gap-3 sm:gap-4 px-4"
          >
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 flex-shrink-0" />
            <span className="break-words">Education & Research Journey</span>
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
                  
                  <div className="glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 group relative overflow-hidden">
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                      initial={false}
                    />
                    
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/50 flex-shrink-0 self-center sm:self-start`}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-grow w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-2">
                          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-beige-300 group-hover:to-green-500 group-hover:bg-clip-text transition-all break-words">
                            {edu.degree}
                          </h4>
                          <motion.span
                            className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap ${
                              edu.status === 'In Progress'
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                : 'bg-beige-500/20 text-beige-300 border border-beige-500/30'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.status}
                          </motion.span>
                        </div>
                        <p className="text-sm sm:text-base text-green-400/80 font-medium mb-2 sm:mb-3 break-words">{edu.institution}</p>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed break-words">{edu.description}</p>
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
            className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 md:mb-12 flex items-center gap-3 sm:gap-4 px-4"
          >
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 flex-shrink-0" />
            <span className="break-words">Research Expertise</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg break-words flex-1">{skill.name}</span>
                  <span className="text-green-400 font-bold text-sm sm:text-base flex-shrink-0">{skill.level}%</span>
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

