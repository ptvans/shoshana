import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Therapy
              </Link>
            </li>
            <li>
              <Link
                to="/coaching"
                className={`nav-link ${location.pathname === '/coaching' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Coaching
              </Link>
            </li>
            <li>
              <a
                href="https://app.greminders.com/c/shoshanapolansky"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-cta"
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>

          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-links">
              <li>
                <Link to="/" className="mobile-nav-link" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="mobile-nav-link" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="mobile-nav-link" onClick={handleLinkClick}>
                  Therapy
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="mobile-nav-link" onClick={handleLinkClick}>
                  Coaching
                </Link>
              </li>
              <li>
                <a
                  href="https://app.greminders.com/c/shoshanapolansky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link mobile-cta"
                  onClick={handleLinkClick}
                >
                  Schedule Consultation
                </a>
              </li>
            </ul>
          </div>

          {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </nav>
      </div>
    </header>
  )
}

export default Header
