"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Discover",
    description:
      "We understand your business process, team structure, data flow and current bottlenecks.",
  },
  {
    id: "02",
    title: "Design",
    description:
      "We create the architecture for the AI system, workflow, agent or software product.",
  },
  {
    id: "03",
    title: "Build",
    description:
      "We develop the product using the right combination of software, automation, AI models and integrations.",
  },
  {
    id: "04",
    title: "Deploy",
    description:
      "We launch the system into real business workflows and improve it based on usage.",
  },
  {
    id: "05",
    title: "Scale",
    description:
      "We refine, automate and expand the system as the business grows.",
  },
];

export function MethodologySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Section 1: The Manifesto */}
      <section className="w-full bg-[#F8F9FA] pt-20 pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (The Anchor) */}
            <div className="lg:col-span-4 flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-1 bg-black mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black uppercase">
                  Our Philosophy
                </h2>
              </motion.div>
            </div>

            {/* Right Column (The Manifesto) */}
            <div className="lg:col-span-8 flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1,
                }}
                className="text-5xl md:text-6xl lg:text-7xl lg:text-[5rem] font-display font-bold uppercase tracking-tight leading-[0.9] text-left w-full"
              >
                <span className="text-black block">
                  We don&apos;t just
                  <br />
                  use AI tools.
                </span>
                <span className="text-[#20A2FF] block mt-2 md:mt-4 drop-shadow-md">
                  We build AI systems.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-gray-600 text-lg md:text-xl font-light max-w-3xl leading-relaxed tracking-wide text-left mt-10"
              >
                Most businesses are trying to add AI on top of old workflows. XE
                Labs builds AI-native systems from the ground up. We combine
                product strategy, software development, automation logic and LLM
                engineering to create systems that fit real business operations.
                Our focus is not just on building something impressive. Our
                focus is on building technology that works in the real world,
                improves execution and creates measurable business value.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Process Timeline */}
      <section className="w-full bg-black py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] text-[#28DCE6] font-semibold mb-4 text-center md:text-left">
              How We Work
            </h2>
          </motion.div>

          <div className="relative w-full" ref={containerRef}>
            {/* The Connecting Line Background (Desktop) */}
            <div className="hidden md:block absolute left-0 right-0 h-[1px] bg-gray-800 top-[1.5rem]" />

            {/* The Interpolating Cyan Dot (Desktop) */}
            <motion.div
              className="hidden md:block absolute w-3 h-3 bg-[#28DCE6] rounded-full top-[1.5rem] -translate-y-1/2 z-10 shadow-[0_0_15px_#28DCE6]"
              style={{
                left: dotPosition,
                x: "-50%", // offset the dot's center to align precisely with position
              }}
            />

            {/* Pipeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 lg:gap-8 relative z-20">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="group flex flex-col cursor-pointer transition-transform duration-300 hover:-translate-y-1 relative"
                >
                  {/* Step Number (Above the line) */}
                  <div className="h-[3rem] flex items-start mb-2 md:mb-6">
                    <span className="text-[#28DCE6] font-mono text-sm uppercase font-semibold">
                      {step.id}
                    </span>
                  </div>

                  {/* Visual separator for Mobile only */}
                  <div className="md:hidden w-full h-[1px] bg-gray-800 mb-6 relative">
                    <div className="absolute left-0 w-1/4 h-[1px] bg-[#28DCE6]" />
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 group-hover:text-white transition-colors duration-300 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
