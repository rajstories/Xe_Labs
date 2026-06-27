import React from 'react';
import { MultiStepForm } from '@/components/application-form/multi-step-form';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, createMetadata, webPageSchema } from '@/lib/seo';
import { RegistrationStatus, RegistrationWindow } from '@/components/application-form/registration-status';

const title = 'Apply for XE Labs Build Sprint 2026';
const description = 'Submit your application for XE Labs Build Sprint 2026. Individual builders and teams of up to 3 members can apply for the AI product hackathon.';

export const metadata = createMetadata({
  title,
  description,
  path: '/careers/apply',
  image: '/careers/opengraph-image',
  noIndex: true,
});

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#030303] bg-[url('/grid-pattern.svg')] bg-center pt-24 pb-20 relative">
      <JsonLd data={[
        webPageSchema({ path: '/careers/apply', name: title, description }),
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'XE Labs Build Sprint 2026', path: '/careers' }, { name: 'Apply', path: '/careers/apply' }]),
      ]} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-12 text-center pt-12">
          <div className="mb-6"><RegistrationStatus /></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Apply for <span className="text-[#fabd00]">Build Sprint 2026</span>
          </h1>
          <p className="text-lg text-white/60">
            Registration opens on 29 June at 9:00 AM IST. Submit your idea by 7 July at 11:00 AM IST for consideration in the prototype round.
          </p>
        </div>

        <RegistrationWindow>
          <MultiStepForm />
        </RegistrationWindow>
      </div>
    </main>
  );
}
