'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { buildSprintSchedule } from '@/lib/build-sprint';

export function RegistrationStatus() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(Date.now());
    updateNow();
    const timer = window.setInterval(updateNow, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const opens = Date.parse(buildSprintSchedule.registrationOpens);
  const closes = Date.parse(buildSprintSchedule.registrationCloses);

  let label = 'Registration opens 29 June 2026 at 9:00 AM IST';
  let dotClass = 'bg-[#fabd00]';

  if (now !== null && now >= opens && now <= closes) {
    label = 'Registration open until 7 July 2026 at 11:00 AM IST';
    dotClass = 'bg-green-500 animate-pulse';
  } else if (now !== null && now > closes) {
    label = 'Registration closed on 7 July 2026 at 11:00 AM IST';
    dotClass = 'bg-white/40';
  }

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      <span className="text-xs font-medium text-white/80">{label}</span>
    </div>
  );
}

export function RegistrationWindow({ children }: { children: ReactNode }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(Date.now());
    updateNow();
    const timer = window.setInterval(updateNow, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const opens = Date.parse(buildSprintSchedule.registrationOpens);
  const closes = Date.parse(buildSprintSchedule.registrationCloses);

  if (now === null) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Build Sprint 2026 registration window</h2>
        <p className="mt-3 leading-relaxed text-white/65">Registration runs from 29 June 2026 at 9:00 AM IST until 7 July 2026 at 11:00 AM IST. The form updates automatically according to the official window.</p>
      </div>
    );
  }

  if (now < opens) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#fabd00]/25 bg-[#fabd00]/[0.06] p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Registration has not opened yet</h2>
        <p className="mt-3 leading-relaxed text-white/65">The application form will open automatically on 29 June 2026 at 9:00 AM IST. Idea submissions run from 1 July until 7 July at 11:00 AM IST.</p>
      </div>
    );
  }

  if (now > closes) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Registration is closed</h2>
        <p className="mt-3 leading-relaxed text-white/65">Registration and idea submissions closed on 7 July 2026 at 11:00 AM IST. Selected teams will receive prototype portal access by email on 10 July at 8:00 AM IST.</p>
      </div>
    );
  }

  return <>{children}</>;
}
