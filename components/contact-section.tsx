'use client';

import { motion } from 'motion/react';
import React from 'react';

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    budgetRange: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Project Type: ${formData.projectType}
Budget Range: ${formData.budgetRange}

Message:
${formData.message}`;

    const mailtoUrl = `mailto:team@xelabs.in?subject=${encodeURIComponent(`Enquiry from ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="w-full bg-black text-white py-32 md:py-48 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-24 items-start">
        
        {/* Massive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-display font-bold uppercase tracking-tight leading-[1.05] text-white">
            Ready to<br />
            build your<br />
            AI-native<br />
            <span className="text-gray-500">System?</span>
          </h2>
        </motion.div>

        {/* Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-2xl lg:mt-8 pt-8"
        >
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="NAME" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-b border-gray-800 bg-transparent outline-none py-4 w-full text-white placeholder-gray-600 focus:border-white transition-colors tracking-wide text-sm" 
              />
              <input 
                type="text" 
                placeholder="COMPANY" 
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="border-b border-gray-800 bg-transparent outline-none py-4 w-full text-white placeholder-gray-600 focus:border-white transition-colors tracking-wide text-sm" 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="email" 
                placeholder="EMAIL" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-b border-gray-800 bg-transparent outline-none py-4 w-full text-white placeholder-gray-600 focus:border-white transition-colors tracking-wide text-sm" 
              />
              <input 
                type="text" 
                placeholder="PROJECT TYPE" 
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="border-b border-gray-800 bg-transparent outline-none py-4 w-full text-white placeholder-gray-600 focus:border-white transition-colors tracking-wide text-sm" 
              />
            </div>
            
            <input 
              type="text" 
              placeholder="BUDGET RANGE" 
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="border-b border-gray-800 bg-transparent outline-none py-4 w-full text-white placeholder-gray-600 focus:border-white transition-colors tracking-wide text-sm" 
            />
            
            <textarea 
              placeholder="MESSAGE" 
              rows={4} 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="border-b border-gray-800 bg-transparent outline-none py-4 w-full text-white placeholder-gray-600 focus:border-white transition-colors tracking-wide text-sm resize-none"
            ></textarea>
            
            <div className="mt-8 flex justify-start">
              <button 
                type="submit" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#ffffff] to-[#d2cae6] border border-[#85769c] text-black px-14 py-5 font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(210,202,230,0.4)] uppercase tracking-[0.2em] text-xs rounded-full"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
