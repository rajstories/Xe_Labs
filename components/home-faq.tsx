import Link from 'next/link';
import { homeFaqs } from '@/lib/faqs';

export function HomeFaq() {
  return (
    <section aria-labelledby="xe-labs-answers" className="w-full bg-[#050505] px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#fabd00]">XE Labs, directly answered</p>
          <h2 id="xe-labs-answers" className="text-3xl font-bold text-white md:text-5xl">Questions people ask about XE Labs</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {homeFaqs.map((item) => (
            <article key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="mb-3 text-xl font-semibold text-white">{item.question}</h3>
              <p className="text-sm leading-7 text-white/65">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/careers" className="rounded-full bg-[#fabd00] px-6 py-3 text-sm font-bold text-black">
            Explore XE Labs Build Sprint 2026
          </Link>
          <Link href="/contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
            Contact XE Labs
          </Link>
        </div>
      </div>
    </section>
  );
}
