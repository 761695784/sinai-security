import { Award, ShieldCheck, Clock, Headphones, BadgeCheck, Target } from "lucide-react"

const badges = [
  {
    icon: ShieldCheck,
    title: "Certifié ISO",
    description: "Normes internationales de qualité",
  },
  {
    icon: Award,
    title: "Agréé État",
    description: "Agrément du Ministère de l'Intérieur",
  },
  {
    icon: Clock,
    title: "24h/24 - 7j/7",
    description: "Disponibilité permanente",
  },
  {
    icon: Headphones,
    title: "Support Dédié",
    description: "Équipe à votre écoute",
  },
  {
    icon: BadgeCheck,
    title: "Agents Formés",
    description: "Formation continue certifiée",
  },
  {
    icon: Target,
    title: "Sur Mesure",
    description: "Solutions personnalisées",
  },
]

export function TrustBadges() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Nos Engagements
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pourquoi Choisir SINAI SECURITE ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des garanties solides pour votre tranquillité d&apos;esprit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
