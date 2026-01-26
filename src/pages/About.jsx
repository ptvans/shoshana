import shoshanaPortrait from '../photos/shoshana/Shoshana-portrait.jpg'
import './About.css'

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-layout">
            <div className="about-hero-content">
              <h1>Hi, I'm Shoshana</h1>
              <p className="about-intro">
                I'm a licensed marriage and family therapist specializing in trauma
                and relationships. I help individuals and couples heal from the past
                and build the connections they deserve.
              </p>
              <p>
                I was drawn to this work because I understand how isolating it can
                feel to carry the weight of difficult experiences alone. Whether
                you're dealing with the lingering effects of childhood trauma,
                struggling in your relationships, or feeling stuck in patterns you
                can't seem to break—I'm here to help.
              </p>
              <p>
                My approach is warm, direct, and practical. I believe therapy works
                best when you feel genuinely understood and have concrete tools to
                create change.
              </p>
            </div>
            <div className="about-hero-image">
              <div className="about-image-frame">
                <img src={shoshanaPortrait} alt="Shoshana Polansky" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Help Section */}
      <section className="who-i-help section-alt">
        <div className="container">
          <h2>Who I Work With</h2>
          <div className="client-types">
            <div className="client-type">
              <span className="client-number">01</span>
              <div className="client-content">
                <h3>The Caretaker Who Needs Care</h3>
                <p>
                  You're the one everyone turns to—stable, strong, always helpful.
                  But somehow, you can never get your own needs met. You give and give,
                  and wonder why your relationships feel one-sided. I help you understand
                  this pattern and learn to receive as well as you give.
                </p>
              </div>
            </div>

            <div className="client-type">
              <span className="client-number">02</span>
              <div className="client-content">
                <h3>Couples Ready for Change</h3>
                <p>
                  Your relationship has become stale, distant, or filled with the same
                  arguments on repeat. Whether you're navigating communication breakdowns,
                  sexual intimacy concerns, or exploring non-monogamy, I help couples
                  reconnect and build something stronger together.
                </p>
              </div>
            </div>

            <div className="client-type">
              <span className="client-number">03</span>
              <div className="client-content">
                <h3>Trauma Survivors Seeking Relief</h3>
                <p>
                  Panic attacks, anxiety, binge eating, emotional flooding—these symptoms
                  often point to unprocessed trauma. Using EMDR and other approaches,
                  I help you process what happened so the past stops controlling your present.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMDR Section */}
      <section className="emdr-section">
        <div className="container-narrow">
          <h2>What is EMDR?</h2>
          <div className="emdr-content">
            <p>
              EMDR (Eye Movement Desensitization and Reprocessing) is a proven therapy
              for trauma and distressing life experiences. It helps your brain process
              stuck memories so they no longer trigger intense emotional reactions.
            </p>
            <p>
              Unlike traditional talk therapy, EMDR doesn't require you to talk in
              detail about the traumatic event or complete homework between sessions.
              Many clients experience significant relief in fewer sessions than
              traditional approaches.
            </p>
            <div className="emdr-helps">
              <h3>EMDR is particularly effective for:</h3>
              <ul>
                <li>PTSD and trauma symptoms</li>
                <li>Panic attacks and anxiety</li>
                <li>Childhood trauma and abuse</li>
                <li>Grief and loss</li>
                <li>Phobias and fears</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-alt">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ready to take the first step?</h2>
            <p>
              Schedule a free consultation to discuss your needs and see if we're a good fit.
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
