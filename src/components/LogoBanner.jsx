import { Link } from 'react-router-dom'
import logo from '../photos/shoshana/logo-new.png'
import './LogoBanner.css'

function LogoBanner() {
  return (
    <div className="logo-banner">
      <div className="logo-banner-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Shoshana Polansky - Licensed Marriage and Family Therapist" className="logo-image" />
        </Link>
      </div>
    </div>
  )
}

export default LogoBanner
