import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import tavolo from '../assets/tavolo-apparecchiato-fiori.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const heroImageRef = useRef(null)

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
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      const cards = sectionRef.current.querySelectorAll('.menu-card')
      gsap.fromTo(cards,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="menu" ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Intro */}
      <div className="px-8 md:px-16 lg:px-24 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-10">
              <span className="w-16 h-px bg-[#c9a962]/40" />
              <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.6em] uppercase">
                I Nostri Piatti
              </span>
            </div>
            <h2
              ref={titleRef}
              className="font-display text-[11vw] md:text-[8vw] lg:text-[5vw] text-white leading-[0.95] tracking-[-0.03em]"
              style={{ perspective: '1000px' }}
            >
              Sapori della tradizione alpina
            </h2>
          </div>
        </div>
      </div>

      {/* Hero image - tavolo apparecchiato */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden" ref={heroImageRef}>
        <img
          src={tavolo}
          alt="Tavolo apparecchiato con cura"
          className="absolute inset-0 w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-transparent" />

        <div className="absolute bottom-16 md:bottom-24 left-8 md:left-16 lg:left-24 z-10">
          <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase block mb-4">
            Cura del Dettaglio
          </span>
          <span className="font-display text-5xl md:text-7xl text-white leading-none block mb-3">
            A Tavola
          </span>
          <span className="font-serif text-white/60 text-lg italic">
            Ogni piatto racconta il territorio
          </span>
        </div>
      </div>

      {/* Menu description */}
      <div className="px-8 md:px-16 lg:px-24 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl md:text-5xl text-white/90 italic leading-[1.2]">
              Cucina tipica di montagna con ingredienti locali e stagionali.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <p className="font-sans text-white/50 text-base md:text-lg leading-[2]">
              La nostra cucina celebra i sapori autentici delle Dolomiti.
              Piatti della tradizione preparati con materie prime locali,
              dalle erbe alpine ai formaggi di malga, dalla selvaggina
              ai funghi dei boschi circostanti. Un viaggio gastronomico
              che cambia con le stagioni.
            </p>
          </div>
        </div>
      </div>

      {/* Menu cards */}
      <div className="px-8 md:px-16 lg:px-24 pb-32 md:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Antipasti & Primi */}
          <div className="menu-card group relative p-10 md:p-14 border border-white/10 hover:border-[#c9a962]/30 transition-colors duration-700">
            <div className="absolute top-0 left-10 md:left-14 -translate-y-1/2">
              <span className="font-sans text-[#0a0a0a] text-[10px] tracking-[0.4em] uppercase bg-[#c9a962] px-4 py-2">
                Primi Piatti
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl text-white leading-none mb-8 mt-4">
              Tradizione
            </h3>
            <div className="space-y-6 mb-10">
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Canederli in brodo</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Strangolapreti al burro e salvia</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Spätzle ai finferli</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Zuppa d'orzo alla trentina</span>
              </div>
            </div>
          </div>

          {/* Secondi */}
          <div className="menu-card group relative p-10 md:p-14 border border-white/10 hover:border-[#c9a962]/30 transition-colors duration-700">
            <div className="absolute top-0 left-10 md:left-14 -translate-y-1/2">
              <span className="font-sans text-[#0a0a0a] text-[10px] tracking-[0.4em] uppercase bg-[#c9a962] px-4 py-2">
                Secondi Piatti
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl text-white leading-none mb-8 mt-4">
              Montagna
            </h3>
            <div className="space-y-6 mb-10">
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Cervo con polenta e mirtilli</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Gulasch con canederli di pane</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Costine affumicate con crauti</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Trota del torrente alle erbe alpine</span>
              </div>
            </div>
          </div>

          {/* Dolci */}
          <div className="menu-card group relative p-10 md:p-14 border border-white/10 hover:border-[#c9a962]/30 transition-colors duration-700">
            <div className="absolute top-0 left-10 md:left-14 -translate-y-1/2">
              <span className="font-sans text-[#0a0a0a] text-[10px] tracking-[0.4em] uppercase bg-[#c9a962] px-4 py-2">
                Dolci
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl text-white leading-none mb-8 mt-4">
              Dolcezze
            </h3>
            <div className="space-y-6 mb-10">
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Strudel di mele fatto in casa</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Kaiserschmarren con confettura</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Torta di grano saraceno e mirtilli</span>
              </div>
              <div className="border-b border-white/5 pb-4">
                <span className="font-serif text-white/70 text-base italic block">Crostata di ricotta di malga</span>
              </div>
            </div>
          </div>
        </div>

        <p className="font-sans text-white/20 text-sm mt-16 text-center">
          Il menu varia in base alla stagionalità degli ingredienti
        </p>
      </div>

      {/* Wine section */}
      <div className="relative py-40 md:py-56 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />

        <div className="px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-6 mb-10">
                <span className="w-12 h-px bg-[#c9a962]/40" />
                <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
                  La Cantina
                </span>
              </div>
              <h3 className="font-display text-[12vw] md:text-[8vw] lg:text-[6vw] text-white leading-[0.9] mb-10">
                Vini del
                <span className="text-[#c9a962] block">Territorio</span>
              </h3>
              <p className="font-serif text-white/60 text-2xl md:text-3xl italic leading-relaxed mb-12">
                Una selezione di vini trentini e altoatesini
                per accompagnare ogni piatto.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Trentino DOC', 'Alto Adige', 'Grappe Artigianali'].map((tag) => (
                  <span
                    key={tag}
                    className="px-6 py-3 border border-white/10 text-white/50 font-sans text-[9px] tracking-[0.3em] uppercase hover:border-[#c9a962]/30 hover:text-white/70 transition-all duration-500 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
