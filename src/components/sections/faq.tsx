"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "How does the integration process work?",
    a: "We start with a strategy evaluation to map out your current business systems. From there, we architect a high-performance framework that links into your digital pipeline, workflows, and communication tools. You see a clear, functional overview before we push the system live.",
  },
  {
    q: "Can you scale solutions for high-traffic environments?",
    a: "Absolutely. Our deployment architectures utilize globally optimized edge routing infrastructures. We ensure high-performance execution times and ultra-low latency platform interactions, regardless of volume or geographic origin.",
  },
  {
    q: "Do you offer post-deployment operational support?",
    a: "Yes. We incorporate persistent performance monitoring and continuous technical optimization. Our team tracks platform reliability, integration statuses, and workflow efficiency to guarantee your business architecture remains structurally optimized.",
  },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#030303] py-32 px-6 overflow-hidden text-white selection:bg-fuchsia-500/30">
      
      {/* Background Gradients & Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ff0099]/5 to-[#bf5af2]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#bf5af2]/5 to-[#0a84ff]/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                Common Inquiries
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff]">
                Questions.
              </span>
            </h2>
          </div>
          
          <div className="border-l border-zinc-800 pl-4 md:text-left">
            <p className="max-w-[320px] text-sm text-zinc-400 font-medium leading-relaxed">
              Clear answers regarding our strategic design, implementation pipelines, and long-term ecosystem management.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-zinc-900 border-t border-b border-zinc-900">
          {faqs.map((faq, i) => {
            const isOpen = activeIdx === i;
            return (
              <div
                key={i}
                className="relative overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIdx(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-6 sm:py-8 text-left group"
                >
                  <span className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900/50 border transition-all duration-300 ${
                    isOpen 
                      ? "border-purple-500/30 text-[#bf5af2] rotate-180" 
                      : "border-zinc-800 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-300"
                  }`}>
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8 pr-12">
                        <p className="text-sm sm:text-base leading-relaxed text-zinc-400 font-medium max-w-3xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}