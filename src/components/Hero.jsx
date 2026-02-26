import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import heroImage from '../assets/baita-inverno-aerea.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headlineSplit = new SplitType(headlineRef.current, {
        types: 'chars',
        tagName: 'span'
      })

      const subtitleSplit = new SplitType(subtitleRef.current, {
        types: 'chars',
        tagName: 'span'
      })

      gsap.set(headlineSplit.chars, { y: 200, opacity: 0, rotateX: -90 })
      gsap.set(subtitleSplit.chars, { y: 30, opacity: 0 })
      gsap.set(imageRef.current, { scale: 1.5, filter: 'brightness(0)' })
      gsap.set(overlayRef.current, { scaleY: 1 })
      gsap.set(lineRef.current, { scaleX: 0 })

      const tl = gsap.timeline({ delay: 0.5 })

      tl.to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 2,
        ease: 'power4.inOut'
      })
      .to(imageRef.current, {
        scale: 1,
        filter: 'brightness(1)',
        duration: 3,
        ease: 'power2.out'
      }, '<')
      .to(headlineSplit.chars, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.6,
        stagger: 0.03,
        ease: 'power4.out'
      }, '-=2')
      .to(lineRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.inOut'
      }, '-=1')
      .to(subtitleSplit.chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.015,
        ease: 'power3.out'
      }, '-=0.6')

      gsap.to(imageRef.current, {
        y: 250,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      gsap.to(headlineRef.current, {
        y: 150,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[100svh] min-h-[900px] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div ref={overlayRef} className="absolute inset-0 bg-[#0a0a0a] z-20" />
        <img
          ref={imageRef}
          src={heroImage}
          alt="Baita Paradiso tra le montagne innevate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 /%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Main content */}
      <div className="relative z-30 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-24 md:pb-32">
        <div className="max-w-7xl">
          <div className="mb-8 md:mb-12">
            <span className="font-sans text-[#c9a962] text-[10px] md:text-[11px] tracking-[0.5em] uppercase">
              Ristorante & Rifugio · Dolomiti
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="font-display text-[15vw] md:text-[11vw] lg:text-[9vw] text-white leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ perspective: '1000px' }}
          >
            Baita Paradiso
          </h1>

          <div ref={lineRef} className="w-32 md:w-48 h-px bg-[#c9a962] mb-8 origin-left" />

          <p
            ref={subtitleRef}
            className="font-serif text-white/70 text-lg md:text-xl lg:text-2xl italic tracking-wide max-w-lg"
          >
            Sapori autentici nel cuore delle Dolomiti
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-8 md:px-16 lg:px-24 py-8 flex justify-between items-end">
        <a
          href="#prenota"
          className="group flex items-center gap-6"
        >
          <span className="font-sans text-white/60 text-[10px] tracking-[0.5em] uppercase group-hover:text-[#c9a962] transition-colors duration-700">
            Prenota un tavolo
          </span>
          <span className="w-16 h-px bg-white/30 group-hover:w-24 group-hover:bg-[#c9a962] transition-all duration-700" />
        </a>

        <div className="hidden md:flex flex-col items-center gap-4">
          <span className="font-sans text-white/30 text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-white/0 via-white/20 to-white/40" />
        </div>

        <div className="hidden md:block text-right">
          <span className="font-mono text-white/25 text-[10px] tracking-wider block">
            Dolomiti
          </span>
          <span className="font-sans text-white/40 text-[9px] tracking-[0.2em] uppercase">
            Trentino Alto Adige
          </span>
        </div>
      </div>
    </section>
  )
}
