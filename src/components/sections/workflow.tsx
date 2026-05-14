const steps = [
  "Discovery",
  "Strategy",
  "Research",
  "UI/UX",
  "Development",
  "AI Integration",
  "SEO Optimization",
  "Testing",
  "Deployment",
  "Scaling",
  "Support",
];

export default function WorkflowTimeline() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="text-cyan-400">Workflow</p>

          <h2 className="mt-4 text-5xl font-black">
            Our Process
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="glass flex items-center gap-6 rounded-2xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-black text-black">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}