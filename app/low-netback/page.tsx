// app/low-netback/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import NetbackForm from '../../components/NetbackForm'
import FaqAccordion from '../../components/FaqAccordion'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'
import {
  CurrencyDollar, Warning, ArrowsLeftRight, Cpu,
  Briefcase, House, UsersThree, ChartLineUp,
} from '../../components/Icons'

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
    site: '@mcfdigital',
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
              <DownloadButton label="Netback Fixer Bitcoin Playbook" slug="low-netback" text="Download the Netback Fixer Bitcoin Playbook" />
              <DownloadButton label="Computer Offtake Agreement One-Pager" slug="compute-offtake-one-pager" text="Get the Computer Offtake Agreement one-pager" />
            </div>
          </div>
        </div>
      </section>
      <main>

        {/* Section 2 — Why this matters */}
        <section className="wrap no-bg">
          <h2>Why this matters when netbacks sag</h2>
          <div className="grid cols-2">
            <div className="card sol-card">
              <span className="sol-icon"><CurrencyDollar size={22} weight="duotone" aria-hidden /></span>
              <h3>Basis bites</h3>
              <p>Differentials and G&amp;P fees stack up until some pads bring home pennies per MCF.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Warning size={22} weight="duotone" aria-hidden /></span>
              <h3>MVC exposure</h3>
              <p>Minimum volume commitments make curtailment expensive, even when pricing is upside down.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ArrowsLeftRight size={22} weight="duotone" aria-hidden /></span>
              <h3>POP vs keep-whole headaches</h3>
              <p>Shrink, fuel, and NGL splits eat uplift before dollars ever show up on a statement.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Cpu size={22} weight="duotone" aria-hidden /></span>
              <h3>Compute as relief valve</h3>
              <p>We exclude a metered slice from dedication, pay at the pad, or share upside in a JV.</p>
            </div>
          </div>
        </section>

        {/* Section 3 — How we win the math */}
        <section className="wrap no-bg">
          <h2>How we win the math</h2>
          <div className="grid cols-2">
            <div className="card step-card">
              <span className="step-num">01</span>
              <h3>Parity-first pricing</h3>
              <p>If your pad nets $0.70 per MCF after basis, G&amp;P, transport, taxes, and royalty, we price the Compute Offtake to clear that number on a rolling basis.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">02</span>
              <h3>Firm base volume</h3>
              <p>P90 daily flow, metered and excluded from dedication so you protect pipeline relationships while carving out margin.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">03</span>
              <h3>Power sized to the floor</h3>
              <p>We build to the minimum flow so uptime is stable and payouts stay predictable.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">04</span>
              <h3>Optional hash hedge</h3>
              <p>Smooth a slice of cash flow with a hash revenue hedge if volatility is a concern.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Commercial options */}
        <section className="wrap no-bg">
          <h2>Commercial options</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><Briefcase size={22} weight="duotone" aria-hidden /></span>
              <h3>Compute Offtake at the pad</h3>
              <p>Per-MCF price for the base slice, paid in dollars and indexed however you need.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><House size={22} weight="duotone" aria-hidden /></span>
              <h3>Pad-Host Plus</h3>
              <p>Site fee plus uptime bonus—we shoulder capex, you monetize the carve-out.</p>
            </div>
            <div className="card sol-card card--featured">
              <span className="sol-icon"><UsersThree size={22} weight="duotone" aria-hidden /></span>
              <h3>JV share</h3>
              <p>Reduce the gas price and share in mined BTC with custody-first waterfalls and clean accounting.</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Illustrations */}
        <section className="wrap no-bg">
          <h2>Illustrated economics &amp; rollout</h2>
          <p className="lead">Commercial clarity and physical reliability for weak netbacks.</p>
          <div className="sp-16" />
          <div className="ill-stack">
            {[
              { src: '/assets/illustrations/low-netbacks.png', alt: 'On-lease carve-out economics compared to pipeline netback — MCF.digital netback improvement diagram', caption: 'Economics overview', description: 'On-lease carve-out that beats pipeline take-home. Parity math, clean reporting, custody-first payouts.' },
              { src: '/assets/illustrations/low-netbacks-2.png', alt: 'Step-by-step deployment sequence for an on-lease low-netback gas-to-Bitcoin system', caption: 'Deployment sequence', description: 'From P90 flow confirmation to compute online — a clear deployment sequence that protects your pipeline relationship at every step.' },
              { src: '/assets/illustrations/low-netbacks-3.png', alt: 'On-lease physical and commercial protections for low-netback gas Bitcoin mining operations', caption: 'On-lease protections', description: 'Dedication exclusions, metered volumes, and firm base pricing built into every commercial structure from day one.' },
            ].map((it, i) => (
              <div key={it.src} className={`ill-row${i % 2 !== 0 ? ' ill-row--flip' : ''}`}>
                <figure className="ill-img">
                  <Image src={it.src} alt={it.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </figure>
                <div className="ill-body">
                  <h3>{it.caption}</h3>
                  <p>{it.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — What we need */}
        <section className="wrap no-bg">
          <h2>What we need to price same week</h2>
          <p className="lead">Send these details and we quote in days, not months.</p>
          <div className="sp-16" />
          <div className="checklist">
            {[
              { n: '01', title: 'Pad netbacks', body: 'Three months of pad netbacks or the inputs to calculate them.' },
              { n: '02', title: 'Gas assay & flow', body: 'Last gas assay and 60 to 90 days of flow.' },
              { n: '03', title: 'Lease & dedications', body: 'Confirmation of lease operations fuel rights and any G&P dedications.' },
              { n: '04', title: 'Pad one-line', body: 'Pad one-line or a simple list of electrical loads if you have it.' },
            ].map((item) => (
              <div key={item.n} className="checklist-item">
                <span className="checklist-num">{item.n}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sp-32" />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link className="btn acc" href="#netback-form">Send my netback details</Link>
          </div>
        </section>

        {/* Section 7 — FAQ */}
        <section className="wrap no-bg">
          <h2>FAQ, netbacks</h2>
          <div className="sp-8" />
          <FaqAccordion items={[
            { q: 'Will this trip our MVC?', a: 'No. We bake explicit dedication exclusions into the paperwork.' },
            { q: 'What if my netback improves seasonally?', a: 'We can index the COA to maintain parity bands even when spreads tighten.' },
            { q: 'We already use fuel gas on lease', a: 'Great—this is the same concept, just upsized and metered for compute.' },
          ]} />
        </section>

        {/* CTA stack */}
        <section className="wrap no-bg">
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
              <DownloadButton label="Netback Fixer Bitcoin Playbook" slug="low-netback" text="Download the Netback Fixer Bitcoin Playbook" />
              <DownloadButton label="Computer Offtake Agreement One-Pager" slug="compute-offtake-one-pager" text="Get the Computer Offtake Agreement one-pager" />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="wrap no-bg">
          <h2>Start a netback review</h2>
          <p className="lead">
            Drop in the numbers and links. We'll confirm parity pricing, timeline, and the commercial model that fits.
          </p>
          <div className="sp-16" />
          <NetbackForm id="netback-form" />
          <div className="sp-8" />
          <p style={{ maxWidth: 900, marginInline: 'auto' }}>
            <small>Not tax or investment advice. All pricing subject to assay, flow, and site conditions.</small>
          </p>
        </section>
      </main>
    </>
  )
}
