// app/layout.tsx
import type { Metadata } from 'next'
import { Albert_Sans } from 'next/font/google'
import './globals.css'

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

// ⬇️ switch alias imports to relative paths
import { LeadProvider } from '../components/LeadContext'
import ProgressBar from '../components/ProgressBar'
import SiteNav from '../components/SiteNav'
import Footer from '../components/Footer'
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
    <html lang="en" className={albertSans.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@400,500,600,700&display=swap"
        />
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

          <Footer />

          <IntelligenceFab />
          <ContactFab />
        </LeadProvider>
      </body>
    </html>
  )
}
