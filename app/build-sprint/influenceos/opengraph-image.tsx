import { ImageResponse } from 'next/og';
import { SocialCard } from '@/components/social-card';

export const alt = 'InfluenceOS creator discovery platform track';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <SocialCard eyebrow="Build Sprint 2026 track" title="InfluenceOS" subtitle="Creator Discovery & Campaign Intelligence Platform" badges={['Creator scoring', 'Tracking links', 'Campaign analytics']} />,
    size,
  );
}
