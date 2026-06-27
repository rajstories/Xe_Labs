import React from 'react';
import { TrackPageLayout, TrackData } from '@/components/track-page-layout';
import { JsonLd } from '@/components/json-ld';
import { SITE_URL, breadcrumbSchema, createMetadata, faqSchema, webPageSchema } from '@/lib/seo';

const title = 'VoiceCore Track | Indian Voice AI Agent';
const description = 'Build VoiceCore, a Hindi and Hinglish Indian voice AI agent with speech recognition, knowledge-base answers, natural voice output, fallback handling, and multi-turn memory.';

export const metadata = createMetadata({
  title,
  description,
  path: '/build-sprint/voicecore',
  image: '/build-sprint/voicecore/opengraph-image',
  keywords: ['VoiceCore', 'Indian voice AI agent', 'AI voice agent Hindi', 'Hinglish voice AI'],
});

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
  complianceNote: "The agent must not hallucinate facts. If it does not know an answer or cannot find support in the knowledge base, it must clearly say so and suggest a useful next step.",
  faqs: [
    {
      question: 'What is VoiceCore?',
      answer: 'VoiceCore is an XE Labs Build Sprint 2026 challenge track for a practical Indian voice AI agent. The prototype should understand Hindi, Hinglish, or Indian English speech, answer from an uploaded knowledge base, speak through a natural voice, remember recent turns, and handle unsupported questions without inventing facts.',
    },
    {
      question: 'What should teams build in VoiceCore?',
      answer: 'Teams should build a browser-based voice agent with microphone input, speech transcription, grounded knowledge-base retrieval, LLM response generation, transcript display, text-to-speech output, and at least three turns of conversation memory. The agent must provide a clear fallback when its knowledge base does not support an answer.',
    },
    {
      question: 'Which languages should VoiceCore support?',
      answer: 'The required scope is Hindi, Hinglish, or Indian English, with a strong emphasis on realistic Indian speech. Teams may support additional regional languages as a bonus. The experience should make its actual language coverage clear and should not claim reliable support for accents or languages that were not tested.',
    },
  ],
};

export default function VoiceCorePage() {
  const path = '/build-sprint/voicecore';
  return (
    <>
      <JsonLd data={[
        webPageSchema({ path, name: title, description }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'XE Labs Build Sprint 2026', path: '/careers' }, { name: 'VoiceCore', path }]),
        faqSchema(trackData.faqs),
        { '@context': 'https://schema.org', '@type': 'TechArticle', headline: title, description, url: `${SITE_URL}${path}`, about: 'Hindi and Hinglish Indian voice AI agent hackathon challenge', author: { '@id': `${SITE_URL}/#organization` }, isPartOf: { '@id': `${SITE_URL}/careers#event` } },
      ]} />
      <TrackPageLayout data={trackData} />
    </>
  );
}
