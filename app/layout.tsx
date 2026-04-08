// app/layout.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

// ⬇️ switch alias imports to relative paths
import { LeadProvider } from '../components/LeadContext'
import ProgressBar from '../components/ProgressBar'
import SiteNav from '../components/SiteNav'
import ContactFab from '../components/ContactFab'
import IntelligenceFab from '../components/IntelligenceFab'
import JsonLd from '../components/JsonLd'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MCF.digital',
  url: 'https://mcf.digital',
  logo: 'https://mcf.digital/assets/logo.png',
  description:
    'MCF.digital matches oil and gas operators, miners, and capital, then builds and runs on-lease power and compute for Bitcoin mining on stranded and flare gas sites.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    url: 'https://mcf.digital/contact',
  },
  sameAs: [
    'https://linkedin.com/company/mcf-digital',
    'https://twitter.com/mcfdigital',
  ],
}

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
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        <div id="progress" aria-hidden />
        <LeadProvider>
          {/* FIX: Removed the redundant <nav> and <div> wrappers. 
                   Only the single SiteNav component is now rendered. */}
          <SiteNav />

          <ProgressBar />

          {children}

          <footer className="wrap" style={{ paddingTop: 48, paddingBottom: 24 }}>
            <div className="grid cols-4" style={{ paddingBottom: 24 }}>
              <div>
                <strong style={{ display: 'block', marginBottom: 8 }}>MCF.DIGITAL</strong>
                <p style={{ fontSize: '.875rem', margin: '0 0 8px' }}>Built for the field.</p>
                <Link href="/contact" style={{ fontSize: '.875rem' }}>Contact</Link>
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: 8 }}>Solutions</strong>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.875rem', display: 'grid', gap: 6 }}>
                  <li><Link href="/flare-site-operators">Flare Site Operators</Link></li>
                  <li><Link href="/low-netback">Low Netback</Link></li>
                  <li><Link href="/for-bitcoin-miners">For Bitcoin Miners</Link></li>
                  <li><Link href="/hnwi-family-offices">HNWI &amp; Family Offices</Link></li>
                </ul>
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: 8 }}>Resources</strong>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.875rem', display: 'grid', gap: 6 }}>
                  <li><Link href="/resources/operator-guides/">Operator Guides</Link></li>
                  <li><Link href="/resources/pillar-guides/">Pillar Guides</Link></li>
                  <li><Link href="/resources/white-papers/">White Papers</Link></li>
                  <li><Link href="/resources/case-studies/">Case Studies</Link></li>
                  <li><Link href="/blog/">Blog</Link></li>
                </ul>
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: 8 }}>Reference</strong>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.875rem', display: 'grid', gap: 6 }}>
                  <li><Link href="/glossary/">Glossary</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-use">Terms of Use</Link></li>
                </ul>
              </div>
            </div>
            <div className="foot" style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
              <div>© {new Date().getFullYear()} MCF.DIGITAL</div>
              <div>
                <Link href="/cookie-policy">Cookie Policy</Link> ·{' '}
                <Link href="/copyright-notice">Copyright Notice</Link>
              </div>
            </div>
          </footer>

          <IntelligenceFab />
          <ContactFab />
        </LeadProvider>
      </body>
    </html>
  )
}
