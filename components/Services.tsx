'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  ShieldCheck,
  Network,
  HardDrive,
  Globe2,
  SearchCheck,
  LockKeyhole,
  Gauge,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Globe2,
    title: 'Web Development',
    description:
      'Transform your digital presence with enterprise-grade web applications built on cutting-edge frameworks. We deliver scalable, secure, and lightning-fast solutions with cloud-native architecture that grows with your business.',
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-green-500/10',
    iconBg: 'bg-green-500/20',
    features: ['React/Next.js', 'Cloud Integration', '99.9% Uptime'],
    stats: '500+ Projects',
    gradient: 'from-green-500/20 to-green-700/10',
  },
  {
    icon: LockKeyhole,
    title: 'Secure Darkweb Chatting Apps',
    description:
      'Ultimate privacy protection with military-grade encrypted messaging platforms featuring Tor integration, zero-knowledge architecture, and anonymous routing. Your communications remain completely private and untraceable.',
    color: 'from-beige-400 to-beige-600',
    bgColor: 'bg-beige-500/10',
    iconBg: 'bg-beige-500/20',
    features: ['AES-256 Encryption', 'Tor Network', 'Zero-Knowledge'],
    stats: '100K+ Users',
    gradient: 'from-beige-500/20 to-beige-700/10',
  },
  {
    icon: SearchCheck,
    title: 'Security Auditing Tools',
    description:
      'Stay ahead of threats with our AI-powered security auditing platforms. Automated vulnerability scanning, intelligent penetration testing, and comprehensive compliance checking with real-time threat detection and actionable insights.',
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-500/10',
    iconBg: 'bg-yellow-500/20',
    features: ['AI-Powered Scanning', 'Real-Time Alerts', 'Compliance Ready'],
    stats: '10K+ Scans/Month',
    gradient: 'from-yellow-500/20 to-orange-600/10',
  },
  {
    icon: Network,
    title: 'Honeynet Systems',
    description:
      'Advanced honeypot networks with machine learning threat detection, automated incident response, and comprehensive threat intelligence. Protect against APTs and zero-day attacks.',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    iconBg: 'bg-green-500/20',
    features: ['ML Detection', 'Auto-Response', 'Threat Intel'],
    stats: '99.8% Detection',
    gradient: 'from-green-500/20 to-emerald-600/10',
  },
  {
    icon: HardDrive,
    title: 'Secure USB Solutions',
    description:
      'Hardware-encrypted USB devices with biometric authentication, tamper-proof design, and secure boot. Enterprise-grade data protection for sensitive information.',
    color: 'from-red-500 to-rose-600',
    bgColor: 'bg-red-500/10',
    iconBg: 'bg-red-500/20',
    features: ['Hardware Encryption', 'Biometric Auth', 'Tamper-Proof'],
    stats: '50K+ Devices',
    gradient: 'from-red-500/20 to-rose-600/10',
  },
  {
    icon: ShieldCheck,
    title: 'Security Tools & Frameworks',
    description:
      'Custom security frameworks, SIEM solutions, and threat prevention tools. End-to-end security infrastructure designed for enterprise environments.',
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-indigo-500/10',
    iconBg: 'bg-indigo-500/20',
    features: ['SIEM Integration', '24/7 Monitoring', 'Custom Frameworks'],
    stats: 'Enterprise Ready',
    gradient: 'from-indigo-500/20 to-green-700/10',
  },
  {
    icon: Code2,
    title: 'Custom Software Development',
    description:
      'Bespoke software solutions tailored to your business needs. From microservices architecture to monolithic systems, built with enterprise-grade standards.',
    color: 'from-beige-500 to-beige-700',
    bgColor: 'bg-beige-500/10',
    iconBg: 'bg-beige-500/20',
    features: ['Microservices', 'Scalable Design', 'Enterprise Architecture'],
    stats: '200+ Solutions',
    gradient: 'from-beige-500/20 to-beige-700/10',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Advanced performance optimization services with real-time monitoring, auto-scaling, and load balancing. Achieve sub-100ms response times and 99.99% uptime.',
    color: 'from-amber-500 to-yellow-600',
    bgColor: 'bg-amber-500/10',
    iconBg: 'bg-amber-500/20',
    features: ['Auto-Scaling', 'Load Balancing', 'Real-Time Monitoring'],
    stats: '<100ms Response',
    gradient: 'from-amber-500/20 to-yellow-600/10',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      bounce: 0.2,
    },
  },
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden"
    >
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-beige-500/10 rounded-full blur-3xl"
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-sm font-semibold text-green-400 uppercase tracking-[0.2em]">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Enterprise-Grade
            <br />
            <motion.span
              className="bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Solutions
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed px-4"
            style={{ letterSpacing: '0.01em' }}
          >
            Comprehensive solutions engineered for enterprise-scale operations, security, and innovation. 
            We don&apos;t just build software—we craft digital experiences that drive business transformation.
          </motion.p>
        </motion.div>

        {/* Dynamic Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.04,
                  y: -16,
                  rotateY: 2,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className={`service-card ${service.bgColor} glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-700 group cursor-pointer relative overflow-hidden h-full flex flex-col`}
              >
                {/* Dynamic gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl`}
                  animate={{
                    opacity: isHovered ? [0.3, 0.6, 0.3] : 0.1,
                    scale: isHovered ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Animated icon container */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -12, 12, -12, 0],
                    scale: 1.15,
                  }}
                  transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 md:mb-8 shadow-2xl group-hover:shadow-green-500/60 transition-all duration-700 flex-shrink-0 glow-green`}
                >
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl ${service.iconBg} blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white relative z-10 stroke-[2.5] drop-shadow-lg" />
                  
                  {/* Pulsing glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle, ${service.color.includes('green') ? 'rgba(34, 197, 94, 0.5)' : service.color.includes('beige') ? 'rgba(210, 180, 140, 0.5)' : 'rgba(251, 191, 36, 0.5)'} 0%, transparent 70%)`,
                    }}
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
                
                {/* Stats badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                >
                  <span className="text-[10px] sm:text-xs font-semibold text-green-400">{service.stats}</span>
                </motion.div>
                
                {/* Content */}
                <div className="flex-grow flex flex-col relative z-10">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-green-400 group-hover:to-white group-hover:bg-clip-text transition-all duration-700 relative break-words" style={{ letterSpacing: '-0.02em' }}>
                    {service.title}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      initial={false}
                    />
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-light flex-grow group-hover:text-white/90 transition-colors duration-500 break-words" style={{ letterSpacing: '0.015em', lineHeight: '1.7' }}>
                    {service.description}
                  </p>
                  
                  {/* Dynamic Features List */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + idx * 0.08 }}
                        className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <CheckCircle2 className={`w-3 h-3 sm:w-4 sm:h-4 text-green-400`} />
                        </motion.div>
                        <span className="font-medium break-words">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Dynamic decorative elements */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/15 to-transparent rounded-bl-full"
                  animate={{
                    opacity: isHovered ? [0, 1, 0] : 0,
                    scale: isHovered ? [0.8, 1.2, 0.8] : 0.8,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-beige-500/15 to-transparent rounded-tr-full"
                  animate={{
                    opacity: isHovered ? [0, 1, 0] : 0,
                    scale: isHovered ? [0.8, 1.2, 0.8] : 0.8,
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Animated arrow indicator */}
                <motion.div
                  className="absolute bottom-6 right-6"
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? [0, 4, 0] : 0,
                    y: isHovered ? [0, -4, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
                
                {/* Bottom border accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
                  animate={{
                    opacity: isHovered ? [0.5, 1, 0.5] : 0,
                    scaleX: isHovered ? [0, 1, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Premium Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 md:px-14 py-4 sm:py-6 md:py-7 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white rounded-full font-bold text-sm sm:text-base md:text-lg tracking-wide shadow-2xl shadow-green-500/50 hover:shadow-green-500/80 transition-all duration-700 relative overflow-hidden glow-green-intense w-full sm:w-auto justify-center"
            style={{ letterSpacing: '0.08em' }}
          >
            <span className="relative z-10">Explore All Services</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M7 15L13 10L7 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-300 to-green-400"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              initial={false}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
