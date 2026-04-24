"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { navLinksRoot } from "@/data/navLinks"
import { siteName, socialLinks } from "@/lib/config"
import '@/styles/presentation/footer.css'

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const year = new Date().getFullYear()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className={`footer-pill ${isVisible ? 'is-visible' : ''}`}
      style={{ backgroundColor: "var(--color-ink, #13120f)", padding: "1.5rem" }}
    >
      <div className="footer-pill__inner">
        <Link href="/" className="footer-pill__name font-cormorant">
          {siteName}
        </Link>

        <ul className="footer-pill__links">
          {navLinksRoot.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="footer-pill__link label-caps">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="footer-pill__socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="footer-pill__social label-caps"
            >
              {s.short}
            </a>
          ))}
        </div>
      </div>

      <span className="footer-pill__copy label-caps">
        © {year} {siteName}
      </span>
    </footer>
  )
}