import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">Peaceful Mind Therapy</span>
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/book-appointment" className="nav-link">Book Appointment</Link>
            </li>
            <li>
              <Link to="/new-client" className="nav-link btn btn-primary">New Client</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

