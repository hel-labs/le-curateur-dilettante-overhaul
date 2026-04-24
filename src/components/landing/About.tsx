'use client';
import Link from "next/link"
import { ArrowRight } from "@/components/ui/ArrowRight"

export function AboutTeaser() {
  return (
    <section style={{ backgroundColor: "var(--color-bg)", padding: "5rem 0" }}>
      <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
        <div className="flex items-center gap-6 mb-12">
          <span className="label-caps" style={{ color: "var(--color-muted)" }}>
            About
          </span>
          <div className="rule flex-1" />
        </div>
        <div className="max-w-xl">
          <p
            className="font-cormorant font-light italic mb-8"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              lineHeight: 1.55,
              color: "var(--color-fg)",
            }}
          >
            This journal belongs to no particular discipline and answers to no
            particular agenda. It is a place to think slowly, read widely, and
            sit with the things that resist easy summary.
          </p>
          <Link href="/about" className="btn-ghost">
            About this journal
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}