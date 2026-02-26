'use client'

export default function IntelligenceFab() {
  return (
    <a href="/intelligence" className="fab-intel" aria-label="Open MCF.DIGITAL Intelligence">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9A2.5 2.5 0 0 1 16.5 19h-9A2.5 2.5 0 0 1 5 16.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M8 10h8M8 14h2.5M13.5 14H16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <span>MCF Tools</span>
    </a>
  )
}
