import { HeroSection } from "@/components/hero-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { MethodologySection } from "@/components/methodology-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent">
      <HeroSection />
      <CapabilitiesSection />
      <MethodologySection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
