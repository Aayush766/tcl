"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { RiCpuLine, RiRadarLine, RiCustomerService2Line } from "react-icons/ri";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] text-white flex flex-col justify-between pt-28 pb-12 selection:bg-fuchsia-500/30">
      
      {/* Background Gradients & Noise Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        {/* Dynamic ambient lights */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 blur-[140px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500 blur-[120px]" 
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 my-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 items-center">
          
          {/* =========================================================
              LEFT CONTENT FRAME
             ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                AI-Powered Websites &amp; Automation
              </span>
            </div>

            {/* Main Title Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.05] tracking-tight text-white mb-6">
              We Build Websites &amp; <br />
              Automation Systems That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff] animate-pulse drop-shadow-[0_0_30px_rgba(191,90,242,0.2)]">
                Generate More Leads
              </span>
            </h1>

            {/* Sub-description Target Copy */}
            <p className="max-w-xl text-zinc-400 font-medium text-base sm:text-lg leading-relaxed mb-10">
              For Clinics, Coaching Institutes, Gyms, Real Estate &amp; Local Businesses Across India &amp; UAE.
            </p>

            {/* Action Trigger Buttons Container */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link href="/book" passHref>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative h-14 px-8 rounded-xl overflow-hidden font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 shadow-[0_0_30px_rgba(217,70,239,0.25)] hover:shadow-[0_0_40px_rgba(217,70,239,0.4)] transition-all flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Get Free Website Audit</span>
                  <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1.5" />
                </motion.button>
              </Link>

              <a href="https://wa.me/918603850720?text=Hi!%20I%20want%20to%20discuss%20a%20website%20and%20automation%20for%20my%20business." target="_blank" rel="noopener noreferrer">
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2, borderColor: 'rgba(52,211,153,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="h-14 px-8 rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-md hover:bg-zinc-900/80 transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-3 text-zinc-200"
                >
                  <FaWhatsapp className="text-lg text-emerald-400 animate-bounce" />
                  <span>Chat on WhatsApp</span>
                </motion.button>
              </a>
            </div>

            {/* Core Direct Trust Elements */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-5 border-t border-zinc-900">
              {["No Commitment", "100% Confidential", "Custom Strategy", "Results Driven"].map((text, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  key={text} 
                  className="flex items-center gap-2 text-xs font-medium text-zinc-500"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-[9px] text-fuchsia-400">
                    <FiCheck />
                  </div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* =========================================================
              RIGHT ANIMATED DASHBOARD GENERATOR PLATFORM
             ========================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center w-full"
          >
            {/* Ambient Backlight behind the dashboard container */}
            <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-3xl blur-2xl opacity-80 pointer-events-none" />

            <div className="relative w-full max-w-[580px] rounded-3xl p-[1px] bg-gradient-to-tr from-cyan-500/30 via-zinc-800 to-fuchsia-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.8)] group">
              
              {/* Outer Dashboard Structural Container */}
              <div className="w-full rounded-[23px] bg-[#070709]/95 backdrop-blur-xl border border-white/5 p-5 sm:p-6 flex flex-col gap-5">
                
                {/* Upper Metrics Framework Header */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Total Leads", count: 487, trend: "+ 32.5% vs last month" },
                    { label: "Appointments", count: 126, trend: "+ 28.4% vs last month" },
                    { label: "Conversion Rate", count: "24.6%", trend: "+ 18.2% vs last month" }
                  ].map((metric, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.1)' }}
                      key={metric.label} 
                      className="rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm p-3.5 flex flex-col justify-between transition-colors"
                    >
                      <span className="text-[10px] text-zinc-500 font-semibold tracking-tight truncate">{metric.label}</span>
                      <span className="text-xl sm:text-2xl font-black text-white my-1 tracking-tight">
                        {metric.count}
                      </span>
                      <span className="text-[8px] font-bold text-emerald-400 truncate">{metric.trend}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Main Graph Visualization System Component */}
                <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black text-zinc-400 tracking-wider uppercase">Live Lead Growth Tracking</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[9px] text-zinc-500 font-mono">LIVE UPDATING</span>
                    </div>
                  </div>
                  
                  {/* Graphical Elements Wrapper */}
                  <div className="relative h-36 w-full flex items-end">
                    
                    {/* Background Guides Grid Layout */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                      <div className="w-full border-t border-dashed border-zinc-700 text-[8px] text-zinc-600 pl-1">300 leads</div>
                      <div className="w-full border-t border-dashed border-zinc-700 text-[8px] text-zinc-600 pl-1">200 leads</div>
                      <div className="w-full border-t border-dashed border-zinc-700 text-[8px] text-zinc-600 pl-1">100 leads</div>
                    </div>

                    {/* Accurate SVG Spline Graph Line Mapping */}
                    <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff0099" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#ff0099" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="graph-stroke-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff0099" />
                          <stop offset="50%" stopColor="#bf5af2" />
                          <stop offset="100%" stopColor="#00dbde" />
                        </linearGradient>
                      </defs>
                      
                      {/* Smooth Area Shade Fill */}
                      <motion.path 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        d="M 0 85 Q 15 82, 25 70 T 50 55 T 75 35 Q 90 20, 100 15 L 100 100 L 0 100 Z" 
                        fill="url(#area-gradient)" 
                      />
                      
                      {/* Top Performance Curve Stroke */}
                      <motion.path 
                        d="M 0 85 Q 15 82, 25 70 T 50 55 T 75 35 Q 90 20, 100 15" 
                        fill="transparent" 
                        stroke="url(#graph-stroke-grad)" 
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>

                    {/* Floating Target Growth Indicator Card */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute right-6 top-2 bg-zinc-900/90 border border-zinc-800 rounded-xl p-2 flex flex-col items-center shadow-2xl backdrop-blur-md"
                    >
                      <span className="text-emerald-400 text-xs font-black tracking-tight flex items-center gap-1">
                        ▲ 32%
                      </span>
                      <span className="text-[7px] text-zinc-400 uppercase font-bold tracking-wider">Growth Shift</span>
                    </motion.div>

                  </div>

                  {/* Horizontal Timeframe Month Indicators */}
                  <div className="flex justify-between items-center mt-4 pt-2 border-t border-zinc-900 text-[9px] text-zinc-500 font-mono font-medium">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"].map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          LOWER PLATFORM VALUE ATTRIBUTES FOOTER
         ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: <RiCpuLine />, title: "AI Automation", desc: "Intelligent background data pipelines running continuously." },
            { icon: <RiRadarLine />, title: "Lead Generation", desc: "Built with standard optimization setups maximizing conversions." },
            { icon: <RiCustomerService2Line />, title: "24/7 Support", desc: "Active priority monitoring workflows maintaining stability." }
          ].map((feat, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2, border: "1px solid rgba(255,255,255,0.1)" }}
              key={feat.title} 
              className="flex items-center gap-4 rounded-2xl border border-zinc-900 bg-zinc-950/30 backdrop-blur-sm p-5 transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-xl text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)] group-hover:text-cyan-400 transition-colors">
                {feat.icon}
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white">{feat.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed mt-1 font-medium">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}