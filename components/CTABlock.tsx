import Link from 'next/link'

const CTA_MAP = {
  // TODO: switch 'calculator' URL to https://tools.mcf.digital when subdomain is live
  'calculator':      { text: 'Run the numbers at tools.mcf.digital', href: 'https://on360.me' },
  'fit-call':        { text: 'Book a 15-minute fit call',            href: 'https://to.tools/janik' },
  'engineer':        { text: 'Talk to an engineer',                  href: '/contact?topic=talk-to-engineer' },
  'flare-operators': { text: 'Learn about flare site deployments',   href: '/flare-site-operators' },
  'low-netback':     { text: 'See how the netback math works',       href: '/low-netback' },
  'miners':          { text: 'Find a stranded gas pad',              href: '/for-bitcoin-miners' },
  'investors':       { text: 'Learn about custody-first payouts',    href: '/hnwi-family-offices' },
} as const

type CTAVariant = keyof typeof CTA_MAP

export default function CTABlock({ variant }: { variant: CTAVariant }) {
  const { text, href } = CTA_MAP[variant]
  const isExternal = href.startsWith('http')
  return (
    <div style={{ paddingTop: 32, paddingBottom: 16 }}>
      <Link
        className="btn acc"
        href={href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {text}
      </Link>
    </div>
  )
}
