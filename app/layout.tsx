import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kora Health — Africa's Clinical Intelligence Engine",
  description:
    'Kora synthesizes fragmented patient data from multiple EMRs, paper records, and digital sources into decision-ready clinical intelligence. Works offline. Built for Africa.',
  keywords:
    'EMR Africa, healthcare AI, clinical intelligence, population health, offline healthcare, digitization, DHIS2',
  openGraph: {
    title: "Kora Health — Africa's Clinical Intelligence Engine",
    description:
      'Synthesizing fragmented patient data into clinical intelligence for Africa.',
    type: 'website',
  },
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
      </head>
      <body>{children}</body>
    </html>
  )
}
