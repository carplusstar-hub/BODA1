import { MapPin, Clock, Shirt, Gift } from "lucide-react"

const details = [
  {
    icon: MapPin,
    title: "Ceremonia & Celebración",
    content: ["Finca Son Marroig", "Carretera Valldemossa-Deià, Km 65.5", "07179 Deià, Mallorca"],
    link: {
      label: "Ver en Google Maps",
      url: "https://maps.google.com",
    },
  },
  {
    icon: Clock,
    title: "Horario",
    content: [
      "17:00 - Llegada de invitados",
      "17:30 - Ceremonia civil",
      "19:00 - Cóctel de bienvenida",
      "21:00 - Cena y fiesta",
    ],
  },
  {
    icon: Shirt,
    title: "Código de vestimenta",
    content: ["Elegante / Formal", "La ceremonia será al aire libre,", "recomendamos zapatos cómodos."],
  },
  {
    icon: Gift,
    title: "Lista de bodas",
    content: [
      "Vuestra presencia es el mejor regalo.",
      "Si deseáis tener un detalle,",
      "podéis contribuir a nuestra luna de miel.",
    ],
    link: {
      label: "Ver lista de bodas",
      url: "#",
    },
  },
]

export function DetailsSection() {
  return (
    <section id="detalles" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">Información</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Detalles del evento</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="bg-card p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{detail.title}</h3>
                  {detail.content.map((line, index) => (
                    <p key={index} className="text-muted-foreground text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                  {detail.link && (
                    <a
                      href={detail.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      {detail.link.label} →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-sm border border-border/50">
          <div className="aspect-[21/9] bg-muted relative">
            <img src="/mallorca-spain-map-finca-wedding-venue-aerial-view.jpg" alt="Mapa de la ubicación" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card px-6 py-3 rounded-full font-sans text-sm font-medium text-foreground shadow-lg hover:shadow-xl transition-shadow"
              >
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
