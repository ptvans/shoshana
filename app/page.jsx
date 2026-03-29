import Link from 'next/link'
import shoshanaPortrait from '../src/photos/shoshana/Shoshana-portrait.jpg'
import shoshanaSitting from '../src/photos/shoshana/Shoshsna-Sitting.jpg'
import relationshipCounseling from '../src/images/relationship-counseling.jpg'
import beingTheRock from '../src/images/being-the-rock-for-others.jpg'
import healingFromTrauma from '../src/images/healing-from-trauma.jpg'
import highAchieverHiking from '../src/images/high-achiever-hiking.jpg'
import ocdRumination from '../src/images/OCD-rumination-looking-out-window.jpg'
import HomeFaqPreview from './components/HomeFaqPreview'
import './page.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content">
              <div className="hero-badges">
                <span className="hero-badge">Licensed Marriage &amp; Family Therapist</span>
                <span className="hero-badge hero-badge-accent">&#10003; Accepting New Clients</span>
              </div>
              <h1 className="hero-title">
                Heal from trauma<br />
                and build the<br />
                relationships you<br />
                deserve
              </h1>
              <p className="hero-description">
                I help individuals and couples move past trauma, break unhealthy
                patterns, and create meaningful change through evidence-based
                therapy including EMDR, EFT, and Gottman methods.
              </p>
              <div className="hero-ctas">
                <a
                  href="https://app.greminders.com/c/shoshanapolansky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Schedule a Free Consultation
                </a>
                <Link href="/about" className="btn-outline">
                  Learn More About Me
                </Link>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image-frame">
                <img src={shoshanaPortrait.src} alt="Shoshana Polansky, Licensed Marriage and Family Therapist" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fact Banner */}
      <section className="fact-banner">
        <div className="container">
          <div className="fact-banner-items">
            <div className="fact-banner-item">
              <svg className="fact-check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Licensed in California &amp; Florida</span>
            </div>
            <div className="fact-banner-item">
              <svg className="fact-check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Telehealth Available</span>
            </div>
            <div className="fact-banner-item">
              <svg className="fact-check-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>In-Person &amp; Online Sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="focus-areas-section">
        <div className="container">
          <div className="focus-areas-header">
            <p className="section-label">How I Can Help</p>
            <h2>Specialized therapy for real challenges</h2>
            <p className="focus-areas-intro">
              I offer personalized treatment for a range of concerns, tailoring
              my approach to your unique needs and goals.
            </p>
          </div>
          <div className="focus-areas-grid">
            <Link href="/trauma-therapy" className="focus-area-card focus-area-card-has-image">
              <img src={healingFromTrauma.src} alt="Misty mountain landscape symbolizing the journey of healing from trauma" className="focus-area-card-image" />
              <div className="focus-area-card-body">
                <h3>Trauma &amp; PTSD</h3>
                <p>
                  Process difficult experiences with EMDR and trauma-focused
                  therapy. Find relief without having to relive every detail.
                </p>
                <span className="link-subtle">Learn more &#8594;</span>
              </div>
            </Link>

            <Link href="/dating-relationship-therapy" className="focus-area-card focus-area-card-has-image">
              <img src={beingTheRock.src} alt="Group of friends laughing together outdoors" className="focus-area-card-image" />
              <div className="focus-area-card-body">
                <h3>Dating &amp; Relationships</h3>
                <p>
                  Can&#39;t get over an ex, stuck in unhealthy patterns, or recovering
                  from an abusive relationship? Direct, no-nonsense therapy to break
                  the cycle.
                </p>
                <span className="link-subtle">Learn more &#8594;</span>
              </div>
            </Link>

            <Link href="/therapy-for-high-achievers" className="focus-area-card focus-area-card-has-image">
              <img src={highAchieverHiking.src} alt="Woman standing on a mountain summit overlooking a vast landscape" className="focus-area-card-image" />
              <div className="focus-area-card-body">
                <h3>High Achievers with Trauma</h3>
                <p>
                  Successful on the outside, struggling on the inside. Therapy for
                  smart, driven people carrying the weight of abuse or growing up
                  with immature parents.
                </p>
                <span className="link-subtle">Learn more &#8594;</span>
              </div>
            </Link>

            <Link href="/ocd-therapy" className="focus-area-card focus-area-card-has-image">
              <img src={ocdRumination.src} alt="Woman looking out a window, reflecting among trees" className="focus-area-card-image" />
              <div className="focus-area-card-body">
                <h3>OCD &amp; Intrusive Thoughts</h3>
                <p>
                  Rumination and compulsive patterns don&#39;t have to run your life.
                  Evidence-based treatment using Inference-Based CBT and exposure
                  therapy.
                </p>
                <span className="link-subtle">Learn more &#8594;</span>
              </div>
            </Link>

            <Link href="/couples-therapy" className="focus-area-card focus-area-card-has-image">
              <img src={relationshipCounseling.src} alt="Couple laughing together at a coffee shop" className="focus-area-card-image" />
              <div className="focus-area-card-body">
                <h3>Couples Therapy</h3>
                <p>
                  Rebuild communication, deepen intimacy, and navigate conflict
                  together using Emotionally Focused Therapy (EFT) and Gottman
                  methods.
                </p>
                <span className="link-subtle">Learn more &#8594;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section-alt">
        <div className="container">
          <div className="process-header">
            <p className="section-label">Your Path to Feeling Better</p>
            <h2>What to expect when we work together</h2>
            <p className="process-intro">
              Taking the first step can feel overwhelming. Here&#39;s how the
              therapy process works with me.
            </p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3>Schedule a Free Consultation</h3>
              <p>
                A brief 15-minute call to discuss your concerns, answer
                questions, and see if we&#39;re a good fit.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>First Session Assessment</h3>
              <p>
                I&#39;ll listen to understand your situation, history, and
                goals for therapy.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                </svg>
              </div>
              <h3>Collaborative Treatment Plan</h3>
              <p>
                Together, we&#39;ll create a personalized plan with evidence-based strategies.
              </p>
            </div>
            <div className="process-step">
              <div className="process-step-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3>Ongoing Support &amp; Growth</h3>
              <p>
                Regular sessions where you&#39;ll build skills, gain insights,
                and make meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-layout">
            <div className="about-preview-content">
              <p className="section-label">About</p>
              <h2>Meet Shoshana Polansky</h2>
              <p>
                I&#39;m a licensed marriage and family therapist with a warm,
                direct, and practical approach. I specialize in helping
                individuals and couples heal from trauma, break unhealthy
                patterns, and build the relationships they deserve.
              </p>
              <p>
                My approach combines evidence-based techniques&#8212;including
                EMDR, Emotionally Focused Therapy, and Gottman methods&#8212;with
                genuine warmth and understanding. I believe therapy works best
                when it&#39;s collaborative&#8212;you&#39;re the expert on your life,
                and I bring clinical expertise to help you find patterns and
                solutions.
              </p>
              <Link href="/about" className="link-arrow">
                Learn more about my background &#8594;
              </Link>
            </div>
            <div className="about-preview-image">
              <div className="about-preview-image-frame">
                <img src={shoshanaPortrait.src} alt="Shoshana Polansky standing outside" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="faq-preview-section section-alt">
        <div className="container">
          <div className="faq-preview-header">
            <p className="section-label">Common Questions</p>
            <h2>You might be wondering...</h2>
          </div>
          <div className="faq-preview-list">
            <HomeFaqPreview />
          </div>
          <div className="faq-preview-footer">
            <Link href="/faq" className="link-arrow">View All FAQs &#8594;</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta">
            <h2>Ready to take the first step?</h2>
            <p>
              You don&#39;t have to navigate this alone. Schedule a free
              15-minute consultation to discuss how I can help.
            </p>
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
