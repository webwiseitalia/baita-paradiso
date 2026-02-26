import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const footerElements = footerRef.current.querySelectorAll('.footer-element')

      gsap.fromTo(footerElements,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      )

    }, footerRef)

    return () => ctx.revert()
  }, [])

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
  ]

  return (
    <footer ref={footerRef} className="relative bg-[#050505]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />

      <div className="relative px-8 md:px-16 lg:px-24 pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Logo and brand */}
          <div className="lg:col-span-4 footer-element">
            <span className="font-display text-3xl text-white mb-10 block">
              Baita <span className="text-[#c9a962]">Paradiso</span>
            </span>
            <p className="font-serif text-white/40 text-lg italic leading-relaxed max-w-sm mb-12">
              Ristorante e rifugio nel cuore delle Dolomiti.
              Sapori autentici e vista mozzafiato.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:col-start-6 footer-element">
            <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase block mb-10">
              Navigazione
            </span>
            <nav className="space-y-5">
              {[
                { label: 'La Baita', href: '#storia' },
                { label: 'Ambienti', href: '#ambienti' },
                { label: 'Menu', href: '#menu' },
                { label: 'Contatti', href: '#contatti' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-white/50 text-base tracking-wider hover:text-[#c9a962] transition-colors duration-500 block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 footer-element">
            <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase block mb-10">
              Contatti
            </span>
            <div className="space-y-8">
              <div>
                <a
                  href="mailto:info@baitaparadiso.it"
                  className="font-sans text-white/40 text-base hover:text-[#c9a962] transition-colors duration-500 block"
                >
                  info@baitaparadiso.it
                </a>
              </div>
              <div>
                <span className="font-serif text-white/50 text-base italic leading-relaxed block">
                  Dolomiti<br />
                  Trentino Alto Adige
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2 footer-element">
            <span className="font-sans text-[#c9a962] text-[9px] tracking-[0.5em] uppercase block mb-10">
              Orari
            </span>
            <div className="space-y-6">
              <div>
                <span className="font-sans text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-2">Pranzo</span>
                <span className="font-serif text-white/60 text-lg">12:00 — 14:30</span>
              </div>
              <div>
                <span className="font-sans text-white/30 text-[9px] tracking-[0.3em] uppercase block mb-2">Cena</span>
                <span className="font-serif text-white/60 text-lg">19:00 — 22:00</span>
              </div>
            </div>
            <p className="font-sans text-white/20 text-sm mt-8">
              Aperto in stagione
            </p>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="px-8 md:px-16 lg:px-24 py-8 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-10">
          <span className="font-sans text-white/20 text-[9px] tracking-[0.4em] uppercase">
            Seguici
          </span>
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-white/40 text-sm tracking-wider hover:text-[#c9a962] transition-colors duration-500"
              whileHover={{ x: 5 }}
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative px-8 md:px-16 lg:px-24 py-10 border-t border-white/5">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <span className="font-sans text-white/20 text-[11px] tracking-wider">
            © {currentYear} Baita Paradiso — Tutti i diritti riservati
          </span>

          <div className="flex gap-10">
            {['Privacy Policy', 'Cookie Policy'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-sans text-white/20 text-[11px] tracking-wider hover:text-[#c9a962] transition-colors duration-500"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none hidden lg:block">
        <span className="font-display text-[30vw] text-white/[0.015] leading-none block translate-x-[15%] translate-y-[35%]">
          BP
        </span>
      </div>
    </footer>
  )
}
