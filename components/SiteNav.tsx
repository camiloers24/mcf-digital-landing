'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="inner wrap">
          <Link href="/" className="brand" aria-label="MCF.DIGITAL — Home">
            <Image
              src="/assets/logo-white-h.svg"
              alt="mcf.digital"
              width={120}
              height={28}
              priority
              style={{ display: 'block' }}
            />
          </Link>

          {/* Desktop links */}
          <div className="links nav-desktop" role="navigation">
            <Link href="/flare-site-operators" className={pathname === '/flare-site-operators' ? 'nav-active' : ''}>Flare Site Operators</Link>
            <Link href="/low-netback" className={pathname === '/low-netback' ? 'nav-active' : ''}>Low Netback Sites</Link>
            <Link href="/for-bitcoin-miners" className={pathname === '/for-bitcoin-miners' ? 'nav-active' : ''}>For Bitcoin Miners</Link>
            <Link href="/hnwi-family-offices" className={pathname === '/hnwi-family-offices' ? 'nav-active' : ''}>HNWI & Family Offices</Link>
            <Link href="/about" className={pathname === '/about' ? 'nav-active' : ''}>About Us</Link>
            <Link href="/contact" className="cta">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`hamburger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="bar bar-top" />
            <span className="bar bar-mid" />
            <span className="bar bar-bot" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {open && (
        <div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <div className="mobile-panel">
            <div className="mobile-top">
              <span className="brand-mini">
                <Image
                  src="/assets/logo-white-h.svg"
                  alt="mcf.digital"
                  width={100}
                  height={24}
                  style={{ display: 'block' }}
                />
              </span>
            </div>
            <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <span className="bar bar-top" />
              <span className="bar bar-bot" />
            </button>
            <div className="mobile-links">
              <Link href="/flare-site-operators" className={pathname === '/flare-site-operators' ? 'nav-active' : ''} onClick={() => setOpen(false)}>Flare Site Operators</Link>
              <Link href="/low-netback" className={pathname === '/low-netback' ? 'nav-active' : ''} onClick={() => setOpen(false)}>Low Netback Sites</Link>
              <Link href="/for-bitcoin-miners" className={pathname === '/for-bitcoin-miners' ? 'nav-active' : ''} onClick={() => setOpen(false)}>For Bitcoin Miners</Link>
              <Link href="/hnwi-family-offices" className={pathname === '/hnwi-family-offices' ? 'nav-active' : ''} onClick={() => setOpen(false)}>HNWI & Family Offices</Link>
              <Link href="/about" className={pathname === '/about' ? 'nav-active' : ''} onClick={() => setOpen(false)}>About Us</Link>
              <Link href="/contact" className="btn acc lg" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}