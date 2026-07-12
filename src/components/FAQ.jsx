import { useState } from 'react'
import { faqs } from '../data/services.js'
import { useReveal } from '../hooks/useReveal.js'

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold sm:text-xl">{item.q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-clay transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-10 font-body text-sm leading-relaxed text-ink-soft sm:text-base">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useReveal()
  return (
    <section id="faq" className="scroll-mt-20 bg-sand/35 py-16 sm:py-24">
      <div ref={ref} className="reveal mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow mb-3">Good to Know</p>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">
            Questions, <em className="font-light italic text-clay">Answered</em>
          </h2>
        </div>
        <div className="mt-10">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
