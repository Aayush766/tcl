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
  FiArrowRight,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const LEGAL_CONTENT = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Information Collection",
        text: "CyberLoom may collect personal information including your name, email address, phone number, organization details, project requirements, communication preferences, browser metadata, device information, and analytics data to improve platform functionality and client experiences.",
      },
      {
        heading: "2. Usage of Information",
        text: "Information collected is used to provide digital services, improve automation systems, optimize business workflows, communicate project updates, enhance user experiences, process inquiries, and strengthen security infrastructure.",
      },
      {
        heading: "3. Cookies & Analytics",
        text: "We use cookies, tracking technologies, and analytics tools to understand visitor behavior, improve navigation, optimize conversion performance, and personalize digital experiences. Users may disable cookies through browser settings.",
      },
      {
        heading: "4. Data Protection",
        text: "CyberLoom implements industry-standard security practices to protect user information against unauthorized access, misuse, or disclosure. While we strive to maintain secure systems, no digital platform guarantees complete security.",
      },
      {
        heading: "5. Third-Party Services",
        text: "Some services may integrate third-party providers such as hosting platforms, payment gateways, analytics services, or communication tools. These providers maintain separate privacy policies and operational standards.",
      },
      {
        heading: "6. User Rights",
        text: "Users may request access, modification, deletion, or clarification regarding personal data stored within our systems by contacting CyberLoom directly.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        text: "By accessing or using CyberLoom services, platforms, or digital systems, users acknowledge and agree to comply with all terms, policies, and applicable regulations.",
      },
      {
        heading: "2. Intellectual Property",
        text: "All branding, source code, UI designs, automation systems, graphics, visual assets, and digital materials remain the intellectual property of CyberLoom unless explicitly transferred through written agreements.",
      },
      {
        heading: "3. Service Scope",
        text: "Project timelines, deliverables, revisions, pricing, integrations, and deployment conditions are defined individually through proposals, invoices, or signed agreements before project execution begins.",
      },
      {
        heading: "4. Restrictions",
        text: "Users agree not to misuse the platform, attempt unauthorized access, distribute malicious software, duplicate protected materials, interfere with services, or engage in unlawful digital activities.",
      },
      {
        heading: "5. Limitation of Liability",
        text: "CyberLoom shall not be held responsible for indirect damages, operational interruptions, security breaches, third-party failures, financial losses, or external technical issues beyond our reasonable control.",
      },
      {
        heading: "6. Policy Modifications",
        text: "CyberLoom reserves the right to modify policies, pricing, technical systems, or operational structures at any time. Continued usage of the platform constitutes acceptance of updated terms and policies.",
      },
    ],
  },
  refund: {
    title: "Refund Policy",
    sections: [
      {
        heading: "1. Refund Eligibility",
        text: "Refund requests are evaluated individually depending on project progress, milestone completion, consultation hours, deployed systems, and service usage status.",
      },
      {
        heading: "2. Non-Refundable Services",
        text: "Payments for completed development work, AI integrations, design systems, automation setup, deployment pipelines, consultations, or strategy sessions are generally non-refundable after project initiation.",
      },
      {
        heading: "3. Cancellation Policy",
        text: "Clients may request project cancellation through official communication channels. Any completed work prior to cancellation remains chargeable according to agreed project terms.",
      },
      {
        heading: "4. Processing Timeline",
        text: "Approved refunds are typically processed within 7–14 business days depending on payment processors, banking infrastructure, and regional transaction policies.",
      },
      {
        heading: "5. Contact & Billing Support",
        text: "For billing concerns, payment disputes, or refund-related inquiries, contact our support team at info@thecyberloom.com.",
      },
    ],
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | "refund" | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const closeModal = () => setActiveModal(null);

  // Turn off page scroll when a legal pop-up is open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (activeModal) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#020202] px-6 pt-32 pb-12 font-sans">
        {/* Colorful background glows */}
        <div className="pointer-events-none absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-[#FF0080]/5 blur-[140px]" />
        <div className="pointer-events-none absolute right-1/4 -bottom-20 h-[600px] w-[600px] rounded-full bg-[#00DFD8]/5 blur-[140px]" />

        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Box: Logo and Bio */}
            <div className="flex flex-col items-start lg:col-span-5">
              <Link href="/" className="group inline-block">
                <div className="flex items-center gap-4">
                  <div className="relative h-11 w-11 transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-125">
                    <Image
                      src="/logo.png"
                      alt="CyberLoom Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="bg-gradient-to-r from-[#FF0080] via-[#c225b2] to-[#00DFD8] bg-clip-text text-2xl font-black uppercase tracking-tight text-transparent transition-all duration-300 pr-1 group-hover:opacity-90">
                    CyberLoom
                  </h2>
                </div>
              </Link>

              <p className="mt-6 max-w-sm text-[13px] leading-relaxed text-zinc-500 font-normal tracking-wide">
                We craft digital solutions that drive results through scalable
                software systems, AI automation, and modern digital experiences
                built for growth-focused businesses.
              </p>

              {/* Social Media Links */}
              <div className="mt-8 flex gap-2.5">
                {[
                  { href: "https://instagram.com/_thecyberloom", icon: FiInstagram, label: "Instagram" },
                  { href: "https://wa.me/918603850720", icon: FaWhatsapp, label: "WhatsApp" },
                  { href: "https://www.linkedin.com/in/the-cyber-loom-bb6b0b40b/", icon: FiLinkedin, label: "LinkedIn" }
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm text-zinc-500 transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/80 hover:text-white"
                  >
                    <Icon size={16} className="transition-transform duration-300 group-hover:scale-105" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Box: Navigation Links */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
              {/* Column 1: Website Pages */}
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF0080]" />
                  Explore
                </h3>
                <ul className="space-y-4">
                  {[
                    ["Services", "/services"],
                    ["Projects", "/project"],
                    ["Pricing", "/pricing"],
                    ["About Us", "/about"],
                    ["Contact", "/book"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="group relative inline-flex flex-col text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
                      >
                        <span>{label}</span>
                        <span className="h-[1px] w-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8] transition-all duration-300 ease-out group-hover:w-full" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Legal Pages */}
              <div>
                <h3 className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00DFD8]" />
                  Legal Info
                </h3>
                <ul className="space-y-4">
                  {(["privacy", "terms", "refund"] as const).map((type) => (
                    <li key={type}>
                      <button
                        onClick={() => setActiveModal(type)}
                        className="group relative inline-flex flex-col text-left text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
                      >
                        <span>
                          {type === "privacy" && "Privacy Policy"}
                          {type === "terms" && "Terms & Conditions"}
                          {type === "refund" && "Refund Policy"}
                        </span>
                        <span className="h-[1px] w-0 bg-gradient-to-r from-[#00DFD8] to-[#FF0080] transition-all duration-300 ease-out group-hover:w-full" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div className="col-span-2 sm:col-span-1">
                <h3 className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  Contact Us
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:info@thecyberloom.com"
                      className="group flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
                    >
                      <span>info@thecyberloom.com</span>
                      <FiArrowRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#00DFD8]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+918603850720"
                      className="group flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
                    >
                      <span>+91 86038 50720</span>
                      <FiArrowRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#00DFD8]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+917857094656"
                      className="group flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
                    >
                      <span>+91 78570 94656</span>
                      <FiArrowRight size={12} className="opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#00DFD8]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright and Back to Top */}
          <div className="mt-28 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 md:flex-row">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-600">
                © 2026 THE CYBER LOOM // ALL RIGHTS RESERVED
              </span>
              <div className="flex items-center gap-2.5 rounded-full border border-white/[0.04] bg-zinc-950 px-3.5 py-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                <div className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00DFD8] opacity-30" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00DFD8]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  Status: Online
                </span>
              </div>
            </div>

            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500 transition-colors duration-200 hover:text-white"
            >
              <FiActivity size={12} className="text-[#FF0080] animate-pulse" />
              Scroll to Top
              <FiArrowUp size={12} className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Big background watermark text */}
          <div className="pointer-events-none mt-14 overflow-hidden text-center select-none opacity-[0.02]">
            <motion.span
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="block font-black tracking-tighter leading-none text-white text-[15vw]"
            >
              CYBERLOOM
            </motion.span>
          </div>
        </div>
      </footer>

      {/* Slide-out Sidebar Panel for Legal Content */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex justify-end bg-black/60 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative flex h-full w-full max-w-xl flex-col border-l border-white/10 bg-[#060606]/80 backdrop-blur-xl px-8 py-12 md:px-12 shadow-2xl"
            >
              {/* Pop-up Panel Header */}
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                    Official Documentation
                  </span>
                  <h2 className="mt-1 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                    {LEGAL_CONTENT[activeModal].title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close panel"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-zinc-900/40 text-zinc-400 transition-all duration-200 hover:border-white/10 hover:bg-zinc-900 hover:text-white"
                >
                  <FiX size={16} />
                </button>
              </div>

              {/* Scrollable Text Body */}
              <div className="no-scrollbar flex-1 overflow-y-auto pr-2 space-y-8 pb-8">
                {LEGAL_CONTENT[activeModal].sections.map((sec, idx) => (
                  <section key={idx} className="group border-b border-white/[0.02] pb-6 last:border-none">
                    <h3 className="mb-2.5 text-[13px] font-semibold tracking-wide text-zinc-200 transition-colors duration-200 group-hover:text-[#00DFD8]">
                      {sec.heading}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-zinc-500 font-normal">
                      {sec.text.includes("info@thecyberloom.com") ? (
                        <>
                          For billing concerns, payment disputes, or refund-related inquiries, contact our support team at{" "}
                          <span className="text-[#00DFD8] font-medium selection:bg-[#00DFD8]/20">info@thecyberloom.com</span>.
                        </>
                      ) : (
                        sec.text
                      )}
                    </p>
                  </section>
                ))}
              </div>

              {/* Bottom text inside pop-up */}
              <div className="border-t border-white/5 pt-6 text-center">
                <p className="text-[10px] font-mono tracking-wider text-zinc-600 uppercase">
                  Version 2026.1 // Secured Page Documentation
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}