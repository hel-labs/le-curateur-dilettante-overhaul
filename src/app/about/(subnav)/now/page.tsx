import { CurveSeparator } from "@/components/ui/CurveSeperator"
import Link from "next/link"
import type { Metadata } from "next"
import { siblingNav } from "@/data/navLinks"
const nowData = {
  lastUpdated: "2025-04-25",
  reading: [
    {
      title: "The Book of Disquiet",
      author: "Fernando Pessoa",
      note: "Returning to it. Each time it means something different.",
    },
    {
      title: "Simulacra and Simulation",
      author: "Jean Baudrillard",
      note: "Slower going than expected. Appropriately disorienting.",
    },
  ],
  listening: [
    {
      title: "Music for Airports",
      artist: "Brian Eno",
      note: "For late nights and long reads.",
    },
    {
      title: "Spiegel im Spiegel",
      artist: "Arvo Pärt",
      note: "One piece, many times.",
    },
  ],
  thinking: [
    "Whether slowness is a discipline or a temperament — and whether the distinction matters.",
    "The difference between melancholy and sadness. Melancholy has an object. Sadness does not.",
    "What it means to finish something. The strange grief of completion.",
  ],
  working: [
    "This journal, always.",
    "A long essay on the ethics of rereading.",
    "Several beginnings that have not yet decided what they want to be.",
  ],
}

export const metadata: Metadata = {
  title: "Now | The Curator | Le Curateur Dilettante",
  description: "What is being read, thought about, and worked on at this particular moment.",
}

function NowSection({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div style={{ borderTop: "1px solid rgba(126,184,164,0.10)", paddingTop: "2.5rem", marginTop: "2.5rem" }}>
      <span
        className="label-caps block mb-6"
        style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "rgba(126,184,164,0.45)" }}
      >
        {label}
      </span>
      {children}
    </div>
  )
}

export default function NowPage() {
  const formatted = new Date(nowData.lastUpdated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ backgroundColor: "var(--color-ink, #0e0d0b)", padding: "5rem 0 3rem" }}>
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          {/* Sibling nav */}
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
            Now
          </p>
          <h1
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "color-mix(in srgb, #f5f0e8 90%, transparent)",
              marginBottom: "1.5rem",
            }}
          >
            At this{" "}
            <em className="italic" style={{ color: "var(--color-accent, #7eb8a4)" }}>
              particular moment.
            </em>
          </h1>

          {/* Last updated */}
          <p
            className="label-caps"
            style={{
              fontSize: "0.57rem",
              letterSpacing: "0.15em",
              color: "rgba(245,240,232,0.20)",
            }}
          >
            Last updated: {formatted}
          </p>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="curve-down" />

      {/* ── Content ── */}
      <section style={{ backgroundColor: "var(--color-ink, #0e0d0b)", padding: "4rem 0 6rem" }}>
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              maxWidth: "760px",
            }}
          >

            {/* Placeholder intro */}
            <p
              className="font-cormorant italic font-light"
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.45)",
                marginBottom: "0.5rem",
              }}
            >
              There is a particular quality to the present moment that resists being written about
              while it is happening. The{" "}
              <em style={{ color: "rgba(245,240,232,0.65)" }}>now</em> becomes legible only
              slightly after — when it has just enough distance to be described without distortion.
            </p>
            <p
              className="font-cormorant italic font-light"
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.30)",
              }}
            >
              This page is an attempt anyway.
            </p>

            {/* Reading */}
            <NowSection label="Reading">
              <ul className="space-y-5">
                {nowData.reading.map((item) => (
                  <li key={item.title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
                    <span style={{ color: "var(--color-accent, #7eb8a4)", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                    <div>
                      <span
                        className="font-cormorant font-normal"
                        style={{ fontSize: "1.1rem", color: "rgba(245,240,232,0.80)", display: "block" }}
                      >
                        {item.title}
                      </span>
                      <span
                        className="label-caps"
                        style={{ fontSize: "0.57rem", letterSpacing: "0.15em", color: "rgba(245,240,232,0.25)", display: "block", marginTop: "2px" }}
                      >
                        {item.author}
                      </span>
                      {item.note && (
                        <span
                          className="font-cormorant italic font-light"
                          style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.35)", display: "block", marginTop: "4px" }}
                        >
                          {item.note}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </NowSection>

            {/* Listening */}
            <NowSection label="Listening">
              <ul className="space-y-5">
                {nowData.listening.map((item) => (
                  <li key={item.title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1rem", alignItems: "start" }}>
                    <span style={{ color: "var(--color-accent, #7eb8a4)", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                    <div>
                      <span
                        className="font-cormorant font-normal"
                        style={{ fontSize: "1.1rem", color: "rgba(245,240,232,0.80)", display: "block" }}
                      >
                        {item.title}
                      </span>
                      <span
                        className="label-caps"
                        style={{ fontSize: "0.57rem", letterSpacing: "0.15em", color: "rgba(245,240,232,0.25)", display: "block", marginTop: "2px" }}
                      >
                        {item.artist}
                      </span>
                      {item.note && (
                        <span
                          className="font-cormorant italic font-light"
                          style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.35)", display: "block", marginTop: "4px" }}
                        >
                          {item.note}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </NowSection>

            {/* Thinking */}
            <NowSection label="Thinking about">
              <ul className="space-y-4">
                {nowData.thinking.map((thought, i) => (
                  <li
                    key={i}
                    className="font-cormorant italic font-light flex gap-3"
                    style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(245,240,232,0.50)" }}
                  >
                    <span style={{ color: "var(--color-accent, #7eb8a4)", flexShrink: 0 }}>—</span>
                    {thought}
                  </li>
                ))}
              </ul>
            </NowSection>

            {/* Working on */}
            <NowSection label="Working on">
              <ul className="space-y-4">
                {nowData.working.map((item, i) => (
                  <li
                    key={i}
                    className="font-cormorant font-light flex gap-3"
                    style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(245,240,232,0.50)" }}
                  >
                    <span style={{ color: "var(--color-accent, #7eb8a4)", flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </NowSection>
          </div>
        </div>
      </section>
    </>
  )
}