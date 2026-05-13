import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Shield } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Prêt à Sécuriser Votre Avenir ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et découvrez comment SINAI SECURITE peut répondre à vos besoins spécifiques en matière de protection.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold text-base px-8 w-full sm:w-auto">
              <Link href="/quote">
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-base px-8 w-full sm:w-auto">
              <a href="tel:+221338000000">
                <Phone className="mr-2 w-5 h-5" />
                +221 33 868 04 26
              </a>
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-8">
            Réponse garantie sous 24h - Devis gratuit et sans engagement
          </p>
        </div>
      </div>
    </section>
  )
}
