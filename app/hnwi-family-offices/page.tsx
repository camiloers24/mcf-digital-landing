import Link from 'next/link'
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import InvestorsForm from '../../components/InvestorsForm'
import FaqAccordion from '../../components/FaqAccordion'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'
import {
  Coins, HardDrives, Vault, ShieldCheck,
  MagnifyingGlass, Wrench, FileText, ChartLineUp,
  House, UsersThree, Buildings,
  ChartLineDown, Clock, MapPin,
} from '../../components/Icons'

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://mcf.digital/' },
  { name: 'HNWI & Family Offices', url: 'https://mcf.digital/hnwi-family-offices' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Real-Asset Bitcoin Investment for HNWI and Family Offices',
  provider: { '@type': 'Organization', name: 'MCF.digital' },
  description:
    'MCF.digital offers high-net-worth individuals and family offices direct ownership of real operating assets in stranded gas Bitcoin production. Custody-first payouts, clean reporting, and direct access to project economics.',
  areaServed: 'United States',
  serviceType: 'Stranded Gas Bitcoin Mining Investment',
  url: 'https://mcf.digital/hnwi-family-offices',
}

export const metadata: Metadata = {
  title: 'Real-Asset Bitcoin Investment | Stranded Gas Projects | MCF.digital',
  description:
    'Own real operating assets in stranded gas Bitcoin production. Custody-first payouts, clean reporting, and direct access to project economics.',
  openGraph: {
    title: 'Real-Asset Bitcoin Investment | Stranded Gas Projects | MCF.digital',
    description:
      'Own real operating assets in stranded gas Bitcoin production. Custody-first payouts, clean reporting, and direct access to project economics.',
    type: 'website',
    url: 'https://mcf.digital/hnwi-family-offices',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-hnwi.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital',
  },
  alternates: {
    canonical: 'https://mcf.digital/hnwi-family-offices',
  },
}

