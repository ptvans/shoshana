import Link from 'next/link'
import logo from '../../src/photos/shoshana/logo-new.png'
import './LogoBanner.css'

function LogoBanner() {
  return (
    <div className="logo-banner">
      <div className="logo-banner-container">
        <Link href="/" className="logo-link">
          <img src={logo.src} alt="Shoshana Polansky - Licensed Marriage and Family Therapist" className="logo-image" />
        </Link>
      </div>
    </div>
  )
}

export default LogoBanner
