"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Loader2 } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react';


export function ContactForm() {
  const [state, handleSubmit] = useForm("mojwwnll");
  if (state.succeeded) {
    return (
      <section id="rsvp" className="py-24" style={{ backgroundColor: '##ff850066' }}>
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

    <section id="rsvp" className="py-24" style={{ backgroundColor: '#ff990a54' }}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4">Confirmación</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">RSVP</h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">Por favor, confirma tu asistencia lo antes posible</p>
          </div>
        </div>
    
    <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-lg">

    <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
               
              <div className="space-y-3 ">
                <Label htmlFor="name" className="text-foreground">
                  Nombre y apellido (añadir también nombre de acompañantes) *
                </Label>
                <textarea className="bg-background w-full hover:bg-primary/90 py-2 text-base font-medium tracking-wide;block p-2 rounded-md" required
                  id="nombre"
                  name="nombre"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground">
                  Alergias *
                </Label>
                <textarea className="bg-background w-full hover:bg-primary/90 py-2 text-base font-medium tracking-wide;block p-2 rounded-md" required
                  id="alergias"
                  name="alergias"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="name" className="text-foreground">
                  Asistencia (Si/No)*
                </Label>
                <textarea className="bg-background w-full hover:bg-primary/90 py-2 text-base font-medium tracking-wide;block p-2 rounded-md" required
                  id="asistencia"
                  name="asistencia"
                />
              </div>
              
            </div>


            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-medium tracking-wide"
            >Enviar respuesta
            </Button>
          </div>
    </form>
</section>
)
}






