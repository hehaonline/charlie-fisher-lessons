import { Ripple, Wave } from './SacredGeometry.jsx'
import { useReveal } from '../hooks/useReveal.js'

export function Healing() {
  const ref = useReveal()
  return (
    <section id="healing" className="relative scroll-mt-20 overflow-hidden bg-ink py-16 text-bone sm:py-24">
      {/* ambient geometry on dark */}
      <Ripple className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-seaglass/20" />
      <Wave className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 text-gold/15" />

      <div ref={ref} className="reveal relative mx-auto max-w-page px-5 text-center sm:px-8">
        <p className="eyebrow mb-3 !text-gold-light">Coming from Charlie</p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-5xl">
          The Healing Music <em className="font-light italic text-seaglass-light">Project</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-bone/75">
          Beyond lessons, Charlie is weaving something bigger: sound journeys,
          community rhythm circles, and gatherings where frequency does the
          talking. Music as medicine for the soul — shared, local, and open to all.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { title: 'Sound Journeys', body: 'Immersive listening experiences built on healing frequencies.' },
            { title: 'Rhythm Circles', body: 'Community drumming — no experience needed, only presence.' },
            { title: 'Music as Medicine', body: 'Sound support for wellness spaces, ceremonies, and events.' },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-bone/10 bg-bone/[0.04] p-6 backdrop-blur-sm">
              <h3 className="font-display text-lg font-semibold text-gold-light">{c.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-bone/70">{c.body}</p>
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-primary mt-10 !bg-seaglass-deep !shadow-seaglass-deep/40 hover:!bg-seaglass">
          Learn About the Healing Music Project
        </a>
      </div>
    </section>
  )
}
