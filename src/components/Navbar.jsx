import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Product", href: "#product" },
    { name: "Solutions", href: "#solutions" },
    { name: "Insights", href: "#insights" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-fuchsia-500/20" />
            <span className="text-lg font-semibold tracking-tight">Palmist</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                {l.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-700 dark:text-gray-200">Sign in</a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 hover:opacity-95"
            >
              <Sparkles className="h-4 w-4" />
              Get started
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md border border-white/20"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="block text-sm text-gray-700 dark:text-gray-200"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white"
            >
              <Sparkles className="h-4 w-4" />
              Get started
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
