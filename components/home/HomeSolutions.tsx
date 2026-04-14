import Link from 'next/link'

export default function HomeSolutions() {
  return (
    <section className="wrap" id="choose-your-path">
      <h2>Four Operator Problems. Four Built-and-Run Solutions.</h2>
      <p className="lead">
        We don't sell a "thing"—we solve four different pains with four different offers. The site acts like a smart sales triage.
      </p>
      <div className="grid cols-4">
        <Link className="card" href="/flare-site-operators">
          <h3>Flare Gas Monetization for Oil &amp; Gas Operators</h3>
          <p>Urgent compliance and optics. Want fast relief and clear steps.</p>
        </Link>
        <Link className="card" href="/low-netback">
          <h3>On-Lease Solutions for Low Gas Netback Sites</h3>
          <p>Commercial pain. Want parity math and a carve-out that beats pipeline take-home.</p>
        </Link>
        <Link className="card" href="/for-bitcoin-miners">
          <h3>Stranded Gas Mining Pads for Bitcoin Miners</h3>
          <p>Reliability pain. Want pads that ship, breathe, and service easily.</p>
        </Link>
        <Link className="card" href="/hnwi-family-offices">
          <h3>Real-Asset Bitcoin Investment for Family Offices</h3>
          <p>Trust + custody. Want real-asset exposure without the noise.</p>
        </Link>
      </div>
    </section>
  )
}
