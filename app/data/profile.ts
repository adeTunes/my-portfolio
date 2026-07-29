export interface Stat {
  value: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
}

export const profile = {
  name: 'Babatunde Adekunle',
  title: 'Software Engineer',
  tagline:
    'Building web and mobile products with React, React Native, Next.js and Node.js.',
  availability: 'Open to remote roles in the EU and relocation to Germany.',
  location: 'Lagos, Nigeria',
  email: 'babatundeadebowale1998@gmail.com',
  phone: '+234 81 462 371 67',
  siteUrl: 'https://adekunle.vercel.app',
  cvPath: '/Babatunde-Adekunle-CV.pdf',
  linkedin: 'https://www.linkedin.com/in/adekunle-babatunde',
  github: 'https://github.com/adeTunes',
} as const

export const stats: Stat[] = [
  { value: '6+', label: 'Years building software' },
  { value: '23', label: 'Projects shipped' },
  { value: '2', label: 'Apps in production stores' },
  { value: '4,000+', label: 'Users on PiPn at launch' },
]

export const about = [
  'With over 6 years of experience, I build web applications with TypeScript, React and Next.js, and cross-platform mobile apps with React Native and Expo, shipped to the Google Play Store and TestFlight.',
  'On the backend I work with Node.js and NestJS, PostgreSQL and Redis, building the APIs and background jobs behind the products I build. I like owning a feature from design through to deployment.',
  'Right now that means a UK online pharmacy, an AI-assisted accounting SaaS, and a Nigerian B2B retail commerce platform — working with distributed teams across the UK, Europe, Asia and Africa.',
]

export const socials: SocialLink[] = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]
