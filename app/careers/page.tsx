"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { careersFaqs } from '@/lib/faqs';
import { JsonLd } from '@/components/json-ld';
import { SITE_URL, breadcrumbSchema, faqSchema, webPageSchema } from '@/lib/seo';
import { buildSprintSchedule, buildSprintTimeline } from '@/lib/build-sprint';
import { TrustSection } from '@/components/trust-section';
import { 
  ChevronRight, 
  Terminal, 
  Sparkles, 
  Database,
  Cpu,
  Layers,
  Users,
  Trophy,
  Rocket,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  FileCode2,
  Video,
  Mic,
  Briefcase,
  Lightbulb,
  Code
} from "lucide-react";

function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between font-medium text-white/90"
      >
        <span className="text-base sm:text-lg pr-4">{question}</span>
        <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#fabd00]' : 'text-white/50'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-white/70 text-sm sm:text-base leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CareersPage() {
  const title = 'XE Labs Build Sprint 2026 | AI Product Hackathon';
  const description = 'Apply for XE Labs Build Sprint 2026, a product-focused AI hackathon for student builders. Build real AI tools, agents, creator-tech platforms, voice AI systems, and automation products. Selected finalists may get paid internship opportunities.';
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${SITE_URL}/careers#event`,
    name: 'XE Labs Build Sprint 2026',
    url: `${SITE_URL}/careers`,
    description: 'A free, online, product-focused AI hackathon for student builders.',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    startDate: buildSprintSchedule.registrationOpens,
    endDate: buildSprintSchedule.winnerAnnouncement,
    doorTime: buildSprintSchedule.registrationOpens,
    location: { '@type': 'VirtualLocation', url: `${SITE_URL}/careers` },
    organizer: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/careers/apply`,
      price: 0,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: buildSprintSchedule.registrationOpens,
      validThrough: buildSprintSchedule.registrationCloses,
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black pt-32 pb-24 font-sans text-gray-200">
      <JsonLd data={[
        webPageSchema({ path: '/careers', name: title, description, type: 'CollectionPage' }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'XE Labs Build Sprint 2026', path: '/careers' }]),
        eventSchema,
        faqSchema(careersFaqs),
      ]} />
      
      {/* 1. Hero Section */}
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-32 mb-16 md:mb-24">
        {/* Subtle premium background glow */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-b from-[#fabd00]/5 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none opacity-50" />
        
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-y-12 lg:gap-x-16 lg:gap-y-16 z-10 relative">
          
          {/* Left Column (Mobile: 1, Desktop: 1) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] md:text-xs font-semibold text-white/80 mb-6 tracking-widest uppercase">
                XE Labs Build Sprint 2026
              </div>
              
              <h1 className="font-bold tracking-tight leading-[1.05] text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-[5rem] mb-4">
                <span className="block text-white">Build What The</span>
                <span className="block text-[#fabd00]">Future Will Use.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-xl md:text-2xl font-semibold text-white/90 mb-4"
            >
              Turn your ideas into real AI products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-base md:text-lg text-white/50 font-normal max-w-[640px] leading-[1.6] mb-10"
            >
              Join a product-focused AI sprint to build real tools across agents, LLM systems, creator-tech, voice AI, and automation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
            >
              <Link href="/careers/apply" className="px-8 py-4 rounded-[16px] bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-semibold transition-all duration-300 flex items-center justify-center shadow-[0_0_24px_rgba(250,189,0,0.15)] hover:shadow-[0_0_32px_rgba(250,189,0,0.25)]">
                Apply for Build Sprint 2026
              </Link>
              <Link href="#tracks" className="px-8 py-4 rounded-[16px] border border-white/10 bg-black/20 hover:border-[#fabd00]/50 text-white font-medium transition-all duration-300 flex items-center justify-center">
                Explore Tracks
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xs md:text-sm font-medium text-white/40 flex flex-wrap gap-x-2 gap-y-1"
            >
              <span>No registration fee</span>
              <span>&middot;</span>
              <span>Online format</span>
              <span>&middot;</span>
              <span>Solo or team up to 3</span>
            </motion.div>
          </div>

          {/* Highlights Strip (Mobile: 2, Desktop: 3) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 w-full order-2 lg:order-3"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "$2,000", desc: "Prize Pool", highlight: true },
                { title: "3 Tracks", desc: "AI product challenges" },
                { title: "0 Fee", desc: "No registration cost" },
                { title: "Internship", desc: "For selected finalists" }
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col items-start p-5 md:p-6 rounded-[20px] border ${stat.highlight ? 'border-[#fabd00]/30 bg-[#fabd00]/[0.02] shadow-[inset_0_0_40px_rgba(250,189,0,0.03)]' : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'} transition-colors duration-300`}>
                  <span className={`text-xl md:text-2xl font-bold mb-1 ${stat.highlight ? 'text-[#fabd00] [text-shadow:0_0_12px_rgba(250,189,0,0.3)]' : 'text-white'}`}>{stat.title}</span>
                  <span className="text-sm text-white/50">{stat.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Program Card (Mobile: 3, Desktop: 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-span-5 flex-shrink-0 order-3 lg:order-2"
          >
            <div className="relative w-full rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-8 shadow-[0_24px_48px_rgba(0,0,0,0.2)] backdrop-blur-xl overflow-hidden group transition-transform hover:-translate-y-1 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] rounded-[24px] pointer-events-none" />
              
              <h3 className="text-lg font-semibold text-white mb-8 relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#fabd00] shadow-[0_0_8px_#fabd00]"></span>
                Program Snapshot
              </h3>

              <div className="space-y-6 relative z-10 text-[15px]">
                <div className="flex flex-col border-b border-white/5 pb-4">
                  <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase mb-1.5">Format</span>
                  <span className="text-white/90">Online</span>
                </div>
                
                <div className="flex flex-col border-b border-white/5 pb-4">
                  <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase mb-1.5">Team Size</span>
                  <span className="text-white/90">Solo or up to 3</span>
                </div>

                <div className="flex flex-col border-b border-white/5 pb-4">
                  <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase mb-1.5">Tracks</span>
                  <span className="text-white/80 leading-relaxed">AI Agents &middot; LLMs &middot; Voice AI &middot; Creator-Tech</span>
                </div>

                <div className="flex flex-col border-b border-white/5 pb-4">
                  <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase mb-1.5">Prize Pool</span>
                  <span className="text-[#fabd00] font-semibold tracking-wide">$2,000</span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold tracking-widest text-white/40 uppercase mb-1.5">Opportunity</span>
                  <span className="text-white/90 leading-relaxed">Selected finalists may be considered for paid internships.</span>
                </div>
              </div>
            </div>

            <p className="mt-5 text-[12px] text-white/30 px-2 leading-relaxed max-w-[480px]">
              Note: Paid internship opportunities depend on performance, role fit, and interview.
            </p>
          </motion.div>
          
        </div>
      </section>

      <TrustSection />

      {/* 1.5 Why Build Sprint 2026 Exists */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Build Sprint 2026 Exists</h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            We are opening selected product challenges to student builders so they can solve real-world problems and get considered for paid internship opportunities. Build Sprint 2026 is not a traditional college fest. It is a product-focused challenge designed to identify serious builders who can think, ship, and continue building with XE Labs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Build real product prototypes", icon: Layers },
            { title: "Work on AI-native software challenges", icon: Cpu },
            { title: "Get considered for paid internship opportunities", icon: Briefcase }
          ].map((card, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-[#fabd00]" />
              </div>
              <h3 className="text-xl font-bold text-white">{card.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Why Build With XE Labs */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Why Build With <span className="text-[#fabd00]">XE Labs</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We are not evaluating builders through dummy tasks. The sprint uses practical AI product ideas, and selected finalists may be considered for paid internships to continue developing promising prototypes.
            </p>
            <ul className="space-y-4">
              {[
                "AI agents & Copilots",
                "Creator tools & Dashboards",
                "Voice AI & NLP systems",
                "Automation platforms",
                "SaaS & Video AI tools"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#fabd00] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-full min-h-[400px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl p-8 overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-[#fabd00]/5 rounded-full blur-[100px] group-hover:bg-[#fabd00]/10 transition-colors duration-700" />
            <Terminal className="w-12 h-12 text-[#fabd00] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Ambitious. Clean. Startup-like.</h3>
            <p className="text-white/70 leading-relaxed mb-8">
              We value execution over credentials. Builders are expected to think like product owners: understand the user, define the smallest useful scope, explain technical choices, and respond clearly to feedback.
            </p>
            <div className="inline-flex items-center gap-2 text-[#fabd00] font-medium border-b border-[#fabd00]/30 pb-1 hover:border-[#fabd00] transition-colors cursor-pointer">
              Explore Our Work culture <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Build Sprint 2026 Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">XE Labs Build Sprint 2026</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A real-world AI product hackathon for students who want to build production-grade tools.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "29 Jun – 7 Jul", title: "Registration & Idea Submission", icon: Lightbulb },
            { step: "10 – 21 Jul", title: "Selected Prototype Build", icon: Code },
            { step: "30 Jul", title: "Top 12 Final Presentations", icon: Video },
            { step: "After 31 Jul", title: "Internship Follow-up", icon: Briefcase },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#fabd00]/50 hover:bg-white/[0.07] transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#fabd00]/0 to-[#fabd00]/0 group-hover:from-[#fabd00]/5 group-hover:to-transparent transition-all duration-500" />
              <div className="text-xs font-bold tracking-wider text-[#fabd00] mb-4 uppercase">{item.step}</div>
              <item.icon className="w-8 h-8 text-white/80 group-hover:text-white mb-4 transition-colors" />
              <h3 className="text-lg font-semibold text-white group-hover:text-[#fabd00] transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Tracks Section */}
      <section id="tracks" className="w-full max-w-7xl mx-auto px-6 mb-32 scroll-mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Build Sprint Tracks</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose a problem statement and build a complete solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Track 1 */}
          <Link href="/build-sprint/influenceos" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 hover:border-white/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-7 h-7 text-[#fabd00]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">InfluenceOS</h3>
              <div className="text-sm text-[#fabd00] font-medium mb-4">Creator Discovery & Campaign Intelligence Platform</div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed flex-grow">
                Build a platform where brands can discover Instagram and YouTube creators, create campaigns, generate creator-wise tracking links, track performance, and get AI recommendations.
              </p>
              <ul className="space-y-2 mb-8">
                {['Creator Search Engine', 'Campaign Management', 'Smart Tracking Links', 'Analytics Dashboard', 'AI Matchmaking'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fabd00] mt-1.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 group-hover:bg-white/20 text-white text-sm font-medium transition-colors">
                Explore Track
              </div>
            </motion.div>
          </Link>

          {/* Track 2 */}
          <Link href="/build-sprint/editdna" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 hover:border-white/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <FileCode2 className="w-7 h-7 text-[#fabd00]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">EditDNA</h3>
              <div className="text-sm text-[#fabd00] font-medium mb-4">AI Video Editing Automation Engine</div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed flex-grow">
                Build an AI system that understands scripts, raw videos, reference styles, b-roll assets, captions, typography, and generates short-form video edit plans or rendered drafts.
              </p>
              <ul className="space-y-2 mb-8">
                {['Script-to-Video Engine', 'Asset Contextualization', 'Automated Captions', 'Typography Styling', 'Render API Integration'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fabd00] mt-1.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 group-hover:bg-white/20 text-white text-sm font-medium transition-colors">
                Explore Track
              </div>
            </motion.div>
          </Link>

          {/* Track 3 */}
          <Link href="/build-sprint/voicecore" className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 hover:border-white/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Mic className="w-7 h-7 text-[#fabd00]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">VoiceCore</h3>
              <div className="text-sm text-[#fabd00] font-medium mb-4">Indian Voice AI Agent</div>
              <p className="text-white/60 text-sm mb-6 leading-relaxed flex-grow">
                Build a Hindi/Hinglish voice agent that understands Indian speech, answers from a knowledge base, responds in a natural Indian voice, and handles multi-turn conversations.
              </p>
              <ul className="space-y-2 mb-8">
                {['Hinglish Speech Recognition', 'RAG Knowledge Base', 'Natural Voice Synthesis', 'Low-Latency Streaming', 'Conversation State Management'].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fabd00] mt-1.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 group-hover:bg-white/20 text-white text-sm font-medium transition-colors">
                Explore Track
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* 5 & 6. Who Can Apply & What We Look For (Split Section) */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-12">
        {/* Who Can Apply */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who Can Apply</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Engineering students", icon: Cpu },
              { label: "AI/ML developers", icon: Database },
              { label: "Full-stack developers", icon: Layers },
              { label: "UI/UX designers", icon: Sparkles },
              { label: "Product builders", icon: Rocket },
              { label: "2027 & 2028 graduates", icon: Calendar },
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                <item.icon className="w-5 h-5 text-[#fabd00] mb-2" />
                <span className="text-sm font-medium text-white/90">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-white/60 text-sm italic">* Teams and solo builders are both allowed.</p>
        </motion.div>

        {/* What We Look For */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What We Look For</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Speed of execution",
              "Product thinking",
              "Clean UI/UX",
              "Working prototype",
              "AI usefulness",
              "Originality",
              "Technical depth",
              "Ability to continue as intern"
            ].map((skill, i) => (
              <div key={i} className="px-5 py-2.5 rounded-full border border-white/10 bg-black text-sm font-medium text-white/80 hover:border-[#fabd00]/50 hover:text-white transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. Rewards Section */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="absolute inset-0 bg-[#fabd00]/5 blur-[120px] rounded-full -z-10" />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Rewards & Opportunities</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Winner Teams", desc: "Paid internship interview + certificate + feature on XE Labs", icon: Trophy },
            { title: "Top Finalists", desc: "Certificate + priority internship consideration", icon: Sparkles },
            { title: "Best Individual Builders", desc: "Direct paid internship interview", icon: Briefcase },
            { title: "Strong Submissions", desc: "Private product sprint opportunity", icon: Rocket },
          ].map((reward, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-[#fabd00]/20 bg-[#fabd00]/5 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-[#fabd00]/10 flex items-center justify-center flex-shrink-0">
                <reward.icon className="w-5 h-5 text-[#fabd00]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{reward.title}</h4>
                <p className="text-sm text-white/70">{reward.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-white/50 max-w-2xl mx-auto mt-8">
          * Selected winners and strong finalists may be offered paid internship opportunities based on performance, role fit, and interview.
        </p>
      </section>

      {/* 8. Internship Roles */}
      <section className="w-full max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Open Internship Roles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { role: "AI Engineering Intern", desc: "Train, fine-tune, and deploy models and RAG pipelines." },
            { role: "Full-Stack Product Intern", desc: "Build end-to-end features from database to frontend." },
            { role: "Frontend/UI Intern", desc: "Craft premium, highly responsive user interfaces." },
            { role: "Backend/API Intern", desc: "Design robust APIs, serverless functions, and databases." },
            { role: "AI Automation Intern", desc: "Build agentic workflows and intelligent system pipelines." },
            { role: "Product Design Intern", desc: "Create high-fidelity mockups, wireframes, and design systems." },
            { role: "Video AI / Creative Tools", desc: "Develop advanced logic for programmatic video generation." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-semibold text-white mb-2">{item.role}</h4>
              <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. Timeline */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Build Sprint 2026 Timeline</h2>
        <p className="text-center text-white/60 max-w-3xl mx-auto mb-16">
          All times are in Indian Standard Time (IST). Prototype portal access is limited to teams selected after idea evaluation.
        </p>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {buildSprintTimeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-[#fabd00] text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Clock className="w-4 h-4" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-white text-lg">{item.phase}</h4>
                </div>
                <div className="text-sm font-medium text-[#fabd00]">{item.date}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
          <p className="text-sm leading-relaxed text-white/65">
            Internship-related next steps will be shared after the competition. XE Labs will contact relevant winners or selected finalists using the email address or contact details provided during registration.
          </p>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-6 mb-32">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Build Sprint rules at a glance</h2>
          <p className="text-white/65 leading-relaxed mb-7">
            Submissions must be original, respect third-party licenses and platform rules, avoid unauthorized scraping or private data, and disclose important APIs, datasets, and open-source dependencies. Participants keep ownership of their original submissions; any later internship work uses a separate written agreement.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="text-[#fabd00] font-semibold hover:underline">Read Build Sprint terms</Link>
            <Link href="/privacy" className="text-white/80 font-semibold hover:text-white">Review applicant privacy policy</Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="w-full max-w-3xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {careersFaqs.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* 10. Application CTA */}
      <section id="apply" className="w-full max-w-5xl mx-auto px-6 scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fabd00]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Think You Can Build<br />Better Than The Brief?
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">
              If you can turn ideas into working products, XE Labs wants to see your work. 
              Join the sprint, build a prototype, and earn a spot on our product team.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/careers/apply" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(250,189,0,0.3)] hover:shadow-[0_0_60px_rgba(250,189,0,0.5)]">
                Apply Now
              </Link>
              <Link href="#brief" className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                Download Hackathon Brief
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
