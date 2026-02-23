'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  message?: string
  submit?: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters'
    else if (formData.name.trim().length > 100) newErrors.name = 'Name must be less than 100 characters'

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = 'Please enter a valid email address'

    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'
    else if (formData.message.trim().length > 2000) newErrors.message = 'Message must be less than 2000 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to send message')
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      setErrors({ submit: error instanceof Error ? error.message : 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClasses = (hasError?: string) =>
    `w-full px-4 py-3 rounded-xl text-sm text-white/90 placeholder-white/30 focus:outline-none transition-all ${
      hasError
        ? 'border border-red-500/50 focus:border-red-400 focus:ring-1 focus:ring-red-500/30'
        : 'border border-white/10 focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20'
    }`
  const inputStyle = { background: 'rgba(15,30,54,0.6)' }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1426 0%, #0F1E36 40%, #0B1426 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 w-96 h-96 rounded-full blur-3xl opacity-5 -translate-x-1/2"
          style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-8 bg-gold-500/60" />
            <span className="section-label">Reach Out</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}>
            Get In{' '}
            <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="gold-divider max-w-xs mb-5" />
          <p className="text-white/55 text-sm sm:text-base max-w-xl leading-relaxed">
            Open to opportunities where I can contribute to embedded systems quality and reliability.
            I&apos;d love to discuss how my background aligns with your team&apos;s goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2 space-y-5"
          >
            <a
              href="mailto:usamamustafa1@gmail.com"
              className="flex items-center gap-4 glass rounded-2xl p-4 sm:p-5 card-gold-border group transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <Mail className="w-5 h-5 text-gold-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-white/80 text-sm font-medium break-all group-hover:text-gold-300 transition-colors">
                  usamamustafa1@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/usamamustafa36"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-4 sm:p-5 card-gold-border group transition-all duration-300 hover:scale-[1.02]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <Github className="w-5 h-5 text-gold-400" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">GitHub</p>
                <p className="text-white/80 text-sm font-medium break-all group-hover:text-gold-300 transition-colors">
                  github.com/usamamustafa36
                </p>
              </div>
            </a>

            {/* Availability note */}
            <div
              className="rounded-2xl p-4 sm:p-5"
              style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}
            >
              <p className="text-[10px] text-gold-400/70 uppercase tracking-widest mb-2 font-bold"
                style={{ letterSpacing: '0.15em' }}>
                Availability
              </p>
              <p className="text-white/60 text-xs leading-relaxed">
                Available for 6 PM – 3 AM PKT shift to support North America business hours.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 card-gold-border">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <CheckCircle className="w-8 h-8 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/60 uppercase tracking-widest mb-2 font-medium"
                      style={{ letterSpacing: '0.12em' }}>
                      Name
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required aria-required="true"
                      className={inputClasses(errors.name)}
                      style={inputStyle}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs text-white/60 uppercase tracking-widest mb-2 font-medium"
                      style={{ letterSpacing: '0.12em' }}>
                      Email
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required aria-required="true"
                      className={inputClasses(errors.email)}
                      style={inputStyle}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs text-white/60 uppercase tracking-widest mb-2 font-medium"
                      style={{ letterSpacing: '0.12em' }}>
                      Message
                    </label>
                    <textarea
                      id="message" name="message"
                      value={formData.message} onChange={handleChange}
                      required rows={5}
                      className={`${inputClasses(errors.message)} resize-none`}
                      style={inputStyle}
                      placeholder="Tell me about the opportunity or how I can help..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />{errors.message}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-3 rounded-xl text-red-400 text-xs flex items-center gap-2"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errors.submit}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-navy-900 min-h-[44px]"
                    style={{
                      background: isSubmitting ? 'rgba(201,168,76,0.5)' : 'linear-gradient(135deg, #E0C580, #C9A84C)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> SEND MESSAGE</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
