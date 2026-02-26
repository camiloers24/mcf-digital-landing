import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main className="wrap" style={{ padding: '80px 0' }}>
      <p className="kicker">Legal</p>
      <h1>Privacy Policy &amp; GDPR</h1>
      <p className="lead" style={{ maxWidth: 820 }}>
        Last updated: February 2026
      </p>

      <div className="sp-24" />

      <section style={{ padding: 0, borderBottom: 'none' }} className="grid">
        <article className="card">
          <h2>1. Overview</h2>
          <p>
            MCF.DIGITAL (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) respects your privacy. This
            Privacy Policy explains what information we collect, how we use it, and your rights,
            including rights under the EU General Data Protection Regulation (GDPR) and the
            California Consumer Privacy Act (CCPA).
          </p>
        </article>

        <article className="card">
          <h2>2. Information We Collect</h2>
          <h3>2a. Information You Provide</h3>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>Contact information: Name and email address if you submit the contact or lead form.</li>
            <li>
              Calculator inputs: Gas volumes, compositions, financial parameters you enter into our
              tools.
            </li>
          </ul>
          <div className="sp-12" />
          <h3>2b. Automatically Collected</h3>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>
              Usage data: Pages visited, features used, session duration (via privacy-respecting
              analytics).
            </li>
            <li>Device information: Browser type, operating system, screen resolution.</li>
            <li>IP address: Collected for security and rate-limiting purposes only.</li>
          </ul>
        </article>

        <article className="card">
          <h2>3. Data Processing — Client-Side First</h2>
          <p>
            All calculator computations run entirely in your browser. No calculation inputs or
            outputs are transmitted to our servers unless you explicitly choose to save a report.
            This &quot;client-side first&quot; architecture minimizes data exposure by design.
          </p>
        </article>

        <article className="card">
          <h2>4. How We Use Your Information</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>To respond to contact form submissions and support requests.</li>
            <li>To improve Platform features and user experience.</li>
            <li>To generate aggregate, anonymized analytics (never sold to third parties).</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </article>

        <article className="card">
          <h2>5. Legal Basis for Processing (GDPR)</h2>
          <p>
            For users in the European Economic Area (EEA), we process personal data under the
            following bases:
          </p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>Consent: When you submit a form or opt into communications.</li>
            <li>
              Legitimate interest: For analytics and Platform improvement, balanced against your
              privacy rights.
            </li>
            <li>Legal obligation: Where required by applicable law.</li>
          </ul>
        </article>

        <article className="card">
          <h2>6. Your Rights</h2>
          <p>Under GDPR, CCPA, and similar regulations, you have the right to:</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>Access — Request a copy of all personal data we hold about you.</li>
            <li>Rectification — Correct inaccurate personal data.</li>
            <li>Erasure (&quot;Right to be Forgotten&quot;) — Request deletion of your personal data.</li>
            <li>Portability — Receive your data in a structured, machine-readable format.</li>
            <li>Objection — Object to processing based on legitimate interest.</li>
            <li>Withdraw consent — At any time, without affecting prior processing.</li>
          </ul>
          <p>
            To exercise these rights, contact us via our <Link href="/contact">contact page</Link>.
            We will respond within 30 days.
          </p>
        </article>

        <article className="card">
          <h2>7. Cookies &amp; Local Storage</h2>
          <p>
            The Platform uses <code>localStorage</code> to save your calculator preferences and saved
            reports on your device. We do not use tracking cookies. If third-party analytics are
            enabled, they use privacy-respecting, cookie-free tracking methods.
          </p>
        </article>

        <article className="card">
          <h2>8. Data Retention</h2>
          <p>
            Contact form submissions are retained for 24 months, then deleted unless an ongoing
            business relationship exists. Calculator data stored in your browser persists until you
            clear your browser data; we have no server-side copy.
          </p>
        </article>

        <article className="card">
          <h2>9. Third-Party Services</h2>
          <p>We may use third-party services for:</p>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>Market data APIs (cryptocurrency prices, network statistics)</li>
            <li>Hosting and content delivery</li>
            <li>Privacy-respecting analytics</li>
          </ul>
          <p>
            These services have their own privacy policies. We do not sell, rent, or trade your
            personal information to any third party.
          </p>
        </article>

        <article className="card">
          <h2>10. Data Security</h2>
          <p>
            We employ industry-standard security measures including HTTPS encryption, access controls,
            and secure hosting. However, no method of electronic transmission or storage is 100%
            secure; we cannot guarantee absolute security.
          </p>
        </article>

        <article className="card">
          <h2>11. International Transfers</h2>
          <p>
            If your data is transferred outside the EEA, we ensure adequate safeguards are in place
            (e.g., Standard Contractual Clauses) in compliance with GDPR Chapter V requirements.
          </p>
        </article>

        <article className="card">
          <h2>12. Children&apos;s Privacy</h2>
          <p>
            The Platform is not directed at individuals under 18. We do not knowingly collect
            personal information from children. If you believe we have inadvertently collected such
            data, please contact us for immediate deletion.
          </p>
        </article>

        <article className="card">
          <h2>13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. The &quot;Last updated&quot; date at the
            top reflects the most recent revision. Material changes will be communicated via a notice
            on the Platform.
          </p>
        </article>

        <article className="card">
          <h2>14. Contact &amp; Data Protection Officer</h2>
          <p>
            For privacy-related inquiries or to exercise your data rights, contact us via our{' '}
            <Link href="/contact">contact page</Link>.
          </p>
        </article>
      </section>
    </main>
  )
}
