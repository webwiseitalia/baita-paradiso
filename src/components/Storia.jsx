import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import baitaEstate from '../assets/baita-estate-montagne.webp'
import pozzoNeve from '../assets/pozzo-neve-dettaglio.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Storia() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const quoteRef = useRef(null)

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

      gsap.fromTo(image1Ref.current.querySelector('img'),
        { scale: 1.4, filter: 'brightness(0.3)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      gsap.to(image1Ref.current.querySelector('img'), {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: image1Ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      gsap.fromTo(image2Ref.current,
        { opacity: 0, y: 80, scale: 1.05 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image2Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      const quoteSplit = new SplitType(quoteRef.current, {
        types: 'words',
        tagName: 'span'
      })

      gsap.fromTo(quoteSplit.words,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.04,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="storia" ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Intro */}
      <div className="px-8 md:px-16 lg:px-24 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.6em] uppercase block mb-10">
              La Nostra Storia
            </span>
            <h2
              ref={titleRef}
              className="font-display text-[12vw] md:text-[8vw] lg:text-[5.5vw] text-white leading-[0.95] tracking-[-0.03em]"
              style={{ perspective: '1000px' }}
            >
              Una baita tra le vette dove il tempo si ferma
            </h2>
          </div>
        </div>
      </div>

      {/* Hero image - Baita in estate */}
      <div className="relative h-[80vh] md:h-[90vh] overflow-hidden" ref={image1Ref}>
        <img
          src={baitaEstate}
          alt="Baita Paradiso in estate con le montagne"
          className="absolute inset-0 w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-transparent" />

        <div className="absolute bottom-16 left-8 md:left-16 lg:left-24 z-10">
          <span className="font-sans text-white/40 text-[9px] tracking-[0.4em] uppercase block mb-2">
            Estate in Quota
          </span>
          <span className="font-display text-white/80 text-2xl md:text-3xl">
            Ai piedi delle Dolomiti
          </span>
        </div>
      </div>

      {/* Story content */}
      <div className="px-8 md:px-16 lg:px-24 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* Text column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-6 mb-12">
                <span className="w-16 h-px bg-[#c9a962]/40" />
                <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
                  Tradizione & Passione
                </span>
              </div>

              <p className="font-serif text-3xl md:text-4xl text-white/90 italic leading-[1.3] mb-10">
                Un luogo dove la tradizione montanara si fonde con l'ospitalità più autentica.
              </p>

              <p className="font-sans text-white/50 text-base leading-[2] mb-16">
                Baita Paradiso nasce dalla passione per la montagna e la cucina tipica.
                Tra le vette delle Dolomiti, offriamo un'esperienza unica: piatti della tradizione
                preparati con ingredienti locali, serviti in un ambiente caldo e accogliente
                con vista mozzafiato sulle cime.
              </p>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div ref={image2Ref} className="relative aspect-[3/4] overflow-hidden">
              <img
                src={pozzoNeve}
                alt="Dettaglio del pozzo innevato"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent" />
            </div>
            <div className="mt-8 flex items-start gap-4">
              <span className="w-8 h-px bg-white/20 mt-3" />
              <p className="font-sans text-white/30 text-sm leading-relaxed max-w-xs">
                Dettagli d'inverno: il fascino della neve sulle Dolomiti.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="relative py-40 md:py-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="font-display text-[40vw] text-white/[0.02] leading-none">"</span>
        </div>

        <div className="relative px-8 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <blockquote>
              <p
                ref={quoteRef}
                className="font-serif text-[7vw] md:text-[5vw] lg:text-[3.5vw] text-white italic leading-[1.2]"
              >
                Il paradiso non è un luogo lontano,
                <span className="text-[#c9a962] block mt-6">è qui, tra le montagne</span>
              </p>
              <footer className="mt-20 flex flex-col items-center gap-6">
                <span className="w-px h-16 bg-gradient-to-b from-transparent via-[#c9a962]/40 to-[#c9a962]" />
                <div className="text-center">
                  <span className="font-display text-xl text-white block mb-1">
                    Baita Paradiso
                  </span>
                  <span className="font-sans text-[9px] text-white/40 tracking-[0.4em] uppercase">
                    Dolomiti
                  </span>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
