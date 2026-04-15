import Link from 'next/link'

export default function HomeHero() {
  return (
    <header className="hero">
      <div className="scrim" />
      <div className="content wrap">
        <h1>Turn stranded and low-value gas into bitcoin production.</h1>
        <p className="sub">
          MCF.DIGITAL matches oil and gas operators, miners, and capital, then builds and runs
          on-lease power and compute so everyone wins.
        </p>
        <p className="sub">
          Operators cut flaring and lift pad economics. Miners produce bitcoin at cost,{' '}not&nbsp;retail.
        </p>
        <p className="sub">
          Investors own real assets with custody-first payouts and clean reporting.
        </p>
        <div className="cta-row">
          <Link className="btn acc" href="#choose-your-path">Choose your path</Link>
          <Link className="btn" href="/contact?topic=talk-to-engineer">Talk to an engineer</Link>
          <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">Book a 15-minute fit call</Link>
        </div>
        <div className="hero-intel-cta">
          <Link className="btn acc lg intel-btn" href="https://mcftools.net/" target="_blank" rel="noopener noreferrer">
            Try MCF.Digital Intelligence
          </Link>
        </div>
      </div>
    </header>
  )
}
