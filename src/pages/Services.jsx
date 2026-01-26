import './Services.css'

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Therapy</h1>
          <p className="services-intro">
            Healing from trauma and building stronger relationships through
            evidence-based therapy—in person or online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main section-alt">
        <div className="container">
          <div className="services-grid services-grid-two">
            <div className="service-card">
              <span className="service-num">01</span>
              <h2>Individual Therapy</h2>
              <p>
                One-on-one therapy for trauma, anxiety, depression, and relationship
                patterns. Using EMDR and other evidence-based approaches, we'll work
                together to process difficult experiences and create lasting change.
              </p>
              <div className="service-details">
                <p><strong>Available:</strong></p>
                <ul>
                  <li>In-person in California & Florida</li>
                  <li>Online throughout the US</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <span className="service-num">02</span>
              <h2>Couples Therapy</h2>
              <p>
                For couples ready to improve communication, rebuild intimacy, and
                break destructive patterns. Whether you're navigating conflict,
                disconnection, or exploring relationship structures like non-monogamy.
              </p>
              <div className="service-details">
                <p><strong>Available:</strong></p>
                <ul>
                  <li>In-person in California & Florida</li>
                  <li>Online throughout the US</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMDR Highlight */}
      <section className="emdr-highlight-section">
        <div className="container-narrow">
          <h2>Specialized in EMDR</h2>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is a specialized
            therapy I offer for processing trauma and distressing life experiences.
            It's particularly effective for:
          </p>
          <ul className="emdr-list">
            <li>PTSD and trauma symptoms</li>
            <li>Panic attacks and anxiety</li>
            <li>Childhood trauma and abuse</li>
            <li>Grief and loss</li>
            <li>Phobias and fears</li>
          </ul>
          <p>
            Many clients experience significant relief faster than with traditional
            talk therapy alone.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="getting-started-section section-alt">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <h3>Free Consultation</h3>
              <p>Schedule a brief call to discuss your needs and see if we're a good fit.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <h3>Book Your First Session</h3>
              <p>Choose a time that works for you—in-person or online.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <h3>Begin Your Journey</h3>
              <p>Start working toward the healing and connection you deserve.</p>
            </div>
          </div>
          <div className="getting-started-cta">
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="policies-section">
        <div className="container-narrow">
          <h2>Policies</h2>
          <div className="policies-grid">
            <div className="policy-item">
              <h3>Rates</h3>
              <p>
                Individual sessions are $200 for a 50-minute session.
                Please contact me if you have any questions about rates.
              </p>
            </div>
            <div className="policy-item">
              <h3>Payment</h3>
              <p>
                I accept cash, credit card, check, HSA accounts, and FSA accounts.
                Payment is collected at the time of service.
              </p>
            </div>
            <div className="policy-item">
              <h3>Insurance</h3>
              <p>
                I am an out-of-network provider and offer superbills for
                reimbursement from your insurance company.
              </p>
            </div>
            <div className="policy-item">
              <h3>Cancellations</h3>
              <p>
                Please provide at least 24 hours notice for cancellations to avoid
                being charged the full session fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
