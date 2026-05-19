"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTerminal, FiCpu, FiCheckCircle, FiActivity, FiLayers, FiMaximize2, FiCpu as CpuIcon } from "react-icons/fi";

interface AIProtocol {
  id: string;
  tabTitle: string;
  promptExample: string;
  simulatedOutput: string;
  metrics: { speed: string; latency: string; efficiency: string };
  tag: string;
}

const AI_PROTOCOLS: AIProtocol[] = [
  {
    id: "processing",
    tabTitle: "Data Extraction",
    tag: "MODULE_01",
    promptExample: "Analyze incoming unstructured customer feedback datasets from the last 24 hours.",
    simulatedOutput: "Analysis complete. 1,420 entries scanned. Identified 3 core optimization points: 1. Core Web Vitals delay on payment screens. 2. Automated onboarding drop-offs at step 3. 3. High demand for dark-mode UI elements. Generation payload routed to engineering pipeline.",
    metrics: { speed: "4,200 t/sec", latency: "142ms", efficiency: "99.4%" }
  },
  {
    id: "automation",
    tabTitle: "Workflow Agent",
    tag: "MODULE_02",
    promptExample: "Trigger automatic onboarding flow for new SaaS enterprise registrations.",
    simulatedOutput: "New registration detected. Initializing multi-tenant workspace architecture... Done. Generating sandbox API credentials... Done. Provisioning Stripe metered account routing... Done. Verification email dispatched via secure automated server loop.",
    metrics: { speed: "Agent System", latency: "89ms", efficiency: "100%" }
  },
  {
    id: "chat",
    tabTitle: "Support Agent",
    tag: "MODULE_03",
    promptExample: "User asking: 'How do I link my team domains to the application dashboard?'",
    simulatedOutput: "Route user to Project Layout -> Settings. Generate localized step-by-step documentation widget. Deploy context-aware response pattern: 'You can map custom multi-tenant records securely under DNS configurations inside your primary studio tab...'",
    metrics: { speed: "1,850 t/sec", latency: "210ms", efficiency: "94.2%" }
  }
];

