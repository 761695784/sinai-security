import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Building,
  GraduationCap,
  Handshake
} from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos | SINAI SECURITE - Notre Histoire et Nos Valeurs",
  description: "Découvrez SINAI SECURITE SUARL, leader de la sécurité privée au Sénégal depuis plus de 10 ans. Notre mission, nos valeurs et notre engagement envers l'excellence.",
}

const values = [
  {
    icon: Shield,
    title: "Intégrité",
    description: "Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque mission et dépassons les attentes de nos clients.",
  },
  {
    icon: Eye,
    title: "Vigilance",
    description: "Une attention constante aux détails pour anticiper et prévenir les risques.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Un dévouement total envers la sécurité et le bien-être de nos clients.",
  },
]

const milestones = [
  { year: "2013", title: "Création", description: "Fondation de SINAI SECURITE SUARL à Dakar" },
  { year: "2015", title: "Expansion", description: "Ouverture de bureaux régionaux au Sénégal" },
  { year: "2017", title: "Certification", description: "Obtention de la certification ISO 9001" },
  { year: "2019", title: "Innovation", description: "Lancement des services de vidéosurveillance" },
  { year: "2022", title: "Excellence", description: "Reconnaissance comme leader du secteur" },
  { year: "2024", title: "Développement", description: "Expansion continue des services et couverture régionale" },
]

const team = [
  {
    name: "Sébastien Marius Sagna",
    role: "Directeur Général",
    image: "/images/ceo-portrait.jpg",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                À Propos de Nous
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Votre Partenaire de Confiance en Sécurité
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis 2013, SINAI SECURITE SUARL s&apos;engage à protéger les entreprises et les particuliers au Sénégal avec professionnalisme, intégrité et dévouement.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    SINAI SECURITE SUARL a été fondée en 2013 à Dakar par des professionnels passionnés de la sécurité, déterminés à offrir des services de protection de haute qualité adaptés aux réalités du marché sénégalais.
                  </p>
                  <p>
                    Au fil des années, nous avons développé notre expertise et élargi notre gamme de services pour répondre aux besoins croissants de sécurité des entreprises, des institutions et des particuliers.
                  </p>
                  <p>
                    Aujourd&apos;hui, avec plus de 10 ans d&apos;expérience et une équipe dévouée de professionnels certifiés, nous sommes fiers d&apos;être reconnus comme l&apos;un des leaders de la sécurité privée au Sénégal, servant plus de 500 clients à travers le pays.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div className="text-center">
                    <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground">Années</p>
                  </div>
                  <div className="text-center">
                    <Handshake className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Clients</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/gallery/team-training.jpg"
                    alt="Équipe SINAI SECURITE en formation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fournir des solutions de sécurité innovantes et personnalisées qui protègent les personnes, les biens et les informations de nos clients, tout en contribuant à créer un environnement plus sûr pour la communauté sénégalaise.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Notre Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir la référence incontournable en matière de sécurité privée en Afrique de l&apos;Ouest, en combinant excellence opérationnelle, technologies de pointe et un service client irréprochable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Ce Qui Nous Guide
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nos Valeurs Fondamentales
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Notre Parcours
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Les Étapes Clés
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary md:-translate-x-1/2 z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="team" className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Direction
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Notre Leadership
              </h2>
            </div>

            <div className="max-w-md mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nos Certifications et Agréments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-muted-foreground">Système de management de la qualité certifié</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Agrément Ministériel</h3>
                <p className="text-sm text-muted-foreground">Autorisé par le Ministère de l&apos;Intérieur</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Centre de Formation</h3>
                <p className="text-sm text-muted-foreground">Agréé pour la formation des agents de sécurité</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Rejoignez les Entreprises qui Nous Font Confiance
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Découvrez comment SINAI SECURITE peut sécuriser votre entreprise avec des solutions sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold">
                <Link href="/quote">
                  Demander un Devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/contact">Nous Contacter</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
