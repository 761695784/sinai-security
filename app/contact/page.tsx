import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Linkedin, Instagram } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | SINAI SECURITE - Nous Joindre",
  description: "Contactez SINAI SECURITE à Dakar, Sénégal. Téléphone, email, adresse et formulaire de contact. Disponible 24h/24 pour les urgences.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "Cité UFI N°21, Route de l'Aéroport\nDakar, Sénégal",
    link: "https://maps.google.com/?q=Dakar,Senegal",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+221 33 868 04 26",
    link: "tel:+221338680426",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@sinai-securite.sn",
    link: "mailto:contact@sinai-securite.sn",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven: 8h - 18h\nUrgences: 24h/24",
    link: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                Parlons de Votre Sécurité
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets de sécurité.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-background border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line text-sm"
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form and Map Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envoyez-nous un Message
                </h2>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <ContactForm />
                </div>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Notre Emplacement
                </h2>
                <div className="bg-card border border-border rounded-2xl overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9889970621896!2d-17.4676!3d14.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5f8b93!2sDakar%2C%20Senegal!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SINAI SECURITE - Dakar, Sénégal"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-12 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Suivez-nous sur les Réseaux Sociaux
            </h2>
            <div className="flex justify-center gap-4">
              <a
                 href="#"
                 className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                 aria-label="Facebook"
                 style={{ color: '#C8A24D' }}
                            >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
                style={{ color: '#C8A24D' }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
                style={{ color: '#C8A24D' }}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="careers" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Rejoignez Notre Équipe
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SINAI SECURITE recrute régulièrement des agents de sécurité qualifiés. Envoyez-nous votre candidature pour rejoindre une équipe dynamique et professionnelle.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold">
              <a href="mailto:recrutement@sinai-securite.sn">
                Postuler Maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
