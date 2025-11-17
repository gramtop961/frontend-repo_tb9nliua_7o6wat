import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28" id="home">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#0a0a0a]" />
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none select-none">
          {/* Aura gradients */}
          <div className="absolute -top-40 -left-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="absolute -top-32 -right-24 h-[620px] w-[620px] rounded-full bg-[conic-gradient(from_120deg_at_50%_50%,#ff7b7b_0%,#ffb199_20%,#ffd36e_40%,#a7ffcf_60%,#8ec5ff_80%,#ff7b7b_100%)] opacity-[0.06] blur-3xl" />
        </div>
      </div>

      {/* Top eye line */}
      <div className="absolute left-0 right-0 top-16 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Predict human behavior with precision.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-neutral-300 max-w-2xl"
            >
              Palmist blends AI, data intelligence, and real-time analytics to decode how customers move, think, and convert—so you can design smarter experiences and drive growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-white/90"
              >
                Buy Palmist
              </a>
              <a
                href="#insights"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-white font-medium hover:bg-white/5"
              >
                Explore insights
              </a>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-sm text-neutral-400">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
                ))}
              </div>
              Trusted by product, growth, and research teams worldwide
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] ring-1 ring-black/20"
            >
              <div className="absolute -inset-x-6 -top-6 h-32 bg-[conic-gradient(from_120deg_at_50%_50%,#ff7b7b_0%,#ffb199_20%,#ffd36e_40%,#a7ffcf_60%,#8ec5ff_80%,#ff7b7b_100%)] opacity-[0.06] blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Engagement", value: "+37%" },
                  { label: "Churn Risk", value: "-22%" },
                  { label: "LTV Uplift", value: "+19%" },
                  { label: "Prediction", value: "98.2%" },
                ].map((c) => (
                  <div key={c.label} className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs text-neutral-400">{c.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{c.value}</p>
                    <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-white"
                        style={{ width: Math.min(100, Math.random() * 30 + 60) + "%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
