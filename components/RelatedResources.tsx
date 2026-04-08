import Link from 'next/link'

type ResourceLink = { href: string; title: string; description?: string }

export default function RelatedResources({
  links,
  heading = 'Related resources',
}: {
  links: ResourceLink[]
  heading?: string
}) {
  return (
    <section style={{ paddingTop: 48, paddingBottom: 48, borderTop: '1px solid var(--line)' }}>
      <h2 style={{ fontSize: '1.25rem', marginBottom: 16 }}>{heading}</h2>
      <div className="grid cols-2" style={{ gap: 16 }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="card" style={{ display: 'block' }}>
            <h3 style={{ marginBottom: 4 }}>{link.title}</h3>
            {link.description && <p style={{ color: 'var(--muted)', margin: 0, fontSize: '.875rem' }}>{link.description}</p>}
          </Link>
        ))}
      </div>
    </section>
  )
}
