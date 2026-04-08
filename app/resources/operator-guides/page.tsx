import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '../../../lib/content'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Operator Guides | MCF.digital',
  description:
    'Step-by-step guides for oil and gas operators evaluating on-lease Bitcoin mining — from flare gas monetization to netback improvement and basin-specific deployment.',
  alternates: { canonical: 'https://mcf.digital/resources/operator-guides/' },
  openGraph: {
    title: 'Operator Guides | MCF.digital',
    description:
      'Step-by-step guides for oil and gas operators evaluating on-lease Bitcoin mining — from flare gas monetization to netback improvement and basin-specific deployment.',
    url: 'https://mcf.digital/resources/operator-guides/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: 'https://mcf.digital/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

export default function OperatorGuidesIndexPage() {
  const entries = getAllContent('operator-guides')

  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Resources', url: 'https://mcf.digital/resources/' },
          { name: 'Operator Guides', url: 'https://mcf.digital/resources/operator-guides/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>Operator Guides</h1>
        <p className="lead">
          Step-by-step guides for oil and gas operators evaluating on-lease Bitcoin mining.
        </p>
      </div>
      <div style={{ marginTop: 24 }}>
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/resources/operator-guides/${entry.slug}/`}
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
          <p style={{ color: 'var(--muted)' }}>No operator guides published yet.</p>
        )}
      </div>
    </main>
  )
}
