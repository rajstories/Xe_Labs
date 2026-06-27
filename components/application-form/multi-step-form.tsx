"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Check, Loader2 } from 'lucide-react';
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
  consentTeam: boolean;
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
  consentTeam: false,
};

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      } else {
        reject(new Error('Failed to convert file to base64.'));
      }
    };
    reader.onerror = (error) => reject(error);
  });

const TOTAL_STEPS = 7;

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'turnstile', string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const existingScript = document.getElementById('cf-turnstile-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'cf-turnstile-script';
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    (window as any).onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.turnstile;
        return next;
      });
    };

    return () => {
      delete (window as any).onTurnstileSuccess;
    };
  }, []);

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
    const newErrors: Partial<Record<keyof FormData | 'turnstile', string>> = {};
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
      if (!formData.graduationYear) {
        newErrors.graduationYear = 'Graduation year is required.';
        isValid = false;
      } else if (formData.graduationYear !== '2027' && formData.graduationYear !== '2028') {
        newErrors.graduationYear = 'Only graduation years 2027 and 2028 are eligible.';
        isValid = false;
      }
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
      if (!formData.consentData) {
        newErrors.consentData = 'You must agree to the data collection terms';
        isValid = false;
      }
      if (formData.applicationType === 'Team' && !formData.consentTeam) {
        newErrors.consentTeam = 'You must confirm team consent';
        isValid = false;
      }
      if (!turnstileToken) {
        newErrors.turnstile = 'Spam protection check is required.';
        isValid = false;
      }
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
    if (!validateStep(7)) return;

    setSubmitError(null);

    // Validate files before attempting conversion
    if (!formData.resume) {
      setSubmitError('Resume is required.');
      return;
    }
    if (formData.resume.type !== 'application/pdf') {
      setSubmitError('Resume file must be a PDF.');
      return;
    }
    if (formData.resume.size > 5 * 1024 * 1024) {
      setSubmitError('Resume file must be under 5MB.');
      return;
    }

    if (formData.pitchDeck) {
      if (formData.pitchDeck.type !== 'application/pdf') {
        setSubmitError('Pitch deck file must be a PDF.');
        return;
      }
      if (formData.pitchDeck.size > 10 * 1024 * 1024) {
        setSubmitError('Pitch deck file must be under 10MB.');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const resumeBase64 = await toBase64(formData.resume);
      const pitchDeckBase64 = formData.pitchDeck ? await toBase64(formData.pitchDeck) : null;

      // Send techStack as a clean array of strings
      const techStackArray = formData.techStack
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

      const payload: any = {
        applicationType: formData.applicationType,
        track: formData.track,
        internshipInterest: formData.internshipInterest,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        graduationYear: formData.graduationYear,
        linkedin: formData.linkedin,
        github: formData.github,
        portfolio: formData.portfolio,
        techStack: techStackArray,
        experienceLevel: formData.experienceLevel,
        pastProjects: formData.pastProjects,
        whyThisTrack: formData.whyThisTrack,
        ideaPitch: formData.ideaPitch,
        availability: formData.availability,
        howDidYouHear: formData.howDidYouHear,
        resumeName: formData.resume.name,
        resumeData: resumeBase64,
        pitchDeckName: formData.pitchDeck ? formData.pitchDeck.name : null,
        pitchDeckData: pitchDeckBase64,
        turnstileToken: turnstileToken
      };

      // Set team details if type is Team, otherwise nullify/omit them
      if (formData.applicationType === 'Team') {
        payload.teamName = formData.teamName;
        payload.teamSize = formData.teamSize;
        payload.member2Name = formData.member2Name;
        payload.member2Email = formData.member2Email;
        payload.member2Role = formData.member2Role;
        payload.member2Github = formData.member2Github;
        
        if (formData.teamSize === '3') {
          payload.member3Name = formData.member3Name;
          payload.member3Email = formData.member3Email;
          payload.member3Role = formData.member3Role;
          payload.member3Github = formData.member3Github;
        } else {
          payload.member3Name = null;
          payload.member3Email = null;
          payload.member3Role = null;
          payload.member3Github = null;
        }
      } else {
        payload.teamName = null;
        payload.teamSize = null;
        payload.member2Name = null;
        payload.member2Email = null;
        payload.member2Role = null;
        payload.member2Github = null;
        payload.member3Name = null;
        payload.member3Email = null;
        payload.member3Role = null;
        payload.member3Github = null;
      }

      // Secure backend endpoint call
      const response = await fetch('/api/hackathon-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setIsSuccess(true);
        // Clear sensitive state on success
        setFormData(initialFormData);
        setTurnstileToken(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error(result.message || 'Unable to submit application right now. Please try again.');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Unable to submit application right now. Please try again.');
    } finally {
      setIsSubmitting(false);
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
              {step === 7 && (
                <Step7 
                  formData={formData} 
                  updateFormData={updateFormData} 
                  errors={errors} 
                  turnstileToken={turnstileToken} 
                  setTurnstileToken={setTurnstileToken} 
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {submitError && (
          <div className="text-red-400 text-sm mt-6 text-right font-medium">
            {submitError}
          </div>
        )}

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
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  Submit Application <Check className="w-4 h-4" />
                </>
              )}
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
            { value: '2027', label: '2027' },
            { value: '2028', label: '2028' },
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
        <p className="text-white/60 text-sm">Since you selected Team application, provide your teammates&apos; details.</p>
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

function Step7({ formData, updateFormData, errors, turnstileToken, setTurnstileToken }: any) {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).turnstile) {
      try {
        (window as any).turnstile.render('#turnstile-container', {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA',
          callback: 'onTurnstileSuccess',
          theme: 'dark'
        });
      } catch (e) {
        // Suppress already-rendered errors
      }
    }
  }, [turnstileToken]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Consent & Submission</h2>
        <p className="text-white/60 text-sm">Please review the legal and administrative terms before submitting.</p>
      </div>

      <div className="p-6 rounded-xl border border-white/10 bg-white/5 space-y-6">
        <FormCheckbox
          checked={formData.consentData}
          onChange={(e) => updateFormData({ consentData: e.target.checked })}
          error={errors.consentData}
          label="I agree that XE Labs may collect and process my application data for Build Sprint 2026 evaluation, communication, and internship consideration."
        />

        {formData.applicationType === 'Team' && (
          <FormCheckbox
            checked={formData.consentTeam}
            onChange={(e) => updateFormData({ consentTeam: e.target.checked })}
            error={errors.consentTeam}
            label="I confirm that I have consent from all team members to submit their details."
          />
        )}
      </div>

      {/* Cloudflare Turnstile Widget */}
      <div className="flex flex-col gap-3 mt-6 items-start">
        <label className="text-sm font-medium text-white/90">Spam Protection Verification</label>
        <div 
          id="turnstile-container"
          className="cf-turnstile" 
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
          data-callback="onTurnstileSuccess"
          data-theme="dark"
        ></div>
        {errors.turnstile && <span className="text-red-400 text-xs mt-1">{errors.turnstile}</span>}
      </div>

      {/* Privacy Note */}
      <div className="text-xs text-white/50 bg-white/5 p-4 rounded-xl border border-white/5 leading-relaxed mt-6">
        Your application data is used only for XE Labs Build Sprint 2026 evaluation and internship consideration. We do not sell applicant data. Access is restricted to the organizing team.
      </div>

      <div className="bg-[#fabd00]/10 border border-[#fabd00]/30 rounded-xl p-4 text-sm text-[#fabd00] mt-4">
        <strong>Important:</strong> After submitting, your application will be reviewed by the XE Labs team. Shortlisted candidates will receive an email with next steps.
      </div>
    </div>
  );
}
