import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import WorkflowTimeline from "@/components/sections/workflow-timeline";

import Testimonials from "@/components/sections/testimonials";
import PricingPreview from "@/components/sections/pricing-preview";
import FAQ from "@/components/sections/faq";
import FreeConsultation from "@/components/sections/free-consultation";


export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <Navbar />

      <Hero />

      <ServicesGrid />

      <WorkflowTimeline />

      

      <PricingPreview />

      <Testimonials />

      <FAQ />

      <FreeConsultation />

      <Footer />
    </main>
  );
}