import Link from 'next/link'
import './page.css'

export const metadata = {
  title: 'Couples Therapy | Communication, Intimacy & Conflict Resolution',
  description: 'Couples therapy to improve communication, rebuild intimacy, and resolve conflict. Inclusive of all relationship structures. In-person in California & Florida, online nationwide.',
  openGraph: {
    title: 'Couples Therapy | Communication, Intimacy & Conflict Resolution',
    description: 'Couples therapy to improve communication, rebuild intimacy, and resolve conflict. Inclusive of all relationship structures. In-person in California & Florida, online nationwide.',
  },
}

function CouplesTherapy() {
  return (
    <div className="couples-therapy-page">
      {/* Hero */}
      <section className="ct-hero">
        <div className="container">
          <h1>Couples Therapy</h1>
          <p className="ct-intro">
            Rebuild connection, improve communication, and create the
            relationship you both deserve.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="ct-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            Couples therapy provides a structured, supportive space where
            both partners can be heard. Together, we&#39;ll identify the patterns
            driving conflict or disconnection and develop new ways to communicate,
            connect, and support each other.
          </p>
          <p>
            Whether you&#39;re navigating a specific challenge or looking to
            strengthen your relationship overall, I work with couples at every
            stage—including those exploring non-traditional relationship structures.
          </p>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="ct-focus">
        <div className="container">
          <h2>Areas of Focus</h2>
          <div className="ct-focus-grid">
            <div className="ct-focus-card">
              <span className="ct-focus-num">01</span>
              <h3>Communication</h3>
              <p>
                Learn to express needs clearly, listen without defensiveness,
                and have productive conversations—even about difficult topics.
              </p>
            </div>
            <div className="ct-focus-card">
              <span className="ct-focus-num">02</span>
              <h3>Intimacy & Connection</h3>
              <p>
                Rebuild emotional and physical closeness that may have been
                lost over time, rediscovering what brought you together.
              </p>
            </div>
            <div className="ct-focus-card">
              <span className="ct-focus-num">03</span>
              <h3>Conflict Resolution</h3>
              <p>
                Break destructive argument cycles and develop healthier ways
                to navigate disagreements and repair after conflict.
              </p>
            </div>
            <div className="ct-focus-card">
              <span className="ct-focus-num">04</span>
              <h3>Non-Monogamy</h3>
              <p>
                Navigate open relationships, polyamory, or other relationship
                structures with clear communication and intentionality.
              </p>
            </div>
            <div className="ct-focus-card">
              <span className="ct-focus-num">05</span>
              <h3>Premarital Counseling</h3>
              <p>
                Build a strong foundation before marriage by addressing
                expectations, values, and potential areas of conflict.
              </p>
            </div>
            <div className="ct-focus-card">
              <span className="ct-focus-num">06</span>
              <h3>Trust & Betrayal</h3>
              <p>
                Work through infidelity or broken trust with guided support
                to determine the path forward—together or apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="ct-availability section-alt">
        <div className="container">
          <h2>How We Can Work Together</h2>
          <div className="ct-availability-grid">
            <div className="ct-availability-item">
              <h3>In-Person</h3>
              <p>California & Florida</p>
            </div>
            <div className="ct-availability-item">
              <h3>Online</h3>
              <p>Available throughout the US</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="ct-getting-started">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <h3>Free Consultation</h3>
              <p>Schedule a brief call to discuss what you&#39;re experiencing and see if we&#39;re a good fit.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <h3>Book Your First Session</h3>
              <p>Choose a time that works for both of you—in-person or online.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <h3>Begin Your Journey</h3>
              <p>Start building the relationship and connection you both deserve.</p>
            </div>
          </div>
          <div className="ct-cta">
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

export default CouplesTherapy
