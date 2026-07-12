import { PhotoPlaceholder } from './PhotoPlaceholder.jsx'
import { FlowerOfLife } from './SacredGeometry.jsx'

export function Hero({ onBook }) {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
      {/* ambient sacred geometry, drifting slowly behind everything */}
      <FlowerOfLife className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] animate-slow-spin text-clay/[0.07] sm:h-[36rem] sm:w-[36rem]" />
      <FlowerOfLife className="pointer-events-none absolute -bottom-48 -left-40 h-[26rem] w-[26rem] text-seaglass/[0.1]" />

      <div className="relative mx-auto grid max-w-page items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="eyebrow mb-5">South St. Pete · South Tampa · Gulfport</p>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Learn Music with{' '}
            <em className="font-light italic text-clay">Heart</em>,{' '}
            <em className="font-light italic text-seaglass-deep">Rhythm</em>{' '}
            &amp;{' '}
            <em className="font-light italic text-gold">Confidence</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
            Piano, guitar, drums, and voice — taught with patience, warmth, and a
            little Gulf Coast soul. All ages, all levels, right in your neighborhood.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button type="button" onClick={() => onBook()} className="btn-primary w-full sm:w-auto">
              Book Your First Lesson
            </button>
            <a href="#services" className="btn-secondary w-full sm:w-auto">
              Explore Services
            </a>
          </div>
        </div>

        {/* Warm photo placeholder: Charlie with guitar on a porch */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-gold-light/40 to-seaglass-light/40 blur-xl" />
          <PhotoPlaceholder
            gradient="from-gold-light via-clay-light to-clay"
            geometry="flower"
            label="Photo: Charlie & guitar, porch at golden hour"
            className="relative aspect-[4/5] rounded-[2.5rem] shadow-2xl shadow-clay/20"
            geometryClass="w-2/3 max-w-[16rem] animate-gentle-float text-bone/45"
          />
        </div>
      </div>
    </section>
  )
}
