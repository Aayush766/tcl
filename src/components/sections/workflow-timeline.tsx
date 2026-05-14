"use client";

import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { title: "Discovery", desc: "Uncovering your core business DNA and objectives.", tag: "RECON" },
  { title: "Strategy", desc: "Mapping the neural pathways for digital growth.", tag: "PLAN" },
  { title: "Research", desc: "Analyzing market gaps and competitor weak points.", tag: "DATA" },
  { title: "UI/UX", desc: "Crafting immersive, high-conversion interfaces.", tag: "DESIGN" },
  { title: "Development", desc: "Engineering with elite performance in mind.", tag: "BUILD" },
  { title: "AI Integration", desc: "Injecting custom neural models into the stack.", tag: "NEURAL" },
  { title: "SEO Optimization", desc: "Ensuring maximum algorithmic visibility.", tag: "REACH" },
  { title: "Testing", desc: "Rigorous stress-testing and quality assurance.", tag: "STRESS" },
  { title: "Deployment", desc: "Atomic, zero-downtime launch sequence.", tag: "LAUNCH" },
  { title: "Scaling", desc: "Expanding infrastructure to meet global demand.", tag: "GROW" },
  { title: "Support", desc: "Continuous 24/7 neural system monitoring.", tag: "LIVE" },
];

export default function WorkflowTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Background Parallax
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative bg-[#020202] py-60 px-6 overflow-hidden">
      {/* 1. LAYERED BACKGROUND ENGINE */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
      >
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202]" />
      </motion.div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* 2. BRUTALIST HEADER */}
        <div className="mb-60 relative">
          <div className="absolute -left-10 top-0 text-[12rem] font-black text-white/[0.02] select-none leading-none">PROCESS</div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex flex-col items-start"
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="h-[2px] w-24 bg-fuchsia-600" />
              <span className="text-xs font-black uppercase tracking-[0.8em] text-fuchsia-500">System Lifecycle</span>
            </div>
            <h2 className="text-8xl md:text-[11rem] font-black tracking-tighter text-white leading-[0.8] mb-4">
              THE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}>METHOD.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* 3. DYNAMIC THREAD LINE */}
          <div className="absolute left-[20px] md:left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/5">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-fuchsia-600 via-purple-600 to-cyan-400"
            />
          </div>

          <div className="space-y-40 md:space-y-64">
            {steps.map((step, index) => (
              <StepItem key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* 4. CALL TO ACTION TERMINAL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-60 p-12 border border-white/5 bg-zinc-900/20 backdrop-blur-3xl rounded-[3rem] flex flex-col items-center text-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 opacity-50" />
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> 
              Protocol Ready
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-10">Initiate your build?</h3>
            <button className="group relative px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.4em] rounded-full hover:scale-105 transition-transform active:scale-95">
              <span className="relative z-10">Initialize Sequence</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center justify-between ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* CONNECTOR CABLE */}
      <div className={`absolute top-1/2 hidden md:block h-[1px] transition-all duration-1000 ease-out
        ${index % 2 === 0 ? "right-1/2 left-[55%]" : "left-1/2 right-[55%]"}
        ${isInView ? "bg-white/20" : "bg-white/0"}
      `}>
        <motion.div 
          animate={{ scaleX: isInView ? 1 : 0 }}
          className={`h-full w-full bg-gradient-to-r ${index % 2 === 0 ? "from-fuchsia-500 to-transparent" : "from-transparent to-cyan-500"}`} 
          style={{ originX: index % 2 === 0 ? 0 : 1 }}
        />
      </div>

      {/* STEP NODE */}
      <div className="absolute left-[20px] md:left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: isInView ? 1 : 0.5,
            backgroundColor: isInView ? "#fff" : "#18181b",
            borderColor: isInView ? "#f0abfc" : "#3f3f46"
          }}
          className="h-4 w-4 rounded-full border-2 z-10 transition-colors duration-500"
        />
        {isInView && (
          <motion.div 
            layoutId="glow"
            className="absolute inset-[-15px] bg-fuchsia-500/20 blur-xl rounded-full" 
          />
        )}
      </div>

      {/* CONTENT BLOCK */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-[45%] pl-12 md:pl-0"
      >
        <div className={`group relative p-1 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-10'}`}>
          <div className="relative z-10 bg-zinc-950/50 border border-white/5 p-10 rounded-[2.5rem] hover:border-white/10 transition-colors backdrop-blur-sm overflow-hidden">
            {/* Tag Line */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[9px] tracking-[0.4em] text-fuchsia-500 uppercase px-3 py-1 bg-fuchsia-500/5 border border-fuchsia-500/10 rounded-md">
                {step.tag}
              </span>
              <span className="text-[10px] font-mono text-zinc-700 tracking-tighter">0{index + 1} // SEC_AUTH_TRUE</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 transition-transform group-hover:translate-x-1">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500 max-w-sm group-hover:text-zinc-400">
              {step.desc}
            </p>

            {/* Geometric Decoration */}
            <div className="absolute -bottom-10 -right-10 h-32 w-32 border border-white/[0.02] rounded-full group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </div>
      </motion.div>

      {/* EMPTY SPACER */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
}