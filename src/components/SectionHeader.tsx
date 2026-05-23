import type { ReactNode } from "react";

export function SectionHeader({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="relative w-14 h-14 flex items-center justify-center text-primary-foreground">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary" fill="currentColor">
          <polygon points="50,4 92,28 92,72 50,96 8,72 8,28" />
        </svg>
        <div className="relative z-10">{icon}</div>
      </div>
      <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary tracking-widest uppercase">
        {title}
      </h2>
      <div className="flex-1 h-px bg-primary/40 relative">
        <span className="absolute -top-1 right-0 w-2 h-2 bg-primary rotate-45" />
      </div>
    </div>
  );
}
