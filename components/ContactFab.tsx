'use client'
import { ChatText } from './Icons'

export default function ContactFab() {
  return (
    <a href="/contact" className="fab-contact" aria-label="Contact us">
      <span className="fab-label">Contact</span>
      <span className="fab-icon">
        <ChatText size={22} weight="regular" aria-hidden />
      </span>
    </a>
  )
}
