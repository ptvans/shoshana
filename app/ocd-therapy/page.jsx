import Link from 'next/link'
import ocdRumination from '../../src/images/OCD-rumination-looking-out-window.jpg'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'OCD & Intrusive Thoughts Therapy',
  description: 'Specialized OCD therapy using Inference-Based CBT and exposure therapy. Treatment for intrusive thoughts, rumination, and compulsive patterns. Online and in-person in California and Florida.',
  openGraph: {
    title: 'OCD & Intrusive Thoughts Therapy | Shoshana Polansky, LMFT',
    description: 'Specialized OCD therapy using Inference-Based CBT and exposure therapy. Treatment for intrusive thoughts, rumination, and compulsive patterns.',
  },
}

const faqs = [
  {
    question: 'What is Inference-Based CBT (I-CBT)?',
    answer: 'I-CBT is a newer, evidence-based approach to OCD that targets the reasoning process behind obsessions \u2014 not just the content of the thoughts themselves. Instead of treating intrusive thoughts as threats to manage, I-CBT helps you recognize that the obsessional doubt isn\u2019t based on reality. Many clients find this approach more intuitive and effective than traditional ERP alone.',
  },
  {
    question: 'Do I have to do exposure therapy?',
    answer: 'Not necessarily. While exposure and response prevention (ERP) is highly effective for many people with OCD, I also use Inference-Based CBT, which works differently and doesn\u2019t rely on deliberate exposure. We\u2019ll discuss what approach makes the most sense for your specific symptoms and preferences.',
  },
  {
    question: 'My intrusive thoughts are really disturbing. Does that mean something about me?',
    answer: 'No. Intrusive thoughts are just thoughts \u2014 they don\u2019t reflect your character, desires, or values. In fact, the more disturbing a thought feels, the more it usually means you\u2019re a thoughtful, conscientious person. OCD latches onto the things you care about most. This is one of the most important things we\u2019ll work on together.',
  },
  {
    question: 'How do I know if I have OCD or just anxiety?',
    answer: 'OCD involves a specific cycle: an intrusive thought (obsession) creates distress, and you do something \u2014 mentally or physically \u2014 to reduce that distress (compulsion). This can look like checking, reassurance-seeking, mental reviewing, or avoidance. If you\u2019re not sure, a consultation can help clarify what you\u2019re dealing with.',
  },
]

function OcdTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>OCD &amp; Intrusive Thoughts Therapy</h1>
          <p className="lp-hero-intro">
            Intrusive thoughts, rumination, and compulsive patterns don&#39;t have
            to run your life. Specialized OCD treatment can help you break free
            from the cycle.
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
              <img src={ocdRumination.src} alt="Woman looking out a window, reflecting among trees" />
            </div>
            <div className="lp-feature-content">
              <h2>Stuck in your own head?</h2>
              <p>
                You know the thoughts don&#39;t make sense, but you can&#39;t stop
                them. You might spend hours replaying conversations, checking
                things, or seeking reassurance &#8211; and it&#39;s exhausting. OCD
                is sneaky, and it thrives on doubt. The good news is that
                specialized treatment can break the cycle faster than you think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do You Recognize Yourself? */}
      <section className="lp-recognize">
        <div className="container-narrow">
          <h2>Do You Recognize Yourself?</h2>
          <ul className="lp-recognize-list">
            <li>You have unwanted, disturbing thoughts that you can&#39;t stop no matter how hard you try</li>
            <li>You get stuck in mental loops — replaying events, analyzing conversations, or seeking certainty</li>
            <li>You perform rituals or mental checks to manage anxiety (counting, re-reading, reassurance-seeking)</li>
            <li>You avoid certain situations, people, or topics because they trigger obsessive thoughts</li>
            <li>You know your fears are irrational, but you can&#39;t stop acting on them</li>
            <li>You spend hours each day on compulsions or mental rituals that others don&#39;t even notice</li>
            <li>You feel ashamed of your thoughts and worry about what they mean about you</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I use specialized, evidence-based approaches for OCD — including
            Inference-Based Cognitive Behavioral Therapy (I-CBT) and Exposure
            and Response Prevention (ERP). These aren&#39;t generic anxiety
            treatments. They&#39;re designed specifically for the OCD cycle of
            obsessions and compulsions.
          </p>
          <p>
            Inference-Based CBT works by addressing the faulty reasoning that
            makes obsessional doubts feel real. Instead of just learning to
            tolerate distress, you&#39;ll learn to recognize when OCD is generating
            false conclusions — and stop engaging with them.
          </p>
          <p>
            For clients who also benefit from exposure work, I incorporate ERP
            in a supportive, collaborative way. The goal is always to reduce
            the hold OCD has on your daily life and give you back your time
            and peace of mind.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll begin with a detailed assessment of your symptoms — the
            obsessions, compulsions, and avoidance patterns that make up your
            OCD. From there, I&#39;ll recommend a treatment approach tailored to
            your specific presentation.
          </p>
          <p>
            Sessions are 50 minutes, available in-person or online. OCD
            treatment is typically focused and structured, with most clients
            seeing meaningful improvement within 12&#8211;20 sessions.
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
            I provide in-person OCD therapy throughout California and Florida,
            with offices accessible from Los Angeles, Santa Barbara, and the
            greater San Francisco Bay Area. Online sessions are available to
            clients across the US — whether you&#39;re in Southern California,
            Northern California, or anywhere else nationwide.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to take your life back from OCD?</h2>
          <p>
            You don&#39;t have to keep living at the mercy of intrusive thoughts.
            Schedule a free 15-minute consultation to discuss your symptoms
            and learn how specialized treatment can help.
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

export default OcdTherapy
