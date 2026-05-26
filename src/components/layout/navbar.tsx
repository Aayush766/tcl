"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu opens
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-[100] w-full px-4 py-4 md:px-6"
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-700 ease-in-out px-5 md:px-8 py-3 rounded-full border ${
            scrolled
              ? "bg-black/40 border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "bg-black/10 border-white/5 backdrop-blur-md"
          }`}
        >
          {/* BRAND LOGO */}
          <Link
            href="/"
            className="group flex items-center gap-3 z-[120]"
          >
            <div className="relative h-12 w-12 md:h-15 md:w-15 overflow-hidden transition-transform duration-500 group-hover:scale-110">
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

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link, i) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-white group"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link}
                </motion.span>

                {/* Gradient underline */}
                <span className="absolute bottom-1 left-1/2 h-[1px] w-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </nav>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Support */}
            {/* <Link
              href="/support"
              className="hidden lg:block text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              Support
            </Link> */}

            {/* CTA BUTTON */}
<Link href="/book">
  <button className="hidden sm:flex relative group overflow-hidden rounded-full bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-tighter text-black transition-all">
    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
      Contact Us <span className="text-xs">→</span>
    </span>

    {/* Hover Gradient Overlay */}
    <motion.div
      className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]"
      initial={{ x: "-100%" }}
      whileHover={{ x: 0 }}
      transition={{ type: "tween", duration: 0.4 }}
    />
  </button>
</Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-[120] flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white backdrop-blur-xl transition-all hover:bg-white/10"
              aria-label="Toggle Mobile Menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-xl md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* MOBILE MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-4 right-4 z-[110] overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:hidden"
            >
              <div className="flex flex-col px-6 py-8">
                {/* MOBILE LINKS */}
                <nav className="flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={`/${link
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
                      >
                        <span>{link}</span>

                        <span className="translate-x-0 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                          →
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* MOBILE SUPPORT */}
                <div className="mt-6 border-t border-white/10 pt-6">
                  <Link
                    href="/support"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 transition-all hover:bg-white/5 hover:text-white"
                  >
                    <span>Support</span>
                    <span>↗</span>
                  </Link>
                </div>

                {/* MOBILE CTA */}
                <button className="relative mt-6 overflow-hidden rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-all">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Sync Node →
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8] opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}