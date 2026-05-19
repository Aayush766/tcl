"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiCpu, FiHash, FiActivity } from "react-icons/fi";

const faqs = [
  {
    q: "How does the AI integration process work?",
    a: "We begin with a neural audit to identify architectural bottlenecks. We then engineer custom LLM wrappers or automation agents that interface directly with your existing API stack, ensuring zero-latency data flow.",
    id: "N-01"
  },
  {
    q: "Can you scale solutions for global enterprises?",
    a: "Our infrastructure utilizes globally distributed edge-node networks. We guarantee <50ms latency for AI inference and platform interactions regardless of geographic origin.",
    id: "E-42"
  },
  {
    q: "Do you offer post-deployment neural monitoring?",
    a: "Yes. We implement real-time drift detection and performance telemetry. Our agents monitor model accuracy and API health 24/7 to ensure your digital fabric remains optimized.",
    id: "M-99"
  },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="relative bg-[#020202] py-40 px-6 overflow-hidden">
      {/* Background Neural Lines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="mb-24 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-fuchsia-500 mb-4 justify-center md:justify-start font-mono"
            >
              <FiCpu className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Query Protocol</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white">
              KNOWLEDGE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-900" style={{ WebkitTextStroke: '1px #333' }}>BASE.</span>
            </h2>
          </div>
          
          <div className="hidden lg:block h-20 w-[1px] bg-zinc-800 rotate-[30deg]" />
          
          <div className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest leading-relaxed">
            [ Status: Operational ]<br />
            [ Index: Updated May 2026 ]<br />
            [ Latency: 12ms ]
          </div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = activeIdx === i;
            return (
              <motion.div
                key={i}
                initial={false}
                className={`relative group overflow-hidden transition-all duration-500 ${
                  isOpen ? "bg-zinc-900/30" : "bg-transparent hover:bg-white/[0.02]"
                }`}
              >
                {/* Active Sidebar Indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 ${
                  isOpen ? "bg-fuchsia-500 shadow-[0_0_15px_#d946ef]" : "bg-zinc-800"
                }`} />

                <button
                  onClick={() => setActiveIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-zinc-700 group-hover:text-fuchsia-500 transition-colors">
                      {faq.id}
                    </span>
                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-all ${
                      isOpen ? "text-white translate-x-2" : "text-zinc-500"
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  
                  <div className={`flex h-8 w-8 items-center justify-center rounded-sm border transition-all duration-300 ${
                    isOpen ? "border-fuchsia-500 bg-fuchsia-500 text-black rotate-90" : "border-zinc-800 text-zinc-600 group-hover:border-zinc-500"
                  }`}>
                    {isOpen ? <FiHash /> : <FiPlus />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <div className="px-20 pb-10 relative">
                        {/* Scanline Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/[0.02] to-transparent h-full w-full pointer-events-none animate-scanline" />
                        
                        <p className="max-w-3xl text-lg leading-relaxed text-zinc-400 font-light">
                          {faq.a}
                        </p>
                        
                        <div className="mt-8 flex items-center gap-6">
                           <div className="flex items-center gap-2 text-fuchsia-500/50 font-mono text-[9px] uppercase tracking-widest">
                              <FiActivity />
                              <span>Verified Response</span>
                           </div>
                           <div className="h-[1px] flex-1 bg-zinc-800/50" />
                           <span className="font-mono text-[9px] text-zinc-700 uppercase">Archive_Ref: {faq.id}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* <p className="text-zinc-500 text-sm font-mono uppercase tracking-[0.2em]">
            Detailed specs required?
          </p> */}
          {/* <button className="relative group px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-fuchsia-500 hover:text-white transition-all duration-300 rounded-none overflow-hidden">
            <span className="relative z-10">Access Architect Logs</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-40 group-hover:animate-shine" />
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}