import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/PabloyCarmen.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-sm md:text-base font-sans tracking-[0.3em] uppercase mb-6 animate-fade-in">Nos casamos</p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-[0.1em] italic">Carmen & Pablo</h1>
        <div className="w-24 h-px bg-white/60 mx-auto mb-6" />
        <p className="text-xl md:text-2xl font-serif font-light tracking-wide mb-2">13 de Junio de 2026</p>
        <p className="text-base md:text-lg font-sans tracking-widest uppercase opacity-80">Madrid, España</p>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#countdown"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}
