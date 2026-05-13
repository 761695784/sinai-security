"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"

const stats = [
  { value: 500, suffix: "+", label: "Clients Satisfaits" },
  { value: 10, suffix: "+", label: "Années d'Expérience" },
  { value: 24, suffix: "/7", label: "Disponibilité" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-security.jpg"
          alt="Équipe de sécurité professionnelle SINAI"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Leader de la Sécurité au Sénégal</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            <span className="text-balance">Votre Sécurité,</span>
            <br />
            <span className="text-gradient">Notre Engagement</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            SINAI SECURITE SUARL offre des services de sécurité privée de premier plan à Dakar et partout au Sénégal. Protection professionnelle, surveillance 24h/24, et tranquillité d&apos;esprit garantie.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Agents Certifiés", "Surveillance 24/7", "Intervention Rapide"].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold text-base px-8">
              <Link href="/quote">
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary font-medium text-base px-8">
              <Link href="/services">Découvrir Nos Services</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 w-full flex flex-wrap justify-center gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center min-w-[160px] flex-1 max-w-[220px]"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
