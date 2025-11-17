import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900"
            >
              Predict human behavior with precision.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 max-w-2xl"
            >
              Palmist blends AI, data intelligence, and real-time analytics to decode how customers move, think, and convert—so you can design smarter experiences and drive growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-white font-medium shadow-lg shadow-indigo-600/30 hover:opacity-95"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Start predicting
              </a>
              <a
                href="#insights"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 py-3 text-gray-800 font-medium hover:bg-gray-50"
              >
                See live insights
              </a>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 border-2 border-white" />
                ))}
              </div>
              Trusted by product, growth, and research teams worldwide
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-xl border border-white/20 bg-white/70 backdrop-blur p-4 shadow-xl ring-1 ring-black/5"
            >
              <div className="absolute -inset-x-6 -top-6 h-32 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { label: "Engagement", value: "+37%" },
                  { label: "Churn Risk", value: "-22%" },
                  { label: "LTV Uplift", value: "+19%" },
                  { label: "Prediction", value: "98.2%" },
                ].map((c) => (
                  <div key={c.label} className="rounded-lg border border-gray-100 bg-white p-4">
                    <p className="text-xs text-gray-500">{c.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-gray-900">{c.value}</p>
                    <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600" style={{ width: Math.min(100, Math.random()*30 + 60) + "%" }} />
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
