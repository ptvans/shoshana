'use client'

import { useState } from 'react'
import './page.css'

const faqs = [
  {
    question: 'What should I expect in the first session?',
    answer: 'The first session is about getting to know each other. We\u2019ll discuss what brings you to therapy, your history, and your goals. It\u2019s also a chance for you to see if you feel comfortable working with me. There\u2019s no pressure\u2014this is your time to ask questions and decide if it feels like a good fit.',
  },
  {
    question: 'How long are sessions?',
    answer: 'Individual and couples therapy sessions are 50 minutes. If needed, extended sessions can be arranged.',
  },
  {
    question: 'How long does therapy take?',
    answer: 'It depends on your goals and what you\u2019re working through. Some people find relief in just a few sessions, while others benefit from longer-term work. We\u2019ll check in regularly to make sure therapy is moving at the right pace for you.',
  },
  {
    question: 'What is EMDR and how does it work?',
    answer: 'EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your brain process traumatic or distressing memories. During sessions, I\u2019ll guide you through bilateral stimulation (like eye movements) while you focus on a specific memory. Over time, the memory loses its emotional charge so it no longer controls your reactions.',
  },
  {
    question: 'Do you offer online therapy?',
    answer: 'Yes. I offer secure video sessions for clients throughout the United States. Online therapy is just as effective as in-person sessions for most concerns, and many clients prefer the convenience of meeting from home.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'I am an out-of-network provider. I provide superbills (detailed receipts) that you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network benefits. I recommend calling your insurance to ask about your out-of-network mental health coverage.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Please provide at least 48 hours notice if you need to cancel or reschedule. Late cancellations and missed appointments are charged the full session fee.',
  },
  {
    question: 'Is therapy confidential?',
    answer: 'Yes. Everything discussed in therapy is confidential, with limited exceptions required by law (such as imminent danger to yourself or others, or suspected abuse of a child or elder). I\u2019ll review these exceptions with you at the start of treatment.',
  },
  {
    question: 'What\u2019s the difference between therapy and coaching?',
    answer: 'Therapy addresses mental health concerns, trauma, and emotional healing using clinical methods. Coaching is goal-focused and forward-looking\u2014it\u2019s about building skills, navigating life transitions, and personal growth. Coaching is available to clients worldwide, while therapy is limited to states where I\u2019m licensed (California and Florida).',
  },
]

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="faq-intro">
            Answers to common questions about therapy, EMDR, and working together.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-main section-alt">
        <div className="container-narrow">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="faq-cta-section">
        <div className="container">
          <div className="faq-cta">
            <p>Still have questions?</p>
            <a
              href="https://app.greminders.com/c/shoshanapolansky"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
