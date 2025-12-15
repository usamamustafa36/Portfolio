'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'PhD Researcher, MIT',
    content:
      'Outlance transformed my PhD research journey. Their exceptional code implementation, rigorous documentation, and deep expertise in ensuring novelty helped me publish in top-tier conferences. The team went above and beyond to understand my research domain and deliver solutions that exceeded all expectations.',
    avatar: '👩‍🔬',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, SecureCorp',
    content:
      'Working with Outlance has been a game-changer for our security infrastructure. Their security auditing tools have identified critical vulnerabilities we never knew existed, and their innovative approach to threat detection has significantly strengthened our defenses. Professional, reliable, and truly innovative.',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Masters Student, Stanford',
    content:
      'I was struggling with my Masters thesis until I found Outlance. Their research documentation is world-class, the code quality is production-ready, and their support throughout the entire process was invaluable. They helped me achieve results I never thought possible. Highly recommended!',
    avatar: '👩‍🎓',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Founder, DataSecure',
    content:
      'Outlance built our secure messaging platform from the ground up, and the results speak for themselves. With cutting-edge encryption, zero-knowledge architecture, and flawless execution, we now serve 100K+ users. The team is incredibly knowledgeable, responsive, and always delivers on time. Outstanding work!',
    avatar: '👨‍💻',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-green-900/20 to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-beige-300 to-green-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from researchers, executives, and innovators 
            who&apos;ve experienced the Outlance difference firsthand.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10"
            >
              <Quote className="w-12 h-12 text-green-500/50 mb-6" />
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{testimonials[currentIndex].avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-white/70">{testimonials[currentIndex].role}</p>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: testimonials[currentIndex].rating }).map(
                        (_, i) => (
                          <span key={i} className="text-yellow-400">
                            ⭐
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all text-white"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-green-500'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all text-white"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

