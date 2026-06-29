"use client";

import { motion, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Link from "next/link";

const steps = [
  { 
    title: "Free Strategy Call", 
    desc: "We dive deep into your business model, growth goals, and target audience to outline your perfect setup.", 
    tag: "01 . CONNECT" 
  },
  { 
    title: "Planning & Audit", 
    desc: "We analyze your current online setup and competitors, shaping a tailored roadmap to maximize conversions.", 
    tag: "02 . ANALYZE" 
  },
  { 
    title: "Design & Development", 
    desc: "Our team builds a high-converting website and robust automation infrastructure tailored for your business.", 
    tag: "03 . ARCHITECT" 
  },
  { 
    title: "Launch & Optimization", 
    desc: "We push your new framework live, test every system under real conditions, and monitor initial user flows.", 
    tag: "04 . DEPLOY" 
  },
  { 
    title: "Ongoing Growth Support", 
    desc: "We continuously fine-tune your systems, run technical maintenance, and keep your incoming lead stream active.", 
    tag: "05 . SCALE" 
  },
];

export default function WorkflowTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative bg-[#030303] py-40 px-6 overflow-hidden text-white selection:bg-fuchsia-500/30">
      
      {/* Background Ambient Network Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/10 to-blue-600/10 blur-[130px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Simple & Impactful Header */}
        <div className="mb-40 flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
              Our Process
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
            How We Build Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff]">
              Growth Engine.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl pt-2 font-medium leading-relaxed">
            From the initial conversation to a fully launched automation ecosystem, here is how we ensure your business scales predictably.
          </p>
        </div>

        {/* Timeline Engine */}
        <div className="relative">
          {/* Central Thread Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-zinc-900/50">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-[#ff0099] via-[#bf5af2] to-[#0a84ff]"
            />
          </div>

          <div className="space-y-24 md:space-y-36">
            {steps.map((step, index) => (
              <StepItem key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* High-Converting Action Terminal Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-40 p-8 sm:p-16 border border-zinc-900 bg-zinc-950/20 backdrop-blur-xl rounded-3xl flex flex-col items-center text-center relative overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/5 to-cyan-500/5 rounded-3xl blur-2xl opacity-80 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> 
              Availability Open for This Month
            </div>
            
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
              Ready to double your inbound customer flow?
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-medium mb-10 max-w-lg leading-relaxed">
              Claim your complimentary architecture evaluation session. We’ll maps out a tailored strategy framework for your exact business niche.
            </p>
            
            <Link href="/book" passHref>
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative h-14 px-10 rounded-xl overflow-hidden font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:shadow-[0_0_40px_rgba(217,70,239,0.35)] transition-all flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span>Claim Your Free Strategy Call</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1.5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px" });

  return (
    <div 
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center justify-between ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Interactive Node Indicator */}
      <div className="absolute left-[24px] md:left-1/2 top-8 md:top-1/2 z-20 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: isInView ? 1 : 0.6,
            backgroundColor: isInView ? "#bf5af2" : "#0c0c0e",
            borderColor: isInView ? "#ffffff" : "#1f1f23"
          }}
          transition={{ duration: 0.5 }}
          className="h-4 w-4 rounded-full border-2 border-zinc-800 z-10 shadow-[0_0_15px_rgba(0,0,0,1)]"
        />
        {isInView && (
          <motion.div 
            layoutId="activeGlow"
            className="absolute inset-[-12px] bg-purple-500/20 blur-lg rounded-full" 
          />
        )}
      </div>

      {/* Content Container Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full md:w-[46%] pl-14 md:pl-0"
      >
        <div className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/30 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-800/80">
          
          {/* Card Label Headers */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 bg-zinc-900/60 px-2.5 py-1 rounded-md border border-zinc-800/60">
              {step.tag}
            </span>
            <span className="text-[11px] font-mono font-bold text-zinc-600 tracking-tight">
              PHASE // 0{index + 1}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 transition-colors duration-300 group-hover:text-white">
            {step.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 font-medium transition-colors duration-300 group-hover:text-zinc-300">
            {step.desc}
          </p>
          
        </div>
      </motion.div>

      {/* Empty Balancing Side Spacer */}
      <div className="hidden md:block md:w-[46%]" />
    </div>
  );
}