"use client";

import { motion, Variants } from "framer-motion";
import { 
  FiArrowRight, 
  FiCpu, 
  FiLayers, 
  FiSmartphone, 
  FiGlobe, 
  FiTrendingUp, 
  FiShield, 
  FiZap, 
  FiCheck, 
  FiEye,
  FiTerminal,
  FiCode
} from "react-icons/fi";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// --- ANIMATION CONFIGURATIONS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#030303] text-white selection:bg-[#00DFD8]/20 selection:text-[#00DFD8] pb-32 pt-28 relative overflow-hidden">
      <Navbar />

      {/* --- PROTOCOL BACKGROUND MATRIX --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#ff0080 0.5px, transparent 0.5px), linear-gradient(90deg, #00DFD8 0.5px, transparent 0.5px)`,
            backgroundSize: '120px 120px' 
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0%,#030303_85%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* =========================================================
            01. HERO SECTION
            ========================================================= */}
        <section className="pt-12 mb-32 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 mb-6 rounded-none border-l-2 border-[#ff0080] bg-gradient-to-r from-[#ff0080]/10 to-transparent px-4 py-1.5"
          >
            <span className="text-[9px] font-mono font-black uppercase tracking-[0.4em] text-zinc-400">
              Operational Manifesto // Core Ethos
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase mb-8"
          >
            Building the Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] via-[#8a2be2] to-[#00DFD8]">
              Infrastructure
            </span> <br />
            Behind Modern Businesses
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12"
          >
            THECYBERLOOM designs, develops, and deploys AI-powered systems, modern digital products, and scalable growth infrastructure for businesses ready to operate at the next level.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            <button className="group relative h-12 px-8 overflow-hidden rounded-xl border border-white/10 bg-white text-black font-mono text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white hover:border-white/20 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Strategy Call <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="h-12 px-8 rounded-xl border border-white/5 bg-zinc-950/40 text-zinc-400 font-mono text-xs font-black uppercase tracking-widest hover:text-white hover:border-white/20 transition-colors">
              View Services
            </button>
          </motion.div>
        </section>


        {/* =========================================================
            02. COMPANY INTRODUCTION & 03. CORE PHILOSOPHY
            ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-36 border-t border-white/5 pt-20">
          {/* Left Column: Introduction */}
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-3">01 // Identity</span>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Who We Are</h2>
            <div className="space-y-6 text-zinc-400 font-light text-base leading-relaxed">
              <p>
                <strong className="text-white font-medium">THECYBERLOOM</strong> is a modern technology and AI solutions company focused on helping businesses scale through intelligent systems, automation, and high-performance digital experiences.
              </p>
              <p>
                We combine strategy, design, engineering, and AI into one execution layer — helping companies eliminate operational friction, improve customer experience, and accelerate growth.
              </p>
              <p>
                From AI automation and SaaS platforms to websites, mobile applications, and cloud systems, we build technology designed for speed, scalability, and measurable business impact.
              </p>
            </div>
          </div>

          {/* Right Column: Philosophy (Glassmorphic Container) */}
          <div className="lg:col-span-7 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,rgba(138,43,226,0.05),transparent_70%)] pointer-events-none" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#8a2be2] block mb-3">02 // Structural Model</span>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-white">One Team. Every Layer of Your Business.</h2>
            
            <div className="space-y-4 text-sm font-light text-zinc-400 leading-relaxed">
              <p className="line-through opacity-30 text-xs font-mono">Traditional agencies work in silos.</p>
              <p className="line-through opacity-30 text-xs font-mono">Design teams focus on visuals. Developers focus on code. Marketing teams focus on traffic.</p>
              
              <div className="h-px bg-white/5 my-4" />
              
              <p className="text-white font-normal">
                THECYBERLOOM operates differently.
              </p>
              <p>
                We assemble specialized execution pods of strategists, designers, engineers, growth operators, and AI specialists around one objective: <span className="text-[#00DFD8] font-medium">your business outcome.</span>
              </p>
              <p>
                This creates faster execution, stronger alignment, and systems designed to scale predictably as your business grows.
              </p>
            </div>
          </div>
        </section>


        {/* =========================================================
            04. WHAT WE BUILD
            ========================================================= */}
        <section className="mb-36">
          <div className="mb-16">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">03 // Capabilities</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter">What We Build</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "AI Systems & Automation", desc: "Custom AI workflows, GPT integrations, internal copilots, intelligent automation systems, and operational AI infrastructure.", icon: <FiCpu className="text-[#ff0080]" /> },
              { title: "Websites & Web Platforms", desc: "Fast, conversion-focused websites and web applications engineered for performance, scalability, and modern user experience.", icon: <FiGlobe className="text-[#00DFD8]" /> },
              { title: "Mobile Applications", desc: "Native-feel iOS and Android applications designed for usability, retention, and scalable product growth.", icon: <FiSmartphone className="text-[#8a2be2]" /> },
              { title: "SaaS Platforms", desc: "Subscription-based platforms with authentication, billing dashboards, multi-tenant components, and scalable architecture.", icon: <FiLayers className="text-[#ff0080]" /> },
              { title: "Growth Infrastructure", desc: "SEO systems, automated analytics, conversion funnels, and performance systems built to systematically compound client volume.", icon: <FiTrendingUp className="text-[#00DFD8]" /> }
            ].map((build, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="p-6 rounded-2xl border border-white/5 bg-zinc-950/20 hover:border-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-lg">
                    {build.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2">{build.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{build.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>


        {/* =========================================================
            05. WHY CLIENTS CHOOSE US
            ========================================================= */}
        <section className="mb-36 border-t border-white/5 pt-20">
          <div className="mb-16">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">04 // Differentiation</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Why Businesses Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI-First Execution", desc: "We integrate modern AI systems into workflows, operations, and customer experiences to create scalable business advantages." },
              { title: "Full-Stack Capability", desc: "From strategy and architectural UX layout to heavy backend infrastructure and automations, everything operates under a single layer." },
              { title: "Business-Focused Systems", desc: "We don't build software just for the sake of writing code. We build architectures specifically aligned to yield efficiency and optimization margins." },
              { title: "Scalable Architecture", desc: "Every system is planned from day zero with computational health, strict data structure logic, and long-term maintainability in mind." },
              { title: "Fast Iteration Loops", desc: "Lean, synchronized development execution paths allow us to safely deploy updates and adjustments rapidly without sacrificing asset quality." },
              { title: "Outcome-Driven Framework", desc: "Every deployment timeline parameter maps directly to concrete operational goals rather than empty vanity metrics." }
            ].map((why, index) => (
              <div key={index} className="p-6 rounded-2xl border border-white/5 bg-zinc-950/40 relative group hover:border-white/10 transition-colors">
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 group-hover:text-[#00DFD8] transition-colors">0{index + 1}</div>
                <h3 className="text-base font-bold text-white mb-2 tracking-tight">{why.title}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{why.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* =========================================================
            06. OUR PROCESS
            ========================================================= */}
        <section className="mb-36 border-t border-white/5 pt-20">
          <div className="mb-16">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">05 // Methodology</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Our Delivery Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              { step: "Step 1", name: "Discovery", desc: "We analyze your business model, bottlenecks, growth opportunities, and operational needs." },
              { step: "Step 2", name: "Strategy", desc: "We design a technical and growth roadmap aligned with your business objectives." },
              { step: "Step 3", name: "Build", desc: "Our team develops and deploys scalable systems, products, and automation infrastructure." },
              { step: "Step 4", name: "Launch", desc: "We optimize performance, user experience, analytics, and deployment readiness." },
              { step: "Step 5", name: "Scale", desc: "Continuous optimization, automation, and growth systems designed for long-term expansion." }
            ].map((proc, index) => (
              <div key={index} className="p-5 rounded-2xl bg-zinc-950/20 border border-white/5 relative flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#ff0080] block mb-2 uppercase">{proc.step}</span>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">{proc.name}</h3>
                </div>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{proc.desc}</p>
              </div>
            ))}
          </div>
        </section>


        {/* =========================================================
            07. TECHNOLOGY STACK
            ========================================================= */}
        <section className="mb-36 bg-zinc-950/40 border border-white/5 rounded-3xl p-8 md:p-10 relative">
          <div className="max-w-2xl mb-10">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#00DFD8] block mb-2">06 // Core Infrastructure</span>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-3">Our Technology Stack</h2>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              We leverage modern frameworks, declarative paradigms, and elastic runtime platforms to construct high-speed, secure, and future-proof architectural deployments.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              "React", "Next.js", "TypeScript", "Go", "Rust", "React Native", 
              "AWS", "GCP", "Cloudflare", "OpenAI", "LangChain", "Pinecone", 
              "Stripe", "Postgres", "n8n", "Zapier"
            ].map((tech, index) => (
              <span 
                key={index}
                className="text-[10px] font-mono uppercase tracking-wider px-3.5 py-1.5 bg-white/5 rounded-lg border border-white/5 text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>


        {/* =========================================================
            08. VISION SECTION
            ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-36 border-b border-white/5 pb-20">
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">07 // Projections</span>
            <h2 className="text-2xl font-black uppercase tracking-tight">Our Vision</h2>
          </div>
          <div className="md:col-span-8 text-zinc-400 font-light text-base md:text-lg leading-relaxed space-y-4">
            <p>
              We believe the future of business belongs to companies that seamlessly combine intelligent automation, scalable digital infrastructure, and exceptional user experience.
            </p>
            <p>
              THECYBERLOOM exists to help businesses transition into that future faster. Our goal is to become the technology growth partner behind ambitious brands, startups, and modern enterprises worldwide.
            </p>
          </div>
        </section>


        {/* =========================================================
            09. TRUST / ARCHITECTURAL SHOWCASE CONCEPTS
            ========================================================= */}
        <section className="mb-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">08 // Blueprint Directory</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter">Systems We're Building</h2>
            </div>
            <p className="text-xs text-zinc-500 font-mono max-w-xs md:text-right">
              Active structural models, framework testing metrics, and live interface configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Intelligent RAG System Matrix", type: "AI Optimization", desc: "Automating knowledge retrieval pipelines using localized indexing vectors. Reduced document lookup times down to milliseconds under localized tests." },
              { title: "Premium E-Commerce Gallery Concept", type: "Web Platform", desc: "Minimalist boutique luxury interaction terminal utilizing declarative UI engines and structural image orchestration pipelines." },
              { title: "Automated Onboarding Web Hook Engine", type: "Workflow Automation", desc: "Constructing interconnected lead processing loops across custom endpoints and unified CRM records." },
              { title: "Enterprise Portal Dashboard Schema", type: "Dashboard Interface", desc: "Designing glassmorphic multi-user matrices optimized for real-time tracking logs and high data processing loads." }
            ].map((concept, index) => (
              <div key={index} className="p-6 rounded-2xl bg-zinc-950/20 border border-white/5 flex flex-col justify-between group hover:border-white/10 transition-colors">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-mono uppercase bg-zinc-900 border border-white/5 text-zinc-400 px-2 py-0.5 rounded">
                      {concept.type}
                    </span>
                    <FiTerminal className="text-xs text-zinc-600 group-hover:text-[#00DFD8] transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">{concept.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{concept.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* =========================================================
            10. FINAL CTA SECTION
            ========================================================= */}
        <section className="border border-white/5 bg-gradient-to-t from-[#ff0080]/5 via-transparent to-transparent rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030303_95%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-none">
              Ready to Build Smarter <br />
              Systems for Your Business?
            </h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">
              Whether you need AI automation, scalable software, modern digital infrastructure, or growth systems — THECYBERLOOM helps businesses move faster with technology built for scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative h-12 px-8 overflow-hidden rounded-xl bg-white text-black font-mono text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Schedule a Strategy Call <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="h-12 px-8 rounded-xl border border-white/10 bg-zinc-950/50 text-zinc-300 font-mono text-xs font-black uppercase tracking-widest hover:text-white hover:border-white transition-colors w-full sm:w-auto">
                Request Custom Proposal
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}