import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'
import {
  Flame, Vault, Wrench, FileText, Lightning,
  MagnifyingGlass, ChartLineDown, HardDrives, Briefcase, PhoneCall,
} from '../../components/Icons'

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://mcf.digital/' },
  { name: 'About', url: 'https://mcf.digital/about' },
])

export const metadata: Metadata = {
  title: 'About MCF.digital | Stranded Gas to Bitcoin Build-and-Run Operator',
  description:
    'MCF.digital is a build-and-run operator for stranded gas Bitcoin mining. We match operators, miners, and capital — then build and run the site so everyone wins.',
  openGraph: {
    title: 'About MCF.digital | Stranded Gas to Bitcoin Build-and-Run Operator',
    description:
      'MCF.digital is a build-and-run operator for stranded gas Bitcoin mining. We match operators, miners, and capital — then build and run the site so everyone wins.',
    type: 'website',
    url: 'https://mcf.digital/about',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-about.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital',
  },
  alternates: {
    canonical: 'https://mcf.digital/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="hero about-hero">
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">About MCF.DIGITAL</div>
          <h1>Where molecules become&nbsp;money.</h1>
          <p className="lead">
            MCF.DIGITAL exists to turn stranded and undervalued natural gas into profitable bitcoin production.
            We match flare-prone pads with miners, operators, and investors so every MCF mints value instead of getting wasted.
          </p>
          <div className="sp-16" />
          <div className="cta-row">
            <Link className="btn acc" href="/contact?topic=pad-check">Check my pad in 60 seconds</Link>
            <Link className="btn" href="/contact?topic=fit-call">Book a 15-minute fit call</Link>
          </div>
        </div>
      </section>

      <main>

        {/* Who we are */}
        <section className="wrap no-bg">
          <h2>Who we are</h2>
          <p style={{ maxWidth: 820, fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--muted)', marginInline: 'auto', textAlign: 'center' }}>
            MCF.DIGITAL stands at the intersection of oil &amp; gas and Bitcoin mining. We act as matchmakers, deal
            makers, and operators — solving the pain of flaring, weak netbacks, and underperforming pads for producers,
            while giving miners and investors access to below-grid power, custody-first payouts, and real depreciable
            assets. Every MCF of gas should mint value. We make sure it does.
          </p>
        </section>

        {/* Mission / Vision */}
        <section className="wrap no-bg">
          <div className="grid cols-2">
            <div className="card card--featured">
              <h3>Our Mission</h3>
              <p>
                Transform wasted molecules into digital value by connecting oil &amp; gas producers with Bitcoin mining
                entrepreneurs and investors. We build, operate, and manage on-lease compute projects that reduce flaring,
                improve netbacks, and deliver bitcoin production at cost.
              </p>
            </div>
            <div className="card card--featured">
              <h3>Our Vision</h3>
              <p>
                A future where no MCF is wasted and every producer, miner, and investor has a transparent, profitable,
                and sustainable pathway to participate in Bitcoin's growth — powered by off-grid energy and aligned
                incentives between energy and digital asset markets.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="wrap no-bg">
          <h2>Our values</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><Flame size={22} weight="duotone" aria-hidden /></span>
              <h3>Every MCF should mint</h3>
              <p>Flare gas and weak netback molecules are not liabilities — they're opportunities. Our job is to capture that value and share it.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Vault size={22} weight="duotone" aria-hidden /></span>
              <h3>Custody first</h3>
              <p>Payouts go directly to your wallets. Dollars or BTC are clear and auditable. Transparency builds trust.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Wrench size={22} weight="duotone" aria-hidden /></span>
              <h3>Field smart operations</h3>
              <p>We speak oil, gas, and bitcoin. We size to P90 flows, exclude carve-outs from dedications, and publish uptime logs.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><FileText size={22} weight="duotone" aria-hidden /></span>
              <h3>Simple, actionable deals</h3>
              <p>From Compute Offtake Agreements to JV structures, our contracts are designed to move fast and maximize pad profitability.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Lightning size={22} weight="duotone" aria-hidden /></span>
              <h3>Decentralization through energy</h3>
              <p>By monetizing stranded gas, we push mining away from choke points and toward resilience — distributed energy, distributed hash.</p>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="wrap no-bg">
          <h2>Features &amp; benefits</h2>
          <div className="grid cols-3">
            <div className="card sol-card about-audience-card">
              <span className="sol-icon"><Flame size={22} weight="duotone" aria-hidden /></span>
              <h3>For Oil &amp; Gas Producers</h3>
              <ul className="about-list">
                <li>Cut your flare stack, grow your sat stack</li>
                <li>Improve pad-level netbacks with dedication-safe carve-outs</li>
                <li>Get paid at the pad in dollars or take upside in bitcoin</li>
                <li>Reduce ESG risk with measurable flare mitigation</li>
              </ul>
            </div>
            <div className="card sol-card about-audience-card">
              <span className="sol-icon"><HardDrives size={22} weight="duotone" aria-hidden /></span>
              <h3>For Miners &amp; Entrepreneurs</h3>
              <ul className="about-list">
                <li>Power at lower cost than colocation</li>
                <li>Host your fleet, JV your container, or run managed self-mining</li>
                <li>Custody-first payouts, your pool, your firmware</li>
                <li>Optional hedging for cash flow stability</li>
              </ul>
            </div>
            <div className="card sol-card about-audience-card">
              <span className="sol-icon"><Vault size={22} weight="duotone" aria-hidden /></span>
              <h3>For HNWI &amp; Family Offices</h3>
              <ul className="about-list">
                <li>Deploy capital into real assets with depreciation</li>
                <li>Daily bitcoin production vs retail purchases</li>
                <li>Transparent SPVs, clear waterfalls, white-glove operations</li>
                <li>Meter-to-wallet reconciliation and CPA-friendly reporting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="wrap no-bg">
          <h2>Next steps</h2>
          <p className="lead">Pick the path that fits — we'll take it from there.</p>
          <div className="sp-16" />
          <div className="grid cols-3">
            <div className="card sol-card about-action-card">
              <span className="sol-icon"><MagnifyingGlass size={22} weight="duotone" aria-hidden /></span>
              <h3>Pad triage</h3>
              <p>Drop pad data and get a go/no-go read in under a minute.</p>
              <Link className="btn acc" href="/contact?topic=pad-check">Check my pad in 60 seconds</Link>
            </div>
            <div className="card sol-card about-action-card">
              <span className="sol-icon"><ChartLineDown size={22} weight="duotone" aria-hidden /></span>
              <h3>Netback audit</h3>
              <p>Upload your economics and see where a carve-out can pencil.</p>
              <Link className="btn acc" href="/contact?topic=netbacks-upload">Upload my netbacks</Link>
            </div>
            <div className="card sol-card about-action-card">
              <span className="sol-icon"><HardDrives size={22} weight="duotone" aria-hidden /></span>
              <h3>Fleet hosting</h3>
              <p>Slot in your containers or miners and tap lower-cost field power.</p>
              <Link className="btn acc" href="/contact?topic=host-my-fleet">Host my fleet</Link>
            </div>
            <div className="card sol-card about-action-card">
              <span className="sol-icon"><Briefcase size={22} weight="duotone" aria-hidden /></span>
              <h3>Investor pack</h3>
              <p>Review the SPV structure, waterfalls, and risk disclosures.</p>
              <Link className="btn acc" href="/contact?topic=investment-overview">Request the Investment Overview</Link>
            </div>
            <div className="card sol-card about-action-card">
              <span className="sol-icon"><PhoneCall size={22} weight="duotone" aria-hidden /></span>
              <h3>Fit call</h3>
              <p>Book a 15-minute session to see if your pad, fleet, or capital fits.</p>
              <Link className="btn acc" href="/contact?topic=fit-call">Book a 15-minute fit call</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
