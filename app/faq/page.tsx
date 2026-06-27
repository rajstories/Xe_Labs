import React from 'react';
import { homeFaqs, careersFaqs } from '@/lib/faqs';
import { JsonLd } from '@/components/json-ld';
import { SITE_URL, createMetadata, faqSchema, webPageSchema } from '@/lib/seo';

const title = "Frequently Asked Questions | XE Labs";
const description = "Find answers to common questions about XE Labs, our AI product development, and the XE Labs Build Sprint 2026 hackathon.";

export const metadata = createMetadata({
  title,
  description,
  path: '/faq',
  keywords: ['XE Labs FAQ', 'Build Sprint FAQ', 'AI product lab questions'],
});

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function FAQPage() {
  const allFaqs = [...homeFaqs, ...careersFaqs];

  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-32 pb-24 font-sans text-gray-200">
      <JsonLd data={[
        webPageSchema({ path: '/faq', name: title, description, type: 'WebPage' }),
        faqSchema(allFaqs)
      ]} />
      
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Frequently Asked <span className="text-[#fabd00]">Questions</span>
          </h1>
          <p className="text-lg text-white/60">
            Everything you need to know about XE Labs and the Build Sprint 2026.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              About XE Labs
            </h2>
            <div className="grid gap-6">
              {homeFaqs.map((faq, i) => (
                <div key={i} id={slugify(faq.question)} className="scroll-mt-32 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-[#fabd00]/30 hover:bg-white/[0.07]">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              Build Sprint 2026
            </h2>
            <div className="grid gap-6">
              {careersFaqs.map((faq, i) => (
                <div key={i} id={slugify(faq.question)} className="scroll-mt-32 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-[#fabd00]/30 hover:bg-white/[0.07]">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
