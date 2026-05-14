"use client";

import { motion } from "framer-motion";
// Changed FiQuote to FiMessageSquare
import { FiMessageSquare, FiArrowUpRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "David Parker",
    company: "SaaSFlow",
    tag: "AI AUTOMATION",
    quote: "The Cyber Loom transformed our growth with AI automation and a lightning-fast platform.",
  },
  {
    name: "Sophia Miller",
    company: "Nova Commerce",
    tag: "CONVERSION",
    quote: "Our conversion rate increased dramatically after working with their team. The engineering is peerless.",
  },
  {
    name: "Michael Reed",
    company: "GrowthLabs",
    tag: "ENTERPRISE",
    quote: "Premium execution, world-class engineering, and enterprise-level support that scales with us.",
  },
  {
    name: "Elena Vance",
    company: "Vertex AI",
    tag: "NEURAL STACK",
    quote: "They didn't just build a site; they engineered a competitive advantage. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#020202] py-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-10 bg-cyan-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">Network Consensus</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              VOICES FROM <br />
              <span className="text-zinc-800">THE LOOM.</span>
            </h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-start md:items-end text-zinc-500 font-mono text-[10px] uppercase tracking-widest"
          >
            <span>Verified Clients: 142</span>
            <span>Uptime: 99.9%</span>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>

        <div className="mt-32 flex items-center gap-4 opacity-20">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-700" />
          <div className="flex gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-1 w-1 bg-zinc-700 rounded-full" />
            ))}
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-700" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`group relative rounded-3xl p-[1px] overflow-hidden ${
        index % 2 === 0 ? "lg:mt-12" : "lg:mb-12"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-transparent group-hover:from-cyan-500/50 group-hover:to-fuchsia-500/50 transition-all duration-500" />
      
      <div className="relative h-full bg-zinc-950 p-8 rounded-[23px] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-[9px] px-2 py-1 bg-zinc-900 text-zinc-500 rounded border border-zinc-800 tracking-tighter">
              {testimonial.tag}
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-cyan-500 fill-cyan-500" size={10} />
              ))}
            </div>
          </div>

          {/* Icon updated here */}
          <FiMessageSquare className="text-3xl text-zinc-800 mb-4 group-hover:text-cyan-500/20 transition-colors" />
          
          <p className="text-lg font-medium text-zinc-300 leading-relaxed mb-12 italic tracking-tight">
            “{testimonial.quote}”
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white font-bold tracking-tight text-xl">{testimonial.name}</h3>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{testimonial.company}</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 45 }}
            className="h-10 w-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all"
          >
            <FiArrowUpRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}