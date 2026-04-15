// §11.3: every case study must have anonymized: true OR (anonymized: false AND consentObtained: true). Build fails otherwise.
import type { Metadata } from 'next'
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
  return getAllSlugs('case-studies').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const { frontmatter: fm } = getContentBySlug('case-studies', params.slug)
  const title = `${fm.title} | MCF.digital`
  const url = `https://mcf.digital/resources/case-studies/${params.slug}/`

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
      images: [{ url: '/assets/og-home.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@mcfdigital', // TODO: VERIFY HANDLE
      title,
      description: fm.description,
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const { frontmatter: fm, body } = getContentBySlug('case-studies', params.slug)

  // §11.3 anonymization gate — build fails if neither condition is met
  if (fm.anonymized !== true && fm.consentObtained !== true) {
    throw new Error(
      `Case study [${params.slug}] failed §11.3 anonymization gate: ` +
      `either anonymized: true OR consentObtained: true must be set in frontmatter`
    )
  }

  const canonicalUrl = `https://mcf.digital/resources/case-studies/${params.slug}/`

  // Primary keyword QA gate (§11.1)
  if (fm.primaryKeyword) {
    const first100 = body.split(/\s+/).slice(0, 100).join(' ').toLowerCase()
    if (!first100.includes(fm.primaryKeyword.toLowerCase())) {
      console.warn(
        `[keyword] Case study /resources/case-studies/${params.slug}/ — primary keyword "${fm.primaryKeyword}" not found in first 100 words`
      )
    }
  }

  // TODO-author guard — skip Article schema for placeholder authors
  const isTodoAuthor =
    fm.author.name.startsWith('TODO_') || fm.author.linkedinUrl.includes('TODO_')

  if (isTodoAuthor) {
    console.warn(
      `[schema] Skipping Article schema for /resources/case-studies/${params.slug}/ — author is a TODO placeholder`
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

  return (
    <>
      {schema && <JsonLd data={schema} />}
      <main className="wrap" style={{ paddingTop: 24, paddingBottom: 72 }}>
        <Breadcrumbs
          items={[
            { name: 'Home', url: 'https://mcf.digital/' },
            { name: 'Resources', url: 'https://mcf.digital/resources/' },
            { name: 'Case Studies', url: 'https://mcf.digital/resources/case-studies/' },
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
