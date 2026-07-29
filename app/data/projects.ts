export type ProjectCategory =
  | 'Featured'
  | 'Mobile Applications'
  | 'Backend'
  | 'Admin & Fintech'
  | 'Telegram Mini Apps'
  | 'Tools & Platforms'

export type FilterValue = 'All' | ProjectCategory

export const FILTERS: FilterValue[] = [
  'All',
  'Featured',
  'Mobile Applications',
  'Backend',
  'Admin & Fintech',
  'Telegram Mini Apps',
  'Tools & Platforms',
]

export interface Project {
  slug: string
  name: string
  /** One line on what the product is — the scan-level answer. */
  context: string
  /** What was actually built. Canonical copy, kept in sync with the CV. */
  description: string
  /** Hard number or shipping fact. Omitted when nothing is defensible. */
  metric?: string
  role: string
  org: string
  year: string
  stack: string[]
  categories: ProjectCategory[]
  featuredOrder?: number
  image?: string
  imageFit?: 'contain' | 'cover'
  liveLink?: string
  /** Shown when a link is missing or the app is not publicly reachable. */
  note?: string
}

export const projects: Project[] = [
  {
    slug: 'medicinex',
    name: 'Medicinex',
    context: 'UK online pharmacy',
    description:
      'A UK online pharmacy platform. I built the customer storefront and integrated an AI shopping assistant that lets customers search treatments, manage their cart, ask pharmacy questions and complete checkout inside the chat interface, working within the compliance requirements of a regulated healthcare product.',
    metric: 'AI assistant shipped to production',
    role: 'Software Engineer',
    org: 'Candour IT',
    year: '2025 — Present',
    stack: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Shadcn/UI',
      'Node.js',
      'Stripe',
      'Agentic AI',
    ],
    categories: ['Featured', 'Admin & Fintech'],
    featuredOrder: 1,
    image: '/medicinex.png',
    liveLink: 'https://medicinex.co.uk',
  },
  {
    slug: 'gopaddi-books',
    name: 'Gopaddi Books',
    context: 'AI-assisted accounting SaaS',
    description:
      'An AI-assisted accounting SaaS. I built the frontend covering the chart of accounts, sales, invoicing and reporting, plus the client-side validation layer for document upload — detecting duplicate entries within a file, automatically matching uploaded column headings to the expected schema, and handling empty files before anything reaches the server. I also built the interface for an AI assistant over the user’s accounting data, consuming a server-sent events stream for token-by-token responses.',
    metric: 'Second production AI feature',
    role: 'Frontend Engineer',
    org: 'Gopaddi (Voyatek Group)',
    year: '2025 — Present',
    stack: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Shadcn/UI',
      'Server-Sent Events',
    ],
    categories: ['Featured', 'Admin & Fintech', 'Tools & Platforms'],
    featuredOrder: 2,
    liveLink: 'https://books.gopaddi.com',
  },
  {
    slug: 'medicinex-admin',
    name: 'Medicinex Admin',
    context: 'Admin platform for a regulated UK pharmacy',
    description:
      'The internal admin platform behind Medicinex, covering the operational side of a regulated UK pharmacy. I built the approval workflows for prescribers, clinical questionnaires and Yoti identity verification; catalogue and inventory management with low-stock tracking; prescription uploads, orders and video consultation bookings; and a business analytics dashboard reporting revenue, conversion, repeat purchase rate and top products across configurable date ranges. Also includes content tooling for blog posts, banners, FAQs, legal pages, email templates and broadcast email, with audit logging throughout.',
    metric: 'Approvals, Yoti KYC, analytics and CMS in one platform',
    role: 'Software Engineer',
    org: 'Candour IT',
    year: '2025 — Present',
    stack: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Shadcn/UI',
      'Node.js',
      'Tanstack Query',
    ],
    categories: ['Featured', 'Admin & Fintech'],
    featuredOrder: 3,
    image: '/medicinex-admin.png',
    liveLink: 'https://admin.medicinex.co.uk',
    note: 'Sign-in required',
  },
  {
    slug: 'pipn',
    name: 'PiPn',
    context: 'Trading community mobile app',
    description:
      'A trading community mobile app, live on the Google Play Store with 4,000+ registered users. I built the React Native app and worked on the Node.js backend with PostgreSQL, Redis and BullMQ on AWS. Features include a social feed, trade journal, currency-pair tracking with live TradingView charts, real-time chat and an in-app marketplace.',
    metric: '4,000+ registered users on Google Play',
    role: 'Software Engineer',
    org: 'PIPN',
    year: '2025 — 2026',
    stack: [
      'React Native',
      'Expo',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'AWS',
    ],
    categories: ['Featured', 'Mobile Applications', 'Backend'],
    featuredOrder: 4,
    image: '/pipn.png',
    imageFit: 'contain',
    liveLink: 'https://pipn.app',
  },
  {
    slug: 'oda-admin',
    name: 'Oda Admin',
    context: 'Internal platform for a B2B retail commerce network',
    description:
      'The internal platform behind Oda, a B2B retail commerce network. I built tools managing merchants, sales representatives, field operations, products, inventory and order workflows, and designed and led implementation of the role-based access control system giving scoped permissions to sales, operations and management teams.',
    metric: 'Designed and led the RBAC system across the platform',
    role: 'Frontend Engineer',
    org: 'Oda Nigeria',
    year: '2025 — Present',
    stack: [
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Tanstack Query',
      'Radix UI',
    ],
    categories: ['Featured', 'Admin & Fintech'],
    featuredOrder: 5,
    image: '/oda-admin.png',
    liveLink: 'https://uat-dashboard.mobiletraderv3.com/login',
    note: 'Sign-in required',
  },
  {
    slug: 'arc-k-fusion',
    name: 'ARC & K FUSION',
    context: 'Full-stack e-commerce site for luxury watches',
    description:
      'A full-stack e-commerce site for luxury watches. I built the backend with NestJS and MongoDB and the frontend with React and Next.js.',
    metric: 'Built end to end, backend and frontend',
    role: 'Full-Stack Engineer',
    org: 'Freelance',
    year: '2024',
    stack: ['NestJS', 'MongoDB', 'React', 'Next.js', 'Cloudinary'],
    categories: ['Featured', 'Backend', 'Tools & Platforms'],
    featuredOrder: 6,
    image: '/arcfusion.png',
    liveLink: 'https://www.arckfusion.com/',
  },
  {
    slug: 'ghoolf',
    name: 'Ghoolf',
    context: 'Mobile app for a multi-club golf competition platform',
    description:
      'A mobile application for a golf club platform. I built video capture, preview and upload flows with progress tracking and AWS S3 integration. The app features OAuth-based authentication and was released to TestFlight.',
    metric: 'Released to TestFlight',
    role: 'Mobile Engineer',
    org: 'Ghoolf Lab FZCO, Dubai',
    year: '2024 — 2025',
    stack: [
      'React Native',
      'Expo',
      'Nativewind',
      'OAuth (Apple & Google)',
      'AWS S3',
    ],
    categories: ['Featured', 'Mobile Applications'],
    featuredOrder: 7,
    image: '/ghoolf.png',
    imageFit: 'contain',
    note: 'TestFlight build — no public link',
  },
  {
    slug: 'gopaddi',
    name: 'Gopaddi',
    context: 'Travel and payments platform',
    description:
      'A travel and payments platform. I maintain the frontend, translating Figma designs into responsive interfaces with TailwindCSS and Shadcn/UI, integrating live REST data, and improving load performance through code-splitting, lazy loading and image optimisation. I also built the platform’s HTML email templates to match exact brand styling across email clients, and built the chat feature on the platform.',
    role: 'Frontend Engineer',
    org: 'Gopaddi (Voyatek Group)',
    year: '2025 — Present',
    stack: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Shadcn/UI',
      'Tanstack Query',
      'WebSockets',
      'Paystack',
    ],
    categories: ['Admin & Fintech', 'Tools & Platforms'],
    image: '/gopaddi.png',
    liveLink: 'https://gopaddi.com',
  },
  {
    slug: 'gopaddi-supplier-host',
    name: 'GoPaddi Supplier Host',
    context: 'Multi-vertical supplier dashboard',
    description:
      'A multi-vertical supplier dashboard for GoPaddi, covering hotels, restaurants, nightlife, shortlets and workspaces. I built the frontend for inventory, bookings, wallet and settings management in React, Vite, TypeScript and TailwindCSS, and shipped the vacation rental (shortlet) vertical to production end to end.',
    metric: 'Shipped the shortlet vertical end to end',
    role: 'Frontend Engineer',
    org: 'Gopaddi (Voyatek Group)',
    year: '2025 — Present',
    stack: ['React', 'Vite', 'TypeScript', 'TailwindCSS'],
    categories: ['Admin & Fintech', 'Tools & Platforms'],
    liveLink: 'https://supplier.gopaddi.com',
  },
  {
    slug: 'pipn-admin',
    name: 'PiPn Admin',
    context: 'Admin platform behind the PiPn trading community',
    description:
      'The admin platform behind PiPn. I built the tooling for managing users, communities, posts and conversations, escrow and withdrawal approvals, transactions, ads and referrals, plus role-based admin permissions with audit logging across actions.',
    role: 'Software Engineer',
    org: 'PIPN',
    year: '2025 — 2026',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis'],
    categories: ['Admin & Fintech', 'Backend'],
    note: 'Internal platform — no public link',
  },
  {
    slug: 'cudie-admin',
    name: 'Cudie Admin',
    context: 'Fintech administrative portal',
    description:
      'A fintech administrative portal. I built the transaction management interface and KYC verification workflows used for operational oversight across the platform.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2024',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Mantine UI', 'Formik', 'i18next'],
    categories: ['Admin & Fintech'],
    image: '/cudie.png',
    liveLink: 'https://cudie-admin.afexnigeria.com/',
  },
  {
    slug: 'bankx',
    name: 'BankX Admin Portal',
    context: 'Administration portal for a digital banking product',
    description:
      'An administration portal for a digital banking product. I built the management modules for borrower profiles, loan lifecycle tracking, and permission-based access control.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2024',
    stack: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Mantine UI',
      'Firebase',
      'Paystack',
    ],
    categories: ['Admin & Fintech'],
    image: '/bankx.png',
    liveLink: 'https://bankx.afex.vercel.app/',
  },
  {
    slug: 'afex-hrms',
    name: 'AFEX Talent Management Portal',
    context: 'HRMS used across AFEX',
    description:
      'An HRMS platform used across AFEX. I built the frontend supporting distinct workflows for admins, supervisors and staff, covering appraisals, leave management and organisational surveys.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2025',
    stack: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Mantine UI',
      'WebSockets',
      'Recharts',
    ],
    categories: ['Admin & Fintech'],
    image: '/hrms.jpeg',
    liveLink: 'https://talentmanagement.africaexchange.com',
  },
  {
    slug: 'bms',
    name: 'Budget Management System',
    context: 'Financial control system for AFEX',
    description:
      'A financial control system for AFEX. I built the organisational structure management, approval limit logic and request tracking workflows used to oversee multi-departmental spending.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2025',
    stack: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Mantine UI',
      'WebSockets',
      'Chart.js',
    ],
    categories: ['Admin & Fintech'],
    image: '/bms.jpeg',
    liveLink: 'https://bms.africaexchange.com',
    note: 'Desktop only — not responsive',
  },
  {
    slug: 'uacs',
    name: 'Unified Access Control System',
    context: 'Identity and access management for AFEX',
    description:
      'An identity and access management dashboard for AFEX. I built the centralised interface for managing application authorisations and staff permissions across AFEX products, supporting SSO across the ecosystem.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2025',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Mantine UI'],
    categories: ['Admin & Fintech'],
    image: '/uacs.png',
    liveLink: 'https://uacs.africaexchange.com',
    note: 'Desktop only — not responsive',
  },
  {
    slug: 'cgs',
    name: 'Commodity Grading System',
    context: 'Quality control for agricultural commodities',
    description:
      'A quality control system for agricultural commodities. I built the reporting dashboard, working with ML engineers to surface computer-vision grading results from the mobile application as real-time analytics.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2024',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Mantine UI', 'Recharts'],
    categories: ['Admin & Fintech', 'Tools & Platforms'],
    image: '/cgs.png',
    liveLink: 'https://cgs-admin.netlify.app/p',
    note: 'Desktop only — not responsive',
  },
  {
    slug: 'mapx',
    name: 'MAPX',
    context: 'Geospatial analytics for agriculture',
    description:
      'A geospatial analytics platform for the agricultural sector. I integrated Google Maps visualisations and Highcharts heatmaps to help organisations monitor farmland productivity and geographical distribution.',
    role: 'Frontend Engineer',
    org: 'AFEX Nigeria',
    year: '2023 — 2024',
    stack: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Mantine UI',
      'Highcharts',
      'Google Maps API',
    ],
    categories: ['Tools & Platforms'],
    image: '/mapx.jpeg',
    liveLink: 'https://mapx.vercel.app',
  },
  {
    slug: 'julswap-terminal',
    name: 'Julswap AI Terminal',
    context: 'Blockchain interface for on-chain interactions',
    description:
      'A blockchain interface for on-chain interactions. I built the terminal frontend supporting asset transfers, liquidity provisioning and NFT minting across BSC and Sonic.',
    role: 'Frontend Engineer',
    org: 'Freelance',
    year: '2025',
    stack: ['React', 'Next.js', 'TailwindCSS', 'LangChain', 'Julswap Agent Kit'],
    categories: ['Tools & Platforms'],
    image: '/julswap-terminal.png',
    liveLink: 'https://terminal.julswap.com/',
  },
  {
    slug: 'yciyc',
    name: 'YCIYC',
    context: 'TON token launch platform via Telegram bot',
    description:
      'A platform for creating and launching tokens on the TON blockchain through a Telegram bot. I built the frontend, including the token detail view showing real-time price data, candlestick charts, swap history and holder breakdown.',
    role: 'Frontend Engineer',
    org: 'Genx Technologies',
    year: '2024',
    stack: ['React', 'Next.js', 'TailwindCSS', 'Mantine UI'],
    categories: ['Telegram Mini Apps'],
    image: '/yciyc.jpeg',
    liveLink: 'https://dev-test.yciyc.com/',
  },
  {
    slug: 'surdatics',
    name: 'Surdatics',
    context: 'Telegram Mini App for blockchain research surveys',
    description:
      'A Telegram Mini App for blockchain research surveys. I built the NestJS backend and the React frontend connecting survey participants with researchers.',
    role: 'Full-Stack Engineer',
    org: 'KPA Tech',
    year: '2024',
    stack: ['NestJS', 'MongoDB', 'Mongoose', 'React', 'Next.js', 'TailwindCSS'],
    categories: ['Backend', 'Telegram Mini Apps'],
    image: '/surdatics.png',
    liveLink: 'https://t.me/surdatics_bot',
  },
  {
    slug: 'bpay',
    name: 'BPay',
    context: 'Gamified play-to-earn Telegram mini app',
    description:
      'A gamified play-to-earn Telegram mini app. I built the NestJS backend handling reward distribution and community engagement, integrated with the Boundless Pay platform.',
    role: 'Backend Engineer',
    org: 'KPA Tech',
    year: '2024',
    stack: ['NestJS', 'MongoDB', 'Mongoose', 'React', 'Next.js'],
    categories: ['Backend', 'Telegram Mini Apps'],
    image: '/bpay.png',
    imageFit: 'contain',
    liveLink: 'https://t.me/bpay_mini_bot',
  },
  {
    slug: 'afriq',
    name: 'Afriq',
    context: 'Telegram mini app for Afriq Exchange',
    description:
      'The Telegram mini app platform for Afriq Exchange (AfriqX), built around the AAST token on Binance Smart Chain. I built the NestJS backend and React frontend.',
    role: 'Full-Stack Engineer',
    org: 'KPA Tech',
    year: '2024',
    stack: ['NestJS', 'MongoDB', 'Mongoose', 'React', 'Next.js'],
    categories: ['Backend', 'Telegram Mini Apps'],
    image: '/afriq.png',
    liveLink: 'https://t.me/AfriqToken_bot',
  },
  {
    slug: 'tonnie-coin',
    name: 'Tonnie Coin',
    context: 'Gamified investment platform on Telegram',
    description:
      'A gamified investment platform on Telegram. I built the backend with NestJS, using BullMQ and scheduled jobs for reward distribution and transaction processing.',
    role: 'Backend Engineer',
    org: 'KPA Tech',
    year: '2024',
    stack: ['NestJS', 'MongoDB', 'Mongoose', 'BullMQ', 'Cron', 'React'],
    categories: ['Backend', 'Telegram Mini Apps'],
    image: '/tonnie.png',
    liveLink: 'https://t.me/TonnieTrade_bot',
  },
]

export const featuredProjects = projects
  .filter((project) => project.categories.includes('Featured'))
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))

export function projectsFor(filter: FilterValue): Project[] {
  if (filter === 'All') return projects
  return projects.filter((project) => project.categories.includes(filter))
}

export function countFor(filter: FilterValue): number {
  return projectsFor(filter).length
}
