'use client'
import { useState } from 'react'
import { CaretDown } from './Icons'

type FaqItem = { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' is-open' : ''}`}>
          <button
            className="faq-trigger"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="faq-q">{item.q}</span>
            <span className="faq-icon">
              <CaretDown size={16} weight="bold" aria-hidden />
            </span>
          </button>
          <div className="faq-body">
            <div className="faq-body-inner">
              <p>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
