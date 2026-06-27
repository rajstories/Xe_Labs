import { HeroSection } from "@/components/hero-section";
import { TrustSection } from "@/components/trust-section";
import { AboutSection } from "@/components/about-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { MethodologySection } from "@/components/methodology-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { HomeFaq } from "@/components/home-faq";
import { JsonLd } from "@/components/json-ld";
import { homeFaqs } from "@/lib/faqs";
import { SITE_URL, createMetadata, faqSchema, webPageSchema } from "@/lib/seo";

const title = "XE Labs | AI-Native Product Lab for Agents, LLMs & Automation";
const description = "XE Labs is a newly launched AI-native product lab building AI agents, custom LLM systems, intelligent automation workflows, creator-tech tools, voice AI, video AI, and SaaS products.";

export const metadata = createMetadata({
  title,
  description,
  path: '/',
  keywords: ['XE Labs', 'xelabs.in', 'AI product lab India', 'AI agents company India', 'custom LLM development India', 'AI automation company'],
});

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'XE Labs',
    url: SITE_URL,
    description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };

  return (
    <main className="min-h-screen bg-transparent">
      <JsonLd data={[websiteSchema, webPageSchema({ path: '/', name: title, description, type: 'AboutPage' }), faqSchema(homeFaqs)]} />
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <CapabilitiesSection />
      <MethodologySection />
      <PortfolioSection />
      <TeamSection />
      <HomeFaq />
      <ContactSection />
    </main>
  );
}
