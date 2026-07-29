import { profile } from '@/app/data/profile'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Get in touch
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {profile.availability} The fastest way to reach me is email — I reply
          to everything.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block break-all text-xl font-medium tracking-tight text-accent hover:underline sm:text-2xl"
        >
          {profile.email}
        </a>

        <div className="mt-8 flex flex-wrap gap-3">
          <ContactLink href={profile.github} label="GitHub">
            <GitHubIcon />
          </ContactLink>
          <ContactLink href={profile.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </ContactLink>
          <ContactLink href={`mailto:${profile.email}`} label="Email">
            <MailIcon />
          </ContactLink>
          <ContactLink href={profile.cvPath} label="Download CV" download>
            <DownloadIcon />
          </ContactLink>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  label,
  download,
  children,
}: {
  href: string
  label: string
  download?: boolean
  children: React.ReactNode
}) {
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded border border-line px-3 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
    >
      {children}
      {label}
    </a>
  )
}
