import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] text-white p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,#ff7b7b_0%,#ffb199_20%,#ffd36e_40%,#a7ffcf_60%,#8ec5ff_80%,#ff7b7b_100%)] opacity-[0.06] blur-2xl" />
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to see Palmist in action?
          </h3>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Deploy AI-powered behavior prediction in days, not months. Start with a guided demo tailored to your product.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90"
            >
              Buy now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5"
            >
              Start free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
