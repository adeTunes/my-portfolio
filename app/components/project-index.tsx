'use client'

import { useState } from 'react'
import {
  FILTERS,
  countFor,
  projectsFor,
  type FilterValue,
} from '@/app/data/projects'
import { ArrowIcon } from './icons'

export default function ProjectIndex() {
  const [filter, setFilter] = useState<FilterValue>('All')
  const visible = projectsFor(filter)

  return (
    <section id="projects" className="section">
      <div className="shell">
        <header className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            All projects
          </h2>
          <p className="text-sm text-faint">
            {visible.length} of {countFor('All')} shown
          </p>
        </header>

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mt-6 flex flex-wrap gap-2"
        >
          {FILTERS.map((value) => {
            const active = value === filter
            return (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(value)}
                className={
                  active
                    ? 'rounded border border-ink bg-ink px-3 py-1.5 text-sm text-bg'
                    : 'rounded border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-ink hover:text-ink'
                }
              >
                {value}
                <span className="ml-1.5 font-mono text-[11px] opacity-60">
                  {countFor(value)}
                </span>
              </button>
            )
          })}
        </div>

        <ul className="mt-8 divide-y divide-line border-y border-line">
          {visible.map((project) => (
            <li key={project.slug} className="py-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-medium tracking-tight">{project.name}</h3>
                <span className="text-sm text-faint">{project.context}</span>
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                  >
                    Visit
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="ml-auto text-xs text-faint">
                    {project.note ?? 'No public link'}
                  </span>
                )}
              </div>

              <p className="mt-1 font-mono text-xs text-faint">
                {project.year} · {project.org} · {project.role}
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
