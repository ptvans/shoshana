import './page.css'

export const metadata = {
  title: 'Contact | Schedule a Consultation',
  description: 'Schedule a free consultation with Shoshana Polansky, LMFT. In-person in California & Florida, online nationwide.',
  openGraph: {
    title: 'Contact | Schedule a Consultation',
    description: 'Schedule a free consultation with Shoshana Polansky, LMFT. In-person in California & Florida, online nationwide.',
  },
}

function NewClient() {
  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact</h1>
          <p className="contact-intro">
            Ready to take the first step? Schedule a free consultation to discuss
            your needs and see if we&#39;re a good fit.
          </p>
        </div>
      </section>

      {/* Main Contact */}
      <section className="contact-main section-alt">
        <div className="container">
          <div className="contact-grid">
            <div className="booking-card">
              <h2>Schedule a Consultation</h2>
              <p>
                Book a free 15-minute consultation to discuss your goals
                and learn how I can help.
              </p>
              <a
                href="https://app.greminders.com/c/shoshanapolansky"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule Now
              </a>
            </div>

            <div className="contact-info-card">
              <h2>Other Ways to Reach Me</h2>

              <div className="contact-method">
                <h3>Phone</h3>
                <a href="tel:+18588637270" className="contact-value">858-863-7270</a>
                <p>Leave a message and I&#39;ll return your call within 24 hours.</p>
              </div>

              <div className="contact-method">
                <h3>Location</h3>
                <p><strong>In-Person:</strong> California & Florida</p>
                <p><strong>Online:</strong> Available nationwide</p>
                <p><strong>Coaching:</strong> Available worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="expect-section">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expect-grid">
            <div className="expect-item">
              <span className="expect-num">1</span>
              <h3>Free Consultation</h3>
              <p>
                We&#39;ll have a brief conversation about what brings you to therapy
                and what you&#39;re hoping to achieve.
              </p>
            </div>
            <div className="expect-item">
              <span className="expect-num">2</span>
              <h3>Good Fit Assessment</h3>
              <p>
                I&#39;ll share how I work and we&#39;ll determine if my approach
                aligns with your needs.
              </p>
            </div>
            <div className="expect-item">
              <span className="expect-num">3</span>
              <h3>Schedule First Session</h3>
              <p>
                If we&#39;re a good match, we&#39;ll schedule your first full session
                and begin working together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Notice */}
      <section className="crisis-section">
        <div className="container-narrow">
          <div className="crisis-notice">
            <p>
              <strong>Crisis Resources:</strong> If you are experiencing a mental health emergency,
              please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewClient
