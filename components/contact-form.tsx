"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Message Envoyé !
        </h3>
        <p className="text-muted-foreground">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nom complet *</Label>
          <Input
            id="contact-name"
            name="name"
            placeholder="Votre nom"
            required
            className="bg-background"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            className="bg-background"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">Téléphone</Label>
        <Input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+221 XX XXX XX XX"
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Sujet *</Label>
        <Input
          id="contact-subject"
          name="subject"
          placeholder="Objet de votre message"
          required
          className="bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Votre message..."
          rows={4}
          required
          className="bg-background resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le Message"
        )}
      </Button>
    </form>
  )
}
