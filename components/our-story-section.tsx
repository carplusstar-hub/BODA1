import { Heart } from "lucide-react"


export function OurStorySection() {
  return (
    <section id="historia" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        {/* Couple Photo */}
        <div className="relative mb-20">
          <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
            <img src="/videoboda.gif" alt="Carmen y Pablo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card p-4 rounded-full shadow-lg border border-border">
            <Heart className="w-8 h-8 text-primary fill-primary/20" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

        </div>
      </div>
    </section>
  )
}
