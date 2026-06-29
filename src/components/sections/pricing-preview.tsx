"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiExternalLink } from "react-icons/fi";
import { RiCpuLine, RiRadarLine, RiCustomerService2Line, RiShieldFlashLine, RiSparklingLine, RiFlashlightLine } from "react-icons/ri";
import Link from "next/link";

const corePackages = [
  {
    title: "Starter Website",
    price: "₹9,999",
    period: "one-time",
    description: "5 pages · Domain & Hosting Year 1 included",
    features: [
      "5-page responsive website",
      "Domain (1 year) + Cloud Hosting (1 year)",
      "WhatsApp (WA) integration",
      "Basic SEO setup",
      "Google Business Profile (GBP) setup",
      "SSL certificate",
      "10-day/month post-launch support",
      "Add-on pages: ₹1,000–₹1,500/page"
    ],
    icon: <RiFlashlightLine />,
    gradient: "from-fuchsia-500 via-purple-500 to-pink-500",
    isPopular: false,
    ctaText: "Get Started"
  },
  {
    title: "Growth Plan",
    price: "₹14,999",
    range: "— ₹24,999",
    period: "One-time investment",
    description: "Designed for businesses ready to scale and capture online leads.",
    features: [
      "Everything in Starter Package",
      "Custom brand-aligned web design",
      "Advanced on-page & technical SEO",
      "Lead generation system",
      "Domain & hosting paid by client",
      "Contact & inquiry forms",
      "Google Analytics 4 integration",
      "Speed & Core Web Vitals optimization",
      "Social media profile integration",
      "Basic content upload on delivery",
      "30-day post-launch technical support"
    ],
    icon: <RiRadarLine />,
    gradient: "from-[#ff0099] via-[#bf5af2] to-[#0a84ff]",
    isPopular: true,
    ctaText: "Choose Growth"
  },
  {
    title: "AI Business Plan",
    price: "₹34,999+",
    period: "Starting Price",
    description: "Scope-based custom quote · 3–6 weeks delivery.",
    features: [
      "Everything in the Growth Website Package",
      "AI Chatbot (trained on your business data — 24/7 automated)",
      "WhatsApp automation — lead nurture, order updates, reminders",
      "Appointment & online booking management system",
      "CRM integration & Custom admin dashboard",
      "Role-based business management panel",
      "Premium UI/UX design with animations & micro-interactions",
      "Priority dedicated support "
    ],
    icon: <RiCpuLine />,
    gradient: "from-purple-500 via-cyan-500 to-blue-500",
    isPopular: false,
    ctaText: "Let's Discuss"
  }
];

