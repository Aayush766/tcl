"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiArrowRight, FiTarget, FiZap } from "react-icons/fi";
import Link from "next/link";

export default function FreeConsultation() {
  return (
    <section className="relative bg-[#030303] py-40 px-6 overflow-hidden w-full selection:bg-fuchsia-500/30">
      
      {/* Premium Background Ambient Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-fuchsia-600 to-purple-600 blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500 blur-[120px]" 
        />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative overflow-hidden rounded-[3.5rem] border border-white/5 bg-[#070709]/60 p-12 text-center backdrop-blur-3xl md:p-28 shadow-[0_30px_100px_rgba(0,0,0,0.8)] group/card"
        >
          {/* Minimalist Tech Style Corner Accent Brackets */}
          <div className="absolute top-0 left-0 h-32 w-32 border-t border-l border-fuchsia-500/30 rounded-tl-[3.5rem] transition-all duration-500 group-hover/card:border-fuchsia-500/60" />
          <div className="absolute bottom-0 right-0 h-32 w-32 border-b border-r border-cyan-500/30 rounded-br-[3.5rem] transition-all duration-500 group-hover/card:border-cyan-500/60" />

          <div className="relative z-10">
            {/* Top Indicator Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/5 bg-zinc-950 px-6 py-2 shadow-[0_0_15px_rgba(217,70,239,0.05)]"
            >
              <FiZap className="text-fuchsia-400 animate-pulse" size={13} />
              <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
                Get Started
              </span>
            </motion.div>

            {/* High-Impact Architectural Typography */}
            <h2 className="mx-auto max-w-4xl text-5xl font-black tracking-tighter text-white md:text-8xl leading-[0.92]">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff] italic font-serif font-normal pr-2">BUILD</span> <br className="hidden md:block" /> 
              YOUR FUTURE?
            </h2>

            {/* Subtext */}
            <p className="mx-auto mt-8 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-500 font-medium px-2">
              Grow your business with high-performance automation and AI custom-made for your workflows. Book a call to secure your spot today.
            </p>

            {/* Premium CTA Call-to-Actions */}
            <motion.div 
              className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              {/* Primary CTA -> Redirect to /book */}
              <Link href="/book" passHref className="w-full sm:w-auto">
                <button className="relative group overflow-hidden rounded-xl p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500" />
                  <div className="relative flex items-center justify-center gap-3 rounded-[11px] bg-[#070709] px-10 py-5 text-xs font-bold uppercase tracking-wider text-white transition-all group-hover:bg-transparent">
                    <FiCalendar className="text-base text-fuchsia-400 group-hover:text-white transition-colors" />
                    <span>Book Free Call</span>
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </button>
              </Link>

              {/* Secondary CTA -> Redirect to /project */}
              <Link href="/project" passHref className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-10 py-5 rounded-xl border border-zinc-900 bg-zinc-950/40 text-xs font-bold uppercase tracking-wider text-zinc-400 transition-all duration-200 hover:text-white hover:border-zinc-800 active:scale-[0.98]">
                  <FiTarget size={14} className="text-zinc-600" />
                  <span>View Our Work</span>
                </button>
              </Link>
            </motion.div>

            {/* Live Availability Radar Status Badge */}
            <div className="mt-16 flex flex-col items-center">
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-900 bg-zinc-950/80 backdrop-blur-sm shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                  Status: Available <span className="text-zinc-700 mx-1.5">//</span> Only 2 Slots Left This Week
                </span>
              </div>
            </div>
          </div>

          {/* Faded Background Grid Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
            <svg width="100%" height="100%" className="stroke-white">
              <defs>
                <pattern id="consultation-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#consultation-grid)" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}