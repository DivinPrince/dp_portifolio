import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let observer
    let cancelled = false

    const connect = () => {
      if (cancelled) return

      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .sort((a, b) => a.offsetTop - b.offsetTop)

      if (!elements.length) {
        requestAnimationFrame(connect)
        return
      }

      const ratios = new Map(elements.map((el) => [el.id, 0]))

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratios.set(entry.target.id, entry.intersectionRatio)
          })

          const visible = elements
            .filter((el) => (ratios.get(el.id) ?? 0) > 0)
            .sort((a, b) => (ratios.get(b.id) ?? 0) - (ratios.get(a.id) ?? 0))

          if (visible.length > 0) {
            setActiveSection(visible[0].id)
            return
          }

          const marker = window.scrollY + window.innerHeight * 0.35
          let current = elements[0].id

          for (const el of elements) {
            const top = el.getBoundingClientRect().top + window.scrollY
            if (top <= marker) current = el.id
          }

          setActiveSection(current)
        },
        {
          rootMargin: '-35% 0px -55% 0px',
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        }
      )

      elements.forEach((el) => observer.observe(el))
    }

    connect()

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [sectionIds.join(',')])

  return activeSection
}
