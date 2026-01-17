import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Mar & Jaume</h2>
        <p className="text-lg font-serif opacity-80 mb-6">14 de Septiembre, 2025</p>
        <div className="flex items-center justify-center gap-2 text-sm opacity-60">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 fill-current" />
          <span>en Mallorca</span>
        </div>
        <p className="mt-8 text-xs opacity-40">#MarYJaume2025</p>
      </div>
    </footer>
  )
}
