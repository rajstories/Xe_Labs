import React from 'react';
import { TrackPageLayout, TrackData } from '@/components/track-page-layout';
import { JsonLd } from '@/components/json-ld';
import { SITE_URL, breadcrumbSchema, createMetadata, faqSchema, webPageSchema } from '@/lib/seo';

const title = 'InfluenceOS Track | Creator Discovery & Campaign Intelligence';
const description = 'Build InfluenceOS, a creator discovery and campaign intelligence platform for Instagram and YouTube influencer marketing. Create dashboards, tracking links, creator scoring, and AI campaign insights.';

export const metadata = createMetadata({
  title,
  description,
  path: '/build-sprint/influenceos',
  image: '/build-sprint/influenceos/opengraph-image',
  keywords: ['InfluenceOS', 'creator discovery platform', 'influencer marketing dashboard', 'influencer campaign analytics'],
});

const trackData: TrackData = {
  trackName: "InfluenceOS",
  subtitle: "Creator Discovery & Campaign Intelligence Platform",
  heroHeadline: "Make Influencer Marketing Measurable.",
  shortDescription: "Build a platform where brands can discover Instagram and YouTube creators, shortlist them, create campaigns, generate creator-wise tracking links, track performance, and get AI recommendations for the next campaign.",
  problemStatement: "Brands still depend heavily on manual influencer marketing agencies. Discovery, shortlisting, pricing, tracking, and campaign reporting are scattered across spreadsheets, DMs, manual research, and guesswork. The goal is to build software that makes influencer marketing more searchable, measurable, and performance-driven.",
  mustHaveFeatures: [
    "Brand dashboard",
    "Creator database with minimum 100 creator records",
    "Instagram or YouTube creator profiles",
    "Search and filters by niche, followers/subscribers, language, location",
    "Creator comparison",
    "Campaign creation flow",
    "Creator-wise UTM/tracking link generator",
    "Dummy performance dashboard showing clicks, leads, sales, revenue, ROAS",
    "AI-generated campaign insight summary"
  ],
  shouldHaveFeatures: [
    "Instagram + YouTube both supported",
    "500+ creator records",
    "Creator Fit Score",
    "Brand Safety Score",
    "Fake Follower Risk indicator",
    "Campaign report page",
    "Creator shortlist export"
  ],
  bonusFeatures: [
    "YouTube Data API integration",
    "Creator onboarding form",
    "AI price estimation",
    "Shopify/Razorpay-style webhook simulation",
    "Campaign report PDF export",
    "1000+ creator records",
    "Brand and creator separate dashboards"
  ],
  suggestedUserFlow: [
    { title: "Discovery", desc: "Brand searches for 'Tech Reviewers in India'." },
    { title: "Shortlisting", desc: "Adds 3 creators to a 'Summer Launch' campaign." },
    { title: "Execution", desc: "Generates unique tracking links for each creator." },
    { title: "Reporting", desc: "Views real-time dashboard comparing which creator brought the most sales." }
  ],
  expectedDeliverables: [
    "Working prototype",
    "GitHub repository",
    "README with setup instructions",
    "Demo video (max 3 minutes)",
    "Architecture diagram",
    "Dataset/API explanation",
    "Known limitations"
  ],
  judgingCriteria: [
    { name: "Product clarity", weight: "20%" },
    { name: "Technical execution", weight: "25%" },
    { name: "AI/automation quality", weight: "15%" },
    { name: "UX/design quality", weight: "20%" },
    { name: "Business usefulness", weight: "10%" },
    { name: "Originality/compliance", weight: "10%" }
  ],
  suggestedTechStack: [
    { category: "Frontend", tech: "React / Next.js / Tailwind" },
    { category: "Backend", tech: "Node.js / FastAPI" },
    { category: "Database", tech: "PostgreSQL / Supabase / Firebase" },
    { category: "AI Models", tech: "OpenAI / Gemini / Local LLM" },
    { category: "Analytics", tech: "Chart.js / Recharts" },
    { category: "Optional API", tech: "YouTube Data API" }
  ],
  complianceNote: "Students must not scrape private Instagram data, bypass login, collect private phone numbers, spam creators, or violate platform rules. Dummy/simulated data is allowed if clearly marked.",
  faqs: [
    {
      question: 'What is InfluenceOS?',
      answer: 'InfluenceOS is an XE Labs Build Sprint 2026 challenge track for a creator discovery and campaign intelligence platform. The prototype should help a brand find Instagram or YouTube creators, compare profiles, create a campaign, generate creator-specific tracking links, and understand simulated performance through clear analytics and AI-assisted insights.',
    },
    {
      question: 'What should teams build in InfluenceOS?',
      answer: 'Teams should build a working brand dashboard with a searchable creator dataset, useful filters, profile comparison, a campaign creation flow, unique tracking links, and a performance dashboard. The required prototype can use clearly labelled simulated data; judges care about product clarity, credible metrics, usable workflows, and responsible data practices.',
    },
    {
      question: 'Does InfluenceOS require private social-platform data?',
      answer: 'No. Teams must not bypass logins, scrape private Instagram data, collect private contact details, or violate platform rules. Public, licensed, API-provided, or clearly simulated creator data is acceptable. Every submission should explain its data source, known limitations, and which metrics are real versus generated for demonstration.',
    },
  ],
};

export default function InfluenceOSPage() {
  const path = '/build-sprint/influenceos';
  return (
    <>
      <JsonLd data={[
        webPageSchema({ path, name: title, description }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'XE Labs Build Sprint 2026', path: '/careers' }, { name: 'InfluenceOS', path }]),
        faqSchema(trackData.faqs),
        { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, description, url: `${SITE_URL}${path}`, about: 'Creator discovery and influencer campaign intelligence hackathon challenge', author: { '@id': `${SITE_URL}/#organization` }, isPartOf: { '@id': `${SITE_URL}/careers#event` } },
      ]} />
      <TrackPageLayout data={trackData} />
    </>
  );
}
