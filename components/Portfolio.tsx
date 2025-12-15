'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Secure Messaging Platform',
    description:
      'Revolutionary end-to-end encrypted darkweb messaging solution with anonymous routing, zero-knowledge architecture, and military-grade security. Protecting communications for 100K+ users worldwide.',
    tags: ['Security', 'Encryption', 'Privacy'],
    color: 'from-beige-400 to-beige-600',
    bgColor: 'bg-beige-500/10',
  },
  {
    title: 'Network Honeypot System',
    description:
      'Next-generation honeynet infrastructure with AI-powered threat detection, automated incident response, and comprehensive threat intelligence. Detecting and neutralizing attacks in real-time.',
    tags: ['Cybersecurity', 'Network', 'Monitoring'],
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'Security Audit Framework',
    description:
      'Enterprise-grade security auditing platform with automated vulnerability scanning, penetration testing, and compliance validation. Trusted by Fortune 500 companies for comprehensive security assessments.',
    tags: ['Security', 'Auditing', 'Analysis'],
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-500/10',
  },
  {
    title: 'Secure USB Solution',
    description:
      'Hardware-encrypted USB devices with biometric authentication and tamper-proof design. Enterprise-grade data protection for sensitive information, trusted by government and financial institutions.',
    tags: ['Hardware', 'Security', 'Encryption'],
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'Research Platform',
    description:
      'Advanced academic research platform with powerful data analysis tools, machine learning integration, and interactive visualization capabilities. Empowering researchers to make breakthrough discoveries.',
    tags: ['Research', 'Data Analysis', 'Academic'],
    color: 'from-beige-500 to-beige-700',
    bgColor: 'bg-beige-500/10',
  },
  {
    title: 'Web Application Suite',
    description:
      'Modern, scalable web applications built with cutting-edge technologies. Microservices architecture, cloud-native deployment, and sub-100ms response times for exceptional user experiences.',
    tags: ['Web Development', 'Full Stack', 'Modern'],
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-indigo-500/10',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-beige-300 to-green-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Exploring innovative security solutions and research platforms that advance the field of 
            cryptography and information security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                    }
                  : {}
              }
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                y: -12,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className={`${project.bgColor} backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 group cursor-pointer h-full flex flex-col relative overflow-hidden`}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                initial={false}
              />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/40 transition-all duration-500`}
                >
                  <ExternalLink className="w-7 h-7 text-white" />
                </motion.div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: -15 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-beige-300 group-hover:to-green-500 group-hover:bg-clip-text transition-all duration-500 relative z-10">
                {project.title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-6 flex-grow relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white shadow-md`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

