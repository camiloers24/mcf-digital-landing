import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCF.DIGITAL Intelligence Coming Soon',
  description:
    'MCF.DIGITAL Intelligence is launching soon with field-ready tools to evaluate stranded gas and bitcoin compute opportunities.',
  openGraph: {
    title: 'MCF.DIGITAL Intelligence Coming Soon',
    description:
      'MCF.DIGITAL Intelligence is launching soon with field-ready tools to evaluate stranded gas and bitcoin compute opportunities.',
    type: 'website',
  },
  alternates: {
    canonical: '/intelligence',
  },
}

export default function IntelligenceComingSoonPage() {
  return (
    <main>
      <header className="hero intelligence-hero">
        <div className="hero-bg" />
        <div className="scrim" />
        <div className="content wrap">
          <p className="kicker">MCF.DIGITAL Intelligence</p>
          <h1>Coming soon.</h1>
          <p className="sub">
            We are building a field-ready intelligence layer for evaluating stranded gas and bitcoin
            compute opportunities with speed, clarity, and better decision support.
          </p>
          <p className="sub">
            Early access is opening soon for operators, miners, and capital partners.
          </p>
          <div className="cta-row">
            <Link className="btn acc lg" href="/contact?topic=intelligence-early-access">
              Join the early access list
            </Link>
            <Link className="btn lg" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
              Book a 15-minute fit call
            </Link>
          </div>
        </div>
      </header>

      <section className="wrap">
        <div className="card gold-glow">
          <h2>What to expect</h2>
          <p className="lead">Here&apos;s how to get started once MCF.DIGITAL Intelligence launches.</p>
          <div className="grid cols-3">
            <div>
              <p className="kicker">Step 1</p>
              <h3>Pick a calculator</h3>
              <p>Choose from five purpose-built tools for gas-to-value, quality, derate, economics, and ops.</p>
            </div>
            <div>
              <p className="kicker">Step 2</p>
              <h3>Enter your gas data</h3>
              <p>Input MCFD, BTU, and composition details. Most runs should take under two minutes.</p>
            </div>
            <div>
              <p className="kicker">Step 3</p>
              <h3>Review your results</h3>
              <p>Get a printable analysis with clear traffic-light style ratings for quick decision-making.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
