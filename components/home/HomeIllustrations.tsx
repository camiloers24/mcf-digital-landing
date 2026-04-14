import Image from 'next/image'

const items = [
  {
    src: '/assets/illustrations/home-1.png',
    alt: 'MCF.digital on-lease gas-to-Bitcoin system overview — genset, power conditioning, ASIC container, and custody payout',
    caption: 'System overview',
  },
  {
    src: '/assets/illustrations/home-2.png',
    alt: 'On-lease Bitcoin mining compute container deployed at an oil and gas wellhead pad',
    caption: 'On-lease compute container',
  },
  {
    src: '/assets/illustrations/low-netbacks.png',
    alt: 'On-lease carve-out economics compared to pipeline netback — MCF.digital netback improvement diagram',
    caption: 'Economics that pencil',
  },
]

export default function HomeIllustrations() {
  return (
    <section className="wrap no-bg">
      <h2>How On-Lease Gas-to-Bitcoin Systems Work</h2>
      <p className="lead">From interconnects to thermals and custody—clean visuals that match the field.</p>
      <div className="sp-16" />
      <div className="grid cols-3">
        {items.map((it) => (
          <figure key={it.src} className="card fig fig--overlay">
            <div className="fig-frame">
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1200px) 33vw, 400px"
                style={{ objectFit: 'cover' }}
              />
              <figcaption className="fig-overlay-caption">{it.caption}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
