import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Scale } from 'lucide-react';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, createMetadata, webPageSchema } from '@/lib/seo';

const title = 'Terms & Conditions | XE Labs Build Sprint 2026';
const description = 'Read the participation terms, eligibility rules, originality requirements, privacy expectations, and internship consideration terms for XE Labs Build Sprint 2026.';

export const metadata = createMetadata({ title, description, path: '/terms' });

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-32 pb-24 relative font-sans">
      <JsonLd data={[
        webPageSchema({ path: '/terms', name: title, description }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Build Sprint Terms', path: '/terms' }]),
      ]} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group text-sm"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#fabd00]/10 border border-[#fabd00]/30 flex items-center justify-center text-[#fabd00]">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Terms & Conditions</h1>
            <p className="text-sm text-white/40 mt-1">Last updated: June 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80 leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Participation & Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>There is absolutely <strong>no registration fee</strong> and no hidden charges to apply or participate.</li>
              <li>Students can participate individually or form teams of up to 3 members.</li>
              <li>By participating, you confirm that all details provided in your application are true and accurate.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Originality & Compliance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All code and designs submitted must be your original work created during or for the sprint.</li>
              <li>You must not use unauthorized scraping, private data extraction, or illegally obtained assets.</li>
              <li>You may not use copyrighted assets without explicit permission or a valid license.</li>
              <li>If you use open-source code, you must comply with the respective open-source licenses and provide credit.</li>
              <li>AI tools (like ChatGPT, Copilot, Cursor) are allowed and encouraged, provided their usage is disclosed if requested.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participants retain full ownership of their original hackathon submissions and code repositories.</li>
              <li>By submitting, you grant XE Labs the right to review, evaluate, showcase, and discuss your submitted prototypes for evaluation and promotional purposes.</li>
              <li>Selected participants who are offered and accept a paid internship will work on production features under a separate, formal internship agreement.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Disqualification & Timeline Changes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The organizers reserve the right to disqualify any submission that breaks the rules, involves cheating, or violates ethical standards.</li>
              <li>The hackathon timeline, evaluation rounds, and reward distributions may be updated if necessary. Participants will be notified of any major changes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Internship Consideration</h2>
            <p>Hackathon participation, shortlisting, or finalist status does not guarantee an internship. Selected finalists may be invited to a separate interview based on performance and role fit. Any internship offer will state the role, stipend, duration, work expectations, and applicable intellectual-property terms in a separate written agreement.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Privacy & Contact</h2>
            <p>Application data is handled according to the <Link href="/privacy" className="text-[#fabd00] hover:underline">XE Labs Privacy Policy</Link>. Questions about these terms or Build Sprint participation can be sent to <a href="mailto:hackathon@xelabs.in" className="text-[#fabd00] hover:underline">hackathon@xelabs.in</a>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
