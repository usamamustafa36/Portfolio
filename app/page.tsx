'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Research from '@/components/Research'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import CustomCursor from '@/components/CustomCursor'
import Stats from '@/components/Stats'
import ParallaxSection from '@/components/ParallaxSection'
import ScrollToTop from '@/components/ScrollToTop'
import SkipToContent from '@/components/SkipToContent'

export default function Home() {
  useEffect(() => {
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
          if (process.env.NODE_ENV === 'development') {
            // eslint-disable-next-line no-console
            console.error('Failed to load GSAP ScrollTrigger:', error)
          }
        }
      }
      initGSAP()
    }
  }, [])

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
      <CustomCursor />
      <main
        id="main-content"
        className="min-h-screen relative"
        style={{ background: '#071020' }}
        role="main"
      >
        <Navigation />
        <Hero />
        <ParallaxSection speed={0.15}>
          <About />
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <Research />
        </ParallaxSection>
        <ParallaxSection speed={0.15}>
          <Services />
        </ParallaxSection>
        <ParallaxSection speed={0.2}>
          <Portfolio />
        </ParallaxSection>
        <Stats />
        <ParallaxSection speed={0.15}>
          <Contact />
        </ParallaxSection>
        <ScrollToTop />
      </main>
    </>
  )
}
