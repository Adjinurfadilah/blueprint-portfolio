export function GearDecor({ className = "", size = 200 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <rect key={i} x="95" y="6" width="10" height="20" transform={`rotate(${angle} 100 100)`} />
          );
        })}
        <circle cx="100" cy="100" r="72" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="22" />
        <circle cx="100" cy="100" r="6" fill="currentColor" />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i * 60 * Math.PI) / 180;
          const x = 100 + Math.cos(a) * 42;
          const y = 100 + Math.sin(a) * 42;
          return <circle key={i} cx={x} cy={y} r="5" />;
        })}
      </g>
    </svg>
  );
}

export function BearingSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      {/* dimension lines */}
      <g strokeDasharray="4 3" opacity="0.6">
        <line x1="40" y1="20" x2="360" y2="20" />
        <line x1="40" y1="15" x2="40" y2="25" />
        <line x1="360" y1="15" x2="360" y2="25" />
        <line x1="380" y1="40" x2="380" y2="240" />
        <line x1="375" y1="40" x2="385" y2="40" />
        <line x1="375" y1="240" x2="385" y2="240" />
      </g>
      <text x="195" y="14" fontSize="9" fill="currentColor" fontFamily="monospace">320.00</text>
      <text x="386" y="145" fontSize="9" fill="currentColor" fontFamily="monospace" transform="rotate(90 386 145)">200.00</text>

      {/* housing */}
      <rect x="60" y="60" width="280" height="160" rx="6" />
      <rect x="80" y="80" width="240" height="120" rx="4" />
      {/* shaft */}
      <line x1="40" y1="140" x2="360" y2="140" strokeDasharray="8 3 2 3" />
      {/* bearing circles */}
      <circle cx="200" cy="140" r="70" />
      <circle cx="200" cy="140" r="55" />
      <circle cx="200" cy="140" r="30" />
      <circle cx="200" cy="140" r="20" />
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i * 36 * Math.PI) / 180;
        const x = 200 + Math.cos(a) * 42;
        const y = 140 + Math.sin(a) * 42;
        return <circle key={i} cx={x} cy={y} r="6" />;
      })}
      {/* mount holes */}
      <circle cx="80" cy="80" r="4" />
      <circle cx="320" cy="80" r="4" />
      <circle cx="80" cy="200" r="4" />
      <circle cx="320" cy="200" r="4" />
      {/* centerline cross */}
      <line x1="200" y1="60" x2="200" y2="220" strokeDasharray="6 3 2 3" />
    </svg>
  );
}

export function CaliperSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="20" y="50" width="320" height="14" />
      <rect x="20" y="40" width="40" height="40" />
      <rect x="20" y="20" width="14" height="20" />
      <rect x="240" y="40" width="40" height="40" />
      <rect x="240" y="20" width="14" height="20" />
      <line x1="34" y1="20" x2="34" y2="0" />
      <line x1="254" y1="20" x2="254" y2="0" />
      <rect x="280" y="46" width="60" height="22" />
      <text x="290" y="62" fontSize="10" fill="currentColor" fontFamily="monospace">0.00</text>
      <g strokeDasharray="2 2" opacity="0.5">
        {Array.from({ length: 30 }).map((_, i) => (
          <line key={i} x1={60 + i * 6} y1="64" x2={60 + i * 6} y2="70" />
        ))}
      </g>
    </svg>
  );
}

export function AssemblySketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <g strokeDasharray="4 3" opacity="0.6">
        <line x1="40" y1="20" x2="360" y2="20" />
      </g>
      <rect x="60" y="80" width="120" height="140" />
      <rect x="80" y="100" width="80" height="100" />
      <circle cx="120" cy="150" r="30" />
      <circle cx="120" cy="150" r="14" />
      <line x1="180" y1="150" x2="280" y2="150" strokeWidth="8" />
      <rect x="280" y="120" width="80" height="60" />
      <circle cx="320" cy="150" r="20" />
      <circle cx="320" cy="150" r="8" />
      {[1, 2, 3, 4].map((n, i) => (
        <g key={n}>
          <circle cx={70 + i * 90} cy={50} r="10" />
          <text x={70 + i * 90} y={54} fontSize="10" textAnchor="middle" fill="currentColor" fontFamily="monospace">{n}</text>
          <line x1={70 + i * 90} y1={60} x2={70 + i * 90} y2={90 + i * 10} strokeDasharray="3 2" />
        </g>
      ))}
    </svg>
  );
}

export function BracketSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="60,220 60,80 200,80 260,140 260,220" />
      <polygon points="80,200 80,100 190,100 240,150 240,200" />
      <circle cx="110" cy="130" r="14" />
      <circle cx="110" cy="170" r="14" />
      <circle cx="200" cy="180" r="10" />
      <line x1="60" y1="240" x2="260" y2="240" strokeDasharray="4 3" />
      <text x="160" y="255" fontSize="10" textAnchor="middle" fill="currentColor" fontFamily="monospace">200.00</text>
    </svg>
  );
}

export function ShaftSketch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 280" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="40" y="130" width="60" height="30" />
      <rect x="100" y="120" width="100" height="50" />
      <rect x="200" y="110" width="120" height="70" />
      <rect x="320" y="125" width="40" height="40" />
      <line x1="20" y1="145" x2="380" y2="145" strokeDasharray="8 3 2 3" />
      <g strokeDasharray="4 3" opacity="0.6">
        <line x1="40" y1="200" x2="360" y2="200" />
        <line x1="40" y1="195" x2="40" y2="205" />
        <line x1="360" y1="195" x2="360" y2="205" />
      </g>
      <text x="200" y="220" fontSize="10" textAnchor="middle" fill="currentColor" fontFamily="monospace">⌀ 320.00 ±0.05</text>
    </svg>
  );
}
