"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiShield,
  FiZap,
  FiActivity,
  FiLayers,
  FiCheck
} from "react-icons/fi";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#030303] selection:bg-fuchsia-500/30">
      
      {/* =========================================================
          CYBER BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 z-0">
        
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(#ff00ff 0.5px, transparent 0.5px), linear-gradient(90deg, #00ffff 0.5px, transparent 0.5px)`,
            backgroundSize: "80px 80px"
          }}
        />

        {/* SVG THREADS */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M-100 200 C 200 100, 400 500, 1200 300"
            stroke="url(#gradient-magenta)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.path
            d="M1400 600 C 800 200, 400 800, -200 400"
            stroke="url(#gradient-cyan)"
            strokeWidth="1"
            fill="transparent"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <defs>
            <linearGradient
              id="gradient-magenta"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ff0099" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>

            <linearGradient
              id="gradient-cyan"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00dbde" />
              <stop offset="100%" stopColor="#8a2be2" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#030303_85%)]" />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-32 lg:pt-48">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* =========================================================
              LEFT SIDE
          ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 mb-10 w-fit rounded-none border-l-2 border-fuchsia-500 bg-gradient-to-r from-fuchsia-500/10 to-transparent px-4 py-2"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                AI-First Execution Layer
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-4xl font-black leading-[1.1] tracking-tighter text-white md:text-[64px] uppercase"
            >
              Engineering AI-Powered <br />

              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#ff0099] via-[#8a2be2] to-[#00dbde] pb-2 leading-none">
                Systems for Growth
              </span>
            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 font-medium md:text-lg"
            >
              We build AI systems and websites that save your business time,
              reduce costs, and grow your revenue.

              From WhatsApp automation to full LMS platforms — we build the
              tech your business runs on, then train your team to use it.
              No jargon. No handover confusion. Just working systems.
            </motion.p>

            {/* TRUST BAR */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
               "Built for Fast-Growing Businesses", 
               "Powered by AI + Automation", 
               "Your Team Stays in Control" 
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >

              <Link href="/book" passHref>
                <button className="group relative h-16 w-64 overflow-hidden border border-fuchsia-500/20 bg-black transition-all hover:border-fuchsia-500">
                  
                  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#ff0099] to-[#00dbde] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative z-10 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest text-white group-hover:text-black transition-colors">
                    Book Free Call
                    <FiArrowRight className="text-xl" />
                  </span>

                </button>
              </Link>

              <Link href="/services" passHref>
                <button className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-fuchsia-400 transition-colors">

                  <span className="h-0.5 w-12 bg-zinc-800 transition-all group-hover:w-16 group-hover:bg-fuchsia-500" />

                  Explore Services
                </button>
              </Link>

            </motion.div>
          </div>

          {/* =========================================================
              RIGHT SIDE
          ========================================================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">

            <div className="relative h-[500px] w-[500px]">

              {/* CENTER */}
              <div className="absolute inset-[25%] z-30 flex items-center justify-center">

                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative h-full w-full rounded-full border border-white/10 bg-black/40 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,0,153,0.2)]"
                >

                  <div className="relative h-24 w-24">

                    <div
                      className="absolute inset-0 rounded-full border-t-4 border-l-4 border-[#ff0099] animate-spin"
                      style={{ animationDuration: "3s" }}
                    />

                    <div
                      className="absolute inset-4 rounded-full border-b-4 border-r-4 border-[#00dbde] animate-spin"
                      style={{
                        animationDuration: "2s",
                        animationDirection: "reverse"
                      }}
                    />

                    <img
                      src="/hero.png"
                      alt="Logo"
                      className="h-10 w-10 object-contain absolute inset-0 m-auto"
                    />

                  </div>
                </motion.div>
              </div>

              {/* ORBITS */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 rounded-full border border-dashed border-zinc-800"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-20 rounded-full border border-fuchsia-500/10"
              />

              {/* FLOATING NODES */}
              <FloatingNode
                icon={<FiShield />}
                delay={0}
                top="-5%"
                left="20%"
                label="Scalable Tech"
                color="#ff0099"
              />

              <FloatingNode
                icon={<FiZap />}
                delay={1.5}
                bottom="5%"
                right="10%"
                label="AI Automation"
                color="#00dbde"
              />

              <FloatingNode
                icon={<FiActivity />}
                delay={0.8}
                top="40%"
                right="-15%"
                label="Modern UX"
                color="#8a2be2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          DASHBOARD STRIP
      ========================================================= */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-fuchsia-500/5 to-transparent border-t border-white/5 py-10 backdrop-blur-md">

        <div className="mx-auto flex max-w-7xl flex-wrap justify-between items-center gap-10 px-6">

          <div className="flex flex-col items-end gap-2">

            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  className="h-4 w-1 bg-fuchsia-500"
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="relative z-20 border-t border-white/5 bg-gradient-to-b from-transparent to-fuchsia-500/[0.02] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 max-w-2xl">

            <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.4em] text-fuchsia-400">
              TRUST LAYER
            </span>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
              Why Businesses Choose

              <span className="block bg-gradient-to-r from-[#ff0099] to-[#00dbde] bg-clip-text text-transparent">
                THECYBERLOOM
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 backdrop-blur-2xl transition-all hover:border-fuchsia-500/30">

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-fuchsia-500/10">
                <FiLayers className="text-2xl text-fuchsia-400" />
              </div>

              <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-white">
                Training Included
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400">
                Every project comes with onboarding and training sessions so
                your team understands exactly how to operate the system
                confidently.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 backdrop-blur-2xl transition-all hover:border-cyan-500/30">

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-cyan-500/10">
                <FiZap className="text-2xl text-cyan-400" />
              </div>

              <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-white">
                ROI-Focused Automation
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400">
                Our automation systems are built to reduce operational workload,
                increase response speed, and create measurable business
                efficiency.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-8 backdrop-blur-2xl transition-all hover:border-violet-500/30">

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-violet-500/10">
                <FiShield className="text-2xl text-violet-400" />
              </div>

              
