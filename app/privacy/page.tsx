import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | XE Labs',
  description: 'Privacy Policy and applicant data protection policy for XE Labs Build Sprint 2026.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-32 pb-24 relative">
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">Privacy Policy</h1>
            <p className="text-sm text-white/40 mt-1">Last updated: June 2026</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-white/80 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p>
              At XE Labs (referred to as "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, process, and secure the information you provide when applying for the 
              <strong>XE Labs Build Sprint 2026</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">2. Information We Collect</h2>
            <p>
              When you submit your application through our portal, we collect the following details:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Primary applicant details: Name, Email Address, Phone Number, College/University, and Graduation Year.</li>
              <li>Professional profile links: GitHub profile, LinkedIn profile, and Portfolio/Personal Website.</li>
              <li>Evaluation details: Main tech stack, experience levels, details of past projects, track selection details, and project pitches.</li>
              <li>Teammates' details (for team applications): Names, email addresses, roles, and GitHub profiles.</li>
              <li>Uploads: Resume PDF, and optional Pitch Deck or Architecture Diagram.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">3. How We Use Your Information</h2>
            <p>
              We process your data purely for administrative, evaluation, and recruitment purposes associated with the Build Sprint 2026:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To evaluate and score your prototype and challenge submissions.</li>
              <li>To contact you regarding the status of your application.</li>
              <li>To conduct paid internship interviews for top-performing builders.</li>
              <li>We do not sell, rent, or trade applicant data with third parties for marketing purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">4. Data Storage and Security</h2>
            <p>
              We follow startup-grade security standards to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All application records are securely transmitted from the browser via HTTPS.</li>
              <li>Application data is logged directly into restricted, non-public Google Sheets and files are stored in private Google Drive folders.</li>
              <li>Sensitive fields (such as emails, phones, and resume links) are encrypted at rest using server-side AES-256-GCM encryption.</li>
              <li>Access to Google Sheet logs and Google Drive upload folders is strictly restricted to the organizing team.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">5. Team Applications Consent</h2>
            <p>
              If you apply as a team, you represent and warrant that you have obtained explicit consent from all listed team members 
              to share their names, contact details, and professional profiles with us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">6. Legal Entities</h2>
            <p>
              The Build Sprint 2026 program, evaluations, and paid internship contracts may be facilitated and administered through 
              <strong>LXDIA AI Pvt. Ltd.</strong> (parent/administrative entity of XE Labs) until XE Labs operates under its own legal entity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">7. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding your data privacy, you can reach out to us at:
              <br />
              <a href="mailto:info@xelabs.in" className="text-[#fabd00] hover:underline">info@xelabs.in</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
