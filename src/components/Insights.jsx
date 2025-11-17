import { useEffect, useState } from "react";
import { Activity, ArrowUpRight } from "lucide-react";

export default function Insights() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    const seed = [
      { metric: "Conversion likelihood", value: 0.82, delta: "+6%", tag: "High" },
      { metric: "Drop-off step", value: 2, delta: "-1 step", tag: "Checkout" },
      { metric: "Churn risk cohort", value: 0.28, delta: "-4%", tag: "New Users" },
      { metric: "Feature affinity", value: 0.67, delta: "+3%", tag: "Reports" },
    ];
    setInsights(seed);
  }, []);

  return (
    <section id="insights" className="py-20 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Live behavioral insights
            </h2>
            <p className="mt-2 text-neutral-400">Signal-rich predictions you can act on instantly.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80">
            Explore the dashboard <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((i) => (
            <div key={i.metric} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] relative overflow-hidden">
              <div className="absolute -inset-6 opacity-[0.05] bg-[conic-gradient(from_140deg_at_50%_50%,#ff7b7b_0%,#ffb199_16%,#ffd36e_32%,#a7ffcf_50%,#8ec5ff_68%,#ff7b7b_100%)]" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs text-neutral-400">{i.metric}</span>
                <Activity className="h-4 w-4 text-white/80" />
              </div>
              <div className="relative mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-white">
                  {typeof i.value === "number" ? (i.value * 100).toFixed(0) + "%" : i.value}
                </span>
                <span className="text-xs text-emerald-400">{i.delta}</span>
              </div>
              <div className="relative mt-4">
                <div className="h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 rounded-full bg-white" style={{ width: typeof i.value === "number" ? i.value * 100 + "%" : "70%" }} />
                </div>
                <div className="mt-2 inline-flex items-center rounded-full bg-white/[0.08] text-white px-2 py-0.5 text-xs font-medium">
                  {i.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
