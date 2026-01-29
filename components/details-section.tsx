import { MapPin, Clock, Shirt, Gift, Church } from "lucide-react"

const details = [
  {
    icon: Clock,
    title: "Horario",
    content: [
      "17:00 - Llegada de invitados",
      "17:30 - Ceremonia",
      "19:00 - Cóctel de bienvenida",
      "21:00 - Cena y fiesta",
    ],
  },
  {
    icon: Church,
    title: "Iglesia",
    content: ["Ermita de Nuestra Señora de la Paz", "C. de la Begonia, 277, 28109, Alcobendas, Madrid."],
    link: {
      label: "Ver en Google Maps",
      url: "https://www.google.com/maps/place/Ermita+de+Nuestra+Se%C3%B1ora+de+la+Paz/@40.5243406,-3.640027,16z/data=!4m16!1m9!3m8!1s0xd422c425b12830d:0xb8e741ab667e2cbd!2sErmita+de+Nuestra+Se%C3%B1ora+de+la+Paz!8m2!3d40.5243406!4d-3.640027!9m1!1b1!16s%2Fg%2F11x9jgjh9!3m5!1s0xd422c425b12830d:0xb8e741ab667e2cbd!8m2!3d40.5243406!4d-3.640027!16s%2Fg%2F11x9jgjh9?hl=es&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    },
  },
  {
    icon: MapPin,
    title: "Banquete",
    content: ["Finca Ronda", "Calle Diseminado, 160, 28770 Madrid"],
    link: {
      label: "Ver en Google Maps",
      url: "https://www.google.com/maps/place/Finca+Ronda/@40.683,-3.66029,17z/data=!4m16!1m9!3m8!1s0xd43d1340275b381:0xe8264e24b036280!2sFinca+Ronda!8m2!3d40.682996!4d-3.6577151!9m1!1b1!16s%2Fg%2F11clgm0n3h!3m5!1s0xd43d1340275b381:0xe8264e24b036280!8m2!3d40.682996!4d-3.6577151!16s%2Fg%2F11clgm0n3h?hl=es&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    },
  },
  {
    icon: Gift,
    title: "Regalos",
    content: [
      "Vuestra presencia es lo más importante para nosotros.",
      "Si deseáis tener un detalle,",
      "podéis hacerlo de la forma que os resulte mas cómoda.",
    ],
  },
]

export function DetailsSection() {
  return (
    <section id="detalles" className="py-24" style={{ backgroundColor: '#ff990a54' }}>
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
            <img src="/fotofinca1.jpg" alt="Mapa de la ubicación" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <a
                href="https://www.google.com/maps/place/Finca+Ronda/@40.683,-3.66029,17z/data=!4m16!1m9!3m8!1s0xd43d1340275b381:0xe8264e24b036280!2sFinca+Ronda!8m2!3d40.682996!4d-3.6577151!9m1!1b1!16s%2Fg%2F11clgm0n3h!3m5!1s0xd43d1340275b381:0xe8264e24b036280!8m2!3d40.682996!4d-3.6577151!16s%2Fg%2F11clgm0n3h?hl=es&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
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
