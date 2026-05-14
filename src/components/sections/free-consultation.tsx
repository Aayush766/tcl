"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight, FiTarget, FiZap } from "react-icons/fi";

export default function FreeConsultation() {
  return (
    <section className="relative bg-[#020202] py-40 px-6 overflow-hidden">
      {/* THE BRAND SPECTRUM GLOW */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#FF0080]/10 blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#00DFD8]/10 blur-[100px] animate-pulse pointer-events-none delay-700" />

      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden rounded-[4rem] border border-white/5 bg-zinc-900/20 p-12 text-center backdrop-blur-3xl md:p-32"
        >
          {/* Neon Corner Brackets - Matching Logo Gradient */}
          <div className="absolute top-0 left-0 h-32 w-32 border-t border-l border-[#FF0080]/40 rounded-tl-[4rem]" />
          <div className="absolute bottom-0 right-0 h-32 w-32 border-b border-r border-[#00DFD8]/40 rounded-br-[4rem]" />

          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-6 py-2"
            >
              <FiZap className="text-[#FF0080] animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">
                Final Protocol
              </span>
            </motion.div>

            <h2 className="mx-auto max-w-4xl text-6xl font-black tracking-tighter text-white md:text-8xl leading-[0.9]">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#00DFD8] italic">INITIALIZE</span> <br /> 
              THE FUTURE?
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl font-medium">
              The weave is waiting. Join elite enterprises integrating high-performance 
              neural architecture into their core DNA. Secure your node in the network.
            </p>

            <motion.div 
              className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row"
            >
              {/* Primary Gradient Button */}
              <button className="relative group overflow-hidden rounded-full p-[1px] transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]" />
                <div className="relative flex items-center gap-3 rounded-full bg-black px-12 py-6 text-xs font-black uppercase tracking-[0.2em] text-white transition-all group-hover:bg-transparent">
                  <FiCalendar className="text-lg" />
                  <span>Execute Sync</span>
                  <FiArrowRight className="transition-transform group-hover:translate-x-2" />
                </div>
              </button>

              <button className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-[#00DFD8]">
                <FiTarget />
                View Archive
              </button>
            </motion.div>

            {/* Live Telemetry Indicator */}
            <div className="mt-20 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                <div className="relative flex h-2 w-2">
                  <div className="absolute h-full w-full animate-ping rounded-full bg-[#00DFD8] opacity-40" />
                  <div className="h-2 w-2 rounded-full bg-[#00DFD8]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
                  Network Load: Optimized // 2 Slots Remaining
                </span>
              </div>
            </div>
          </div>

          {/* Neural Grid Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" className="stroke-white">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}