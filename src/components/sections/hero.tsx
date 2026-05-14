"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiZap, FiActivity, FiLayers } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] selection:bg-fuchsia-500/30">
      {/* --- CYBER LOOM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#ff00ff 0.5px, transparent 0.5px), linear-gradient(90deg, #00ffff 0.5px, transparent 0.5px)`,
            backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* Intertwining Threads (SVG Background) */}
        <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M-100 200 C 200 100, 400 500, 1200 300"
            stroke="url(#gradient-magenta)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M1400 600 C 800 200, 400 800, -200 400"
            stroke="url(#gradient-cyan)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0099" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
            <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00dbde" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#030303_85%)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 lg:pt-48">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* LEFT: THE WEAVER CONTENT */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 mb-10 w-fit rounded-none border-l-2 border-fuchsia-500 bg-gradient-to-r from-fuchsia-500/10 to-transparent px-4 py-2"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                Core Protocol v4.0.2
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl font-black leading-[0.8] tracking-tighter text-white md:text-[130px]"
            >
              THE <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#ff0099] via-[#8a2be2] to-[#00dbde] pb-4">
                CYBER LOOM
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 font-light md:text-2xl"
            >
              Engineering the <span className="text-white">connective tissue</span> of the digital age. We weave intelligence into infrastructure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {/* <button className="group relative h-16 w-64 overflow-hidden border border-fuchsia-500/20 bg-black transition-all hover:border-fuchsia-500">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#ff0099] to-[#00dbde] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest text-white group-hover:text-black transition-colors">
                  Enter The Fabric <FiArrowRight className="text-xl" />
                </span>
              </button> */}
              
              <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-fuchsia-400 transition-colors">
                <span className="h-0.5 w-12 bg-zinc-800 transition-all group-hover:w-16 group-hover:bg-fuchsia-500" />
                Data Sheets
              </button>
            </motion.div>
          </div>

          {/* RIGHT: THE KINETIC NODE */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative h-[500px] w-[500px]">
              {/* Logo-inspired Central Hub */}
              <div className="absolute inset-[25%] z-30 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative h-full w-full rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,0,153,0.2)]"
                >
                   {/* This represents the "C" and "L" from logo.png */}
                   <div className="relative h-24 w-24">
                      <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-[#ff0099] animate-spin" style={{ animationDuration: '3s' }} />
                      <div className="absolute inset-4 rounded-full border-b-4 border-r-4 border-[#00dbde] animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                      <img src="/hero.png" alt="Logo" className="
                      h-10 w-10 object-contain
                      absolute inset-0 m-auto text-4xl text-white" />
                   </div>
                </motion.div>
              </div>

              {/* Orbits with different colors */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-zinc-800" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-20 rounded-full border border-fuchsia-500/10" />

              <FloatingNode icon={<FiShield />} delay={0} top="-5%" left="20%" label="Armored" color="#ff0099" />
              <FloatingNode icon={<FiZap />} delay={1.5} bottom="5%" right="10%" label="Ultra-Scale" color="#00dbde" />
              <FloatingNode icon={<FiActivity />} delay={0.8} top="40%" right="-15%" label="Sync-Pulse" color="#8a2be2" />
            </div>
          </div>
        </div>
      </div>

      {/* --- DASHBOARD STRIP --- */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-fuchsia-500/5 to-transparent border-t border-white/5 py-10 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-10 px-6">
          {/* <div className="grid grid-cols-3 gap-20">
            <Metric label="Throughput" value="4.2 PB/s" color="#ff0099" />
            <Metric label="Loom Nodes" value="12,402" color="#8a2be2" />
            <Metric label="Sync Rate" value="99.999%" color="#00dbde" />
          </div> */}
          
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-500">Fabric Density</span>
            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i} 
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="h-4 w-1 bg-fuchsia-500" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingNode({ icon, top, bottom, left, right, delay, label, color }: any) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -20, 0], opacity: 1 }}
      transition={{ duration: 5, repeat: Infinity, delay }}
      style={{ top, bottom, left, right }}
      className="absolute flex items-center gap-4 rounded-full border border-white/5 bg-black/60 px-6 py-3 backdrop-blur-2xl shadow-2xl"
    >
      <div style={{ color }} className="text-xl shadow-[0_0_10px_currentColor]">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">{label}</span>
    </motion.div>
  );
}

function Metric({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">{label}</p>
      <p className="text-2xl font-mono font-black text-white" style={{ textShadow: `0 0 20px ${color}40` }}>{value}</p>
      <div className="h-0.5 w-full bg-zinc-900 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full" 
          style={{ backgroundColor: color }} 
        />
      </div>
    </div>
  );
}