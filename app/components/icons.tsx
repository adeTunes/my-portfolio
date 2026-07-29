interface IconProps {
  className?: string
}

const base = 'h-4 w-4'

export function GitHubIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.34c-2.23.49-2.7-1.07-2.7-1.07-.36-.93-.89-1.18-.89-1.18-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

export function LinkedInIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M3.6 5.3H.8V16h2.8V5.3ZM2.2 0A1.7 1.7 0 1 0 2.2 3.4 1.7 1.7 0 0 0 2.2 0ZM16 9.9c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.95-2.95 1.62V5.3H6.45c.04.8 0 10.7 0 10.7H9.3v-6a2 2 0 0 1 .1-.7c.2-.55.7-1.1 1.6-1.1 1.1 0 1.6.85 1.6 2.1V16H16V9.9Z" />
    </svg>
  )
}

export function MailIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
      className={className}
    >
      <rect x="1" y="3" width="14" height="10" rx="1.5" />
      <path d="m1.5 4 6.5 4.5L14.5 4" />
    </svg>
  )
}

export function DownloadIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M8 1.5v8.5" />
      <path d="m4.5 6.5 3.5 3.5 3.5-3.5" />
      <path d="M2 12.5v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1" />
    </svg>
  )
}

export function ArrowIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M3 13 13 3" />
      <path d="M6 3h7v7" />
    </svg>
  )
}
