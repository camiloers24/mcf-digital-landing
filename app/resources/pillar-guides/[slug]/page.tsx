// Word count target per §7.3: 2,500–4,000. Not enforced — manual review at QA.
// Per §7.3: PG-1 (Complete Guide to Flare Gas Bitcoin Mining) is the SEO hub
// and must link to ALL glossary + operator guide pages. This is enforced via
// the markdown content body, not the template.
import type { Metadata } from 'next'
import GithubSlugger from 'github-slugger'
import { getContentBySlug, getAllSlugs } from '../../../../lib/content'
import { articleSchema } from '../../../../lib/schema'
import JsonLd from '../../../../components/JsonLd'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import AuthorByline from '../../../../components/AuthorByline'
import MarkdownContent from '../../../../components/MarkdownContent'
import CTABlock from '../../../../components/CTABlock'
import RelatedResources from '../../../../components/RelatedResources'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllSlugs('pillar-guides').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const { frontmatter: fm } = getContentBySlug('pillar-guides', params.slug)
  const title = `${fm.title} | MCF.digital`
  const url = `https://mcf.digital/resources/pillar-guides/${params.slug}/`

  return {
    title,
    description: fm.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: fm.description,
      url,
      type: 'article',
      siteName: 'MCF.digital',
      images: [{ url: 'https://mcf.digital/assets/og-home.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@mcfdigital', // TODO: VERIFY HANDLE
      title,
      description: fm.description,
    },
  }
}

function extractToc(body: string): Array<{ text: string; id: string }> {
  const slugger = new GithubSlugger()
  const headings: Array<{ text: string; id: string }> = []
  for (const line of body.split('\n')) {
    const match = line.match(/^## (.+)$/)
    if (match) {
      headings.push({ text: match[1], id: slugger.slug(match[1]) })
    }
  }
  return headings
}

export default function PillarGuidePage({ params }: Props) {
  const { frontmatter: fm, body } = getContentBySlug('pillar-guides', params.slug)
  const canonicalUrl = `https://mcf.digital/resources/pillar-guides/${params.slug}/`

  // Primary keyword QA gate (§7.3 / §11.1)
  if (fm.primaryKeyword) {
    const first100 = body.split(/\s+/).slice(0, 100).join(' ').toLowerCase()
    if (!first100.includes(fm.primaryKeyword.toLowerCase())) {
      console.warn(
        `[keyword] Pillar guide /resources/pillar-guides/${params.slug}/ — primary keyword "${fm.primaryKeyword}" not found in first 100 words`
      )
    }
  }

  // TODO-author guard — skip Article schema for placeholder authors
  const isTodoAuthor =
    fm.author.name.startsWith('TODO_') || fm.author.linkedinUrl.includes('TODO_')

  if (isTodoAuthor) {
    console.warn(
      `[schema] Skipping Article schema for /resources/pillar-guides/${params.slug}/ — author is a TODO placeholder`
    )
  }

  const schema = !isTodoAuthor
    ? articleSchema({
        headline: fm.title,
        description: fm.description,
        authorName: fm.author.name,
        authorUrl: fm.author.linkedinUrl,
        datePublished: fm.publishedDate,
        dateModified: fm.updatedDate,
        url: canonicalUrl,
      })
    : null

  const toc = extractToc(body)

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
        <Breadcrumbs
          items={[
            { name: 'Home', url: 'https://mcf.digital/' },
            { name: 'Resources', url: 'https://mcf.digital/resources/' },
            { name: 'Pillar Guides', url: 'https://mcf.digital/resources/pillar-guides/' },
            { name: fm.title, url: canonicalUrl },
          ]}
        />
        <div style={{ marginTop: 32 }}>
          <h1>{fm.title}</h1>
          <AuthorByline
            name={fm.author.name}
            title={fm.author.title}
            linkedinUrl={fm.author.linkedinUrl}
            publishedDate={fm.publishedDate}
            updatedDate={fm.updatedDate}
          />
          {toc.length >= 3 && (
            <nav aria-label="Table of contents" className="card" style={{ marginBottom: 32, padding: 24 }}>
              <strong style={{ display: 'block', marginBottom: 8 }}>In this guide</strong>
              <ol style={{ margin: 0, paddingLeft: 20 }}>
                {toc.map((h) => (
                  <li key={h.id} style={{ marginBottom: 4 }}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <MarkdownContent body={body} />
        </div>
        <CTABlock variant={fm.ctaVariant ?? 'fit-call'} />
        {fm.relatedResources && fm.relatedResources.length > 0 && (
          <RelatedResources links={fm.relatedResources} />
        )}
      </main>
    </>
  )
}
