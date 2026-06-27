import React from 'react';
import { TrackPageLayout, TrackData } from '@/components/track-page-layout';

export const metadata = {
  title: 'VoiceCore Track - Build Sprint 2026 | XE Labs',
  description: 'Indian Voice AI Agent track details.',
};

const trackData: TrackData = {
  trackName: "VoiceCore",
  subtitle: "Indian Voice AI Agent",
  heroHeadline: "Build A Voice Agent That Sounds Indian And Thinks Clearly.",
  shortDescription: "Build a Hindi/Hinglish voice agent that can understand Indian speech, answer questions from a knowledge base, respond in a natural Indian voice, maintain conversation context, and gracefully handle questions it cannot answer.",
  problemStatement: "Most voice agents are built for clean English, Western accents, and controlled environments. Indian users need AI that understands Hindi, Hinglish, regional accents, noisy speech, and real conversations. The goal is to build a practical Indian voice AI agent that is useful, fast, natural, and grounded in knowledge.",
  mustHaveFeatures: [
    "Browser microphone input",
    "Push-to-talk or VAD-based speech detection",
    "Hindi/Hinglish/Indian English ASR transcription",
    "LLM-based response generation",
    "Knowledge base Q&A from PDF/text/URL",
    "Text transcript display",
    "Indian voice TTS output",
    "3-turn conversation memory",
    "Fallback response when answer is not known"
  ],
  shouldHaveFeatures: [
    "Same-language response",
    "Source citation from knowledge base",
    "Voice persona selection",
    "Latency measurement",
    "5-turn memory",
    "Session transcript",
    "Better handling of Hinglish"
  ],
  bonusFeatures: [
    "Real streaming pipeline",
    "Low latency response",
    "Regional Indian language support",
    "Offline/edge mode",
    "Voice speed/tone adjustment",
    "Cost per 1000 interactions estimate"
  ],
  suggestedUserFlow: [
    { title: "Initialization", desc: "User uploads a PDF menu or company policy to create the knowledge base." },
    { title: "Interaction", desc: "User clicks 'Talk' and asks a question in Hinglish." },
    { title: "Processing", desc: "Agent transcribes audio, queries the RAG vector store, and generates a response." },
    { title: "Synthesis", desc: "Agent reads out the response in a natural Indian accent." }
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
    { category: "Frontend", tech: "React / Next.js" },
    { category: "Audio Handling", tech: "Web Audio API / MediaRecorder" },
    { category: "VAD (Voice Activity)", tech: "Silero VAD / WebRTC VAD" },
    { category: "ASR (Speech to Text)", tech: "Whisper / IndicASR / other speech models" },
    { category: "LLM", tech: "Gemini / OpenAI / Llama / Mistral" },
    { category: "RAG / Vector", tech: "FAISS / Chroma / Supabase Vector" },
    { category: "TTS (Text to Speech)", tech: "IndicTTS / Coqui / ElevenLabs / Google TTS" },
    { category: "Backend API", tech: "FastAPI / Node.js" }
  ],
  complianceNote: "The agent must not hallucinate facts. If it does not know an answer or cannot find support in the knowledge base, it must clearly say so and suggest a useful next step."
};

export default function VoiceCorePage() {
  return <TrackPageLayout data={trackData} />;
}
