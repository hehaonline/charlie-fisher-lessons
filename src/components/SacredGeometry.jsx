// ─────────────────────────────────────────────────────────────
// Sacred geometry line-art — the visual signature of the site.
// Thin strokes, currentColor, meant to sit quietly at low opacity.
// ─────────────────────────────────────────────────────────────

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  vectorEffect: 'non-scaling-stroke',
}

/** Seed of Life — seven interlocking circles */
export function SeedOfLife({ className = '', ...props }) {
  const r = 30
  const cx = 100
  const cy = 100
  const points = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
  })
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <circle cx={cx} cy={cy} r={r} {...strokeProps} />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={r} {...strokeProps} />
      ))}
      <circle cx={cx} cy={cy} r={r * 2} {...strokeProps} opacity="0.5" />
    </svg>
  )
}

/** Flower of Life fragment — denser, for hero backgrounds */
export function FlowerOfLife({ className = '', ...props }) {
  const r = 24
  const cx = 100
  const cy = 100
  const rings = []
  rings.push([cx, cy])
  for (let ring = 1; ring <= 2; ring++) {
    for (let i = 0; i < 6 * ring; i++) {
      const a = ((Math.PI * 2) / (6 * ring)) * i - Math.PI / 2
      rings.push([cx + r * ring * Math.cos(a), cy + r * ring * Math.sin(a)])
    }
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      {rings.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={r} {...strokeProps} />
      ))}
    </svg>
  )
}

/** Vesica triad — three overlapping circles */
export function Triad({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <circle cx="100" cy="75" r="45" {...strokeProps} />
      <circle cx="75" cy="120" r="45" {...strokeProps} />
      <circle cx="125" cy="120" r="45" {...strokeProps} />
    </svg>
  )
}

/** Sound wave — a gentle sine, geometry of music itself */
export function Wave({ className = '', ...props }) {
  const path = (amp, phase) => {
    let d = `M 0 100`
    for (let x = 0; x <= 200; x += 4) {
      const y = 100 + amp * Math.sin((x / 200) * Math.PI * 3 + phase)
      d += ` L ${x} ${y.toFixed(1)}`
    }
    return d
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <path d={path(28, 0)} {...strokeProps} />
      <path d={path(18, 1.2)} {...strokeProps} opacity="0.6" />
      <path d={path(10, 2.4)} {...strokeProps} opacity="0.35" />
    </svg>
  )
}

/** Concentric circles — a struck drum, a dropped stone */
export function Ripple({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      {[18, 38, 58, 78, 95].map((r, i) => (
        <circle key={r} cx="100" cy="100" r={r} {...strokeProps} opacity={1 - i * 0.18} />
      ))}
    </svg>
  )
}

/** Ring of small circles — children in a circle */
export function CircleRing({ className = '', ...props }) {
  const points = Array.from({ length: 8 }, (_, i) => {
    const a = ((Math.PI * 2) / 8) * i - Math.PI / 2
    return [100 + 58 * Math.cos(a), 100 + 58 * Math.sin(a)]
  })
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <circle cx="100" cy="100" r="58" {...strokeProps} opacity="0.4" />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={16} {...strokeProps} />
      ))}
      <circle cx="100" cy="100" r="16" {...strokeProps} />
    </svg>
  )
}

/** Simplified Metatron lattice — for the premium home-visit card */
export function Metatron({ className = '', ...props }) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2
    return [100 + 62 * Math.cos(a), 100 + 62 * Math.sin(a)]
  })
  const lines = []
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      lines.push([pts[i], pts[j]])
    }
    lines.push([pts[i], [100, 100]])
  }
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      {lines.map(([[x1, y1], [x2, y2]], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} {...strokeProps} opacity="0.55" />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r={10} {...strokeProps} />
      ))}
      <circle cx="100" cy="100" r="10" {...strokeProps} />
    </svg>
  )
}

const registry = {
  seed: SeedOfLife,
  flower: FlowerOfLife,
  triad: Triad,
  wave: Wave,
  ripple: Ripple,
  circles: CircleRing,
  metatron: Metatron,
}

/** Look up a geometry by name (used by service cards). */
export function Geometry({ variant = 'seed', ...props }) {
  const Comp = registry[variant] || SeedOfLife
  return <Comp {...props} />
}
