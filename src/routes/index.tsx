import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SectionHeader } from "@/components/SectionHeader";
import { withBaseUrl } from "@/lib/utils";
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
  {
    name: "SolidWorks",
    logo: withBaseUrl("logos/SolidWorks.png"),
  },
  {
    name: "AutoCAD",
    logo: withBaseUrl("logos/AutoCad.png"),
  },
  {
    name: "MATLAB",
    logo: withBaseUrl("logos/Matlab.png"),
  },
  {
    name: "Microsoft Office",
    logo: withBaseUrl("logos/MicrosoftOffice.png"),
  },
];

const projects = [
  {
    title: "Horizontal Axis Wind Turbine (TASH)",
    images: [
      withBaseUrl("projects/Horizontal_Axis_Wind_Turbine_(TASH).png"),
      withBaseUrl("projects/Horizontal_Axis_Wind_Turbine_(TASH)2.jpg"),
    ],
    desc: "Participated in a final-year project on Horizontal Axis Wind Turbines (HAWT), focusing on the design and development of horizontal-axis wind turbine systems. Contributed to the mechanical design process, the creation of technical drawings, component assembly, and turbine performance testing to support the efficient conversion of wind energy into electrical energy. This project also involved the use of engineering design software and an understanding of mechanical and electrical systems in renewable energy generation.",
    tech: "SolidWorks · Assembly Design · MATLAB · GD&T",
  },
  {
    title: "Hydraulic Power Unit 1000L",
    images: [
      withBaseUrl("projects/HPU_1000L.png"),
      withBaseUrl("projects/HPU_1000L2.jpeg"),
    ],
    desc: "Worked on the 1000L Hydraulic Power Unit (HPU) project at PT Ide Bengkel Intinusa while serving as a Drafter. Responsible for creating and revising 2D/3D technical drawings, preparing fabrication and assembly details, and supporting the hydraulic system design process in accordance with production requirements and the company’s technical standards. This project also involved coordinating with the engineering and workshop teams to ensure the design could be properly implemented on-site.",
    tech: "SolidWorks · Assembly Drawing · Hydraulic · GD&T",
  },
  {
    title: "Cylinder TC HT 100-116 R56",
    images: [
      withBaseUrl("projects/Cylinder_TC_HT_100-116_R56.jpg"),
      withBaseUrl("projects/Cylinder_TC_HT_100-116_R562.jpg"),
    ],
    desc: "Worked on the Cylinder TC HT 100-116 R56 project at PT Ide Bengkel Intinusa while serving as a Drafter. Responsible for creating technical drawings, revising designs, and developing fabrication details for hydraulic cylinder components in accordance with engineering specifications and production requirements. Additionally, coordinated with the engineering and production teams to ensure the accuracy of designs, dimensions, and on-site assembly processes.",
    tech: "SolidWorks · Assembly Drawing · Hydraulic · GD&T",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="tech-card p-5 blueprint-corner group">
      {/* Image Slider */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/20 mb-4 bg-secondary/40">
        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="w-full h-full object-cover transition duration-300"
        />

        {/* Left Button */}
        <button
          onClick={() =>
            setCurrentImage(
              currentImage === 0
                ? project.images.length - 1
                : currentImage - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={() =>
            setCurrentImage(
              currentImage === project.images.length - 1
                ? 0
                : currentImage + 1
            )
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {project.images.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                currentImage === idx ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <h3 className="font-display font-bold text-primary uppercase tracking-wide">
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm text-muted-foreground mt-2 leading-relaxed text-justify ${
          !expanded ? "line-clamp-4" : ""
        }`}
      >
        {project.desc}
      </p>

      {/* Show More / Less */}
      {project.desc.length > 180 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}

      <p className="font-mono text-xs uppercase tracking-widest text-primary/70 mt-3">
        {project.tech}
      </p>
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />

      {/* HOME */}
      <section
  id="home"
  className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden"
>
  <GearDecor
    className="absolute -left-16 bottom-0 text-primary/15"
    size={280}
  />

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
    
    {/* Text */}
    <div className="lg:col-span-7 text-center lg:text-left">
      <p className="font-mono uppercase tracking-[0.3em] text-sm text-muted-foreground mb-3">
        Hello, I'm
      </p>

      <h1 className="font-display font-black text-4xl sm:text-5xl text-primary leading-none">
        Adji Nur Fadilah
      </h1>

      <div className="flex items-center gap-3 my-5 justify-center lg:justify-start">
        <span className="h-px w-16 bg-primary" />

        <svg
          viewBox="0 0 20 20"
          className="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="10" cy="10" r="8" />
          <line x1="0" y1="10" x2="20" y2="10" />
          <line x1="10" y1="0" x2="10" y2="20" />
        </svg>

        <span className="h-px w-16 bg-primary" />
      </div>

      <p className="font-display font-semibold text-base sm:text-lg text-primary/80 uppercase tracking-widest">
        Mechanical Engineering Graduate
      </p>

      <h2 className="font-display font-black text-3xl sm:text-5xl text-primary mt-2">
        DRAFTER
      </h2>

      <div className="dim-line h-px w-32 my-5 mx-auto lg:mx-0" />

      <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-justify">
        I hold a Bachelor’s degree in Mechanical Engineering from Mercu Buana
        University. I am skilled in creating 2D and 3D technical drawings
        using CAD software and proficient in Microsoft Office.
        <br />
        <br />
        I have experience as a Drafter at PT Ide Bengkel Intinusa, along with
        internships at PT INKA (Persero) as a Quality Control Specialist and
        PT Usaha Saudara Mandiri as a Production Operator. These experiences
        have strengthened my discipline, attention to detail, and adaptability
        in various work environments.
      </p>
    </div>

    {/* Photo */}
    <div className="lg:col-span-5 flex justify-center lg:justify-end">
      <div className="relative">
        <div className="absolute -inset-4 border-2 border-dashed border-primary/40 rounded-3xl" />

        <div className="w-[320px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-primary bg-secondary shadow-2xl">
          <img
            src="foto_adji.jpg"
            alt="Adji Nur Fadilah"
            className="w-full h-full object-cover"
          />
        </div>

        {/* dimension label */}
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary tracking-widest">
        </span>
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
                  S1 Mechanical Engineering
                </h3>
                <p className="italic text-muted-foreground mt-1">Universitas Mercu Buana</p>
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
            <div className="lg:col-span-2 relative pl-8">
              <span className="absolute left-0 top-2 bottom-2 w-px bg-primary/40" />
              <div className="relative">
                <span className="absolute -left-[34px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />
                <h3 className="font-display font-bold text-primary uppercase tracking-wide text-lg">
                  Mechanical Engineering
                </h3>
                <p className="italic text-muted-foreground mt-1">SMKN 2 Kabupaten Tangerang</p>
              </div>
            </div>
            {/* <div className="hidden lg:block text-primary/60">
              <CaliperSketch className="w-full" />
            </div> */}
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
    period: "October 2025 - January 2026",
    role: "Mechanical Drafter",
    company: "PT. Ide Bengkel Intinusa",
    desc: [
      "Create 2D and 3D technical drawings using SolidWorks and AutoCAD for hydraulic and pneumatic components and systems",
      "Create detailed drawings for fabrication and assembly processes",
      "Revise working drawings as needed for production and engineering purposes",
      "Assist in the design of hydraulic systems and machine construction",
      "Adapt designs to company specifications and standards",
      "Coordinate with the production team and archive working drawing documents.",
    ],
  },
  {
    period: "September 2023 - October 2023",
    role: "Quality Control (Intern)",
    company: "PT. INKA (Persero)",
    desc: [
      "Assisting in the product quality inspection process",
      "Performing visual inspections and basic measurements",
      "Coordinating with the production and engineering divisions",
    ],
  },
  {
    period: "August 2018 - October 2018",
    role: "Productoin Operator (Intern)",
    company: "PT. Usaha Saudara Mandiri",
    desc: [
      "Coordinating with engineering and quality control teams",
      "Conducting measurements and basic quality checks",
      "Operating production tools and machinery",
      "Executing production processes according to SOPs",
      "Reading and interpreting technical drawings",
    ],
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

    <ul className="list-disc pl-5 text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed space-y-1">
      {exp.desc.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
))}
            </div>
            {/* <div className="hidden lg:block">
              <div className="blueprint-corner border border-primary/30 p-3 blueprint-grid">
                <AssemblySketch className="w-full text-primary" />
              </div>
            </div> */}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
  {skills.map((skill, i) => (
    <div
      key={i}
      className="flex flex-col items-center justify-center gap-4 p-5 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition min-h-[220px]"
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-24 h-24 object-contain"
      />

      <span className="text-sm font-display font-semibold uppercase tracking-wider text-center text-primary">
        {skill.name}
      </span>
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
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="14" rx="1" />
                <path d="M2 18h20M9 22h6" />
              </svg>
            }
          />

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
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
              { label: "Location", value: "Tangerang, Indonesia", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" /><circle cx="12" cy="9" r="3" /></svg>
              )},
              { label: "Phone", value: "+62 897-7215-354", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92V21a1 1 0 01-1.1 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.18 4.1 1 1 0 014.18 3h4.09a1 1 0 011 .75l1 4a1 1 0 01-.29 1l-2.2 2.2a16 16 0 006 6l2.2-2.2a1 1 0 011-.29l4 1a1 1 0 01.74 1z" /></svg>
              )},
              { label: "Email", value: "adjinurfadilah2001@email.com", icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              )},
              { label: "LinkedIn", value: "www.linkedin.com/in/adji-nur-fadilah", icon: (
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
          © 2026 Adji Nur Fadilah. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
