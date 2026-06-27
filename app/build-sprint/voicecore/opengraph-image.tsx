import { ImageResponse } from 'next/og';
import { SocialCard } from '@/components/social-card';

export const alt = 'VoiceCore Indian voice AI agent track';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <SocialCard eyebrow="Build Sprint 2026 track" title="VoiceCore" subtitle="Hindi and Hinglish Indian Voice AI Agent" badges={['Knowledge grounded', 'Multi-turn memory', 'Natural voice output']} />,
    size,
  );
}
