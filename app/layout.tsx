import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { profile } from './data/profile'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const title = 'Babatunde Adekunle — Software Engineer | Web & Mobile'
const description =
  'Software engineer in Lagos, Nigeria building web and mobile products with React, React Native, Next.js, TypeScript and Node.js.'

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: [
    'Software Engineer',
    'React',
    'React Native',
    'Expo',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'Mobile Developer',
    'Frontend Developer',
    'Full-Stack Developer',
    'Lagos',
    'Nigeria',
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description:
      'Software engineer building web and mobile products with React, React Native, Next.js and Node.js.',
  },
  robots: { index: true, follow: true },
  icons: [
    { rel: 'icon', url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    { rel: 'icon', url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
  ],
  manifest: '/site.webmanifest',
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Software Engineer',
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    'React',
    'React Native',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
  ],
}

/*
 * Runs before first paint so reveal animations never flash content in and back
 * out. Opts in only where IntersectionObserver exists and motion is welcome —
 * everywhere else the CSS leaves content visible.
 */
const revealBootstrap = `(function(){try{if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('js-reveal')}}catch(e){}})()`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      /* revealBootstrap adds a class here before hydration. */
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
