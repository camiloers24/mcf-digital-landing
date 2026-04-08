import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// ── Types ──────────────────────────────────────────────────────────

export type ContentType =
  | 'glossary'
  | 'operator-guides'
  | 'pillar-guides'
  | 'white-papers'
  | 'case-studies'
  | 'blog'

export type Frontmatter = {
  title: string
  description: string
  slug: string
  author: {
    name: string
    title: string
    linkedinUrl: string
  }
  publishedDate: string
  updatedDate?: string
  keywords: string[]
  primaryKeyword?: string
  relatedResources?: Array<{ href: string; title: string; description?: string }>
  ctaVariant?: 'fit-call' | 'calculator' | 'engineer'
  pdfFilename?: string
  anonymized?: boolean
  consentObtained?: boolean
}

export type ContentEntry = {
  frontmatter: Frontmatter
  body: string
  slug: string
}

// ── Internals ──────────────────────────────────────────────────────

const CONTENT_ROOT = path.join(process.cwd(), 'content')

const REQUIRED_FIELDS: (keyof Frontmatter)[] = [
  'title',
  'description',
  'slug',
  'author',
  'publishedDate',
  'keywords',
]

function contentDir(type: ContentType): string {
  return path.join(CONTENT_ROOT, type)
}

function validateFrontmatter(data: Record<string, unknown>, filePath: string): Frontmatter {
  const missing = REQUIRED_FIELDS.filter((f) => data[f] == null)
  if (missing.length > 0) {
    throw new Error(
      `Missing required frontmatter fields in ${filePath}: ${missing.join(', ')}`
    )
  }

  const author = data.author as Record<string, unknown> | undefined
  if (!author || !author.name || !author.title || !author.linkedinUrl) {
    throw new Error(
      `Frontmatter "author" in ${filePath} must include name, title, and linkedinUrl`
    )
  }

  return data as unknown as Frontmatter
}

function isPublishable(filename: string): boolean {
  return filename.endsWith('.md') && !filename.startsWith('_')
}

// ── Public API ─────────────────────────────────────────────────────

/** Returns parsed frontmatter + body for a single content file. */
export function getContentBySlug(type: ContentType, slug: string): ContentEntry {
  const filePath = path.join(contentDir(type), `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found: ${filePath}`)
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const frontmatter = validateFrontmatter(data, filePath)

  return { frontmatter, body: content, slug }
}

/** Returns all entries for a content type, sorted by publishedDate desc. */
export function getAllContent(type: ContentType): ContentEntry[] {
  const dir = contentDir(type)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter(isPublishable)
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      return getContentBySlug(type, slug)
    })
    .sort((a, b) => b.frontmatter.publishedDate.localeCompare(a.frontmatter.publishedDate))
}

/** Returns just the slugs for a content type — for generateStaticParams. */
export function getAllSlugs(type: ContentType): string[] {
  const dir = contentDir(type)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter(isPublishable)
    .map((file) => file.replace(/\.md$/, ''))
}
