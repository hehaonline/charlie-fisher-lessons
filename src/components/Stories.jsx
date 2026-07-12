import { Triad } from './SacredGeometry.jsx'
import { useReveal } from '../hooks/useReveal.js'

export function Stories({ onBook }) {
  const ref = useReveal()
  return (
    <section id="stories" className="scroll-mt-20 py-16 sm:py-24">
      <div ref={ref} className="reveal mx-auto max-w-page px-5 sm:px-8">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-dashed border-clay/40 bg-sand/40 px-6 py-14 text-center sm:px-12">
          <Triad className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 text-clay/10" />
          <Triad className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 text-seaglass/15" />

          <p className="eyebrow mb-3">Student Stories</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Real Stories Are on Their Way
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-ink-soft">
            This space is reserved for the voices of Charlie's students — and we'd
            rather leave it open than fill it with anything invented. Be one of
            the first to experience Charlie's lessons and share yours.
          </p>
          <button type="button" onClick={onBook} className="btn-secondary mt-8 !border-clay/40 hover:!border-clay hover:!text-clay">
            Be a First Student
          </button>
        </div>
      </div>
    </section>
  )
}
