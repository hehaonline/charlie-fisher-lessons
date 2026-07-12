import { useState } from 'react'
import { locations } from '../data/services.js'
import { useReveal } from '../hooks/useReveal.js'

// TODO: replace with Charlie's real email once confirmed
const CONTACT_EMAIL = 'hello@charliefisherlessons.com'

export function Contact() {
  const ref = useReveal()
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire to a newsletter provider (Mailchimp, Buttondown, ConvertKit…)
    // For now we confirm locally so the flow feels complete.
    setJoined(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <div ref={ref} className="reveal mx-auto max-w-page px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3">Say Hello</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            Join Our Musical <em className="font-light italic text-seaglass-deep">Community</em>
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
            News about lesson days, the Healing Music Project, and community
            events — occasionally, warmly, never spammy.
          </p>
        </div>

        {/* Newsletter */}
        <div className="mx-auto mt-9 max-w-lg">
          {joined ? (
            <div className="rounded-2xl border border-seaglass/50 bg-seaglass-light/30 px-6 py-5 text-center">
              <p className="font-display text-lg font-semibold text-seaglass-deep">You're in. 🌿</p>
              <p className="mt-1 font-body text-sm text-ink-soft">
                Welcome to the community — keep an ear out.
              </p>
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="field flex-1 !rounded-full !px-6"
              />
              <button type="submit" className="btn-primary shrink-0">
                Join the Community
              </button>
            </form>
          )}
        </div>

        {/* Locations & lesson days — days TBD, structure ready */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-center font-display text-2xl font-medium tracking-tight sm:text-3xl">
            Where the Music Happens
          </h3>
          <p className="mt-2 text-center font-body text-sm text-ink-soft">
            One dedicated lesson day in each neighborhood.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl border border-ink/[0.08] bg-white/60 p-6 text-center shadow-sm"
              >
                <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6 text-clay" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-6.5-5.6-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.4 12 21 12 21z" />
                  <circle cx="12" cy="10.5" r="2.3" />
                </svg>
                <p className="mt-3 font-display text-lg font-semibold">{loc.name}</p>
                {loc.day ? (
                  <p className="mt-1 font-body text-sm font-bold uppercase tracking-wider text-seaglass-deep">
                    {loc.day}
                  </p>
                ) : (
                  <p className="mt-1 inline-block rounded-full bg-sand px-3 py-1 font-body text-[11px] font-bold uppercase tracking-wider text-ink-soft">
                    {loc.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Direct contact */}
        <p className="mt-12 text-center font-body text-sm text-ink-soft">
          Prefer email? Write to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-clay underline decoration-clay/30 underline-offset-4 hover:decoration-clay">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}
