import React from 'react';
import { MultiStepForm } from '@/components/application-form/multi-step-form';

export const metadata = {
  title: 'Apply - Build Sprint 2026 | XE Labs',
  description: 'Application form for XE Labs Build Sprint 2026.',
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-24 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-12 text-center pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-white/80">Applications Open</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Apply for <span className="text-[#fabd00]">Build Sprint 2026</span>
          </h1>
          <p className="text-lg text-white/60">
            Join the ultimate AI product hackathon. Build the future of autonomous agents and LLM tooling.
          </p>
        </div>

        <MultiStepForm />
      </div>
    </main>
  );
}
