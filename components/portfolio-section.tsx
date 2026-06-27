"use client";

import { motion } from "motion/react";
import React from "react";

const portfolioItems = [
  {
    title: "AI Workflow Platform",
    category: "Operations Intelligence",
    problem:
      "Disconnected processes, manual reporting and slow decision visibility.",
    built:
      "Custom AI workflow system with dashboards, task flows and internal decision support.",
    outcome:
      "Faster execution, better visibility and reduced manual coordination.",
  },
  {
    title: "Private Business Copilot",
    category: "LLM Knowledge System",
    problem:
      "Siloed internal knowledge, difficult SOP discovery, and slow information retrieval.",
    built:
      "A company-specific AI assistant designed around internal documents, SOPs and business knowledge.",
    outcome:
      "Instant knowledge access, reduced onboarding time, and improved decision consistency.",
  },
  {
    title: "Automation Agent Stack",
    category: "AI Agents",
    problem:
      "High volume of repetitive tasks, manual handoffs, and operational bottlenecks.",
    built:
      "AI agents built to assist teams with repetitive workflows, operational tasks and information handling.",
    outcome:
      "Reduced manual effort, fewer errors, and scalable operations without headcount growth.",
  },
  {
    title: "Content Intelligence Engine",
    category: "Media/Creator Systems",
    problem:
      "Slow research cycles, fragmented creative workflows, and inconsistent production data.",
    built:
      "An AI-assisted system for research, script support, creative workflows and production intelligence.",
    outcome:
      "Scaled content production, faster end-to-end publishing, and data-backed creativity.",
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="w-full bg-black text-white py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-gray-500 tracking-widest text-sm uppercase">
            SYSTEMS WE BUILD
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-gray-900">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="group relative flex flex-col md:flex-row items-baseline border-b border-gray-900 py-12 px-6 cursor-pointer transition-colors duration-500 hover:bg-white"
            >
              {/* Column 1: Title */}
              <div className="w-full md:w-2/5">
                <h3 className="text-4xl md:text-5xl font-bold transition-colors duration-500 text-white group-hover:text-black">
                  {item.title}
                </h3>
              </div>

              {/* Column 2: Category Badge */}
              <div className="w-full md:w-1/5 mt-4 md:mt-0">
                <span className="inline-block text-xs uppercase tracking-widest border border-gray-800 rounded-full px-4 py-2 text-gray-400 transition-colors duration-500 group-hover:text-black group-hover:border-gray-400">
                  {item.category}
                </span>
              </div>

              {/* Column 3: Metadata */}
              <div className="w-full md:w-2/5 flex flex-col gap-8 mt-8 md:mt-0 md:pr-12">
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-2 lg:gap-8">
                  <span className="text-gray-600 text-xs uppercase tracking-widest transition-colors duration-500 group-hover:text-gray-500">
                    Problem
                  </span>
                  <span className="text-gray-400 font-light leading-relaxed transition-colors duration-500 group-hover:text-black">
                    {item.problem}
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-2 lg:gap-8">
                  <span className="text-gray-600 text-xs uppercase tracking-widest transition-colors duration-500 group-hover:text-gray-500">
                    System Built
                  </span>
                  <span className="text-gray-400 font-light leading-relaxed transition-colors duration-500 group-hover:text-black">
                    {item.built}
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-2 lg:gap-8">
                  <span className="text-gray-600 text-xs uppercase tracking-widest transition-colors duration-500 group-hover:text-gray-500">
                    Intended outcome
                  </span>
                  <span className="text-gray-400 font-light leading-relaxed transition-colors duration-500 group-hover:text-black">
                    {item.outcome}
                  </span>
                </div>
              </div>

              {/* Hover Indicator Arrow */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300 hidden md:flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
