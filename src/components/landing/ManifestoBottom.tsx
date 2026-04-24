'use client';

import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";

export function ManifestoClose() {
  return (
    <section
      aria-labelledby="manifesto-close-heading"
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        padding: "7rem 0",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "clamp(1rem, calc((100vw - 1160px) / 2 + 2rem), 50vw)",
          top: 0,
          bottom: 0,
          width: "1px",
          backgroundColor:
            "color-mix(in srgb, var(--color-accent) 12%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="mx-auto relative"
        style={{ maxWidth: "1160px", padding: "0 2rem" }}
      >
        <div className="flex gap-12 items-start flex-wrap">
          <div className="flex-shrink-0 pt-2">
            <span
              id="manifesto-close-heading"
              className="label-caps block"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                color: "var(--color-muted)",
                letterSpacing: "0.3em",
                fontSize: "0.58rem",
              }}
            >
              Manifesto
            </span>
          </div>

          <div className="flex-1" style={{ minWidth: "280px" }}>
            <div
              style={{
                width: "2rem",
                height: "1px",
                backgroundColor: "var(--color-accent)",
                marginBottom: "2.5rem",
              }}
            />

            <blockquote
              className="font-cormorant font-light"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                lineHeight: 1.4,
                color: "var(--color-fg)",
                maxWidth: "640px",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              Some read to arrive.
              <br />
              <em
                className="italic font-light"
                style={{ color: "var(--color-accent)" }}
              >
                This journal reads to wander.
              </em>
            </blockquote>

            <div
              style={{
                width: "1px",
                height: "3rem",
                backgroundColor:
                  "color-mix(in srgb, var(--color-accent) 40%, transparent)",
                margin: "2.5rem 0",
              }}
            />

            <Link href="/collections" className="btn-ghost">
              Enter the Archive
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}