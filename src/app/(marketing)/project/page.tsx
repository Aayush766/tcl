"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiServer, FiLayers } from "react-icons/fi";
import Navbar from "../../../components/layout/navbar"; // Adjust this path if your Navbar is elsewhere
import Footer from "@/components/layout/footer";

const projects = {
  lms: [
    {
      title: "Lurnex LMS Portal",
      initials: "LX",
      sub: "Next.js • Node.js • Live Mentorship",
      link: "https://lms.lurnex.me",
      desc: "A full-scale LMS platform for Lurnex — a coaching and mentorship startup. Includes live Zoom class integration, automated student onboarding (cut registration time from 3 hours to under 10 minutes), and a trainer dashboard. Built on Next.js + Node.js and live at lms.lurnex.me.",
      tags: ["Zoom Integration", "MERN Stack", "3 hrs → 10 min onboarding"]
    },
    {
      title: "JRtinker Tinkering Lab",
      initials: "JR",
      sub: "React.js • Tailwind CSS • MongoDB",
      link: "https://lms.jrtinker.com",
      desc: "A custom management portal for JRtinker — a STEM and robotics lab network. Replaced a fully manual scheduling and tracking system with automated timetables, trainer assignment, and digital activity logs. Admin time reduced by an estimated 5–6 hours per week. Live at lms.jrtinker.com.",
      tags: ["5–6 hrs/week saved", "Automated scheduling", "Trainer Matrix"]
    },
    {
      title: "GeniusKidz AI Learning",
      initials: "GK",
      sub: "Next.js • FastAPI • Web Analytics",
      link: "https://lms.geniuskidz.ai",
      desc: "An AI-powered learning platform for GeniusKidz — a nationwide K-12 EdTech brand operating AI and robotics labs across schools. Built AI coding labs, IoT modules, and a cognitive progress dashboard. Designed to scale across 100+ school installations aligned with NEP 2020 guidelines. Live at lms.geniuskidz.ai.",
      tags: ["AI Coding Labs", "IoT Modules", "Cognitive Dashboard"]
    }
  ],
  websites: [
    {
      title: "Lurnex Platform",
      initials: "LN",
      sub: "Business Architecture Engine",
      link: "https://lurnex.me",
      desc: "The primary digital portal driving creative management strategies, strategic coaching ecosystems, and comprehensive brand roadmaps for global modern enterprises.",
      tags: ["Brand Roadmap", "Coaching Hub", "High Conversion"]
    },
    {
      title: "JRtinker Lab Portal",
      initials: "JT",
      sub: "STEM & Robotics Initiative",
      link: "https://jrtinker.com",
      desc: "An elite landing platform created to expose young tech enthusiasts to interactive robotics setups, real-time AI concepts, and experiential structural experiments.",
      tags: ["STEM Hub", "Robotics Interface", "Interactive UX"]
    },
    {
      title: "Tibetan Handicrafts & Jewellery",
      initials: "TH",
      sub: "Luxury E-Commerce Terminal",
      link: "https://tibetandhamma.com",
      desc: "A luxury boutique e-commerce website for Tibetan Dhamma — a handcrafted collectibles brand. Designed for premium brand perception with immersive gallery UX, fluid micro-animations, and a mobile-first shopping experience. Optimised for fast load speeds and product discovery. Live at tibetandhamma.com.",
      tags: ["Boutique UI", "Immersive Gallery", "Fluid Animations"]
    },
    {
      title: "GeniusKidz Technologies",
      initials: "GT",
      sub: "AI Lab Integration Platform",
      link: "https://geniuskidz.ai",
      desc: "The main infrastructure platform mapping nationwide installation pipelines for AI coding nodes and hardware laboratories across educational networks.",
      tags: ["NEP 2020", "Hardware Labs", "Scale Engine"]
    }
  ]
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  }
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-[#030303] text-white selection:bg-[#00DFD8]/20 selection:text-[#00DFD8] pb-32 pt-28 relative overflow-hidden">
      {/* GLOBAL NAVBAR COMPONENT */}
      <Navbar />
      
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `linear-gradient(#ff0080 0.5px, transparent 0.5px), linear-gradient(90deg, #00DFD8 0.5px, transparent 0.5px)`,
            backgroundSize: '100px 100px' 
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,#030303_75%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        
        {/* Header Section */}
        <div className="mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 rounded-none border-l-2 border-[#ff0080] bg-gradient-to-r from-[#ff0080]/10 to-transparent px-4 py-1.5">
            <span className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-zinc-400">
              Deployment Archive // Core
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
            ENGINEERED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] via-[#8a2be2] to-[#00DFD8]">
              FABRICATIONS
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            A meticulous assembly of optimized LMS architectures, microservices pipelines, and high-end digital luxury surfaces woven into active production layers.
          </p>
        </div>

        {/* SECTION 1: SYSTEM ARCHITECTURES (LMS) */}
        <div className="mb-28">
          <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-4">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#ff0080]">
              <FiServer className="text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-[0.2em] uppercase">Core Learning Management Systems</h2>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">Category_01 // Integrated Systems Engine</p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.lms.map((project, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/30 backdrop-blur-xl p-5 hover:border-white/10 transition-all duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              >
                <div>
                  {/* Premium Hover Light */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#ff0080]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* TEXT THUMBNAIL PLACEHOLDER */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/5 mb-6 bg-zinc-900/40 flex flex-col items-center justify-center p-6 text-center select-none group-hover:bg-zinc-900/60 transition-colors duration-500">
                    {/* Micro dot matrix inside thumbnail */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
                    <div className="relative z-10 text-4xl font-mono font-black tracking-widest text-zinc-700 group-hover:text-[#ff0080]/40 transition-colors duration-500 mb-2">
                      {project.initials}
                    </div>
                    <div className="relative z-10 text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500">
                      System_Node // 0{idx + 1}
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-[#00DFD8] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors p-1"
                    >
                      <FiExternalLink className="text-sm" />
                    </Link>
                  </div>
                  
                  <p className="text-[10px] font-mono text-zinc-500 mb-4">{project.sub}</p>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] font-mono tracking-wider uppercase px-2.5 py-1 bg-white/5 rounded-md border border-white/5 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* SECTION 2: WEB EXPERIENCES */}
        <div>
          <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-4">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#00DFD8]">
              <FiLayers className="text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-[0.2em] uppercase">Digital Surfaces & Platforms</h2>
              <p className="text-xs text-zinc-500 font-mono mt-0.5">Category_02 // Structural Presentation Layers</p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.websites.map((project, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative flex flex-col md:flex-row gap-6 overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/20 backdrop-blur-xl p-5 hover:border-white/10 transition-all duration-500 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
              >
                {/* Premium Hover Light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00DFD8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* TEXT THUMBNAIL PLACEHOLDER */}
                <div className="relative w-full md:w-2/5 h-48 md:h-full min-h-[180px] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/40 flex-shrink-0 flex flex-col items-center justify-center p-4 text-center select-none group-hover:bg-zinc-900/60 transition-colors duration-500">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
                  <div className="relative z-10 text-4xl font-mono font-black tracking-widest text-zinc-700 group-hover:text-[#00DFD8]/40 transition-colors duration-500 mb-1">
                    {project.initials}
                  </div>
                  <div className="relative z-10 text-[9px] font-mono tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500">
                    Surface_Layer // 0{idx + 1}
                  </div>
                </div>

                <div className="flex flex-col justify-between flex-grow py-1">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-[#ff0080] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors p-1"
                      >
                        <FiExternalLink className="text-sm" />
                      </Link>
                    </div>
                    
                    <p className="text-[10px] font-mono text-[#00DFD8] mb-4 uppercase tracking-widest">{project.sub}</p>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[8px] font-mono tracking-wider uppercase px-2 py-0.5 bg-white/5 rounded-md border border-white/5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Footer />
      </div>
    </main>
  );
}