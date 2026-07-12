import { PhotoPlaceholder } from './PhotoPlaceholder.jsx'
import { useReveal } from '../hooks/useReveal.js'

const points = [
  {
    title: 'Affordable',
    body: 'Just $25 per child — shared sessions make quality music education reachable for every family.',
  },
  {
    title: 'Social',
    body: 'Small groups of five children at most. Kids make music — and friends — at the same time.',
  },
  {
    title: 'Confidence-building',
    body: 'Clapping, singing, and playing together turns shy first-timers into proud little musicians.',
  },
]

export function Kids({ onBook }) {
  const ref = useReveal()
  return (
    <section id="kids" className="scroll-mt-20 bg-seaglass-light/25 py-16 sm:py-24">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-page items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16"
      >
        <div className="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <PhotoPlaceholder
            gradient="from-seaglass-light via-gold-light to-clay-light"
            geometry="circles"
            label="Photo: kids shared session"
            className="aspect-[5/4] rounded-[2.5rem] shadow-xl shadow-seaglass/25"
            geometryClass="w-1/2 max-w-[13rem] text-white/55"
          />
        </div>

        <div className="lg:order-1">
          <p className="eyebrow mb-3 !text-seaglass-deep">Kids Shared Sessions · $25 per child</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            Harmony for <em className="font-light italic text-seaglass-deep">Little Hearts</em>
          </h2>
          <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-ink-soft">
            Music lands differently when you're small — it's play, wonder, and
            belonging all at once. Charlie's shared sessions keep groups tiny
            (never more than five) so every child is seen, heard, and celebrated.
          </p>

          <dl className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-seaglass-deep" aria-hidden="true" />
                <div>
                  <dt className="font-display text-lg font-semibold">{p.title}</dt>
                  <dd className="mt-0.5 font-body text-sm leading-relaxed text-ink-soft">{p.body}</dd>
                </div>
              </div>
            ))}
          </dl>

          <button type="button" onClick={onBook} className="btn-primary mt-9 !bg-seaglass-deep !shadow-seaglass/30 hover:!bg-ink">
            Book a Kids Session
          </button>
        </div>
      </div>
    </section>
  )
}
