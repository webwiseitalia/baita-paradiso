import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { motion } from 'framer-motion'
import terrazzaTramonto from '../assets/terrazza-tramonto-montagne.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const heroImageRef = useRef(null)
  const bookingRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(titleRef.current, {
        types: 'chars',
        tagName: 'span'
      })

      gsap.fromTo(titleSplit.chars,
        { y: 150, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.4,
          stagger: 0.02,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(heroImageRef.current.querySelector('img'),
        { scale: 1.4, filter: 'brightness(0.3)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.to(heroImageRef.current.querySelector('img'), {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      const contactItems = sectionRef.current.querySelectorAll('.contact-item')
      gsap.fromTo(contactItems,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactItems[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.fromTo(bookingRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bookingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contatti" ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Intro */}
      <div className="px-8 md:px-16 lg:px-24 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-10">
              <span className="w-16 h-px bg-[#c9a962]/40" />
              <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.6em] uppercase">
                Contatti & Prenotazioni
              </span>
            </div>
            <h2
              ref={titleRef}
              className="font-display text-[11vw] md:text-[8vw] lg:text-[5vw] text-white leading-[0.95] tracking-[-0.03em]"
              style={{ perspective: '1000px' }}
            >
              Vieni a trovarci nel cuore delle Dolomiti
            </h2>
          </div>
        </div>
      </div>

      {/* Hero image - terrazza */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden" ref={heroImageRef}>
        <img
          src={terrazzaTramonto}
          alt="La terrazza al tramonto con vista sulle montagne"
          className="absolute inset-0 w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-transparent" />
      </div>

      {/* Contact grid */}
      <div className="px-8 md:px-16 lg:px-24 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Left column - Info */}
          <div className="lg:col-span-5">
            <div className="space-y-20">
              {/* Address */}
              <div className="contact-item">
                <div className="flex items-center gap-6 mb-8">
                  <span className="w-12 h-px bg-[#c9a962]/40" />
                  <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
                    Dove Siamo
                  </span>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-white/90 italic leading-snug mb-8">
                  Dolomiti<br />
                  Trentino Alto Adige
                </p>
                <p className="font-sans text-white/40 text-base leading-relaxed">
                  Immersi nel cuore delle Dolomiti, in una posizione panoramica unica
                  con vista sulle vette più spettacolari.
                </p>
              </div>

              {/* Hours */}
              <div className="contact-item">
                <div className="flex items-center gap-6 mb-8">
                  <span className="w-12 h-px bg-[#c9a962]/40" />
                  <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
                    Orari
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-6">
                    <span className="font-sans text-white/30 text-[10px] tracking-[0.3em] uppercase">Pranzo</span>
                    <span className="font-display text-3xl text-white">12:00 — 14:30</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-white/10 pb-6">
                    <span className="font-sans text-white/30 text-[10px] tracking-[0.3em] uppercase">Cena</span>
                    <span className="font-display text-3xl text-white">19:00 — 22:00</span>
                  </div>
                </div>
                <p className="font-sans text-white/30 text-sm mt-8">
                  Aperto tutti i giorni in stagione
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Booking */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div
              id="prenota"
              ref={bookingRef}
              className="relative p-12 md:p-16 border border-white/10"
            >
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-[#c9a962]/30" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-[#c9a962]/30" />

              <div className="flex items-center gap-6 mb-10">
                <span className="w-12 h-px bg-[#c9a962]/40" />
                <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
                  Prenotazioni
                </span>
              </div>

              <h3 className="font-display text-[12vw] md:text-[7vw] text-white leading-[0.9] mb-10">
                Prenota il
                <span className="text-[#c9a962] block">tuo tavolo</span>
              </h3>

              <p className="font-serif text-white/50 text-xl md:text-2xl italic leading-relaxed mb-14">
                La prenotazione è consigliata per garantire il miglior servizio.
              </p>

              <div className="space-y-6">
                <motion.a
                  href="tel:+390000000000"
                  className="group flex items-center justify-between w-full py-6 px-8 bg-[#c9a962] text-[#0a0a0a]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase font-medium">
                    Chiama ora
                  </span>
                  <svg className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="mailto:info@baitaparadiso.it?subject=Prenotazione Tavolo"
                  className="group flex items-center justify-between w-full py-6 px-8 border border-white/20 text-white hover:bg-white hover:text-[#0a0a0a] transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase">
                    Scrivi email
                  </span>
                  <svg className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </div>

              <div className="mt-14 pt-8 border-t border-white/10">
                <a
                  href="mailto:info@baitaparadiso.it"
                  className="font-sans text-white/40 text-base hover:text-[#c9a962] transition-colors duration-500"
                >
                  info@baitaparadiso.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
