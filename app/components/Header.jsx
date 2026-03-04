'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '../../src/photos/shoshana/logo-new.png'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

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
          <Link href="/" className="nav-logo-link" onClick={handleLinkClick}>
            <img src={logo.src} alt="Shoshana Polansky - Home" className="nav-logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link
                href="/"
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`nav-link ${pathname === '/services' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Therapy
              </Link>
            </li>
            <li>
              <Link
                href="/coaching"
                className={`nav-link ${pathname === '/coaching' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Coaching
              </Link>
            </li>
            <li>
              <Link
                href="/rates"
                className={`nav-link ${pathname === '/rates' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Rates
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={`nav-link ${pathname === '/faq' ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
            </li>
            <li>
              <a
                href="https://blog.shoshanapolansky.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                Blog
              </a>
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
                <Link href="/" className="mobile-nav-link" onClick={handleLinkClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="mobile-nav-link" onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="mobile-nav-link" onClick={handleLinkClick}>
                  Therapy
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="mobile-nav-link" onClick={handleLinkClick}>
                  Coaching
                </Link>
              </li>
              <li>
                <Link href="/rates" className="mobile-nav-link" onClick={handleLinkClick}>
                  Rates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="mobile-nav-link" onClick={handleLinkClick}>
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.shoshanapolansky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={handleLinkClick}
                >
                  Blog
                </a>
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
