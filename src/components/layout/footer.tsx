"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FiInstagram,
  FiLinkedin,
  FiArrowUp,
  FiActivity,
  FiX,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<
    "privacy" | "terms" | "refund" | null
  >(null);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#020202] px-6 pt-32 pb-12">

        {/* Background Decorative Gradient */}
        <div className="pointer-events-none absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#FF0080]/5 blur-[120px]" />

        <div className="pointer-events-none absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#00DFD8]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

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

                  <h2 className="bg-gradient-to-r from-[#FF0080] to-[#00DFD8] bg-clip-text text-3xl font-black uppercase italic tracking-tight text-transparent pr-1">
                    CyberLoom
                  </h2>
                </div>
              </Link>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-zinc-500 font-medium">
                We craft digital solutions that drive results through scalable
                software systems, AI automation, and modern digital experiences
                built for growth-focused businesses.
              </p>

              {/* Social Icons */}
              <div className="mt-10 flex gap-3">

                {/* Instagram */}
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#00DFD8]/50"
                >
                  <FiInstagram
                    size={18}
                    className="transition-colors group-hover:text-[#00DFD8]"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#00DFD8]/50"
                >
                  <FaWhatsapp
                    size={18}
                    className="transition-colors group-hover:text-[#00DFD8]"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#00DFD8]/50"
                >
                  <FiLinkedin
                    size={18}
                    className="transition-colors group-hover:text-[#00DFD8]"
                  />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">

              {/* Navigation */}
              <div>
                <h3 className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                  <span className="h-[1px] w-4 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]" />
                  Navigation
                </h3>

                <ul className="space-y-5">
                  {[
                    ["Services", "/services"],
                    ["Projects", "/project"],
                    ["Pricing", "/pricing"],
                    ["About", "/about"],
                    ["Support", "/support"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="inline-block text-xs font-bold text-zinc-600 transition-all hover:translate-x-1 hover:text-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                  <span className="h-[1px] w-4 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]" />
                  Legal
                </h3>

                <ul className="space-y-5">

                  <li>
                    <button
                      onClick={() => setActiveModal("privacy")}
                      className="inline-block text-left text-xs font-bold text-zinc-600 transition-all hover:translate-x-1 hover:text-white"
                    >
                      Privacy Policy
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActiveModal("terms")}
                      className="inline-block text-left text-xs font-bold text-zinc-600 transition-all hover:translate-x-1 hover:text-white"
                    >
                      Terms & Conditions
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActiveModal("refund")}
                      className="inline-block text-left text-xs font-bold text-zinc-600 transition-all hover:translate-x-1 hover:text-white"
                    >
                      Refund Policy
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                  <span className="h-[1px] w-4 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]" />
                  Contact
                </h3>

                <ul className="space-y-5">

                  <li>
                    <a
                      href="mailto:info@thecyberloom.com"
                      className="inline-block text-xs font-bold text-zinc-600 transition-all hover:translate-x-1 hover:text-white"
                    >
                      info@thecyberloom.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-32 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:flex-row">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-700">
                © 2026 THE CYBER LOOM // ALL RIGHTS RESERVED
              </span>
              <div className="flex items-center gap-3 rounded-full border border-white/5 bg-zinc-900/40 px-4 py-2">
                <div className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00DFD8] opacity-20"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00DFD8]"></span>
                </div>

                <span className="text-[9px] font-mono uppercase tracking-widest text-[#00DFD8]">
                  Status: Operational
                </span>
              </div>
            </div>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 transition-all hover:text-white"
            >
              <FiActivity className="text-[#FF0080]" />

              Back to Top

              <FiArrowUp className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Background Text */}
          <div className="pointer-events-none mt-16 overflow-hidden text-center select-none">
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="block text-[clamp(2rem,18vw,14rem)] font-black leading-none tracking-tighter text-white/[0.01]"
            >
              BUILD
            </motion.span>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#050505] p-8 md:p-12"
            >

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:rotate-90 hover:border-[#00DFD8]/40 hover:text-white"
              >
                <FiX size={18} />
              </button>

              <div className="relative z-10">

                <h2 className="bg-gradient-to-r from-[#FF0080] to-[#00DFD8] bg-clip-text text-4xl font-black uppercase tracking-tight text-transparent">
                  {activeModal === "privacy" && "Privacy Policy"}
                  {activeModal === "terms" && "Terms & Conditions"}
                  {activeModal === "refund" && "Refund Policy"}
                </h2>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}