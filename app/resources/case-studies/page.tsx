import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '../../../lib/content'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Case Studies | MCF.digital',
  description:
    'Real deployments of on-lease Bitcoin mining at oil and gas sites — from Permian flare gas conversion to DJ Basin netback recovery. Anonymized where required.',
  alternates: { canonical: 'https://mcf.digital/resources/case-studies/' },
  openGraph: {
    title: 'Case Studies | MCF.digital',
    description:
      'Real deployments of on-lease Bitcoin mining at oil and gas sites — from Permian flare gas conversion to DJ Basin netback recovery. Anonymized where required.',
    url: 'https://mcf.digital/resources/case-studies/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

export default function CaseStudiesIndexPage() {
  const entries = getAllContent('case-studies')

  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Resources', url: 'https://mcf.digital/resources/' },
          { name: 'Case Studies', url: 'https://mcf.digital/resources/case-studies/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>Case Studies</h1>
        <p className="lead">
          Real deployments of on-lease Bitcoin mining at oil and gas sites — from Permian flare
          gas conversion to DJ Basin netback recovery. Anonymized where required.
        </p>
      </div>
      <div style={{ marginTop: 24 }}>
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/resources/case-studies/${entry.slug}/`}
            className="card"
            style={{ display: 'block', marginBottom: 12 }}
          >
            <h3 style={{ marginBottom: 4 }}>{entry.frontmatter.title}</h3>
            <p style={{ color: 'var(--muted)', margin: 0, fontSize: '.875rem' }}>
              {entry.frontmatter.description}
            </p>
            {entry.frontmatter.publishedDate && (
              <p style={{ color: 'var(--muted)', margin: '4px 0 0', fontSize: '.75rem', opacity: 0.6 }}>
                {entry.frontmatter.publishedDate}
              </p>
            )}
          </Link>
        ))}
        {entries.length === 0 && (
          <p style={{ color: 'var(--muted)' }}>No case studies published yet.</p>
        )}
      </div>
    </main>
  )
}
