"use client";

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export function SuccessScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 relative">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"
          style={{ animationDuration: '3s' }}
        />
        <CheckCircle className="w-12 h-12 text-green-400 relative z-10" />
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
        Application <span className="text-[#fabd00]">Received</span>
      </h1>
      
      <p className="text-lg text-white/70 mb-10 leading-relaxed">
        Thank you for applying to the XE Labs Build Sprint 2026. 
        Your application has been securely stored. Our team will review your details 
        and you will hear from us soon via email.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link 
          href="/careers" 
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors border border-white/10"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Careers
        </Link>
        <Link 
          href="/" 
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-semibold transition-colors"
        >
          Explore XE Labs <Home className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