export default function AISolutionShowcase() {
  const [activeTab, setActiveTab] = useState<AIProtocol>(AI_PROTOCOLS[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsProcessing(true);
    setDisplayedText("");
    let index = 0;
    const text = activeTab.simulatedOutput;
    
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 10); // Fast, snappy streaming velocity

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      
      {/* ================= SECTION HEADER ================= */}
      <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-5">
        <div className="p-2.5 bg-zinc-900/50 rounded-xl border border-white/10 text-[#8a2be2] shadow-[0_0_20px_rgba(138,43,226,0.15)]">
          <CpuIcon className="text-xl" />
        </div>
        <div>
          <h2 className="text-lg font-black tracking-[0.25em] uppercase text-white">Interactive AI Solutions</h2>
          <p className="text-[10px] text-zinc-500 font-mono mt-0.5 tracking-wider">Engine_v2.0 // Live System Simulations</p>
        </div>
      </div>

      {/* ================= INTERACTIVE WORKSPACE CARD ================= */}
      <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/20 backdrop-blur-xl p-6 md:p-8 hover:border-white/10 transition-all duration-500 shadow-[0_40px_100px_rgba(0,0,0,0.9)]">
        
        {/* Premium Neon Accent Header Thread */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00DFD8]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/5 pb-6 mb-8">
          <div className="flex items-center gap-3">
            <FiLayers className="text-zinc-600 text-sm" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
              Execution Protocol
            </span>
          </div>

          {/* Premium Segmented Navigation Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-900/30 p-1.5 rounded-xl border border-white/5 self-start lg:self-auto">
            {AI_PROTOCOLS.map((protocol) => {
              const isActive = activeTab.id === protocol.id;
              return (
                <button
                  key={protocol.id}
                  onClick={() => setActiveTab(protocol)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-mono transition-all duration-300 ${
                    isActive ? "text-black font-bold" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white rounded-lg shadow-[0_4px_25px_rgba(255,255,255,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{protocol.tabTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= WORKSPACE RUNTIME GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Block Layer: Core Inputs & Metrics Dashboard */}
          <div className="lg:col-span-1 flex flex-col justify-between gap-6">
            
            {/* Input Monitor */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  Payload Input
                </label>
                <span className="text-[9px] font-mono text-zinc-600 bg-zinc-900/50 px-2 py-0.5 rounded border border-white/5">
                  {activeTab.tag}
                </span>
              </div>
              <div className="w-full bg-zinc-900/20 rounded-2xl border border-white/5 p-4 min-h-[120px] flex items-start gap-3 hover:bg-zinc-900/40 transition-colors duration-300">
                <FiTerminal className="text-zinc-600 mt-0.5 flex-shrink-0 text-xs" />
                <p className="text-xs text-zinc-300 font-mono leading-relaxed select-none">
                  {activeTab.promptExample}
                </p>
              </div>
            </div>

            {/* Diagnostic Matrix Grid */}
            <div className="bg-zinc-900/10 rounded-2xl border border-white/5 p-4 space-y-4 font-mono">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <FiActivity className="text-xs text-[#00DFD8]" /> 
                  <span>Telemetry Sync</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 text-center transition-all duration-300 hover:border-white/10">
                  <p className="text-[8px] text-zinc-500 uppercase tracking-tight">Throughput</p>
                  <p className="text-xs font-bold text-white mt-1.5 tracking-tight truncate">{activeTab.metrics.speed}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 text-center transition-all duration-300 hover:border-white/10">
                  <p className="text-[8px] text-zinc-500 uppercase tracking-tight">Latency</p>
                  <p className="text-xs font-bold text-[#00DFD8] mt-1.5 tracking-tight truncate">{activeTab.metrics.latency}</p>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/40 border border-white/5 text-center transition-all duration-300 hover:border-white/10">
                  <p className="text-[8px] text-zinc-500 uppercase tracking-tight">Accuracy</p>
                  <p className="text-xs font-bold text-emerald-400 mt-1.5 tracking-tight truncate">{activeTab.metrics.efficiency}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block Layer: The Core Streaming Terminal Engine */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="w-full h-full min-h-[280px] bg-zinc-950/40 rounded-2xl border border-white/5 p-5 relative overflow-hidden font-mono flex flex-col justify-between group/terminal transition-all duration-300 hover:border-white/10 shadow-inner">
              
              {/* Top Bar Decorative Window Elements */}
              <div className="absolute top-4 right-5 flex items-center gap-4">
                <span className="text-[9px] text-zinc-600 uppercase tracking-widest hidden sm:inline">Terminal_Session</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>
              </div>

              {/* Console Output Workspace */}
              <div className="text-xs leading-relaxed text-zinc-400 select-none pr-4">
                <div className="flex items-center gap-2 text-zinc-500 mb-3 text-[11px]">
                  <span className="text-[#8a2be2] font-bold">system-core:~$</span>
                  <span>run module_diagnostic.sh</span>
                </div>
                <span className="text-zinc-600 text-[11px] block mb-4 border-b border-white/5 pb-2">
                  &gt; Initializing context-aware vector matrix loops...
                </span>
                
                {/* Active Dynamic Output Streaming Terminal Area */}
                <div className="text-zinc-200 font-light text-xs tracking-wide leading-relaxed min-h-[100px]">
                  {displayedText}
                  {isProcessing && (
                    <motion.span 
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-1.5 h-3.5 bg-[#00DFD8] ml-1 align-middle"
                    />
                  )}
                </div>
              </div>

              {/* Status Operational Footer Layout */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <AnimatePresence mode="wait">
                    {isProcessing ? (
                      <motion.div 
                        key="processing"
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        className="flex items-center gap-2 text-amber-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="uppercase font-bold tracking-widest text-[9px]">STREAMING DATA...</span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="complete"
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        className="flex items-center gap-2 text-emerald-500"
                      >
                        <FiCheckCircle className="text-xs" />
                        <span className="uppercase font-bold tracking-widest text-[9px]">PIPELINE READY</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="tracking-wider text-zinc-600 text-right">
                  CLUSTER // ENV_PROD // ID_0{activeTab.id === 'processing' ? '1' : activeTab.id === 'automation' ? '2' : '3'}
                </div>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}