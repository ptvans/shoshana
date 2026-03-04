import Link from 'next/link'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        {/* Top: 4-column links */}
        <div className="footer-top">
          <div className="footer-col footer-col-brand">
            <h3>Shoshana Polansky</h3>
            <p className="footer-brand-desc">
              Compassionate, evidence-based therapy for individuals and couples
              seeking healing from trauma and stronger relationships.
            </p>
            <p className="footer-credential">Licensed Marriage &amp; Family Therapist</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Therapy</Link></li>
              <li><Link href="/coaching">Coaching</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/rates">Rates</Link></li>
              <li>
                <a
                  href="https://blog.shoshanapolansky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Specialties</h4>
            <ul>
              <li><Link href="/individual-therapy">Individual Therapy</Link></li>
              <li><Link href="/couples-therapy">Couples Therapy</Link></li>
              <li><Link href="/individual-therapy">Trauma &amp; EMDR</Link></li>
            </ul>
          </div>
        </div>

        {/* Middle: contact info row */}
        <div className="footer-info">
          <div className="footer-info-item">
            <h4>Contact</h4>
            <p><a href="tel:+18588637270">858-863-7270</a></p>
          </div>

          <div className="footer-info-item">
            <h4>Location</h4>
            <p>In-person in California &amp; Florida</p>
            <p>Online throughout the US</p>
          </div>

          <div className="footer-info-item">
            <h4>Schedule</h4>
            <p>
              <a
                href="https://app.greminders.com/c/shoshanapolansky"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Consultation
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shoshana Polansky. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
