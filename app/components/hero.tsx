import Image from 'next/image'
import { profile, stats } from '@/app/data/profile'
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from './icons'

const currentWork = [
  {
    product: 'Medicinex',
    detail: 'UK online pharmacy · storefront, admin and AI shopping assistant',
    href: 'https://medicinex.co.uk',
  },
  {
    product: 'Gopaddi Books',
    detail: 'AI-assisted accounting SaaS · frontend and SSE assistant interface',
    href: 'https://books.gopaddi.com',
  },
  {
    product: 'Oda',
    detail: 'B2B retail commerce · internal platform and RBAC system',
    href: 'https://oda.com.ng',
  },
]

export default function Hero() {
  return (
    <section id="top" className="shell pb-14 pt-14 sm:pb-20 sm:pt-20">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
        <div className="max-w-2xl">
          <p className="eyebrow">
            {profile.title} · {profile.location}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            {profile.tagline}
          </p>

          <p className="mt-3 flex items-start gap-2 text-sm text-muted">
            <span
              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            {profile.availability}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded bg-ink px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              See selected work
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon />
              Download CV
            </a>
            <div className="flex items-center gap-1">
              <IconLink href={profile.github} label="GitHub">
                <GitHubIcon />
              </IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn">
                <LinkedInIcon />
              </IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email">
                <MailIcon />
              </IconLink>
            </div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <Image
            src="/tunde.jpg"
            alt={profile.name}
            width={160}
            height={160}
            priority
            className="h-28 w-28 rounded-full border border-line object-cover sm:h-40 sm:w-40"
          />
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse bg-bg px-4 py-5"
          >
            {/* Reversed so the label reads first to assistive tech, value first visually. */}
            <dt className="mt-1 text-xs leading-snug text-faint">
              {stat.label}
            </dt>
            <dd className="text-2xl font-semibold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <p className="eyebrow">Currently building</p>
        <ul className="mt-3 divide-y divide-line border-y border-line">
          {currentWork.map((item) => (
            <li key={item.product}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 transition-colors hover:text-accent"
              >
                <span className="font-medium">{item.product}</span>
                <span className="text-sm text-muted group-hover:text-accent">
                  {item.detail}
                </span>
                <ArrowIcon className="ml-auto h-3.5 w-3.5 shrink-0 self-center text-faint transition-colors group-hover:text-accent" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const external = !href.startsWith('mailto:')

  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex h-9 w-9 items-center justify-center rounded text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {children}
    </a>
  )
}
