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

          <footer className="wrap">
            <div className="foot">
              <div>© {new Date().getFullYear()} MCF.DIGITAL</div>
              <div>
                <Link href="/terms-of-use">Terms of Use</Link> ·{' '}
                <Link href="/privacy-policy">Privacy Policy</Link> ·{' '}
                <Link href="/cookie-policy">Cookie Policy</Link> ·{' '}
                <Link href="/copyright-notice">Copyright Notice</Link> · Built for the field.
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
