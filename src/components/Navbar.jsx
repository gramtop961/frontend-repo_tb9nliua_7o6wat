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
      {/* subtle luminous divider */}
      <div className="absolute inset-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-white" />
            <span className="text-sm font-medium tracking-widest uppercase text-white/90">Palmist</span>
          </a>

          {/* desktop nav in a glass pill */}
          <div className="hidden md:flex items-center">
            <div className="rounded-full border border-white/10 bg-white/[0.03] backdrop-blur px-5 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-6">
                {links.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    className="text-sm text-neutral-300 hover:text-white transition relative"
                  >
                    {l.name}
                    <span className="pointer-events-none absolute -bottom-2 left-1/2 h-px w-0 group-hover:w-4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="rounded-full px-4 py-2 text-sm font-medium text-black bg-white hover:bg-white/90 transition"
            >
              Buy now
            </a>
          </div>

          {/* mobile */}
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
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="block text-sm text-neutral-300 py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium mt-2"
                onClick={() => setOpen(false)}
              >
                Buy now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
