import { useReveal } from '../hooks/useReveal.js'

const badges = [
  {
    label: 'All Ages Welcome',
    detail: 'From age 5 to adults',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
        <circle cx="17" cy="10" r="2.4" />
        <path d="M15 19c.2-2.2 1.8-3.6 4-3.6 1 0 1.8.3 2.5.8" />
      </svg>
    ),
  },
  {
    label: '3 Locations',
    detail: 'St. Pete · Tampa · Gulfport',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6.5-5.6-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.4 12 21 12 21z" />
        <circle cx="12" cy="10.5" r="2.3" />
      </svg>
    ),
  },
  {
    label: 'All Levels',
    detail: 'First note to performance',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V6l10-2v12" />
        <circle cx="6.5" cy="18" r="2.5" />
        <circle cx="16.5" cy="16" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Home Visits Available',
    detail: 'Lessons in your living room',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
]

export function TrustBadges() {
  const ref = useReveal()
  return (
    <section className="border-y border-ink/[0.07] bg-sand/40">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-page grid-cols-2 gap-x-4 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4 lg:py-12"
      >
        {badges.map((b) => (
          <div key={b.label} className="flex flex-col items-center gap-2.5 text-center">
            <span className="text-clay">{b.icon}</span>
            <span className="font-display text-base font-semibold leading-tight sm:text-lg">{b.label}</span>
            <span className="font-body text-xs text-ink-soft">{b.detail}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
