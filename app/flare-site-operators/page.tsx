import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import DownloadButton from '../../components/DownloadButton'
import FlarePadForm from '../../components/FlarePadForm'
import FaqAccordion from '../../components/FaqAccordion'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'
import {
  Flame, GasPump, Package, FileText,
  Lightning, Drop, PlugsConnected, Cpu, Monitor, SpeakerSimpleSlash,
  CurrencyDollar, House, UsersThree, ChartLineUp,
  CheckCircle, ShieldCheck, Certificate,
} from '../../components/Icons'

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://mcf.digital/' },
  { name: 'Flare Site Operators', url: 'https://mcf.digital/flare-site-operators' },
])

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'On-Lease Flare Gas Bitcoin Mining Deployment',
  provider: { '@type': 'Organization', name: 'MCF.digital' },
  description:
    'MCF.digital builds and operates on-lease Bitcoin mining systems for oil and gas operators with flaring or stranded gas sites. Operators receive compliance relief, pad economics improvement, and custody-first revenue reporting.',
  areaServed: 'United States',
  serviceType: 'Stranded Gas Bitcoin Mining Deployment',
  url: 'https://mcf.digital/flare-site-operators',
}

export const metadata: Metadata = {
  title: 'Flare Gas Bitcoin Mining for Operators | MCF.digital',
  description:
    'Turn your flare gas liability into on-lease Bitcoin production. MCF.digital provides field-ready deployment with no BTC on your balance sheet. Fast compliance relief.',
  openGraph: {
    title: 'Flare Gas Bitcoin Mining for Operators | MCF.digital',
    description:
      'Turn your flare gas liability into on-lease Bitcoin production. MCF.digital provides field-ready deployment with no BTC on your balance sheet. Fast compliance relief.',
    type: 'website',
    url: 'https://mcf.digital/flare-site-operators',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-flare.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital',
  },
  alternates: {
    canonical: 'https://mcf.digital/flare-site-operators',
  },
}

