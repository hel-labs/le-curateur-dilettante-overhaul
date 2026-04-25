import { CurveSeparator } from "@/components/ui/CurveSeperator"
import Link from "next/link"
import type { Metadata } from "next"
import { siblingNav } from "@/data/navLinks"
import { triviaItems } from "@/data/about"

export const metadata: Metadata = {
  title: "Trivia | The Curator | Le Curateur Dilettante",
  description: "Small facts, quiet confessions, and the details that don't belong anywhere else.",
}


export default function TriviaPage() {
  return (
    <>
      <section style={{ backgroundColor: "var(--color-ink, #0e0d0b)", padding: "5rem 0 3rem" }}>
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">

          <nav className="flex gap-4 items-center mb-10" aria-label="About section navigation">
            {siblingNav.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="label-caps"
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  color: "rgba(245,240,232,0.25)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {s.label}
              </Link>
            ))}
          </nav>

          <div
            style={{
              width: "2.5rem",
              height: "1px",
              backgroundColor: "var(--color-accent, #7eb8a4)",
              marginBottom: "1.5rem",
            }}
          />
          <p className="label-caps mb-4" style={{ color: "var(--color-accent, #7eb8a4)", fontSize: "0.62rem", letterSpacing: "0.22em" }}>
            Trivia
          </p>
          <h1
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "color-mix(in srgb, #f5f0e8 90%, transparent)",
              maxWidth: "600px",
            }}
          >
            Small facts.{" "}
            <em className="italic" style={{ color: "var(--color-accent, #7eb8a4)" }}>
              True ones.
            </em>
          </h1>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="curve-down" />

      <section style={{ backgroundColor: "var(--color-ink, #0e0d0b)", padding: "4rem 0 6rem" }}>
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]"
            style={{ backgroundColor: "rgba(126,184,164,0.08)" }}
          >
            {triviaItems.map((item) => (
              <div
                key={item.n}
                style={{
                  backgroundColor: "var(--color-ink, #0e0d0b)",
                  padding: "2.5rem",
                  position: "relative",
                }}
              >
                <span
                  className="font-cormorant font-light block mb-5"
                  style={{
                    fontSize: "3.5rem",
                    lineHeight: 1,
                    color: "rgba(126,184,164,0.07)",
                    userSelect: "none",
                  }}
                >
                  {item.n}
                </span>

                <div
                  style={{
                    width: "1.5rem",
                    height: "1px",
                    backgroundColor: "rgba(126,184,164,0.25)",
                    marginBottom: "1.25rem",
                  }}
                />

                <p
                  className="font-cormorant italic font-light"
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.55)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}