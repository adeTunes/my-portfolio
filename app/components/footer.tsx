import { profile } from '@/app/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="shell flex flex-wrap items-center justify-between gap-3 text-xs text-faint">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>Built with Next.js and TailwindCSS.</p>
      </div>
    </footer>
  )
}
