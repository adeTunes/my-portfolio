import { featuredProjects } from '@/app/data/projects'
import ProjectMedia from './project-media'
import { ArrowIcon } from './icons'

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <header className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Selected work
          </h2>
          <p className="text-sm text-faint">
            Seven projects, most recent first. Everything else is in the{' '}
            <a href="#projects" className="link-underline">
              full index
            </a>
            .
          </p>
        </header>

        <div className="mt-10 space-y-14 sm:mt-14 sm:space-y-20">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              data-reveal
              className="grid gap-6 md:grid-cols-2 md:items-center md:gap-10"
            >
              <div className={index % 2 === 1 ? 'md:order-last' : undefined}>
                <ProjectMedia project={project} priority={index === 0} />
              </div>

              <div>
                <p className="eyebrow">
                  {project.year} · {project.org} · {project.role}
                </p>

                <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm text-faint">{project.context}</p>

                {project.metric ? (
                  <p className="mt-4 border-l-2 border-accent pl-3 text-sm font-medium">
                    {project.metric}
                  </p>
                ) : null}

                <p className="mt-4 leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                    >
                      Visit site
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {project.note ? (
                    <span className="text-faint">{project.note}</span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
