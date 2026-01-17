import { Heart } from "lucide-react"

const timeline = [
  {
    year: "2018",
    title: "Nos conocimos",
    description:
      "Un encuentro casual en la playa de Palma durante el verano. Nuestras miradas se cruzaron y supimos que algo especial estaba comenzando.",
  },
  {
    year: "2019",
    title: "Primera cita",
    description:
      "Una cena romántica en un pequeño restaurante del casco antiguo de Palma. Hablamos durante horas y el tiempo pareció detenerse.",
  },
  {
    year: "2021",
    title: "Nuestro primer hogar",
    description: "Decidimos dar el paso y mudarnos juntos. Cada día aprendemos algo nuevo el uno del otro.",
  },
  {
    year: "2024",
    title: "La propuesta",
    description:
      "En el mismo lugar donde nos conocimos, Jaume se arrodilló al atardecer y Mar dijo que sí entre lágrimas de felicidad.",
  },
]

export function OurStorySection() {
  return (
    <section id="historia" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">Nuestra Historia</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Cómo nos conocimos</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        {/* Couple Photo */}
        <div className="relative mb-20">
          <div className="aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
            <img src="/romantic-couple-portrait-beach-sunset-warm-tones-m.jpg" alt="Mar y Jaume" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card p-4 rounded-full shadow-lg border border-border">
            <Heart className="w-8 h-8 text-primary fill-primary/20" />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Year bubble */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-primary rounded-full flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="inline-block font-serif text-xl text-primary mb-2">{item.year}</span>
                  <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
