import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Carmen & Pablo</h2>
        <p className="text-lg font-serif opacity-80 mb-6">13 de Junio de 2026</p>
        <div className="flex items-center justify-center gap-2 text-sm opacity-60">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 fill-current" />
          <span>en Madrid</span>
        </div>
        <p className="mt-8 text-xs opacity-40">#CarmenYPablo2026</p>
      </div>
    </footer>
  )
}
