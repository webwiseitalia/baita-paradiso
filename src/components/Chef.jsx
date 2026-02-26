import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { motion, AnimatePresence } from 'framer-motion'
import salaLegno from '../assets/sala-legno-panoramica.webp'
import salaTradizionale from '../assets/sala-tradizionale-stufa.webp'
import tavoloApparecchiato from '../assets/tavolo-apparecchiato-fiori.webp'
import terrazzaTramonto from '../assets/terrazza-tramonto-montagne.webp'
import terrazzaInverno from '../assets/terrazza-inverno-panoramica.webp'
import terrazzaAperitivo from '../assets/terrazza-aperitivo-tramonto.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Chef() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const heroImageRef = useRef(null)
  const galleryRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: salaTradizionale, alt: 'Sala tradizionale con stufa', caption: 'Tradizione Alpina' },
    { src: tavoloApparecchiato, alt: 'Tavolo apparecchiato', caption: 'Cura del Dettaglio' },
    { src: terrazzaTramonto, alt: 'Terrazza al tramonto', caption: 'Tramonto in Quota' },
    { src: terrazzaInverno, alt: 'Terrazza invernale panoramica', caption: 'Vista Dolomiti' },
    { src: terrazzaAperitivo, alt: 'Aperitivo sulla terrazza', caption: 'Atmosfera Conviviale' },
  ]

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
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      const galleryItems = galleryRef.current.querySelectorAll('.gallery-item')
      galleryItems.forEach((item) => {
        gsap.fromTo(item,
          { y: 80, opacity: 0, scale: 1.05 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        gsap.to(item.querySelector('img'), {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5
          }
        })
      })

      const features = sectionRef.current.querySelectorAll('.feature-item')
      gsap.fromTo(features,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: features[0],
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="ambienti" ref={sectionRef} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Intro */}
      <div className="px-8 md:px-16 lg:px-24 pt-40 md:pt-56 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-10">
              <span className="w-16 h-px bg-[#c9a962]/40" />
              <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.6em] uppercase">
                Sala & Terrazza
              </span>
            </div>
            <h2
              ref={titleRef}
              className="font-display text-[11vw] md:text-[8vw] lg:text-[5vw] text-white leading-[0.95] tracking-[-0.03em]"
              style={{ perspective: '1000px' }}
            >
              Legno antico, vista infinita sulle Dolomiti
            </h2>
          </div>
        </div>
      </div>

      {/* Hero image - Sala con vista panoramica */}
      <div className="relative h-[80vh] md:h-[95vh] overflow-hidden" ref={heroImageRef}>
        <img
          src={salaLegno}
          alt="Sala in legno con vista panoramica sulle Dolomiti"
          className="absolute inset-0 w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-transparent" />

        <div className="absolute bottom-16 md:bottom-24 left-8 md:left-16 lg:left-24">
          <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase block mb-4">
            La Sala Panoramica
          </span>
          <span className="font-display text-5xl md:text-7xl text-white leading-none block mb-3">
            Calore Alpino
          </span>
          <span className="font-serif text-white/60 text-lg italic">
            Legno, pietra e vista sulle vette
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="px-8 md:px-16 lg:px-24 py-32 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          <div className="lg:col-span-5">
            <p className="font-serif text-4xl md:text-5xl text-white/90 italic leading-[1.2]">
              Ambienti unici dove ogni dettaglio racconta la montagna.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
            <p className="font-sans text-white/50 text-base md:text-lg leading-[2] mb-12">
              Due sale dal carattere distinto: la sala superiore con le grandi vetrate
              panoramiche e le travi a vista, e la sala inferiore con la tradizionale
              stufa in maiolica e il calore del legno antico. All'esterno, la grande
              terrazza con vista a 360 gradi sulle Dolomiti.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-8 md:px-16 lg:px-24 pb-32 md:pb-48" ref={galleryRef}>
        <div className="mb-16 flex items-center gap-6">
          <span className="w-12 h-px bg-[#c9a962]/40" />
          <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
            Gli Ambienti
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryImages.map((image, i) => (
            <div
              key={image.alt}
              className={`gallery-item relative overflow-hidden group cursor-pointer ${
                i === 0 ? 'md:col-span-2 aspect-[2/1]' :
                i === 3 ? 'md:col-span-2 lg:col-span-1 aspect-square' :
                'aspect-[4/3]'
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-[120%] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="font-display text-3xl text-white leading-none block">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="relative py-32 md:py-40 border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />

        <div className="relative px-8 md:px-16 lg:px-24">
          <div className="mb-20">
            <div className="flex items-center gap-6 mb-10">
              <span className="w-12 h-px bg-[#c9a962]/40" />
              <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase">
                Servizi
              </span>
            </div>
            <p className="font-serif text-3xl md:text-4xl text-white/80 italic max-w-xl">
              Ogni dettaglio pensato per il vostro comfort in quota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
            {[
              { name: 'Terrazza Panoramica', desc: 'Vista 360° sulle Dolomiti', num: '01' },
              { name: 'Sala Tradizionale', desc: 'Stufa in maiolica e legno antico', num: '02' },
              { name: 'Sala Panoramica', desc: 'Grandi vetrate e travi a vista', num: '03' },
              { name: 'Pet Friendly', desc: 'Animali ammessi', num: '04' },
            ].map((feature) => (
              <div key={feature.name} className="feature-item group border-t border-white/10 pt-8">
                <span className="font-sans text-white/20 text-[10px] tracking-[0.4em] uppercase block mb-4">
                  {feature.num}
                </span>
                <span className="font-display text-white text-2xl md:text-3xl block mb-3 group-hover:text-[#c9a962] transition-colors duration-700">
                  {feature.name}
                </span>
                <span className="font-sans text-white/40 text-sm">
                  {feature.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0a0a]/98 z-50 flex items-center justify-center p-8 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
            />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 font-display text-4xl text-white"
            >
              {selectedImage.caption}
            </motion.span>
            <button
              className="absolute top-8 right-8 text-white/30 hover:text-white text-5xl font-light transition-colors duration-500"
              onClick={() => setSelectedImage(null)}
              aria-label="Chiudi"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
