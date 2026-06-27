import React from 'react';
import { Bot, Youtube, Mic2, Zap, Video, LayoutDashboard, Cpu } from 'lucide-react';

export function AboutSection() {
  const focusAreas = [
    { title: "AI Agents", icon: Bot },
    { title: "Creator-tech Tools", icon: Youtube },
    { title: "Voice AI", icon: Mic2 },
    { title: "Workflow Automation", icon: Zap },
    { title: "Video Intelligence", icon: Video },
    { title: "SaaS Dashboards", icon: LayoutDashboard }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/80 mb-6 tracking-widest uppercase">
            <Cpu className="w-4 h-4 text-[#fabd00]" /> About XE Labs
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Building Real-World <span className="text-[#fabd00]">AI Systems.</span>
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            XE Labs is a newly launched AI-native product lab focused on building custom LLM systems, autonomous agents, intelligent workflows, and software products for real-world business use cases.
          </p>

          <p className="text-white/60 mb-8">
            We operate at the intersection of applied AI and product engineering, turning complex models into simple, powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {focusAreas.map((area, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/5 flex items-center justify-center flex-shrink-0">
                <area.icon className="w-5 h-5 text-[#fabd00]" />
              </div>
              <span className="font-medium text-white/90">{area.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
