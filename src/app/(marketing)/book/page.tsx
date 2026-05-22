"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiZap, FiCalendar, FiCheck, FiArrowRight, 
  FiCpu, FiLayout, FiTrendingUp, FiCheckCircle, FiLoader 
} from "react-icons/fi";

export default function BookStrategyCall() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State Setup
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    businessType: "",
    services: [] as string[],
    biggestChallenge: "",
    budget: "",
    timeline: "",
    projectDetails: ""
  });

  const servicesList = [
    "AI Integration", "Website Development", "Mobile App Development", 
    "SaaS Development", "AI Automation", "SEO Optimization", 
    "Branding & UI/UX", "Cloud Solutions", "Custom Software"
  ];

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyezRdWieXa0SVS5hjGNAFvfCQzqpMAuPO1qBnrZ3OHSFGMr8ljteBOIjhSPSpVsVly/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          services: formData.services.join(", "),
          biggestChallenge: formData.biggestChallenge,
          budget: formData.budget,
          timeline: formData.timeline,
          projectDetails: formData.projectDetails
        }),
      }
    );

    setSubmitted(true);

    // Optional Reset
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      businessType: "",
      services: [],
      biggestChallenge: "",
      budget: "",
      timeline: "",
      projectDetails: ""
    });

  } catch (error) {
    console.error("Form error:", error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="min-h-screen bg-[#020202] text-white pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative Brand Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#FF0080]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 h-[400px] w-[400px] rounded-full bg-[#00DFD8]/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/40 px-5 py-2 backdrop-blur-md"
          >
            <FiZap className="text-[#FF0080] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Strategy Session</span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] mb-8 uppercase">
            Let’s Build the Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#00DFD8] italic">Growth Layer</span> of Your Business
          </h1>
          
          <p className="max-w-3xl text-zinc-400 text-lg sm:text-xl font-medium leading-relaxed">
            Book a free strategy session with THECYBERLOOM to discuss AI automation, high-performance websites, custom SaaS products, or scalable digital architecture tailored specifically to your core business goals.
          </p>

          {/* Quick Trust Indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/5">
            {[
              "Tailored business solutions",
              "AI-first growth systems",
              "Modern scalable tech",
              "Strategy-focused execution"
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-zinc-500">
                <FiCheck className="text-[#00DFD8] shrink-0 text-base" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MAIN INTERACTIVE WORKSPACE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT PANEL: Form Container with AnimatePresence Interface */}
          <div className="lg:col-span-7 bg-zinc-950/40 border border-white/5 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl relative">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="mb-10">
                    <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-2">Tell Us About Your Project</h2>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      The more context you provide, the better we can understand your goals, identify structural opportunities, and map out the right solution. Our engineering team reviews every submission personally.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Basic Info Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="John Smith" 
                          value={formData.fullName}
                          onChange={e => setFormData({...formData, fullName: e.target.value})}
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0080] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Company Name *</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Your company name" 
                          value={formData.companyName}
                          onChange={e => setFormData({...formData, companyName: e.target.value})}
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0080] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Work Email Address *</label>
                        <input 
                          type="email" 
                          required
                          placeholder="you@company.com" 
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0080] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Phone / WhatsApp Number *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 XXXXX XXXXX" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0080] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Business Profile Dropdown */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">What best describes your business? *</label>
                      <select 
                        required
                        value={formData.businessType}
                        onChange={e => setFormData({...formData, businessType: e.target.value})}
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-zinc-300 focus:outline-none focus:border-[#FF0080] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-zinc-950">Select business type...</option>
                        {["Startup", "Local Business", "Ecommerce", "SaaS", "Agency", "Creator Brand", "Enterprise", "Other"].map(type => (
                          <option key={type} value={type} className="bg-zinc-950">{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Multi-Select Services */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">What services are you interested in? (Select all that apply)</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicesList.map(service => {
                          const isChecked = formData.services.includes(service);
                          return (
                            <button
                              type="button"
                              key={service}
                              onClick={() => handleCheckboxChange(service)}
                              className={`flex items-center gap-3 rounded-xl border p-4 text-left text-xs font-bold transition-all ${
                                isChecked 
                                  ? "bg-gradient-to-r from-[#FF0080]/10 to-[#00DFD8]/10 border-[#00DFD8] text-white" 
                                  : "bg-zinc-900/30 border-white/5 text-zinc-400 hover:border-white/10"
                              }`}
                            >
                              <div className={`h-4 w-4 shrink-0 rounded border flex items-center justify-center text-[10px] transition-all ${
                                isChecked ? "border-[#00DFD8] bg-[#00DFD8] text-black" : "border-zinc-700"
                              }`}>
                                {isChecked && <FiCheck strokeWidth={3} />}
                              </div>
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Operational Challenges Textarea */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">What is your biggest operational challenge right now? *</label>
                      <textarea 
                        required
                        rows={3}
                        placeholder="Example: We need more consistent leads, modern automated workflows, structural speed upgrades, or AI assistant execution setups." 
                        value={formData.biggestChallenge}
                        onChange={e => setFormData({...formData, biggestChallenge: e.target.value})}
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0080] transition-colors resize-none"
                      />
                    </div>

                    {/* Project Variables (Budget & Timeline) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Estimated Budget Range *</label>
                        <select 
                          required
                          value={formData.budget}
                          onChange={e => setFormData({...formData, budget: e.target.value})}
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-zinc-300 focus:outline-none focus:border-[#FF0080] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-zinc-950">Select budget scale...</option>
                          {["Values below ₹50k", "₹50k – ₹2L", "₹2L – ₹10L", "₹10L+", "Not sure yet"].map(b => (
                            <option key={b} value={b} className="bg-zinc-950">{b}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Expected Launch Timeline *</label>
                        <select 
                          required
                          value={formData.timeline}
                          onChange={e => setFormData({...formData, timeline: e.target.value})}
                          className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-zinc-300 focus:outline-none focus:border-[#FF0080] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="bg-zinc-950">Select urgency...</option>
                          {["ASAP", "Within 30 Days", "1–3 Months", "3–6 Months", "Exploring Options"].map(t => (
                            <option key={t} value={t} className="bg-zinc-950">{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Holistic Project Details */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">Tell us about your project infrastructure</label>
                      <textarea 
                        rows={5}
                        placeholder="Describe your core product idea, operational goals, current tools, scaling limitations, or anything else important we should know." 
                        value={formData.projectDetails}
                        onChange={e => setFormData({...formData, projectDetails: e.target.value})}
                        className="w-full bg-zinc-900/50 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF0080] transition-colors resize-none"
                      />
                    </div>

                    {/* Final Action Pipeline Block */}
                    <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-6 justify-between">
                      <p className="text-[11px] text-zinc-500 font-medium max-w-xs text-center sm:text-left leading-relaxed">
                        After submitting, our team reviews your structural layout and contacts you to arrange the active session link.
                      </p>
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1px] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shrink-0"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF0080] to-[#00DFD8]" />
                        <div className="relative flex items-center justify-center gap-3 rounded-full bg-black px-10 py-5 text-xs font-black uppercase tracking-[0.2em] text-white transition-all group-hover:bg-transparent">
                          {loading ? (
                            <>
                              <FiLoader className="text-base animate-spin text-[#00DFD8]" />
                              <span>Processing Data</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Request</span>
                              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1.5" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                /* SUCCESS CONTEXT ELEMENT */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center justify-center"
                >
                  <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#FF0080]/10 to-[#00DFD8]/10 border border-[#00DFD8]/40 flex items-center justify-center mb-8">
                    <FiCheckCircle className="text-4xl text-[#00DFD8]" />
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Request Received Successfully</h2>
                  <p className="max-w-md text-zinc-500 text-sm leading-relaxed mb-8">
                    Thank you for reaching out to THECYBERLOOM. Our software engineering team will personally review your operational profile and contact you shortly with tailored next steps.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors underline underline-offset-8 decoration-zinc-700 hover:decoration-white"
                  >
                    Submit Another Protocol
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT PANEL: Authority Matrix Panel */}
          <div className="lg:col-span-5 space-y-8 sticky top-32">
            
            {/* Core Capability Pillars */}
            <div className="bg-zinc-950/20 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-md">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-500 mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF0080]" />
                System Integration Hub
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FiCpu className="text-[#FF0080]" />,
                    title: "AI Automation",
                    desc: "Automate custom workflows, dynamic customer operations, system validations, and central CRM sync logic seamlessly."
                  },
                  {
                    icon: <FiLayout className="text-[#00DFD8]" />,
                    title: "Scalable Platforms",
                    desc: "High-performance modern websites, luxury visual components, and SaaS products built cleanly for enterprise growth."
                  },
                  {
                    icon: <FiTrendingUp className="text-purple-400" />,
                    title: "Growth Systems",
                    desc: "Modern technical design architecture combined with rapid iteration engines engineered to compound conversions."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 h-10 w-10 shrink-0 bg-zinc-900 rounded-xl border border-white/5 flex items-center justify-center text-lg transition-transform group-hover:scale-105">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wide text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Companies Connect With Us */}
            <div className="bg-zinc-950/20 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-md">
              <h3 className="text-xs font-black tracking-[0.3em] uppercase text-zinc-500 mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00DFD8]" />
                Why Businesses Build With Us
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5">
                {[
                  "AI-first development",
                  "Full-stack MERN expertise",
                  "Fast sprint execution",
                  "Clean scalable patterns",
                  "Business-centric focus",
                  "Premium visual styling"
                ].map((trustItem, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 shrink-0" />
                    <span>{trustItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dynamic Telemetry Status */}
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00DFD8] opacity-30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00DFD8]" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
                  Network Capacity Status:
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#00DFD8] font-bold">
                2 Slots Available This Week
              </span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}