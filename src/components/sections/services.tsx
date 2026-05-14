const services = [
  "Website Development",
  "AI Integration",
  "AI Automation",
  "SaaS Development",
  "SEO Optimization",
  "Digital Marketing",
  "CRM/ERP Solutions",
  "AI Chatbots",
];

export default function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-cyan-400">Services</p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Enterprise AI & Growth Solutions
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="glass rounded-3xl p-8 transition hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold">
                {service}
              </h3>

              <p className="mt-4 text-zinc-400">
                High-performance scalable solutions engineered for business growth and enterprise conversion optimization.
              </p>

              <button className="mt-6 text-cyan-400">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}