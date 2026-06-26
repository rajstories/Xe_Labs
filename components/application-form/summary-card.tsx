"use client";

import React from 'react';
import { FormData } from './multi-step-form';
import { CheckCircle2, Circle } from 'lucide-react';

export function SummaryCard({ formData, progressPercentage }: { formData: FormData, progressPercentage: number }) {
  const steps = [
    { name: 'Application Type', completed: !!formData.applicationType && !!formData.track },
    { name: 'Primary Details', completed: !!formData.firstName && !!formData.email && !!formData.college },
    { name: 'Skills & Experience', completed: !!formData.techStack && !!formData.experienceLevel },
    { name: 'Team Details', completed: formData.applicationType === 'Team' ? (!!formData.teamName && !!formData.member2Name) : true, hidden: formData.applicationType === 'Individual' },
    { name: 'Track & Idea', completed: !!formData.whyThisTrack },
    { name: 'Resume Upload', completed: !!formData.resume && !!formData.availability },
    { name: 'Consent & Submit', completed: formData.consentRules && formData.consentData },
  ];

  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hidden lg:block sticky top-24">
      <h3 className="text-white font-bold text-lg mb-4">Application Summary</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-start text-sm">
          <span className="text-white/50">Type</span>
          <span className="text-white font-medium text-right">{formData.applicationType}</span>
        </div>
        <div className="flex justify-between items-start text-sm">
          <span className="text-white/50">Track</span>
          <span className="text-[#fabd00] font-medium text-right max-w-[150px] leading-tight">
            {formData.track || 'Not selected'}
          </span>
        </div>
        {formData.internshipInterest && (
          <div className="flex justify-between items-start text-sm">
            <span className="text-white/50">Internship</span>
            <span className="text-green-400 font-medium text-right">Interested</span>
          </div>
        )}
      </div>

      <div className="border-t border-white/10 pt-6">
        <h4 className="text-white/80 text-sm font-semibold mb-4">Progress Checklist</h4>
        <ul className="space-y-3">
          {steps.map((step, idx) => {
            if (step.hidden) return null;
            return (
              <li key={idx} className={`flex items-center gap-3 text-sm ${step.completed ? 'text-white' : 'text-white/40'}`}>
                {step.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-[#fabd00]" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
                {step.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5">
        <p className="text-xs text-white/50 text-center">
          All data is securely encrypted. Do not refresh this page or you may lose your progress.
        </p>
      </div>
    </div>
  );
}
