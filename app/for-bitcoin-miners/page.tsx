import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import MinersForm from '../../components/MinersForm'
import FaqAccordion from '../../components/FaqAccordion'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'
import {
  Lightning, Vault, HardDrives, Wrench,
  Cpu, Thermometer, Code, ShareNetwork, Monitor,
  House, UsersThree, Buildings,
  ShieldCheck, Coins, ArrowsOut,
} from '../../components/Icons'

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://mcf.digital/' },
  { name: 'For Bitcoin Miners', url: 'https://mcf.digital/for-bitcoin-miners' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Reliable Stranded Gas Mining Pads for Bitcoin Miners',
  provider: { '@type': 'Organization', name: 'MCF.digital' },
  description:
    'MCF.digital delivers field-ready stranded gas mining pads with confirmed gas supply, sized gensets, thermal management, and built-in service access. No surprise shutdowns.',
  areaServed: 'United States',
  serviceType: 'Stranded Gas Bitcoin Mining Pad Deployment',
  url: 'https://mcf.digital/for-bitcoin-miners',
}

export const metadata: Metadata = {
  title: 'Reliable Stranded Gas Mining Pads | Field-Ready Compute | MCF.digital',
  description:
    'MCF.digital delivers pads that produce. Gas supply confirmed, genset sized, thermals managed, and service access built in. No surprise shutdowns.',
  openGraph: {
    title: 'Reliable Stranded Gas Mining Pads | Field-Ready Compute | MCF.digital',
    description:
      'MCF.digital delivers pads that produce. Gas supply confirmed, genset sized, thermals managed, and service access built in. No surprise shutdowns.',
    type: 'website',
    url: 'https://mcf.digital/for-bitcoin-miners',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-miners.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital',
  },
  alternates: {
    canonical: 'https://mcf.digital/for-bitcoin-miners',
  },
}

