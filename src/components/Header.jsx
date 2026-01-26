import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../photos/shoshana/logo-new.png'
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
          <div className="nav-left">
            <ul className="nav-links-left">
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
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img src={logo} alt="Shoshana Polansky - Licensed Marriage and Family Therapist" className="logo-image" />
          </Link>

          <div className="nav-right">
            <ul className="nav-links-right">
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
          </div>

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
                <Link to="/about" className="mobile-nav-link" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="mobile-nav-link" onClick={handleLinkClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/new-client" className="mobile-nav-link" onClick={handleLinkClick}>
                  Contact
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
