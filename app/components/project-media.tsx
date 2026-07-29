import Image from 'next/image'
import type { Project } from '@/app/data/projects'

interface ProjectMediaProps {
  project: Project
  priority?: boolean
}

/**
 * Screenshot when there is one, a typographic panel when there is not.
 * Never renders a broken image slot.
 */
export default function ProjectMedia({ project, priority }: ProjectMediaProps) {
  if (!project.image) {
    return (
      <div className="flex aspect-[16/10] flex-col justify-between rounded border border-line bg-surface p-6">
        <span className="eyebrow">{project.org}</span>
        <span className="font-mono text-xl tracking-tight text-muted">
          {project.name}
        </span>
        <span className="text-xs text-faint">{project.context}</span>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded border border-line bg-surface">
      <Image
        src={project.image}
        alt={`${project.name} interface`}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className={
          project.imageFit === 'contain'
            ? 'object-contain p-4'
            : 'object-cover object-top'
        }
      />
    </div>
  )
}
