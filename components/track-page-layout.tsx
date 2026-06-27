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
}

export function TrackPageLayout({ data }: { data: TrackData }) {
  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-24 pb-24 font-sans text-gray-200">
      
      {/* Top Navbar / Breadcrumb (Simulated via padding, actual header handles main nav) */}
      <div className="w-full max-w-5xl mx-auto px-6 mb-8 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2 text-sm text-white/50">
          <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
          <span>/</span>
          <span className="text-white/80">{data.trackName}</span>
        </div>
        
        {/* The requested top-right Apply Button */}
        <Link 
          href="/careers/apply" 
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#fabd00]/10 border border-[#fabd00]/30 text-[#fabd00] hover:bg-[#fabd00] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all"
        >
          Apply for this Track
        </Link>
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
            "{data.heroHeadline}"
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
        <section>
          <div className="flex items-center gap-3 mb-8">
            <ListTodo className="w-8 h-8 text-[#fabd00]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">What You Need To Build</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" /> Must-Have
              </h3>
              <ul className="space-y-3">
                {data.mustHaveFeatures.map((feat, i) => (
                  <li key={i} className="text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-green-500/30">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" /> Should-Have
              </h3>
              <ul className="space-y-3">
                {data.shouldHaveFeatures.map((feat, i) => (
                  <li key={i} className="text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-blue-500/30">
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 rounded-2xl border border-purple-500/20 bg-purple-500/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-400" /> Bonus
              </h3>
              <ul className="space-y-3">
                {data.bonusFeatures.map((feat, i) => (
                  <li key={i} className="text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-purple-500/30">
                    {feat}
                  </li>
                ))}
              </ul>
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
