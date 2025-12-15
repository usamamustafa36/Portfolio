'use client'

import { motion } from 'framer-motion'

const shapes = [
  { size: 60, x: '10%', y: '20%', duration: 50, delay: 0 },
  { size: 80, x: '80%', y: '30%', duration: 60, delay: 10 },
  { size: 100, x: '50%', y: '70%', duration: 70, delay: 20 },
  { size: 70, x: '20%', y: '80%', duration: 55, delay: 5 },
  { size: 90, x: '70%', y: '10%', duration: 65, delay: 15 },
]

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, ${
              index % 2 === 0 ? '#22c55e' : '#d2b48c'
            } 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1], // Smooth ease-in-out
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  )
}

