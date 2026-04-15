import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Resources | MCF.digital',
  description:
    'Operator guides, pillar guides, white papers, and case studies on stranded gas Bitcoin mining — for oil and gas operators, miners, and capital partners.',
  alternates: { canonical: 'https://mcf.digital/resources/' },
  openGraph: {
    title: 'Resources | MCF.digital',
    description:
      'Operator guides, pillar guides, white papers, and case studies on stranded gas Bitcoin mining — for oil and gas operators, miners, and capital partners.',
    url: 'https://mcf.digital/resources/',
    type: 'website',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital', // TODO: VERIFY HANDLE
  },
}

const sections = [
  {
    title: 'Operator Guides',
    href: '/resources/operator-guides/',
    description: 'Step-by-step guides for oil and gas operators evaluating on-lease Bitcoin mining.',
  },
  {
    title: 'Pillar Guides',
    href: '/resources/pillar-guides/',
    description: 'Comprehensive end-to-end guides on stranded gas Bitcoin mining.',
  },
  {
    title: 'White Papers',
    href: '/resources/white-papers/',
    description: 'In-depth white papers with downloadable PDFs.',
  },
  {
    title: 'Case Studies',
    href: '/resources/case-studies/',
    description: 'Real deployments at oil and gas sites.',
  },
]

export default function ResourcesIndexPage() {
  return (
    <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <Breadcrumbs
        items={[
          { name: 'Home', url: 'https://mcf.digital/' },
          { name: 'Resources', url: 'https://mcf.digital/resources/' },
        ]}
      />
      <div style={{ marginTop: 32 }}>
        <h1>Resources</h1>
        <p className="lead">
          Operator guides, pillar guides, white papers, and case studies on stranded gas
          Bitcoin mining — for oil and gas operators, miners, and capital partners.
        </p>
      </div>
      <div className="grid cols-2" style={{ marginTop: 24 }}>
        {sections.map((s) => (
          <Link key={s.href} href={s.href} className="card" style={{ display: 'block' }}>
            <h3>{s.title}</h3>
            <p style={{ color: 'var(--muted)', margin: '4px 0 0', fontSize: '.875rem' }}>
              {s.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
