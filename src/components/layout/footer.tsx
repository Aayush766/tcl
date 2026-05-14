"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiArrowUp, FiActivity } from "react-icons/fi";

const footerLinks = [
  {
    title: "Intelligence",
    links: ["Neural Audits", "LLM Integration", "Agentic Workflows", "SaaS Core"],
  },
  {
    title: "Company",
    links: ["Process", "Our Stack", "Case Studies", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Protocol", "Service Terms", "Security Documentation"],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-[#020202] px-6 pt-32 pb-12 overflow-hidden">
      {/* Background Decorative Gradient - Matching logo spectrum */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FF0080]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#00DFD8]/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Block */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-block">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 transition-transform duration-500 group-hover:rotate-12">
                  <Image
                    src="/logo.png"
                    alt="The Cyber Loom"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">
                  Cyber<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#00DFD8]">Loom</span>
                </h2>
              </div>
            </Link>
            
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-zinc-500 font-medium">
              Architecting autonomous neural systems for the next generation of global enterprise. 
              Engineering digital fabric that scales with human intent.
            </p>
            
            <div className="mt-10 flex gap-3">
              {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
                <button 
                  key={i} 
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#00DFD8]/50"
                >
                  <Icon size={18} className="group-hover:text-[#00DFD8] transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8 flex items-center gap-2">
                  <span className="h-[1px] w-4 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]" />
                  {section.title}
                </h3>
                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-xs font-bold text-zinc-600 transition-all hover:text-white hover:translate-x-1 inline-block">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* System Bottom Bar */}
        <div className="mt-32 flex flex-col items-center justify-between border-t border-white/5 pt-12 md:flex-row gap-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
            <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
              © 2026 THE CYBER LOOM // ALL RIGHTS RESERVED
            </span>
            
            <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/40 rounded-full border border-white/5">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00DFD8] opacity-20"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00DFD8]"></span>
              </div>
              <span className="text-[9px] font-mono text-[#00DFD8] uppercase tracking-widest">
                System Status: Optimized
              </span>
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 transition-all hover:text-white"
          >
            <FiActivity className="text-[#FF0080]" />
            Return to Nexus <FiArrowUp className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Abstract Background Text */}
        <div className="mt-16 text-center pointer-events-none select-none overflow-hidden">
          <motion.span 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="block text-[clamp(2rem,18vw,14rem)] font-black leading-none text-white/[0.01] tracking-tighter"
          >
            ARCHITECT
          </motion.span>
        </div>
      </div>
    </footer>
  );
}