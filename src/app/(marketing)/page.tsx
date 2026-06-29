import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import WorkflowTimeline from "@/components/sections/workflow-timeline";
import WhoWeHelp from "@/components/sections/WhoWeHelp";

import Testimonials from "@/components/sections/testimonials";
import PricingPreview from "@/components/sections/pricing-preview";
import FAQ from "@/components/sections/faq";
import FreeConsultation from "@/components/sections/free-consultation";
import WebsiteTransformation from "@/components/sections/WebsiteTransformations";

import { FaWhatsapp } from "react-icons/fa";
import * as motion from "framer-motion/client";

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden relative">
      <Navbar />

      <Hero />

      <WhoWeHelp />

      <WebsiteTransformation />

      <ServicesGrid />

      <WorkflowTimeline />

      <PricingPreview />

      <Testimonials />

      <FAQ />

      <FreeConsultation />

      <Footer />

      {/* Floating WhatsApp Button with Reveal Text */}
      <div className="fixed bottom-6 right-6 z-[999]">
        <motion.a
          href="https://wa.me/918603850720?text=Hello%20CyberLoom%2C%20I'd%20like%20to%20know%20more%20about%20your%20services!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          initial="initial"
          whileHover="hover"
          animate="animate"
          variants={{
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="group flex items-center gap-3 rounded-full relative"
        >
          {/* Slide-out Text Label */}
          <motion.span
            variants={{
              initial: { opacity: 0, x: 15, scale: 0.9 },
              hover: { opacity: 1, x: 0, scale: 1 },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-none absolute right-16 white-space-nowrap font-sans text-xs font-semibold tracking-wider text-white uppercase bg-zinc-950/80 backdrop-blur-md border border-white/5 px-4 py-2.5 rounded-xl shadow-xl transition-all"
          >
            Contact Now
          </motion.span>

          {/* Icon Circle */}
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.08 },
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.3)] border border-white/10 backdrop-blur-sm group-hover:shadow-[0_4px_30px_rgba(37,211,102,0.5)] transition-shadow duration-300"
          >
            <FaWhatsapp size={28} />
          </motion.div>
        </motion.a>
      </div>
    </main>
  );
}