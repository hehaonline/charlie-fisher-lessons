import { SeedOfLife } from './SacredGeometry.jsx'

// TODO: replace with Charlie's real email once confirmed
const CONTACT_EMAIL = 'hello@charliefisherlessons.com'

export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-sand/50">
      <div className="mx-auto flex max-w-page flex-col items-center gap-5 px-5 py-12 text-center sm:px-8">
        <SeedOfLife className="h-12 w-12 text-clay/70" />
        <p className="font-display text-xl font-medium tracking-tight">Charlie Fisher Lessons</p>
        <p className="font-display text-base font-light italic text-ink-soft">
          "Locally tuned, heart-centered music."
        </p>
        <p className="font-body text-sm text-ink-soft">
          Serving South St. Pete, South Tampa &amp; Gulfport, FL
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-body text-sm font-bold text-clay underline decoration-clay/30 underline-offset-4 hover:decoration-clay"
        >
          {CONTACT_EMAIL}
        </a>
        <p className="mt-4 font-body text-xs text-ink-soft/60">
          © {new Date().getFullYear()} Charlie Fisher Lessons · Site by G-OOD Designs
        </p>
      </div>
    </footer>
  )
}
