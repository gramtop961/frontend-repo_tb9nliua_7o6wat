import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-600/30 via-fuchsia-600/30 to-cyan-400/30 blur-2xl" />
          <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Ready to see Palmist in action?
          </h3>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Deploy AI-powered behavior prediction in days, not months. Start with a guided demo tailored to your product.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:bg-gray-100"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3 text-sm font-medium"
            >
              Start free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
