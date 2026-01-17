"use client"

import { useState, useEffect } from "react"

const weddingDate = new Date("2025-09-14T17:00:00")

interface TimeLeft {
  días: number
  horas: number
  minutos: number
  segundos: number
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">Cuenta atrás</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-12">Esperando el gran día</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="text-center">
              <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border/50">
                <span className="font-serif text-5xl md:text-7xl font-light text-primary">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm font-sans tracking-widest uppercase text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
