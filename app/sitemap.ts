import type { MetadataRoute } from 'next'

const BASE_URL = 'https://mcf.digital'

type SitemapConfig = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const ROUTES: SitemapConfig[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/flare-site-operators', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/low-netback', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/for-bitcoin-miners', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/hnwi-family-offices', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/intelligence', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/terms-of-use', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/copyright-notice', changeFrequency: 'yearly', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
