// app/low-netback/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import IllustrationStrip from '../../components/IllustrationStrip'
import NetbackForm from '../../components/NetbackForm'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://mcf.digital/' },
  { name: 'Low Netback', url: 'https://mcf.digital/low-netback' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'On-Lease Bitcoin Mining for Low Gas Netback Sites',
  provider: { '@type': 'Organization', name: 'MCF.digital' },
  description:
    'MCF.digital builds on-lease gas-to-Bitcoin carve-outs for producers with thin netbacks. Operators keep their pipeline deal while adding an on-pad compute offtake that beats pipeline take-home economics.',
  areaServed: 'United States',
  serviceType: 'Low Netback Gas Monetization',
  url: 'https://mcf.digital/low-netback',
}

export const metadata: Metadata = {
  title: 'Beat Low Gas Netbacks with On-Lease Bitcoin Mining | MCF.digital',
  description:
    'Your gas netback is thin because midstream takes the margin. MCF.digital builds an on-lease carve-out that pencils at parity. See the math for your pad.',
  openGraph: {
    title: 'Beat Low Gas Netbacks with On-Lease Bitcoin Mining | MCF.digital',
    description:
      'Your gas netback is thin because midstream takes the margin. MCF.digital builds an on-lease carve-out that pencils at parity. See the math for your pad.',
    type: 'website',
    url: 'https://mcf.digital/low-netback',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-netback.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
  alternates: {
    canonical: 'https://mcf.digital/low-netback',
  },
}

export default function LowNetbackPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbs} />
      <section className="hero netbacks-hero">
