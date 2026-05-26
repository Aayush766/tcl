"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  Variants,
} from "framer-motion";

import {
  FiCode,
  FiCpu,
  FiZap,
  FiLayout,
  FiSearch,
  FiMessageSquare,
  FiArrowUpRight,
  FiLayers,
} from "react-icons/fi";

import { MouseEvent } from "react";
import Navbar from "../../../components/layout/navbar";

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  size: string;
  slug: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    title: "Website Development",
    slug: "website-development",
    desc: "Fast, reliable, and high-performance websites built for your business.",
    icon: <FiCode />,
    color: "#ff0099",
    size: "md:col-span-2",
    details: [
      "Modern React & Next.js frameworks",
      "Clean, premium, and responsive designs",
      "Smooth animations and user experiences",
    ],
  },
  {
    title: "AI Integration",
    slug: "ai-integration",
    desc: "Adding smart AI features directly into your current business tools.",
    icon: <FiCpu />,
    color: "#8a2be2",
    size: "md:col-span-1",
    details: [
      "Custom ChatGPT & LLM setups",
      "Smart data search systems",
      "AI-powered internal features",
    ],
  },
  {
    title: "AI Automation",
    slug: "ai-automation",
    desc: "Automating repetitive daily tasks to save your team hours of work.",
    icon: <FiZap />,
    color: "#00dbde",
    size: "md:col-span-1",
    details: [
      "Custom workflow automation",
      "Smart data entry and processing",
      "Automating business logic steps",
    ],
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    desc: "Building scalable software products ready for your subscribers.",
    icon: <FiLayout />,
    color: "#ff0099",
    size: "md:col-span-1",
    details: [
      "User account & dashboard systems",
      "Secure subscription billing (Stripe)",
      "Flexible management portals",
    ],
  },
  {
    title: "SEO Optimization",
    slug: "seo-optimization",
    desc: "Improving your search engine rankings to bring in more organic traffic.",
    icon: <FiSearch />,
    color: "#8a2be2",
    size: "md:col-span-2",
    details: [
      "Structured schema setup",
      "Fast loading speeds for Google",
      "Performance tracking analytics",
    ],
  },
  {
    title: "AI Chatbots",
    slug: "ai-chatbots",
    desc: "Smart customer support bots that engage visitors and capture leads.",
    icon: <FiMessageSquare />,
    color: "#00dbde",
    size: "md:col-span-1",
    details: [
      "24/7 intelligent automated replies",
      "Instant lead capture tools",
      "Multi-platform integration options",
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-[#030303] text-white selection:bg-[#00DFD8]/20 selection:text-[#00DFD8] pb-32 pt-28 relative overflow-hidden">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#ffffff10 0.5px, transparent 0.5px), linear-gradient(90deg, #ffffff10 0.5px, transparent 0.5px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent_0%,#030303_80%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-fuchsia-600 to-transparent" />

              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-fuchsia-500">
                What We Offer // Services
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase">
              OUR <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-zinc-100 to-zinc-500">
                SERVICES.
              </span>
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl pt-2">
              Modern digital solutions built to help your business grow.
            </p>
          </div>

          <div className="lg:text-right flex-shrink-0">
            <p className="max-w-[280px] text-xs font-mono uppercase tracking-widest text-zinc-500 leading-relaxed lg:ml-auto border-l-2 lg:border-l-0 lg:border-r-2 border-zinc-800 pl-4 lg:pl-0 lg:pr-4">
              High-quality design and development tailored to your goals.
            </p>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-950/40 to-transparent p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#00dbde]">
                <FiLayers /> READY TO START
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mt-2">
                Have a specific project in mind?
              </h3>
            </div>

            <button className="relative overflow-hidden h-14 px-8 rounded-2xl bg-white text-black font-bold tracking-tight text-sm flex items-center gap-3">
              Get In Touch
              <FiArrowUpRight />
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: 300,
    damping: 40,
  });

  const glowY = useSpring(mouseY, {
    stiffness: 300,
    damping: 40,
  });

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <Link href={`/services/${service.slug}`} className={service.size}>
      <motion.div
        variants={itemVariants}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -4 }}
        className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/20 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-zinc-950/40 cursor-pointer h-full"
      >
        {/* Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                500px circle at ${glowX}px ${glowY}px,
                ${service.color}12,
                transparent 75%
              )
            `,
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between min-h-[320px]">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900/60 text-xl text-white transition-all duration-500 group-hover:scale-110"
              style={{
                border: `1px solid ${service.color}25`,
              }}
            >
              {service.icon}
            </div>

            <span className="font-mono text-[10px] tracking-widest text-zinc-600">
              0{index + 1}
            </span>
          </div>

          {/* Content */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
              {service.title}
            </h2>

            <p className="max-w-[260px] text-sm leading-relaxed text-zinc-400 mb-6 font-light">
              {service.desc}
            </p>

            <ul className="space-y-2 mb-8 opacity-0 max-h-0 pointer-events-none group-hover:opacity-100 group-hover:max-h-[100px] group-hover:pointer-events-auto transition-all duration-700 ease-in-out">
              {service.details.map((detail, dIdx) => (
                <li
                  key={dIdx}
                  className="text-[11px] font-mono text-zinc-500 flex items-center gap-2"
                >
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{
                      backgroundColor: service.color,
                    }}
                  />

                  {detail}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-4 flex items-center gap-2 overflow-hidden">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors duration-300">
                Learn More

                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div
                className="h-[1px] flex-1 translate-x-[-100%] transition-transform duration-500 ease-out group-hover:translate-x-0"
                style={{
                  backgroundColor: service.color,
                }}
              />
            </div>
          </div>
        </div>

        {/* Top Border Accent */}
        <div
          className="absolute top-0 left-0 h-[1.5px] w-0 transition-all duration-700 ease-out group-hover:w-full"
          style={{
            backgroundColor: service.color,
          }}
        />
      </motion.div>
    </Link>
  );
}