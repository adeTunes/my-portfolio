'use client'

import { useEffect } from 'react'

/**
 * Observes `[data-reveal]` elements and fades them in.
 *
 * The `js-reveal` class that hides them is set by a blocking inline script in
 * the document head (see layout.tsx) so nothing flashes in and back out. That
 * script only opts in when IntersectionObserver exists and the visitor has not
 * asked for reduced motion — so if this component never mounts, the page is
 * still fully readable.
 */
export default function RevealScript() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('js-reveal')) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((el) => observer.observe(el))

    // Safety net: if anything goes wrong, reveal everything after a beat.
    const timeout = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'))
    }, 2500)

    return () => {
      observer.disconnect()
      window.clearTimeout(timeout)
    }
  }, [])

  return null
}
