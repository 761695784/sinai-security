import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Galerie | SINAI SECURITE - Nos Réalisations en Images",
  description: "Découvrez en images les missions et réalisations de SINAI SECURITE: gardiennage, protection VIP, événementiel et surveillance.",
}

const galleryImages = [
  {
    src: "/images/gallery/taf-top.jpg",
    alt: "Équipe SINAI SECURITE en uniforme",
    category: "Équipe",
  },
  {
    src: "/images/gallery/equipe-sinai.jpg",
    alt: "Grand rassemblement de l'équipe SINAI SECURITE",
    category: "Équipe",
  },
  {
    src: "/images/gallery/sinai-team.jpg",
    alt: "Agents SINAI SECURITE en formation",
    category: "Équipe",
  },
  {
    src: "/images/gallery/top-tof.jpg",
    alt: "Agents SINAI SECURITE en alignement",
    category: "Équipe",
  },
  {
    src: "/images/gallery/tres-sinai.jpg",
    alt: "Agents SINAI SECURITE en poste de gardiennage",
    category: "Gardiennage",
  },
  {
    src: "/images/gallery/gardinnage-sinai.jpg",
    alt: "Agents SINAI SECURITE au Stade Léopold Sédar Senghor",
    category: "Gardiennage",
  },
  {
    src: "/images/gallery/route-sinai.jpg",
    alt: "Agent SINAI SECURITE en régulation de circulation",
    category: "Gardiennage",
  },
  {
    src: "/images/gallery/siani-event.jpg",
    alt: "Sécurité événementielle SINAI SECURITE",
    category: "Événementiel",
  },
  {
    src: "/images/gallery/team-stade.jpg",
    alt: "Équipe SINAI SECURITE déployée au stade",
    category: "Événementiel",
  },
  {
    src: "/images/gallery/tof-top.jpg",
    alt: "Agents SINAI SECURITE en ordre de marche",
    category: "Formation",
  },
  {
    src: "/images/gallery/top-sinai.jpg",
    alt: "Agents SINAI SECURITE en tenue opérationnelle",
    category: "Formation",
  },
  {
    src: "/images/ceo-portrait.jpg",
    alt: "Direction SINAI SECURITE",
    category: "Direction",
  },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Notre Galerie
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                SINAI SECURITE en Images
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Découvrez nos équipes en action, nos installations de pointe et notre engagement quotidien pour la sécurité de nos clients.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid images={galleryImages} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Impressionné par Notre Travail ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour découvrir comment SINAI SECURITE peut protéger votre entreprise avec le même professionnalisme.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold">
              <Link href="/quote">
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
