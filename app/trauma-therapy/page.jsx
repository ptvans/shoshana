import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Trauma Therapy & EMDR',
  description: 'Specialized trauma therapy and EMDR in California and Florida. Heal from PTSD, childhood trauma, and abuse with evidence-based treatment. In-person and online sessions available.',
  openGraph: {
    title: 'Trauma Therapy & EMDR | Shoshana Polansky, LMFT',
    description: 'Specialized trauma therapy and EMDR in California and Florida. Heal from PTSD, childhood trauma, and abuse with evidence-based treatment.',
  },
}

const faqs = [
  {
    question: 'What is EMDR and how does it work?',
    answer: 'EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain reprocess traumatic memories. Instead of talking through events over and over, EMDR uses bilateral stimulation to help your brain file away distressing memories so they no longer trigger intense emotional reactions. Most clients notice a shift within the first few sessions.',
  },
  {
    question: 'Do I have to talk about everything that happened to me?',
    answer: 'No. One of the benefits of EMDR is that you don\u2019t need to share every detail of your experience for it to work. I\u2019ll guide you through the process at a pace that feels safe, and you\u2019re always in control of what you share.',
  },
  {
    question: 'How long does trauma therapy usually take?',
    answer: 'It depends on what you\u2019re working through. Some clients experience significant relief in 8\u201312 sessions, while complex or childhood trauma may benefit from longer-term work. We\u2019ll set clear goals and check in regularly on your progress.',
  },
  {
    question: 'Is online trauma therapy effective?',
    answer: 'Yes. Research shows that online EMDR and trauma therapy are just as effective as in-person sessions for most people. Many of my clients prefer the comfort and convenience of working from home, especially when processing difficult material.',
  },
]

function TraumaTherapy() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Trauma Therapy &amp; EMDR</h1>
          <p className="lp-hero-intro">
            You don&#39;t have to keep carrying the weight of what happened to you.
            Trauma therapy can help you process painful experiences and finally
            feel like yourself again.
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
            <li>You feel on edge, hypervigilant, or easily startled — even when you&#39;re safe</li>
            <li>Flashbacks, nightmares, or intrusive memories keep pulling you back into the past</li>
            <li>You avoid certain places, people, or situations because they trigger overwhelming emotions</li>
            <li>You feel disconnected from yourself, numb, or like you&#39;re going through the motions</li>
            <li>You struggle to trust people or let anyone get too close</li>
            <li>You know logically that something wasn&#39;t your fault, but you can&#39;t stop feeling like it was</li>
            <li>Anxiety or panic attacks seem to come out of nowhere</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            I specialize in EMDR (Eye Movement Desensitization and Reprocessing),
            an evidence-based therapy specifically designed for trauma. Unlike
            traditional talk therapy, EMDR helps your brain reprocess traumatic
            memories so they lose their emotional charge — without requiring you
            to relive every detail.
          </p>
          <p>
            Whether you&#39;re dealing with a single traumatic event, complex
            trauma from childhood, or the lasting effects of an abusive
            relationship, I&#39;ll meet you where you are and work at a pace that
            feels safe. My approach is warm but direct — I won&#39;t let you stay
            stuck, and I won&#39;t push you faster than you&#39;re ready.
          </p>
          <p>
            EMDR is particularly effective for PTSD, panic attacks, childhood
            abuse, grief, and phobias. Many clients experience meaningful
            relief faster than with talk therapy alone.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start with a thorough assessment to understand your history,
            your symptoms, and your goals. From there, I&#39;ll create a
            personalized treatment plan — typically combining EMDR with other
            evidence-based approaches tailored to your needs.
          </p>
          <p>
            Sessions are 50 minutes and available both in-person and online.
            Many clients begin to notice shifts within the first few weeks,
            though deeper trauma work unfolds over time.
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
            I offer in-person trauma therapy sessions in California — including
            Los Angeles, Santa Barbara, and the San Francisco Bay Area — as well
            as throughout Florida. Online EMDR therapy is available to clients
            anywhere in the United States, from Southern California to Northern
            California and beyond.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to take the first step?</h2>
          <p>
            You don&#39;t have to keep white-knuckling through life. Schedule a
            free 15-minute consultation to see if trauma therapy is right for you.
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
              <Link href="/couples-therapy">Couples Therapy</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TraumaTherapy
