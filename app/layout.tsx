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
      <body>{children}</body>
    </html>
  )
}
