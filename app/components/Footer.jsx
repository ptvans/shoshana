import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Shoshana Polansky</h3>
            <p>Licensed Marriage and Family Therapist</p>
          </div>

          <div className="footer-contact">
            <p><a href="tel:+18588637270">858-863-7270</a></p>
            <p>California & Florida | Online Nationwide</p>
          </div>

          <div className="footer-cta">
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Schedule a Consultation
            </a>
          </div>

          <div className="footer-bottom">
            <p>&copy; {currentYear} Shoshana Polansky. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
