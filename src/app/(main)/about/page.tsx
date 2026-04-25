import { CurveSeparator } from "@/components/ui/CurveSeperator"
import { ArrowRight } from "@/components/ui/ArrowRight"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { PersonSchema } from "@/components/seo/JsonLd"
import Snowfall from "@/components/presentation/SnowFall"
const siteUrl = process.env.SITE_URL ?? "https://le-curateur-dilettante.vercel.app/"

export const metadata: Metadata = {
  title: "The Curator | Le Curateur Dilettante",
  description:
    "A journal kept by a dilettante: someone who reads widely, writes slowly, and believes that curiosity is its own reward.",
}

const subsections = [
  {
    href: "/about/interests",
    label: "I",
    title: "Interests",
    desc: "The things that pull attention without apology. Literature, philosophy, film, games, technology — explored at length.",
  },
  {
    href: "/about/trivia",
    label: "II",
    title: "Trivia",
    desc: "Small facts, quiet confessions, and the kind of details that don't belong anywhere else but feel true.",
  },
  {
    href: "/about/now",
    label: "III",
    title: "Now",
    desc: "What is being read, thought about, and worked on at this particular moment. Updated when something shifts.",
  },
  {
    href: "/about/craft",
    label: "IV",
    title: "Craft",
    desc: "On writing, on slowness, on why this journal exists and what it is trying — honestly — to do.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PersonSchema
        url={`${siteUrl}/about`}
        name="Le Curateur Dilettante"
        description="A journal kept by a dilettante: someone who reads widely, writes slowly, and believes that curiosity is its own reward."
      />
      <Snowfall>
      <section
        style={{
          backgroundColor: "var(--color-ink, #0e0d0b)",
          padding: "5rem 0 3rem",
        }}
      >
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div
            style={{
              width: "2.5rem",
              height: "1px",
              backgroundColor: "var(--color-accent, #7eb8a4)",
              marginBottom: "1.5rem",
            }}
          />
          <p
            className="label-caps mb-4"
            style={{ color: "var(--color-accent, #7eb8a4)", fontSize: "0.62rem", letterSpacing: "0.22em" }}
          >
            About
          </p>
          <h1
            className="font-cormorant font-light"
            style={{
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              color: "color-mix(in srgb, #f5f0e8 90%, transparent)",
            }}
          >
            The Dilettante
          </h1>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="curve-down" />

      <section
        style={{
          backgroundColor: "var(--color-ink, #0e0d0b)",
          padding: "5rem 0",
          borderTop: "1px solid rgba(126,184,164,0.08)",
        }}
      >
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_auto_2fr] gap-8">

            <div className="flex flex-col items-center">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(126,184,164,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(126,184,164,0.5)",
                }}
                title="Site icon"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="2" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="7" y1="7" x2="7" y2="18" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </div>

            <div>
              <span
                className="label-caps block"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  color: "rgba(245,240,232,0.25)",
                  letterSpacing: "0.3em",
                }}
              >
                The Journal
              </span>
            </div>

            <div>
              <p
                className="font-cormorant font-light mb-8"
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                  lineHeight: 1.55,
                  color: "color-mix(in srgb, #f5f0e8 88%, transparent)",
                }}
              >
                This is a word that used to mean something different.{" "}
                <em className="italic" style={{ color: "var(--color-accent, #7eb8a4)" }}>
                  <br />
                  Dilettante
                </em>{" "}
                , from the Italian{" "}
                <em className="italic" style={{ color: "var(--color-accent, #7eb8a4)" }}>
                  dilettare
                </em>
                — to delight, to take pleasure.{" "}
                <br />
                At its deepest, the word meant someone who is enticed to knowledge, almost
                helplessly: neither an expert, nor a professional, but someone who had built, slowly
                and without ambition, a serious relationship with the things that moved them.
                Someone for whom knowledge was not a destination but a way of being in the world.
                <br />
                <br />
                <span style={{ color: "rgba(245,240,232,0.4)" }}>
                  The botanist who was also a poet. The philosopher who kept detailed notes on the
                  quality of afternoon light.
                </span>
              </p>

              <div
                style={{
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "var(--color-accent, #7eb8a4)",
                  marginBottom: "2rem",
                }}
              />

              <div
                className="font-cormorant space-y-6"
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.8,
                  color: "rgba(245,240,232,0.70)",
                }}
              >
                <p>
                  But over time, the word fell out of favour. It came to suggest shallowness: the
                  person who tries everything and commits to nothing. But that was never what it
                  meant. The <em className="italic">dilettante</em> had the freedom to pursue
                  knowledge without needing it to pay. Which made them, paradoxically, freer in
                  their inquiry than professionals — they had no reputation to protect, no school of
                  thought to defend, no grant to justify.
                </p>
                <p>
                  The <em className="italic">dilettante</em> commits to the act of noticing. To
                  following a question wherever it leads, even when it leads somewhere useless. To
                  the quiet, unfashionable belief that understanding something, really understanding
                  it, in the unhurried way, is worth the time it takes.
                </p>
                <p>
                  This journal is made in that spirit. It is not a publication with a thesis. It is
                  not a platform, or a project, or a brand. It is closer to a commonplace book: a
                  place where things get written because they need to be written, and published in
                  the hope that someone else might find them beautiful, or useful, or worth a
                  considered disagreement. <br />
                  Everything here is written slowly. Everything is offered in the original sense of
                  the word: with delight, and without apology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="concave-up" />

      <section
        style={{
          backgroundColor: "var(--color-ink, #0e0d0b)",
          padding: "5rem 0",
        }}
      >
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_2fr_1fr] gap-12 items-start">

            <div className="flex flex-col items-center">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid rgba(126,184,164,0.2)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(126,184,164,0.4)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M3 20c0-4 3.6-7 8-7s8 3 8 7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div>
              <span
                className="label-caps block mb-8"
                style={{ color: "rgba(245,240,232,0.25)", letterSpacing: "0.3em" }}
              >
                The Curator
              </span>

              <div
                className="font-cormorant space-y-6 mb-10"
                style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(245,240,232,0.70)" }}
              >
                <p>
                  Someone who reads more than they sleep. Who believes, with perhaps more conviction
                  than is reasonable, that the right sentence at the right moment can change the
                  temperature of a life.
                </p>
                <p>
                  Not a scholar. Not a critic. Closer to a reader who occasionally writes — out of
                  necessity, out of the need to understand what they have felt, and to find out
                  whether the feeling was worth the words.
                </p>
                <p style={{ color: "rgba(245,240,232,0.4)" }}>
                  There is no thesis here. Only the ongoing attempt to look carefully, tie up the
                  things left loose.
                </p>
              </div>

              <div className="mb-10">
                <span
                  className="label-caps block mb-4"
                  style={{ fontSize: "0.6rem", color: "rgba(245,240,232,0.25)" }}
                >
                  Interests
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Literature",
                    "Philosophy",
                    "Marginalia",
                    "Video Games",
                    "Technology",
                    "Psychology",
                    "Film",
                    "Long walks",
                    "Existential Dread",
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="label-caps"
                      style={{
                        fontSize: "0.58rem",
                        letterSpacing: "0.15em",
                        padding: "3px 10px",
                        border: "1px solid rgba(126,184,164,0.15)",
                        color: "rgba(245,240,232,0.35)",
                      }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span
                  className="label-caps block mb-4"
                  style={{ fontSize: "0.6rem", color: "rgba(245,240,232,0.25)" }}
                >
                  In passing
                </span>
                <ul className="space-y-3">
                  {[
                    "Writes in the margins more than in any notebook.",
                    "Collects books with more conviction than they are read.",
                    "Late nights, coffee, music.",
                    "Has never successfully explained why a particular story affected them the way it did.",
                    "Believes rereading is where the real reading happens — first reads are just introductions.",
                    "Finishes a book and grieves it, quietly, before beginning another.",
                    "Started this journal after something cherished ended too soon. Still not sure it was the wrong decision: the ending, or the beginning.",
                  ].map((fact) => (
                    <li
                      key={fact}
                      className="font-cormorant italic font-light flex gap-3"
                      style={{ fontSize: "1rem", color: "rgba(245,240,232,0.4)", lineHeight: 1.6 }}
                    >
                      <span style={{ color: "var(--color-accent, #7eb8a4)", flexShrink: 0 }}>—</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  width: "2rem",
                  height: "1px",
                  backgroundColor: "rgba(126,184,164,0.3)",
                  margin: "2.5rem 0",
                }}
              />

              <Link href="/contact" className="btn-ghost">
                Write to me
                <ArrowRight />
              </Link>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <div
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  aspectRatio: "3/4",
                  border: "1px solid rgba(126,184,164,0.15)",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: "rgba(126,184,164,0.04)",
                }}
              >
                <Image
                  src="/author.svg"
                  alt="Author portrait"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CurveSeparator fill="var(--color-ink, #0e0d0b)" variant="tilt-right" />

      <section
        style={{
          backgroundColor: "var(--color-ink, #0e0d0b)",
          padding: "5rem 0",
          borderTop: "1px solid rgba(126,184,164,0.08)",
        }}
      >
        <div className="mx-auto max-w-[1160px] px-8 sm:px-5">
          <div className="flex items-center gap-6 mb-12">
            <span
              className="label-caps"
              style={{ color: "rgba(245,240,232,0.25)", fontSize: "0.58rem", letterSpacing: "0.22em" }}
            >
              Go deeper
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(126,184,164,0.12)",
              }}
            />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]"
            style={{ backgroundColor: "rgba(126,184,164,0.10)" }}
          >
            {subsections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block"
                style={{
                  backgroundColor: "var(--color-ink, #0e0d0b)",
                  padding: "2.5rem",
                  textDecoration: "none",
                }}
              >
                <span
                  className="font-cormorant font-light block mb-4"
                  style={{
                    fontSize: "3rem",
                    lineHeight: 1,
                    color: "rgba(126,184,164,0.08)",
                  }}
                >
                  {item.label}
                </span>
                <h2
                  className="font-cormorant font-normal mb-3 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                  style={{ fontSize: "1.4rem", color: "rgba(245,240,232,0.85)" }}
                >
                  {item.title}
                </h2>
                <p
                  className="font-cormorant italic font-light mb-6"
                  style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.35)", lineHeight: 1.6 }}
                >
                  {item.desc}
                </p>
                <span
                  className="label-caps"
                  style={{
                    fontSize: "0.6rem",
                    color: "var(--color-accent, #7eb8a4)",
                    letterSpacing: "0.2em",
                  }}
                >
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </Snowfall>
    </>
  )
}