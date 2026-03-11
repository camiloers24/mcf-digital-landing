import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | MCF.DIGITAL',
  description:
    'Learn how MCF.DIGITAL uses cookies and browser storage, what data is stored locally, and how to manage your preferences.',
  openGraph: {
    title: 'Cookie Policy | MCF.DIGITAL',
    description:
      'Learn how MCF.DIGITAL uses cookies and browser storage, what data is stored locally, and how to manage your preferences.',
    type: 'website',
  },
  alternates: {
    canonical: '/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <main className="wrap" style={{ padding: '80px 0' }}>
      <p className="kicker">Legal</p>
      <h1>Cookie Policy</h1>
      <p className="lead" style={{ maxWidth: 820 }}>
        Last updated: February 2026
      </p>

      <div className="sp-24" />

      <section style={{ padding: 0, borderBottom: 'none' }} className="grid">
        <article className="card">
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            the site remember your preferences and understand how you interact with it. Similar
            technologies include <code>localStorage</code> and <code>sessionStorage</code>, which
            store data directly in your browser.
          </p>
        </article>

        <article className="card">
          <h2>2. How We Use Cookies &amp; Local Storage</h2>
          <p>
            MCF.DIGITAL uses a minimal approach to data storage. We prioritize your privacy by
            keeping all calculator data in your browser and avoiding third-party tracking cookies.
          </p>
          <h3>2a. Strictly Necessary (Always Active)</h3>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>
              Cookie consent preference: Remembers whether you&apos;ve accepted or declined cookies so
              you aren&apos;t asked repeatedly.
            </li>
            <li>Session management: Essential for the Platform to function correctly.</li>
          </ul>
          <div className="sp-12" />
          <h3>2b. Functional (With Your Consent)</h3>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>
              Calculator preferences: Saves your last-used inputs (gas volumes, miner models,
              financial parameters) so you don&apos;t have to re-enter them each visit.
            </li>
            <li>
              Saved reports: Stores generated reports in your browser&apos;s <code>localStorage</code> for
              later reference.
            </li>
            <li>
              UI preferences: Remembers sidebar collapsed/expanded state and other interface
              settings.
            </li>
          </ul>
          <div className="sp-12" />
          <h3>2c. Analytics (With Your Consent)</h3>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>
              Usage analytics: If enabled, privacy-respecting analytics help us understand which
              calculators are most used and how to improve the Platform. These do not use third-party
              tracking cookies.
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>3. Third-Party Cookies</h2>
          <p>
            We do not use third-party advertising cookies. If you interact with embedded third-party
            content (e.g., Google Calendar booking links), those services may set their own cookies
            according to their respective privacy policies.
          </p>
        </article>

        <article className="card">
          <h2>4. Managing Your Cookie Preferences</h2>
          <p>You can manage your cookie preferences at any time:</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>
              On this site: Use the cookie consent banner that appears at the bottom of the page. You
              can change your preference by clearing your browser&apos;s <code>localStorage</code>.
            </li>
            <li>
              In your browser: Most browsers allow you to block or delete cookies through their
              settings. Note that blocking all cookies may affect Platform functionality (e.g., saved
              reports will not persist).
            </li>
          </ul>
        </article>

        <article className="card">
          <h2>5. Data Stored Locally</h2>
          <p>
            The following data is stored exclusively in your browser and is never transmitted to our
            servers:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>Calculator input values and configurations</li>
            <li>Saved report snapshots</li>
            <li>Cookie consent status</li>
            <li>UI state preferences</li>
          </ul>
          <p>
            You can clear all locally stored data at any time by clearing your browser&apos;s site data
            for this domain.
          </p>
        </article>

        <article className="card">
          <h2>6. Cookie Retention</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid var(--line)' }}>
                    Type
                  </th>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid var(--line)' }}>
                    Duration
                  </th>
                  <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid var(--line)' }}>
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>Consent preference</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>12 months</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>
                    Remember your cookie choice
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>Calculator data</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>Until cleared</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid var(--line)' }}>
                    Persist your inputs and reports
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '10px' }}>UI preferences</td>
                  <td style={{ padding: '10px' }}>Until cleared</td>
                  <td style={{ padding: '10px' }}>Remember interface settings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="card">
          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically. The &quot;Last updated&quot; date at the
            top reflects the most recent revision.
          </p>
        </article>

        <article className="card">
          <h2>8. Contact</h2>
          <p>
            For questions about our use of cookies, please visit our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link> or{' '}
            <Link href="/contact">contact us</Link>.
          </p>
        </article>
      </section>
    </main>
  )
}
