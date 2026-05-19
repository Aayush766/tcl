"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  FiZap, 
  FiCpu, 
  FiGlobe, 
  FiSmartphone, 
  FiLayers, 
  FiTrendingUp, 
  FiShield, 
  FiCheck, 
  FiArrowRight, 
  FiClock 
} from "react-icons/fi";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// --- PRICING DATA STRUCTURE ---
const pricingCategories = [
  {
    id: "automation",
    title: "AI & Automation",
    icon: <FiCpu className="text-xl" />,
    sub: "Category_01 // Intelligent Systems",
    plans: [
      {
        name: "Starter Automation",
        priceINR: "25,000",
        priceUSD: "300",
        type: "one-time",
        features: ["WhatsApp automation", "Lead capture workflow", "Email automation", "CRM integration", "Basic AI assistant"],
        bestFor: "Local businesses, coaches, clinics, gyms",
        cta: "Book Free Strategy Call",
        popular: false
      },
      {
        name: "Growth Automation System",
        priceINR: "80,000",
        priceUSD: "1,000",
        type: "one-time",
        features: ["AI workflows", "CRM automation", "Sales pipeline automation", "Internal workflows", "Customer onboarding", "Advanced integrations"],
        bestFor: "Scaling businesses, agencies, e-commerce brands",
        cta: "Schedule Discovery Call",
        popular: true
      },
      {
        name: "Enterprise AI Systems",
        priceINR: "Custom",
        priceUSD: "Custom",
        type: "enterprise",
        features: ["AI agents", "RAG systems", "Internal copilots", "Enterprise workflow systems", "Custom LLM infrastructure"],
        bestFor: "High-scale operations & corporate networks",
        cta: "Request Proposal",
        popular: false
      }
    ]
  },
  {
    id: "web",
    title: "Website Development",
    icon: <FiGlobe className="text-xl" />,
    sub: "Category_02 // Presentation Layers",
    plans: [
      {
        name: "Business Website",
        priceINR: "20,000",
        priceUSD: "250",
        type: "one-time",
        features: ["Responsive design", "SEO setup", "Fast loading speeds", "Contact forms", "Analytics integration"],
        bestFor: "Local businesses, startups, creators",
        cta: "Book Free Strategy Call",
        popular: false
      },
      {
        name: "Growth Website",
        priceINR: "80,000",
        priceUSD: "1,000",
        type: "one-time",
        features: ["Custom UI/UX structural design", "Fluid micro-animations", "CMS infrastructure", "Conversion optimization", "Integrated lead funnels"],
        bestFor: "Startups, premium brands, SaaS systems",
        cta: "Schedule Discovery Call",
        popular: true
      },
      {
        name: "Enterprise Web Platform",
        priceINR: "Custom",
        priceUSD: "Custom",
        type: "enterprise",
        features: ["Advanced dashboards", "Multi-user permissions", "Complex backend pipelines", "Deep third-party integrations", "Scalable cloud infrastructure"],
        bestFor: "Complex software & scale-ready frameworks",
        cta: "Request Proposal",
        popular: false
      }
    ]
  },
  {
    id: "app-saas",
    title: "Mobile & SaaS Engineering",
    icon: <FiSmartphone className="text-xl" />,
    sub: "Category_03 // Application Nodes",
    plans: [
      {
        name: "MVP Mobile App",
        priceINR: "1,50,000",
        priceUSD: "2,000",
        type: "one-time",
        features: ["Cross-platform (iOS + Android)", "Secure Authentication", "Core API Integration", "Central Admin Panel", "Basic Backend Ecosystem"],
        bestFor: "Early stage startups validation",
        cta: "Schedule Discovery Call",
        popular: false
      },
      {
        name: "Startup SaaS MVP",
        priceINR: "2,50,000",
        priceUSD: "3,000",
        type: "one-time",
        features: ["Multi-tenant architecture", "Subscription Engines", "Advanced User Dashboards", "Comprehensive Admin Matrix", "Secure Data Pipelines"],
        bestFor: "SaaS founders aiming for high traction",
        cta: "Schedule Discovery Call",
        popular: true
      },
      {
        name: "Scalable Production App",
        priceINR: "5,00,000",
        priceUSD: "6,000",
        type: "one-time",
        features: ["Scalable decoupled backend", "Advanced Subscriptions", "Offline synchronization", "Deep telemetry analytics", "Intelligent push systems"],
        bestFor: "Established production deployments",
        cta: "Request Proposal",
        popular: false
      }
    ]
  },
  {
    id: "marketing-seo",
    title: "SEO & Growth Engine",
    icon: <FiTrendingUp className="text-xl" />,
    sub: "Category_04 // Performance Fabric",
    plans: [
      {
        name: "Local SEO Protocol",
        priceINR: "15,000",
        priceUSD: "200",
        type: "monthly",
        features: ["Google Business optimization", "Local keyword targeting", "Citation matrix", "Technical SEO foundational basics"],
        bestFor: "Geocentric businesses & local services",
        cta: "Book Free Strategy Call",
        popular: false
      },
      {
        name: "Starter Growth Marketing",
        priceINR: "25,000",
        priceUSD: "300",
        type: "monthly",
        features: ["Meta ads optimization", "Basic high-end creative templates", "Analytics setup", "Targeted lead generation campaigns"],
        bestFor: "Startups looking to build immediate data pipelines",
        cta: "Schedule Discovery Call",
        popular: false
      },
      {
        name: "Growth SEO Framework",
        priceINR: "40,000",
        priceUSD: "500",
        type: "monthly",
        features: ["Comprehensive content strategy", "Premium backlink authority matrix", "Advanced technical parameters", "Digital footprint building"],
        bestFor: "Brands wanting sustainable compound loops",
        cta: "Schedule Discovery Call",
        popular: true
      }
    ]
  }
];

