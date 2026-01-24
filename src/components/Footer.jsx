import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-narrow">
        <div className="footer-content">
          <p className="footer-brand">Aligned Heart</p>
          <p className="footer-links">
            <a href="https://youralignedheart.com">youralignedheart.com</a>
            <span className="separator">&middot;</span>
            <a href="https://www.instagram.com/terra_artist_love/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </p>
          <p className="footer-copyright">
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
