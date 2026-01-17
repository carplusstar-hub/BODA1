const photos = [
  { query: "romantic couple beach sunset Mallorca", span: "col-span-2 row-span-2" },
  { query: "engagement ring romantic hand close up", span: "col-span-1 row-span-1" },
  { query: "couple laughing together outdoor natural", span: "col-span-1 row-span-1" },
  { query: "romantic couple walking beach golden hour", span: "col-span-1 row-span-2" },
  { query: "couple portrait romantic embrace sunset", span: "col-span-1 row-span-1" },
  { query: "romantic couple olive grove Mediterranean", span: "col-span-2 row-span-1" },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">Momentos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">Nuestra galería</h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {photos.map((photo, index) => (
            <div key={index} className={`${photo.span} overflow-hidden rounded-lg group cursor-pointer`}>
              <img
                src={`/.jpg?height=400&width=600&query=${encodeURIComponent(photo.query)}`}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
