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
    <section id="insights" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Live behavioral insights
            </h2>
            <p className="mt-2 text-gray-600">Signal-rich predictions you can act on instantly.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-600">
            Explore the dashboard <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((i) => (
            <div key={i.metric} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{i.metric}</span>
                <Activity className="h-4 w-4 text-indigo-600" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-gray-900">
                  {typeof i.value === "number" ? (i.value * 100).toFixed(0) + "%" : i.value}
                </span>
                <span className="text-xs text-emerald-600">{i.delta}</span>
              </div>
              <div className="mt-4">
                <div className="h-1.5 w-full rounded-full bg-gray-100">
                  <div className="h-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600" style={{ width: typeof i.value === "number" ? i.value * 100 + "%" : "70%" }} />
                </div>
                <div className="mt-2 inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-2 py-0.5 text-xs font-medium">
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
