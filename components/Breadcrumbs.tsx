import Link from 'next/link'
import JsonLd from './JsonLd'
import { breadcrumbSchema } from '../lib/schema'

type BreadcrumbItem = { name: string; url: string }

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" style={{ fontSize: '.8rem', color: 'var(--muted)', padding: '14px 0 0' }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <span key={item.url}>
              {i > 0 && <span style={{ margin: '0 6px', opacity: 0.5 }} aria-hidden>›</span>}
              {isLast ? (
                <span style={{ color: 'var(--ink)' }}>{item.name}</span>
              ) : (
                <Link href={item.url}>{item.name}</Link>
              )}
            </span>
          )
        })}
      </nav>
    </>
  )
}