export default function ForMinersPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbs} />

      {/* Hero — same layout as flare page */}
      <section className="hero miners-hero">
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Bitcoin Miners &amp; Entrepreneurs</div>
          <h1>Produce bitcoin at cost,&nbsp;not retail</h1>
          <p className="lead">
            We match your miners or capital with below-grid MCF. Custody first, clear fee stack, optional hash hedge.
            From flare stack to sat stack.
          </p>
          <div className="sp-16" />
          <div className="cta-row">
            <Link className="btn acc" href="#miners-form">Get my custom power plan</Link>
            <Link className="btn acc" href="#miners-form">Host my fleet</Link>
            <Link className="btn" href="#miners-form">JV my container</Link>
          </div>
        </div>
      </section>

      <main>

        {/* Section 2 — What you get */}
        <section className="wrap no-bg">
          <h2>What you get with MCF.DIGITAL sites</h2>
          <div className="grid cols-2">
            <div className="card sol-card">
              <span className="sol-icon"><Lightning size={22} weight="duotone" aria-hidden /></span>
              <h3>Cheaper power than typical colo</h3>
              <p>Off-grid, stranded, or sour gas that pencils beats most grid tariffs.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Vault size={22} weight="duotone" aria-hidden /></span>
              <h3>Custody-first payouts</h3>
              <p>Pool pays to your wallet. Multisig available on request.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><HardDrives size={22} weight="duotone" aria-hidden /></span>
              <h3>Real assets</h3>
              <p>Own hardware you can depreciate, containers on request, spares staged onsite.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Wrench size={22} weight="duotone" aria-hidden /></span>
              <h3>Operations built by miners</h3>
              <p>Fleet tuning, alarms, ticketing, rapid swap. Run by people who hash.</p>
            </div>
          </div>
        </section>

        {/* Section 3 — Tech stack */}
        <section className="wrap no-bg">
          <h2>Tech stack you can actually trust</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><Cpu size={22} weight="duotone" aria-hidden /></span>
              <h3>ASICs</h3>
              <p>Next-gen fleets sized to site MW with efficiency targets in J/TH.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Thermometer size={22} weight="duotone" aria-hidden /></span>
              <h3>Cooling</h3>
              <p>Air or immersion. Immersion for harsh climates, heat reuse options available.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Code size={22} weight="duotone" aria-hidden /></span>
              <h3>Firmware</h3>
              <p>Braiins or comparable autotuning with guardrails on voltage and temperature.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ShareNetwork size={22} weight="duotone" aria-hidden /></span>
              <h3>Pools</h3>
              <p>Your choice: PPS+, PPLNS, failovers in place so payouts never stall.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Monitor size={22} weight="duotone" aria-hidden /></span>
              <h3>Monitoring</h3>
              <p>Dashboards, alerting, remote KVM on request, camera visibility baked in.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Your paths */}
        <section className="wrap no-bg">
          <h2>Your paths</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><House size={22} weight="duotone" aria-hidden /></span>
              <h3>Hosted mining</h3>
              <p>Ship your S21s or comparable. We rack and run, you keep custody.</p>
            </div>
            <div className="card sol-card card--featured">
              <span className="sol-icon"><UsersThree size={22} weight="duotone" aria-hidden /></span>
              <h3>JV mining</h3>
              <p>Invest alongside us and the operator, split production with a clean waterfall.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Buildings size={22} weight="duotone" aria-hidden /></span>
              <h3>Managed self-mining</h3>
              <p>We build and operate a dedicated site for you—brand it how you want.</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Economics */}
        <section className="wrap no-bg">
          <h2>Economics, no magic</h2>
          <div className="grid cols-3">
            <div className="card step-card">
              <span className="step-num">01</span>
              <h3>Transparent pricing</h3>
              <p>We quote power in $/kWh or gas in $/MCF, whichever fits the site and structure.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">02</span>
              <h3>Base &amp; downside cases</h3>
              <p>Hashprice, difficulty, uptime. We show how the stack holds up under pressure.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">03</span>
              <h3>Optional hash hedge</h3>
              <p>Add a revenue hedge to stabilize a slice of cash flow when volatility spikes.</p>
            </div>
          </div>
        </section>

        {/* Section 6 — Why this beats waiting */}
        <section className="wrap no-bg">
          <h2>Why this beats waiting for bull markets</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><Coins size={22} weight="duotone" aria-hidden /></span>
              <h3>Produce at cost</h3>
              <p>You don't pay retail for coins—you produce at cost and stack daily.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ShieldCheck size={22} weight="duotone" aria-hidden /></span>
              <h3>Custody stays yours</h3>
              <p>You control payout addresses and treasury policy.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ArrowsOut size={22} weight="duotone" aria-hidden /></span>
              <h3>Modular growth</h3>
              <p>Scale in stages as deliverability grows. Add containers over time.</p>
            </div>
          </div>
        </section>

        {/* Section 7 — Getting started */}
        <section className="wrap no-bg">
          <h2>Getting started is easy</h2>
          <p className="lead">Four steps from intro call to hash online.</p>
          <div className="sp-16" />
          <div className="checklist">
            {[
              { n: '01', title: 'Tell us your fleet', body: 'Fleet size, miner models, and target start date.' },
              { n: '02', title: 'Pick your path', body: 'Hosted, JV, or managed self-mining — we size the structure to you.' },
              { n: '03', title: 'Sign the docs & set wallets', body: 'Term sheet, custody policy, payout addresses locked in.' },
              { n: '04', title: 'Hash online, stack sats', body: 'Ship or procure hardware, we handle the rest.' },
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
            <Link className="btn acc" href="#miners-form">Start my intake</Link>
          </div>
        </section>

        {/* Section 8 — Illustrations */}
        <section className="wrap no-bg">
          <h2>Containers &amp; thermals</h2>
          <p className="lead">Air paths, racking, thermals, and service routes that actually work in the field.</p>
          <div className="sp-16" />
          <div className="ill-stack">
            {[
              { src: '/assets/illustrations/bitcoin-miners.png', alt: 'Bitcoin mining container design — air path routing, ASIC racking, and thermal management for field deployment', caption: 'Container design', description: 'ASIC racking, air path routing, and thermal management built for field deployment — not a data center.' },
              { src: '/assets/illustrations/home-2.png', alt: 'On-lease Bitcoin mining compute container deployed at an oil and gas wellhead pad', caption: 'Thermal & air path', description: 'Clearance zones, intake paths, and service corridors sized for field crews and rapid hardware swaps.' },
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

        {/* Section 9 — FAQ */}
        <section className="wrap no-bg">
          <h2>FAQ, miners</h2>
          <div className="sp-8" />
          <FaqAccordion items={[
            { q: 'Can I keep my pool and firmware?', a: 'Yes. We recommend Braiins or comparable for efficiency, but it\'s your fleet and your firmware choice.' },
            { q: 'What about immersion cooling?', a: 'We support immersion where the climate or target density calls for it. Immersion-ready containers are available.' },
            { q: 'Do you charge mystery fees?', a: 'No. We publish the full fee stack from power to ops to networking. No surprises on your statement.' },
            { q: 'Can I scale up over time?', a: 'Yes — modular by design. As gas deliverability grows, we add containers in stages to match the flow.' },
          ]} />
        </section>

        {/* CTA stack */}
        <section className="wrap no-bg">
          <div className="cta-stack">
            <div className="cta-copy">
              <h2>Stop renting expensive electrons. Start stacking.</h2>
              <p className="lead">Drop your fleet details, pick the path. We'll take you from flare stack to sat stack.</p>
            </div>
            <div className="cta-buttons card">
              <Link className="btn acc" href="#miners-form">Get my custom power plan</Link>
              <Link className="btn acc" href="#miners-form">Host my fleet</Link>
              <Link className="btn acc" href="#miners-form">JV my container</Link>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="wrap no-bg">
          <h2>Start a miners intake</h2>
          <p className="lead">
            Send your miner models, custody preference, and target start. We'll reply fast with the right structure.
          </p>
          <div className="sp-16" />
          <MinersForm id="miners-form" />
          <div className="sp-8" />
          <p style={{ maxWidth: 900, marginInline: 'auto' }}>
            <small>Not tax or investment advice. Mining results vary with price, difficulty, uptime, and site conditions.</small>
          </p>
        </section>

      </main>
    </>
  )
}
