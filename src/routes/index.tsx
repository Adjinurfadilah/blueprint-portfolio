import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import {
  GearDecor,
  BearingSketch,
  CaliperSketch,
  AssemblySketch,
  BracketSketch,
  ShaftSketch,
} from "@/components/BlueprintDecor";

export const Route = createFileRoute("/")({
  component: Index,
});

const skills = [
  { name: "AutoCAD", level: 5, letter: "A" },
  { name: "SolidWorks", level: 4, letter: "S" },
  { name: "Sheet Metal Drawing", level: 4, letter: "M" },
  { name: "GD&T", level: 4, letter: "G" },
  { name: "Technical Drawing", level: 5, letter: "T" },
  { name: "Manufacturing Drawing", level: 4, letter: "P" },
  { name: "Mechanical Drafting", level: 5, letter: "D" },
  { name: "Microsoft Office", level: 4, letter: "O" },
];

const projects = [
  {
    title: "Machine Bracket",
    desc: "Created complete orthographic and dimensioned mechanical drawing with full tolerancing.",
    tech: "AutoCAD · GD&T",
    sketch: <BracketSketch className="w-full h-full text-primary" />,
  },
  {
    title: "Gearbox Assembly",
    desc: "Produced exploded assembly and full manufacturing documentation set.",
    tech: "SolidWorks · Assembly Drawing",
    sketch: <AssemblySketch className="w-full h-full text-primary" />,
  },
  {
    title: "Drive Shaft",
    desc: "Generated accurate technical drawing with tolerance stack-up and GD&T annotations.",
    tech: "AutoCAD · GD&T",
    sketch: <ShaftSketch className="w-full h-full text-primary" />,
  },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />

      {/* HOME */}
      <section id="home" className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <GearDecor className="absolute -left-16 bottom-0 text-primary/15" size={280} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          {/* Photo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 border-2 border-dashed border-primary/40 rounded-full" />
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-secondary border-2 border-primary flex flex-col items-center justify-center text-center px-6">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-muted-foreground mb-2" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="9" cy="11" r="2" />
                  <path d="M3 17l5-5 4 4 3-3 6 6" />
                </svg>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Your Photo
                  <br />Here
                </p>
              </div>
              {/* dimension ticks */}
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary">⌀ 240</span>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="font-mono uppercase tracking-[0.3em] text-sm text-muted-foreground mb-3">
              Hello, I'm
            </p>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-primary leading-none">
              YOUR NAME
            </h1>
            <div className="flex items-center gap-3 my-5 justify-center lg:justify-start">
              <span className="h-px w-16 bg-primary" />
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" />
                <line x1="0" y1="10" x2="20" y2="10" />
                <line x1="10" y1="0" x2="10" y2="20" />
              </svg>
              <span className="h-px w-16 bg-primary" />
            </div>
            <p className="font-display font-semibold text-base sm:text-lg text-primary/80 uppercase tracking-widest">
              Mechanical Engineer Graduate
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-primary mt-2">
              DRAFTER
            </h2>
            <div className="dim-line h-px w-32 my-5 mx-auto lg:mx-0" />
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Detail-oriented and passionate Mechanical Engineering graduate specializing in technical
              drawing and drafting. Proficient in creating accurate, clear, and manufacture-ready
              mechanical drawings.
            </p>
          </div>

          {/* Sketch */}
          <div className="lg:col-span-4">
            <div className="relative blueprint-corner p-4 border border-primary/30 blueprint-grid">
              <BearingSketch className="w-full h-auto text-primary" />
              <p className="font-mono text-[10px] text-primary/60 mt-2 uppercase tracking-wider">
                Drawing No. MD-001 · Scale 1:2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Education"
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
                <path d="M2 9l10-5 10 5-10 5L2 9z" />
                <path d="M6 11v6a6 6 0 0012 0v-6" />
              </svg>
            }
          />
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 relative pl-8">
              <span className="absolute left-0 top-2 bottom-2 w-px bg-primary/40" />
              <div className="relative">
                <span className="absolute -left-[34px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />
                <h3 className="font-display font-bold text-primary uppercase tracking-wide text-lg">
                  Bachelor of Science in Mechanical Engineering
                </h3>
                <p className="italic text-muted-foreground mt-1">Your University Name</p>
                <p className="font-mono text-sm text-primary/70 mt-1">Year Graduated: 2024</p>
                <div className="mt-5 grid sm:grid-cols-2 gap-2 max-w-xl">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1 col-span-full">
                    Relevant Coursework
                  </p>
                  {["Technical Drawing", "CAD Design", "Mechanical Design", "Manufacturing Process"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rotate-45" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:block text-primary/60">
              <CaliperSketch className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Experience"
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
            }
          />
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 relative pl-8">
              <span className="absolute left-0 top-2 bottom-2 w-px bg-primary/40" />
              {[
                {
                  period: "2024 – Present",
                  role: "Mechanical Drafter (OJT)",
                  company: "Company Name",
                  desc: "Prepared detailed mechanical drawings and assembly drawings using AutoCAD. Assisted in revising drawings and ensured compliance with standards and specifications.",
                },
                {
                  period: "2023 – 2024",
                  role: "Drafting Intern",
                  company: "Company Name",
                  desc: "Created 2D technical drawings, updated existing drawings and supported engineers in documentation and design communication.",
                },
              ].map((exp, i) => (
                <div key={i} className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[34px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />
                  <p className="font-mono text-xs uppercase tracking-widest text-primary/70 mb-1">
                    {exp.period}
                  </p>
                  <h3 className="font-display font-bold text-primary uppercase tracking-wide">
                    {exp.role}
                  </h3>
                  <p className="italic text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="blueprint-corner border border-primary/30 p-3 blueprint-grid">
                <AssemblySketch className="w-full text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Skills"
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
              </svg>
            }
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="tech-card p-5 text-center blueprint-corner">
                <div className="w-14 h-14 mx-auto mb-3 border-2 border-primary flex items-center justify-center font-display font-black text-primary text-xl">
                  {s.letter}
                </div>
                <p className="font-display font-semibold text-sm text-primary uppercase tracking-wide">
                  {s.name}
                </p>
                <div className="flex justify-center gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`w-2 h-2 rounded-full ${n <= s.level ? "bg-primary" : "bg-border"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Projects"
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="4" width="20" height="14" rx="1" />
                <path d="M2 18h20M9 22h6" />
              </svg>
            }
          />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="tech-card p-5 blueprint-corner group">
                <div className="aspect-[4/3] bg-secondary/40 border border-primary/20 blueprint-grid p-3 mb-4 overflow-hidden">
                  <div className="w-full h-full text-primary/80 group-hover:text-primary transition-colors">
                    {p.sketch}
                  </div>
                </div>
                <h3 className="font-display font-bold text-primary uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-primary/70 mt-3">
                  {p.tech}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Contact"
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Location", value: "Your City, Your Country", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" /><circle cx="12" cy="9" r="3" /></svg>
              )},
              { label: "Phone", value: "+00 123 456 7890", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92V21a1 1 0 01-1.1 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.18 4.1 1 1 0 014.18 3h4.09a1 1 0 011 .75l1 4a1 1 0 01-.29 1l-2.2 2.2a16 16 0 006 6l2.2-2.2a1 1 0 011-.29l4 1a1 1 0 01.74 1z" /></svg>
              )},
              { label: "Email", value: "youremail@email.com", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              )},
              { label: "LinkedIn", value: "linkedin.com/in/yourname", icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.48 3.05 5.48 7.02V22h-4.56v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5V22H7.62V8z" /></svg>
              )},
            ].map((c) => (
              <div key={c.label} className="tech-card p-5 flex items-center gap-4 blueprint-corner">
                <div className="w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground rounded">
                  {c.icon}
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{c.label}</p>
                  <p className="text-sm text-foreground mt-1 break-all">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-6 border-t border-border bg-background text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © 2026 Your Name. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