<h3 className="mb-4 text-xl font-black uppercase tracking-tight text-white">
  Built for Modern Businesses
</h3>

<p className="text-sm leading-relaxed text-zinc-400">
  From WhatsApp workflows and payment systems to cloud infrastructure and
  automation pipelines, we build scalable systems designed for businesses
  operating across local and global markets.
</p>


            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TRAINING BANNER
      ========================================================= */}
      <section className="relative z-20 py-10">

        <div className="mx-auto max-w-7xl px-6">

          <div className="relative overflow-hidden rounded-3xl border border-fuchsia-500/10 bg-gradient-to-r from-fuchsia-500/10 via-black to-cyan-500/10 p-8">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,153,0.15),transparent_30%)]" />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.4em] text-fuchsia-400">
                  OPERATIONAL SUPPORT
                </span>

                <h3 className="text-2xl font-black uppercase leading-tight text-white md:text-3xl">
                  Every Automation Package Includes

                  <span className="block text-transparent bg-gradient-to-r from-[#ff0099] to-[#00dbde] bg-clip-text">
                    Team Training + Written SOP
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  Every automation package comes with a 60-minute training call
                  and a written SOP so your team never depends on us to run the
                  system.
                </p>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-xl">

                <FiCheck className="text-xl text-cyan-400" />

                <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  Built For Long-Term Independence
                </span>

              </div>

            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function FloatingNode({
  icon,
  top,
  bottom,
  left,
  right,
  delay,
  label,
  color
}: any) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -20, 0], opacity: 1 }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay
      }}
      style={{ top, bottom, left, right }}
      className="absolute flex items-center gap-4 rounded-full border border-white/5 bg-black/60 px-6 py-3 backdrop-blur-2xl shadow-2xl"
    >
      <div
        style={{ color }}
        className="text-xl shadow-[0_0_10px_currentColor]"
      >
        {icon}
      </div>

      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
        {label}
      </span>
    </motion.div>
  );
}