<div className="scrim" />
        <div className="content wrap hero-inner">
          <div className="hero-copy">
            <div className="kicker">Low Netbacks With Existing Offtake</div>
            <h1>Show us your weakest netbacks</h1>
            <p className="lead">
              Carve out a take-in-kind base volume, beat the pipeline netback on pad with compute offtake. Keep your pipeline
              deal, fix the margins at the edges.
            </p>
          </div>
          <div className="hero-actions card">
            <div className="hero-actions-title">Get relief in 3 steps</div>
            <div className="hero-actions-grid">
              <Link className="btn acc" href="/contact?topic=netbacks-upload">
                Upload last 3 months of pad netbacks
              </Link>
              <Link className="btn acc" href="#netback-form">
                Price my compute carve-out
              </Link>
              <DownloadButton
                label="Netback Fixer Bitcoin Playbook"
                slug="low-netback"
                text="Download the Netback Fixer Bitcoin Playbook"
              />
              <DownloadButton
                label="Computer Offtake Agreement One-Pager"
                slug="compute-offtake-one-pager"
                text="Get the Computer Offtake Agreement one-pager"
              />
            </div>
          </div>
        </div>
      </section>
      <main>

        <section className="wrap">
          <h2>Why this matters when netbacks sag</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Basis bites</h3><p>Differentials and G&amp;P fees stack up until some pads bring home pennies per MCF.</p></div>
          <div className="card"><h3>MVC exposure</h3><p>Minimum volume commitments make curtailment expensive, even when pricing is upside down.</p></div>
          <div className="card"><h3>POP vs keep-whole headaches</h3><p>Shrink, fuel, and NGL splits eat uplift before dollars ever show up on a statement.</p></div>
          <div className="card"><h3>Compute as relief valve</h3><p>We exclude a metered slice from dedication, pay at the pad, or share upside in a JV.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>How we win the math</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Parity-first pricing</h3><p>If your pad nets $0.70 per MCF after basis, G&amp;P, transport, taxes, and royalty, we price the Compute Offtake to clear that number on a rolling basis.</p></div>
          <div className="card"><h3>Firm base volume</h3><p>P90 daily flow, metered and excluded from dedication so you protect pipeline relationships while carving out margin.</p></div>
          <div className="card"><h3>Power sized to the floor</h3><p>We build to the minimum flow so uptime is stable and payouts stay predictable.</p></div>
          <div className="card"><h3>Optional hash hedge</h3><p>Smooth a slice of cash flow with a hash revenue hedge if volatility is a concern.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Commercial options</h2>
        <div className="grid cols-3">
          <div className="card"><h3>Compute Offtake at the pad</h3><p>Per-MCF price for the base slice, paid in dollars and indexed however you need.</p></div>
          <div className="card"><h3>Pad-Host Plus</h3><p>Site fee plus uptime bonus—we shoulder capex, you monetize the carve-out.</p></div>
          <div className="card"><h3>JV share</h3><p>Reduce the gas price and share in mined BTC with custody-first waterfalls and clean accounting.</p></div>
        </div>
      </section>

      <section className="wrap">
        <h2>Illustrated economics &amp; rollout</h2>
        <p className="lead">Commercial clarity and physical reliability for weak netbacks.</p>
        <div className="sp-16" />
        <IllustrationStrip
          cols={3}
          ratio="16 / 9"
          items={[
            { src: '/assets/illustrations/low-netbacks.png', alt: 'On-lease carve-out economics compared to pipeline netback — MCF.digital netback improvement diagram', caption: 'Economics overview' },
            { src: '/assets/illustrations/low-netbacks-2.png', alt: 'Step-by-step deployment sequence for an on-lease low-netback gas-to-Bitcoin system', caption: 'Deployment sequence' },
            { src: '/assets/illustrations/low-netbacks-3.png', alt: 'On-lease physical and commercial protections for low-netback gas Bitcoin mining operations', caption: 'On-lease protections' },
          ]}
        />
      </section>

      <section className="wrap">
        <h2>What we need to price same week</h2>
        <ul>
          <li>Three months of pad netbacks or the inputs to calculate them.</li>
          <li>Last gas assay and 60 to 90 days of flow.</li>
          <li>Confirmation of lease operations fuel rights and any G&amp;P dedications.</li>
          <li>Pad one-line or a simple list of electrical loads if you have it.</li>
        </ul>
        <div className="sp-12" />
        <Link className="btn acc" href="#netback-form">
          Send my netback details
        </Link>
      </section>

      <section className="wrap">
        <h2>FAQ, netbacks</h2>
        <div className="grid cols-2">
          <div className="card"><h3>Will this trip our MVC?</h3><p>No. We bake explicit dedication exclusions into the paperwork.</p></div>
          <div className="card"><h3>What if my netback improves seasonally?</h3><p>We can index the COA to maintain parity bands even when spreads tighten.</p></div>
          <div className="card"><h3>We already use fuel gas on lease</h3><p>Great—this is the same concept, just upsized and metered for compute.</p></div>
        </div>
      </section>

      <section className="wrap">
        <div className="cta-stack">
          <div className="cta-copy">
            <h2>Stop letting basis and G&amp;P eat your margin.</h2>
            <p className="lead">Route a slice of flow to compute and keep parity math on your terms.</p>
          </div>
          <div className="cta-buttons card">
            <Link className="btn acc" href="/contact?topic=netbacks-upload">
              Upload last 3 months of pad netbacks
            </Link>
            <Link className="btn acc" href="#netback-form">
              Price my compute carve-out
            </Link>
            <DownloadButton
              label="Netback Fixer Bitcoin Playbook"
              slug="low-netback"
              text="Download the Netback Fixer Bitcoin Playbook"
            />
            <DownloadButton
              label="Computer Offtake Agreement One-Pager"
              slug="compute-offtake-one-pager"
              text="Get the Computer Offtake Agreement one-pager"
            />
          </div>
        </div>
      </section>

      <section className="wrap">
        <h2>Start a netback review</h2>
        <p className="lead">
          Drop in the numbers and links. We’ll confirm parity pricing, timeline, and the commercial model that fits.
        </p>
        <div className="sp-16" />
        <NetbackForm id="netback-form" />
        <div className="sp-8" />
        <p>
          <small>Not tax or investment advice. All pricing subject to assay, flow, and site conditions.</small>
        </p>
      </section>
      </main>
    </>
  )
}
