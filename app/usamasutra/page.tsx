'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Code2,
  Zap,
  Sparkles,
  Terminal,
  Download,
  ExternalLink,
  Search,
  Star,
  Cpu,
  Layers,
  FileCode,
} from 'lucide-react'

interface Library {
  id: string
  name: string
  description: string
  category: string
  price: string
  downloads: string
  rating: number
  tags: string[]
  featured: boolean
  icon: React.ComponentType<{ className?: string }>
  gradient: string
}

const libraries: Library[] = [
  {
    id: '1',
    name: 'React Component Suite',
    description:
      'A comprehensive collection of 50+ production-ready React components with TypeScript support, zero dependencies, and full accessibility.',
    category: 'React',
    price: '$49',
    downloads: '25K+',
    rating: 4.9,
    tags: ['React', 'TypeScript', 'Components'],
    featured: true,
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: '2',
    name: 'Utility Functions Pack',
    description:
      'Essential utility functions for JavaScript/TypeScript projects. Zero dependencies, fully tested, tree-shakeable, and production-ready.',
    category: 'Utilities',
    price: '$29',
    downloads: '18K+',
    rating: 4.8,
    tags: ['JavaScript', 'TypeScript', 'Utils'],
    featured: true,
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: '3',
    name: 'Animation Library',
    description:
      'Smooth, performant animations for web applications. Built with Web Animations API, 60fps guaranteed, zero runtime overhead.',
    category: 'Animation',
    price: '$39',
    downloads: '12K+',
    rating: 4.7,
    tags: ['Animation', 'Performance', 'Web API'],
    featured: false,
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: '4',
    name: 'Form Validation Kit',
    description:
      'Complete form validation solution with React hooks, TypeScript support, and built-in error handling. Works with any form library.',
    category: 'Forms',
    price: '$34',
    downloads: '15K+',
    rating: 4.9,
    tags: ['Forms', 'Validation', 'React'],
    featured: false,
    icon: FileCode,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: '5',
    name: 'State Management',
    description:
      'Lightweight state management library with DevTools support, TypeScript, and time-travel debugging. Perfect for any React app.',
    category: 'State',
    price: '$44',
    downloads: '20K+',
    rating: 4.8,
    tags: ['State', 'TypeScript', 'DevTools'],
    featured: true,
    icon: Layers,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: '6',
    name: 'API Client Library',
    description:
      'Type-safe API client with automatic retry, caching, request/response interceptors, and full TypeScript inference.',
    category: 'API',
    price: '$39',
    downloads: '10K+',
    rating: 4.6,
    tags: ['API', 'HTTP', 'TypeScript'],
    featured: false,
    icon: Terminal,
    gradient: 'from-red-500 to-rose-600',
  },
]

const categories = ['All', 'React', 'Utilities', 'Animation', 'Forms', 'State', 'API']

export default function UsamaSutraPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLibraries = libraries.filter((lib) => {
    const matchesCategory = selectedCategory === 'All' || lib.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      lib.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lib.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-strong border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              <span className="font-medium">Back</span>
            </Link>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-purple-500/20 border border-white/10 rounded-full"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(16, 185, 129, 0.2)',
                  '0 0 40px rgba(16, 185, 129, 0.4)',
                  '0 0 20px rgba(16, 185, 129, 0.2)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-sm font-semibold text-white">Developer Edition</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-green-500/20 border border-white/10 rounded-full mb-8 backdrop-blur-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Cpu className="w-5 h-5 text-green-400" />
              </motion.div>
              <span className="text-sm font-semibold text-white tracking-wide">
                PREMIUM CODE LIBRARIES
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9]"
              style={{ letterSpacing: '-0.05em' }}
            >
              <motion.span
                className="block text-gradient-premium mb-2"
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
                USAMA
              </motion.span>
              <motion.span
                className="block text-white"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(16, 185, 129, 0.5))',
                }}
              >
                SUTRA
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
              style={{ letterSpacing: '0.02em' }}
            >
              Production-ready code libraries. Built by a developer, for developers.{' '}
              <span className="text-gradient-green font-semibold">Zero bullshit.</span>
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-3xl mx-auto relative"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white/40" />
                <input
                  type="text"
                  placeholder="Search libraries, frameworks, tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 glass-strong border border-white/10 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/30 transition-all text-lg"
                />
                <motion.div
                  className="absolute right-6 top-1/2 transform -translate-y-1/2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Terminal className="w-5 h-5 text-green-400/50" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-xl font-semibold text-base transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-2xl shadow-green-500/50'
                    : 'glass border border-white/10 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Libraries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {filteredLibraries.map((library, index) => {
                const Icon = library.icon
                return (
                  <motion.div
                    key={library.id}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      transition: { type: 'spring', stiffness: 400, damping: 25 },
                    }}
                    className={`group relative glass-strong rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all overflow-hidden ${
                      library.featured ? 'lg:col-span-2 lg:row-span-1' : ''
                    }`}
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${library.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {library.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-xs font-bold text-white shadow-lg shadow-green-500/50 flex items-center gap-2"
                      >
                        <Star className="w-3 h-3 fill-white" />
                        Featured
                      </motion.div>
                    )}

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${library.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all`}
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient-green transition-all">
                          {library.name}
                        </h3>
                        <span className="text-sm text-white/50 font-medium uppercase tracking-wide">
                          {library.category}
                        </span>
                      </div>

                      <p className="text-white/70 mb-6 leading-relaxed line-clamp-3">
                        {library.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {library.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats & Price */}
                      <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                        <div className="flex items-center gap-6 text-sm text-white/60">
                          <div className="flex items-center gap-1.5">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-white/80">{library.rating}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Download className="w-4 h-4" />
                            <span>{library.downloads}</span>
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {library.price}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex-1 px-6 py-4 bg-gradient-to-r ${library.gradient} text-white rounded-xl font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2`}
                        >
                          <Download className="w-5 h-5" />
                          Purchase
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05, rotate: 90 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-4 glass border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {filteredLibraries.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <Terminal className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60 text-xl">
                No libraries found. Try a different search.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
