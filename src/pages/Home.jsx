import { Link } from 'react-router-dom'
import shoshanaSitting from '../photos/shoshana/Shoshsna-Sitting.jpg'
import officePhoto from '../photos/shoshana/couch-room-background.jpeg'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-image-wrapper">
              <div className="hero-image-frame">
                <img src={shoshanaSitting} alt="Shoshana Polansky, therapist" />
              </div>
            </div>
            <div className="hero-content">
              <p className="hero-subtitle">in person and virtual therapy to</p>
              <h1 className="hero-title">
                heal from trauma<br />
                and build the<br />
                relationships you<br />
                deserve
              </h1>
              <a
                href="https://app.greminders.com/c/shoshanapolansky"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-layout">
            <div className="intro-content">
              <p className="intro-question">
                Are you carrying the weight of past experiences that still affect
                your relationships and daily life? Do you find yourself stuck in
                patterns you can't seem to break?
              </p>
              <div className="intro-divider"></div>
              <p className="intro-statement">You are not alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section-alt">
        <div className="container">
          <div className="services-layout">
            <div className="services-header">
              <h2>What do you need?</h2>
            </div>
            <div className="services-list">
              <div className="service-item">
                <span className="service-number">01</span>
                <div className="service-content">
                  <h3>Individual Therapy</h3>
                  <p>
                    Process trauma, manage anxiety, and break free from patterns
                    holding you back using EMDR and other evidence-based approaches.
                  </p>
                  <Link to="/services" className="link-subtle">Learn more →</Link>
                </div>
              </div>
              <div className="service-item">
                <span className="service-number">02</span>
                <div className="service-content">
                  <h3>Couples Therapy</h3>
                  <p>
                    Improve communication, rebuild intimacy, and navigate
                    challenges together in a supportive environment.
                  </p>
                  <Link to="/services" className="link-subtle">Learn more →</Link>
                </div>
              </div>
              <div className="service-item">
                <span className="service-number">03</span>
                <div className="service-content">
                  <h3>Coaching</h3>
                  <p>
                    Goal-focused support for personal growth and relationship
                    skills, available worldwide.
                  </p>
                  <Link to="/coaching" className="link-subtle">Learn more →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What people are saying...</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "EMDR changed everything for me. Memories that used to send me
                into a panic now feel like they belong in the past, where they
                should be. I finally feel like I can move forward."
              </p>
              <cite>— Trauma therapy client</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "We came in barely communicating. Now we actually hear each other
                and have tools to work through conflict instead of avoiding it.
                Our relationship feels alive again."
              </p>
              <cite>— Couples therapy client</cite>
            </div>
            <div className="testimonial-card">
              <p>
                "I spent years taking care of everyone else. Shoshana helped me
                understand why I struggled to ask for what I needed—and gave me
                the tools to finally change that pattern."
              </p>
              <cite>— Individual therapy client</cite>
            </div>
          </div>
          <div className="testimonials-cta">
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-layout">
            <div className="cta-image">
              <img src={officePhoto} alt="Therapy office" />
            </div>
            <div className="cta-content">
              <p className="cta-tagline">
                It's time to <em>reclaim your peace</em> and <em>find your path</em> forward.
              </p>
              <div className="cta-text">
                <p>
                  Hi, I'm Shoshana—a therapist specializing in trauma and
                  relationships. I help individuals and couples heal from the
                  past and build the connections they deserve.
                </p>
                <p>
                  Using EMDR and other evidence-based approaches, I create a
                  safe space where real change can happen.
                </p>
                <Link to="/about" className="link-arrow">
                  Learn more about my approach →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="availability-section section-alt">
        <div className="container">
          <h2>How we can work together</h2>
          <div className="availability-grid">
            <div className="availability-item">
              <h3>In-Person</h3>
              <p>California & Florida</p>
            </div>
            <div className="availability-item">
              <h3>Online Therapy</h3>
              <p>Available nationwide</p>
            </div>
            <div className="availability-item">
              <h3>Coaching</h3>
              <p>Available worldwide</p>
            </div>
          </div>
          <div className="availability-cta">
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
