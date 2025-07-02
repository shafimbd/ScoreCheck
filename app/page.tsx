import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DataSourcesSection } from "@/components/data-sources-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnerOrganizations } from "@/components/partner-organizations"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DataSourcesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PartnerOrganizations />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
