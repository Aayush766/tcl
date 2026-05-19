"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Updated links layout
const links = [
  "Services",
  "Project",
  // "AI Solutions",
  "Pricing",
  "About",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-[100] w-full px-6 py-4"
    >
      <div 
        className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-700 ease-in-out px-8 py-3 rounded-full border ${
          scrolled 
            ? "bg-black/40 border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        {/* BRAND LOGO INTEGRATION */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-15 w-15 overflow-hidden transition-transform duration-500 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="The Cyber Loom Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col md:flex">
             <span className="text-xs font-black tracking-[0.2em] text-white uppercase leading-none">
               The Cyber Loom
             </span>
          </div>
        </Link>

        {/* NAVIGATION DOCK */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <Link
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-white group"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {link}
              </motion.span>
              {/* Gradient underline matching logo */}
              <span className="absolute bottom-1 left-1/2 h-[1px] w-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}
        </nav>

        {/* CTA WITH LOGO SPECTRUM */}
        <div className="flex items-center gap-6">
          <Link 
            href="/support" 
            className="hidden lg:block text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            Support
          </Link>
          
          <button className="relative group overflow-hidden rounded-full bg-white px-7 py-2.5 text-[10px] font-black uppercase tracking-tighter text-black transition-all">
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Sync Node <span className="text-xs">→</span>
            </span>
            
            {/* Hover Gradient Overlay */}
            <motion.div 
              className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween", duration: 0.4 }}
            />
          </button>
        </div>
      </div>

      {/* REACTIVE SCANLINE EDGE */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            className="absolute bottom-0 left-1/2 h-[1px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#00DFD8]/40 to-transparent" 
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}