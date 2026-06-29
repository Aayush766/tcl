"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FiHeart, 
  FiBookOpen, 
  FiTrendingUp, 
  FiCoffee, 
  FiHome, 
  FiBriefcase 
} from "react-icons/fi";

const targetAudiences = [
  {
    icon: <FiHeart />,
    title: "Clinics & Medical",
    description: "Get more premium bookings with high-performance modern websites and integrated automation.",
    color: "#ff0099",
  },
  {
    icon: <FiBookOpen />,
    title: "Coaching Institutes",
    description: "Automate student admissions pipelines and seamlessly convert inquiries into digital enrollments.",
    color: "#bf5af2",
  },
  {
    icon: <FiTrendingUp />,
    title: "Gyms & Fitness",
    description: "Fill your membership ecosystem faster with high-converting landing pages built for scale.",
    color: "#0a84ff",
  },
  {
    icon: <FiCoffee />,
    title: "Cafes & Restaurants",
    description: "Maximize online visibility, manage reservations, and capture high-intent local foot traffic.",
    color: "#ff0099",
  },
  {
    icon: <FiHome />,
    title: "Real Estate Agents",
    description: "Capture verified, quality investor leads and close high-ticket property acquisitions consistently.",
    color: "#bf5af2",
  },
  {
    icon: <FiBriefcase />,
    title: "Local Businesses",
    description: "Dominate local lookup results, build pristine trust, and turn search volume into revenue.",
    color: "#0a84ff",
  },
];

export default function WhoWeHelp() {
  return (
    <section id="audiences" className="relative bg-[#030303] py-32 px-6 overflow-hidden text-white selection:bg-fuchsia-500/30">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }} 
        />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-fuchsia-600/5 to-purple-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.35em] font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                Target Industries
              </span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Tailored Ecosystems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#bf5af2] to-[#0a84ff]">
                Built For Your Niche.
              </span>
            </h2>
          </div>
          
          <div className="border-l border-zinc-800 pl-4 md:text-left">
            <p className="max-w-[320px] text-sm text-zinc-400 font-medium leading-relaxed">
              We design specialized client acquisition mechanics modeled around the specific operational realities of your industry.
            </p>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {targetAudiences.map((audience, idx) => (
            <AudienceCard key={idx} audience={audience} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AudienceCard({ audience }: { audience: typeof targetAudiences[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-800"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${audience.color}10, transparent 75%)`,
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-10">
        <div className="flex items-start justify-between w-full">
          <div 
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900/50 shadow-[inset_0_1px_0px_rgba(255,255,255,0.05)] text-lg transition-all duration-300 group-hover:scale-105"
            style={{ border: `1px solid ${audience.color}30`, color: audience.color }}
          >
            {audience.icon}
          </div>
        </div>

        <div className="w-full text-left">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
            {audience.title}
          </h3>
          <p className="max-w-[290px] text-xs sm:text-sm leading-relaxed text-zinc-400 font-medium transition-colors duration-300 group-hover:text-zinc-300">
            {audience.description}
          </p>
        </div>
      </div>

      <div 
        className="absolute top-0 left-0 h-[1.5px] w-0 transition-all duration-300 ease-out group-hover:w-full opacity-70"
        style={{ backgroundColor: audience.color }}
      />
    </motion.div>
  );
}