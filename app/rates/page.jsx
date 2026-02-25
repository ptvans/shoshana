import './page.css'

export const metadata = {
  title: 'Rates & Policies',
  description: 'Therapy session rates, accepted payment methods, insurance information, and cancellation policy for Shoshana Polansky, LMFT.',
  openGraph: {
    title: 'Rates & Policies | Shoshana Polansky, LMFT',
    description: 'Therapy session rates, accepted payment methods, insurance information, and cancellation policy.',
  },
}

function Rates() {
  return (
    <div className="rates-page">
      {/* Hero */}
      <section className="rates-hero">
        <div className="container">
          <h1>Rates & Policies</h1>
          <p className="rates-intro">
            Transparent pricing so you can focus on what matters—your healing.
          </p>
        </div>
      </section>

      {/* Rates */}
      <section className="rates-main section-alt">
        <div className="container-narrow">
          <div className="rates-grid">
            <div className="rate-item">
              <h3>Rates</h3>
              <p>
                Individual sessions are $200 for a 50-minute session.
                Please contact me if you have any questions about rates.
              </p>
            </div>
            <div className="rate-item">
              <h3>Payment</h3>
              <p>
                I accept cash, credit card, check, HSA accounts, and FSA accounts.
                Payment is collected at the time of service.
              </p>
            </div>
            <div className="rate-item">
              <h3>Insurance</h3>
              <p>
                I am an out-of-network provider and offer superbills for
                reimbursement from your insurance company.
              </p>
            </div>
            <div className="rate-item">
              <h3>Cancellations</h3>
              <p>
                Please provide at least 24 hours notice for cancellations to avoid
                being charged the full session fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rates-cta-section">
        <div className="container">
          <div className="rates-cta">
            <p>Have questions about rates or payment?</p>
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Rates
