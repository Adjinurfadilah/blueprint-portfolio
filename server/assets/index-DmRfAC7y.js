import { r as reactExports, T as jsxRuntimeExports } from "./server-DWcvdQxN.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const LucideContext = reactExports.createContext({});
const useLucideContext = () => reactExports.useContext(LucideContext);
const Icon = reactExports.forwardRef(
  ({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => {
    const {
      size: contextSize = 24,
      strokeWidth: contextStrokeWidth = 2,
      absoluteStrokeWidth: contextAbsoluteStrokeWidth = false,
      color: contextColor = "currentColor",
      className: contextClass = ""
    } = useLucideContext() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses("lucide", contextClass, className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const sections = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];
function Navbar() {
  const [active, setActive] = reactExports.useState("home");
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 40 40", className: "w-8 h-8 text-primary", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "20", cy: "20", r: "14" }),
              Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "20", y1: "2", x2: "20", y2: "8", transform: `rotate(${i * 45} 20 20)` }, i))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-primary tracking-wider text-sm sm:text-base", children: "ADJI NUR FADILAH" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `#${s.id}`,
              className: `px-3 py-2 text-xs font-semibold tracking-widest uppercase transition-colors relative ${active === s.id ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
              children: [
                s.label,
                active === s.id && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary" })
              ]
            },
            s.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "md:hidden p-2 text-primary",
              onClick: () => setOpen((o) => !o),
              "aria-label": "Toggle menu",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "2", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 6l12 12M6 18L18 6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18M3 12h18M3 18h18" }) })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "md:hidden bg-background border-t border-border", children: sections.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `#${s.id}`,
            onClick: () => setOpen(false),
            className: `block px-6 py-3 text-sm font-semibold tracking-widest uppercase border-b border-border ${active === s.id ? "text-primary bg-accent" : "text-muted-foreground"}`,
            children: s.label
          },
          s.id
        )) })
      ]
    }
  );
}
function SectionHeader({ icon, title }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-14 h-14 flex items-center justify-center text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 100 100", className: "absolute inset-0 w-full h-full text-primary", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "50,4 92,28 92,72 50,96 8,72 8,28" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: icon })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl sm:text-3xl text-primary tracking-widest uppercase", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-primary/40 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 right-0 w-2 h-2 bg-primary rotate-45" }) })
  ] });
}
function GearDecor({ className = "", size = 200 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 200 200", width: size, height: size, className, fill: "none", stroke: "currentColor", strokeWidth: "1.2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    Array.from({ length: 12 }).map((_, i) => {
      const angle = i * 360 / 12;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "95", y: "6", width: "10", height: "20", transform: `rotate(${angle} 100 100)` }, i);
    }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "72" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "22" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "100", r: "6", fill: "currentColor" }),
    Array.from({ length: 6 }).map((_, i) => {
      const a = i * 60 * Math.PI / 180;
      const x = 100 + Math.cos(a) * 42;
      const y = 100 + Math.sin(a) * 42;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "5" }, i);
    })
  ] }) });
}
const skills = [{
  name: "SolidWorks",
  logo: "/logos/SolidWorks.png"
}, {
  name: "AutoCAD",
  logo: "/logos/AutoCad.png"
}, {
  name: "MATLAB",
  logo: "/logos/Matlab.png"
}, {
  name: "Microsoft Office",
  logo: "/logos/MicrosoftOffice.png"
}];
const projects = [{
  title: "Horizontal Axis Wind Turbine (TASH)",
  images: ["/projects/Horizontal_Axis_Wind_Turbine_(TASH).png", "/projects/Horizontal_Axis_Wind_Turbine_(TASH)2.jpg"],
  desc: "Participated in a final-year project on Horizontal Axis Wind Turbines (HAWT), focusing on the design and development of horizontal-axis wind turbine systems. Contributed to the mechanical design process, the creation of technical drawings, component assembly, and turbine performance testing to support the efficient conversion of wind energy into electrical energy. This project also involved the use of engineering design software and an understanding of mechanical and electrical systems in renewable energy generation.",
  tech: "SolidWorks · Assembly Design · MATLAB · GD&T"
}, {
  title: "Hydraulic Power Unit 1000L",
  images: ["/projects/HPU_1000L.png", "/projects/HPU_1000L2.jpeg"],
  desc: "Worked on the 1000L Hydraulic Power Unit (HPU) project at PT Ide Bengkel Intinusa while serving as a Drafter. Responsible for creating and revising 2D/3D technical drawings, preparing fabrication and assembly details, and supporting the hydraulic system design process in accordance with production requirements and the company’s technical standards. This project also involved coordinating with the engineering and workshop teams to ensure the design could be properly implemented on-site.",
  tech: "SolidWorks · Assembly Drawing · Hydraulic · GD&T"
}, {
  title: "Cylinder TC HT 100-116 R56",
  images: ["/projects/Cylinder_TC_HT_100-116_R56.jpg", "/projects/Cylinder_TC_HT_100-116_R562.jpg"],
  desc: "Worked on the Cylinder TC HT 100-116 R56 project at PT Ide Bengkel Intinusa while serving as a Drafter. Responsible for creating technical drawings, revising designs, and developing fabrication details for hydraulic cylinder components in accordance with engineering specifications and production requirements. Additionally, coordinated with the engineering and production teams to ensure the accuracy of designs, dimensions, and on-site assembly processes.",
  tech: "SolidWorks · Assembly Drawing · Hydraulic · GD&T"
}];
function ProjectCard({
  project
}) {
  const [currentImage, setCurrentImage] = reactExports.useState(0);
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "tech-card p-5 blueprint-corner group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/20 mb-4 bg-secondary/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.images[currentImage], alt: project.title, className: "w-full h-full object-cover transition duration-300" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCurrentImage(currentImage === 0 ? project.images.length - 1 : currentImage - 1), className: "absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCurrentImage(currentImage === project.images.length - 1 ? 0 : currentImage + 1), className: "absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2", children: project.images.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-2 h-2 rounded-full ${currentImage === idx ? "bg-white" : "bg-white/40"}` }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary uppercase tracking-wide", children: project.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm text-muted-foreground mt-2 leading-relaxed text-justify ${!expanded ? "line-clamp-4" : ""}`, children: project.desc }),
    project.desc.length > 180 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setExpanded(!expanded), className: "mt-2 text-xs font-semibold uppercase tracking-wider text-primary hover:underline", children: expanded ? "Show Less" : "Show More" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary/70 mt-3", children: project.tech })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative pt-28 pb-20 sm:pt-32 sm:pb-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GearDecor, { className: "absolute -left-16 bottom-0 text-primary/15", size: 280 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono uppercase tracking-[0.3em] text-sm text-muted-foreground mb-3", children: "Hello, I'm" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-4xl sm:text-5xl text-primary leading-none", children: "Adji Nur Fadilah" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 my-5 justify-center lg:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 20 20", className: "w-4 h-4 text-primary", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "10", r: "8" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "10", x2: "20", y2: "10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "10", y1: "0", x2: "10", y2: "20" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-base sm:text-lg text-primary/80 uppercase tracking-widest", children: "Mechanical Engineering Graduate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black text-3xl sm:text-5xl text-primary mt-2", children: "DRAFTER" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dim-line h-px w-32 my-5 mx-auto lg:mx-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-justify", children: [
            "I hold a Bachelor’s degree in Mechanical Engineering from Mercu Buana University. I am skilled in creating 2D and 3D technical drawings using CAD software and proficient in Microsoft Office.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "I have experience as a Drafter at PT Ide Bengkel Intinusa, along with internships at PT INKA (Persero) as a Quality Control Specialist and PT Usaha Saudara Mandiri as a Production Operator. These experiences have strengthened my discipline, attention to detail, and adaptability in various work environments."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 border-2 border-dashed border-primary/40 rounded-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[320px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-primary bg-secondary shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "foto_adji.jpg", alt: "Adji Nur Fadilah", className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary tracking-widest" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "education", className: "relative py-20 bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Education", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "white", strokeWidth: "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 9l10-5 10 5-10 5L2 9z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 11v6a6 6 0 0012 0v-6" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 relative pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-2 bottom-2 w-px bg-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[34px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary uppercase tracking-wide text-lg", children: "S1 Mechanical Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-muted-foreground mt-1", children: "Universitas Mercu Buana" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid sm:grid-cols-2 gap-2 max-w-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1 col-span-full", children: "Relevant Coursework" }),
              ["Technical Drawing", "CAD Design", "Mechanical Design", "Manufacturing Process"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-primary rotate-45" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c })
              ] }, c))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 relative pl-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-2 bottom-2 w-px bg-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[34px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary uppercase tracking-wide text-lg", children: "Mechanical Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-muted-foreground mt-1", children: "SMKN 2 Kabupaten Tangerang" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Experience", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "white", strokeWidth: "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "7", width: "18", height: "13", rx: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-10 items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 relative pl-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-2 bottom-2 w-px bg-primary/40" }),
        [{
          period: "October 2025 - January 2026",
          role: "Mechanical Drafter",
          company: "PT. Ide Bengkel Intinusa",
          desc: ["Create 2D and 3D technical drawings using SolidWorks and AutoCAD for hydraulic and pneumatic components and systems", "Create detailed drawings for fabrication and assembly processes", "Revise working drawings as needed for production and engineering purposes", "Assist in the design of hydraulic systems and machine construction", "Adapt designs to company specifications and standards", "Coordinate with the production team and archive working drawing documents."]
        }, {
          period: "September 2023 - October 2023",
          role: "Quality Control (Intern)",
          company: "PT. INKA (Persero)",
          desc: ["Assisting in the product quality inspection process", "Performing visual inspections and basic measurements", "Coordinating with the production and engineering divisions"]
        }, {
          period: "August 2018 - October 2018",
          role: "Productoin Operator (Intern)",
          company: "PT. Usaha Saudara Mandiri",
          desc: ["Coordinating with engineering and quality control teams", "Conducting measurements and basic quality checks", "Operating production tools and machinery", "Executing production processes according to SOPs", "Reading and interpreting technical drawings"]
        }].map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-10 last:mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[34px] top-1 w-4 h-4 bg-primary rounded-full ring-4 ring-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-primary/70 mb-1", children: exp.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-primary uppercase tracking-wide", children: exp.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic text-muted-foreground", children: exp.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-5 text-sm text-muted-foreground mt-2 max-w-xl leading-relaxed space-y-1", children: exp.desc.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, idx)) })
        ] }, i))
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative py-20 bg-card border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Skills", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "white", strokeWidth: "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: skills.map((skill, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center gap-4 p-5 rounded-2xl border bg-background/50 backdrop-blur-sm hover:shadow-lg transition min-h-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: skill.logo, alt: skill.name, className: "w-24 h-24 object-contain" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-display font-semibold uppercase tracking-wider text-center text-primary", children: skill.name })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Projects", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "white", strokeWidth: "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "4", width: "20", height: "14", rx: "1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 18h20M9 22h6" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: projects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-20 bg-card border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Contact", icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "w-6 h-6", fill: "none", stroke: "white", strokeWidth: "2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 7l9 6 9-6" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: [{
        label: "Location",
        value: "Tangerang, Indonesia",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-5 h-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "9", r: "3" })
        ] })
      }, {
        label: "Phone",
        value: "+62 897-7215-354",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-5 h-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 16.92V21a1 1 0 01-1.1 1 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 013.18 4.1 1 1 0 014.18 3h4.09a1 1 0 011 .75l1 4a1 1 0 01-.29 1l-2.2 2.2a16 16 0 006 6l2.2-2.2a1 1 0 011-.29l4 1a1 1 0 01.74 1z" }) })
      }, {
        label: "Email",
        value: "adjinurfadilah2001@email.com",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-5 h-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "5", width: "18", height: "14", rx: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 7l9 6 9-6" })
        ] })
      }, {
        label: "LinkedIn",
        value: "www.linkedin.com/in/adji-nur-fadilah",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.33-2.36 4.63 0 5.48 3.05 5.48 7.02V22h-4.56v-6.62c0-1.58-.03-3.62-2.21-3.62-2.21 0-2.55 1.72-2.55 3.5V22H7.62V8z" }) })
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tech-card p-5 flex items-center gap-4 blueprint-corner", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 flex items-center justify-center bg-primary text-primary-foreground rounded", children: c.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-widest text-primary", children: c.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-1 break-all", children: c.value })
        ] })
      ] }, c.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-6 border-t border-border bg-background text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "© 2026 Adji Nur Fadilah. All Rights Reserved." }) })
  ] });
}
export {
  Index as component
};