const retainers = [
  { name: "Website Maintenance", inr: "8,000 – 25,000", usd: "100 – 300" },
  { name: "SEO Optimization Engine", inr: "15,000 – 1,20,000", usd: "200 – 1,500" },
  { name: "AI Automation Maintenance", inr: "20,000 – 2,00,000", usd: "250 – 2,500" },
  { name: "Performance Marketing Ecosystem", inr: "25,000 – 3,00,000", usd: "300 – 4,000" }
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <main className="min-h-screen w-full bg-[#030303] text-white selection:bg-[#00DFD8]/20 selection:text-[#00DFD8] pb-32 pt-28 relative overflow-hidden">
      <Navbar />

      {/* --- CYBER BACKGROUND GRAPHICS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.06]" 
          style={{ 
            backgroundImage: `linear-gradient(#ff0080 0.5px, transparent 0.5px), linear-gradient(90deg, #00DFD8 0.5px, transparent 0.5px)`,
            backgroundSize: '100px 100px' 
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0%,#030303_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        
        {/* --- HERO HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 rounded-none border-l-2 border-[#ff0080] bg-gradient-to-r from-[#ff0080]/10 to-transparent px-4 py-1.5">
              <span className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-zinc-400">
                Financial Protocol // Fiscal Year 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
              PREMIUM GROWTH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] via-[#8a2be2] to-[#00DFD8]">
                ARCHITECTURES
              </span>
            </h1>
            <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
              Transparent scaling matrices for modern operations. We specialize in engineering <span className="text-white font-normal">AI-powered growth systems</span> tailored to your computational demands.
            </p>
          </div>

          {/* CURRENCY TOGGLE SYSTEM */}
          <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-white/5 w-fit">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-widest transition-all ${
                currency === "INR" ? "bg-gradient-to-r from-[#ff0080]/20 to-[#8a2be2]/20 border border-[#ff0080]/40 text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-widest transition-all ${
                currency === "USD" ? "bg-gradient-to-r from-[#8a2be2]/20 to-[#00DFD8]/20 border border-[#00DFD8]/40 text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* --- MATRIX SEGMENTS (MAIN LAYERS) --- */}
        {pricingCategories.map((category) => (
          <div key={category.id} className="mb-24">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-4">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10 text-[#00DFD8]">
                {category.icon}
              </div>
              <div>
                <h2 className="text-xl font-black tracking-[0.15em] uppercase text-white">{category.title}</h2>
                <p className="text-[10px] text-zinc-500 font-mono mt-0.5">{category.sub}</p>
              </div>
            </div>

            {/* Dynamic Grid Layout */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {category.plans.map((plan, idx) => {
                const isCustom = plan.type === "enterprise";
                const displayPrice = currency === "INR" ? `₹${plan.priceINR}` : `$${plan.priceUSD}`;
                const monthlySuffix = plan.type === "monthly" ? "/mo" : "";

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border transition-all duration-500 p-6 bg-zinc-950/30 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] ${
                      plan.popular 
                        ? "border-[#8a2be2]/40 shadow-[0_0_40px_rgba(138,43,226,0.15)]" 
                        : "border-white/5 hover:border-white/10"
                    }`}
                  >
                    {/* Top Glow Highlights */}
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                      plan.popular ? "via-[#8a2be2] opacity-100" : "via-[#00DFD8]"
                    }`} />

                    <div>
                      {/* Top Meta Line */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                          {plan.type === "one-time" ? "Deployment Protocol" : isCustom ? "Custom Array" : "Continuous Sync"}
                        </span>
                        {plan.popular && (
                          <span className="text-[9px] font-mono uppercase bg-gradient-to-r from-[#ff0080] to-[#8a2be2] px-2.5 py-0.5 rounded-full font-bold tracking-wider text-white shadow-lg">
                            Highly Scalable
                          </span>
                        )}
                      </div>

                      {/* Plan Title */}
                      <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#00DFD8] transition-colors">
                        {plan.name}
                      </h3>

                      {/* Pricing Statement Layer */}
                      <div className="my-5 pb-5 border-b border-white/5 flex items-baseline gap-1">
                        {isCustom ? (
                          <span className="text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                            Custom Array
                          </span>
                        ) : (
                          <>
                            <span className="text-xs text-zinc-500 font-mono font-medium tracking-tight mr-1">Starting at</span>
                            <span className="text-4xl font-mono font-black tracking-tighter text-white">
                              {displayPrice}
                            </span>
                            <span className="text-sm font-mono text-zinc-500 ml-1">{monthlySuffix}</span>
                          </>
                        )}
                      </div>

                      {/* Best For Targeting Block */}
                      <p className="text-xs font-light text-zinc-400 mb-6 bg-white/5 px-3 py-2 border border-white/5 rounded-xl">
                        <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-0.5 tracking-wider">Optimal Client Profile:</span>
                        {plan.bestFor}
                      </p>

                      {/* System Feature Iteration */}
                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-xs text-zinc-400 font-light">
                            <FiCheck className={`mt-0.5 flex-shrink-0 text-sm ${plan.popular ? "text-[#8a2be2]" : "text-[#00DFD8]"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actionable Premium Interactive CTA */}
                    <button className={`group/btn relative w-full h-12 overflow-hidden rounded-xl border font-mono text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                      plan.popular 
                        ? "bg-white text-black border-white hover:bg-black hover:text-white" 
                        : "bg-black text-white border-white/10 hover:border-white"
                    }`}>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {plan.cta} <FiArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}

        {/* --- RETAINERS & SYSTEM MAINTENANCE COMPONENT --- */}
        <div className="mt-28 border border-white/5 bg-gradient-to-br from-zinc-950/40 via-zinc-950/20 to-transparent rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_100%_0%,rgba(0,223,216,0.05),transparent_70%)] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-4 rounded-none border-l-2 border-[#00DFD8] bg-gradient-to-r from-[#00DFD8]/10 to-transparent px-4 py-1">
                  <span className="text-[9px] font-mono font-black uppercase tracking-[0.3em] text-zinc-400">
                    Sustained Architecture Maintenance
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4">
                  RECURRING INTEGRATED <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00DFD8] to-[#8a2be2]">
                    RETAINER PLANS
                  </span>
                </h2>
                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  Protect infrastructure velocity, continuous indexing optimizations, and rapid framework adjustments with active recurring pipelines. Ideal for operational compound gains.
                </p>
              </div>

              <div className="flex flex-col gap-3 font-mono text-[11px] text-zinc-500 border-t border-white/5 pt-6">
                <div className="flex items-center gap-2">
                  <FiClock className="text-[#00DFD8]" /> <span>Deployment Pipeline SLA: Priority Support Assured</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiShield className="text-[#8a2be2]" /> <span>Milestone Structural Terms Applied: 50% / 30% / 20%</span>
                </div>
              </div>
            </div>

            {/* Retainer Price Board Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {retainers.map((item, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-white tracking-tight block mb-3">
                    {item.name}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">Starting range</span>
                    <span className="text-lg font-mono font-black text-white">
                      {currency === "INR" ? `₹${item.inr}` : `$${item.usd}`}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 ml-1">/mo</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- HIGH-SCALE CONTACT MATRIX (CONTACT US OVERVIEW) --- */}
        <div className="mt-16 text-center max-w-xl mx-auto border-t border-white/5 pt-16">
          <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-3">Looking for specialized architecture?</p>
          <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
            We actively engineer high-scale corporate systems, custom enterprise ERP platforms, intricate AI agent ecosystems, and advanced Cloud automation frameworks under direct customized agreements.
          </p>
          <button className="inline-flex items-center gap-3 text-xs font-mono font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group">
            Consult Technical Director <FiArrowRight className="transition-transform group-hover:translate-x-1 text-[#ff0080]" />
          </button>
        </div>

        <Footer />
      </div>
    </main>
  );
}