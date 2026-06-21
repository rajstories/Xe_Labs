'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden selection:bg-white selection:text-black">
      {/* Background Container (Forced stacking context to prevent video disappearing behind body) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-[1.5] origin-center"
          src="/Neural_nodes_connecting_with_light_202606211335.mp4"
        />

        {/* Layer 1: Global Dimming */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Layer 2: Vignette & Readability Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black" />
        
        {/* Layer 3: Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl w-full mx-auto px-6 md:px-12 pt-32 pb-24">
        
        {/* Massive Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-display font-bold uppercase tracking-tighter leading-[0.95] text-white">
            BUILDING AI-NATIVE SYSTEMS
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-8 text-base sm:text-lg text-gray-300 font-light max-w-2xl mx-auto mb-16 tracking-wide"
        >
          Custom LLMs, automation agents, and intelligent workflows for modern business.
        </motion.p>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffffff] to-[#d2cae6] border border-[#85769c] text-black px-14 py-5 font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(210,202,230,0.4)] uppercase tracking-[0.2em] text-xs rounded-full"
          >
            Build With Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
