import type { Metadata } from 'next'
import './globals.css'
import ErrorBoundaryWrapper from '@/components/ErrorBoundaryWrapper'

export const metadata: Metadata = {
  title: {
    default: 'Usama Mustafa - Embedded QA Engineer',
    template: '%s | Usama Mustafa',
  },
  description:
    'Embedded QA Engineer with a B.Sc. in Electrical Engineering and M.Sc. in Information Security from NUST. Experienced in hardware-software integration testing, JIRA bug tracking, regression testing, and ISO 27001 compliance.',
  keywords: [
    'Embedded QA Engineer',
    'Quality Assurance',
    'Embedded Systems',
    'Hardware Software Integration',
    'JIRA',
    'Regression Testing',
    'ISO 27001',
    'Electrical Engineering',
    'Information Security',
    'NUST',
    'Test Automation',
    'ELD Testing',
  ],
  authors: [{ name: 'Usama Mustafa' }],
  creator: 'Usama Mustafa',
  publisher: 'Usama Mustafa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://usamamustafa.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Usama Mustafa',
    title: 'Usama Mustafa - Embedded QA Engineer',
    description:
      'Embedded QA Engineer with B.Sc. EE and M.Sc. Information Security from NUST. Expert in hardware-software integration testing, JIRA, regression testing, and embedded systems QA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Usama Mustafa - Post-Quantum Cryptography Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usama Mustafa - Embedded QA Engineer',
    description:
      'Embedded QA Engineer with B.Sc. EE and M.Sc. Information Security. Expert in hardware-software integration testing and embedded systems QA.',
    images: ['/og-image.jpg'],
    creator: '@usamamustafa',
  },
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
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        <ErrorBoundaryWrapper>
          {children}
        </ErrorBoundaryWrapper>
      </body>
    </html>
  )
}

