'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FileText, 
  ExternalLink,
  Calendar,
  BookOpen,
} from 'lucide-react'

const publications = [
  {
    title: 'Post-Quantum Cryptographic Algorithms for Next-Generation Security',
    description:
      'A comprehensive analysis of quantum-resistant cryptographic algorithms and their implementation in modern security systems. This research explores lattice-based, hash-based, and code-based cryptographic schemes to ensure long-term security against quantum computing threats.',
    authors: 'Usama Mustafa et al.',
    year: '2024',
    venue: 'To be published',
    link: '#', // Placeholder - user will add later
    color: 'from-green-500 to-emerald-600',
    iconBg: 'bg-green-500/20',
    tags: ['Post-Quantum Cryptography', 'Quantum Computing', 'Security'],
  },
  {
    title: 'Enhancing Encryption Strength Through Quantum-Resistant Protocols',
    description:
      'This publication investigates novel approaches to strengthen encryption mechanisms using post-quantum cryptographic protocols. The research presents experimental results and performance analysis of various quantum-resistant algorithms in real-world scenarios.',
    authors: 'Usama Mustafa et al.',
    year: '2024',
    venue: 'To be published',
    link: '#', // Placeholder - user will add later
    color: 'from-beige-400 to-beige-600',
    iconBg: 'bg-beige-500/20',
    tags: ['Encryption', 'Cryptographic Protocols', 'Research'],
  },
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="research"
      ref={ref}
      className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-green-900/20 to-slate-900 relative overflow-hidden"
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
          className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-beige-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-4">
            Research <span className="bg-gradient-to-r from-beige-300 to-green-500 bg-clip-text text-transparent">Publications</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
            Exploring the frontiers of Post-Quantum Cryptography to build encryption systems 
            that remain secure in the quantum computing era
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {publications.map((publication, index) => {
            return (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }
                    : {}
                }
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -12,
                  rotateY: 2,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-green-500/30 transition-all group relative overflow-hidden h-full flex flex-col"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${publication.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  initial={false}
                />
                
                <div className="flex items-start justify-between mb-4 sm:mb-6 relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -8, 8, -8, 0],
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${publication.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all flex-shrink-0`}
                  >
                    <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <motion.a
                    href={publication.link}
                    whileHover={{ scale: 1.2, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="View publication"
                  >
                    <ExternalLink size={20} className="sm:w-6 sm:h-6" />
                  </motion.a>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-beige-300 group-hover:to-green-500 group-hover:bg-clip-text transition-all relative z-10 break-words">
                  {publication.title}
                </h3>
                
                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 sm:mb-6 flex-grow relative z-10 break-words">
                  {publication.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/60">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="font-medium break-words">{publication.authors}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/60">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="break-words">{publication.year} • {publication.venue}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
                  {publication.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r ${publication.color} text-white shadow-md whitespace-nowrap`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${publication.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </div>

        {/* Note about adding links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm italic">
            Publication links will be added soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}

