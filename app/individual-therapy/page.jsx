import Link from 'next/link'
import './page.css'

export const metadata = {
  title: 'Individual Therapy | Trauma, Anxiety & EMDR',
  description: 'One-on-one therapy for trauma, anxiety, depression, and relationship patterns using EMDR and evidence-based approaches. In-person in California & Florida, online nationwide.',
  openGraph: {
    title: 'Individual Therapy | Trauma, Anxiety & EMDR',
    description: 'One-on-one therapy for trauma, anxiety, depression, and relationship patterns using EMDR and evidence-based approaches. In-person in California & Florida, online nationwide.',
  },
}

function IndividualTherapy() {
  return (
    <div className="individual-therapy-page">
      {/* Hero */}
      <section className="it-hero">
        <div className="container">
          <h1>Individual Therapy</h1>
          <p className="it-intro">
            Heal from trauma, manage anxiety, and break free from the patterns
            holding you back—with compassionate, evidence-based support.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="it-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            Individual therapy is a collaborative process where we work together
            to understand what&#39;s keeping you stuck and create a path forward.
            Sessions are a safe, nonjudgmental space to explore difficult
            emotions, process past experiences, and develop new ways of relating
            to yourself and others.
          </p>
          <p>
            I use EMDR and other evidence-based approaches tailored to your
            unique needs—because healing isn&#39;t one-size-fits-all.
          </p>
        </div>
      </section>

      {/* Specialties */}
      <section className="it-specialties">
        <div className="container">
          <h2>Areas I Specialize In</h2>
          <ul className="specialties-list">
            <li>Trauma & PTSD</li>
            <li>Anxiety & panic attacks</li>
            <li>Depression</li>
            <li>Relationship patterns</li>
            <li>Grief & loss</li>
            <li>EMDR therapy</li>
          </ul>
        </div>
      </section>

      {/* EMDR */}
      <section className="it-emdr section-alt">
        <div className="container-narrow">
          <h2>Specialized in EMDR</h2>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is a
            specialized therapy for processing trauma and distressing life
            experiences. Rather than talking through events repeatedly, EMDR
            helps your brain reprocess traumatic memories so they no longer
            hold the same emotional charge.
          </p>
          <p>
            Many clients experience significant relief faster than with
            traditional talk therapy alone. EMDR is particularly effective for:
          </p>
          <ul className="emdr-benefits-list">
            <li>PTSD and trauma symptoms</li>
            <li>Panic attacks and anxiety</li>
            <li>Childhood trauma and abuse</li>
            <li>Grief and loss</li>
            <li>Phobias and fears</li>
          </ul>
        </div>
      </section>

      {/* Availability */}
      <section className="it-availability">
        <div className="container">
          <h2>How We Can Work Together</h2>
          <div className="it-availability-grid">
            <div className="it-availability-item">
              <h3>In-Person</h3>
              <p>California & Florida</p>
            </div>
            <div className="it-availability-item">
              <h3>Online</h3>
              <p>Available throughout the US</p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="it-getting-started section-alt">
        <div className="container">
          <h2>How to Get Started</h2>
          <div className="steps-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <h3>Free Consultation</h3>
              <p>Schedule a brief call to discuss your needs and see if we&#39;re a good fit.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <h3>Book Your First Session</h3>
              <p>Choose a time that works for you—in-person or online.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <h3>Begin Your Journey</h3>
              <p>Start working toward the healing and peace you deserve.</p>
            </div>
          </div>
          <div className="it-cta">
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

export default IndividualTherapy
