import type { Metadata } from 'next'
import './globals.css'
import ErrorBoundaryWrapper from '@/components/ErrorBoundaryWrapper'

export const metadata: Metadata = {
  title: {
    default: 'Usama Mustafa - PhD Researcher in Post-Quantum Cryptography',
    template: '%s | Usama Mustafa',
  },
  description:
    'PhD student at NUST researching Post-Quantum Cryptography to make encryption stronger. Specialized in quantum-resistant algorithms, information security, and cryptographic protocols.',
  keywords: [
    'Post-Quantum Cryptography',
    'PhD Research',
    'Quantum Computing',
    'Cryptography',
    'Information Security',
    'NUST',
    'Encryption',
    'Quantum-Resistant Algorithms',
    'Cybersecurity Research',
    'Academic Research',
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
    title: 'Usama Mustafa - PhD Researcher in Post-Quantum Cryptography',
    description:
      'PhD student at NUST researching Post-Quantum Cryptography to make encryption stronger. Specialized in quantum-resistant algorithms and information security.',
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
    title: 'Usama Mustafa - PhD Researcher in Post-Quantum Cryptography',
    description:
      'PhD student at NUST researching Post-Quantum Cryptography to make encryption stronger.',
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

