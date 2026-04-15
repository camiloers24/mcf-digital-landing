import Image from 'next/image'

const items = [
  {
    src: '/assets/illustrations/home-1.png',
    alt: 'MCF.digital on-lease gas-to-Bitcoin system overview — genset, power conditioning, ASIC container, and custody payout',
    caption: 'System overview',
    description: 'Genset deployment, power conditioning, ASIC container setup, and custody-first payout structure — fully on-lease.',
  },
  {
    src: '/assets/illustrations/home-2.png',
    alt: 'On-lease Bitcoin mining compute container deployed at an oil and gas wellhead pad',
    caption: 'On-lease compute container',
    description: 'Purpose-built compute containers deployed directly at the wellhead pad. Dust-rated, heat-tolerant, field-serviceable.',
  },
  {
    src: '/assets/illustrations/low-netbacks.png',
    alt: 'On-lease carve-out economics compared to pipeline netback — MCF.digital netback improvement diagram',
    caption: 'Economics that pencil',
    description: 'On-lease carve-out that beats pipeline take-home. Parity math, clean reporting, custody-first payouts.',
  },
]

export default function HomeIllustrations() {
  return (
    <section className="wrap no-bg">
      <h2>How On-Lease Gas-to-Bitcoin Systems Work</h2>
      <p className="lead">From interconnects to thermals and custody—clean visuals that match the field.</p>
      <div className="sp-16" />
      <div className="ill-stack">
        {items.map((it, i) => {
          const imageFirst = i % 2 === 0
          return (
            <div key={it.src} className={`ill-row${imageFirst ? '' : ' ill-row--flip'}`}>
              <figure className="ill-img">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                />
              </figure>
              <div className="ill-body">
                <h3>{it.caption}</h3>
                <p>{it.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
