"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { 
  FiCode, FiCpu, FiZap, FiLayout, 
  FiSearch, FiMessageSquare, FiArrowUpRight 
} from "react-icons/fi";
import { MouseEvent } from "react";
import Link from "next/link";

// Updated with explicit slugs matching your servicesData configuration object keys
const services = [
  { slug: "website-development", title: "Website Development", desc: "Fast websites that load in under 2 seconds and rank on Google.", icon: <FiCode />, color: "#ff0099", size: "md:col-span-2" },
  { slug: "ai-integration", title: "AI Integration", desc: "Add AI features to your existing tools — CRM, WhatsApp, or custom software.", icon: <FiCpu />, color: "#8a2be2", size: "md:col-span-1" },
  { slug: "ai-automation", title: "AI Automation", desc: "Automate the repetitive tasks eating your team's time every day.", icon: <FiZap />, color: "#00dbde", size: "md:col-span-1" },
  { slug: "saas-development", title: "SaaS Development", desc: "Scalable, multi-tenant digital products.", icon: <FiLayout />, color: "#ff0099", size: "md:col-span-1" },
  { slug: "seo-optimization", title: "SEO Optimization", desc: "Get found on Google. We handle the technical and content SEO.", icon: <FiSearch />, color: "#8a2be2", size: "md:col-span-2" },
  { slug: "ai-chatbots", title: "AI Chatbots", desc: "AI chatbots that answer leads 24/7 and book calls while you sleep.", icon: <FiMessageSquare />, color: "#00dbde", size: "md:col-span-1" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-[#030303] py-32 px-6 overflow-hidden">
      {/* Background Architectural Mesh */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff10 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-fuchsia-600 to-transparent" />
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-fuchsia-500">Service Protocol</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black tracking-[calc(-0.05em)] text-white leading-[0.85]">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-500">WEAVING.</span>
            </h2>
          </div>
          
          <div className="md:text-right">
            <p className="max-w-[280px] text-xs font-mono uppercase tracking-widest text-zinc-500 leading-relaxed md:ml-auto">
              Systemized engineering designed to scale with the speed of thought. // [EST 2026]
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Link href={`/services/${service.slug}`} className={`${service.size} block group`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        className="h-full relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20 p-8 backdrop-blur-sm transition-colors hover:border-white/10 cursor-pointer"
      >
        {/* Dynamic Cursor Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                ${service.color}15,
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div 
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800/50 text-2xl text-white transition-all group-hover:scale-110"
              style={{ border: `1px solid ${service.color}30` }}
            >
              {service.icon}
            </div>
            <span className="font-mono text-[10px] text-zinc-700">0{index + 1}</span>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
              {service.title}
            </h3>
            <p className="max-w-[240px] text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-300">
              {service.desc}
            </p>
            
            <div className="mt-8 flex items-center gap-2 overflow-hidden">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors"
              >
                Initialize Thread <FiArrowUpRight />
              </motion.div>
              <div 
                className="h-[1px] flex-1 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0" 
                style={{ backgroundColor: service.color }}
              />
            </div>
          </div>
        </div>

        {/* Decorative Corner Scan Line */}
        <div 
          className="absolute top-0 left-0 h-1 w-0 transition-all duration-700 group-hover:w-full"
          style={{ backgroundColor: service.color }}
        />
      </motion.div>
    </Link>
  );
}
