import { PhotoPlaceholder } from './PhotoPlaceholder.jsx'
import { SeedOfLife } from './SacredGeometry.jsx'
import { useReveal } from '../hooks/useReveal.js'

export function About() {
  const ref = useReveal()
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
      <SeedOfLife className="pointer-events-none absolute -left-24 top-10 h-72 w-72 text-clay/[0.06]" />

      <div
        ref={ref}
        className="reveal relative mx-auto grid max-w-page items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-2 rotate-2 rounded-[2rem] bg-sand-deep/60" aria-hidden="true" />
          <PhotoPlaceholder
            gradient="from-clay-light via-clay to-clay-deep"
            geometry="seed"
            label="Photo: Charlie, portrait"
            className="relative aspect-[3/4] rounded-[2rem] shadow-xl shadow-clay/20"
            geometryClass="w-1/2 max-w-[10rem] text-bone/45"
          />
        </div>

        <div>
          <p className="eyebrow mb-3">About Charlie</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            Community-Rooted <em className="font-light italic text-clay">Wisdom</em>
          </h2>

          <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-xl font-light italic leading-relaxed text-ink-soft sm:text-2xl">
            "Music is the rhythm of our community and the language of the heart."
          </blockquote>

          <div className="mt-6 max-w-xl space-y-4 font-body text-base leading-relaxed text-ink-soft">
            <p>
              Charlie Fisher is a young, experienced musician who has spent years
              playing, teaching, and listening — on stages, on porches, and in
              living rooms across the Gulf Coast. His approach is gentle and a
              little spiritual: less about drilling scales, more about helping the
              music that's already in you find its way out.
            </p>
            <p>
              Lessons with Charlie are a safe, nurturing space for your creative
              soul. Mistakes are welcome here. Curiosity is the curriculum.
              Whether you're five or seventy-five, you'll be met with patience,
              warmth, and genuine belief in what you can do.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {['Patient', 'Heart-centered', 'Locally rooted', 'All genres welcome'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/10 bg-sand/60 px-4 py-1.5 font-body text-xs font-bold uppercase tracking-wider text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
