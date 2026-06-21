'use client';

import { motion } from 'motion/react';
import React from 'react';

const steps = [
  {
    id: '01',
    title: 'Discover',
    description: 'We understand your business process, team structure, data flow and current bottlenecks.'
  },
  {
    id: '02',
    title: 'Design',
    description: 'We create the architecture for the AI system, workflow, agent or software product.'
  },
  {
    id: '03',
    title: 'Build',
    description: 'We develop the product using the right combination of software, automation, AI models and integrations.'
  },
  {
    id: '04',
    title: 'Deploy',
    description: 'We launch the system into real business workflows and improve it based on usage.'
  },
  {
    id: '05',
    title: 'Scale',
    description: 'We refine, automate and expand the system as the business grows.'
  }
];

export function MethodologySection() {
  return (
    <section className="w-full bg-black text-white py-32 md:py-48 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-48">
        
        {/* Part A: Why XE Labs Manifesto */}
        <div className="flex flex-col items-center text-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-display font-bold uppercase tracking-tight leading-[1.05] text-white">
              We don't just<br />
              use AI tools.<br />
              <span className="text-gray-500">We build AI<br />systems.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="text-lg md:text-xl text-gray-500 font-light max-w-4xl mx-auto leading-relaxed tracking-wide text-justify sm:text-center mt-8"
          >
            Most businesses are trying to add AI on top of old workflows. XE Labs builds AI-native systems from the ground up. We combine product strategy, software development, automation logic and LLM engineering to create systems that fit real business operations. Our focus is not just on building something impressive. Our focus is on building technology that works in the real world, improves execution and creates measurable business value.
          </motion.p>
        </div>

        {/* Part B: How We Work Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 border-t border-gray-900 pt-16 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="text-sm font-mono text-gray-600">
                {step.id}
              </div>
              <h3 className="text-2xl font-display uppercase tracking-widest text-white">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed tracking-wide">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
