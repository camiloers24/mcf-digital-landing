import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <header className="hero">
        <div className="scrim" />
        <div className="content wrap">
          <p className="kicker">404 Error</p>
          <h1>That route does not exist.</h1>
          <p className="sub">
            Looks like this URL is off-pad. Head back to MCF.DIGITAL and pick the path that fits your operation.
          </p>
          <div className="cta-row">
            <Link className="btn acc" href="/">Back to homepage</Link>
            <Link className="btn" href="/contact">Contact our team</Link>
          </div>
        </div>
      </header>

      <section className="wrap">
        <h2>Popular routes</h2>
        <p className="lead">Jump directly to the page you were likely trying to reach.</p>
        <div className="grid cols-4">
          <Link className="card" href="/flare-site-operators">
            <h3>Flare Site Operators</h3>
            <p>Turn stranded gas into on-lease bitcoin compute.</p>
          </Link>
          <Link className="card" href="/low-netback">
            <h3>Low Netback Sites</h3>
            <p>Improve wellhead economics with field-ready power conversion.</p>
          </Link>
          <Link className="card" href="/for-bitcoin-miners">
            <h3>For Bitcoin Miners</h3>
            <p>Deploy reliable infrastructure designed for pad conditions.</p>
          </Link>
          <Link className="card" href="/hnwi-family-offices">
            <h3>HNWI &amp; Family Offices</h3>
            <p>Real-asset bitcoin infrastructure with custody-first reporting.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
