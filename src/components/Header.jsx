import { Link } from 'react-router-dom'
import InstagramIcon from './InstagramIcon'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            Aligned Heart
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/about" className="nav-link">Private Therapy</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li>
              <Link to="/servicios" className="nav-link">Español</Link>
            </li>
            <li>
              <Link to="/new-client" className="nav-link">Contact</Link>
            </li>
            <li>
              <a href="https://www.instagram.com/terra_artist_love/" target="_blank" rel="noopener noreferrer" className="nav-link nav-icon">
                <InstagramIcon size={22} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
