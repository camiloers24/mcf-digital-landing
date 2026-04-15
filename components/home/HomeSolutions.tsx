'use client'
import Link from 'next/link'
import { Flame, TrendDown, HardDrives, Vault } from '../Icons'

const solutions = [
  {
    href: '/flare-site-operators',
    icon: <Flame size={28} weight="duotone" aria-hidden />,
    title: 'Flare Gas Monetization for Oil & Gas Operators',
    body: 'Urgent compliance and optics. Want fast relief and clear steps.',
  },
  {
    href: '/low-netback',
    icon: <TrendDown size={28} weight="duotone" aria-hidden />,
    title: 'On-Lease Solutions for Low Gas Netback Sites',
    body: 'Commercial pain. Want parity math and a carve-out that beats pipeline take-home.',
  },
  {
    href: '/for-bitcoin-miners',
    icon: <HardDrives size={28} weight="duotone" aria-hidden />,
    title: 'Stranded Gas Mining Pads for Bitcoin Miners',
    body: 'Reliability pain. Want pads that ship, breathe, and service easily.',
  },
  {
    href: '/hnwi-family-offices',
    icon: <Vault size={28} weight="duotone" aria-hidden />,
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
