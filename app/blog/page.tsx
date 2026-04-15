import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '../../lib/content'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog | MCF.digital',
  description:
    'Field notes and analysis on stranded gas Bitcoin mining — deal structures, market dynamics, and what actually pencils on a flare site.',
  alternates: { canonical: 'https://mcf.digital/blog/' },
  openGraph: {
    title: 'Blog | MCF.digital',
    description:
      'Field notes and analysis on stranded gas Bitcoin mining — deal structures, market dynamics, and what actually pencils on a flare site.',
    url: 'https://mcf.digital/blog/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

export default function BlogIndexPage() {
  const entries = getAllContent('blog')

  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Blog', url: 'https://mcf.digital/blog/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>Blog</h1>
        <p className="lead">
          Field notes and analysis on stranded gas Bitcoin mining — deal structures,
          market dynamics, and what actually pencils on a flare site.
        </p>
      </div>
      <div style={{ marginTop: 24 }}>
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/blog/${entry.slug}/`}
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
          <p style={{ color: 'var(--muted)' }}>No posts published yet.</p>
        )}
      </div>
    </main>
  )
}
