"use client";

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronLeft, 
  Users, 
  Globe, 
  Briefcase, 
  FileCode2,
  CheckCircle2,
  Star,
  Zap,
  Target,
  ListTodo,
  Layers,
  Code2,
  ShieldAlert,
  Trophy
} from 'lucide-react';

export interface TrackData {
  trackName: string;
  subtitle: string;
  heroHeadline: string;
  shortDescription: string;
  problemStatement: string;
  mustHaveFeatures: string[];
  shouldHaveFeatures: string[];
  bonusFeatures: string[];
  suggestedUserFlow: { title: string; desc: string }[];
  expectedDeliverables: string[];
  judgingCriteria: { name: string; weight: string }[];
  suggestedTechStack: { category: string; tech: string }[];
  complianceNote: string;
  faqs: { question: string; answer: string }[];
}

export function TrackPageLayout({ data }: { data: TrackData }) {
  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-24 pb-24 font-sans text-gray-200">
      
      {/* Top Navbar / Breadcrumb (Simulated via padding, actual header handles main nav) */}
      <div className="w-full max-w-5xl mx-auto px-6 mb-8 flex justify-between items-center z-10 relative">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/careers" className="hover:text-white transition-colors">Build Sprint 2026</Link>
          <span>/</span>
          <span className="text-white/80">{data.trackName}</span>
        </nav>
      </div>

      {/* 1. Hero Section */}
      <section className="relative w-full max-w-5xl mx-auto px-6 mb-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#fabd00]/30 bg-[#fabd00]/10 text-xs font-bold text-[#fabd00] mb-6 tracking-widest uppercase">
            Build Sprint 2026 Track
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            {data.trackName}
          </h1>
          <div className="text-xl md:text-2xl font-medium text-[#fabd00] mb-8">
            {data.subtitle}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-6 leading-tight max-w-3xl">
            &quot;{data.heroHeadline}&quot;
          </h2>
          
          <p className="text-lg text-white/70 mb-10 max-w-3xl leading-relaxed">
            {data.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/careers/apply" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-bold transition-all hover:scale-105"
            >
              Apply for this Track <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/careers#tracks" 
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" /> Back to All Tracks
            </Link>
          </div>
        </motion.div>

        {/* Info Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="flex flex-col gap-2">
            <Users className="w-6 h-6 text-[#fabd00]" />
            <div className="text-sm font-semibold text-white">Team Size</div>
            <div className="text-xs text-white/60">Solo or up to 3</div>
          </div>
          <div className="flex flex-col gap-2">
            <Globe className="w-6 h-6 text-[#fabd00]" />
            <div className="text-sm font-semibold text-white">Format</div>
            <div className="text-xs text-white/60">100% Online</div>
          </div>
          <div className="flex flex-col gap-2">
            <Briefcase className="w-6 h-6 text-[#fabd00]" />
            <div className="text-sm font-semibold text-white">Internship</div>
            <div className="text-xs text-white/60">Paid opportunity for finalists</div>
          </div>
          <div className="flex flex-col gap-2">
            <FileCode2 className="w-6 h-6 text-[#fabd00]" />
            <div className="text-sm font-semibold text-white">Submission</div>
            <div className="text-xs text-white/60">Prototype + GitHub + Video</div>
          </div>
        </motion.div>
      </section>

      <div className="w-full max-w-5xl mx-auto px-6 space-y-24">
        
        {/* 2 & 3. Problem Statement & Overview */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-[#fabd00]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">The Problem Statement</h2>
          </div>
          <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <p className="text-lg text-white/80 leading-relaxed">
              {data.problemStatement}
            </p>
          </div>
        </section>

        {/* 4. What You Need To Build */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#fabd00]/10 border border-[#fabd00]/20 flex items-center justify-center">
                <ListTodo className="w-7 h-7 text-[#fabd00]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white relative">
                What You Need To Build
                {/* Subtle yellow accent underline */}
                <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[#fabd00]/80 to-transparent rounded-full shadow-[0_0_12px_rgba(250,189,0,0.5)]" />
              </h2>
            </div>
            <p className="text-lg text-white/60 max-w-2xl mt-3 leading-relaxed">
              Start with the core requirements, then layer advanced features and bonus innovations to stand out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Must-Have Card */}
            <div className="group flex flex-col h-full p-8 rounded-[24px] border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-5">
                    Core Requirements
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Must-Have
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">Minimum features required for a valid submission.</p>
                </div>
                
                <ul className="space-y-1 mb-8 flex-grow">
                  {data.mustHaveFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/row">
                      <CheckCircle2 className="w-5 h-5 text-green-500/40 group-hover/row:text-green-400 transition-colors flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-white/5 text-center bg-white/[0.01] -mx-8 -mb-8 p-6 rounded-b-[24px]">
                  <span className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">
                    Required for qualification
                  </span>
                </div>
              </div>
            </div>
            
            {/* Should-Have Card */}
            <div className="group flex flex-col h-full p-8 rounded-[24px] border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-5">
                    Advanced Expectations
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Should-Have
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">Features that make the prototype stronger.</p>
                </div>
                
                <ul className="space-y-1 mb-8 flex-grow">
                  {data.shouldHaveFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/row">
                      <Layers className="w-5 h-5 text-blue-500/40 group-hover/row:text-blue-400 transition-colors flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-white/5 text-center bg-white/[0.01] -mx-8 -mb-8 p-6 rounded-b-[24px]">
                  <span className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">
                    Improves judging score
                  </span>
                </div>
              </div>
            </div>
            
            {/* Bonus Card */}
            <div className="group flex flex-col h-full p-8 rounded-[24px] border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-5">
                    Extra Credit
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Bonus
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">High-impact additions for standout teams.</p>
                </div>
                
                <ul className="space-y-1 mb-8 flex-grow">
                  {data.bonusFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group/row">
                      <Star className="w-5 h-5 text-purple-500/40 group-hover/row:text-purple-400 transition-colors flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-white/5 text-center bg-white/[0.01] -mx-8 -mb-8 p-6 rounded-b-[24px]">
                  <span className="text-[11px] font-semibold text-white/40 uppercase tracking-widest">
                    Helps you stand out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Suggested User Flow */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-[#fabd00]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Suggested User Flow</h2>
          </div>
          <div className="space-y-4">
            {data.suggestedUserFlow.map((flow, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-[#fabd00]">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{flow.title}</h4>
                  <p className="text-white/60 leading-relaxed">{flow.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 & 7. Deliverables & Judging */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* Deliverables */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Expected Deliverables</h2>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <ul className="space-y-4">
                {data.expectedDeliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#fabd00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Judging Criteria */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Judging Criteria</h2>
            <div className="space-y-3">
              {data.judgingCriteria.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                  <span className="font-medium text-white/90">{item.name}</span>
                  <span className="font-bold text-[#fabd00]">{item.weight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Tech Stack */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-[#fabd00]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Suggested Tech Stack</h2>
          </div>
          <p className="text-white/50 mb-6 text-sm">
            * These are suggestions only. You are free to use any modern stack you prefer.
          </p>
          <div className="flex flex-wrap gap-4">
            {data.suggestedTechStack.map((stack, i) => (
              <div key={i} className="px-5 py-3 rounded-xl border border-white/10 bg-black flex flex-col gap-1">
                <span className="text-xs font-bold text-[#fabd00] uppercase tracking-wider">{stack.category}</span>
                <span className="text-sm font-medium text-white">{stack.tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Rules & Compliance */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-8 h-8 text-[#fabd00]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Rules & Compliance</h2>
          </div>
          <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
            <p className="text-white/80 leading-relaxed mb-6">
              {data.complianceNote}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Use original work",
                "Do not copy copyrighted assets",
                "Do not use unauthorized scraping",
                "Do not collect private data",
                "Mention all APIs/data sources",
                "Open-source allowed with credit",
                "AI tools allowed, but explain usage"
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby={`${data.trackName.toLowerCase()}-faq`}>
          <div className="mb-8">
            <h2 id={`${data.trackName.toLowerCase()}-faq`} className="text-3xl md:text-4xl font-bold text-white">{data.trackName} track FAQ</h2>
            <p className="mt-3 text-white/55">Direct answers about the challenge scope and expected prototype.</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 open:border-[#fabd00]/30">
                <summary className="cursor-pointer list-none pr-6 text-lg font-semibold text-white marker:hidden">{item.question}</summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 10 & 11. Rewards & Final CTA */}
        <section className="relative p-12 md:p-16 rounded-3xl border border-[#fabd00]/30 bg-gradient-to-b from-[#fabd00]/10 to-transparent text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#fabd00]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <Trophy className="w-16 h-16 text-[#fabd00] mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build this track?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Strong submissions and finalists may be invited for paid internship interviews to continue production development under XE Labs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link 
                href="/careers/apply" 
                className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-bold text-lg transition-all shadow-[0_0_40px_rgba(250,189,0,0.3)] hover:shadow-[0_0_60px_rgba(250,189,0,0.5)]"
              >
                Apply for Build Sprint 2026
              </Link>
              <Link 
                href="/careers#tracks" 
                className="w-full sm:w-auto px-10 py-5 rounded-xl border border-white/20 bg-black/50 hover:bg-black/80 text-white font-semibold text-lg transition-all backdrop-blur-md"
              >
                Explore Other Tracks
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
