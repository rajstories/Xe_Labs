"use client";

import { motion } from "motion/react";
import React from "react";

const IsometricCube = ({
  x,
  y,
  delay,
  glow,
}: {
  x: number;
  y: number;
  delay: number;
  glow?: boolean;
}) => {
  // Isometric projection paths for a cube
  const top = "M0,10 L17.32,0 L34.64,10 L17.32,20 Z";
  const left = "M0,10 L17.32,20 L17.32,40 L0,30 Z";
  const right = "M34.64,10 L34.64,30 L17.32,40 L17.32,20 Z";

  return (
    <motion.g
      transform={`translate(${x}, ${y})`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <motion.path
        d={top}
        fill={glow ? "#936DE3" : "#F4F1FA"}
        animate={glow ? { fill: ["#F4F1FA", "#936DE3", "#F4F1FA"] } : {}}
        transition={
          glow
            ? {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 1,
              }
            : {}
        }
      />
      <path d={left} fill={glow ? "#7543C9" : "#E5DDF5"} />
      <path d={right} fill={glow ? "#5D2BB8" : "#D4C7EC"} />
    </motion.g>
  );
};

const IsometricDataCore = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-full opacity-90"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(65, 35)">
      <IsometricCube x={34.64} y={-20} delay={0.2} />
      <IsometricCube x={0} y={0} delay={0.4} glow />
      <IsometricCube x={69.28} y={0} delay={0.6} />
      <IsometricCube x={34.64} y={20} delay={0.8} />
      <IsometricCube x={34.64} y={-60} delay={1.0} />
      <IsometricCube x={-34.64} y={-20} delay={0.5} />
      <IsometricCube x={-34.64} y={20} delay={0.7} />
    </g>
  </svg>
);

const CodeMorph = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <filter id="neonGlowCode" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <g filter="url(#neonGlowCode)">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.rect
          key={i}
          x="30"
          y={35 + i * 16}
          height="6"
          rx="3"
          fill="#28DCE6"
          opacity={0.8}
          initial={{ width: 40 + i * 10 }}
          animate={{
            width: [40 + i * 10, 120 - i * 15, 60 + i * 20, 40 + i * 10],
            x: [40, 40 + (i % 2) * 20, 40],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </g>
  </svg>
);

const OrbitingSwarm = () => (
  <svg
    viewBox="0 0 200 150"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Central Core */}
    <circle cx="100" cy="75" r="16" fill="#FF6B4A" />

    {/* Orbits */}
    {[
      {
        rx: 65,
        ry: 25,
        rotate: 0,
        duration: 4,
        size: 5,
        color: "#FF8A65",
        delay: 0,
      },
      {
        rx: 55,
        ry: 30,
        rotate: 60,
        duration: 3.5,
        size: 7,
        color: "#FF5722",
        delay: -1,
      },
      {
        rx: 70,
        ry: 20,
        rotate: -45,
        duration: 4.5,
        size: 4,
        color: "#E64A19",
        delay: -2,
      },
      {
        rx: 50,
        ry: 35,
        rotate: 120,
        duration: 5,
        size: 6,
        color: "#D84315",
        delay: -3,
      },
      {
        rx: 80,
        ry: 15,
        rotate: 30,
        duration: 6,
        size: 3,
        color: "#BF360C",
        delay: -1.5,
      },
    ].map((orbit, i) => (
      <g key={i} transform={`translate(100, 75) rotate(${orbit.rotate})`}>
        {/* subtle orbit path */}
        <ellipse
          cx="0"
          cy="0"
          rx={orbit.rx}
          ry={orbit.ry}
          fill="none"
          stroke="#FFCCBC"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.6"
        />

        {/* Orbiting dot */}
        <motion.circle
          r={orbit.size}
          fill={orbit.color}
          animate={{
            x: [orbit.rx, 0, -orbit.rx, 0, orbit.rx],
            y: [0, orbit.ry, 0, -orbit.ry, 0],
            scale: [1, 1.4, 1, 0.6, 1],
          }}
          transition={{
            duration: orbit.duration,
            repeat: Infinity,
            ease: "linear",
            delay: orbit.delay,
          }}
        />
      </g>
    ))}
  </svg>
);

