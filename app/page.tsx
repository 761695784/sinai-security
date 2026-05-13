import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustBadges } from "@/components/sections/trust-badges"
import { ServicesPreview } from "@/components/sections/services-preview"
import { AboutPreview } from "@/components/sections/about-preview"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <ServicesPreview />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
