import './page.css'

export const metadata = {
  title: 'Coaching | Personal Growth & Relationship Skills',
  description: 'Goal-focused coaching for personal growth and relationship skills. Available worldwide via video call.',
  openGraph: {
    title: 'Coaching | Personal Growth & Relationship Skills',
    description: 'Goal-focused coaching for personal growth and relationship skills. Available worldwide via video call.',
  },
}

function Coaching() {
  return (
    <div className="coaching-page">
      {/* Hero */}
      <section className="coaching-hero">
        <div className="container">
          <h1>Coaching</h1>
          <p className="coaching-intro">
            Goal-focused support for personal growth and relationship skills—available worldwide.
          </p>
        </div>
      </section>

      {/* What is Coaching */}
      <section className="coaching-overview section-alt">
        <div className="container-narrow">
          <h2>What is Coaching?</h2>
          <p>
            Coaching is not therapy—it&#39;s a forward-focused partnership designed to help you
            achieve specific goals, develop new skills, and create meaningful change in your life.
          </p>
          <p>
            While therapy often focuses on healing past wounds, coaching focuses on where you
            want to go and how to get there. It&#39;s ideal for people who are generally functioning
            well but want support in reaching the next level.
          </p>
        </div>
      </section>

      {/* Coaching Areas */}
      <section className="coaching-areas">
        <div className="container">
          <h2>Areas of Focus</h2>
          <div className="areas-grid">
            <div className="area-card">
              <span className="area-num">01</span>
              <h3>Relationship Skills</h3>
              <p>
                Learn to communicate more effectively, set healthy boundaries, and build
                deeper connections in your personal and professional relationships.
              </p>
            </div>
            <div className="area-card">
              <span className="area-num">02</span>
              <h3>Personal Growth</h3>
              <p>
                Develop self-awareness, overcome limiting beliefs, and create strategies
                for becoming the person you want to be.
              </p>
            </div>
            <div className="area-card">
              <span className="area-num">03</span>
              <h3>Life Transitions</h3>
              <p>
                Navigate major life changes—career shifts, relationship transitions, or
                personal reinvention—with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="coaching-process section-alt">
        <div className="container">
          <h2>How Coaching Works</h2>
          <div className="process-grid">
            <div className="process-item">
              <span className="process-num">1</span>
              <h3>Discovery Call</h3>
              <p>
                We&#39;ll discuss your goals and determine if coaching is the right fit for
                what you&#39;re looking to achieve.
              </p>
            </div>
            <div className="process-item">
              <span className="process-num">2</span>
              <h3>Set Your Goals</h3>
              <p>
                Together we&#39;ll clarify what success looks like and create a roadmap
                for getting there.
              </p>
            </div>
            <div className="process-item">
              <span className="process-num">3</span>
              <h3>Take Action</h3>
              <p>
                Through regular sessions, you&#39;ll gain tools, accountability, and support
                to make real progress.
              </p>
            </div>
          </div>
          <div className="coaching-cta">
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="coaching-availability">
        <div className="container-narrow">
          <h2>Available Worldwide</h2>
          <div className="availability-note">
            <p>
              <strong>Note:</strong> Coaching is not a substitute for therapy. If you&#39;re
              dealing with trauma, mental health conditions, or need clinical support,
              therapy may be a better fit. Not sure which is right for you? Let&#39;s talk
              about it during your free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="coaching-final-cta section-alt">
        <div className="container">
          <div className="final-cta-content">
            <h2>Ready to get started?</h2>
            <p>
              Schedule a free discovery call to discuss your goals and see if coaching
              is right for you.
            </p>
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coaching
