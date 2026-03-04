import Link from 'next/link'
import LandingFaqSection from '../components/LandingFaqSection'
import '../components/landing-page.css'

export const metadata = {
  title: 'Therapy for High Achievers',
  description: 'Therapy for high-achieving professionals carrying the weight of trauma, childhood abuse, or growing up with immature parents. Smart, driven, and struggling on the inside. Online and in-person.',
  openGraph: {
    title: 'Therapy for High Achievers | Shoshana Polansky, LMFT',
    description: 'Therapy for high-achieving professionals carrying the weight of trauma, childhood abuse, or growing up with immature parents.',
  },
}

const faqs = [
  {
    question: 'I\u2019m functional and successful. Do I really need therapy?',
    answer: 'Being high-functioning doesn\u2019t mean you\u2019re fine. Many successful people push through pain by working harder, achieving more, or staying busy. Therapy helps you stop running on autopilot and start actually feeling better \u2014 not just performing better.',
  },
  {
    question: 'Will therapy slow me down or make me less driven?',
    answer: 'No. In fact, most high achievers find that therapy makes them more effective, not less. When you\u2019re not spending energy managing anxiety, hypervigilance, or emotional suppression, you have more capacity for the things that matter.',
  },
  {
    question: 'I grew up with emotionally immature parents. Is that really trauma?',
    answer: 'It can be. Growing up with parents who were emotionally unavailable, controlling, narcissistic, or unpredictable often creates lasting patterns \u2014 perfectionism, people-pleasing, difficulty with boundaries, and a deep sense that you\u2019re never enough. These patterns deserve attention and can absolutely be worked through in therapy.',
  },
  {
    question: 'What makes your approach different for high achievers?',
    answer: 'I get that you\u2019re smart, capable, and probably used to figuring things out on your own. I won\u2019t waste your time with generic advice or slow-paced therapy. My style is direct, efficient, and tailored to people who think quickly and want real results.',
  },
]

function TherapyForHighAchievers() {
  return (
    <div className="landing-page">
      {/* Hero */}
      <section className="lp-hero">
        <div className="container">
          <h1>Therapy for High Achievers</h1>
          <p className="lp-hero-intro">
            Successful on the outside, struggling on the inside. If you&#39;ve
            built an impressive life but still feel broken underneath, you&#39;re
            not alone — and you don&#39;t have to keep powering through.
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
            <li>You&#39;re accomplished and driven, but you feel like a fraud or like it&#39;s never enough</li>
            <li>You grew up with emotionally immature, narcissistic, or abusive parents</li>
            <li>You cope by overworking, over-functioning, or staying in control of everything</li>
            <li>You struggle to ask for help, show vulnerability, or let people in</li>
            <li>You have a history of childhood sexual abuse, physical abuse, or emotional neglect</li>
            <li>You feel exhausted by the performance of keeping it all together</li>
            <li>Your relationships suffer because you don&#39;t know how to be anything other than strong</li>
          </ul>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="lp-help">
        <div className="container-narrow">
          <h2>How I Can Help</h2>
          <p>
            High achievers with trauma histories are some of my favorite people
            to work with. You&#39;re smart, resourceful, and capable — but those
            same qualities can become armor that keeps you disconnected from
            yourself and others.
          </p>
          <p>
            I use EMDR and other evidence-based approaches to help you process
            the childhood experiences, abuse, or family dynamics that shaped
            your patterns. We&#39;ll work on the perfectionism, people-pleasing,
            and emotional suppression that have been running the show — without
            asking you to become less driven or ambitious.
          </p>
          <p>
            My approach is direct and efficient. I respect your intelligence
            and won&#39;t waste your time. Expect honest feedback, practical tools,
            and a therapist who gets how your mind works.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="lp-expect section-alt">
        <div className="container-narrow">
          <h2>What to Expect</h2>
          <p>
            We&#39;ll start by mapping out your history, your patterns, and
            what&#39;s actually driving the symptoms underneath the surface
            success. From there, I&#39;ll build a focused treatment plan
            that respects your time and your goals.
          </p>
          <p>
            Sessions are 50 minutes, available in-person or via secure video.
            Many high-achieving clients prefer online sessions for the
            flexibility and privacy they offer.
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
            I work with high-achieving professionals in person throughout
            California — including LA, the Bay Area, and Santa Barbara — and
            in Florida. Secure online sessions are available to anyone in the
            United States, whether you&#39;re in NorCal, SoCal, or anywhere
            in between.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lp-final-cta">
        <div className="container">
          <h2>Ready to stop just surviving and start living?</h2>
          <p>
            You&#39;ve proven you can handle anything. Now let yourself actually
            heal. Schedule a free 15-minute consultation to get started.
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

export default TherapyForHighAchievers
