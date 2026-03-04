import Link from 'next/link'
import shoshanaPortrait from '../../src/photos/shoshana/Shoshana-portrait.jpg'
import shoshanaSitting from '../../src/photos/shoshana/Shoshsna-Sitting.jpg'
import './page.css'

export const metadata = {
  title: 'About Shoshana Polansky, LMFT | Trauma Therapist',
  description: 'Licensed Marriage & Family Therapist specializing in trauma (EMDR), couples therapy, and relationship coaching. Learn about my approach to healing.',
  openGraph: {
    title: 'About Shoshana Polansky, LMFT | Trauma Therapist',
    description: 'Licensed Marriage & Family Therapist specializing in trauma (EMDR), couples therapy, and relationship coaching. Learn about my approach to healing.',
  },
}

function About() {
  return (
    <div className="about">
      {/* Enhanced Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-layout">
            <div className="about-hero-image">
              <div className="about-image-frame">
                <img src={shoshanaPortrait.src} alt="Shoshana Polansky, Licensed Marriage and Family Therapist" />
              </div>
            </div>
            <div className="about-hero-content">
              <div className="about-badges">
                <span className="about-badge">LMFT, Licensed Marriage &amp; Family Therapist</span>
                <span className="about-badge about-badge-accent">&#10003; Accepting New Clients</span>
                <span className="about-badge">&#9745; Telehealth</span>
                <span className="about-badge">&#9745; In-Person</span>
              </div>
              <h1>Shoshana Polansky</h1>
              <p className="about-pronouns">she/her</p>
              <p className="about-tagline">
                Helping driven people heal from trauma, create better
                relationships, and clear the obstacles standing in the way
              </p>
              <div className="about-specialty-tags">
                <span className="specialty-tag">Trauma &amp; EMDR</span>
                <span className="specialty-tag">Couples Therapy</span>
                <span className="specialty-tag">OCD</span>
                <span className="specialty-tag">Dating Issues</span>
              </div>
              <div className="about-stats">
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <span className="stat-label">Experience</span>
                    <span className="stat-value">8+ years</span>
                  </div>
                </div>
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <div>
                    <span className="stat-label">Licensed</span>
                    <span className="stat-value">California &amp; Florida</span>
                  </div>
                </div>
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div>
                    <span className="stat-label">Sessions</span>
                    <span className="stat-value">Individual &amp; Couples</span>
                  </div>
                </div>
                <div className="about-stat">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <div>
                    <span className="stat-label">Languages</span>
                    <span className="stat-value">English</span>
                  </div>
                </div>
              </div>
              <div className="about-hero-ctas">
                <a
                  href="https://app.greminders.com/c/shoshanapolansky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Consultation &#8594;
                </a>
                <a href="tel:858-863-7270" className="btn-outline">
                  &#9743; Call (858) 863-7270
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-cards-section">
        <div className="container">
          <div className="info-cards-grid">
            {/* Quick Info Card */}
            <div className="info-card">
              <h3 className="info-card-title">Quick Info</h3>
              <div className="info-card-body">
                <div className="info-card-group">
                  <span className="info-card-label">Session Types</span>
                  <div className="info-card-items">
                    <span className="info-card-check-item">
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Individual Therapy
                    </span>
                    <span className="info-card-check-item">
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Couples Therapy
                    </span>
                  </div>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Ages Seen</span>
                  <p className="info-card-value">Adults (18+)</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Availability</span>
                  <div className="info-card-items">
                    <span className="info-card-icon-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      In-Person Sessions
                    </span>
                    <span className="info-card-icon-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                      Video / Telehealth
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="info-card">
              <h3 className="info-card-title">Credentials</h3>
              <div className="info-card-body">
                <div className="info-card-group">
                  <span className="info-card-label">Licenses</span>
                  <p className="info-card-value">Licensed Marriage &amp; Family Therapist<br />California &amp; Florida</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Education</span>
                  <p className="info-card-value">MA, The Wright Institute, Berkeley</p>
                  <p className="info-card-value">BA, University of Southern California<br /><span className="info-card-detail">Cum Laude, Honors &middot; National Merit &amp; Trustee Scholar</span></p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Certifications</span>
                  <p className="info-card-value">EMDR Certified (Sonoma Psychotherapy Training Institute)</p>
                  <p className="info-card-value">Trauma-Focused CBT Certified</p>
                  <p className="info-card-value">EFT &amp; Gottman Method Training</p>
                </div>
              </div>
            </div>

            {/* Fees & Insurance Card */}
            <div className="info-card">
              <h3 className="info-card-title">Fees &amp; Insurance</h3>
              <div className="info-card-body">
                <div className="info-card-group">
                  <span className="info-card-label">Session Fee</span>
                  <p className="info-card-value info-card-value-large">$240 per session</p>
                </div>
                <div className="info-card-group">
                  <span className="info-card-label">Insurance</span>
                  <p className="info-card-value">Out-of-Network &middot; Superbills provided</p>
                </div>
                <Link href="/rates" className="info-card-link">View details &#8594;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach to Therapy */}
      <section className="approach-section">
        <div className="container-narrow">
          <h2>My Approach to Therapy</h2>
          <div className="approach-content">
            <p>
              I believe therapy works best when it&#39;s a true collaboration.
              You&#39;re the expert on your own life&#8212;you know your
              experiences, your struggles, and your hopes better than anyone. My
              role is to bring clinical expertise, evidence-based techniques, and
              genuine care to help you understand patterns, develop new skills,
              and create meaningful change.
            </p>
            <p>
              I don&#39;t focus on one specific type of therapy&#8212;I choose an
              approach tailored to your needs. For trauma, I use EMDR (Eye
              Movement Desensitization and Reprocessing), a type of therapy that
              people find rapidly transformative. Clients move on from upsetting
              or blocking memories and free themselves from anxiety and
              self-doubt.
            </p>
            <p>
              For couples, I use Emotionally Focused Therapy (EFT) and the
              Gottman Method to help partners dealing with communication issues,
              differences in desire, problems with intimacy, and navigating
              non-monogamous relationships.
            </p>
            <p>
              For OCD and intrusive thoughts, I use Inference-Based Cognitive
              Behavioral Therapy (I-CBT) and exposure therapy&#8212;evidence-based
              approaches that help you develop a different relationship with
              your thoughts and reclaim control.
            </p>
            <p>
              Every person is different, so I tailor my approach to your unique
              needs, goals, and preferences. Therapy isn&#39;t one-size-fits-all,
              and I&#39;m committed to finding what works for you.
            </p>
          </div>
          <div className="treatment-tags">
            <span className="treatment-tag">EMDR</span>
            <span className="treatment-tag">Emotionally Focused Therapy (EFT)</span>
            <span className="treatment-tag">Gottman Method</span>
            <span className="treatment-tag">Inference-Based CBT</span>
            <span className="treatment-tag">Exposure Therapy</span>
            <span className="treatment-tag">Trauma-Focused CBT</span>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="story-section section-alt">
        <div className="container-narrow">
          <p className="section-label">My Story</p>
          <h2>Why I Became a Therapist</h2>
          <div className="story-content">
            <p>
              I was drawn to this work because I understand how isolating it can
              feel to carry the weight of difficult experiences alone. Whether
              it&#39;s the lingering effects of childhood trauma, relationship
              patterns that keep repeating, or intrusive thoughts that won&#39;t
              quiet down&#8212;so many people suffer in silence, unsure where to
              turn for help.
            </p>
            <p>
              That curiosity about how the mind works&#8212;and a deep passion for
              helping others find relief&#8212;led me from the University of
              Southern California to The Wright Institute in Berkeley, and then
              to advanced EMDR training at the Sonoma Psychotherapy Training
              Institute, one of the country&#39;s leading programs.
            </p>
            <p>
              I still feel privileged every time a client trusts me with their
              story. There&#39;s nothing more rewarding than watching someone move
              from feeling stuck and hopeless to discovering their own resilience
              and capability.
            </p>
          </div>
          <div className="story-image">
            <img src={shoshanaSitting.src} alt="Shoshana Polansky in a relaxed setting" />
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="who-i-help">
        <div className="container">
          <h2>Who I Work With</h2>
          <div className="client-types">
            <div className="client-type">
              <span className="client-number">01</span>
              <div className="client-content">
                <h3>The Driven Person Stuck in Patterns</h3>
                <p>
                  You&#39;re successful, capable, and driven&#8212;but you keep
                  finding yourself stuck and upset about your relationships. From
                  anxiety management to healthy communication to healing from
                  trauma, I help you clear the obstacles standing in your way.
                </p>
              </div>
            </div>
            <div className="client-type">
              <span className="client-number">02</span>
              <div className="client-content">
                <h3>Couples Ready for Change</h3>
                <p>
                  I specialize in helping couples dealing with communication
                  issues, differences in desire, problems with intimacy, and
                  navigating non-monogamous relationships. Whether your
                  relationship has become stale, distant, or filled with the same
                  arguments on repeat&#8212;I help you reconnect and build
                  something stronger together.
                </p>
              </div>
            </div>
            <div className="client-type">
              <span className="client-number">03</span>
              <div className="client-content">
                <h3>People Confused and Stressed by Dating</h3>
                <p>
                  Can&#39;t get over an ex, stuck in unhealthy patterns, or
                  recovering from a narcissistic or abusive relationship? I offer
                  direct, no-nonsense therapy to help you break the cycle and
                  build the dating life you actually want.
                </p>
              </div>
            </div>
            <div className="client-type">
              <span className="client-number">04</span>
              <div className="client-content">
                <h3>Trauma Survivors Seeking Relief</h3>
                <p>
                  Panic attacks, anxiety, binge eating, emotional flooding&#8212;these
                  symptoms often point to unprocessed trauma. Using EMDR, clients
                  move on from upsetting or blocking memories and free themselves
                  from anxiety and self-doubt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Specialization */}
      <section className="specialization-section section-alt">
        <div className="container">
          <p className="section-label">Expertise</p>
          <h2 className="specialization-heading">Areas of Specialization</h2>
          <div className="specialization-grid">
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Trauma &amp; PTSD</h3>
                <p>EMDR therapy, childhood trauma, sexual abuse, narcissistic abuse, and PTSD recovery</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Dating &amp; Relationships</h3>
                <p>Breakup recovery, domestic violence, abusive relationships, and unhealthy dating patterns</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>High Achievers with Trauma</h3>
                <p>Therapy for smart, successful people carrying the weight of parental abuse or growing up with immature parents</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>OCD &amp; Intrusive Thoughts</h3>
                <p>Inference-Based CBT, exposure therapy, rumination, and compulsive thought patterns</p>
              </div>
            </div>
            <div className="specialization-card">
              <svg className="specialization-check" width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div>
                <h3>Couples Therapy</h3>
                <p>Communication issues, intimacy, desire differences, non-monogamy, and relationship repair using EFT and Gottman methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ready to take the first step?</h2>
            <p>
              Schedule a free consultation to discuss your needs and see if
              we&#39;re a good fit.
            </p>
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

export default About
