import React from 'react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export function TeamSection() {
  const team = [
    {
      name: "Shubham Jha",
      role: "Co-Founder & CEO",
      desc: "Leads company vision, business strategy, partnerships, college collaborations, hiring, and growth for XE Labs.",
      linkedin: "https://www.linkedin.com/company/xelabs/"
    },
    {
      name: "Raj",
      role: "Co-Founder & CTO",
      desc: "Leads technology architecture, AI systems, full-stack engineering, deployment, security, and product development.",
      linkedin: "https://www.linkedin.com/company/xelabs/"
    },
    {
      name: "Khushi Dutta",
      role: "Co-Founder & COO",
      desc: "Leads operations, program execution, team coordination, hackathon management, documentation, and delivery workflows.",
      linkedin: "https://www.linkedin.com/company/xelabs/"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Founding Team
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          XE Labs is led by a small founding team focused on building AI-native software products and intelligent automation systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div 
            key={i} 
            className="group flex flex-col p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#fabd00]/30 hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
              <div className="text-sm font-medium text-[#fabd00]">{member.role}</div>
            </div>
            
            <p className="text-white/70 leading-relaxed mb-8 flex-grow">
              {member.desc}
            </p>

            <Link 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium w-max"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn Profile
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-white/40 mt-12 italic">
        * Industry mentors and technical reviewers may be announced before the final demo round.
      </p>
    </section>
  );
}
