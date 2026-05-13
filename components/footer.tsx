import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Gardiennage", href: "/services#gardiennage" },
    { name: "Protection VIP", href: "/services#vip" },
    { name: "Sécurité Événementielle", href: "/services#evenement" },
    { name: "Contrôle d'Accès", href: "/services#acces" },
    { name: "Surveillance Électronique", href: "/services#surveillance" },
  ],
  company: [
    { name: "À Propos", href: "/about" },
    { name: "Notre Équipe", href: "/about#team" },
    { name: "Galerie", href: "/gallery" },
    { name: "Carrières", href: "/contact#careers" },
  ],

}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 relative flex items-center justify-center">
                <Image
                  src="/images/sinai-logo.png"
                  alt="SINAI SÉCURITÉ Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  SINAI
                </span>
                <span className="text-xs text-primary tracking-widest uppercase">
                  Sécurité
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              SINAI SECURITE SUARL, votre partenaire de confiance pour tous vos besoins en sécurité privée au Sénégal depuis plus de 10 ans.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-[#C8A24D] hover:scale-105 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" style={{ color: "#C8A24D" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-[#C8A24D] hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" style={{ color: "#C8A24D" }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-[#C8A24D] hover:scale-105 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" style={{ color: "#C8A24D" }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Cité UFI N°21, Route de l&apos;Aéroport<br />
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+221338680426" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +221 33 868 04 26
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:contact@sinai-securite.sn" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contact@sinai-securite.sn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  24h/24 - 7j/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SINAI SECURITE SUARL. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground">
            Made by{" "}
            <a
              href="https://majeliconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Majeli Connect
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
