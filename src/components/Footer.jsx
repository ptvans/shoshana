import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Peaceful Mind Therapy</h4>
            <p>Compassionate, professional care for your mental wellness journey.</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@peacefulmindtherapy.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Peaceful Mind Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

