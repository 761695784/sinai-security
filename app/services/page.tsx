import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Users, 
  Calendar, 
  Lock, 
  Video, 
  Car, 
  ArrowRight,
  UserCheck,
  Building,
  CheckCircle,
  Phone
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nos Services | SINAI SECURITE - Solutions de Sécurité Complètes",
  description: "Découvrez nos services de sécurité: gardiennage, protection VIP, sécurité événementielle, contrôle d'accès, vidéosurveillance et transport sécurisé.",
}

const services = [
  {
    id: "gardiennage",
    icon: Shield,
    title: "Gardiennage",
    subtitle: "Protection permanente de vos locaux",
    description: "Nos agents de sécurité qualifiés assurent la protection continue de vos locaux, que ce soit des bureaux, des entrepôts, des sites industriels ou des résidences. Nous garantissons une présence dissuasive et une intervention rapide en cas d'incident.",
    features: [
      "Rondes de surveillance régulières",
      "Contrôle des accès et des visiteurs",
      "Gestion des clés et des alarmes",
      "Rapports d'activité détaillés",
      "Intervention 24h/24",
      "Agents formés et certifiés",
    ],
    image: "/images/gallery/security-patrol.jpg",
  },
  {
    id: "vip",
    icon: UserCheck,
    title: "Protection VIP",
    subtitle: "Sécurité rapprochée personnalisée",
    description: "Un service de protection rapprochée discret et efficace pour les personnalités, dirigeants d'entreprise, diplomates et toute personne nécessitant une sécurité renforcée. Nos agents de protection sont formés aux techniques de défense et à la gestion des situations de crise.",
    features: [
      "Agents de protection qualifiés",
      "Analyse des risques personnalisée",
      "Escorte et accompagnement",
      "Sécurisation des déplacements",
      "Discrétion absolue",
      "Coordination avec les autorités",
    ],
    image: "/images/gallery/vip-protection.jpg",
  },
  {
    id: "evenement",
    icon: Calendar,
    title: "Sécurité Événementielle",
    subtitle: "Gestion complète de vos événements",
    description: "De la planification à l'exécution, nous assurons la sécurité de tous types d'événements: concerts, conférences, mariages, cérémonies officielles et rassemblements sportifs. Notre équipe coordonne tous les aspects sécuritaires pour garantir le bon déroulement de votre événement.",
    features: [
      "Étude préalable du site",
      "Plan de sécurité personnalisé",
      "Gestion des flux de visiteurs",
      "Contrôle des accès",
      "Équipe d'intervention rapide",
      "Coordination avec les secours",
    ],
    image: "/images/gallery/event-security.jpg",
  },
  {
    id: "acces",
    icon: Lock,
    title: "Contrôle d'Accès",
    subtitle: "Systèmes de contrôle modernes",
    description: "Installation et gestion de systèmes de contrôle d'accès pour sécuriser les entrées de vos bâtiments. Des solutions allant des badges électroniques aux systèmes biométriques, adaptées à vos besoins spécifiques et à la taille de votre organisation.",
    features: [
      "Badges et cartes magnétiques",
      "Systèmes biométriques",
      "Tourniquets et portiques",
      "Gestion centralisée des accès",
      "Historique des passages",
      "Intégration avec vidéosurveillance",
    ],
    image: "/images/gallery/access-control.jpg",
  },
  {
    id: "surveillance",
    icon: Video,
    title: "Vidéosurveillance",
    subtitle: "Surveillance électronique 24h/24",
    description: "Installation et monitoring de systèmes de vidéosurveillance haute définition. Notre centre de contrôle opère 24h/24 pour surveiller vos locaux et déclencher les interventions nécessaires en temps réel.",
    features: [
      "Caméras HD et 4K",
      "Surveillance en temps réel",
      "Enregistrement continu",
      "Détection de mouvement",
      "Accès à distance",
      "Stockage sécurisé des données",
    ],
    image: "/images/gallery/surveillance-center.jpg",
  },
  {
    id: "transport",
    icon: Car,
    title: "Escorte et Transport",
    subtitle: "Transport sécurisé de valeurs",
    description: "Service d'escorte et de transport sécurisé pour le transfert de fonds, de marchandises sensibles ou de personnalités. Nos véhicules banalisés et nos équipes formées garantissent la sécurité de vos biens et de vos personnes.",
    features: [
      "Véhicules sécurisés",
      "Équipes formées au transport de fonds",
      "Traçage GPS en temps réel",
      "Protocoles d'urgence",
      "Assurance complète",
      "Confidentialité garantie",
    ],
    image: "/images/gallery/team-training.jpg",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Nos Services
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Des Solutions de Sécurité Sur Mesure
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SINAI SECURITE propose une gamme complète de services de sécurité adaptés aux besoins spécifiques de chaque client, qu&apos;il s&apos;agisse d&apos;entreprises, d&apos;institutions ou de particuliers.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-lg bg-gradient-gold flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-primary mb-6">{service.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold">
                      <Link href="/quote">
                        Demander un Devis
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className={`absolute -bottom-6 ${index % 2 === 1 ? "-right-6" : "-left-6"} w-48 h-48 bg-primary/10 rounded-2xl -z-10`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Pourquoi Choisir SINAI SECURITE ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Notre expertise et notre engagement font de nous le partenaire idéal pour tous vos besoins en sécurité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Personnel Qualifié</h3>
                <p className="text-sm text-muted-foreground">
                  Agents rigoureusement sélectionnés et formés aux plus hauts standards.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Expérience Prouvée</h3>
                <p className="text-sm text-muted-foreground">
                  Plus de 10 ans d&apos;expérience au service de clients prestigieux.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Technologies Modernes</h3>
                <p className="text-sm text-muted-foreground">
                  Équipements de dernière génération pour une sécurité optimale.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Disponibilité 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Une équipe à votre écoute jour et nuit, tous les jours de l&apos;année.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Besoin d&apos;une Solution de Sécurité ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous pour une évaluation gratuite de vos besoins en sécurité et recevez un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold">
                <Link href="/quote">
                  Demander un Devis Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="+221 33 868 04 26">
                  <Phone className="mr-2 w-5 h-5" />
                  +221 33 868 04 26
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
