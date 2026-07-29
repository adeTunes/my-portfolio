export interface Experience {
  company: string
  role: string
  period: string
  arrangement: string
  context?: string
  highlights: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Candour IT',
    role: 'Software Engineer',
    period: 'Sep 2025 — Present',
    arrangement: 'Contract · Remote (UK)',
    context: 'Medicinex — UK online pharmacy',
    highlights: [
      'Joined as a frontend engineer and took on full-stack responsibility in March 2026, covering backend API and system-integration work.',
      'Build and maintain the customer storefront and the internal admin platform, including payment, product, prescription and order integrations.',
      'Integrated an agentic AI shopping assistant that lets customers search treatments, manage their cart, ask pharmacy questions and check out inside the chat interface.',
      'Built compliance workflows for prescriber approvals, clinical questionnaire review, Yoti identity verification, prescription uploads and video consultation bookings.',
      'Built the business analytics dashboard covering revenue, orders, conversion, repeat purchase rate, top products and stock levels.',
    ],
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn/UI', 'Node.js'],
  },
  {
    company: 'Gopaddi (Voyatek Group)',
    role: 'Frontend Engineer',
    period: 'Sep 2025 — Present',
    arrangement: 'Full-time · Lagos, Nigeria',
    context: 'Travel platform, accounting SaaS and supplier dashboard',
    highlights: [
      'Built the frontend of Gopaddi Books, an AI-assisted accounting SaaS covering the chart of accounts, sales, invoicing and reporting.',
      'Built its client-side upload validation — duplicate detection within a file, column-heading matching against the expected schema, and empty-file handling.',
      'Built the interface for an AI assistant over the user’s accounting data, consuming a server-sent events stream for token-by-token responses.',
      'Built the frontend of Supplier Host, a multi-vertical supplier dashboard, and shipped the vacation rental vertical to production end to end.',
      'Built the chat feature on the travel platform and maintain the frontend, improving load performance through code-splitting, lazy loading and image optimisation.',
    ],
    stack: ['React', 'Next.js', 'Vite', 'TypeScript', 'TailwindCSS', 'SSE'],
  },
  {
    company: 'Oda Nigeria (Great Brands Nigeria Ltd)',
    role: 'Frontend Engineer',
    period: 'Dec 2025 — Present',
    arrangement: 'Contract · Lagos, Nigeria',
    context: 'Oda — B2B retail commerce platform',
    highlights: [
      'Build and maintain Oda Admin, the internal platform managing merchants, sales representatives, field operations, products, inventory and order workflows across a nationwide retail network.',
      'Designed and led the end-to-end implementation of the role-based access control system, giving scoped permissions to sales, operations and management teams.',
      'Build dashboards and workflow tools supporting merchant ordering, restocking and same-day delivery operations.',
      'Work with distributed engineering teams across Nigeria, Sri Lanka and the UK.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Tanstack Query'],
  },
  {
    company: 'PIPN',
    role: 'Software Engineer',
    period: 'Dec 2025 — May 2026',
    arrangement: 'Contract · Remote',
    context: 'PIPN — trading community platform',
    highlights: [
      'Built the PIPN mobile app in React Native and Expo; launched on the Google Play Store in March 2026 and reached 4,000+ registered users within months.',
      'Built the admin platform for users, communities, posts, escrow and withdrawal approvals, transactions, ads and referrals, with role-based permissions and audit logging.',
      'Worked on the Node.js backend with PostgreSQL, Redis on AWS ElastiCache and BullMQ for asynchronous jobs, deployed on EC2 with Docker.',
      'Built the social feed, trade journal, currency-pair tracking with live TradingView charts, in-app marketplace with RevenueCat purchases, real-time chat and Google OAuth.',
    ],
    stack: [
      'React Native',
      'Expo',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'AWS',
    ],
  },
  {
    company: 'AFEX Nigeria',
    role: 'Frontend Engineer',
    period: 'Jan 2023 — Aug 2025',
    arrangement: 'Full-time · Ibadan, Nigeria',
    context: 'Commodities exchange and agricultural technology',
    highlights: [
      'Built internal platforms used across the business, including an HRMS covering appraisals, leave and organisational surveys with distinct admin, supervisor and staff workflows.',
      'Built a budget management system handling approval limits and multi-department spend tracking.',
      'Worked on a unified access control dashboard managing SSO authorisations and staff permissions across AFEX applications.',
      'Built the reporting dashboard for a commodity grading system, working with ML engineers to surface computer-vision grading results from the mobile application.',
      'Built a geospatial analytics platform using Google Maps and Highcharts to visualise farmland productivity and geographical distribution.',
    ],
    stack: ['React', 'Next.js', 'Mantine UI', 'Recharts', 'Highcharts'],
  },
  {
    company: 'Self-employed',
    role: 'Freelance Software Engineer',
    period: 'May 2023 — Sep 2025',
    arrangement: 'Remote · Nigeria, India, UAE, UK',
    highlights: [
      'Ghoolf Lab FZCO (Dubai) — React Native app for a multi-club golf competition platform, with OAuth, video capture and upload to AWS S3, released to TestFlight.',
      'KPA Tech — Telegram mini apps including Tonk, Xmeme, Rial, Surdatics, BPay, Afriq and Tonnie Coin, writing much of the NestJS and MongoDB backend independently, including BullMQ and scheduled jobs.',
      'Genx Technologies — frontend for YCIYC, a TON blockchain token launch platform delivered through a Telegram bot.',
      'ARC & K FUSION — full-stack e-commerce site for luxury watches, built end to end with a NestJS and MongoDB backend and a React and Next.js frontend.',
    ],
    stack: ['React Native', 'NestJS', 'MongoDB', 'React', 'Next.js', 'AWS S3'],
  },
  {
    company: 'AFEX Nigeria',
    role: 'Frontend Developer, Internship',
    period: 'Jun 2022 — Dec 2022',
    arrangement: 'Ipokia, Ogun State, Nigeria',
    highlights: [
      'Built internal web tools with React and Mantine UI alongside the engineering team.',
    ],
    stack: ['React', 'Mantine UI'],
  },
]

export const education = {
  degree: 'B.Sc. Agricultural Economics and Extension Services',
  school: 'Ekiti State University',
}

export const certifications = [
  'JavaScript: The Hard Parts v2 — Frontend Masters',
  'SQL Certificate — 365 Data Science',
]
