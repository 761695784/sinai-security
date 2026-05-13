"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"

const services = [
  { id: "gardiennage", label: "Gardiennage" },
  { id: "vip", label: "Protection VIP" },
  { id: "evenement", label: "Sécurité Événementielle" },
  { id: "acces", label: "Contrôle d'Accès" },
  { id: "surveillance", label: "Vidéosurveillance" },
  { id: "transport", label: "Escorte et Transport" },
  { id: "autre", label: "Autre" },
]

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }

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
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Demande Envoyée !
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Merci pour votre demande. Notre équipe vous contactera sous 24 heures pour discuter de vos besoins en sécurité.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom *</Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Votre prénom"
            required
            className="bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom *</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Votre nom"
            required
            className="bg-card"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            className="bg-card"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+221 XX XXX XX XX"
            required
            className="bg-card"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Entreprise / Organisation</Label>
        <Input
          id="company"
          name="company"
          placeholder="Nom de votre entreprise (optionnel)"
          className="bg-card"
        />
      </div>

      {/* Services Selection */}
      <div className="space-y-3">
        <Label>Services souhaités *</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => toggleService(service.id)}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                selectedServices.includes(service.id)
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-card border-border text-foreground hover:border-primary/50"
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Décrivez votre besoin *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Décrivez votre projet, le type de lieu à sécuriser, le nombre de personnes concernées, etc."
          rows={5}
          required
          className="bg-card resize-none"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting || selectedServices.length === 0}
        className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma Demande de Devis"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par SINAI SECURITE concernant votre demande.
      </p>
    </form>
  )
}
