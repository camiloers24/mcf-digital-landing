type AuthorBylineProps = {
  name: string
  title: string
  linkedinUrl: string
  publishedDate?: string
  updatedDate?: string
}

export default function AuthorByline({ name, title, linkedinUrl, publishedDate, updatedDate }: AuthorBylineProps) {
  return (
    <div style={{ color: 'var(--muted)', fontSize: '.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
      <span>
        By{' '}
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: '#ffffff40' }}>
          {name}
        </a>
        <span style={{ opacity: 0.7 }}> · {title}</span>
      </span>
      {publishedDate && (
        <div style={{ marginTop: 4 }}>
          Published {publishedDate}
          {updatedDate && updatedDate !== publishedDate && <> · Updated {updatedDate}</>}
        </div>
      )}
    </div>
  )
}
