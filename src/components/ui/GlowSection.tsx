"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  children: React.ReactNode
  color?: string       // glow color
  intensity?: number   // 0-1, base glow opacity
  scrollBoost?: number // how much brighter on scroll-into-view
}

export function GlowSection({
  children,
  color = "126,184,164",  // accent teal as rgb
  intensity = 0.06,
  scrollBoost = 0.13,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const glowOpacity = visible ? scrollBoost : intensity

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        transition: "box-shadow 1.2s ease",
        boxShadow: `
          0 0 80px 20px rgba(${color}, ${glowOpacity}),
          0 0 160px 60px rgba(${color}, ${glowOpacity * 0.4})
        `,
      }}
    >
      {children}
    </div>
  )
}