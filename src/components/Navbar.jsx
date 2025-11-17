import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Overview", href: "#home" },
    { name: "Technology", href: "#product" },
    { name: "Insights", href: "#insights" },
    { name: "Get Palmist", href: "#cta" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-white" />
            <span className="text-sm font-medium tracking-widest uppercase text-white/90">Palmist</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-neutral-300 hover:text-white transition"
              >
                {l.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="rounded-full px-4 py-2 text-sm font-medium text-black bg-white hover:bg-white/90 transition"
            >
              Buy now
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md border border-white/10 text-white"
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
                className="block text-sm text-neutral-300"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium"
            >
              Buy now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
