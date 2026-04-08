import Link from 'next/link'
import type { Metadata } from 'next'
import DownloadButton from '../components/DownloadButton'
import IllustrationStrip from '../components/IllustrationStrip'
import HeroVideo from '../components/HeroVideo'
import JsonLd from '../components/JsonLd'
import { videoObjectSchema } from '../lib/schema'

const heroVideoSchema = videoObjectSchema({
  name: 'MCF.digital On-Lease Gas-to-Bitcoin System Overview',
  description:
    'A walkthrough of how MCF.digital converts wellhead gas into on-lease Bitcoin production — covering genset deployment, power conditioning, ASIC container setup, and custody-first payout structure.',
  thumbnailUrl: 'https://mcf.digital/assets/illustrations/home-2.png',
  uploadDate: '2026-01-01',
  contentUrl: 'https://mcf.digital/media/hero.mp4',
})

export const metadata: Metadata = {
  title: 'Turn Stranded Gas Into Bitcoin Production | MCF.digital',
  description:
    'MCF.digital matches O&G operators, miners, and capital — then builds and runs on-lease power and compute. Operators cut flaring. Miners produce BTC at cost.',
  openGraph: {
    title: 'Turn Stranded Gas Into Bitcoin Production | MCF.digital',
    description:
      'MCF.digital matches O&G operators, miners, and capital — then builds and runs on-lease power and compute. Operators cut flaring. Miners produce BTC at cost.',
    type: 'website',
    url: 'https://mcf.digital/',
    siteName: 'MCF.digital',
    images: [{ url: 'https://mcf.digital/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
  alternates: {
    canonical: 'https://mcf.digital/',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={heroVideoSchema} />
      <header className="hero">
        <HeroVideo />

        <div className="scrim" />
        <div className="content wrap">
          <h1>Turn stranded and low-value gas into bitcoin production.</h1>
          <p className="sub">
            MCF.DIGITAL matches oil and gas operators, miners, and capital, then builds and runs
            on-lease power and compute so everyone wins.
          </p>
          <p className="sub">
            Operators cut flaring and lift pad economics. Miners produce bitcoin at cost, not
            retail.
          </p>
          <p className="sub">
            Investors own real assets with custody-first payouts and clean reporting.
          </p>
          <div className="cta-row">
            <Link className="btn acc" href="#choose-your-path">Choose your path</Link>
            <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">Book a 15-minute fit call</Link>
            <Link className="btn" href="/contact?topic=talk-to-engineer">Talk to an engineer</Link>
          </div>
          <div className="hero-intel-cta">
            <Link className="btn acc lg intel-btn" href="https://mcftools.net/" target="_blank" rel="noopener noreferrer">
              Try MCF.Digital Intelligence
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="wrap">
          <h2>Operator Resources: Flare Gas to Bitcoin Guides</h2>
          <p className="lead">
            Fast access to our briefs, blueprints, and whitepapers. We’ll send a copy to your inbox.
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

        {/* Home illustrations */}
        <section className="wrap">
          <h2>How On-Lease Gas-to-Bitcoin Systems Work</h2>
          <p className="lead">From interconnects to thermals and custody—clean visuals that match the field.</p>
          <div className="sp-16" />
          <IllustrationStrip
            cols={2}
            ratio="4 / 3"
            gap={16}
            minColWidth={420}
            items={[
              { src: '/assets/illustrations/home-1.png', alt: 'MCF.digital on-lease gas-to-Bitcoin system overview — genset, power conditioning, ASIC container, and custody payout', caption: 'System overview' },
              { src: '/assets/illustrations/home-2.png', alt: 'On-lease Bitcoin mining compute container deployed at an oil and gas wellhead pad', caption: 'On-lease compute container' },
              { src: '/assets/illustrations/low-netbacks.png', alt: 'On-lease carve-out economics compared to pipeline netback — MCF.digital netback improvement diagram', caption: 'Economics that pencil' },
            ]}
          />
        </section>

        <section className="wrap" id="choose-your-path">
          <h2>Four Operator Problems. Four Built-and-Run Solutions.</h2>
          <p className="lead">
            We don’t sell a “thing”—we solve four different pains with four different offers. The site acts like a smart sales triage.
          </p>
          <div className="grid cols-4">
            <Link className="card" href="/flare-site-operators"><h3>Flare Gas Monetization for Oil &amp; Gas Operators</h3><p>Urgent compliance and optics. Want fast relief and clear steps.</p></Link>
            <Link className="card" href="/low-netback"><h3>On-Lease Solutions for Low Gas Netback Sites</h3><p>Commercial pain. Want parity math and a carve-out that beats pipeline take-home.</p></Link>
            <Link className="card" href="/for-bitcoin-miners"><h3>Stranded Gas Mining Pads for Bitcoin Miners</h3><p>Reliability pain. Want pads that ship, breathe, and service easily.</p></Link>
            <Link className="card" href="/hnwi-family-offices"><h3>Real-Asset Bitcoin Investment for Family Offices</h3><p>Trust + custody. Want real-asset exposure without the noise.</p></Link>
          </div>
        </section>
      </main>
    </>
  )
}
