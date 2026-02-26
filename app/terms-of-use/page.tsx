import Link from 'next/link'

export default function TermsOfUsePage() {
  return (
    <main className="wrap" style={{ padding: '80px 0' }}>
      <p className="kicker">Legal</p>
      <h1>Terms of Use</h1>
      <p className="lead" style={{ maxWidth: 820 }}>
        Last updated: February 2026
      </p>

      <div className="sp-24" />

      <section style={{ padding: 0, borderBottom: 'none' }} className="grid">
        <article className="card">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the MCF.DIGITAL Intelligence Platform (&quot;Platform&quot;), you
            agree to be bound by these Terms of Use. If you do not agree, do not use the Platform.
            These terms apply to all visitors, users, and contributors.
          </p>
        </article>

        <article className="card">
          <h2>2. Platform Description</h2>
          <p>
            MCF.DIGITAL provides calculator tools, educational resources, and data visualizations for
            evaluating stranded natural gas monetization through Bitcoin mining. The Platform is an
            informational and analytical tool; it does not constitute financial, engineering, legal,
            or investment advice.
          </p>
        </article>

        <article className="card">
          <h2>3. No Professional Advice</h2>
          <p>
            All calculations, projections, and outputs are estimates based on user-provided inputs
            and publicly available data. Results should not be relied upon as the sole basis for any
            investment, operational, or financial decision. Users should consult qualified
            professionals, including licensed engineers, financial advisors, and legal counsel, before
            committing capital to any project.
          </p>
        </article>

        <article className="card">
          <h2>4. Accuracy Disclaimer</h2>
          <p>
            While we strive to use industry-standard formulas and current market data, we make no
            warranties regarding the accuracy, completeness, or timeliness of any information on the
            Platform. Market conditions (Bitcoin price, network difficulty, gas prices) change
            rapidly and historical performance does not guarantee future results.
          </p>
        </article>

        <article className="card">
          <h2>5. User Responsibilities</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 10 }}>
            <li>You are responsible for the accuracy of all inputs you provide to the calculators.</li>
            <li>
              You agree not to use the Platform for any unlawful purpose or in violation of any
              applicable regulations.
            </li>
            <li>
              You will not attempt to reverse-engineer, scrape, or exploit the Platform beyond its
              intended use.
            </li>
            <li>You acknowledge that all calculator outputs are projections, not guarantees.</li>
          </ul>
        </article>

        <article className="card">
          <h2>6. Intellectual Property</h2>
          <p>
            All content, methodologies, calculator logic, design elements, and documentation on the
            Platform are the intellectual property of MCF.DIGITAL and are protected by applicable
            copyright and trademark laws. See our Copyright Notice for details.
          </p>
        </article>

        <article className="card">
          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MCF.DIGITAL, its officers, directors, employees,
            and agents shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Platform, including but not limited to
            financial losses from investment decisions informed by Platform outputs.
          </p>
        </article>

        <article className="card">
          <h2>8. Third-Party Data</h2>
          <p>
            The Platform may display data from third-party APIs (market prices, network statistics).
            We do not control these data sources and are not responsible for their accuracy or
            availability. Third-party data is provided &quot;as is.&quot;
          </p>
        </article>

        <article className="card">
          <h2>9. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Platform
            after changes constitutes acceptance of the revised Terms. Material changes will be
            communicated via notice on the Platform.
          </p>
        </article>

        <article className="card">
          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State
            of Texas, without regard to conflict of law principles. Any disputes shall be resolved in
            the courts of Texas.
          </p>
        </article>

        <article className="card">
          <h2>11. Contact</h2>
          <p>
            Questions about these Terms may be directed to our{' '}
            <Link href="/contact">contact page</Link>.
          </p>
        </article>
      </section>
    </main>
  )
}
