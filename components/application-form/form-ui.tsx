"use client";

import React, { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, useState, useRef } from 'react';
import { UploadCloud, CheckCircle, X } from 'lucide-react';
import { motion } from 'motion/react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  optional?: boolean;
}

export function FormInput({ label, error, optional, className = "", ...props }: FormInputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-white/90">
        {label} {optional && <span className="text-white/50 text-xs font-normal">(Optional)</span>}
      </label>
      <input
        className={`bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 focus:bg-white/10 transition-all text-sm`}
        {...props}
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function FormSelect({ label, error, options, className = "", ...props }: FormSelectProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-white/90">{label}</label>
      <select
        className={`bg-[#0a0a0a] border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#fabd00]/50 transition-all text-sm appearance-none`}
        {...props}
      >
        <option value="" disabled className="text-white/30">Select an option...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  optional?: boolean;
}

export function FormTextarea({ label, error, optional, className = "", ...props }: FormTextareaProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-white/90">
        {label} {optional && <span className="text-white/50 text-xs font-normal">(Optional)</span>}
      </label>
      <textarea
        className={`bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#fabd00]/50 focus:bg-white/10 transition-all text-sm resize-y min-h-[100px]`}
        {...props}
      />
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}

interface FormCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  error?: string;
}

export function FormCheckbox({ label, error, className = "", ...props }: FormCheckboxProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="flex items-start gap-3 cursor-pointer group">
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            type="checkbox"
            className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-[#fabd00] checked:border-[#fabd00] transition-colors cursor-pointer"
            {...props}
          />
          <CheckCircle className="absolute w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" strokeWidth={3} />
        </div>
        <span className="text-sm text-white/80 group-hover:text-white transition-colors leading-relaxed">
          {label}
        </span>
      </label>
      {error && <span className="text-red-400 text-xs ml-8">{error}</span>}
    </div>
  );
}

interface FileUploadProps {
  label: string;
  error?: string;
  accept?: string;
  maxSize?: number; // in MB
  onChange: (file: File | null) => void;
  value: File | null;
}

export function FileUpload({ label, error, accept, maxSize = 5, onChange, value }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (file: File) => {
    if (maxSize && file.size > maxSize * 1024 * 1024) {
      alert(`File size exceeds ${maxSize}MB limit.`);
      return;
    }
    onChange(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-white/90">{label}</label>
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
          isDragging
            ? 'border-[#fabd00] bg-[#fabd00]/5'
            : value
            ? 'border-green-500/50 bg-green-500/5'
            : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept={accept}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              handleFileChange(e.target.files[0]);
            }
          }}
        />
        
        {value ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{value.name}</p>
              <p className="text-xs text-white/50">{(value.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
              className="mt-2 text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" /> Remove File
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Click or drag file to this area to upload</p>
              <p className="text-xs text-white/50 mt-1">
                {accept ? `Supported formats: ${accept}` : 'Any format supported'}. Max size: {maxSize}MB.
              </p>
            </div>
          </div>
        )}
      </div>
      {error && <span className="text-red-400 text-xs">{error}</span>}
    </div>
  );
}
