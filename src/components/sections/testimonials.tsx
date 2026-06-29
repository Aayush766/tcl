"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Vipin Singh",
    company: "LURNEX",
    quote: "Before their team stepped in, our student onboarding was completely manual. We spent hours managing registrations, links, and emails. They built us an automated onboarding flow — now new students are set up in minutes. The platform has been flawless since launch.",
  },
  {
    name: "JRTINKER",
    company: "JRTINKER Labs",
    quote: "Managing lab timetables, trainer assignments, and activity logs was a mess. They built us a custom portal that handles everything in one place. Our admin time dropped significantly, the UI is clean, and the build quality is well above expectations.",
  },
  {
    name: "GeniusKidz AI",
    company: "ASKIITIANS",
    quote: "We needed a platform that could handle AI, Robotics, and IoT modules for K-12 students at scale. They understood our vision immediately and delivered a fast, well-structured system. The custom dashboard feature gives us a true competitive edge.",
  },
  {
    name: "Siddharth",
    company: "Tibetan Handicrafts",
    quote: "We sell handcrafted luxury collectibles and needed a digital experience that matched our product quality. They delivered an immersive boutique design. The gallery interactions and page speeds are excellent—our customers love it.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#030303] py-32 px-6 overflow-hidden text-white selection:bg-fuchsia-500/30">
      
      {/* Background Gradients & Grid Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#bf5af2]/5 to-[#0a84ff]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ff0099]/5 to-[#bf5af2]/5 blur-[120px]" />
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
                Client Success
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Trusted By Real <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff]">
                Business Founders.
              </span>
            </h2>
          </div>
          
          <div className="border-l border-zinc-800 pl-4 md:text-left">
            <p className="max-w-[320px] text-sm text-zinc-400 font-medium leading-relaxed">
              Read how we engineering digital conversion frameworks that drive automation and verifiable revenue for our clients.
            </p>
          </div>
        </div>

        {/* Testimonials Stable Balanced Grid */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  // Deterministic theme color assignment tracking with overall design setup
  const cardColors = ["#ff0099", "#bf5af2", "#0a84ff", "#bf5af2"];
  const currentColor = cardColors[index % cardColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-800"
    >
      <div className="relative z-10 flex flex-col h-full justify-between gap-8 text-left">
        
        <div>
          {/* Header Row: Icon & Clean Rating Setup */}
          <div className="flex items-center justify-between mb-6">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/50 text-sm"
              style={{ border: `1px solid ${currentColor}25`, color: currentColor }}
            >
              <FiMessageSquare />
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-amber-500 fill-amber-500" size={12} />
              ))}
            </div>
          </div>
          
          {/* Quote Body */}
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 font-medium transition-colors duration-300 group-hover:text-zinc-300">
            “{testimonial.quote}”
          </p>
        </div>

        {/* Identity Row */}
        <div className="border-t border-zinc-900/80 pt-4 w-full">
          <h3 className="text-sm font-bold tracking-tight text-white">
            {testimonial.name}
          </h3>
          <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">
            {testimonial.company}
          </p>
        </div>

      </div>

      {/* Dynamic Top Edge Linear Glow */}
      <div 
        className="absolute top-0 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full opacity-70"
        style={{ backgroundColor: currentColor }}
      />
    </motion.div>
  );
}