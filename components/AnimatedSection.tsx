'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export default function AnimatedSection({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${delay}ms`
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          obs.disconnect()
        }
      },
      { threshold: 0.07 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
