import { notFound } from "next/navigation";
import { servicesData } from "../../../../config/servicesData"; // Ensure this relative path matches your config location
import Link from "next/link";
import { Metadata } from "next";
import { 
  FiArrowLeft, FiCheck, FiHelpCircle 
} from "react-icons/fi";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

// Explicitly type params as a Promise for Next.js App Router compliance
interface PageParams {
  params: Promise<{ slug: string }>;
}

// 1. GENERATE DYNAMIC METADATA FOR SEO (Asynchronous Unwrapping)
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: "website",
    }
  };
}

// 2. STATIC PATH GENERATION FOR MAX SPEED (SSG)
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

// 3. MAIN COMPONENT (Asynchronous Unwrapping)
export default async function ServiceTemplatePage({ params }: PageParams) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  // Route protection - trigger 404 if path variant doesn't exist
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-fuchsia-500/30 overflow-hidden relative pt-24">
      <Navbar/>
      
      {/* BACKGROUND ARCHITECTURAL MESH */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 blur-3xl rounded-full opacity-20 animate-pulse"
          style={{ backgroundColor: service.color }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 relative z-10 space-y-40">
        
        {/* BACK TO CONSOLE NAV */}
        <div className="mb-10">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-white transition-colors uppercase"
          >
            <FiArrowLeft /> Back to Services
          </Link>
        </div>

        {/* 1. HERO SECTION */}
        <section className="space-y-8 max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12" style={{ backgroundColor: service.color }} />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.6em]" style={{ color: service.color }}>
              {service.tag}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            {service.title}.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
            {service.subtitle}
          </p>

          <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
            {service.heroDesc}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/book" passHref>
              <button className="relative group overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-black transition-transform hover:scale-105 active:scale-95">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Book Free Strategy Call</span>
                <div className="absolute inset-0 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" style={{ backgroundImage: `linear-gradient(90deg, ${service.color}, #00DFD8)` }} />
              </button>
            </Link>
          </div>
        </section>

        {/* 2. LIVE METRICS LAYER */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm">
          {service.metrics.map((metric: any, idx: number) => (
            <div key={idx} className="bg-zinc-950/40 p-8 text-center space-y-2">
              <div className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: service.color }}>{metric.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{metric.label}</div>
            </div>
          ))}
        </section>

        {/* 3. PROBLEM VS SOLUTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-10">
          {/* Problem Block */}
          <div className="border border-white/5 bg-zinc-950/20 rounded-[2.5rem] p-10 space-y-6">
            <div className="text-[10px] font-mono text-rose-500 uppercase tracking-widest flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping" /> The Problem
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">{service.problem.title}</h3>
            <ul className="space-y-4 pt-2">
              {service.problem.points.map((point: string, idx: number) => (
                <li key={idx} className="flex gap-3 text-sm text-zinc-500 leading-relaxed items-start">
                  <span className="text-rose-500 font-mono mt-0.5">✕</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Block */}
          <div className="border border-white/5 bg-zinc-950/20 rounded-[2.5rem] p-10 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transition-transform duration-700 group-hover:scale-150 rounded-full blur-2xl" style={{ backgroundColor: service.color }} />
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Our Solution
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">{service.solution.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{service.solution.desc}</p>
          </div>
        </section>

        {/* 4. KEY DELIVERABLES PACK */}
        <section className="space-y-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">// Features</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">CORE CAPABILITIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.features.map((feature: any, idx: number) => (
              <div key={idx} className="border border-white/5 bg-zinc-950/30 rounded-3xl p-8 hover:border-white/10 transition-colors space-y-4">
                <div className="text-xs font-mono text-zinc-600">0{idx + 1}</div>
                <h4 className="text-lg font-bold text-white tracking-tight">{feature.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRICING ARCHITECTURE */}
        <section className="space-y-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">// Pricing</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">TRANSPARENT PRICING PLANS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {service.pricing.map((plan: any, idx: number) => (
              <div key={idx} className="border border-white/5 bg-zinc-950/20 backdrop-blur-md rounded-[2.5rem] p-10 flex flex-col justify-between space-y-8 relative overflow-hidden group hover:border-white/10 transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.name}</h3>
                    <span className="text-[10px] font-mono text-zinc-600">PLAN // 0{idx + 1}</span>
                  </div>
                  <div className="text-3xl font-black tracking-tight text-white">{plan.price}</div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{plan.desc}</p>
                  <div className="h-[1px] bg-white/5 my-4" />
                  <ul className="space-y-3">
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs text-zinc-400">
                        <FiCheck className="text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/book" passHref className="w-full">
                  <button className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white text-zinc-300 hover:text-black font-mono text-[10px] uppercase tracking-widest font-bold transition-all">
                    Get Started With This Plan
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TECHNOLOGY MATRIX STACK */}
        <section className="space-y-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">// Tools Stack</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">OUR DEVELOPMENT STACK</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech: any, idx: number) => (
              <div 
                key={idx} 
                className="px-5 py-3 border border-white/5 bg-zinc-950/50 rounded-xl font-mono text-[10px] text-zinc-400 flex items-center gap-3 uppercase tracking-wider"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: service.color }} />
                <span>{tech.name}</span>
                <span className="text-zinc-700 text-[9px]">// {tech.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. REVENUE CTA TERMINAL */}
        <section className="p-12 border border-white/5 bg-zinc-900/10 backdrop-blur-3xl rounded-[3rem] flex flex-col items-center text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> 
              Bookings Are Now Open
            </div>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Ready to grow your digital presence?</h3>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-md mx-auto">
              Let's build modern digital products, remove manual bottlenecks from your workflows, and launch long-term growth systems.
            </p>
            <div className="pt-4">
              <Link href="/book" passHref>
                <button className="group relative px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.4em] rounded-full hover:scale-105 transition-transform active:scale-95 overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Book A Strategy Call</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: `linear-gradient(90deg, ${service.color}, #00DFD8)` }} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. ALGORITHMIC FAQ GRAPH */}
        <section className="space-y-12 max-w-4xl">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">// Questions</div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="border-b border-white/5 py-6 space-y-3">
                <h4 className="text-base font-bold text-white flex gap-3 items-center">
                  <FiHelpCircle className="text-zinc-600 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}