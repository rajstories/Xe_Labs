import { ImageResponse } from 'next/og';
import { SocialCard } from '@/components/social-card';

export const alt = 'XE Labs Build Sprint 2026 AI hackathon';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="XE Labs Build Sprint 2026"
      title="AI Product Hackathon for Student Builders"
      subtitle="Build a working AI product. Selected finalists may be considered for paid internships."
      badges={['No registration fee', 'Online', 'Solo or teams up to 3']}
    />,
    size,
  );
}
