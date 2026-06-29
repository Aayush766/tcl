"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { 
  FiCode, FiCpu, FiZap, FiLayout, 
  FiSearch, FiMessageSquare, FiArrowRight 
} from "react-icons/fi";
import { MouseEvent } from "react";
import Link from "next/link";

const services = [
  { slug: "website-development", title: "Website Development", desc: "Fast, premium websites designed to convert visitors into paying clients.", icon: <FiCode />, color: "#ff0099", size: "md:col-span-2" },
  { slug: "ai-integration", title: "AI Integration", desc: "Connect AI directly into your CRM, WhatsApp, or custom company software.", icon: <FiCpu />, color: "#bf5af2", size: "md:col-span-1" },
  { slug: "ai-automation", title: "AI Automation", desc: "Save hours every day by automating your team's repetitive tasks.", icon: <FiZap />, color: "#0a84ff", size: "md:col-span-1" },
  { slug: "saas-development", title: "SaaS Development", desc: "Custom, scalable cloud platforms and multi-tenant applications.", icon: <FiLayout />, color: "#ff0099", size: "md:col-span-1" },
  { slug: "seo-optimization", title: "SEO Optimization", desc: "Rank at the top of Google search results to pull in organic leads.", icon: <FiSearch />, color: "#bf5af2", size: "md:col-span-2" },
  { slug: "ai-chatbots", title: "AI Chatbots", desc: "Smart 24/7 chatbots that capture leads and book client calls while you sleep.", icon: <FiMessageSquare />, color: "#0a84ff", size: "md:col-span-1" },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-[#030303] py-32 px-6 overflow-hidden text-white selection:bg-fuchsia-500/30">
      
      {/* Background Gradients & Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        {/* Syncing ambient lights with the Hero design */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-fuchsia-600/10 to-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                Our Solutions
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Services Built To <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff]">
                Grow Your Business.
              </span>
            </h2>
          </div>
          
          <div className="border-l border-zinc-800 pl-4 md:text-left">
            <p className="max-w-[320px] text-sm text-zinc-400 font-medium leading-relaxed">
              We design and implement custom digital infrastructure that turns casual traffic into real operational revenue.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { damping: 25, stiffness: 350 });
  const mouseY = useSpring(y, { damping: 25, stiffness: 350 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const bgGlowTemplate = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${service.color}12, transparent 75%)`;

  return (
    <Link href={`/services/${service.slug}`} className={`${service.size} block group relative`}>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onMouseMove={handleMouseMove}
        className="h-full relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-800 flex flex-col justify-between group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]"
      >
        {/* Dynamic Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{ background: bgGlowTemplate }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between gap-12">
          
          <div className="flex items-start justify-between w-full">
            <div 
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900/50 shadow-[inset_0_1px_0px_rgba(255,255,255,0.05)] text-lg transition-all duration-300 group-hover:scale-105"
              style={{ border: `1px solid ${service.color}30`, color: service.color }}
            >
              {service.icon}
            </div>
            <span className="font-mono text-[10px] font-bold text-zinc-600 tracking-wider">0{index + 1}</span>
          </div>

          <div className="w-full">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
              {service.title}
            </h3>
            <p className="max-w-[280px] text-xs sm:text-sm leading-relaxed text-zinc-400 font-medium transition-colors duration-300 group-hover:text-zinc-300">
              {service.desc}
            </p>
            
            {/* Action text aligned with simpler language style */}
            <div className="mt-6 flex items-center gap-2 overflow-hidden">
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-white transition-colors duration-300 shrink-0">
                <span>View Details</span> 
                <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div 
                className="h-[1px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" 
                style={{ backgroundColor: service.color }}
              />
            </div>
          </div>

        </div>

        {/* Subtle Accent Edge Line */}
        <div 
          className="absolute top-0 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full opacity-70"
          style={{ backgroundColor: service.color }}
        />
      </motion.div>
    </Link>
  );
}