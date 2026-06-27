import { ImageResponse } from 'next/og';
import { SocialCard } from '@/components/social-card';

export const alt = 'XE Labs AI-native product lab';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <SocialCard
      eyebrow="AI-native product lab"
      title="Agents, LLMs & intelligent automation"
      subtitle="Practical AI products for business workflows, creators, voice, video, and SaaS."
      badges={['Delhi NCR, India', 'Newly launched', 'Built transparently']}
    />,
    size,
  );
}
