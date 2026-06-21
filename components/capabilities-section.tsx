'use client';

import { motion } from 'motion/react';
import React from 'react';

const NeuralProcessing = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full opacity-80" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="neonBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#20A2FF" stopOpacity="0" />
        <stop offset="50%" stopColor="#20A2FF" stopOpacity="1" />
        <stop offset="100%" stopColor="#20A2FF" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Base network lines */}
    <g stroke="#E5E7EB" strokeWidth="2" fill="none">
      <path d="M 100 100 L 150 50 L 250 50 L 300 100 L 250 150 L 150 150 Z" />
      <path d="M 150 50 L 200 100 L 250 50" />
      <path d="M 150 150 L 200 100 L 250 150" />
      <path d="M 100 100 L 200 100 L 300 100" />
    </g>
    
    {/* Animated glowing paths simulating data flow */}
    <motion.path 
      d="M 100 100 L 150 50 L 250 50 L 300 100"
      stroke="url(#neonBlue)" 
      strokeWidth="4" 
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 0.4, 0.4, 0],
        pathOffset: [0, 0, 0.6, 1],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path 
      d="M 100 100 L 150 150 L 250 150 L 300 100"
      stroke="url(#neonBlue)" 
      strokeWidth="4" 
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 0.4, 0.4, 0],
        pathOffset: [0, 0, 0.6, 1],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.path 
      d="M 150 50 L 200 100 L 250 150"
      stroke="#28DCE6" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathLength: [0, 0.3, 0.3, 0],
        pathOffset: [0, 0, 0.7, 1],
        opacity: [0, 1, 1, 0]
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />

    {/* Nodes */}
    {[
      {x: 100, y: 100}, {x: 150, y: 50}, {x: 250, y: 50}, 
      {x: 300, y: 100}, {x: 250, y: 150}, {x: 150, y: 150}, {x: 200, y: 100}
    ].map((node, i) => (
      <motion.circle 
        key={i} 
        cx={node.x} 
        cy={node.y} 
        r="6" 
        fill="#9CA3AF"
        animate={{ scale: [1, 1.4, 1], fill: ['#9CA3AF', '#20A2FF', '#9CA3AF'] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
      />
    ))}
  </svg>
);

const InterfaceScanner = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <defs>
      <filter id="glowDark" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <linearGradient id="scannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#28DCE6" stopOpacity="0" />
        <stop offset="50%" stopColor="#28DCE6" stopOpacity="1" />
        <stop offset="100%" stopColor="#28DCE6" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    <g opacity="0.3">
      <rect x="30" y="60" width="140" height="12" rx="6" fill="#4B5563" />
      <rect x="30" y="90" width="100" height="12" rx="6" fill="#4B5563" />
      <rect x="30" y="120" width="120" height="12" rx="6" fill="#4B5563" />
    </g>

    {/* Scanning lines */}
    <motion.g
      animate={{ x: [-20, 160, -20] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
       <rect x="19" y="40" width="2" height="120" fill="#28DCE6" filter="url(#glowDark)" />
       <rect x="0" y="40" width="20" height="120" fill="url(#scannerGrad)" opacity="0.2" />
    </motion.g>
  </svg>
);

const AgenticLoop = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <defs>
      <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <circle cx="100" cy="100" r="45" stroke="#374151" strokeWidth="2" fill="none" strokeDasharray="4 4" />
    
    <motion.circle 
      cx="100" cy="100" r="16" 
      fill="#28DCE6" 
      filter="url(#coreGlow)"
      animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <motion.g 
      style={{ transformOrigin: '100px 100px' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="100" cy="55" r="8" fill="#20A2FF" />
    </motion.g>
    
    <motion.g 
      style={{ transformOrigin: '100px 100px' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: -2.5 }}
    >
      <circle cx="100" cy="55" r="8" fill="#20A2FF" />
    </motion.g>
  </svg>
);

const DataPipeline = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
     <path d="M 50 100 L 350 100" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="8 8" fill="none" />
     
     {/* Shape 1: Data (Circle) */}
     <motion.circle
        cy="100"
        r="14"
        fill="#20A2FF"
        initial={{ cx: 30, opacity: 0 }}
        animate={{ cx: [30, 370], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
     />
     {/* Shape 2: Tool (Square) */}
     <motion.rect
        y="86"
        width="28"
        height="28"
        rx="6"
        fill="#28DCE6"
        initial={{ x: 16, opacity: 0 }}
        animate={{ x: [16, 356], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.33 }}
     />
     {/* Shape 3: Person (Polygon) */}
     <motion.polygon
        points="0,24 12,0 24,24"
        fill="#3B82F6"
        initial={{ x: 18, y: 88, opacity: 0 }}
        animate={{ x: [18, 358], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.66 }}
     />
  </svg>
);

export function CapabilitiesSection() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-12 py-32 md:py-48" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tight uppercase">
            Capabilities
          </h2>
          <p className="text-gray-400 text-lg mt-4 font-light tracking-wide">
            Engineering intelligent systems to scale modern business operations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Custom LLM Systems */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 bg-white text-black p-4 md:p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transform transition-transform duration-300 min-h-[400px]"
          >
            <div className="flex-1 bg-gray-50 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden min-h-[220px]">
               <NeuralProcessing />
            </div>
            <div className="px-2 md:px-6 pb-2 md:pb-4 flex flex-col gap-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight leading-[1] max-w-lg text-black">
                Custom LLM Systems
              </h3>
              <p className="text-base md:text-lg text-black font-light tracking-wide max-w-xl">
                LLM-powered systems that understand business data, documents, processes and customer interactions.
              </p>
            </div>
          </motion.div>

          {/* Card 2: AI-Driven Software */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-1 bg-[#0a0a0a] border border-gray-800 text-white p-4 md:p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transform transition-transform duration-300 min-h-[400px]"
          >
            <div className="flex-1 bg-[#111] border border-gray-900/50 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden min-h-[220px]">
               <InterfaceScanner />
            </div>
            <div className="px-2 pb-2 flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-display font-medium uppercase tracking-tight leading-[1.1] text-white">
                AI-Driven<br />Software
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light tracking-wide max-w-xs">
                Software where AI is built into the core of the product experience.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Automation Agents */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-1 bg-[#0a0a0a] border border-gray-800 hover:border-[#28DCE6] hover:shadow-[0_0_30px_rgba(40,220,230,0.1)] hover:scale-[1.02] transform transition-all duration-300 text-white p-4 md:p-6 rounded-3xl flex flex-col justify-between min-h-[400px]"
          >
             <div className="flex-1 bg-[#111] border border-gray-900/50 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden min-h-[220px]">
               <AgenticLoop />
            </div>
            <div className="px-2 pb-2 flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-display font-medium uppercase tracking-tight leading-[1.1] text-white">
                Automation<br />Agents
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-light tracking-wide max-w-xs">
                AI agents that assist with tasks, trigger workflows, connect tools, and reduce manual effort.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Intelligent Workflows */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="md:col-span-2 bg-white text-black p-4 md:p-6 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transform transition-transform duration-300 min-h-[400px]"
          >
            <div className="flex-1 bg-gray-50 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden min-h-[220px]">
               <DataPipeline />
            </div>
            <div className="px-2 md:px-6 pb-2 md:pb-4 flex flex-col gap-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight leading-[1] max-w-lg text-black">
                Intelligent Workflows
              </h3>
              <p className="text-base md:text-lg text-black font-light tracking-wide max-w-xl">
                End-to-end workflows that connect people, data, tools and AI into one structured system.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
