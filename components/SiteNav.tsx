'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

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
            <Link href="/flare-site-operators">Flare Site Operators</Link>
            <Link href="/low-netback">Low Netback Sites</Link>
            <Link href="/for-bitcoin-miners">For Bitcoin Miners</Link>
            <Link href="/hnwi-family-offices">HNWI & Family Offices</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact" className="cta">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
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
              <button className="mobile-x" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="mobile-links">
              <Link href="/flare-site-operators" onClick={() => setOpen(false)}>Flare Site Operators</Link>
              <Link href="/low-netback" onClick={() => setOpen(false)}>Low Netback Sites</Link>
              <Link href="/for-bitcoin-miners" onClick={() => setOpen(false)}>For Bitcoin Miners</Link>
              <Link href="/hnwi-family-offices" onClick={() => setOpen(false)}>HNWI & Family Offices</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link href="/contact" className="btn acc lg" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}