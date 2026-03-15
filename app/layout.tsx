import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Thirthala Rajkumar | AI & Backend Engineer',
  description: 'Portfolio of Thirthala Rajkumar - AI/ML Engineer, Backend Developer specializing in Python, FastAPI, Machine Learning, and Cloud Technologies',
  keywords: ['AI Engineer', 'Machine Learning', 'Backend Developer', 'Python', 'FastAPI', 'Deep Learning', 'NLP', 'LLM'],
  authors: [{ name: 'Thirthala Rajkumar' }],
  openGraph: {
    title: 'Thirthala Rajkumar | AI & Backend Engineer',
    description: 'Portfolio of Thirthala Rajkumar - AI/ML Engineer, Backend Developer',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
