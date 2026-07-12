import { useEffect, useRef } from 'react'
import { services } from '../data/services.js'
import { SeedOfLife } from './SacredGeometry.jsx'

/**
 * BookingModal — Cal.com embed placeholder.
 *
 * WIRING THE REAL CAL.COM EMBED LATER
 * ───────────────────────────────────
 * 1. Create one event type per service in Cal.com and copy its link
 *    (e.g. "charlie-fisher/piano").
 * 2. Put each link in src/data/services.js under `calLink`.
 * 3. Replace the <CalPlaceholder /> below with the official inline embed:
 *
 *      npm install @calcom/embed-react
 *
 *      import Cal from "@calcom/embed-react";
 *      <Cal calLink={service.calLink} style={{ width: "100%", height: "100%" }} />
 *
 *    That's the whole swap — the modal shell, service picker, and
 *    styling all stay exactly as they are.
 */

function CalPlaceholder({ service }) {
  return (
    <div className="flex h-full min-h-[22rem] flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-clay/30 bg-sand/30 p-8 text-center">
      <SeedOfLife className="h-16 w-16 animate-slow-spin text-clay/50" />
      <p className="font-display text-xl font-semibold">
        Cal.com scheduler — {service.name}
      </p>
      <p className="max-w-xs font-body text-sm leading-relaxed text-ink-soft">
        The live calendar for <strong>{service.name}</strong> ({service.price} ·{' '}
        {service.duration}) will appear right here once Charlie's Cal.com
        account is connected.
      </p>
      <code className="rounded-lg bg-ink/5 px-3 py-1.5 font-mono text-xs text-ink-soft">
        calLink: {service.calLink || 'charlie-fisher/…'}
      </code>
    </div>
  )
}

export function BookingModal({ service, onSelectService, onClose }) {
  const dialogRef = useRef(null)
  const bookable = services.filter((s) => s.booking === 'cal')

  // Close on Escape; trap initial focus
  useEffect(() => {
    dialogRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Book a lesson"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-bone p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Book a Lesson</p>
            <h3 className="mt-1 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {service ? service.name : 'Choose your lesson'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 text-ink-soft transition-colors hover:border-clay hover:text-clay"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {!service ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bookable.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => onSelectService(s)}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-md"
              >
                <span>
                  <span className="block font-display text-base font-semibold">{s.name}</span>
                  <span className="block font-body text-xs text-ink-soft">
                    {s.price} · {s.duration}
                  </span>
                </span>
                <span className="text-clay transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-6">
            <CalPlaceholder service={service} />
            <button
              type="button"
              onClick={() => onSelectService(null)}
              className="mt-4 font-body text-sm font-bold text-clay underline decoration-clay/30 underline-offset-4 hover:decoration-clay"
            >
              ← Choose a different lesson
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
