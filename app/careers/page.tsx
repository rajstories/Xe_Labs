"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
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
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-white selection:text-black pt-32 pb-24 font-sans text-gray-200">
      
      {/* 1. Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 mb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent -z-10" />
        
        <div className="w-full max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80 mb-8">
              <Sparkles className="w-4 h-4 text-[#fabd00]" />
              XE Labs Build Sprint 2026
            </div>
            
            <h1 className="font-bold tracking-tight leading-[1.1] [text-shadow:0_4px_24px_rgba(0,0,0,0.8)] text-4xl sm:text-5xl md:text-7xl">
              <span className="block text-[#f9f9ff]">Build What The</span>
              <span className="block text-[#fabd00]">Future Will Use.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 text-base md:text-lg text-[#e0e0e0] font-normal max-w-2xl mx-auto leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]"
          >
            Join XE Labs through product sprints, hackathons, and paid internships to build real AI tools, SaaS products, agents, and automation systems.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-sm text-[#fabd00]/80 font-medium tracking-wide uppercase"
          >
            Real products. Real users. Real internship opportunities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link href="#apply" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Apply for Build Sprint 2026 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="#tracks" className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center">
              View Tracks
            </Link>
          </motion.div>
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
              We are not hiring interns for dummy tasks. Builders work on real AI product ideas. Selected students get paid internship opportunities to work on cutting-edge systems used in production environments.
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
              We value execution over credentials. At XE Labs, you will be treated as a product owner, not just an intern. Your code will ship. Your designs will be used. Your ideas will be heard.
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
            { step: "Round 1", title: "Registration & Idea Submission", icon: Lightbulb },
            { step: "Round 2", title: "Prototype Build", icon: Code },
            { step: "Round 3", title: "Final Demo", icon: Video },
            { step: "Round 4", title: "Paid Internship Interviews", icon: Briefcase },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 hover:border-white/30 transition-all duration-500 group"
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
            <Link href="#tracks" className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
              Explore Track
            </Link>
          </motion.div>

          {/* Track 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 hover:border-white/30 transition-all duration-500 group"
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
            <Link href="#tracks" className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
              Explore Track
            </Link>
          </motion.div>

          {/* Track 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 hover:border-white/30 transition-all duration-500 group"
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
            <Link href="#tracks" className="inline-flex items-center justify-center w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
              Explore Track
            </Link>
          </motion.div>
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
              { label: "Students of any year", icon: Calendar },
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">Sprint Timeline</h2>
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {[
            { phase: "Applications Open", date: "[Add Date]" },
            { phase: "Registration Deadline", date: "[Add Date]" },
            { phase: "Idea Submission", date: "[Add Date]" },
            { phase: "Prototype Build Week", date: "[Add Date]" },
            { phase: "Final Demo", date: "[Add Date]" },
            { phase: "Internship Interviews", date: "[Add Date]" },
          ].map((item, i) => (
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="w-full max-w-3xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          <FaqItem 
            question="Who can participate?" 
            answer="Any current student (engineering, design, product, etc.) with a strong ability to build can participate. Both teams and solo builders are welcome."
          />
          <FaqItem 
            question="Can solo students apply?" 
            answer="Yes, solo builders are completely welcome and evaluated on the same criteria."
          />
          <FaqItem 
            question="Is this online or offline?" 
            answer="The entire build sprint and demo process is conducted online."
          />
          <FaqItem 
            question="Will internships be paid?" 
            answer="Yes, selected candidates offered an internship will receive a paid stipend based on their role and expertise."
          />
          <FaqItem 
            question="Do we need to build a complete product?" 
            answer="You need to build a functional prototype that demonstrates the core value proposition. It doesn't need to be market-ready, but it shouldn't just be a mockup either."
          />
          <FaqItem 
            question="Can we use AI tools and APIs?" 
            answer="Absolutely. We encourage the use of modern AI APIs (OpenAI, Anthropic, Gemini, etc.), open-source models, and developer tools to ship faster."
          />
          <FaqItem 
            question="Who owns the submitted code?" 
            answer="Participants retain ownership of their original hackathon submissions. XE Labs may review, evaluate, showcase, and discuss submitted prototypes. Selected participants who join a paid internship will work under a separate internship agreement for further production development."
          />
          <FaqItem 
            question="What happens after the hackathon?" 
            answer="Winners and strong finalists will be invited for an interview. If it's a mutual fit, you will be offered a paid internship to work on real products at XE Labs."
          />
          <FaqItem 
            question="Can colleges officially share this with students?" 
            answer={
              <>
                Yes, Training & Placement cells are welcome to share this opportunity. <br/><br/>
                <span className="text-white/50 text-xs mt-2 block">
                  Official communication and internship administration for this program may be facilitated through LXDIA AI Pvt. Ltd. until XE Labs operates under its own legal entity.
                </span>
              </>
            }
          />
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
              <Link href="#apply" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(250,189,0,0.3)] hover:shadow-[0_0_60px_rgba(250,189,0,0.5)]">
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
