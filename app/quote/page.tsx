import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Shield, Clock, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Demander un Devis | SINAI SECURITE - Devis Gratuit en 24h",
  description: "Demandez un devis gratuit pour nos services de sécurité. Réponse garantie sous 24h. Gardiennage, protection VIP, événementiel et plus.",
}

const benefits = [
  {
    icon: CheckCircle,
    title: "Devis Gratuit",
    description: "Sans engagement de votre part",
  },
  {
    icon: Clock,
    title: "Réponse Rapide",
    description: "Sous 24 heures ouvrées",
  },
  {
    icon: Shield,
    title: "Solutions Sur Mesure",
    description: "Adaptées à vos besoins",
  },
]

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Devis Gratuit
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Demandez Votre Devis Personnalisé
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Remplissez le formulaire ci-dessous et recevez un devis détaillé sous 24 heures. Nos experts analyseront vos besoins pour vous proposer la solution idéale.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-background border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Informations pour votre devis
                  </h2>
                  <QuoteForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-background border border-border rounded-2xl p-8 sticky top-28">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Besoin d&apos;aide ?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre demande.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="tel:+221338000000"
                      className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Appelez-nous</p>
                        <p className="font-semibold text-foreground">+221 33 800 00 00</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-8 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Horaires:</strong><br />
                      Lun - Ven: 8h00 - 18h00<br />
                      Sam: 9h00 - 13h00<br />
                      <span className="text-primary">Urgences: 24h/24</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