export default function HnwiPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbs} />

      {/* Hero — single column with cta-row */}
      <section className="hero investors-hero">
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">HNWI &amp; Family Offices</div>
          <h1>White-glove bitcoin production,&nbsp;backed by real assets</h1>
          <p className="lead">
            Deploy capital into projects that convert stranded energy into daily BTC flow. Custody-first payouts,
            depreciation on hardware, optional hedging for stability.
          </p>
          <div className="sp-16" />
          <div className="cta-row">
            <DownloadButton label="Investment Overview" slug="hnwi" text="Request the Investment Overview" />
            <Link className="btn acc" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
              Schedule a 20-minute LP briefing
            </Link>
            <DownloadButton label="Tax & Depreciation Primer" slug="tax-depreciation-primer" text="Download the Tax Primer" />
          </div>
        </div>
      </section>

      <main>

        {/* Section 2 — Why production */}
        <section className="wrap no-bg">
          <h2>Why production, not just buying</h2>
          <div className="grid cols-2">
            <div className="card sol-card">
              <span className="sol-icon"><Coins size={22} weight="duotone" aria-hidden /></span>
              <h3>Cost basis advantage</h3>
              <p>Produce coins at energy cost plus ops instead of paying retail premiums.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><HardDrives size={22} weight="duotone" aria-hidden /></span>
              <h3>Real assets</h3>
              <p>Miners, power equipment, and containers are depreciable assets you can own.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Vault size={22} weight="duotone" aria-hidden /></span>
              <h3>Custody discipline</h3>
              <p>Pool payouts route to your wallets with optional multisig controls.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ShieldCheck size={22} weight="duotone" aria-hidden /></span>
              <h3>Risk controls</h3>
              <p>Modular sites, conservative sizing to minimum flows, staged spares, uptime SLAs.</p>
            </div>
          </div>
        </section>

        {/* Section 3 — What we do for you */}
        <section className="wrap no-bg">
          <h2>What we do for you</h2>
          <div className="grid cols-2">
            <div className="card sol-card">
              <span className="sol-icon"><MagnifyingGlass size={22} weight="duotone" aria-hidden /></span>
              <h3>Sourcing &amp; diligence</h3>
              <p>We secure O&amp;G sites with deliverability and clean lease rights, running assay and P90 flow checks.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Wrench size={22} weight="duotone" aria-hidden /></span>
              <h3>Build &amp; operate</h3>
              <p>Powertrain, electrical, containers, miners, monitoring, and reporting—delivered turnkey.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><FileText size={22} weight="duotone" aria-hidden /></span>
              <h3>Reporting &amp; governance</h3>
              <p>Monthly meter-to-wallet reconciliations, incident logs, KPI dashboards, audits on request.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ChartLineUp size={22} weight="duotone" aria-hidden /></span>
              <h3>Hedging option</h3>
              <p>Partial hashrate hedges available for steadier distributions if desired.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Structures */}
        <section className="wrap no-bg">
          <h2>Structures that fit family offices</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><House size={22} weight="duotone" aria-hidden /></span>
              <h3>Hosted exposure</h3>
              <p>You own hardware, we run it, you receive BTC direct.</p>
            </div>
            <div className="card sol-card card--featured">
              <span className="sol-icon"><UsersThree size={22} weight="duotone" aria-hidden /></span>
              <h3>Project JV SPVs</h3>
              <p>Fund capex into a site-level SPV, we operate, production splits by waterfall.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Buildings size={22} weight="duotone" aria-hidden /></span>
              <h3>Managed self-mining</h3>
              <p>A dedicated site with your branding, built and run for you.</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Taxes */}
        <section className="wrap no-bg">
          <h2>Taxes and accounting, at a glance</h2>
          <p className="lead">Clean structure your controller and CPA can work with directly.</p>
          <div className="sp-16" />
          <div className="checklist">
            {[
              { n: '01', title: 'Section 168 / 179 depreciation', body: 'Miners and power equipment may qualify for accelerated depreciation — consult your CPA.' },
              { n: '02', title: 'Cost segregation', body: 'Containers and certain site improvements can be segmented for accelerated depreciation schedules.' },
              { n: '03', title: 'Clean reporting', body: 'Monthly statements your controller and CPA can use without extra reconciliation work.' },
              { n: '04', title: 'Custody clarity', body: 'Each payout is traceable from meter read to wallet receipt — full audit trail on request.' },
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
        </section>

        {/* Section 6 — Risk & mitigation */}
        <section className="wrap no-bg">
          <h2>Risk and mitigation</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><ChartLineDown size={22} weight="duotone" aria-hidden /></span>
              <h3>Commodity risk</h3>
              <p>Hashprice and BTC price move — we present base and downside cases and offer optional hedging.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Clock size={22} weight="duotone" aria-hidden /></span>
              <h3>Uptime risk</h3>
              <p>We stock spares, define SLAs, and publish incident logs.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><MapPin size={22} weight="duotone" aria-hidden /></span>
              <h3>Site risk</h3>
              <p>Dedication exclusions, clear royalty language, and sizing to minimum flows reduce surprises.</p>
            </div>
          </div>
        </section>

        {/* Section 7 — First 30–60 days */}
        <section className="wrap no-bg">
          <h2>What you get in the first 30 to 60 days</h2>
          <p className="lead">From term sheet to first daily BTC — a clear sequence with no ambiguity.</p>
          <div className="sp-16" />
          <div className="grid cols-2">
            <div className="card step-card">
              <span className="step-num">01</span>
              <h3>Week 1–2</h3>
              <p>Site selection shortlist, assumptions sheet, and draft term sheets delivered for review.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">02</span>
              <h3>Week 3–6</h3>
              <p>Mobilization of power and containers, wallet setup, pool selection, and onsite commissioning.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">03</span>
              <h3>Go-live</h3>
              <p>Daily BTC begins flowing to your custody wallet. Hash online, stack starts.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">04</span>
              <h3>Month end</h3>
              <p>First meter-to-wallet reconciliation delivered — gas in, kWh out, hash produced, BTC paid.</p>
            </div>
          </div>
          <div className="sp-32" />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link className="btn acc" href="#investors-form">Start my investor intake</Link>
          </div>
        </section>

        {/* Section 8 — FAQ */}
        <section className="wrap no-bg">
          <h2>FAQ, investors</h2>
          <div className="sp-8" />
          <FaqAccordion items={[
            { q: 'Is this a security?', a: 'No. JVs are structured by your counsel; we do not sell securities. We build and operate the physical assets.' },
            { q: 'Can I take BTC or USD?', a: 'Your choice. Payouts default to your custody wallet. USD arrangements are available on structured deals.' },
            { q: 'Can we audit?', a: 'Yes — data room access, third-party checks, and on-site visits are available to committed counterparties.' },
            { q: 'What is the minimum investment?', a: 'Depends on structure. Hosted exposure starts at a single container. SPV minimums are deal-specific — ask in the intake form.' },
          ]} />
        </section>

        {/* CTA stack */}
        <section className="wrap no-bg">
          <div className="cta-stack">
            <div className="cta-copy">
              <h2>Put stranded energy to work for your balance sheet.</h2>
              <p className="lead">Request the overview, line up a briefing, or grab the tax primer — then step into production.</p>
            </div>
            <div className="cta-buttons card">
              <DownloadButton label="Investment Overview" slug="hnwi" text="Request the Investment Overview" />
              <Link className="btn acc" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
                Schedule a 20-minute LP briefing
              </Link>
              <DownloadButton label="Tax & Depreciation Primer" slug="tax-depreciation-primer" text="Download the Tax and Depreciation Primer" />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="wrap no-bg">
          <h2>Start an investor intake</h2>
          <p className="lead">
            Share your capital range, structure preferences, and custody posture. We'll respond with a tailored path.
          </p>
          <div className="sp-16" />
          <InvestorsForm id="investors-form" />
          <div className="sp-8" />
          <p style={{ maxWidth: 900, marginInline: 'auto' }}>
            <small>Not tax or investment advice. All forward projections are illustrative.</small>
          </p>
        </section>

      </main>
    </>
  )
}
