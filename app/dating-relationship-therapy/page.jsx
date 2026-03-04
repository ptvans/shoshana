import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Dating & Relationship Therapy',
  description: 'Therapy for dating issues, unhealthy relationship patterns, and getting over an ex. Break the cycle of toxic relationships with direct, evidence-based support. Online and in-person.',
  openGraph: {
    title: 'Dating & Relationship Therapy | Shoshana Polansky, LMFT',
    description: 'Therapy for dating issues, unhealthy relationship patterns, and getting over an ex. Break the cycle of toxic relationships with direct, evidence-based support.',
  },
}

const faqs = [
  {
    question: 'I keep choosing the same type of person. Can therapy actually change that?',
    answer: 'Yes. Repetitive relationship patterns usually have roots in earlier experiences \u2014 often from childhood or past relationships that shaped what feels "normal" to you. Therapy helps you see these patterns clearly, understand why they feel familiar, and make different choices going forward.',
  },
  {
    question: 'I can\u2019t stop thinking about my ex. Is that normal?',
    answer: 'It\u2019s more common than you think, and it doesn\u2019t mean something is wrong with you. Difficulty letting go often signals unresolved attachment or unprocessed grief. We\u2019ll work on understanding what\u2019s keeping you stuck and help you move forward \u2014 not by forcing yourself to "just get over it," but by actually processing what happened.',
  },
  {
    question: 'Is this the right fit if I was in an abusive relationship?',
    answer: 'Absolutely. I have extensive experience working with survivors of domestic violence, narcissistic abuse, and emotionally abusive relationships. We\u2019ll work at your pace to process what you\u2019ve been through, rebuild your sense of self, and develop healthier relationship patterns.',
  },
  {
    question: 'Do you work with people who are currently dating or single?',
    answer: 'Both. Whether you\u2019re navigating the dating world, recovering from a breakup, or trying to understand why your relationships keep going sideways, therapy can help. You don\u2019t need to be in crisis to benefit from this work.',
  },
]

function DatingRelationshipTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Dating &amp; Relationship Therapy</h1>
          <p className="lp-hero-intro">
            Stuck in the same patterns? Can&#39;t get over an ex? Tired of
            relationships that start strong and fall apart? Therapy can help
            you break the cycle.
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

      {/* Do You Recognize Yourself? */}
      <section className="lp-recognize section-alt">
        <div className="container-narrow">
          <h2>Do You Recognize Yourself?</h2>
          <ul className="lp-recognize-list">
            <li>You keep attracting the same type of partner — unavailable, controlling, or emotionally distant</li>
            <li>You can&#39;t stop thinking about an ex even though the relationship is over</li>
            <li>You&#39;re recovering from a toxic, abusive, or narcissistic relationship</li>
            <li>You feel anxious or insecure in relationships, constantly needing reassurance</li>
            <li>You sabotage good relationships because deep down you don&#39;t believe you deserve them</li>
            <li>You stay in relationships long past when you should leave</li>
            <li>Dating feels exhausting, hopeless, or triggering</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I take a direct, no-nonsense approach to relationship therapy. We
            won&#39;t just talk about your feelings — we&#39;ll dig into the patterns
            driving your choices and figure out why you keep ending up in the
            same place.
          </p>
          <p>
            Whether you&#39;re trying to get over an ex, heal from domestic violence
            or narcissistic abuse, or simply break the cycle of unhealthy
            relationships, I&#39;ll help you understand what&#39;s really going on
            beneath the surface. Using EMDR and other evidence-based approaches,
            we can process the experiences that shaped your attachment style and
            relationship patterns.
          </p>
          <p>
            My style is warm but blunt. I&#39;ll call things as I see them, and
            I&#39;ll give you the tools to make real changes — not just insight,
            but action.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start by understanding your relationship history and
            identifying the patterns that keep showing up. From there, we&#39;ll
            work on the underlying beliefs and experiences that drive those
            patterns — often going back to family dynamics or past trauma.
          </p>
          <p>
            Sessions are 50 minutes, available in-person or online. Some
            clients come in for focused work on a specific breakup or
            relationship, while others benefit from longer-term therapy to
            fundamentally change how they relate to others.
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
          <h2>Where I See Clients</h2>
          <p>
            I see clients in person across California — from Los Angeles and
            Santa Barbara to the San Francisco Bay Area and throughout Northern
            and Southern California — as well as in Florida. Online therapy
            sessions are available nationwide for clients anywhere in the US.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to break the pattern?</h2>
          <p>
            You deserve relationships that actually feel good. Schedule a
            free 15-minute consultation to talk about what you&#39;re going
            through and see if we&#39;re a good fit.
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
              <Link href="/trauma-therapy">Trauma Therapy &amp; EMDR</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DatingRelationshipTherapy
