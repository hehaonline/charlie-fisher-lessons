import { useEffect, useState } from 'react'

/**
 * StickyBook — the mobile-only sticky "Book a Lesson" bar.
 * Appears after the visitor scrolls past the hero; hidden on lg+ screens
 * (desktop users have the button in the nav).
 */
export function StickyBook({ onBook }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 pt-2 transition-transform duration-300 lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bone via-bone/80 to-transparent" />
      <button
        type="button"
        onClick={() => onBook()}
        className="btn-primary relative w-full !py-4 !text-sm shadow-2xl shadow-clay/40"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18V6l10-2v12" />
          <circle cx="6.5" cy="18" r="2.5" />
          <circle cx="16.5" cy="16" r="2.5" />
        </svg>
        Book a Lesson
      </button>
    </div>
  )
}
