import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '../../lib/content'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Glossary | MCF.digital',
  description:
    'Authoritative definitions for on-lease Bitcoin mining, flare gas monetization, gas netback, and gas-to-hash deployment terms. Plain language for operators, miners, and investors.',
  alternates: { canonical: 'https://mcf.digital/glossary/' },
  openGraph: {
    title: 'Glossary | MCF.digital',
    description:
      'Authoritative definitions for on-lease Bitcoin mining, flare gas monetization, gas netback, and gas-to-hash deployment terms. Plain language for operators, miners, and investors.',
    url: 'https://mcf.digital/glossary/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

export default function GlossaryIndexPage() {
  const entries = getAllContent('glossary')
    .slice()
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Glossary', url: 'https://mcf.digital/glossary/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>Glossary</h1>
        <p className="lead">
          Authoritative definitions for the terms that matter in on-lease Bitcoin mining,
          flare gas monetization, and gas-to-hash deployments.
        </p>
      </div>
      <div style={{ marginTop: 24 }}>
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/glossary/${entry.slug}/`}
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
          <p style={{ color: 'var(--muted)' }}>No glossary entries published yet.</p>
        )}
      </div>
    </main>
  )
}
