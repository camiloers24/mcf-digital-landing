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

export const metadata: Metadata = {
  title: 'Turn Stranded Gas Into Bitcoin Production | MCF.DIGITAL',
  description:
    'We match producers, miners, and capital to build on-lease power and compute that cuts flaring, lifts pad netbacks, and lets miners produce BTC at cost.',
  openGraph: {
    title: 'Turn Stranded Gas Into Bitcoin Production | MCF.DIGITAL',
    description:
      'We match producers, miners, and capital to build on-lease power and compute that cuts flaring, lifts pad netbacks, and lets miners produce BTC at cost.',
    type: 'website',
  },
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
