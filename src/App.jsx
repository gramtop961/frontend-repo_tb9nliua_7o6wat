import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Insights from "./components/Insights";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200">
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
