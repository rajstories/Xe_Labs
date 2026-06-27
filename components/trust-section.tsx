import React from 'react';
import { ShieldCheck, Banknote, Lock, Briefcase } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Built Transparently. Built Seriously.
        </h2>
        <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
          XE Labs is an early-stage AI product lab focused on building real-world AI tools, agents, automation systems, and SaaS products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Real Product Challenges",
            text: "Build Sprint 2026 is based on actual product ideas across AI agents, creator tools, voice AI, automation, and SaaS dashboards.",
            icon: ShieldCheck
          },
          {
            title: "No Registration Fee",
            text: "There is no participation fee and no hidden charge for applying or participating.",
            icon: Banknote
          },
          {
            title: "Secure Application Process",
            text: "Applications are collected through a secure form with privacy notice, consent, validation, and restricted access.",
            icon: Lock
          },
          {
            title: "Paid Internship Opportunity",
            text: "Selected finalists may be offered paid internship opportunities based on performance, role fit, and interview.",
            icon: Briefcase
          }
        ].map((card, i) => (
          <div 
            key={i} 
            className="group flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#fabd00]/30 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#fabd00]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#fabd00]/30 transition-colors">
                <card.icon className="w-6 h-6 text-[#fabd00]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
