const paths = [
  { d: 'M-40 80 C 280 60, 420 360, 760 380 S 1160 560, 1320 520', grad: 'gb', dur: 8, delay: 0 },
  {
    d: 'M-40 260 C 240 240, 440 520, 700 540 S 1100 700, 1320 700',
    grad: 'gv',
    dur: 11,
    delay: -3,
  },
  { d: 'M-40 520 C 260 540, 380 300, 640 260 S 1000 120, 1320 140', grad: 'gb', dur: 9, delay: -5 },
  {
    d: 'M-40 700 C 320 700, 480 560, 760 500 S 1120 330, 1320 300',
    grad: 'gv',
    dur: 12,
    delay: -1,
  },
  { d: 'M-40 -20 C 360 120, 680 40, 1320 260', grad: 'gb', dur: 10, delay: -6 },
  { d: 'M300 -40 C 420 240, 900 300, 1320 400', grad: 'gv', dur: 13, delay: -8 },
]

export function FlowLines() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1280 820"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    >
      <defs>
        <linearGradient id="flow-gb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="flow-gv" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#22A06B" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="hsl(var(--border))" strokeOpacity="0.9" strokeWidth="1">
        {paths.map((p) => (
          <path key={p.d} d={p.d} />
        ))}
      </g>
      <g fill="none" strokeWidth="2" strokeLinecap="round">
        {paths.map((p) => (
          <path
            key={p.d}
            d={p.d}
            pathLength={1}
            stroke={`url(#flow-${p.grad})`}
            className="flow"
            style={{ animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </g>
    </svg>
  )
}
