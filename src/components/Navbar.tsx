import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <svg viewBox="0 0 40 40" className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="20" cy="20" r="6" />
            <circle cx="20" cy="20" r="14" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1="20" y1="2" x2="20" y2="8" transform={`rotate(${i * 45} 20 20)`} />
            ))}
          </svg>
          <span className="font-display font-bold text-primary tracking-wider text-sm sm:text-base">
            ADJI NUR FADILAH
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 text-xs font-semibold tracking-widest uppercase transition-colors relative ${
                active === s.id ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-semibold tracking-widest uppercase border-b border-border ${
                active === s.id ? "text-primary bg-accent" : "text-muted-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
