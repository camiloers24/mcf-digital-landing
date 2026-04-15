import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import JsonLd from '../../components/JsonLd'
import { breadcrumbSchema } from '../../lib/schema'

const breadcrumbs = breadcrumbSchema([
  { name: 'Home', url: 'https://mcf.digital/' },
  { name: 'Contact', url: 'https://mcf.digital/contact' },
])

export const metadata: Metadata = {
  title: 'Contact MCF.digital | Talk to a Stranded Gas Engineer',
  description:
    'Talk to an MCF.digital engineer about your stranded gas or flare site. 15-minute fit calls available. No BTC knowledge required.',
  openGraph: {
    title: 'Contact MCF.digital | Talk to a Stranded Gas Engineer',
    description:
      'Talk to an MCF.digital engineer about your stranded gas or flare site. 15-minute fit calls available. No BTC knowledge required.',
    type: 'website',
    url: 'https://mcf.digital/contact',
    siteName: 'MCF.digital',
    images: [{ url: '/assets/og-contact.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', site: '@mcfdigital' },
  alternates: { canonical: 'https://mcf.digital/contact' },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <section className="contact-hero-section">
        <div className="scrim" />
        <div className="wrap">
          <div className="contact-layout">
            <div className="contact-header">
              <h1>Contact</h1>
              <p className="lead">Tell us a bit about your site or role and we&apos;ll get back fast.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
