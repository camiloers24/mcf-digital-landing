// Landing page abstract only — full paper is the gated PDF. Abstract target: 300–600 words.
import type { Metadata } from 'next'
import { getContentBySlug, getAllSlugs } from '../../../../lib/content'
import { articleSchema } from '../../../../lib/schema'
import JsonLd from '../../../../components/JsonLd'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import AuthorByline from '../../../../components/AuthorByline'
import MarkdownContent from '../../../../components/MarkdownContent'
import WhitePaperDownloadForm from '../../../../components/WhitePaperDownloadForm'
import RelatedResources from '../../../../components/RelatedResources'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getAllSlugs('white-papers').map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const { frontmatter: fm } = getContentBySlug('white-papers', params.slug)
  const title = `${fm.title} | MCF.digital`
  const url = `https://mcf.digital/resources/white-papers/${params.slug}/`

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

export default function WhitePaperPage({ params }: Props) {
  const { frontmatter: fm, body } = getContentBySlug('white-papers', params.slug)

  if (!fm.pdfFilename) {
    throw new Error(`White paper [${params.slug}] missing required frontmatter field: pdfFilename`)
  }

  const canonicalUrl = `https://mcf.digital/resources/white-papers/${params.slug}/`

  // TODO-author guard — skip Article schema for placeholder authors
  const isTodoAuthor =
    fm.author.name.startsWith('TODO_') || fm.author.linkedinUrl.includes('TODO_')

  if (isTodoAuthor) {
    console.warn(
      `[schema] Skipping Article schema for /resources/white-papers/${params.slug}/ — author is a TODO placeholder`
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
            { name: 'White Papers', url: 'https://mcf.digital/resources/white-papers/' },
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
        <WhitePaperDownloadForm slug={params.slug} title={fm.title} />
        {fm.relatedResources && fm.relatedResources.length > 0 && (
          <RelatedResources links={fm.relatedResources} />
        )}
      </main>
    </>
  )
}
