const countries = [
  "USA",
  "UK",
  "Canada",
  "Dubai",
  "Australia",
  "India",
];

export default function GlobalMap() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-cyan-400">
            Global Presence
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Scaling Businesses Worldwide
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {countries.map((country) => (
            <div
              key={country}
              className="glass rounded-3xl p-10 text-center"
            >
              <h3 className="text-4xl font-black text-cyan-400">
                {country}
              </h3>

              <p className="mt-4 text-zinc-400">
                Active AI Growth Systems
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}