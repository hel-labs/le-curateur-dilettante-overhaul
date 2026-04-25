import { CurveSeparator } from "@/components/ui/CurveSeperator"
import Link from "next/link"
import type { Metadata } from "next"
import { siblingNav } from "@/data/navLinks"
import { sections } from "@/data/about"

export const metadata: Metadata = {
  title: "Craft | The Curator | Le Curateur Dilettante",
  description: "On writing, on slowness, and why this journal exists.",
}

export default function CraftPage() {
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
            Craft
          </p>
          <h1
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "color-mix(in srgb, #f5f0e8 90%, transparent)",
              maxWidth: "680px",
            }}
          >
            On writing{" "}
            <em className="italic" style={{ color: "var(--color-accent, #7eb8a4)" }}>
              slowly.
            </em>
          </h1>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="curve-down" />

      <section style={{ backgroundColor: "var(--color-ink, #0e0d0b)", padding: "4rem 0 6rem" }}>
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div style={{ maxWidth: "720px" }}>
            {sections.map((section, i) => (
              <div
                key={section.label}
                style={{
                  borderTop: i === 0 ? "none" : "1px solid rgba(126,184,164,0.10)",
                  padding: i === 0 ? "0 0 3.5rem" : "3.5rem 0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                  <span
                    className="font-cormorant font-light"
                    style={{
                      fontSize: "2rem",
                      lineHeight: 1,
                      color: "rgba(126,184,164,0.10)",
                      userSelect: "none",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="font-cormorant font-normal"
                    style={{ fontSize: "1.25rem", color: "rgba(245,240,232,0.55)", letterSpacing: "0.02em" }}
                  >
                    {section.label}
                  </h2>
                </div>

                <div className="space-y-5">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="font-cormorant font-light"
                      style={{
                        fontSize: "1.12rem",
                        lineHeight: 1.9,
                        color: j === 0
                          ? "rgba(245,240,232,0.65)"
                          : "rgba(245,240,232,0.45)",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div
              style={{
                borderTop: "1px solid rgba(126,184,164,0.10)",
                paddingTop: "3rem",
              }}
            >
              <p
                className="font-cormorant italic font-light"
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.25)",
                  maxWidth: "520px",
                }}
              >
                Everything here is written slowly. Everything is offered in the original sense of
                the word: with delight, and without apology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}