// Typed helpers that return JSON-LD objects for <JsonLd data={…} />.
// Shapes match Sections 3.2–3.6 of MCF_Website_Content_Integration_Plan_v2.

// ── Types ──────────────────────────────────────────────────────────

type ServiceParams = {
  name: string
  description: string
  serviceType: string
  url: string
  areaServed?: string
}

type ArticleParams = {
  headline: string
  description: string
  authorName: string
  authorUrl: string
  datePublished: string
  dateModified?: string
  url: string
}

type BreadcrumbItem = {
  name: string
  url: string
}

type FaqItem = {
  question: string
  answer: string
}

type VideoObjectParams = {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl: string
}

// ── Helpers ────────────────────────────────────────────────────────

/** Strip HTML tags from a string (Section 3.3 requirement). */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

/** Section 3.2 — Service schema for each audience page. */
export function serviceSchema(p: ServiceParams): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.name,
    provider: { '@type': 'Organization', name: 'MCF.digital' },
    description: p.description,
    areaServed: p.areaServed ?? 'United States',
    serviceType: p.serviceType,
    url: p.url,
  }
}

/** Section 3.4 — Article schema for glossary, guides, blog, case studies. */
export function articleSchema(p: ArticleParams): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.headline,
    description: p.description,
    author: {
      '@type': 'Person',
      name: p.authorName,
      url: p.authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MCF.digital',
      url: 'https://mcf.digital',
    },
    datePublished: p.datePublished,
    dateModified: p.dateModified ?? p.datePublished,
    url: p.url,
    inLanguage: 'en-US',
  }
}

/** Section 3.5 — BreadcrumbList schema for guides and pillar pages. */
export function breadcrumbSchema(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Section 3.3 — FAQPage schema for service pages.
 * Answer text is automatically stripped of HTML tags per the plan's
 * requirement that FAQPage answer values must be plain text.
 */
export function faqPageSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(item.answer),
      },
    })),
  }
}

/** Section 3.6 — VideoObject schema for the homepage hero video. */
export function videoObjectSchema(p: VideoObjectParams): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: p.name,
    description: p.description,
    thumbnailUrl: p.thumbnailUrl,
    uploadDate: p.uploadDate,
    contentUrl: p.contentUrl,
  }
}
