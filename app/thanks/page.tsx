import Link from 'next/link'

type ThanksContent = {
  title: string
  lead: string
  pdfLead?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

const DEFAULT_CONTENT: ThanksContent = {
  title: 'Your request is in.',
  lead: 'Our team received your details and will follow up shortly.',
  primaryLabel: 'Back to home',
  primaryHref: '/',
  secondaryLabel: 'Contact our team',
  secondaryHref: '/contact',
}

const CONTENT_BY_ASSET: Record<string, ThanksContent> = {
  contact: {
    title: 'We got your message.',
    lead: 'A team member will review your note and reach out with next steps.',
    primaryLabel: 'Back to home',
    primaryHref: '/',
    secondaryLabel: 'View solutions',
    secondaryHref: '/#choose-your-path',
  },
  'flare-pad-intake': {
    title: 'Flare pad details received.',
    lead: 'We will review your gas profile and follow up with a deployment path.',
    primaryLabel: 'See flare solutions',
    primaryHref: '/flare-site-operators',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'netback-intake': {
    title: 'Netback intake received.',
    lead: 'We will model your numbers and send a practical path to improve pad economics.',
    primaryLabel: 'See netback solutions',
    primaryHref: '/low-netback',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'miners-intake': {
    title: 'Mining intake received.',
    lead: 'We will review your fleet details and return with a fit recommendation.',
    primaryLabel: 'See miner solutions',
    primaryHref: '/for-bitcoin-miners',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'investor-intake': {
    title: 'Investor profile received.',
    lead: 'We will prepare a follow-up based on your structure and custody preferences.',
    primaryLabel: 'See investor page',
    primaryHref: '/hnwi-family-offices',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'flare-site-operators': {
    title: 'Your request is in.',
    lead: 'We are sending your Flare Site Operators brief now and a copy is headed to your inbox.',
    pdfLead: 'Your PDF is on the way and should arrive shortly.',
    primaryLabel: 'Explore flare solutions',
    primaryHref: '/flare-site-operators',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'low-netback': {
    title: 'Your request is in.',
    lead: 'We are sending your Low Netback brief now and a copy is headed to your inbox.',
    pdfLead: 'Your PDF is on the way and should arrive shortly.',
    primaryLabel: 'Explore netback solutions',
    primaryHref: '/low-netback',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'for-bitcoin-miners': {
    title: 'Your request is in.',
    lead: 'We are sending your Bitcoin Miners brief now and a copy is headed to your inbox.',
    pdfLead: 'Your PDF is on the way and should arrive shortly.',
    primaryLabel: 'Explore miner solutions',
    primaryHref: '/for-bitcoin-miners',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
  'hnwi-family-offices': {
    title: 'Your request is in.',
    lead: 'We are sending your HNWI brief now and a copy is headed to your inbox.',
    pdfLead: 'Your PDF is on the way and should arrive shortly.',
    primaryLabel: 'Explore investor solutions',
    primaryHref: '/hnwi-family-offices',
    secondaryLabel: 'Back to home',
    secondaryHref: '/',
  },
}

type ThanksPageProps = {
  searchParams?: Record<string, string | string[] | undefined>
}

function getFirst(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value
}

function getFirstName(rawName: string | undefined) {
  if (!rawName) return ''
  const normalized = rawName.trim().replace(/\s+/g, ' ')
  if (!normalized) return ''
  return normalized.split(' ')[0]
}

export default function ThanksPage({ searchParams }: ThanksPageProps) {
  const asset = getFirst(searchParams?.asset)?.trim().toLowerCase() || ''
  const flow = getFirst(searchParams?.flow)?.trim().toLowerCase() || ''
  const firstName = getFirstName(getFirst(searchParams?.name))
  const content = CONTENT_BY_ASSET[asset] || DEFAULT_CONTENT
  const leadCopy = flow === 'download-pdf' && content.pdfLead ? content.pdfLead : content.lead

  return (
    <main className="wrap" style={{ padding: '80px 0' }}>
      <h1>{firstName ? `${firstName}, ${content.title}` : content.title}</h1>
      <p className="lead">{leadCopy}</p>
      <div className="cta-row" style={{ justifyContent: 'flex-start' }}>
        <Link className="btn acc" href={content.primaryHref}>
          {content.primaryLabel}
        </Link>
        {content.secondaryHref && content.secondaryLabel ? (
          <Link className="btn" href={content.secondaryHref}>
            {content.secondaryLabel}
          </Link>
        ) : null}
      </div>
    </main>
  )
}