const InteractiveDataWaterfall = () => {
  return (
    <svg
      viewBox="0 0 400 150"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {[80, 140, 200, 260, 320].map((x, i) => (
        <g key={i}>
          {/* Column line */}
          <line
            x1={x}
            y1="0"
            x2={x}
            y2="150"
            stroke="#D6D3CF"
            strokeWidth="2"
            strokeDasharray="8 8"
          />

          {/* Droplet */}
          <motion.circle
            cx={x}
            r="6"
            fill={i % 2 === 0 ? "#20A2FF" : "#28DCE6"}
            initial={{ cy: -10, opacity: 0 }}
            variants={{
              idle: {
                cy: [-10, 160],
                opacity: [0, 1, 1, 0],
                transition: {
                  duration: 3 + (i % 3) * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.4,
                },
              },
              hover: {
                cy: [-10, 160],
                opacity: [0, 1, 1, 0],
                transition: {
                  duration: (3 + (i % 3) * 0.5) / 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                },
              },
            }}
          />
        </g>
      ))}
    </svg>
  );
};

export function CapabilitiesSection() {
  return (
    <section
      className="w-full bg-[#F8F9FA] px-6 md:px-12 py-24 md:py-32"
      id="work"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-black font-bold tracking-tight uppercase">
            Capabilities
          </h2>
          <p className="text-gray-600 text-lg mt-4 font-light tracking-wide max-w-2xl">
            Engineering intelligent systems to scale modern business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[400px_400px] gap-4 md:gap-6">
          {/* Card 1: Custom LLM Systems (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-1 bg-[#E8E4F8] text-black rounded-[2rem] flex flex-col md:flex-row hover:scale-[1.01] transform transition-transform duration-300 overflow-hidden relative"
          >
            <div className="p-8 md:p-12 flex flex-col justify-end w-full md:w-1/2 z-10 order-2 md:order-1 h-full min-h-[200px]">
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight leading-none text-black mb-4">
                Custom LLM Systems
              </h3>
              <p className="text-sm md:text-base text-gray-800 font-light tracking-wide">
                LLM-powered systems that understand business data, documents,
                processes and customer interactions.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-full relative flex items-center justify-center pt-8 md:pt-0 order-1 md:order-2">
              <IsometricDataCore />
            </div>
          </motion.div>

          {/* Card 2: AI-Driven Software (Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 bg-[#0A0A0A] text-white p-8 md:p-10 rounded-[2rem] flex flex-col hover:scale-[1.01] transform transition-transform duration-300 overflow-hidden relative min-h-[400px]"
          >
            <div className="flex-1 w-full relative flex items-center justify-center mb-8 h-48 md:h-auto">
              <CodeMorph />
            </div>
            <div className="z-10 mt-auto">
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight text-white mb-3">
                AI-Driven Software
              </h3>
              <p className="text-sm text-gray-400 font-light tracking-wide">
                Software where AI is built into the core of the product
                experience.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Automation Agents (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-[#FFE4D6] text-black p-8 md:p-10 rounded-[2rem] flex flex-col justify-between hover:scale-[1.01] transform transition-transform duration-300 overflow-hidden relative min-h-[400px]"
          >
            <div className="flex-1 relative flex items-center justify-center mb-8">
              <OrbitingSwarm />
            </div>
            <div className="z-10">
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight text-black mb-3">
                Automation Agents
              </h3>
              <p className="text-sm text-gray-800 font-light tracking-wide">
                AI agents that assist with tasks, trigger workflows, connect
                tools, and reduce manual effort.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Intelligent Workflows (Standard) */}
          <motion.div
            initial="idle"
            whileHover="hover"
            animate="idle"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-[#F4F1ED] text-black p-8 md:p-10 rounded-[2rem] flex flex-col justify-between hover:scale-[1.01] transform transition-transform duration-300 overflow-hidden relative min-h-[400px]"
          >
            <div className="flex-1 relative flex items-center justify-center mb-8">
              <InteractiveDataWaterfall />
            </div>
            <div className="z-10">
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight text-black mb-3">
                Intelligent Workflows
              </h3>
              <p className="text-sm text-gray-800 font-light tracking-wide">
                End-to-end workflows that connect people, data, tools and AI
                into one structured system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
