import { CurveSeparator } from "@/components/ui/CurveSeperator"
import Link from "next/link"
import type { Metadata } from "next"
import { siblingNav } from "@/data/navLinks"
import { interests } from "@/data/about"

export const metadata: Metadata = {
  title: "Interests | The Curator | Le Curateur Dilettante",
  description: "The things that pull attention without apology — explored at length.",
}

export default function InterestsPage() {
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
            Interests
          </p>
          <h1
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "color-mix(in srgb, #f5f0e8 90%, transparent)",
              maxWidth: "700px",
            }}
          >
            The things that{" "}
            <em className="italic" style={{ color: "var(--color-accent, #7eb8a4)" }}>
              pull.
            </em>
          </h1>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="curve-down" />

      <section style={{ backgroundColor: "var(--color-ink, #0e0d0b)", padding: "4rem 0 6rem" }}>
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div className="space-y-0">
            {interests.map((item, i) => (
              <article
                key={item.index}
                style={{
                  borderTop: "1px solid rgba(126,184,164,0.10)",
                  padding: "3.5rem 0",
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr",
                  gap: "3rem",
                  alignItems: "start",
                }}
              >
                <span
                  className="font-cormorant font-light"
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: 1,
                    color: "rgba(126,184,164,0.12)",
                    userSelect: "none",
                  }}
                >
                  {item.index}
                </span>

                <div>
                  <h2
                    className="font-cormorant font-normal mb-2"
                    style={{ fontSize: "1.8rem", color: "rgba(245,240,232,0.90)", lineHeight: 1.2 }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="font-cormorant italic font-light mb-5"
                    style={{ fontSize: "1.05rem", color: "var(--color-accent, #7eb8a4)", lineHeight: 1.5 }}
                  >
                    {item.accent}
                  </p>
                  <p
                    className="font-cormorant font-light mb-6"
                    style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "rgba(245,240,232,0.55)", maxWidth: "680px" }}
                  >
                    {item.body}
                  </p>
                  {item.current && (
                    <p
                      className="label-caps"
                      style={{
                        fontSize: "0.57rem",
                        letterSpacing: "0.15em",
                        color: "rgba(126,184,164,0.45)",
                        borderLeft: "1px solid rgba(126,184,164,0.2)",
                        paddingLeft: "0.75rem",
                      }}
                    >
                      {item.current}
                    </p>
                  )}
                </div>
              </article>
            ))}

            <div style={{ borderTop: "1px solid rgba(126,184,164,0.10)" }} />
          </div>
        </div>
      </section>
    </>
  )
}