'use client'

import { useState, useRef } from 'react'

type Props = { slug: string; title: string }

export default function WhitePaperDownloadForm({ slug, title }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')
  const linkRef = useRef<HTMLAnchorElement>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/white-paper-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, slug }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong.')
        return
      }

      setDownloadUrl(data.downloadUrl)
      setStatus('success')

      // Trigger download via hidden link
      setTimeout(() => linkRef.current?.click(), 100)
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="card" style={{ padding: 24, marginTop: 32 }}>
        <p style={{ margin: 0 }}>
          Sending <strong>{title}.pdf</strong> to your downloads…
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '.875rem', marginTop: 8 }}>
          Download didn&apos;t start?{' '}
          <a href={downloadUrl} download style={{ textDecoration: 'underline' }}>
            Click here
          </a>
        </p>
        <a ref={linkRef} href={downloadUrl} download style={{ display: 'none' }} />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: 24, marginTop: 32 }}>
      <p style={{ margin: '0 0 12px', fontWeight: 600 }}>
        Download {title} (PDF)
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            flex: '1 1 240px',
            padding: '10px 14px',
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--r)',
            color: 'var(--ink)',
            fontSize: '1rem',
          }}
        />
        <button type="submit" className="btn acc" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Download PDF'}
        </button>
      </div>
      {status === 'error' && (
        // TODO: extract to design token (no --danger or --error variable in globals.css yet)
        <p style={{ color: '#f87171', fontSize: '.875rem', marginTop: 8, marginBottom: 0 }}>
          {errorMessage}
        </p>
      )}
    </form>
  )
}
