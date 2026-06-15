"use client";
import { motion, Variants } from "framer-motion";
import {
  FiArrowRight,
  FiCpu,
  FiLayers,
  FiSmartphone,
  FiGlobe,
  FiTrendingUp,
  FiTerminal,
  FiLinkedin,
  FiUsers,
  FiCheckCircle
} from "react-icons/fi";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// --- ANIMATION CONFIGURATIONS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#030303] text-white selection:bg-[#00DFD8]/20 selection:text-[#00DFD8] pb-32 pt-28 relative overflow-hidden">
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#ff0080 0.5px, transparent 0.5px), linear-gradient(90deg, #00DFD8 0.5px, transparent 0.5px)`,
            backgroundSize: "120px 120px"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0%,#030303_85%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO */}
        <section className="pt-12 mb-32 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 mb-6 rounded-none border-l-2 border-[#ff0080] bg-gradient-to-r from-[#ff0080]/10 to-transparent px-4 py-1.5"
          >
            <span className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-zinc-400">
              Operational Manifesto // Core Ethos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase mb-8"
          >
            Building the Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] via-[#8a2be2] to-[#00DFD8]">
              Infrastructure
            </span>{" "}
            <br />
            Behind Modern Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12"
          >
            THECYBERLOOM designs, develops, and deploys AI-powered systems,
            modern digital products, and scalable growth infrastructure for
            businesses ready to operate at the next level.
          </motion.p>

          <div className="flex flex-wrap gap-6">
            <button className="group relative h-12 px-8 overflow-hidden rounded-xl border border-white/10 bg-white text-black font-mono text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-white/20 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Strategy Call
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button className="h-12 px-8 rounded-xl border border-white/5 bg-zinc-950/40 text-zinc-400 font-mono text-xs font-black uppercase tracking-widest hover:text-white hover:border-white/20 transition-colors">
              View Services
            </button>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="mb-36 border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">
                01 // Brand Story
              </span>

              <h2 className="text-3xl font-black uppercase tracking-tight">
                Why THECYBERLOOM Exists
              </h2>
            </div>

            <div className="lg:col-span-8 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,rgba(255,0,128,0.08),transparent_70%)] pointer-events-none" />

              <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed mb-6">
                THECYBERLOOM was built out of frustration.
              </p>

              <div className="space-y-5 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                <p>
                  We watched businesses pay premium agency retainers for systems
                  that didn’t actually fit how modern Indian businesses operate.
                </p>

                <p>
                  Wrong workflows. Overcomplicated stacks. Slow execution.
                  Generic strategies copied from Western markets.
                </p>

                <p>
                  So we built a different model — one focused on speed,
                  intelligent automation, scalable systems, and tools businesses
                  actually use every day.
                </p>

                <p>
                  Every system we design is engineered around real-world
                  operational efficiency — from WhatsApp automation and AI
                  workflows to modern SaaS platforms and growth infrastructure.
                </p>

                <p className="text-white">
                  Our goal is simple:
                  <span className="text-[#00DFD8]">
                    {" "}
                    build technology that genuinely helps businesses move faster.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="mb-36">
          <div className="mb-14">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">
              02 // Execution Pods
            </span>

            <h2 className="text-3xl font-black uppercase tracking-tight">
              Built By Specialists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "AI Engineer",
              "Full-Stack Developer",
              "UI/UX Designer",
              "Automation Specialist",
              "SEO Strategist",
              "Growth Operator"
            ].map((role, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/5 bg-zinc-950/30 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <FiUsers className="text-[#00DFD8]" />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-white">
                  {role}
                </h3>

                <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                  Dedicated expertise focused on execution quality, scalability,
                  and operational efficiency.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="mb-36">
          <div className="mb-16">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">
              03 // Capabilities
            </span>

            <h2 className="text-3xl font-black uppercase tracking-tighter">
              What We Build
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "AI Systems & Automation",
                desc: "Custom AI workflows, GPT integrations, copilots, and automation systems.",
                icon: <FiCpu className="text-[#ff0080]" />
              },
              {
                title: "Web Platforms",
                desc: "Fast conversion-focused websites engineered for scalability.",
                icon: <FiGlobe className="text-[#00DFD8]" />
              },
              {
                title: "Mobile Applications",
                desc: "High-performance iOS and Android applications built for growth.",
                icon: <FiSmartphone className="text-[#8a2be2]" />
              },
              {
                title: "SaaS Platforms",
                desc: "Modern subscription-based SaaS systems with scalable infrastructure.",
                icon: <FiLayers className="text-[#ff0080]" />
              },
              {
                title: "Growth Infrastructure",
                desc: "SEO systems, analytics automation, and scalable funnels.",
                icon: <FiTrendingUp className="text-[#00DFD8]" />
              }
            ].map((build, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/5 bg-zinc-950/20 hover:border-white/10 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-lg">
                  {build.icon}
                </div>

                <h3 className="text-lg font-bold tracking-tight text-white mb-2">
                  {build.title}
                </h3>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {build.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* TRUST SECTION */}
        <section className="mb-36 border border-white/5 bg-zinc-950/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(0,223,216,0.08),transparent_40%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#00DFD8] block mb-2">
                04 // Verification Layer
              </span>

              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-5">
                Real People. Real Systems. Real Execution.
              </h2>

              <div className="space-y-4 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                <p>
                  THECYBERLOOM operates with dedicated specialists across AI,
                  engineering, automation, design, and growth systems.
                </p>

                <p>
                  Every inquiry is personally reviewed and replied to within
                  24 hours.
                </p>

                <p className="text-white">
                  We focus on long-term partnerships — not one-time generic
                  projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-white/10 bg-white text-black font-mono text-xs uppercase tracking-widest font-black hover:bg-black hover:text-white transition-all"
                >
                  <FiLinkedin />
                  Company LinkedIn
                </a>

                <button className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-300 font-mono text-xs uppercase tracking-widest font-black hover:border-white hover:text-white transition-all">
                  <FiCheckCircle />
                  Start a Project
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/5 bg-black/40 p-8">
                <div className="space-y-5">
                  {[
                    "AI-first development workflows",
                    "Scalable cloud architecture",
                    "Fast deployment cycles",
                    "Business-focused execution",
                    "Modern UI/UX systems"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00DFD8]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="border border-white/5 bg-gradient-to-t from-[#ff0080]/5 via-transparent to-transparent rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030303_95%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-none">
              Ready to Build Smarter <br />
              Systems for Your Business?
            </h2>

            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">
              Whether you need AI automation, scalable software, modern digital
              infrastructure, or growth systems — THECYBERLOOM helps businesses
              move faster with technology built for scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative h-12 px-8 overflow-hidden rounded-xl bg-white text-black font-mono text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Schedule a Strategy Call
                  <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              <button className="h-12 px-8 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-300 font-mono text-xs font-black uppercase tracking-widest hover:text-white hover:border-white transition-colors w-full sm:w-auto">
                Request Custom Proposal
              </button>
            </div>

            <p className="mt-6 text-[11px] text-zinc-600 font-mono uppercase tracking-widest">
              Every inquiry is personally reviewed within 24 hours.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

