import React from 'react';
import { TrackPageLayout, TrackData } from '@/components/track-page-layout';

export const metadata = {
  title: 'InfluenceOS Track - Build Sprint 2026 | XE Labs',
  description: 'Creator Discovery & Campaign Intelligence Platform track details.',
};

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
  complianceNote: "Students must not scrape private Instagram data, bypass login, collect private phone numbers, spam creators, or violate platform rules. Dummy/simulated data is allowed if clearly marked."
};

export default function InfluenceOSPage() {
  return <TrackPageLayout data={trackData} />;
}
