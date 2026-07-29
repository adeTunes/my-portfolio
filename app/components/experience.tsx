import { experiences } from '@/app/data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="shell">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Experience
        </h2>

        <div className="mt-10 space-y-10">
          {experiences.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              data-reveal
              className="grid gap-4 border-t border-line pt-6 md:grid-cols-[14rem_1fr] md:gap-10"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                  {job.period}
                </p>
                <p className="mt-2 font-medium tracking-tight">{job.company}</p>
                <p className="text-sm text-muted">{job.role}</p>
                <p className="mt-1 text-xs text-faint">{job.arrangement}</p>
              </div>

              <div>
                {job.context ? (
                  <p className="mb-3 text-sm text-faint">{job.context}</p>
                ) : null}

                <ul className="space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-faint"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <li key={tech} className="tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
