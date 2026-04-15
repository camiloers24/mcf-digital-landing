'use client'
import { Terminal } from './Icons'

export default function IntelligenceFab() {
  return (
    <a
      href="https://mcftools.net/"
      target="_blank"
      rel="noopener noreferrer"
      className="fab-intel"
      aria-label="Open MCF.DIGITAL Intelligence"
    >
      <span className="fab-label">MCF Tools</span>
      <span className="fab-icon">
        <Terminal size={22} weight="regular" aria-hidden />
      </span>
    </a>
  )
}
