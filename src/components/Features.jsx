import { Cpu, LineChart, Radar, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Behavior Models",
    desc: "Train on your product data to forecast intent, churn, and conversion paths.",
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    desc: "Stream events and watch predictions update live across journeys.",
  },
  {
    icon: Radar,
    title: "Data Intelligence",
    desc: "Blend qualitative and quantitative signals into a single intelligence layer.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first",
    desc: "Enterprise-grade governance, encryption, and regional residency by default.",
  },
];

export default function Features() {
  return (
    <section id="product" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Built for modern product teams
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Everything you need to understand, predict, and influence human behavior—without piecing together 10 different tools.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/[0.05] transition"
            >
              <div className="h-10 w-10 rounded-md bg-white text-black flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
