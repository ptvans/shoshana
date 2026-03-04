'use client'

import { useState } from 'react'

const previewFaqs = [
  {
    question: 'Do you offer online therapy?',
    answer: 'Yes. I offer secure video sessions for clients throughout the United States. Online therapy is just as effective as in-person sessions for most concerns, and many clients prefer the convenience of meeting from home.',
  },
  {
    question: 'How long does therapy typically last?',
    answer: 'It depends on your goals and what you\u2019re working through. Some people find relief in just a few sessions, while others benefit from longer-term work. We\u2019ll check in regularly to make sure therapy is moving at the right pace for you.',
  },
  {
    question: 'Do you take insurance?',
    answer: 'I am an out-of-network provider. I provide superbills (detailed receipts) that you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network benefits.',
  },
  {
    question: 'What should I expect in my first session?',
    answer: 'The first session is about getting to know each other. We\u2019ll discuss what brings you to therapy, your history, and your goals. It\u2019s also a chance for you to see if you feel comfortable working with me.',
  },
]

function HomeFaqPreview() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-preview-accordion">
      {previewFaqs.map((faq, index) => (
        <div key={index} className={`faq-preview-item ${openIndex === index ? 'open' : ''}`}>
          <button
            className="faq-preview-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <svg
              className="faq-preview-chevron"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="faq-preview-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeFaqPreview
