// TODO: wire to CRM (HubSpot / Mailchimp / etc) before launch — currently logs to console only
import { NextResponse } from 'next/server'
import { getContentBySlug } from '../../../lib/content'

export async function POST(request: Request) {
  let body: { email?: string; slug?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { email, slug } = body

  if (!email || !slug) {
    return NextResponse.json({ error: 'Missing required fields: email, slug' }, { status: 400 })
  }

  // Minimal regex per §7.4: not a hard paywall — accept any valid-looking email, do not verify deliverability
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
  }

  if (!/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ error: 'Invalid slug format' }, { status: 400 })
  }

  let pdfFilename: string | undefined
  try {
    const { frontmatter } = getContentBySlug('white-papers', slug)
    pdfFilename = frontmatter.pdfFilename
  } catch {
    return NextResponse.json({ error: 'White paper not found' }, { status: 404 })
  }

  if (!pdfFilename) {
    return NextResponse.json({ error: 'White paper misconfigured' }, { status: 500 })
  }

  console.log(`[white-paper-lead] ${email} downloaded ${slug} (${pdfFilename})`)

  return NextResponse.json({ success: true, downloadUrl: `/assets/pdfs/${pdfFilename}` })
}
