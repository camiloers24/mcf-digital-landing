/**
 * HeroVideoBackground
 * Lives in the root layout — mounts once and persists across navigations.
 * Positioned absolutely (not fixed) so it scrolls away with the page naturally.
 * Only visible through transparent .hero sections (home page header).
 * Pages with main { background: var(--bg) } cover it immediately.
 */
export default function HeroVideoBackground() {
  return (
    <div className="hero-video-bg-wrap" aria-hidden="true">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/MCF_web_video_poster.jpg"
      >
        <source src="/media/MCF_web_video.webm" type="video/webm" />
        <source src="/media/MCF_web_video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
