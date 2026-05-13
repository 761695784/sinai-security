import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  Users, 
  Calendar, 
  Lock, 
  Video, 
  Car, 
  ArrowRight,
  UserCheck
} from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Gardiennage",
    description: "Protection permanente de vos locaux avec des agents formés et équipés pour assurer la sécurité de vos biens.",
    href: "/services#gardiennage",
  },
  {
    icon: UserCheck,
    title: "Protection VIP",
    description: "Service de protection rapprochée pour personnalités, dirigeants et événements nécessitant une sécurité renforcée.",
    href: "/services#vip",
  },
  {
    icon: Calendar,
    title: "Sécurité Événementielle",
    description: "Gestion complète de la sécurité pour vos événements: concerts, conférences, cérémonies et rassemblements.",
    href: "/services#evenement",
  },
  {
    icon: Lock,
    title: "Contrôle d'Accès",
    description: "Systèmes de contrôle d'accès modernes et gestion des entrées pour entreprises et résidences.",
    href: "/services#acces",
  },
  {
    icon: Video,
    title: "Vidéosurveillance",
    description: "Installation et monitoring de systèmes CCTV avec surveillance 24h/24 depuis notre centre de contrôle.",
    href: "/services#surveillance",
  },
  {
    icon: Car,
    title: "Escorte & Transport",
    description: "Service d'escorte sécurisée pour le transport de fonds, marchandises sensibles et personnalités.",
    href: "/services#transport",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Des Solutions de Sécurité Complètes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SINAI SECURITE propose une gamme complète de services adaptés à vos besoins spécifiques en matière de protection et de surveillance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center text-sm font-medium text-primary">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/services">
              Voir Tous Nos Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
