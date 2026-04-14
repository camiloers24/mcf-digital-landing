type HeroVideoProps = {
  poster?: string
  className?: string
  /** Adjust filter intensity per page if needed */
  filter?: string
}

export default function HeroVideo({
  poster = '/media/MCF_web_video_poster.jpg',
  className,
  filter,
}: HeroVideoProps) {
  return (
    <video
      className={`hero-video${className ? ` ${className}` : ''}`}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      style={filter ? { filter } : undefined}
      aria-hidden="true"
    >
      <source src="/media/MCF_web_video.webm" type="video/webm" />
      <source src="/media/MCF_web_video.mp4" type="video/mp4" />
    </video>
  )
}
