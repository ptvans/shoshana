import { Link } from 'react-router-dom'
import terraPortrait from '../photos/terra-portrait.jpg'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero-minimal">
        <div className="container">
          <div className="hero-portrait">
            <img src={terraPortrait} alt="Terra" />
          </div>
          <h1>Aligned Heart</h1>
          <p className="tagline">
            Eliminating suffering through emotionally focused compassionate therapy
          </p>
          <div className="hero-cta">
            <Link to="/about" className="link-subtle">Learn more about my approach</Link>
          </div>
        </div>
      </section>

      <section className="section-minimal">
        <div className="container-narrow">
          <h2>Specialties</h2>

          <div className="specialty-group">
            <h3>For Individuals</h3>
            <p>ACT (psychological flexibility)</p>
            <p>Motivational Interviewing (values solicitation)</p>
            <p>MBCT (interrupting spirals)</p>
            <p>Trauma Informed</p>
          </div>

          <div className="specialty-group">
            <h3>For Couples</h3>
            <p>The Gottman Method for relationships</p>
          </div>
        </div>
      </section>

      <section className="section-minimal section-cta">
        <div className="container-narrow">
          <p className="cta-text">Ready to take the first step?</p>
          <Link to="/new-client" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
