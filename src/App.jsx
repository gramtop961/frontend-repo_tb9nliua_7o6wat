import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Insights from "./components/Insights";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 relative">
      {/* Global background auras */}
      <div className="pointer-events-none select-none absolute inset-0 -z-20">
        <div className="absolute -top-56 -left-40 h-[720px] w-[720px] rounded-full opacity-[0.10] blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute -bottom-72 -right-40 h-[900px] w-[900px] rounded-full opacity-[0.07] blur-3xl bg-[conic-gradient(from_140deg_at_50%_50%,#ff7b7b_0%,#ffb199_16%,#ffd36e_32%,#a7ffcf_50%,#8ec5ff_68%,#ff7b7b_100%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Insights />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Palmist. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
