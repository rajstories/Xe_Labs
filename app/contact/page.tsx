"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Linkedin, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const body = [
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone') || 'Not provided'}`,
      `Organization / College: ${form.get('organization') || 'Not provided'}`,
      `Query type: ${form.get('queryType')}`,
      '',
      String(form.get('message')),
    ].join('\n');
    window.location.href = `mailto:team@xelabs.in?subject=${encodeURIComponent(`XE Labs ${form.get('queryType')} query`)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-32 pb-24 relative font-sans">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Contact XE Labs</h1>
          <p className="text-lg text-white/60 leading-relaxed">
            For hackathon queries, college collaborations, partnerships, or product discussions, reach out through our official channels.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#fabd00]" />
              </div>
              <h3 className="text-white font-bold mb-1">Hackathon Queries</h3>
              <a href="mailto:hackathon@xelabs.in" className="text-sm text-white/70 hover:text-[#fabd00] transition-colors">
                hackathon@xelabs.in
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-[#fabd00]/20 bg-[#fabd00]/[0.05]">
              <h2 className="text-xl font-bold text-white mb-2">College collaboration</h2>
              <p className="text-sm text-white/65 leading-relaxed mb-4">Training and Placement teams, faculty, and student clubs may share the official Build Sprint page or contact us for program verification.</p>
              <Link href="/careers" className="text-sm font-semibold text-[#fabd00] hover:underline">View XE Labs Build Sprint 2026</Link>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#fabd00]" />
              </div>
              <h3 className="text-white font-bold mb-1">General Contact</h3>
              <a href="mailto:team@xelabs.in" className="text-sm text-white/70 hover:text-[#fabd00] transition-colors">
                team@xelabs.in
              </a>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#fabd00]" />
              </div>
              <h3 className="text-white font-bold mb-1">Location</h3>
              <p className="text-sm text-white/70">
                Delhi NCR, India
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Linkedin className="w-5 h-5 text-[#fabd00]" />
              </div>
              <h3 className="text-white font-bold mb-1">LinkedIn</h3>
              <a href="https://www.linkedin.com/company/xelabs/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[#fabd00] transition-colors">
                Follow XE Labs
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-3">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              {isSuccess ? (
                <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/10 text-center">
                  <p className="text-green-400 font-medium">Your email draft is ready.</p>
                  <p className="text-green-400/70 text-sm mt-2">Please send it from your email app. You can also write directly to team@xelabs.in.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Name</label>
                      <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 transition-colors" placeholder="Your name" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Email</label>
                      <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 transition-colors" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Phone <span className="text-white/30">(Optional)</span></label>
                      <input name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 transition-colors" placeholder="+91 9876543210" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Organization / College <span className="text-white/30">(Optional)</span></label>
                      <input name="organization" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 transition-colors" placeholder="Your college or organization" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Query Type</label>
                    <select required name="queryType" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#fabd00]/50 transition-colors appearance-none cursor-pointer">
                      <option value="" disabled className="text-black">Select an option...</option>
                      <option value="hackathon" className="text-black">Hackathon query</option>
                      <option value="college" className="text-black">College collaboration</option>
                      <option value="partnership" className="text-black">Partnership</option>
                      <option value="product" className="text-black">Product inquiry</option>
                      <option value="other" className="text-black">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">Message</label>
                    <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#fabd00] hover:bg-[#fabd00]/90 text-black font-bold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>Create Email <Send className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-center text-white/40 text-xs mt-4">
                    We usually respond to official hackathon and college queries through email.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
