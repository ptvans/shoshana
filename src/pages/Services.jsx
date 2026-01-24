import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  return (
    <div className="services">
      <section className="section-minimal">
        <div className="container-narrow">
          <h1>Services & Rates</h1>

          <div className="rates-list">
            <div className="rate-item">
              <span className="rate-service">Individual Sessions</span>
              <span className="rate-price">$150</span>
            </div>
            <div className="rate-item">
              <span className="rate-service">Couples Sessions</span>
              <span className="rate-price">$300</span>
            </div>
          </div>

          <div className="rates-notes">
            <p>
              Please note that I am out-of-network. I can provide a superbill
              for insurance reimbursement upon request.
            </p>
            <p>
              I offer a sliding scale if needed.
            </p>
          </div>

          <div className="services-cta">
            <Link to="/new-client" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
