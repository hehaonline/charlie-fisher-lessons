import { useEffect, useState } from 'react'
import { SeedOfLife } from './SacredGeometry.jsx'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#kids', label: 'For Kids' },
  { href: '#about', label: 'About Charlie' },
  { href: '#healing', label: 'Healing Music' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Nav({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-bone/90 shadow-sm shadow-ink/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label="Charlie Fisher Lessons — home">
          <SeedOfLife className="h-9 w-9 text-clay transition-transform duration-500 group-hover:rotate-45" />
          <span className="font-display text-lg font-semibold leading-tight tracking-tight">
            Charlie Fisher
            <span className="block font-body text-[10px] font-bold uppercase tracking-[0.3em] text-ink-soft">
              Lessons
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-semibold text-ink-soft transition-colors hover:text-clay"
            >
              {l.label}
            </a>
          ))}
          <button type="button" onClick={() => onBook()} className="btn-primary !px-5 !py-2.5 !text-xs">
            Book a Lesson
          </button>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-ink/10 bg-bone/95 px-5 pb-6 pt-3 backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/5 py-3 font-body text-base font-semibold text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
