import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'
import Header from './components/Header'
import LogoBanner from './components/LogoBanner'
import Footer from './components/Footer'
import './globals.css'
import './layout.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Shoshana Polansky, LMFT | Trauma Therapy & Couples Counseling | CA & FL',
    template: '%s | Shoshana Polansky, LMFT',
  },
  description: 'Licensed Marriage & Family Therapist specializing in trauma (EMDR), couples therapy, and relationship coaching. In-person in California & Florida. Online therapy nationwide.',
  keywords: ['trauma therapy', 'EMDR therapist', 'couples therapy', 'marriage counseling', 'anxiety therapist', 'relationship therapy', 'online therapy California', 'therapist San Diego'],
  authors: [{ name: 'Shoshana Polansky, LMFT' }],
  robots: 'index, follow',
  metadataBase: new URL('https://ptvans.github.io/shoshana'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Shoshana Polansky, LMFT | Trauma Therapy & Couples Counseling',
    description: 'Licensed Marriage & Family Therapist specializing in trauma (EMDR), couples therapy, and relationship coaching. In-person in California & Florida. Online therapy nationwide.',
    siteName: 'Shoshana Polansky, LMFT',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoshana Polansky, LMFT | Trauma Therapy & Couples Counseling',
    description: 'Licensed Marriage & Family Therapist specializing in trauma (EMDR), couples therapy, and relationship coaching. In-person in California & Florida. Online therapy nationwide.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://www.shoshanapolansky.com/#business',
      name: 'Shoshana Polansky, LMFT',
      description: 'Licensed Marriage and Family Therapist specializing in trauma therapy (EMDR), couples counseling, and relationship coaching. Serving clients in California, Florida, and online nationwide.',
      url: 'https://www.shoshanapolansky.com/',
      telephone: '+18588637270',
      priceRange: '$200 per session',
      medicalSpecialty: [
        'Trauma Therapy',
        'EMDR',
        'Couples Therapy',
        'Relationship Counseling',
      ],
      areaServed: [
        { '@type': 'State', name: 'California' },
        { '@type': 'State', name: 'Florida' },
        { '@type': 'Country', name: 'United States', description: 'Online therapy available nationwide' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Therapy & Coaching Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Individual Therapy',
              description: 'One-on-one trauma therapy using EMDR and evidence-based approaches for anxiety, depression, PTSD, and relationship patterns.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Couples Therapy',
              description: 'Couples counseling for communication, intimacy, conflict resolution, and relationship rebuilding.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'EMDR Therapy',
              description: 'Eye Movement Desensitization and Reprocessing (EMDR) for trauma, PTSD, panic attacks, and phobias.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Relationship Coaching',
              description: 'Goal-focused coaching for personal growth and relationship skills. Available worldwide via video call.',
            },
          },
        ],
      },
      sameAs: ['https://blog.shoshanapolansky.com'],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.shoshanapolansky.com/#therapist',
      name: 'Shoshana Polansky',
      jobTitle: 'Licensed Marriage and Family Therapist',
      honorificSuffix: 'LMFT',
      worksFor: { '@id': 'https://www.shoshanapolansky.com/#business' },
      knowsAbout: [
        'Trauma Therapy',
        'EMDR',
        'Couples Therapy',
        'Anxiety Treatment',
        'Relationship Counseling',
        'PTSD Treatment',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.shoshanapolansky.com/#website',
      url: 'https://www.shoshanapolansky.com/',
      name: 'Shoshana Polansky, LMFT',
      description: 'Trauma therapy, couples counseling, and relationship coaching',
      publisher: { '@id': 'https://www.shoshanapolansky.com/#business' },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${nunitoSans.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/shoshana/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="app">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header />
          <LogoBanner />
          <main className="main-content" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
