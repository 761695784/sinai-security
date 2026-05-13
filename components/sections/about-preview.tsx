import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote, ArrowRight } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/ceo-portrait.jpg"
                alt="Directeur Général de SINAI SECURITE"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Mot du Directeur
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-balance">
              Un Engagement Total pour Votre Sécurité
            </h2>

            {/* Quote */}
            <div className="relative mb-8">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
              <blockquote className="text-lg text-muted-foreground leading-relaxed pl-8 border-l-2 border-primary">
                &ldquo;Depuis la création de SINAI SECURITE, notre mission reste inchangée: offrir à nos clients une protection de qualité supérieure, avec des équipes formées aux plus hauts standards internationaux. La confiance que nos clients nous accordent est notre plus grande fierté.&rdquo;
              </blockquote>
            </div>

            {/* Signature */}
            <div className="mb-8">
              <p className="font-semibold text-foreground">Sébastien Marius Sagna</p>
              <p className="text-sm text-muted-foreground">Directeur Général, SINAI SECURITE SUARL</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-2xl font-bold text-primary mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Années d&apos;expertise</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <p className="text-2xl font-bold text-primary mb-1">99%</p>
                <p className="text-sm text-muted-foreground">Satisfaction client</p>
              </div>
            </div>

            <Button asChild className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold">
              <Link href="/about">
                Découvrir Notre Histoire
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
