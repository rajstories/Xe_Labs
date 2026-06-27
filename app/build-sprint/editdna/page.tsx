import React from 'react';
import { TrackPageLayout, TrackData } from '@/components/track-page-layout';

export const metadata = {
  title: 'EditDNA Track - Build Sprint 2026 | XE Labs',
  description: 'AI Video Editing Automation Engine track details.',
};

const trackData: TrackData = {
  trackName: "EditDNA",
  subtitle: "AI Video Editing Automation Engine",
  heroHeadline: "Turn Raw Content Into Edited Video Drafts.",
  shortDescription: "Build an AI editing assistant that understands a script, raw video, reference style, and asset folder, then creates an edit plan, b-roll mapping, captions, typography moments, timeline JSON, and optionally a rendered short-form draft.",
  problemStatement: "Creators, founders, agencies, and businesses often know what kind of video they want, but editing requires many micro-decisions: where to cut, where to add b-roll, which words to highlight, what captions to use, when to zoom, and how to match a reference style. The goal is to automate editing intelligence, not just generate videos.",
  mustHaveFeatures: [
    "Script input",
    "Raw/AI avatar video upload",
    "Asset folder upload",
    "Basic reference style or prompt input",
    "Script-to-scene breakdown",
    "B-roll recommendation for each script beat",
    "Caption and typography plan",
    "Timeline JSON generation",
    "Basic preview or render plan"
  ],
  shouldHaveFeatures: [
    "Reference video analyzer",
    "Auto caption timing",
    "B-roll matching from uploaded assets",
    "Typography styling",
    "Motion graphic suggestions",
    "Basic Remotion/FFmpeg rendered output",
    "Multiple edit versions"
  ],
  bonusFeatures: [
    "Long video to 3 short clips",
    "Hook detection",
    "Dead-space removal",
    "AI-generated b-roll prompts",
    "Voice-based edit commands",
    "Brand style memory",
    "Export-ready short-form video"
  ],
  suggestedUserFlow: [
    { title: "Input", desc: "User uploads a 1-minute raw talking-head video and a folder of 10 b-roll clips." },
    { title: "Analysis", desc: "AI transcribes video, detects pauses, and maps sentences to b-roll context." },
    { title: "Edit Plan Generation", desc: "System generates a timeline JSON with cuts, b-roll placements, and captions." },
    { title: "Render/Preview", desc: "User previews the rough draft in a web-based player." }
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
    { category: "Video Rendering", tech: "Remotion / FFmpeg / HyperFrames" },
    { category: "AI Models", tech: "Gemini / OpenAI / Local LLM" },
    { category: "Transcription", tech: "Whisper" },
    { category: "Storage", tech: "Firebase / Supabase / Local Storage" },
    { category: "Design", tech: "Figma-inspired timeline UI" }
  ],
  complianceNote: "Participants must use copyright-safe sample assets, self-created assets, or assets provided for the hackathon. Do not copy another creator’s exact content, watermark, brand identity, or copyrighted footage. The system may learn editing patterns, but must not clone protected creative work directly."
};

export default function EditDNAPage() {
  return <TrackPageLayout data={trackData} />;
}
