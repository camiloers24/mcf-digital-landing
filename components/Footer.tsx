import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="wrap" style={{ paddingTop: 48, paddingBottom: 24 }}>
      <div className="grid cols-4" style={{ paddingBottom: 24 }}>
        <div>
          <Link href="/" aria-label="MCF.DIGITAL — Home" style={{ display: 'inline-block', marginBottom: 12 }}>
            <Image
              src="/assets/logo-white-h.svg"
              alt="mcf.digital"
              width={110}
              height={26}
              style={{ display: 'block', opacity: 0.9 }}
            />
          </Link>
          <p style={{ fontSize: '.875rem', margin: '0 0 8px' }}>Built for the field.</p>
          <Link href="/contact" style={{ fontSize: '.875rem' }}>Contact</Link>
        </div>
        <div>
          <strong style={{ display: 'block', marginBottom: 8 }}>Solutions</strong>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.875rem', display: 'grid', gap: 6 }}>
            <li><Link href="/flare-site-operators">Flare Site Operators</Link></li>
            <li><Link href="/low-netback">Low Netback</Link></li>
            <li><Link href="/for-bitcoin-miners">For Bitcoin Miners</Link></li>
            <li><Link href="/hnwi-family-offices">HNWI &amp; Family Offices</Link></li>
          </ul>
        </div>
        <div>
          <strong style={{ display: 'block', marginBottom: 8 }}>Resources</strong>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.875rem', display: 'grid', gap: 6 }}>
            <li><Link href="/resources/operator-guides/">Operator Guides</Link></li>
            <li><Link href="/resources/pillar-guides/">Pillar Guides</Link></li>
            <li><Link href="/resources/white-papers/">White Papers</Link></li>
            <li><Link href="/resources/case-studies/">Case Studies</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
          </ul>
        </div>
        <div>
          <strong style={{ display: 'block', marginBottom: 8 }}>Reference</strong>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, fontSize: '.875rem', display: 'grid', gap: 6 }}>
            <li><Link href="/glossary/">Glossary</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="foot" style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
        <div>© {new Date().getFullYear()} MCF.DIGITAL</div>
        <div>
          <Link href="/cookie-policy">Cookie Policy</Link> ·{' '}
          <Link href="/copyright-notice">Copyright Notice</Link>
        </div>
      </div>
    </footer>
  )
}
