import { Geometry } from './SacredGeometry.jsx'

/**
 * PhotoPlaceholder — a warm gradient block with subtle sacred geometry,
 * standing in wherever a real photo of Charlie will go later.
 *
 * To swap in a real photo: replace this component with
 *   <img src="/photos/…" alt="…" className="h-full w-full object-cover" />
 */
export function PhotoPlaceholder({
  gradient = 'from-gold-light via-clay-light to-clay',
  geometry = 'seed',
  label,
  className = '',
  geometryClass = 'w-3/4 max-w-xs text-bone/40',
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={label || 'Photo coming soon'}
    >
      {/* soft golden-hour glow */}
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-2/3 w-2/3 rounded-full bg-gold-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full bg-bone/20 blur-3xl" />
      <Geometry variant={geometry} className={geometryClass} />
      {label && (
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/25 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-bone/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  )
}
