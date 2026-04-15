'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

const SELECTORS = '.card, section > h2, section > p.lead, .ill-row, .cta-stack'

export default function SmoothScroll() {
  useEffect(() => {
    // Respect reduced-motion preference
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── Lenis smooth scroll ────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: reduced ? 0 : 1.4,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // ── Scroll reveal ──────────────────────────────────
    if (reduced) {
      return () => {
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    }

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS))
    els.forEach((el) => el.classList.add('js-reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          // Stagger siblings inside the same parent
          const siblings = Array.from(
            el.parentElement?.querySelectorAll<HTMLElement>('.js-reveal') ?? []
          ).filter((s) => s.parentElement === el.parentElement)
          const idx = siblings.indexOf(el)
          el.style.transitionDelay = `${idx * 0.07}s`
          el.classList.add('is-visible')
          observer.unobserve(el)
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -28px 0px' }
    )

    els.forEach((el) => observer.observe(el))

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      observer.disconnect()
      els.forEach((el) => {
        el.classList.remove('js-reveal', 'is-visible')
        el.style.transitionDelay = ''
      })
    }
  }, [])

  return null
}
