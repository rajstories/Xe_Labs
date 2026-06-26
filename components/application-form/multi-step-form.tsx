"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { FormInput, FormSelect, FormTextarea, FormCheckbox, FileUpload } from './form-ui';
import { SuccessScreen } from './success-screen';
import { SummaryCard } from './summary-card';

export type ApplicationType = 'Individual' | 'Team';
export type Track = 'AI Agents & Automation' | 'Custom LLMs & RAG' | 'AI Web Apps & Tools' | '';
export type ExperienceLevel = 'Beginner' | 'Intermediate' | 'Advanced' | '';

export interface FormData {
  applicationType: ApplicationType;
  track: Track;
  internshipInterest: boolean;
  
  // Primary Applicant
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  college: string;
  graduationYear: string;
  linkedin: string;
  github: string;
  portfolio: string;

  // Skills
  techStack: string;
  experienceLevel: ExperienceLevel;
  pastProjects: string;

  // Team Details
  teamName: string;
  teamSize: string;
  member2Name: string;
  member2Email: string;
  member2Role: string;
  member2Github: string;
  member3Name: string;
  member3Email: string;
  member3Role: string;
  member3Github: string;

  // Track Questions
  whyThisTrack: string;
  ideaPitch: string;

  // Resume & Final
  resume: File | null;
  pitchDeck: File | null;
  availability: string;
  howDidYouHear: string;

  // Consent
  consentRules: boolean;
  consentData: boolean;
}

const initialFormData: FormData = {
  applicationType: 'Individual',
  track: '',
  internshipInterest: false,
  
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  college: '',
  graduationYear: '',
  linkedin: '',
  github: '',
  portfolio: '',

  techStack: '',
  experienceLevel: '',
  pastProjects: '',

  teamName: '',
  teamSize: '2',
  member2Name: '',
  member2Email: '',
  member2Role: '',
  member2Github: '',
  member3Name: '',
  member3Email: '',
  member3Role: '',
  member3Github: '',

  whyThisTrack: '',
  ideaPitch: '',

  resume: null,
  pitchDeck: null,
  availability: '',
  howDidYouHear: '',

  consentRules: false,
  consentData: false,
};

