"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiArrowUp,
  FiActivity,
  FiX,
} from "react-icons/fi";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<
    "privacy" | "terms" | "refund" | null
  >(null);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const closeModal = () => setActiveModal(null);

  // ESC KEY CLOSE
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

                  <h2 className="bg-gradient-to-r from-[#FF0080] to-[#00DFD8] bg-clip-text text-3xl font-black uppercase italic tracking-tighter text-transparent">
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
                {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
                  <button
                    key={i}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-[#00DFD8]/50"
                  >
                    <Icon
                      size={18}
                      className="transition-colors group-hover:text-[#00DFD8]"
                    />
                  </button>
                ))}
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
                    ["Contact", "/book"],
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
                    <Link
                      href="/contact"
                      className="inline-block text-xs font-bold text-zinc-600 transition-all hover:translate-x-1 hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <a
                      href="mailto:contact@thecyberloom.com"
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
              {/* Glow */}
              <div className="pointer-events-none absolute top-0 left-0 h-80 w-80 rounded-full bg-[#FF0080]/10 blur-[120px]" />
              <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#00DFD8]/10 blur-[120px]" />

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition-all duration-300 hover:rotate-90 hover:border-[#00DFD8]/40 hover:text-white"
              >
                <FiX size={18} />
              </button>

              <div className="relative z-10">
                {/* Heading */}
                <div className="mb-10">
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                    CYBERLOOM LEGAL
                  </span>

                  <h2 className="bg-gradient-to-r from-[#FF0080] to-[#00DFD8] bg-clip-text text-4xl font-black uppercase tracking-tight text-transparent">
                    {activeModal === "privacy" && "Privacy Policy"}
                    {activeModal === "terms" && "Terms & Conditions"}
                    {activeModal === "refund" && "Refund Policy"}
                  </h2>

                  <p className="mt-4 text-sm text-zinc-500">
                    Last Updated — May 2026
                  </p>
                </div>

                {/* CONTENT */}
                <div className="space-y-8 text-sm leading-8 text-zinc-400">

                  {/* PRIVACY */}
                  {activeModal === "privacy" && (
                    <>
                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          1. Information We Collect
                        </h3>
                        <p>
                          We may collect personal information including your
                          name, email address, company information, phone
                          number, project requirements, browser data, analytics,
                          cookies, and interaction behavior to improve our
                          services and user experience.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          2. How We Use Data
                        </h3>
                        <p>
                          Your information is used to communicate with you,
                          provide digital solutions, improve website
                          performance, deliver support, optimize user experience,
                          and develop better automation systems and scalable
                          products.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          3. Security & Protection
                        </h3>
                        <p>
                          CyberLoom follows industry-standard security practices
                          to protect user data against unauthorized access,
                          disclosure, or misuse. However, no digital system can
                          guarantee absolute security.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          4. Cookies & Tracking
                        </h3>
                        <p>
                          We use cookies and analytics tools to understand user
                          behavior, personalize experiences, improve
                          functionality, and optimize campaigns. Users can
                          disable cookies through browser settings.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          5. User Rights
                        </h3>
                        <p>
                          Users may request access, correction, deletion, or
                          modification of their personal data depending on
                          applicable regulations and policies.
                        </p>
                      </section>
                    </>
                  )}

                  {/* TERMS */}
                  {activeModal === "terms" && (
                    <>
                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          1. Website Usage
                        </h3>
                        <p>
                          By accessing this website, you agree not to misuse the
                          platform, attempt unauthorized access, upload harmful
                          software, distribute spam, or copy content without
                          written permission.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          2. Intellectual Property
                        </h3>
                        <p>
                          All logos, branding, graphics, code, UI elements,
                          designs, animations, and digital assets remain the
                          property of CyberLoom unless otherwise stated.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          3. Services & Deliverables
                        </h3>
                        <p>
                          Project timelines, pricing, revisions, deliverables,
                          and service scope are defined individually through
                          proposals or agreements before project execution.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          4. Limitation of Liability
                        </h3>
                        <p>
                          CyberLoom is not responsible for indirect losses,
                          external attacks, business interruptions, or third-party
                          service failures beyond our control.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          5. Policy Updates
                        </h3>
                        <p>
                          We reserve the right to modify these terms at any
                          time. Continued use of the website indicates acceptance
                          of updated terms and conditions.
                        </p>
                      </section>
                    </>
                  )}

                  {/* REFUND */}
                  {activeModal === "refund" && (
                    <>
                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          1. Refund Eligibility
                        </h3>
                        <p>
                          Refund requests are evaluated individually depending
                          on project status, completed milestones, consultation
                          hours, and service delivery progress.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          2. Non-Refundable Services
                        </h3>
                        <p>
                          Payments for completed development, UI/UX design,
                          deployment, consultation, AI integrations, and
                          strategy sessions are generally non-refundable once
                          work has started.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          3. Cancellation Policy
                        </h3>
                        <p>
                          Clients may request project cancellation through
                          official communication channels. Any completed work
                          before cancellation remains billable.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          4. Processing Time
                        </h3>
                        <p>
                          Approved refunds are generally processed within
                          7–14 business days depending on payment providers and
                          banking systems.
                        </p>
                      </section>

                      <section>
                        <h3 className="mb-3 text-lg font-bold text-white">
                          5. Contact Support
                        </h3>
                        <p>
                          For billing concerns, refund requests, or payment
                          assistance, contact us at
                          {" "}
                          <span className="text-[#00DFD8]">
                            info@thecyberloom.com
                          </span>
                        </p>
                      </section>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
