import Link from 'next/link'
import './page.css'

export const metadata = {
  title: 'Therapy Services | Individual & Couples Therapy',
  description: 'Individual therapy, couples therapy, and EMDR for trauma. In-person in California & Florida, online throughout the US.',
  openGraph: {
    title: 'Therapy Services | Individual & Couples Therapy',
    description: 'Individual therapy, couples therapy, and EMDR for trauma. In-person in California & Florida, online throughout the US.',
  },
}

function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>Therapy</h1>
          <p className="services-intro">
            Healing from trauma and building stronger relationships through
            evidence-based therapy—in person or online.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="services-main section-alt">
        <div className="container">
          <h2 className="focus-areas-heading">Focus Areas</h2>
          <div className="focus-cards-grid">
            <Link href="/trauma-therapy" className="focus-card">
              <h3>Trauma Therapy &amp; EMDR</h3>
              <p>
                Heal from PTSD, childhood trauma, and abuse with EMDR and
                evidence-based trauma treatment.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/dating-relationship-therapy" className="focus-card">
              <h3>Dating &amp; Relationships</h3>
              <p>
                Break unhealthy patterns, get over an ex, and recover from
                toxic or abusive relationships.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/therapy-for-high-achievers" className="focus-card">
              <h3>Therapy for High Achievers</h3>
              <p>
                For driven, successful people carrying the weight of trauma,
                childhood abuse, or emotionally immature parents.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/ocd-therapy" className="focus-card">
              <h3>OCD &amp; Intrusive Thoughts</h3>
              <p>
                Specialized treatment using Inference-Based CBT and exposure
                therapy for rumination and compulsive patterns.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>

            <Link href="/couples-therapy" className="focus-card">
              <h3>Couples Therapy</h3>
              <p>
                Rebuild communication, deepen intimacy, and navigate conflict
                using EFT and Gottman methods.
              </p>
              <span className="link-subtle">Learn more &#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EMDR Highlight */}
      <section className="emdr-highlight-section">
        <div className="container-narrow">
          <h2>Specialized in EMDR</h2>
          <p>
            EMDR (Eye Movement Desensitization and Reprocessing) is a specialized
            therapy I offer for processing trauma and distressing life experiences.
            It&#39;s particularly effective for:
          </p>
          <ul className="emdr-list">
            <li>PTSD and trauma symptoms</li>
            <li>Panic attacks and anxiety</li>
            <li>Childhood trauma and abuse</li>
            <li>Grief and loss</li>
            <li>Phobias and fears</li>
          </ul>
          <p>
            Many clients experience significant relief faster than with traditional
            talk therapy alone.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="getting-started-section section-alt">
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
              <p>Start working toward the healing and connection you deserve.</p>
            </div>
          </div>
          <div className="getting-started-cta">
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

export default Services
