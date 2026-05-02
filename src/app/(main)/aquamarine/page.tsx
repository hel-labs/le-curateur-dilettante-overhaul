'use client'

import Link from 'next/link'
import { chapters } from '@/.velite'
import { marginaliaImages } from '@/data/sliderData'
import ThumbCarousel from '@/components/presentation/ThumbCarousel'
import Snowfall from '@/components/presentation/SnowFall'

// ── Helpers ───────────────────────────────────────────────────────────────────

function toRoman(n: number): string {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  let result = ''
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i] }
  }
  return result
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AquamarinePage() {
  const sorted = [...chapters].sort((a, b) => a.chapter - b.chapter)

  return (
    <><Snowfall>
      <style>{`
        .chapter-row { transition: background-color 0.2s; }
        .chapter-row:hover { background-color: rgba(126,184,164,0.02); }
        .chapter-row:hover h2 { color: rgba(245,240,232,1); }
      `}</style>

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-ink, #0e0d0b)',
          padding: '7rem 0 5rem',
          borderBottom: '1px solid rgba(126,184,164,0.08)',
        }}
      >
        <div style={{ margin: '0 auto', maxWidth: '1160px', paddingLeft: '3rem', paddingRight: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4rem', alignItems: 'start' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.4rem' }}>
              <div style={{ width: '1px', height: '3rem', backgroundColor: 'rgba(126,184,164,0.2)', marginBottom: '1rem' }} />
              <span
                className="label-caps"
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  color: 'rgba(245,240,232,0.2)',
                  letterSpacing: '0.3em',
                  fontSize: '0.58rem',
                }}
              >
                Aquamarine
              </span>
            </div>

            <div style={{ maxWidth: '680px' }}>
              <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--color-accent, #7eb8a4)', marginBottom: '1.5rem' }} />
              <p
                className="label-caps mb-4"
                style={{ color: 'var(--color-accent, #7eb8a4)', fontSize: '0.62rem', letterSpacing: '0.22em' }}
              >
                Novel · Ongoing
              </p>
              <h1
                className="font-cormorant font-light"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: 1.05,
                  color: 'color-mix(in srgb, #f5f0e8 90%, transparent)',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                }}
              >
                Aquamarine
              </h1>
              <p
                className="font-cormorant font-light"
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.65rem)',
                  lineHeight: 1.65,
                  color: 'rgba(245,240,232,0.55)',
                  maxWidth: '560px',
                }}
              >
                A novel published in chapters, written in the open. It began as one thing and has since become something else entirely — which is, perhaps, the only honest way a long piece of fiction can be written.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carousel ──────────────────────────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid rgba(126,184,164,0.08)' }}>
        <ThumbCarousel slides={marginaliaImages} />
      </section>

      {/* ── Chapter list ──────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-ink, #0e0d0b)',
          padding: '5rem 0 7rem',
        }}
      >
        <div style={{ margin: '0 auto', maxWidth: '1160px', paddingLeft: '3rem', paddingRight: '2rem' }}>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '5rem 1fr auto',
              gap: '2rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(126,184,164,0.1)',
            }}
          >
            <span className="label-caps" style={{ fontSize: '0.52rem', color: 'rgba(245,240,232,0.2)', letterSpacing: '0.2em' }}>Chapter</span>
            <span className="label-caps" style={{ fontSize: '0.52rem', color: 'rgba(245,240,232,0.2)', letterSpacing: '0.2em' }}>Title</span>
            <span className="label-caps" style={{ fontSize: '0.52rem', color: 'rgba(245,240,232,0.2)', letterSpacing: '0.2em' }}>Published</span>
          </div>

          {sorted.length > 0 ? sorted.map((chapter) => (
            <Link
              key={chapter.slug}
              href={`/aquamarine/${chapter.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                className="chapter-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '5rem 1fr auto',
                  gap: '2rem',
                  alignItems: 'center',
                  padding: '2.25rem 0',
                  borderBottom: '1px solid rgba(126,184,164,0.07)',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3.5rem',
                    height: '3.5rem',
                    border: '1px solid rgba(126,184,164,0.12)',
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="font-cormorant"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 300,
                      color: 'rgba(126,184,164,0.4)',
                      letterSpacing: '0.05em',
                      fontStyle: 'italic',
                    }}
                  >
                    {toRoman(chapter.chapter)}
                  </span>
                </div>

                <div>
                  <h2
                    className="font-cormorant font-light"
                    style={{
                      fontSize: '1.3rem',
                      lineHeight: 1.2,
                      color: 'rgba(245,240,232,0.85)',
                      marginBottom: '0.4rem',
                      transition: 'color 0.2s',
                    }}
                  >
                    {chapter.title}
                  </h2>
                  <p
                    className="font-cormorant italic font-light"
                    style={{
                      fontSize: '0.95rem',
                      color: 'rgba(245,240,232,0.35)',
                      lineHeight: 1.55,
                    }}
                  >
                    {chapter.desc}
                  </p>
                </div>

                <span
                  className="label-caps"
                  style={{
                    fontSize: '0.52rem',
                    color: 'rgba(245,240,232,0.2)',
                    letterSpacing: '0.12em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {formatDate(chapter.date)}
                </span>
              </div>
            </Link>
          )) : (
            <p
              className="font-cormorant italic font-light"
              style={{ color: 'rgba(245,240,232,0.25)', fontSize: '1.1rem', textAlign: 'center', padding: '4rem 0' }}
            >
              No chapters yet.
            </p>
          )}
        </div>
      </section>
      </Snowfall>
    </>
  )
}