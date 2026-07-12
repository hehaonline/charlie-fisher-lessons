import { useEffect, useRef } from 'react'

/**
 * Adds a gentle fade-up reveal when the element scrolls into view.
 * Respects prefers-reduced-motion (handled in CSS).
 *
 * Usage: const ref = useReveal(); <section ref={ref} className="reveal">…
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
