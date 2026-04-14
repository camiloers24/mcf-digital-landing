import DownloadButton from '../DownloadButton'

export default function HomeResources() {
  return (
    <section className="wrap">
      <h2>Operator Resources: Flare Gas to Bitcoin Guides</h2>
      <p className="lead">
        Fast access to our briefs, blueprints, and whitepapers. We'll send a copy to your inbox.
      </p>
      <div className="sp-16" />
      <div className="grid cols-3">
        <div className="card">
          <h3>Flare → Bitcoin Blueprint</h3>
          <p>Compliance optics and fast relief for flaring pads. Clear steps, field-ready.</p>
          <DownloadButton label="Download PDF" slug="flare-site-operators" />
        </div>
        <div className="card">
          <h3>Netback Fixer</h3>
          <p>Beat pipeline take-home with an on-lease carve-out that pencils at parity.</p>
          <DownloadButton label="Download PDF" slug="low-netback" />
        </div>
        <div className="card">
          <h3>BTU → BTC Quick-Start</h3>
          <p>On-lease power and compute that survives dust, heat, and churn.</p>
          <DownloadButton label="Download PDF" slug="for-bitcoin-miners" />
        </div>
      </div>
    </section>
  )
}