const TOTAL_STEPS = 7;

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    // Clear error for updated fields
    const newErrors = { ...errors };
    Object.keys(fields).forEach((key) => {
      delete newErrors[key as keyof FormData];
    });
    setErrors(newErrors);
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.track) {
        newErrors.track = 'Please select a track.';
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.firstName) { newErrors.firstName = 'First name is required.'; isValid = false; }
      if (!formData.lastName) { newErrors.lastName = 'Last name is required.'; isValid = false; }
      if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) { newErrors.email = 'Valid email is required.'; isValid = false; }
      if (!formData.college) { newErrors.college = 'College/University is required.'; isValid = false; }
      if (!formData.graduationYear) { newErrors.graduationYear = 'Graduation year is required.'; isValid = false; }
      if (!formData.github) { newErrors.github = 'GitHub profile URL is required.'; isValid = false; }
    } else if (currentStep === 3) {
      if (!formData.techStack) { newErrors.techStack = 'Please list your main tech stack.'; isValid = false; }
      if (!formData.experienceLevel) { newErrors.experienceLevel = 'Please select your experience level.'; isValid = false; }
    } else if (currentStep === 4) {
      if (formData.applicationType === 'Team') {
        if (!formData.teamName) { newErrors.teamName = 'Team name is required.'; isValid = false; }
        if (!formData.member2Name) { newErrors.member2Name = 'Member 2 name is required.'; isValid = false; }
        if (!formData.member2Email) { newErrors.member2Email = 'Member 2 email is required.'; isValid = false; }
        if (formData.teamSize === '3') {
          if (!formData.member3Name) { newErrors.member3Name = 'Member 3 name is required.'; isValid = false; }
          if (!formData.member3Email) { newErrors.member3Email = 'Member 3 email is required.'; isValid = false; }
        }
      }
    } else if (currentStep === 5) {
      if (!formData.whyThisTrack) { newErrors.whyThisTrack = 'This field is required.'; isValid = false; }
    } else if (currentStep === 6) {
      if (!formData.resume) { newErrors.resume = 'Resume is required.'; isValid = false; }
      if (!formData.availability) { newErrors.availability = 'Please select your availability.'; isValid = false; }
    } else if (currentStep === 7) {
      if (!formData.consentRules) { newErrors.consentRules = 'You must agree to the rules.'; isValid = false; }
      if (!formData.consentData) { newErrors.consentData = 'You must agree to the data policy.'; isValid = false; }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step === 3 && formData.applicationType === 'Individual') {
        setStep(5); // Skip Team step
      } else {
        setStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step === 5 && formData.applicationType === 'Individual') {
      setStep(3);
    } else {
      setStep((prev) => Math.max(prev - 1, 1));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (validateStep(7)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isSuccess) {
    return <SuccessScreen />;
  }

  // Determine actual progress based on application type
  const activeSteps = formData.applicationType === 'Individual' ? TOTAL_STEPS - 1 : TOTAL_STEPS;
  const currentProgressStep = formData.applicationType === 'Individual' && step >= 5 ? step - 1 : step;
  const progressPercentage = (currentProgressStep / activeSteps) * 100;

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
      <div className="flex-1 w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white/70">Step {step} of {TOTAL_STEPS}</span>
            <span className="text-sm font-medium text-[#fabd00]">{Math.round(progressPercentage)}% Completed</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#fabd00] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Content Container */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-md relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} errors={errors} />}
              {step === 2 && <Step2 formData={formData} updateFormData={updateFormData} errors={errors} />}
              {step === 3 && <Step3 formData={formData} updateFormData={updateFormData} errors={errors} />}
              {step === 4 && formData.applicationType === 'Team' && <Step4 formData={formData} updateFormData={updateFormData} errors={errors} />}
              {step === 5 && <Step5 formData={formData} updateFormData={updateFormData} errors={errors} />}
              {step === 6 && <Step6 formData={formData} updateFormData={updateFormData} errors={errors} />}
              {step === 7 && <Step7 formData={formData} updateFormData={updateFormData} errors={errors} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-white/70 hover:text-white hover:bg-white/5 border border-white/10'}`}
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {step < TOTAL_STEPS ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#fabd00] transition-colors"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#fabd00] text-black font-semibold text-sm hover:bg-[#fabd00]/90 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'} <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Sticky Summary Card */}
      <div className="w-full lg:w-80 shrink-0">
        <div className="sticky top-24">
          <SummaryCard formData={formData} progressPercentage={progressPercentage} />
        </div>
      </div>
    </div>
  );
}

// --- Form Steps ---

function Step1({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Application Type & Track</h2>
        <p className="text-white/60 text-sm">Select how you want to participate and which track you are aiming for.</p>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-white/90">Apply as</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => updateFormData({ applicationType: 'Individual' })}
            className={`p-4 rounded-xl border text-left transition-all ${formData.applicationType === 'Individual' ? 'border-[#fabd00] bg-[#fabd00]/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="font-semibold text-white mb-1">Individual</div>
            <div className="text-xs text-white/60">I want to hack solo.</div>
          </button>
          <button
            type="button"
            onClick={() => updateFormData({ applicationType: 'Team' })}
            className={`p-4 rounded-xl border text-left transition-all ${formData.applicationType === 'Team' ? 'border-[#fabd00] bg-[#fabd00]/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="font-semibold text-white mb-1">Team (2-3 members)</div>
            <div className="text-xs text-white/60">I am applying with a team.</div>
          </button>
        </div>
      </div>

      <FormSelect
        label="Select Track"
        value={formData.track}
        onChange={(e) => updateFormData({ track: e.target.value })}
        error={errors.track}
        options={[
          { value: 'AI Agents & Automation', label: 'AI Agents & Automation' },
          { value: 'Custom LLMs & RAG', label: 'Custom LLMs & RAG' },
          { value: 'AI Web Apps & Tools', label: 'AI Web Apps & Tools' },
        ]}
      />

      <div className="pt-4 border-t border-white/10">
        <FormCheckbox
          checked={formData.internshipInterest}
          onChange={(e) => updateFormData({ internshipInterest: e.target.checked })}
          label="I am also interested in a paid internship at XE Labs (Top performers only)."
        />
      </div>
    </div>
  );
}

function Step2({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Primary Applicant Details</h2>
        <p className="text-white/60 text-sm">Tell us about yourself.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput label="First Name" placeholder="John" value={formData.firstName} onChange={(e) => updateFormData({ firstName: e.target.value })} error={errors.firstName} />
        <FormInput label="Last Name" placeholder="Doe" value={formData.lastName} onChange={(e) => updateFormData({ lastName: e.target.value })} error={errors.lastName} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput type="email" label="Email Address" placeholder="john@example.com" value={formData.email} onChange={(e) => updateFormData({ email: e.target.value })} error={errors.email} />
        <FormInput type="tel" label="Phone Number" optional placeholder="+1 234 567 890" value={formData.phone} onChange={(e) => updateFormData({ phone: e.target.value })} error={errors.phone} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput label="College / University" placeholder="MIT" value={formData.college} onChange={(e) => updateFormData({ college: e.target.value })} error={errors.college} />
        <FormSelect
          label="Expected Graduation Year"
          value={formData.graduationYear}
          onChange={(e) => updateFormData({ graduationYear: e.target.value })}
          error={errors.graduationYear}
          options={[
            { value: '2024', label: '2024' },
            { value: '2025', label: '2025' },
            { value: '2026', label: '2026' },
            { value: '2027', label: '2027' },
            { value: '2028', label: '2028' },
            { value: 'Graduated', label: 'Already Graduated' },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput label="GitHub Profile URL" placeholder="https://github.com/username" value={formData.github} onChange={(e) => updateFormData({ github: e.target.value })} error={errors.github} />
        <FormInput label="LinkedIn Profile URL" optional placeholder="https://linkedin.com/in/username" value={formData.linkedin} onChange={(e) => updateFormData({ linkedin: e.target.value })} error={errors.linkedin} />
      </div>
      
      <FormInput label="Portfolio / Personal Website" optional placeholder="https://yourwebsite.com" value={formData.portfolio} onChange={(e) => updateFormData({ portfolio: e.target.value })} />
    </div>
  );
}

function Step3({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Skills & Experience</h2>
        <p className="text-white/60 text-sm">What tools and technologies are you comfortable with?</p>
      </div>

      <FormTextarea 
        label="Primary Tech Stack & Tools" 
        placeholder="e.g. React, Next.js, Python, PyTorch, LangChain, Node.js..." 
        value={formData.techStack} 
        onChange={(e) => updateFormData({ techStack: e.target.value })} 
        error={errors.techStack} 
      />

      <FormSelect
        label="AI / Development Experience Level"
        value={formData.experienceLevel}
        onChange={(e) => updateFormData({ experienceLevel: e.target.value })}
        error={errors.experienceLevel}
        options={[
          { value: 'Beginner', label: 'Beginner (Just starting out)' },
          { value: 'Intermediate', label: 'Intermediate (Built a few projects)' },
          { value: 'Advanced', label: 'Advanced (Production/complex systems experience)' },
        ]}
      />

      <FormTextarea 
        label="Past Projects or Hackathons" 
        optional 
        placeholder="Briefly describe 1-2 relevant projects you've built or hackathons you've attended." 
        value={formData.pastProjects} 
        onChange={(e) => updateFormData({ pastProjects: e.target.value })} 
      />
    </div>
  );
}

function Step4({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Team Details</h2>
        <p className="text-white/60 text-sm">Since you selected Team application, provide your teammates' details.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormInput label="Team Name" placeholder="The Hackers" value={formData.teamName} onChange={(e) => updateFormData({ teamName: e.target.value })} error={errors.teamName} />
        <FormSelect
          label="Team Size"
          value={formData.teamSize}
          onChange={(e) => updateFormData({ teamSize: e.target.value })}
          options={[
            { value: '2', label: '2 Members (including you)' },
            { value: '3', label: '3 Members (including you)' },
          ]}
        />
      </div>

      <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-6">
        <h3 className="text-lg font-semibold text-white">Team Member 2</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput label="Full Name" value={formData.member2Name} onChange={(e) => updateFormData({ member2Name: e.target.value })} error={errors.member2Name} />
          <FormInput type="email" label="Email" value={formData.member2Email} onChange={(e) => updateFormData({ member2Email: e.target.value })} error={errors.member2Email} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormInput label="Role (e.g. Frontend, AI)" value={formData.member2Role} onChange={(e) => updateFormData({ member2Role: e.target.value })} optional />
          <FormInput label="GitHub URL" value={formData.member2Github} onChange={(e) => updateFormData({ member2Github: e.target.value })} optional />
        </div>
      </div>

      {formData.teamSize === '3' && (
        <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-6">
          <h3 className="text-lg font-semibold text-white">Team Member 3</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput label="Full Name" value={formData.member3Name} onChange={(e) => updateFormData({ member3Name: e.target.value })} error={errors.member3Name} />
            <FormInput type="email" label="Email" value={formData.member3Email} onChange={(e) => updateFormData({ member3Email: e.target.value })} error={errors.member3Email} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput label="Role (e.g. Backend, Design)" value={formData.member3Role} onChange={(e) => updateFormData({ member3Role: e.target.value })} optional />
            <FormInput label="GitHub URL" value={formData.member3Github} onChange={(e) => updateFormData({ member3Github: e.target.value })} optional />
          </div>
        </div>
      )}
    </div>
  );
}

function Step5({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Track & Idea</h2>
        <p className="text-white/60 text-sm">Tell us why you chose <strong className="text-[#fabd00]">{formData.track || 'this track'}</strong>.</p>
      </div>

      <FormTextarea 
        label="Why did you select this track?" 
        placeholder="What excites you about this specific area of AI?" 
        value={formData.whyThisTrack} 
        onChange={(e) => updateFormData({ whyThisTrack: e.target.value })} 
        error={errors.whyThisTrack} 
      />

      <FormTextarea 
        label="Do you have an idea in mind already? (Optional)" 
        optional 
        placeholder="If you have a project idea for the sprint, briefly pitch it here." 
        value={formData.ideaPitch} 
        onChange={(e) => updateFormData({ ideaPitch: e.target.value })} 
      />
    </div>
  );
}

function Step6({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Resume & Final Details</h2>
        <p className="text-white/60 text-sm">Upload your resume and provide final logistics details.</p>
      </div>

      <FileUpload 
        label="Upload Resume (PDF)" 
        accept=".pdf" 
        value={formData.resume} 
        onChange={(file) => updateFormData({ resume: file })} 
        error={errors.resume} 
      />

      <FileUpload 
        label="Optional: Upload Pitch Deck or Architecture Diagram (PDF/Images)" 
        accept=".pdf,image/*" 
        value={formData.pitchDeck} 
        onChange={(file) => updateFormData({ pitchDeck: file })} 
      />

      <FormSelect
        label="Availability during the Sprint"
        value={formData.availability}
        onChange={(e) => updateFormData({ availability: e.target.value })}
        error={errors.availability}
        options={[
          { value: 'Full-time', label: 'Full-time (Can dedicate most of my days)' },
          { value: 'Part-time', label: 'Part-time (Juggling with classes/work)' },
          { value: 'Weekends', label: 'Mostly Weekends' },
        ]}
      />

      <FormSelect
        label="How did you hear about Build Sprint 2026?"
        value={formData.howDidYouHear}
        onChange={(e) => updateFormData({ howDidYouHear: e.target.value })}
        options={[
          { value: 'LinkedIn', label: 'LinkedIn' },
          { value: 'Twitter/X', label: 'Twitter/X' },
          { value: 'University', label: 'University / College' },
          { value: 'Friend', label: 'Friend / Colleague' },
          { value: 'Other', label: 'Other' },
        ]}
      />
    </div>
  );
}

function Step7({ formData, updateFormData, errors }: any) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Consent & Submission</h2>
        <p className="text-white/60 text-sm">Please review the legal and administrative terms before submitting.</p>
      </div>

      <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-6">
        <FormCheckbox
          checked={formData.consentRules}
          onChange={(e) => updateFormData({ consentRules: e.target.checked })}
          error={errors.consentRules}
          label={
            <span>
              I have read and agree to the <a href="#" className="text-[#fabd00] hover:underline">Build Sprint Rules & Guidelines</a>, and I confirm that all code submitted will be original or properly attributed open-source work.
            </span>
          }
        />
        
        <FormCheckbox
          checked={formData.consentData}
          onChange={(e) => updateFormData({ consentData: e.target.checked })}
          error={errors.consentData}
          label={
            <span>
              I agree to allow <strong>LXDIA AI Pvt. Ltd. (XE Labs)</strong> to store and process my application data for the purposes of this event and potential future recruitment opportunities.
            </span>
          }
        />
      </div>

      <div className="bg-[#fabd00]/10 border border-[#fabd00]/30 rounded-xl p-4 text-sm text-[#fabd00] mt-4">
        <strong>Important:</strong> After submitting, your application will be reviewed by the XE Labs team. Shortlisted candidates will receive an email with next steps.
      </div>
    </div>
  );
}
