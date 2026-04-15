import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '../../../lib/content'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Pillar Guides | MCF.digital',
  description:
    'Comprehensive guides covering on-lease Bitcoin mining from end to end — flare gas monetization, hosting structures, family office investment, and the technical mechanics of gas-to-hash deployment.',
  alternates: { canonical: 'https://mcf.digital/resources/pillar-guides/' },
  openGraph: {
    title: 'Pillar Guides | MCF.digital',
    description:
      'Comprehensive guides covering on-lease Bitcoin mining from end to end — flare gas monetization, hosting structures, family office investment, and the technical mechanics of gas-to-hash deployment.',
    url: 'https://mcf.digital/resources/pillar-guides/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

export default function PillarGuidesIndexPage() {
  const entries = getAllContent('pillar-guides')

  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Resources', url: 'https://mcf.digital/resources/' },
          { name: 'Pillar Guides', url: 'https://mcf.digital/resources/pillar-guides/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>Pillar Guides</h1>
        <p className="lead">
          Comprehensive guides covering on-lease Bitcoin mining from end to end — flare gas
          monetization, hosting structures, family office investment, and the technical
          mechanics of gas-to-hash deployment.
        </p>
      </div>
      <div style={{ marginTop: 24 }}>
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/resources/pillar-guides/${entry.slug}/`}
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
          <p style={{ color: 'var(--muted)' }}>No pillar guides published yet.</p>
        )}
      </div>
    </main>
  )
}
