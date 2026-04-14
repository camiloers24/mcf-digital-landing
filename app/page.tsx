import type { Metadata } from 'next'
import JsonLd from '../components/JsonLd'
import { videoObjectSchema } from '../lib/schema'
import HomeHero from '../components/home/HomeHero'
import HomeResources from '../components/home/HomeResources'
import HomeIllustrations from '../components/home/HomeIllustrations'
import HomeSolutions from '../components/home/HomeSolutions'

const heroVideoSchema = videoObjectSchema({
  name: 'MCF.digital On-Lease Gas-to-Bitcoin System Overview',
  description:
    'A walkthrough of how MCF.digital converts wellhead gas into on-lease Bitcoin production — covering genset deployment, power conditioning, ASIC container setup, and custody-first payout structure.',
  thumbnailUrl: 'https://mcf.digital/assets/illustrations/home-2.png',
  uploadDate: '2026-01-01',
  contentUrl: 'https://mcf.digital/media/MCF_web_video.mp4',
})

export const metadata: Metadata = {
  title: 'Turn Stranded Gas Into Bitcoin Production | MCF.digital',
  description:
    'MCF.digital matches O&G operators, miners, and capital — then builds and runs on-lease power and compute. Operators cut flaring. Miners produce BTC at cost.',
  openGraph: {
    title: 'Turn Stranded Gas Into Bitcoin Production | MCF.digital',
    description:
      'MCF.digital matches O&G operators, miners, and capital — then builds and runs on-lease power and compute. Operators cut flaring. Miners produce BTC at cost.',
    type: 'website',
    url: 'https://mcf.digital/',
    siteName: 'MCF.digital',
    images: [{ url: 'https://mcf.digital/assets/og-home.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mcfdigital',
  },
  alternates: {
    canonical: 'https://mcf.digital/',
  },
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={heroVideoSchema} />
      <HomeHero />
      <main>
        <HomeResources />
        <HomeIllustrations />
        <HomeSolutions />
      </main>
    </>
  )
}
