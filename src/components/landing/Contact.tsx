'use client';
import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";


export function ContactTeaser() {
  return (
    <section style={{ backgroundColor: "var(--color-surface)", padding: "5rem 0" }}>
      <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
        <div className="flex items-center gap-6 mb-12">
          <span className="label-caps" style={{ color: "var(--color-muted)" }}>
            Contact
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
            If something here stayed with you, or unsettled you, or deserves
            an argument: the door is open.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}