"use client"

import { useState, useEffect } from "react"

const weddingDate = new Date("2026-06-13T17:30:00")

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
    <section id="countdown" className="py-24" style={{ backgroundColor: '#787f5c' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-4">Cuenta atrás</h1>
        <p className="font-serif text-xl md:text-2xl text-white/90 mb-12">Para el día más especial de nuestras vidas</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {Object.entries(timeLeft).map(([label, value]) => {
            const labelMap: Record<string, string> = {
              días: 'DÍAS',
              horas: 'HORAS',
              minutos: 'MINUTOS',
              segundos: 'SEGUNDOS'
            }
            return (
              <div key={label} className="text-center">
                <div 
                  className="rounded-2xl p-6 md:p-8 shadow-lg border border-white/30"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <span className="font-serif text-5xl md:text-7xl font-light text-white block">
                    {value.toString()}
                  </span>
                </div>
                <p className="mt-4 text-sm font-sans tracking-widest uppercase text-white">{labelMap[label] || label.toUpperCase()}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
