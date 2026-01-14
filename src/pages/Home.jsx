import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Journey to Wellness Starts Here
            </h1>
            <p className="hero-subtitle">
              Professional, compassionate therapy in a safe and welcoming environment
            </p>
            <div className="hero-buttons">
              <Link to="/book-appointment" className="btn btn-primary btn-large">
                Book an Appointment
              </Link>
              <Link to="/new-client" className="btn btn-secondary btn-large">
                New Client Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section">
        <div className="container">
          <h2 className="section-title">Welcome to Peaceful Mind Therapy</h2>
          <p className="section-subtitle">
            I believe in creating a supportive space where you can explore your thoughts,
            feelings, and experiences without judgment. Together, we'll work towards your
            personal goals and emotional well-being.
          </p>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Compassionate Care</h3>
              <p>
                A safe, non-judgmental environment where you can be yourself
                and work through challenges at your own pace.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">🎯</div>
              <h3>Goal-Oriented</h3>
              <p>
                We'll work together to identify and achieve your personal
                therapeutic goals, tracking progress along the way.
              </p>
            </div>
            
            <div className="card">
              <div className="card-icon">🌱</div>
              <h3>Personal Growth</h3>
              <p>
                Develop coping strategies, build resilience, and discover
                your inner strength through evidence-based practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="page-section services-section">
        <div className="container">
          <h2 className="section-title">Specializations</h2>
          
          <div className="grid grid-2">
            <div className="card">
              <h3>Individual Therapy</h3>
              <p>
                One-on-one sessions addressing anxiety, depression, stress management,
                life transitions, and personal growth. Tailored to your unique needs
                and circumstances.
              </p>
            </div>
            
            <div className="card">
              <h3>Cognitive Behavioral Therapy (CBT)</h3>
              <p>
                Evidence-based approach to help you identify and change negative
                thought patterns, develop healthy coping mechanisms, and improve
                emotional regulation.
              </p>
            </div>
            
            <div className="card">
              <h3>Mindfulness-Based Approaches</h3>
              <p>
                Incorporating mindfulness and meditation techniques to help you
                stay present, reduce stress, and enhance overall well-being.
              </p>
            </div>
            
            <div className="card">
              <h3>Trauma-Informed Care</h3>
              <p>
                Gentle, compassionate support for working through past traumatic
                experiences with evidence-based trauma-focused therapies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Take the First Step?</h2>
            <p>
              Starting therapy is a courageous decision. I'm here to support you
              on your journey to better mental health and well-being.
            </p>
            <div className="cta-buttons">
              <Link to="/book-appointment" className="btn btn-primary btn-large">
                Schedule an Introduction Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

