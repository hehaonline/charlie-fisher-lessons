import { services } from '../data/services.js'
import { Geometry } from './SacredGeometry.jsx'
import { useReveal } from '../hooks/useReveal.js'

function ServiceCard({ service, onBook, onHomeVisit }) {
  const isForm = service.booking === 'form'
  const handleClick = () => {
    if (service.id === 'home-visits') onHomeVisit()
    else if (isForm) onHomeVisit(service.name)
    else onBook(service)
  }

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-clay/10 ${
        service.specialty
          ? 'border-gold/60 ring-1 ring-gold/40'
          : service.premium
            ? 'border-clay/40 ring-1 ring-clay/25'
            : 'border-ink/[0.08]'
      }`}
    >
      {/* gradient header with geometry */}
      <div className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${service.gradient}`}>
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-bone/20 blur-2xl" />
        <Geometry
          variant={service.geometry}
          className="h-24 w-24 text-bone/50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
        />
        {service.specialty && (
          <span className="absolute left-3 top-3 rounded-full bg-bone/90 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-clay-deep">
            Charlie's Specialty
          </span>
        )}
        {service.premium && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-gold-light backdrop-blur-sm">
            Premium
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-snug">{service.name}</h3>
          <div className="text-right">
            <span className="font-display text-2xl font-semibold text-clay">{service.price}</span>
            <span className="block font-body text-[11px] uppercase tracking-wider text-ink-soft">
              {service.duration}
            </span>
          </div>
        </div>
        <p className="mt-1 font-body text-[11px] font-bold uppercase tracking-[0.15em] text-seaglass-deep">
          {service.unit}
        </p>
        <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink-soft">{service.blurb}</p>
        <button
          type="button"
          onClick={handleClick}
          className={`mt-5 w-full rounded-full py-3 font-body text-xs font-bold uppercase tracking-widest transition-colors ${
            isForm
              ? 'border-2 border-clay text-clay hover:bg-clay hover:text-bone'
              : 'bg-ink text-bone hover:bg-clay'
          }`}
        >
          {service.id === 'home-visits'
            ? 'Request a Home Visit'
            : service.id === 'sound-support'
              ? 'Request a Quote'
              : `Book ${service.name.split(' ')[0]}`}
        </button>
      </div>
    </article>
  )
}

export function Services({ onBook, onHomeVisit }) {
  const ref = useReveal()
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <div ref={ref} className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Lessons &amp; Offerings</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            Seven Ways In to the Music
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
            Every path is welcome — whether you're five years old and curious,
            or picking up where you left off decades ago.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} onBook={onBook} onHomeVisit={onHomeVisit} />
          ))}
        </div>
      </div>
    </section>
  )
}
