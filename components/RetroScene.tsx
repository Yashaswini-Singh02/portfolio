/**
 * A retro synthwave landscape — sunset sky, banded sun, layered hills,
 * pine silhouettes and drifting clouds. Painted in the NLC palette.
 * Pure SVG + CSS animation (respects reduced motion via tailwind).
 */
export default function RetroScene({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-full w-full ${className}`}
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A0E22" />
          <stop offset="42%" stopColor="#5A1E58" />
          <stop offset="72%" stopColor="#E50083" />
          <stop offset="100%" stopColor="#E94F0B" />
        </linearGradient>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9C7" />
          <stop offset="55%" stopColor="#FFC24B" />
          <stop offset="100%" stopColor="#E94F0B" />
        </linearGradient>
        <clipPath id="sunClip">
          <circle cx="400" cy="270" r="120" />
        </clipPath>
      </defs>

      {/* sky */}
      <rect width="800" height="500" fill="url(#sky)" />

      {/* stars */}
      {STARS.map((s, i) => (
        <rect
          key={i}
          x={s.x}
          y={s.y}
          width={s.s}
          height={s.s}
          fill="#F1F1F1"
          className="animate-twinkle"
          style={{ animationDelay: `${(i % 5) * 0.6}s` }}
        />
      ))}

      {/* banded sun */}
      <g className="animate-sun-breathe" style={{ transformOrigin: "400px 270px" }}>
        <circle cx="400" cy="270" r="120" fill="url(#sun)" />
        <g clipPath="url(#sunClip)">
          {[300, 318, 332, 344, 354, 363].map((y, i) => (
            <rect key={i} x="280" y={y + i * (8 + i)} width="240" height={4 + i * 1.5} fill="#1A0E22" />
          ))}
        </g>
      </g>

      {/* clouds */}
      <g className="animate-drift-slow" opacity="0.55">
        <ellipse cx="150" cy="120" rx="70" ry="14" fill="#CFB3D4" />
        <ellipse cx="210" cy="130" rx="50" ry="11" fill="#CFB3D4" />
      </g>
      <g className="animate-drift" opacity="0.4">
        <ellipse cx="640" cy="90" rx="60" ry="12" fill="#F1F1F1" />
        <ellipse cx="690" cy="100" rx="42" ry="9" fill="#F1F1F1" />
      </g>

      {/* hills — back to front */}
      <path d="M0 360 Q 180 300 360 350 T 800 330 V500 H0 Z" fill="#3A1E3F" />
      <path d="M0 400 Q 220 340 440 392 T 800 380 V500 H0 Z" fill="#241326" />
      <path d="M0 440 Q 260 392 520 432 T 800 430 V500 H0 Z" fill="#120A15" />

      {/* pine trees on the front ridge */}
      <g fill="#0A050C">
        {TREES.map((t, i) => (
          <g key={i} transform={`translate(${t.x} ${t.y}) scale(${t.k})`}>
            <polygon points="0,-34 12,-6 -12,-6" />
            <polygon points="0,-22 16,8 -16,8" />
            <rect x="-3" y="6" width="6" height="10" />
          </g>
        ))}
      </g>
    </svg>
  );
}

const STARS = [
  { x: 60, y: 50, s: 2 },
  { x: 120, y: 90, s: 3 },
  { x: 200, y: 40, s: 2 },
  { x: 300, y: 70, s: 2 },
  { x: 520, y: 45, s: 3 },
  { x: 600, y: 80, s: 2 },
  { x: 700, y: 55, s: 2 },
  { x: 740, y: 110, s: 3 },
  { x: 420, y: 60, s: 2 },
  { x: 90, y: 150, s: 2 },
  { x: 660, y: 150, s: 2 },
  { x: 360, y: 110, s: 2 },
];

const TREES = [
  { x: 70, y: 452, k: 1.1 },
  { x: 140, y: 460, k: 0.8 },
  { x: 640, y: 452, k: 1.2 },
  { x: 700, y: 462, k: 0.9 },
  { x: 760, y: 456, k: 0.7 },
];
