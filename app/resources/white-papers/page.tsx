import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '../../../lib/content'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'White Papers | MCF.digital',
  description:
    'In-depth white papers on stranded gas Bitcoin mining economics, deployment frameworks, regulatory landscape, and capital structure. Download as PDF.',
  alternates: { canonical: 'https://mcf.digital/resources/white-papers/' },
  openGraph: {
    title: 'White Papers | MCF.digital',
    description:
      'In-depth white papers on stranded gas Bitcoin mining economics, deployment frameworks, regulatory landscape, and capital structure. Download as PDF.',
    url: 'https://mcf.digital/resources/white-papers/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

export default function WhitePapersIndexPage() {
  const entries = getAllContent('white-papers')

  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Resources', url: 'https://mcf.digital/resources/' },
          { name: 'White Papers', url: 'https://mcf.digital/resources/white-papers/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>White Papers</h1>
        <p className="lead">
          In-depth white papers on stranded gas Bitcoin mining economics, deployment frameworks,
          regulatory landscape, and capital structure. Download as PDF.
        </p>
      </div>
      <div style={{ marginTop: 24 }}>
        {entries.map((entry) => (
          <Link
            key={entry.slug}
            href={`/resources/white-papers/${entry.slug}/`}
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
          <p style={{ color: 'var(--muted)' }}>No white papers published yet.</p>
        )}
      </div>
    </main>
  )
}
