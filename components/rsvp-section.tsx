"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Loader2 } from "lucide-react"

export function RsvpSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attendance, setAttendance] = useState("yes")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-24 bg-secondary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-card p-12 rounded-lg shadow-sm border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-foreground mb-4">¡Gracias por confirmar!</h3>
            <p className="text-muted-foreground">
              Hemos recibido tu respuesta. Estamos deseando celebrar este día tan especial contigo.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-24 bg-secondary">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">Confirmación</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">RSVP</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">Por favor, confirma tu asistencia antes del 1 de Agosto de 2025</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-lg shadow-sm border border-border/50">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nombre completo *
                </Label>
                <Input id="name" required placeholder="Tu nombre" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email *
                </Label>
                <Input id="email" type="email" required placeholder="tu@email.com" className="bg-background" />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">¿Asistirás a la boda? *</Label>
              <RadioGroup value={attendance} onValueChange={setAttendance} className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-normal cursor-pointer">
                    Sí, asistiré con alegría
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal cursor-pointer">
                    Lo siento, no podré asistir
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {attendance === "yes" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-foreground">
                    Número de acompañantes
                  </Label>
                  <Input id="guests" type="number" min="0" max="5" defaultValue="0" className="bg-background w-24" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietary" className="text-foreground">
                    Restricciones alimentarias
                  </Label>
                  <Input id="dietary" placeholder="Vegetariano, alergias, etc." className="bg-background" />
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Mensaje para los novios
              </Label>
              <Textarea
                id="message"
                placeholder="Escribe un mensaje..."
                rows={4}
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium tracking-wide"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Confirmar asistencia"
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
