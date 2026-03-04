'use client'

import { useState } from 'react'

function LandingFaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="lp-faq-accordion">
        {faqs.map((faq, index) => (
          <div key={index} className={`lp-faq-item ${openIndex === index ? 'open' : ''}`}>
            <button
              className="lp-faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <svg
                className="lp-faq-chevron"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="lp-faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default LandingFaqSection
