"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiCheck, FiCpu, FiShield, FiZap, FiTerminal } from "react-icons/fi";
import { useRef } from "react";

const plans = [
  {
    title: "Vanguard",
    price: "$4,500",
    tagline: "High-performance deployment for MVP scaling.",
    features: ["Custom Neural Roadmap", "Next.js 15 + Tailwind Architecture", "Core AI Agent Integration", "24hr Response Latency"],
    icon: <FiZap />,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    title: "Quantum",
    price: "$12,000",
    tagline: "Total infrastructure dominance for enterprises.",
    features: ["Proprietary LLM Fine-tuning", "Distributed Edge Computing", "Multi-Agent Orchestration", "Instant Priority Uplink", "Bi-weekly Strategy Sprints"],
    icon: <FiCpu />,
    accent: "from-fuchsia-600 to-purple-400",
    recommended: true,
  },
  {
    title: "Apex",
    price: "Custom",
    tagline: "Unrestricted architectural sovereignty.",
    features: ["Dedicated Systems Architect", "Bare-Metal Security Audit", "Full-Stack Neural Overhaul", "Custom Kernel Development"],
    icon: <FiShield />,
    accent: "from-emerald-500 to-teal-400",
  },
];

export default function PricingPreview() {
  return (
    <section className="relative bg-[#030303] py-40 px-6 overflow-hidden">
      {/* Neural Network Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-32 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-5 py-2 backdrop-blur-2xl"
          >
            <div className="h-2 w-2 rounded-full bg-fuchsia-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">System Capitalization</span>
          </motion.div>

          <h2 className="mt-8 text-7xl md:text-9xl font-black tracking-tighter text-white">
            PRICING<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-800">.V3</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-end">
          {plans.map((plan, i) => (
            <PricingCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }: { plan: any; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative flex flex-col rounded-[3rem] p-1 ${plan.recommended ? 'scale-105 z-20 mb-10 lg:mb-20' : 'z-10'}`}
    >
      {/* Outer Glow & Border */}
      <div className={`absolute inset-0 rounded-[3rem] bg-gradient-to-b ${plan.accent} opacity-10 group-hover:opacity-30 transition-opacity blur-xl`} />
      
      <div className="relative h-full flex flex-col rounded-[2.9rem] bg-[#080808] border border-white/5 p-10 overflow-hidden">
        {/* Animated Accent Light */}
        <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${plan.accent} opacity-20 blur-[80px] group-hover:opacity-40 transition-opacity`} />
        
        <div className="mb-12">
          <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 border border-white/5 text-2xl group-hover:scale-110 transition-transform ${plan.recommended ? 'text-fuchsia-400' : 'text-zinc-400'}`}>
            {plan.icon}
          </div>
          <h3 className="text-3xl font-black tracking-tight text-white uppercase italic">{plan.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">{plan.tagline}</p>
        </div>

        <div className="mb-12 flex items-baseline gap-2">
          <span className="text-6xl font-black tracking-tighter text-white">{plan.price}</span>
          {plan.price !== "Custom" && <span className="text-zinc-700 font-mono text-xs uppercase tracking-widest">/ node</span>}
        </div>

        <div className="flex-1 space-y-5">
          {plan.features.map((feature: string) => (
            <div key={feature} className="flex items-start gap-4 text-sm text-zinc-400">
              <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/10 text-[8px]">
                <FiCheck />
              </div>
              {feature}
            </div>
          ))}
        </div>

        <button className="mt-16 group/btn relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-5 transition-all hover:scale-105 active:scale-95">
          <div className={`absolute inset-0 bg-gradient-to-r ${plan.accent} opacity-0 group-hover/btn:opacity-100 transition-opacity`} />
          <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] text-black group-hover/btn:text-white transition-colors">
            Initialize Project
          </span>
          <FiTerminal className="relative z-10 text-black group-hover/btn:text-white transition-colors" />
        </button>

        {/* Technical Base */}
        <div className="mt-8 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-800" />
          <span className="px-4 font-mono text-[8px] uppercase tracking-widest text-zinc-500 italic">
            X-Protocol.v{index + 1}
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-800" />
        </div>
      </div>
    </motion.div>
  );
}