export default function FlareSiteOperatorsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbs} />
      <section className="hero flare-hero">
        <div className="scrim" />
        <div className="content wrap">
          <div className="kicker">Flare Sites</div>
          <h1>Cut your flare stack, grow your sat stack</h1>
          <p className="lead">
            Turn fuel gas into on-lease power and compute. From flare to fair value, from BTUs to BTC.
          </p>
          <div className="sp-16" />
          <div className="cta-row">
            <Link className="btn acc" href="/contact?topic=pad-check">
              Check my pad in 60 seconds
            </Link>
            <DownloadButton
              label="Flare to Bitcoin Blueprint"
              slug="flare-site-operators"
              text="Download the Flare → Bitcoin Blueprint"
            />
            <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
              Book a 15-minute fit call
            </Link>
          </div>
        </div>
      </section>
      <main>

        {/* Section 2 — Why this is a no-brainer */}
        <section className="wrap no-bg">
          <h2>Why this is a no-brainer for a flare pad</h2>
          <div className="grid cols-2">
            <div className="card sol-card">
              <span className="sol-icon"><Flame size={22} weight="duotone" aria-hidden /></span>
              <h3>Flares are pure cost</h3>
              <p>Compliance exposure, neighbor optics, and lost value stack up every hour the flare burns. We flip that burn into measurable mitigation.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><GasPump size={22} weight="duotone" aria-hidden /></span>
              <h3>Fuel gas familiarity</h3>
              <p>We upsize your existing fuel gas carve-out and meter a take-in-kind base volume to run pad-level power for mining.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Package size={22} weight="duotone" aria-hidden /></span>
              <h3>Containerized and fast</h3>
              <p>Gensets or turbines, switchgear, protections, and immersion-ready containers land with minimal disruption to lease operations.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><FileText size={22} weight="duotone" aria-hidden /></span>
              <h3>Measured and auditable</h3>
              <p>Dedicated metering, runtime reports, and wallet-level payout transparency give you receipts instead of estimates.</p>
            </div>
          </div>
        </section>

        {/* Section 3 — How it works */}
        <section className="wrap no-bg">
          <h2>How it works on your lease</h2>
          <div className="grid cols-2">
            <div className="card step-card">
              <span className="step-num">01</span>
              <h3>Take-in-kind base volume</h3>
              <p>We define a P90 flow slice in MCF per day, excluded from any gathering or processing dedication, and always behind lease ops fuel.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">02</span>
              <h3>Fuel gas to kW</h3>
              <p>BTU and flow translate to MWh per day. Gensets are sized for site elevation, ambient conditions, H₂S, and dew point limits.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">03</span>
              <h3>Pad power to compute</h3>
              <p>We match miners to true average MW, tune for climate and uptime, and route pool payouts to the wallets you specify.</p>
            </div>
            <div className="card step-card">
              <span className="step-num">04</span>
              <h3>Reporting</h3>
              <p>Monthly reconciliations show gas in, kWh out, hash produced, and BTC paid so your team can audit every tranche.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Field-ready package */}
        <section className="wrap no-bg">
          <h2>Field-ready package</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><Lightning size={22} weight="duotone" aria-hidden /></span>
              <h3>Powertrain</h3>
              <p>Natural gas gensets or microturbines sized to minimum flow with derate curves for temperature and elevation baked in.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Drop size={22} weight="duotone" aria-hidden /></span>
              <h3>Gas handling</h3>
              <p>Dehydration, H₂S scrubbing, filter coalescers, knock-out, and pressure control matched to your assay.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><PlugsConnected size={22} weight="duotone" aria-hidden /></span>
              <h3>Electrical</h3>
              <p>Switchgear, grounding, overcurrent protection, one-line diagrams, and spare breakers with cabling ready to install.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Cpu size={22} weight="duotone" aria-hidden /></span>
              <h3>Compute</h3>
              <p>High-efficiency ASICs in air or immersion with fleet monitoring, auto-tuning, and staged spares to maintain uptime.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Monitor size={22} weight="duotone" aria-hidden /></span>
              <h3>Controls</h3>
              <p>24/7 telemetry, alarms, ticketing, remote hands, and site cameras keep operations transparent and responsive.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><SpeakerSimpleSlash size={22} weight="duotone" aria-hidden /></span>
              <h3>Noise &amp; neighbors</h3>
              <p>Acoustic baffling, setback planning, fencing, and lighting plans protect the pad and calm community optics.</p>
            </div>
          </div>
        </section>

        {/* Section 5 — Illustrations alternating */}
        <section className="wrap no-bg">
          <h2>Field layouts &amp; protections</h2>
          <p className="lead">Layouts that meet lease terms, safety clearances, and weather realities.</p>
          <div className="sp-16" />
          <div className="ill-stack">
            {[
              { src: '/assets/illustrations/flare-sites.png', alt: 'MCF.digital flare gas site layout — genset placement, gas interconnect, and ASIC container on a wellhead pad', caption: 'Flare site overview', description: 'Genset placement, gas interconnect routing, and ASIC container positioning on the wellhead pad — designed around lease ops priorities.' },
              { src: '/assets/illustrations/flare-sites-2.png', alt: 'Power path routing and safety setback distances for an on-lease flare gas Bitcoin mining deployment', caption: 'Power path & setbacks', description: 'Power path routing from genset to switchgear to compute with safety setback distances and service corridors baked in.' },
              { src: '/assets/illustrations/flare-sites-3.png', alt: 'ASIC container clearance zones and service access routes on a flare gas mining pad', caption: 'Container & clearances', description: 'ASIC container clearance zones, air intake paths, and service access routes designed for field crews, not just engineers.' },
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

        {/* Section 6 — Commercial models */}
        <section className="wrap no-bg">
          <h2>Commercial models you can choose</h2>
          <div className="grid cols-2">
            <div className="card sol-card">
              <span className="sol-icon"><CurrencyDollar size={22} weight="duotone" aria-hidden /></span>
              <h3>Gas sale at the pad</h3>
              <p>We pay a per-MCF price for a metered base volume. You keep dollars, take no BTC exposure.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><House size={22} weight="duotone" aria-hidden /></span>
              <h3>Host fee on your pad</h3>
              <p>We pay a site fee tied to uptime if you prefer lease revenue instead of commodity uplift.</p>
            </div>
            <div className="card sol-card card--featured">
              <span className="sol-icon"><UsersThree size={22} weight="duotone" aria-hidden /></span>
              <h3>FlareHash JV</h3>
              <p>You contribute pad and gas rights, we bring power and compute, and we split production with custody-first payouts.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ChartLineUp size={22} weight="duotone" aria-hidden /></span>
              <h3>HashHedge add-on</h3>
              <p>Optional partial hashrate hedges give steadier cash flow when volatility spikes.</p>
            </div>
          </div>
        </section>

        {/* Section 7 — What changes */}
        <section className="wrap no-bg">
          <h2>What changes on your pad</h2>
          <div className="grid cols-3">
            <div className="card sol-card">
              <span className="sol-icon"><CheckCircle size={22} weight="duotone" aria-hidden /></span>
              <h3>Less flame, more value</h3>
              <p>Your flare stack idles when compute is online, showing mitigation instead of combustion.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><ShieldCheck size={22} weight="duotone" aria-hidden /></span>
              <h3>No impact to oil</h3>
              <p>Lease ops fuel stays priority. Compute only takes the dedicated slice behind it.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-icon"><Certificate size={22} weight="duotone" aria-hidden /></span>
              <h3>Compliance is simpler</h3>
              <p>Measured mitigation replaces paying to destroy value, easing regulatory reporting.</p>
            </div>
          </div>
        </section>

        {/* Section 8 — What we need */}
        <section className="wrap no-bg">
          <h2>What we need from you</h2>
          <p className="lead">Send these details and we quote in days, not months.</p>
          <div className="sp-16" />
          <div className="checklist">
            {[
              { n: '01', title: 'Gas assay', body: 'BTU, composition, H₂S ppm, CO₂, water dew point.' },
              { n: '02', title: 'Flow history', body: '60 to 90 days with averages and low days.' },
              { n: '03', title: 'Pad layout & access', body: 'Space, setbacks, noise limits, existing power.' },
              { n: '04', title: 'Lease & midstream', body: 'Confirmation of fuel gas rights and any dedications.' },
              { n: '05', title: 'Contact', body: 'One decision-maker for scheduling and safety.' },
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
          <div style={{ display:'flex', justifyContent:'center' }}>
            <a className="btn acc" href="#flare-pad-form">Fill our form</a>
          </div>
        </section>

        {/* Section 9 — FAQ */}
        <section className="wrap no-bg">
          <h2>FAQs, Flaring</h2>
          <div className="sp-8" />
          <FaqAccordion items={[
            { q: 'Will this interfere with production?', a: 'Lease ops fuel stays priority. We reserve pad loads plus headroom so compute only rides the dedicated slice.' },
            { q: 'What about H₂S or wet gas?', a: 'We spec scrubbing and dehydration to match your assay. If treatment does not pencil, we say so upfront.' },
            { q: 'Do I have to touch bitcoin?', a: 'No. Choose the gas sale or host fee model. If you want upside, step into the JV.' },
            { q: 'What about MVCs?', a: 'Our metered slice is excluded from any G&P dedication. The term sheet locks that in.' },
            { q: 'Proof and reporting', a: 'Runtime graphs, metered gas usage, wallet-level payout statements, incident logs, and ticket times keep superintendents in the loop.' },
          ]} />
        </section>

        <section className="wrap no-bg" style={{ textAlign: 'center' }}>
          <h2>Stop burning money. Start minting it.</h2>
          <div className="sp-12" />
          <div className="cta-row">
            <Link className="btn acc" href="/contact?topic=pad-check">
              Check my pad in 60 seconds
            </Link>
            <DownloadButton
              label="Flare to Bitcoin Blueprint"
              slug="flare-site-operators"
              text="Download the Flare → Bitcoin Blueprint"
            />
            <Link className="btn" href="https://to.tools/janik" target="_blank" rel="noopener noreferrer">
              Book a 15-minute fit call
            </Link>
          </div>
        </section>

        {/* Section 11 — Form */}
        <section className="wrap no-bg">
          <h2>Start a pad check</h2>
          <p className="lead">
            Drop in the basics and we will confirm fit, timeline, and the commercial model that matches your pad.
          </p>
          <div className="sp-16" />
          <FlarePadForm id="flare-pad-form" />
          <div className="sp-8" />
          <p style={{ maxWidth: 900, marginInline: 'auto' }}>
            <small>Not tax or investment advice. Royalty and ORRI handling per lease language.</small>
          </p>
        </section>
      </main>
    </>
  )
}
