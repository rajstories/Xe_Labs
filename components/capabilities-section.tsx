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
  // Isometric projection paths for a cube (scaled up slightly for the cluster)
  const top = "M0,15 L25.98,0 L51.96,15 L25.98,30 Z";
  const left = "M0,15 L25.98,30 L25.98,60 L0,45 Z";
  const right = "M51.96,15 L51.96,45 L25.98,60 L25.98,30 Z";

  return (
    <motion.g
      transform={`translate(${x}, ${y})`}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <motion.path
        d={top}
        fill={glow ? "#A883F8" : "#F4F1FA"}
        animate={glow ? { fill: ["#F4F1FA", "#FFFFFF", "#A883F8", "#F4F1FA"] } : {}}
        transition={
          glow
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 1,
              }
            : {}
        }
      />
      <path d={left} fill={glow ? "#8A5AD4" : "#E5DDF5"} />
      <path d={right} fill={glow ? "#723BB8" : "#D4C7EC"} />
    </motion.g>
  );
};

const IsometricDataCore = () => {
  const cubes = [];
  // Build a 3x3 base grid
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cubes.push({ i, j, k: 0 });
    }
  }
  // Add some stacked height variations
  cubes.push({ i: 1, j: 1, k: 1 });
  cubes.push({ i: 1, j: 1, k: 2 });
  cubes.push({ i: 0, j: 1, k: 1 });
  cubes.push({ i: 1, j: 0, k: 1 });

  // Randomly select glowing nodes based on position
  const isGlow = (c: any) =>
    (c.i === 1 && c.j === 1 && c.k === 2) ||
    (c.i === 2 && c.j === 0 && c.k === 0) ||
    (c.i === 0 && c.j === 2 && c.k === 0);

  return (
    <svg
      viewBox="0 0 300 300"
      className="absolute inset-0 w-full h-full opacity-90"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(150, 100)">
        {cubes
          .sort((a, b) => a.i + a.j - (b.i + b.j) || a.k - b.k)
          .map((c, idx) => {
            const x = (c.i - c.j) * 25.98;
            const y = (c.i + c.j) * 15 - c.k * 30; // 30 is cube height step
            const delay = (c.i + c.j) * 0.3 + c.k * 0.2;
            return (
              <IsometricCube
                key={idx}
                x={x}
                y={y}
                delay={delay}
                glow={isGlow(c)}
              />
            );
          })}
      </g>
    </svg>
  );
};

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
      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#28DCE6" />
        <stop offset="100%" stopColor="#31E885" />
      </linearGradient>
    </defs>
    
    <g transform="translate(40, 20)">
      {/* Code Editor Window */}
      <rect x="-10" y="-10" width="140" height="110" rx="6" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="0" cy="0" r="2.5" fill="#FF5F56" />
      <circle cx="10" cy="0" r="2.5" fill="#FFBD2E" />
      <circle cx="20" cy="0" r="2.5" fill="#27C93F" />
      <path d="M-10,10 L130,10" stroke="#333" strokeWidth="1" />
      
      <g filter="url(#neonGlowCode)">
        {[
          { y: 25, w: 60, d: 2 },
          { y: 40, w: 90, d: 2.5 },
          { y: 55, w: 40, d: 3 },
          { y: 70, w: 80, d: 2.2 },
          { y: 85, w: 50, d: 2.8 }
        ].map((line, i) => (
          <motion.rect
            key={i}
            x="0"
            y={line.y}
            height="4"
            rx="2"
            fill="url(#codeGrad)"
            opacity={0.8}
            initial={{ width: 0 }}
            animate={{
              width: [0, line.w, line.w - 10, line.w],
              opacity: [0.4, 0.9, 0.6, 0.9],
            }}
            transition={{
              duration: line.d,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </g>
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
      viewBox="0 0 400 300"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="neonGlowScan" x="-20%" y="-500%" width="140%" height="1000%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 8 Vertical Tracks */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 25 + i * 50;
        return (
          <g key={`track-${i}`}>
            <line
              x1={x}
              y1="0"
              x2={x}
              y2="100%"
              stroke="#D6D3CF"
              strokeWidth="2"
              strokeDasharray="6 10"
              opacity="0.4"
            />
          </g>
        );
      })}

      {/* Data Capsules */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 25 + i * 50;
        return (
          <motion.rect
            key={`capsule-${i}`}
            x={x - 4}
            y="-40"
            width="8"
            height="32"
            rx="4"
            fill={i % 2 === 0 ? "#20A2FF" : "#28DCE6"}
            animate={{
              y: [-40, 340],
            }}
            transition={{
              duration: 2.5 + (i % 3) * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.6,
            }}
          />
        );
      })}

      {/* Scanning Laser Line */}
      <motion.rect
        x="0"
        y="0"
        width="100%"
        height="2"
        fill="#28DCE6"
        filter="url(#neonGlowScan)"
        animate={{ y: [0, 300, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export function CapabilitiesSection() {
  return (
    <section
      className="w-full bg-[#F8F9FA] px-6 md:px-12 py-24 md:py-32"
      id="solutions"
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

        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[400px] gap-4 md:gap-6">
          {/* Card 1: Custom LLM Systems (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 bg-[#E8E4F8] text-black rounded-[2rem] grid grid-cols-1 md:grid-cols-2 overflow-hidden relative group min-h-[400px]"
          >
            <div className="p-10 relative z-10 flex flex-col justify-center gap-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight leading-none text-black mt-2">
                Custom LLM Systems
              </h3>
              <p className="text-sm md:text-base text-gray-800 font-light tracking-wide max-w-sm">
                LLM-powered systems that understand business data, documents,
                processes and customer interactions.
              </p>
            </div>
            <div className="relative h-full min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-[1.05]">
                <IsometricDataCore />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Automation Agents (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-1 bg-[#FFE4D6] text-black p-8 md:p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden relative group min-h-[400px]"
          >
            <div className="relative z-10 flex flex-col justify-start gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight text-black mt-2">
                Automation Agents
              </h3>
              <p className="text-sm text-gray-800 font-light tracking-wide">
                AI agents that assist with tasks, trigger workflows, connect
                tools, and reduce manual effort.
              </p>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center opacity-90 transition-transform duration-500 group-hover:scale-[1.05]">
              <OrbitingSwarm />
            </div>
          </motion.div>

          {/* Card 3: AI-Driven Software (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-1 bg-[#0A0A0A] text-white p-8 md:p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden relative group min-h-[400px]"
          >
            <div className="relative z-10 flex flex-col justify-start gap-4 mb-4">
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight text-white mt-2">
                AI-Driven Software
              </h3>
              <p className="text-sm text-gray-400 font-light tracking-wide">
                Software where AI is built into the core of the product
                experience.
              </p>
            </div>
            <div className="flex-1 w-full relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]">
              <CodeMorph />
            </div>
          </motion.div>

          {/* Card 4: Intelligent Workflows (Wide) */}
          <motion.div
            initial="idle"
            whileHover="hover"
            animate="idle"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="md:col-span-2 bg-[#F4F1ED] text-black rounded-[2rem] grid grid-cols-1 md:grid-cols-2 overflow-hidden relative group min-h-[400px]"
          >
            <div className="p-10 relative z-10 flex flex-col justify-center gap-4">
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight leading-tight text-black mt-2">
                Intelligent Workflows
              </h3>
              <p className="text-sm text-gray-800 font-light tracking-wide max-w-sm">
                End-to-end workflows that connect people, data, tools and AI
                into one structured system.
              </p>
            </div>
            <div className="relative h-full min-h-[300px] overflow-hidden">
              <div className="absolute inset-0 w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-[1.05]">
                <InteractiveDataWaterfall />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
