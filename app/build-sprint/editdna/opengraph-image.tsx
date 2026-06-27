import { ImageResponse } from 'next/og';
import { SocialCard } from '@/components/social-card';

export const alt = 'EditDNA AI video editing automation track';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <SocialCard eyebrow="Build Sprint 2026 track" title="EditDNA" subtitle="AI Video Editing Automation Engine" badges={['Edit planning', 'B-roll mapping', 'Timeline automation']} />,
    size,
  );
}
