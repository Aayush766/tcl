"use client";

import { useState } from "react";

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(10000);

  const revenue = visitors * 0.03 * 500;

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-[2rem] p-10">
          <div className="text-center">
            <p className="text-cyan-400">
              AI Revenue Calculator
            </p>

            <h2 className="mt-4 text-5xl font-black">
              How Much Revenue Are You Losing?
            </h2>
          </div>

          <div className="mt-12">
            <input
              type="range"
              min={1000}
              max={100000}
              value={visitors}
              onChange={(e) =>
                setVisitors(Number(e.target.value))
              }
              className="w-full"
            />

            <div className="mt-10 text-center">
              <p className="text-zinc-400">
                Estimated Monthly Revenue
              </p>

              <h3 className="mt-4 text-6xl font-black text-cyan-400">
                ${revenue.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}