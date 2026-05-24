"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiServer, FiLayers } from "react-icons/fi";
import Navbar from "../../../components/layout/navbar";
import Footer from "@/components/layout/footer";


const projects = {
  lms: [
    {
      title: "Lurnex LMS Portal",
      initials: "LX",
      sub: "Next.js • Node.js • Live Mentorship",
      link: "https://lms.lurnex.me",
      desc: "An enterprise-grade Learning Management System featuring synchronous Zoom class streams, automated deployment architecture, intuitive dashboard states, and optimized training pipelines.",
      tags: ["Zoom Integration", "MERN Stack", "Automated Onboarding"],
    },
    {
      title: "JRtinker Tinkering Lab",
      initials: "JR",
      sub: "React.js • Tailwind CSS • MongoDB",
      link: "https://lms.jrtinker.com",
      desc: "A custom activity ecosystem tailored for interactive tech labs. Features complex timetable systems, dynamic trainer tracking matrices, and comprehensive digital activity logs.",
      tags: ["Timetable Engine", "Activity Logs", "Trainer Matrix"],
    },
    {
      title: "GeniusKidz AI Learning",
      initials: "GK",
      sub: "Next.js • FastAPI • Web Analytics",
      link: "https://lms.geniuskidz.ai",
      desc: "The learning terminal powering automated AI, Robotics, and IoT training modules for K-12 systems aligned directly with innovative cognitive education guidelines.",
      tags: ["AI Coding Labs", "IoT Modules", "Cognitive Dashboard"],
    },
  ],

  websites: [
    {
      title: "Lurnex Platform",
      initials: "LN",
      sub: "Business Architecture Engine",
      link: "https://lurnex.me",
      desc: "The primary digital portal driving creative management strategies, strategic coaching ecosystems, and comprehensive brand roadmaps for global modern enterprises.",
      tags: ["Brand Roadmap", "Coaching Hub", "High Conversion"],
    },
    {
      title: "JRtinker Lab Portal",
      initials: "JT",
      sub: "STEM & Robotics Initiative",
      link: "https://jrtinker.com",
      desc: "An elite landing platform created to expose young tech enthusiasts to interactive robotics setups, real-time AI concepts, and experiential structural experiments.",
      tags: ["STEM Hub", "Robotics Interface", "Interactive UX"],
    },
    {
      title: "Tibetan Handicrafts & Jewellery",
      initials: "TH",
      sub: "Luxury E-Commerce Terminal",
      link: "https://tibetandhammashop.com",
      image: "/projects/tibetan-web.png",
      desc: "A premium Next.js jewellery design featuring curated image galleries, fluid interactions, and deep immersive design paths tailored for luxury art collectibles.",
      tags: ["Jewellery UI", "Immersive Gallery", "Fluid Animations"],
    },
    {
      title: "GeniusKidz Technologies",
      initials: "GT",
      sub: "AI Lab Integration Platform",
      link: "https://geniuskidz.ai",
      desc: "The main infrastructure platform mapping nationwide installation pipelines for AI coding nodes and hardware laboratories across educational networks.",
      tags: ["NEP 2020", "Hardware Labs", "Scale Engine"],
    },
  ],
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen w-full bg-[#030303] text-white selection:bg-[#00DFD8]/20 selection:text-[#00DFD8] pb-32 pt-28 relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* Background Matrix */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#ff0080 0.5px, transparent 0.5px), linear-gradient(90deg, #00DFD8 0.5px, transparent 0.5px)`,
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,transparent_0%,#030303_75%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">

        {/* HEADER */}
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
            A meticulous assembly of optimized LMS architectures,
            microservices pipelines, and high-end digital luxury surfaces
            woven into active production layers.
          </p>
        </div>

        {/* LMS SECTION */}
        <div className="mb-28">

          <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-4">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#ff0080]">
              <FiServer className="text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-[0.2em] uppercase">
                Core Learning Management Systems
              </h2>

              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Category_01 // Integrated Systems Engine
              </p>
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

                  {/* Hover Light */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#ff0080]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Image */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-white/5 mb-6 bg-zinc-900/60 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
                      sizes="(max-width: 1200px) 33vw"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* TITLE + ICON */}
                  <div className="mb-2">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2"
                    >
                      <h3 className="text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-[#00DFD8] group-hover/link:text-[#00DFD8]">
                        {project.title}
                      </h3>

                      <FiExternalLink className="text-sm text-zinc-500 transition-all duration-300 group-hover/link:text-white group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
                    </Link>
                  </div>

                  {/* SUB */}
                  <p className="text-[10px] font-mono text-zinc-500 mb-4">
                    {project.sub}
                  </p>

                  {/* DESC */}
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* TAGS */}
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

        {/* WEBSITE SECTION */}
        <div>

          <div className="flex items-center gap-4 mb-12 border-b border-white/5 pb-4">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[#00DFD8]">
              <FiLayers className="text-xl" />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-[0.2em] uppercase">
                Digital Surfaces & Platforms
              </h2>

              <p className="text-xs text-zinc-500 font-mono mt-0.5">
                Category_02 // Structural Presentation Layers
              </p>
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

                {/* Hover Light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00DFD8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* IMAGE */}
                <div className="relative w-full md:w-2/5 h-48 md:h-full min-h-[180px] rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-in-out"
                    sizes="(max-width: 1200px) 40vw"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-between flex-grow py-1">

                  <div>

                    {/* TITLE + ICON */}
                    <div className="mb-2">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2"
                      >
                        <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#ff0080] group-hover/link:text-[#ff0080]">
                          {project.title}
                        </h3>

                        <FiExternalLink className="text-sm text-zinc-500 transition-all duration-300 group-hover/link:text-white group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
                      </Link>
                    </div>

                    {/* SUB */}
                    <p className="text-[10px] font-mono text-[#00DFD8] mb-4 uppercase tracking-widest">
                      {project.sub}
                    </p>

                    {/* DESC */}
                    <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                      {project.desc}
                    </p>

                  </div>

                  {/* TAGS */}
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