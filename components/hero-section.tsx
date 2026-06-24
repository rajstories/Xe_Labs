"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const MEDIA_SEQUENCE = [
  { type: "video", src: "/bg-video.mp4", duration: 8000 },
  { type: "image", src: "/bg-image-1.png", duration: 5000 },
  { type: "image", src: "/bg-image-2.png", duration: 5000 },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentMedia = MEDIA_SEQUENCE[currentIndex];
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % MEDIA_SEQUENCE.length);
    }, currentMedia.duration);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden selection:bg-white selection:text-black">
      {/* Background Container (Forced stacking context to prevent video disappearing behind body) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#050505]">
        <AnimatePresence>
          {MEDIA_SEQUENCE.map((media, index) => {
            if (index !== currentIndex) return null;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {media.type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    src={media.src}
                  />
                ) : (
                  <Image
                    src={media.src}
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Layer 1: Global Dimming */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Layer 2: Vignette & Readability Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black" />

        {/* Layer 3: Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4 pt-32 pb-24">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-sans font-bold tracking-tighter leading-[0.95] text-white uppercase">
            <span className="block whitespace-nowrap">BUILDING AI NATIVE</span>
            <span className="block text-[#F4C744]">SYSTEMS</span>
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mx-auto"
        >
          Custom LLMs, automation agents, and intelligent workflows for modern
          business.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center mt-16 bg-gradient-to-r from-[#ffffff] to-[#d2cae6] border border-[#85769c] text-black px-6 py-4 font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(210,202,230,0.4)] uppercase tracking-[0.2em] text-xs rounded-full"
          >
            Build With Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