const carePlans = [
  {
    title: "Website Essential Care",
    price: "₹1999",
    period: "per month",
    description: "Peace of mind maintenance to keep your website fast, secure, and fully updated.",
    features: [
      "Basic website edits & copy updates (up to 10 changes/month)",
      "Web hosting support & uptime monitoring",
      "Content uploads — images, text, product listings",
      "Bug identification, diagnosis & resolution",
      "Billed monthly · Cancel with 15-day notice · No hidden charges",
      "WhatsApp direct support (Mon–Sat, 10 AM–7 PM IST)"
    ],
    icon: <RiCustomerService2Line />,
    gradient: "from-fuchsia-500/30 to-purple-500/20"
  },
  {
    title: "Digital Presence Plan",
    price: "₹7999",
    period: "per month",
    description: "An all-in-one monthly plan combining continuous site updates with fresh marketing content.",
    features: [
      "Website maintenance & monthly updates",
      "Up to 5 website content section changes",
      "Social Media: 4 Static Posts (design + caption + hashtags)",
      "Social Media: 2 Reels (concept + design/motion graphics)",
      "1 Custom Landing Page (design + copy + dev)",
      "2 Promotional Banners (digital-ready files)",
      "8 content deliverables/month · Perfect for new brands",
      "WhatsApp support included"
    ],
    icon: <RiSparklingLine />,
    gradient: "from-[#ff0099]/40 via-[#bf5af2]/30 to-[#0a84ff]/20",
    isPopular: true
  },
  {
    title: "Brand Amplifier Plan",
    price: "₹11,999",
    period: "per month",
    description: "Maximum digital impact with high-volume design deliverables to dominate your market.",
    features: [
      "Everything in Digital Presence Plan, PLUS:",
      "Social Media: 8 Posts (carousel + static + branded captions)",
      "Social Media: 4 Reels (scripted, animated, branded)",
      "8 Story Creatives per month",
      "1 Custom Landing Page per month",
      "4 Promotional Banners per month",
      "Basic monthly performance report",
      "20 deliverables/month · For brands ready to dominate",
      "Priority WhatsApp support"
    ],
    icon: <RiShieldFlashLine />,
    gradient: "from-cyan-500/30 to-blue-500/20"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-[#030303] py-28 px-6 text-zinc-300 selection:bg-fuchsia-500/30 overflow-hidden w-full">
      
      {/* Background Gradients & Noise Mesh Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500 blur-[140px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =========================================================
            SECTION 1: WEBSITE PACKAGES
           ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
              Fixed Pricing Models
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Website Packages
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 font-medium max-w-xl mx-auto leading-relaxed">
            Transparent, performance-driven architectural frameworks built to optimize business conversions.
          </p>
        </div>

        {/* Core Packages Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mb-12">
          {corePackages.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl p-[1px] bg-gradient-to-tr transition-all duration-300 group ${
                plan.isPopular 
                  ? "from-fuchsia-500/40 via-purple-500/20 to-cyan-500/40 shadow-[0_20px_50px_rgba(191,90,242,0.15)]" 
                  : "from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800"
              }`}
            >
              <div className="w-full h-full rounded-[23px] bg-[#070709]/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between">
                
                {plan.isPopular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-600 px-4 py-1 text-[9px] font-mono tracking-widest font-black uppercase text-white shadow-lg shadow-fuchsia-600/20">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 border border-white/5 text-xl text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                      {plan.icon}
                    </div>
                    <h3 className="text-base font-black uppercase tracking-wider text-white">{plan.title}</h3>
                  </div>

                  <p className="text-[13px] text-zinc-500 leading-relaxed min-h-[40px] mb-6 font-medium">
                    {plan.description}
                  </p>

                  <div className="border-b border-zinc-900 pb-6 mb-6">
                    <div className="flex items-baseline text-white">
                      <span className={`text-3xl font-black tracking-tight ${plan.isPopular ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400" : ""}`}>
                        {plan.price}
                      </span>
                      {plan.range && <span className="text-xl font-bold text-zinc-500 ml-1">{plan.range}</span>}
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-zinc-600 tracking-wider block mt-1.5">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs font-medium text-zinc-400">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-[9px] text-fuchsia-400 mt-0.5">
                          <FiCheck />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/book" passHref>
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full h-12 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-md shadow-fuchsia-600/10 hover:shadow-fuchsia-600/20"
                        : "bg-zinc-950 text-zinc-400 border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/50 hover:text-white"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <FiArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Explore More Packages Button Component */}
        <div className="flex justify-center mb-32">
          <Link href="/packages" passHref>
            <motion.button
              whileHover={{ scale: 1.02, y: -2, borderColor: 'rgba(217,70,239,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950/40 border border-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-all duration-200 shadow-xl backdrop-blur-md"
            >
              <span>Explore More Packages</span>
              <FiExternalLink size={13} className="text-zinc-600 transition-colors group-hover:text-fuchsia-400" />
            </motion.button>
          </Link>
        </div>


        {/* =========================================================
            SECTION 2: MONTHLY CARE PLANS
           ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-400">
              Retainer Workflows
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Monthly Care Plans
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 font-medium max-w-xl mx-auto leading-relaxed">
            Continuous technical system iterations, content adjustments, and scalable marketing asset optimization.
          </p>
        </div>

        {/* Care Plans Grid */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 mb-20">
          {carePlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-3xl p-[1px] bg-gradient-to-tr transition-all duration-300 group ${
                plan.isPopular 
                  ? "from-purple-500/40 via-fuchsia-500/20 to-blue-500/40 shadow-[0_20px_50px_rgba(217,70,239,0.1)]" 
                  : "from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:via-zinc-700 hover:to-zinc-800"
              }`}
            >
              <div className="w-full h-full rounded-[23px] bg-[#070709]/95 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between">
                
                {plan.isPopular && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 px-4 py-1 text-[9px] font-mono tracking-widest font-black uppercase text-white shadow-lg shadow-purple-600/20">
                    Best Value Combo
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 border border-white/5 text-xl text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      {plan.icon}
                    </div>
                    <h3 className="text-base font-black uppercase tracking-wider text-white">{plan.title}</h3>
                  </div>

                  <p className="text-[13px] text-zinc-500 leading-relaxed min-h-[60px] mb-6 font-medium">
                    {plan.description}
                  </p>

                  <div className="border-b border-zinc-900 pb-6 mb-6">
                    <div className="flex items-baseline text-white">
                      <span className={`text-3xl font-black tracking-tight ${plan.isPopular ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400" : ""}`}>
                        {plan.price}
                      </span>
                      <span className="text-xs font-bold text-zinc-600 ml-1.5 font-mono uppercase tracking-wider">/ {plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs font-medium text-zinc-400">
                        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[9px] text-cyan-400 mt-0.5">
                          <FiCheck />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Structural Bottom Inquiry Footer Bar */}
        <div className="border-t border-zinc-900 pt-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-zinc-500 text-center sm:text-left max-w-md leading-relaxed">
            Need a completely isolated, distinct infrastructure design or custom logic-driven enterprise platform integrations?
          </p>
          <Link href="/book" passHref>
            <button className="flex items-center gap-2.5 text-xs font-mono uppercase font-black tracking-widest text-white hover:text-fuchsia-400 transition-colors duration-200 group">
              <span>Let's build a custom plan</span>
              <FiArrowRight size={14} className="text-fuchsia-500 transition-transform group-hover:translate-x-1.5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}