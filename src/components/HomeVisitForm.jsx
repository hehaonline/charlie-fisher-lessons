import { useEffect, useRef, useState } from 'react'
import { Metatron } from './SacredGeometry.jsx'

// TODO: replace with Charlie's real email once confirmed
const CONTACT_EMAIL = 'hello@charliefisherlessons.com'

const instruments = ['Piano', 'Guitar', 'Drums', 'Voice / Singing', 'Singing + Instrument', 'Other']
const levels = ['Complete beginner', 'Some experience', 'Intermediate', 'Advanced / returning']
const areas = ['South St. Pete', 'South Tampa', 'Gulfport', 'Nearby — will describe']
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const initial = {
  name: '',
  email: '',
  age: '',
  instrument: instruments[0],
  level: levels[0],
  goals: '',
  equipment: 'yes',
  area: areas[0],
  preferredDays: [],
}

/**
 * HomeVisitForm — the request-based intake for Custom Home Visits ($85 / 60–75 min).
 * On submit it opens a pre-filled email draft to Charlie (works with zero backend),
 * then shows a confirmation. Swap the mailto for a Formspree/API call later if desired.
 */
export function HomeVisitForm({ onClose, intent = 'Home Visit' }) {
  const dialogRef = useRef(null)
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

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

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const toggleDay = (d) =>
    setForm((f) => ({
      ...f,
      preferredDays: f.preferredDays.includes(d)
        ? f.preferredDays.filter((x) => x !== d)
        : [...f.preferredDays, d],
    }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = [
      `${intent} request from ${form.name}`,
      '',
      `Student age: ${form.age}`,
      `Instrument: ${form.instrument}`,
      `Skill level: ${form.level}`,
      `Goals: ${form.goals}`,
      `Has own equipment: ${form.equipment}`,
      `Area: ${form.area}`,
      `Preferred days: ${form.preferredDays.join(', ') || 'Flexible'}`,
      '',
      `Reply to: ${form.email}`,
    ].join('\n')

    // Opens a ready-to-send email draft — no backend needed.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `${intent} Request — ${form.name}`
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Request a ${intent}`}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-bone p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">$85 · 60–75 min · request-based</p>
            <h3 className="mt-1 font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Request a {intent}
            </h3>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-ink-soft">
              A few questions so Charlie can shape the session around you before
              he arrives. He'll reply personally to confirm details and timing.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 text-ink-soft transition-colors hover:border-clay hover:text-clay"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {sent ? (
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-seaglass/50 bg-seaglass-light/30 px-6 py-10 text-center">
            <Metatron className="h-16 w-16 text-seaglass-deep/60" />
            <p className="font-display text-xl font-semibold text-seaglass-deep">Request drafted ✨</p>
            <p className="max-w-sm font-body text-sm leading-relaxed text-ink-soft">
              Your email app should have opened with everything filled in — just
              hit send. If it didn't, email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-clay underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>{' '}
              directly and mention "{intent}".
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-2">
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="hv-name" className="field-label">Your name</label>
              <input id="hv-name" required className="field" value={form.name} onChange={set('name')} placeholder="Jordan Rivera" />
            </div>
            <div>
              <label htmlFor="hv-email" className="field-label">Email</label>
              <input id="hv-email" type="email" required className="field" value={form.email} onChange={set('email')} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="hv-age" className="field-label">Student age</label>
              <input id="hv-age" required className="field" value={form.age} onChange={set('age')} placeholder="e.g. 9, or 34" inputMode="numeric" />
            </div>
            <div>
              <label htmlFor="hv-instrument" className="field-label">Instrument</label>
              <select id="hv-instrument" className="field" value={form.instrument} onChange={set('instrument')}>
                {instruments.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="hv-level" className="field-label">Skill level</label>
              <select id="hv-level" className="field" value={form.level} onChange={set('level')}>
                {levels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="hv-area" className="field-label">Your area</label>
              <select id="hv-area" className="field" value={form.area} onChange={set('area')}>
                {areas.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="hv-goals" className="field-label">Goals — what would you love to learn?</label>
              <textarea
                id="hv-goals"
                required
                rows={3}
                className="field resize-none"
                value={form.goals}
                onChange={set('goals')}
                placeholder="Play my favorite songs, prepare for a performance, just enjoy music again…"
              />
            </div>

            <fieldset className="sm:col-span-2">
              <legend className="field-label">Do you have your own equipment / instrument?</legend>
              <div className="flex gap-3">
                {[
                  { v: 'yes', label: 'Yes' },
                  { v: 'no', label: 'Not yet' },
                  { v: 'partly', label: 'Partly' },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className={`flex-1 cursor-pointer rounded-xl border px-4 py-3 text-center font-body text-sm font-bold transition-colors ${
                      form.equipment === opt.v
                        ? 'border-clay bg-clay/10 text-clay-deep'
                        : 'border-ink/15 bg-white/70 text-ink-soft hover:border-clay/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="equipment"
                      value={opt.v}
                      checked={form.equipment === opt.v}
                      onChange={set('equipment')}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="sm:col-span-2">
              <legend className="field-label">Preferred days (pick any)</legend>
              <div className="flex flex-wrap gap-2">
                {days.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDay(d)}
                    aria-pressed={form.preferredDays.includes(d)}
                    className={`rounded-full border px-4 py-2 font-body text-xs font-bold uppercase tracking-wider transition-colors ${
                      form.preferredDays.includes(d)
                        ? 'border-seaglass-deep bg-seaglass-deep text-bone'
                        : 'border-ink/15 bg-white/70 text-ink-soft hover:border-seaglass'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="btn-primary sm:col-span-2">
              Send My Request
            </button>
            <p className="text-center font-body text-xs text-ink-soft/70 sm:col-span-2">
              This opens a pre-filled email to Charlie — nothing is stored on this site.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
