import { profile } from '@/app/data/profile'
import { DownloadIcon } from './icons'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 rounded border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon />
            CV
          </a>
        </nav>

        {/* Native disclosure — mobile navigation with no client JS. */}
        <details className="relative md:hidden [&[open]_.menu-open]:hidden [&[open]_.menu-close]:block">
          <summary className="flex cursor-pointer list-none items-center rounded border border-line px-3 py-1.5 text-sm [&::-webkit-details-marker]:hidden">
            <span className="menu-open">Menu</span>
            <span className="menu-close hidden">Close</span>
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded border border-line bg-bg p-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded px-3 py-2 text-sm text-muted hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download
              className="block rounded px-3 py-2 text-sm text-accent hover:bg-surface"
            >
              Download CV
            </a>
          </div>
        </details>
      </div>
    </header>
  )
}
