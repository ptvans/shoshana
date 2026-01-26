import './Services.css'

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Services</h1>
          <p className="services-intro">
            I offer therapy and coaching to help you heal from trauma and build
            stronger relationships—wherever you are.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-main section-alt">
        <div className="container">
          <div className="services-grid">
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

            <div className="service-card">
              <span className="service-num">03</span>
              <h2>Coaching</h2>
              <p>
                Goal-focused support for personal growth and relationship skills.
                Coaching is not therapy but can be a powerful tool for those seeking
                guidance, accountability, and practical strategies.
              </p>
              <div className="service-details">
                <p><strong>Available:</strong></p>
                <ul>
                  <li>Worldwide via video or phone</li>
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
              <h3>Insurance</h3>
              <p>
                I am an out-of-network provider. If you have PPO insurance, you may
                be eligible for reimbursement. I provide superbills you can submit
                to your insurance company.
              </p>
            </div>
            <div className="policy-item">
              <h3>Payment</h3>
              <p>
                All major credit cards accepted. Payment is collected at the time of service.
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
