import { createMetadata } from '@/lib/seo';

const title = 'XE Labs Build Sprint 2026 | AI Product Hackathon';
const description = 'Apply for XE Labs Build Sprint 2026, a product-focused AI hackathon for student builders. Build real AI tools, agents, creator-tech platforms, voice AI systems, and automation products. Selected finalists may get paid internship opportunities.';

export const metadata = createMetadata({
  title,
  description,
  path: '/careers',
  image: '/careers/opengraph-image',
  keywords: ['XE Labs Build Sprint 2026', 'XE Labs hackathon', 'student AI hackathon', 'AI product hackathon', 'online AI hackathon India', 'AI internship opportunity for students'],
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
