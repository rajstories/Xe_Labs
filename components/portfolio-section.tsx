'use client';

import { motion } from 'motion/react';
import React from 'react';

const portfolioItems = [
  {
    title: 'AI Workflow Platform',
    category: 'Operations Intelligence',
    problem: 'Disconnected processes, manual reporting and slow decision visibility.',
    built: 'Custom AI workflow system with dashboards, task flows and internal decision support.',
    outcome: 'Faster execution, better visibility and reduced manual coordination.',
  },
  {
    title: 'Private Business Copilot',
    category: 'LLM Knowledge System',
    problem: 'Siloed internal knowledge, difficult SOP discovery, and slow information retrieval.',
    built: 'A company-specific AI assistant designed around internal documents, SOPs and business knowledge.',
    outcome: 'Instant knowledge access, reduced onboarding time, and improved decision consistency.',
  },
  {
    title: 'Automation Agent Stack',
    category: 'AI Agents',
    problem: 'High volume of repetitive tasks, manual handoffs, and operational bottlenecks.',
    built: 'AI agents built to assist teams with repetitive workflows, operational tasks and information handling.',
    outcome: 'Reduced manual effort, fewer errors, and scalable operations without headcount growth.',
  },
  {
    title: 'Content Intelligence',
    category: 'Media/Creator Systems',
    problem: 'Slow research cycles, fragmented creative workflows, and inconsistent production data.',
    built: 'An AI-assisted system for research, script support, creative workflows and production intelligence.',
    outcome: 'Scaled content production, faster end-to-end publishing, and data-backed creativity.',
  }
];

export function PortfolioSection() {
  return (
    <section className="w-full bg-black text-white py-32 md:py-48 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-xl md:text-2xl font-mono uppercase tracking-widest text-gray-500">
            Selected Work
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group border-t border-gray-900 py-16 md:py-24 transition-colors duration-500 cursor-default"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-start">
                {/* Column 1: Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-gray-400 group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>

                {/* Column 2: Category */}
                <div className="lg:col-span-3 mt-2 lg:mt-0">
                  <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-700 group-hover:text-gray-400 transition-colors duration-500">
                    {item.category}
                  </span>
                </div>

                {/* Column 3: Metadata Block */}
                <div className="lg:col-span-6 flex flex-col gap-8 mt-8 lg:mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
                    <span className="text-gray-700 text-xs uppercase tracking-widest">Problem</span>
                    <span className="text-gray-500 group-hover:text-gray-200 transition-colors duration-500 font-light leading-relaxed">
                      {item.problem}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
                    <span className="text-gray-700 text-xs uppercase tracking-widest">System Built</span>
                    <span className="text-gray-500 group-hover:text-gray-200 transition-colors duration-500 font-light leading-relaxed">
                      {item.built}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-2 md:gap-8">
                    <span className="text-gray-700 text-xs uppercase tracking-widest">Outcome</span>
                    <span className="text-gray-500 group-hover:text-gray-200 transition-colors duration-500 font-light leading-relaxed">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
