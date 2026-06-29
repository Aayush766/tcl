"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiXCircle, 
  FiCheckCircle, 
  FiArrowRight, 
  FiTrendingUp, 
  FiZap, 
  FiSmartphone, 
  FiMessageSquare,
  FiCheck
} from "react-icons/fi";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer, 
  SiGoogleanalytics, 
  SiWhatsapp 
} from "react-icons/si";

export default function WebsiteTransformations() {
  const [isHovered, setIsHovered] = useState<"before" | "after" | "results" | null>(null);

  const beforeProblems = [
    "Outdated WordPress Theme", "Not Mobile Responsive", "Weak Brand Identity",
    "Poor User Experience", "Slow Loading Speed", "No Clear Call-To-Action",
    "Difficult Navigation", "Low Trust & Credibility", "Not SEO Optimized", "Poor Lead Generation"
  ];

  const afterImprovements = [
    "Premium Custom UI/UX", "Built with Next.js 15", "Lightning Fast Performance",
    "Fully Responsive", "Conversion-Focused Layout", "SEO Optimized",
    "WhatsApp & Inquiry Integration", "Product Showcase with Better UX", 
    "Trust Building Sections", "High-Converting Call-To-Actions"
  ];

  const techBadges = [
    { name: "Next.js 15", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Framer", icon: <SiFramer /> },
    { name: "Analytics", icon: <SiGoogleanalytics /> },
    { name: "WhatsApp", icon: <SiWhatsapp /> }
  ];

  return (
    <section className="relative w-full bg-[#030303] py-28 px-6 overflow-hidden text-zinc-200 selection:bg-fuchsia-500/30">
      
      {/* BACKGROUND GRADIENTS & NOISE MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        {/* Dynamic ambient lights using colors from reference design */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 blur-[130px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[120px]" 
        />
      </div>

      {/* HEADER SECTION */}
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center justify-center relative mb-4">
          <span className="text-[11px] font-mono font-black uppercase tracking-[0.35em] bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
            Case Studies &amp; Performance
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          Website Transformations That <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff] drop-shadow-[0_0_30px_rgba(191,90,242,0.2)]">
            Drive Real Business Growth
          </span>
        </h2>
        <p className="text-sm md:text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
          We don't just redesign websites—we build high-converting digital experiences that generate more leads, increase trust, and scale your operations.
        </p>
      </div>

      {/* THREE-COLUMN FLOW CONTAINER */}
      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative">
          
          {/* DESKTOP CONNECTOR ARROWS */}
          <div className="hidden lg:flex absolute left-[33.33%] top-[180px] -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <motion.div
              animate={{ x: isHovered === "before" || isHovered === "after" ? [0, 5, 0] : 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FiArrowRight className={`text-2xl transition-colors duration-300 ${isHovered === "after" ? "text-cyan-400 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-zinc-800"}`} />
            </motion.div>
          </div>

          <div className="hidden lg:flex absolute left-[66.66%] top-[180px] -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <motion.div
              animate={{ x: isHovered === "after" || isHovered === "results" ? [0, 5, 0] : 0 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <FiArrowRight className={`text-2xl transition-colors duration-300 ${isHovered === "results" ? "text-fuchsia-400 filter drop-shadow-[0_0_8px_rgba(232,121,249,0.5)]" : "text-zinc-800"}`} />
            </motion.div>
          </div>
          
          {/* 1. THE BEFORE CARD */}
          <motion.div 
            className="rounded-3xl p-[1px] bg-zinc-900/50 transition-all duration-300"
            animate={{ 
              y: isHovered === "before" ? -8 : 0,
              background: isHovered === "before" ? "linear-gradient(to bottom right, rgba(244,63,94,0.2), transparent)" : "linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)"
            }}
            onMouseEnter={() => setIsHovered("before")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="w-full h-full rounded-[23px] bg-[#070709]/90 backdrop-blur-xl p-6 flex flex-col justify-between">
              <div>
                <div className="mb-6 w-fit rounded-full bg-rose-500/10 px-4 py-1 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-rose-400">Before Redesign</span>
                </div>

                {/* Laptop Mockup Box */}
                <div className="relative w-full aspect-[16/10] bg-zinc-950 rounded-xl p-2 border border-zinc-900 shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-zinc-950 rounded-lg overflow-hidden border border-zinc-900/60 relative">
                    <motion.img 
                      src="/images/old-patodia.png"
                      alt="Old Patodia Exports Website"
                      className="w-full h-full object-cover object-top"
                      animate={{ filter: isHovered === "after" ? "grayscale(100%) opacity(40%)" : "grayscale(0%)" }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Problems Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {beforeProblems.map((text, i) => (
                    <div key={i} className="flex items-start gap-2 text-zinc-500">
                      <FiXCircle className="text-rose-500/80 shrink-0 text-sm mt-0.5" />
                      <span className="text-xs font-semibold leading-tight tracking-wide">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. THE AFTER CARD */}
          <motion.div 
            className="rounded-3xl p-[1px] transition-all duration-300 relative"
            initial={{ background: "linear-gradient(to bottom right, rgba(6,182,212,0.15), rgba(191,90,242,0.15))" }}
            animate={{ 
              y: isHovered === "after" ? -12 : 0,
              background: isHovered === "after" 
                ? "linear-gradient(to top right, rgba(6,182,212,0.4), rgba(191,90,242,0.4))" 
                : "linear-gradient(to bottom right, rgba(6,182,212,0.15), rgba(191,90,242,0.15))",
            }}
            onMouseEnter={() => setIsHovered("after")}
            onMouseLeave={() => setIsHovered(null)}
          >
            {/* Ambient Background Glow for center piece */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl blur-xl opacity-50 pointer-events-none" />

            <div className="w-full h-full rounded-[23px] bg-[#070709] p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="mb-6 w-fit rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-4 py-1 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">After Transformation</span>
                </div>

                {/* Laptop Mockup Box with Reference Style Glow */}
                <motion.div 
                  className="relative w-full aspect-[16/10] bg-zinc-950 rounded-xl p-2 border border-zinc-800/80 shadow-2xl overflow-hidden"
                  animate={{ borderColor: isHovered === "after" ? "rgba(6, 182, 212, 0.4)" : "rgba(38, 38, 38, 0.8)" }}
                >
                  <div className="w-full h-full bg-[#08080c] rounded-lg overflow-hidden border border-zinc-900 relative">
                    <img 
                      src="/images/new-patodia.png"
                      alt="Premium Next.js Redesign" 
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>

                {/* Improvements Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                  {afterImprovements.map((text, i) => (
                    <div key={i} className="flex items-start gap-2 text-zinc-200">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[9px] text-cyan-400 mt-0.5">
                        <FiCheck />
                      </div>
                      <span className="text-xs font-semibold leading-tight tracking-wide">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges Row */}
                <div className="mt-6 pt-5 border-t border-zinc-900 flex flex-wrap gap-1.5">
                  {techBadges.map((tech, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-1.5 text-[9px] font-mono font-bold bg-zinc-950 border border-zinc-900 rounded-md px-2 py-1 text-zinc-400 transition-colors hover:border-zinc-800"
                    >
                      <span className="text-xs text-purple-400">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

          {/* 3. THE RESULTS CARD */}
          <motion.div 
            className="rounded-3xl p-[1px] bg-zinc-900/50 transition-all duration-300"
            animate={{ 
              y: isHovered === "results" ? -8 : 0,
              background: isHovered === "results" ? "linear-gradient(to bottom right, rgba(191,90,242,0.2), transparent)" : "linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)"
            }}
            onMouseEnter={() => setIsHovered("results")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="w-full h-full rounded-[23px] bg-[#070709]/90 backdrop-blur-xl p-6 flex flex-col justify-between">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 w-fit rounded-full bg-fuchsia-500/10 px-4 py-1 border border-fuchsia-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-fuchsia-400">Business Impact</span>
                  </div>
                  
                  {/* Dashboard Box aligned to structure metrics beautifully */}
                  <div className="relative w-full aspect-[16/10] bg-zinc-950/60 rounded-xl p-3 border border-zinc-900 shadow-2xl overflow-hidden flex flex-col justify-center gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: <FiTrendingUp className="text-fuchsia-400" />, val: "+3X", lbl: "Qualified Leads" },
                        { icon: <FiZap className="text-amber-400" />, val: "65%", lbl: "Faster Loading" },
                        { icon: <FiSmartphone className="text-cyan-400" />, val: "100%", lbl: "Mobile Optimized" },
                        { icon: <FiMessageSquare className="text-emerald-400" />, val: "Instant", lbl: "WhatsApp Flow" }
                      ].map((metric, i) => (
                        <div key={i} className="bg-[#050507] border border-zinc-900/60 p-2.5 rounded-xl flex flex-col justify-center transition-all hover:border-zinc-800">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            {metric.icon}
                            <span className="text-lg font-black text-white tracking-tight">{metric.val}</span>
                          </div>
                          <span className="text-[9px] font-medium text-zinc-500 tracking-wide">{metric.lbl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action Container matching the Left Hero structure */}
                <div className="mt-8 pt-4 border-t border-zinc-900/60 flex flex-col flex-grow justify-end">
                  <div className="rounded-2xl border border-zinc-900 bg-[#050507] p-5 text-center flex flex-col justify-center items-center relative overflow-hidden group/cta">
                    <h4 className="text-xs font-black text-white mb-1 uppercase tracking-wider">
                      Ready to Transform Your Site?
                    </h4>
                    <p className="text-[10px] text-zinc-500 font-medium leading-relaxed max-w-[210px] mb-4">
                      Get a custom strategy engineered to maximize conversion funnels.
                    </p>
                    
                    {/* Wrapped inside Link to route to /book */}
                    <Link href="/book" passHref className="w-full">
                      <motion.button 
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 font-bold text-[10px] uppercase tracking-widest text-white shadow-[0_0_20px_rgba(217,70,239,0.15)] hover:shadow-[0_0_25px_rgba(217,70,239,0.3)] transition-all"
                      >
                        Get Free Website Audit
                      </motion.button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}