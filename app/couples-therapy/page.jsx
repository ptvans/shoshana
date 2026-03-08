import Link from 'next/link'
import relationshipCounseling from '../../src/images/relationship-counseling.jpg'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Couples Therapy & Relationship Counseling',
  description: 'Couples therapy to rebuild communication, deepen intimacy, and resolve conflict using EFT and Gottman methods. Inclusive of all relationship structures. In-person in California & Florida, online nationwide.',
  openGraph: {
    title: 'Couples Therapy & Relationship Counseling | Shoshana Polansky, LMFT',
    description: 'Couples therapy to rebuild communication, deepen intimacy, and resolve conflict using EFT and Gottman methods. Inclusive of all relationship structures.',
  },
}

const faqs = [
  {
    question: 'Do both partners need to want therapy for it to work?',
    answer: 'Ideally, yes \u2014 but it\u2019s common for one partner to be more enthusiastic than the other. What matters is that both of you are willing to show up and participate honestly. Many reluctant partners find the process more useful than they expected once they experience the first session.',
  },
  {
    question: 'What if we\u2019re not sure we want to stay together?',
    answer: 'That\u2019s okay. Couples therapy isn\u2019t about forcing a relationship to work \u2014 it\u2019s about helping you get clarity. Sometimes that means rebuilding and strengthening the relationship. Sometimes it means realizing you\u2019re better apart. Either way, therapy can help you make that decision with honesty and respect.',
  },
  {
    question: 'Do you work with non-traditional relationship structures?',
    answer: 'Absolutely. I work with couples in all types of relationships \u2014 including polyamorous, open, and non-monogamous partnerships. My approach is inclusive, nonjudgmental, and focused on what works for your specific relationship.',
  },
  {
    question: 'How is couples therapy different from individual therapy?',
    answer: 'In couples therapy, the relationship is the client. We focus on the patterns between you \u2014 communication styles, conflict cycles, attachment dynamics \u2014 rather than individual issues. That said, I may recommend individual sessions alongside couples work if deeper personal issues are affecting the relationship.',
  },
]

function CouplesTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Couples Therapy &amp; Relationship Counseling</h1>
          <p className="lp-hero-intro">
            Rebuild connection, improve communication, and create the
            relationship you both deserve. Whether you&#39;re in crisis or
            just want to be better together, therapy can help.
          </p>
          <a
            href="https://app.greminders.com/c/shoshanapolansky"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Feature Section */}
      <section className="lp-feature section-alt">
        <div className="container-narrow">
          <div className="lp-feature-layout">
            <div className="lp-feature-image">
              <img src={relationshipCounseling.src} alt="Couple laughing together at a coffee shop" />
            </div>
            <div className="lp-feature-content">
              <h2>Is your relationship in a rut?</h2>
              <p>
                Maybe your sex life has gone stale, you feel like your partner
                doesn&#39;t understand you or you&#39;re just sick of having the same
                fight and having it not go anywhere. Maybe you&#39;re struggling
                with navigating non-monogamy. Let&#39;s work together and figure
                out how to steady the ship and add intimacy back to your
                relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do You Recognize Yourself? */}
      <section className="lp-recognize">
        <div className="container-narrow">
          <h2>Do You Recognize Yourselves?</h2>
          <ul className="lp-recognize-list">
            <li>The same arguments keep coming up, and nothing ever gets resolved</li>
            <li>You feel more like roommates than partners</li>
            <li>One or both of you has been unfaithful, and you&#39;re not sure how to move forward</li>
            <li>You avoid difficult conversations because they always escalate</li>
            <li>Intimacy — emotional or physical — has faded and you don&#39;t know how to get it back</li>
            <li>You&#39;re considering separation but want to try everything before making that decision</li>
            <li>You&#39;re navigating a major transition — engagement, new baby, blended family, or open relationship</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I use Emotionally Focused Therapy (EFT) and Gottman methods —
            two of the most researched and effective approaches to couples
            therapy. EFT helps you understand the attachment dynamics beneath
            your conflict, while Gottman methods provide concrete communication
            tools and strategies for rebuilding trust.
          </p>
          <p>
            My style is active and engaged. I won&#39;t just sit back and let
            you argue in circles. I&#39;ll help you see the patterns driving
            your disconnection, interrupt destructive cycles in real time, and
            guide you toward new ways of relating to each other.
          </p>
          <p>
            I work with couples at every stage — from premarital counseling
            to relationships in crisis — and I&#39;m inclusive of all relationship
            structures, including non-monogamous and polyamorous partnerships.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll begin with an initial session where both partners share
            their perspective, followed by individual check-ins with each of
            you. From there, I&#39;ll develop a treatment plan focused on your
            specific goals — whether that&#39;s improving communication,
            rebuilding trust, or deepening intimacy.
          </p>
          <p>
            Sessions are 50 minutes and available both in-person and online.
            Many couples start with weekly sessions and transition to
            biweekly as they build new skills and patterns.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="lp-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <LandingFaqSection faqs={faqs} />
        </div>
      </section>

      {/* Availability */}
      <section className="lp-availability section-alt">
        <div className="container-narrow">
          <h2>Where I See Couples</h2>
          <p>
            I offer in-person couples therapy in California and Florida,
            serving couples in the Los Angeles area, Santa Barbara, and the
            San Francisco Bay Area. Online couples therapy is available
            throughout the United States — from SoCal to NorCal and everywhere
            in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to take the first step together?</h2>
          <p>
            Your relationship is worth fighting for. Schedule a free
            15-minute consultation to discuss what you&#39;re going through
            and how couples therapy can help.
          </p>
          <a
            href="https://app.greminders.com/c/shoshanapolansky"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Schedule Your Free Consultation
          </a>
          <div className="lp-links">
            <p>
              <Link href="/services">All Therapy Services</Link> &#183;{' '}
              <Link href="/about">About Shoshana</Link> &#183;{' '}
              <Link href="/dating-relationship-therapy">Dating &amp; Relationship Therapy</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CouplesTherapy
