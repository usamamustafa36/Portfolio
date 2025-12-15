'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Research from '@/components/Research'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import LoadingScreen from '@/components/LoadingScreen'
import CustomCursor from '@/components/CustomCursor'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import ParallaxSection from '@/components/ParallaxSection'
import ScrollToTop from '@/components/ScrollToTop'
import AnimatedGradient from '@/components/AnimatedGradient'
import SkipToContent from '@/components/SkipToContent'
import LibraryHub from '@/components/LibraryHub'

export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined') {
      const initGSAP = async () => {
        try {
          const [scrollTriggerModule, gsapModule] = await Promise.all([
            import('gsap/ScrollTrigger'),
            import('gsap'),
          ])
          const { ScrollTrigger } = scrollTriggerModule
          const gsap = gsapModule.default
          gsap.registerPlugin(ScrollTrigger)

          // Add scroll-triggered animations
          const elements = gsap.utils.toArray<HTMLElement>('.fade-in-up')
          elements.forEach((element) => {
            gsap.fromTo(
              element,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: element,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                },
              }
            )
          })
        } catch (error) {
          // Silently fail if GSAP fails to load
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.error('Failed to load GSAP ScrollTrigger:', error)
          }
        }
      }
      initGSAP()
    }
  }, [])

  // Check for reduced motion preference
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01s')
    }
  }, [])

  return (
    <>
      <SkipToContent />
      <LoadingScreen />
      <CustomCursor />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 relative" role="main">
        <AnimatedGradient />
        <Navigation />
        <Hero />
        <ParallaxSection speed={0.2}>
          <About />
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <Research />
        </ParallaxSection>
        <ParallaxSection speed={0.3}>
          <Portfolio />
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <Services />
        </ParallaxSection>
        <Stats />
        <ParallaxSection speed={0.2}>
          <Contact />
        </ParallaxSection>
        <ScrollToTop />
      </main>
    </>
  )
}

