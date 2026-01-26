import './ContactForm.css'

function ContactForm() {
  return (
    <div className="contact-form-section">
      <h2>Ready to Get Started?</h2>
      <p className="contact-intro">
        Schedule a free consultation to discuss your needs and see if we're a good fit.
      </p>

      <div className="contact-cta">
        <a
          href="https://app.greminders.com/c/shoshanapolansky"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary contact-form-btn"
        >
          Schedule a Consultation
        </a>
      </div>

      <div className="contact-alternatives">
        <p>Or reach out directly:</p>
        <div className="contact-methods">
          <a href="tel:+18588637270" className="contact-method">
            <span className="contact-method-label">Phone</span>
            <span className="contact-method-value">858-863-7270</span>
          </a>
        </div>
      </div>

      <div className="contact-availability">
        <p><strong>Available for:</strong></p>
        <ul>
          <li>In-person sessions in California & Florida</li>
          <li>Online therapy nationwide</li>
          <li>Coaching worldwide</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactForm
