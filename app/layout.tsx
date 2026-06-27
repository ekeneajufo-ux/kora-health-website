import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const siteUrl = 'https://kora-health-website.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kora Health — Clinical Intelligence Platform for Africa | EMR Integration & Population Health AI',
    template: '%s | Kora Health',
  },
  description:
    'Kora Health synthesizes fragmented patient data from 20+ EMR systems, paper records, and digital sources into decision-ready clinical intelligence. Offline-first AI built for Nigeria, Kenya, Ghana, and all of Africa.',
  keywords: [
    'clinical intelligence platform Africa',
    'healthcare AI Africa',
    'EMR integration Africa',
    'electronic medical records Nigeria',
    'electronic medical records Kenya',
    'hospital management system Africa',
    'health data infrastructure Africa',
    'population health platform Africa',
    'offline EMR Africa',
    'digital health Nigeria',
    'digital health Kenya',
    'digital health Ghana',
    'OpenMRS integration',
    'DHIS2 integration',
    'KenyaEMR integration',
    'African healthcare investment',
    'African health tech startup',
    'clinical AI Africa',
    'health data platform developing countries',
    'global health technology',
    'paper medical records digitization Africa',
    'fragmented patient data Africa',
    'low connectivity healthcare solution',
    'offline clinical decision support',
    'disease surveillance Africa',
    'outbreak detection Africa',
    'vaccination tracking Africa',
    'Kora Health',
  ],
  authors: [{ name: 'Kora Health' }],
  creator: 'Kora Health',
  publisher: 'Kora Health',
  category: 'healthcare technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Kora Health',
    title: "Kora Health — Africa's Clinical Intelligence Engine",
    description:
      'Synthesizing fragmented patient data from 20+ EMRs, paper records, and digital sources into decision-ready clinical intelligence. Offline-first. Built for Nigeria, Kenya, Ghana, and all of Africa.',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kora Health — Clinical Intelligence Platform for Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kora Health — Africa's Clinical Intelligence Engine",
    description:
      'AI-powered clinical intelligence platform for Africa. Synthesizes EMRs, paper records, and digital data. Works offline. Deploying across Nigeria, Kenya, and Ghana.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Kora Health',
      url: siteUrl,
      description:
        "Africa's Clinical Intelligence Engine — synthesizing fragmented patient data into decision-ready clinical intelligence across Nigeria, Kenya, Ghana, and the broader African continent.",
      foundingDate: '2024',
      areaServed: [
        { '@type': 'Continent', name: 'Africa' },
        { '@type': 'Country', name: 'Nigeria' },
        { '@type': 'Country', name: 'Kenya' },
        { '@type': 'Country', name: 'Ghana' },
      ],
      knowsAbout: [
        'Clinical Intelligence',
        'Electronic Medical Records',
        'Population Health',
        'Healthcare AI',
        'EMR Integration',
        'Disease Surveillance',
        'Offline Healthcare Technology',
        'DHIS2',
        'OpenMRS',
        'KenyaEMR',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'ekene.ajufo@gmail.com',
        contactType: 'customer service',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#software`,
      name: 'Kora Clinical Intelligence Platform',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Android, Windows, Linux, macOS',
      description:
        'An offline-first clinical intelligence platform that synthesizes patient data from 20+ EMR systems, paper records, and digital sources into decision-ready intelligence. Built for African healthcare environments with edge AI inference for low-connectivity settings in Nigeria, Kenya, Ghana, and across Africa.',
      featureList: [
        'Universal EMR Integration — OpenMRS, DHIS2, KenyaEMR, Epic, iClinic and 20+ systems',
        'Offline-First Architecture with Edge AI Inference',
        'Population Health Engine and Real-Time Disease Surveillance',
        'Paper Record Digitization via OCR in 15+ Languages',
        'AI Clinical Decision Support trained on African patient populations',
        'Automated DHIS2 and WHO Reporting',
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: siteUrl,
      },
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Kora Health',
      description: "Africa's Clinical Intelligence Engine",
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Kora Health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Kora is Africa's Clinical Intelligence Engine — a platform that synthesizes fragmented patient data from multiple EMR systems, paper records, and digital sources into decision-ready clinical intelligence. Purpose-built for Africa's healthcare infrastructure, with initial deployment in Nigeria, Kenya, and Ghana.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does Kora work without internet connectivity?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kora uses an offline-first architecture with edge AI inference. The AI models run entirely on the local device or facility server — no internet required for core clinical functions. When connectivity returns, Kora automatically syncs data and pushes population health updates.',
          },
        },
        {
          '@type': 'Question',
          name: 'What EMR systems can Kora integrate with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kora integrates with 20+ EMR systems including OpenMRS, DHIS2, KenyaEMR, Epic, iClinic, and legacy systems. It also accepts paper records via scanning/OCR, handwritten notes, voice recordings, lab result PDFs, DICOM images, and exports from any system.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Kora assist with medical record digitization in Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Kora's Digitization Engine converts paper records and handwritten notes into structured clinical data using OCR and AI extraction. It supports 15+ languages and local handwriting styles used across Africa. No manual data entry required — clinics in Nigeria, Kenya, Ghana, and across the continent can digitize years of paper records at scale.",
          },
        },
        {
          '@type': 'Question',
          name: 'What population health capabilities does Kora offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Kora's Population Health Engine aggregates de-identified records into real-time district and national dashboards. Features include disease surveillance, vaccination tracking, outbreak detection, NCD burden monitoring, maternal health indicators, and automated DHIS2/WHO reporting.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is the investment opportunity with Kora Health?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kora is building the infrastructure layer for African healthcare data — a $45B market by 2030. The company is currently raising to fund initial deployment across Nigeria, Kenya, and Ghana, targeting 54 countries with critical health data infrastructure gaps.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Hedvig+Letters+Serif:opsz@12..24&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
