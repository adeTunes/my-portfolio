import { about } from '@/app/data/profile'
import { certifications, education } from '@/app/data/experience'
import { skillGroups } from '@/app/data/skills'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Web &amp; mobile engineering
          </h2>

          <div className="mt-6 space-y-4">
            {about.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="eyebrow">Education</p>
            <p className="mt-2 text-sm">{education.degree}</p>
            <p className="text-sm text-faint">{education.school}</p>
          </div>

          <div className="mt-6">
            <p className="eyebrow">Certifications</p>
            <ul className="mt-2 space-y-1">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="eyebrow">Stack</p>
          <dl className="mt-4 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.name} className="border-t border-line pt-4">
                <dt className="text-sm font-medium">{group.name}</dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="tag">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
