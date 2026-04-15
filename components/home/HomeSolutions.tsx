import Link from 'next/link'

const solutions = [
  {
    href: '/flare-site-operators',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 6-6 8-6 13a6 6 0 0 0 12 0c0-5-6-7-6-13z"/>
        <path d="M12 12c0 3-2 4-2 6a2 2 0 0 0 4 0c0-2-2-3-2-6z"/>
      </svg>
    ),
    title: 'Flare Gas Monetization for Oil & Gas Operators',
    body: 'Urgent compliance and optics. Want fast relief and clear steps.',
  },
  {
    href: '/low-netback',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    title: 'On-Lease Solutions for Low Gas Netback Sites',
    body: 'Commercial pain. Want parity math and a carve-out that beats pipeline take-home.',
  },
  {
    href: '/for-bitcoin-miners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    title: 'Stranded Gas Mining Pads for Bitcoin Miners',
    body: 'Reliability pain. Want pads that ship, breathe, and service easily.',
  },
  {
    href: '/hnwi-family-offices',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Real-Asset Bitcoin Investment for Family Offices',
    body: 'Trust + custody. Want real-asset exposure without the noise.',
  },
]

export default function HomeSolutions() {
  return (
    <section className="wrap" id="choose-your-path">
      <h2>Four Operator Problems. Four Built-and-Run Solutions.</h2>
      <p className="lead">
        We don&apos;t sell a &ldquo;thing&rdquo;—we solve four different pains with four different offers. The site acts like a smart sales triage.
      </p>
      <div className="grid cols-4">
        {solutions.map((s) => (
          <Link key={s.href} className="card sol-card" href={s.href}>
            <span className="sol-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
