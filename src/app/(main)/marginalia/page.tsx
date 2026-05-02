'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { pieces } from '@/.velite'
import type { Piece, PieceTag } from '@/types/post'
import { pieceTagsRegistry } from '@/config/tags'
import ThreeDimensionalSlider from '@/components/presentation/ThumbCarousel'
import { marginaliaImages } from '@/data/sliderData'
import { ArrowRight } from '@/components/ui/ArrowRight'
import ThumbCarousel from '@/components/presentation/ThumbCarousel'
import Snowfall from '@/components/presentation/SnowFall'

// ── Constants ─────────────────────────────────────────────────────────────────

const TAG_LABELS: Record<PieceTag | 'all', string> = {
  all: 'All',
  essays: 'Essays',
  articles: 'Articles',
  poems: 'Poems',
  reviews: 'Reviews',
  shorts: 'Shorts',
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function PieceModal({ piece, onClose }: { piece: Piece; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'rgba(10,9,8,0.85)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'var(--color-ink, #0e0d0b)',
          border: '1px solid rgba(126,184,164,0.15)',
          maxWidth: '480px',
          width: '100%',
          position: 'relative',
          animation: 'slideUp 0.25s ease',
        }}
      >
        <div style={{ aspectRatio: '16/7', position: 'relative', backgroundColor: 'rgba(126,184,164,0.04)', overflow: 'hidden' }}>
          <Image
            src={piece.thumbnail}
            alt={piece.title}
            fill
            style={{ objectFit: 'cover', opacity: 0.7 }}
          />
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.4rem' }}>
            {piece.tags.map(tag => (
              <span
                key={tag}
                className="label-caps"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  padding: '3px 8px',
                  backgroundColor: 'rgba(10,9,8,0.75)',
                  border: '1px solid rgba(126,184,164,0.25)',
                  color: 'var(--color-accent, #7eb8a4)',
                }}
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
          </div>
        </div>

        <div style={{ padding: '1.75rem 2rem 2rem' }}>
          <h2
            className="font-cormorant font-light"
            style={{ fontSize: '1.7rem', lineHeight: 1.15, color: 'rgba(245,240,232,0.92)', marginBottom: '0.75rem' }}
          >
            {piece.title}
          </h2>
          <p
            className="font-cormorant italic font-light"
            style={{ fontSize: '1rem', color: 'rgba(245,240,232,0.45)', lineHeight: 1.65, marginBottom: '1.5rem' }}
          >
            {piece.desc}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              className="label-caps"
              style={{ fontSize: '0.58rem', color: 'rgba(245,240,232,0.25)', letterSpacing: '0.15em' }}
            >
              {formatDate(piece.date)}
            </span>
            <Link
              href={`/marginalia/${piece.slug}`}
              className="btn-ghost"
              style={{ fontSize: '0.7rem', padding: '6px 14px' }}
            >
              Read <ArrowRight />
            </Link>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            background: 'transparent',
            border: 'none',
            color: 'rgba(245,240,232,0.3)',
            cursor: 'pointer',
            fontSize: '1.1rem',
            lineHeight: 1,
            padding: '4px 8px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.8)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.3)')}
        >
          ×
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(12px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MarginaliaPage() {
  const [activeTag, setActiveTag] = useState<PieceTag | 'all'>('all')
  const [openPiece, setOpenPiece] = useState<Piece | null>(null)

  const filtered = useMemo(() => {
    const base = activeTag === 'all'
      ? pieces
      : pieces.filter(p => p.tags.includes(activeTag))
    return [...base].sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [activeTag])

  return (
    <><Snowfall>
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
                Marginalia
              </span>
            </div>

            <div style={{ maxWidth: '680px' }}>
              <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--color-accent, #7eb8a4)', marginBottom: '1.5rem' }} />
              <p
                className="label-caps mb-4"
                style={{ color: 'var(--color-accent, #7eb8a4)', fontSize: '0.62rem', letterSpacing: '0.22em' }}
              >
                The margins
              </p>
              <h1
                className="font-cormorant font-light"
                style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  lineHeight: 1.05,
                  color: 'color-mix(in srgb, #f5f0e8 90%, transparent)',
                  marginBottom: '2rem',
                }}
              >
                Marginalia
              </h1>
              <p
                className="font-cormorant font-light"
                style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                  lineHeight: 1.65,
                  color: 'rgba(245,240,232,0.55)',
                  maxWidth: '560px',
                }}
              >
                The word comes from the Latin for margin — the blank space at the edge of the page. This is that space. Essays, articles, poems, reviews, and shorts: pieces that exist at the periphery of the journal's larger concerns, and are no less serious for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carousel ──────────────────────────────────────────────────────── */}
      <section style={{ borderBottom: '1px solid rgba(126,184,164,0.08)' }}>
        <ThumbCarousel
          slides={marginaliaImages}
          autoPlayMs={6000}
          accentColor="var(--color-accent)" />
      </section>

      {/* ── Grid + Filter ─────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-ink, #0e0d0b)',
          padding: '5rem 0 6rem',
        }}
      >
        <div style={{ margin: '0 auto', maxWidth: '1160px', paddingLeft: '3rem', paddingRight: '3rem' }}>

          {/* Filter bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '3.5rem',
              borderBottom: '1px solid rgba(126,184,164,0.1)',
            }}
          >
            {(['all', ...pieceTagsRegistry] as const).map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="label-caps"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTag === tag
                    ? '1px solid var(--color-accent, #7eb8a4)'
                    : '1px solid transparent',
                  color: activeTag === tag
                    ? 'var(--color-accent, #7eb8a4)'
                    : 'rgba(245,240,232,0.25)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  padding: '0.75rem 1.25rem 0.65rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                  marginBottom: '-1px',
                }}
                onMouseEnter={e => {
                  if (activeTag !== tag) e.currentTarget.style.color = 'rgba(245,240,232,0.55)'
                }}
                onMouseLeave={e => {
                  if (activeTag !== tag) e.currentTarget.style.color = 'rgba(245,240,232,0.25)'
                }}
              >
                {TAG_LABELS[tag]}
              </button>
            ))}

            <span
              className="label-caps"
              style={{
                marginLeft: 'auto',
                fontSize: '0.55rem',
                color: 'rgba(245,240,232,0.2)',
                letterSpacing: '0.15em',
              }}
            >
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1px',
                backgroundColor: 'rgba(126,184,164,0.08)',
              }}
            >
              {filtered.map(piece => (
                <button
                  key={piece.slug}
                  onClick={() => setOpenPiece(piece)}
                  style={{
                    backgroundColor: 'var(--color-ink, #0e0d0b)',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(126,184,164,0.03)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--color-ink, #0e0d0b)')}
                >
                  <div style={{ aspectRatio: '4/3', position: 'relative', backgroundColor: 'rgba(126,184,164,0.04)', overflow: 'hidden' }}>
                    <Image
                      src={piece.thumbnail}
                      alt={piece.title}
                      fill
                      style={{ objectFit: 'cover', opacity: 0.6, transition: 'opacity 0.3s' }}
                    />
                  </div>

                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem' }}>
                      {piece.tags.map(tag => (
                        <span
                          key={tag}
                          className="label-caps"
                          style={{
                            fontSize: '0.52rem',
                            letterSpacing: '0.18em',
                            color: 'var(--color-accent, #7eb8a4)',
                            opacity: 0.7,
                          }}
                        >
                          {TAG_LABELS[tag]}
                        </span>
                      ))}
                    </div>

                    <h3
                      className="font-cormorant font-light"
                      style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.2,
                        color: 'rgba(245,240,232,0.85)',
                        marginBottom: '0.5rem',
                        flex: 1,
                      }}
                    >
                      {piece.title}
                    </h3>

                    <span
                      className="label-caps"
                      style={{ fontSize: '0.52rem', color: 'rgba(245,240,232,0.2)', letterSpacing: '0.12em', marginTop: '1rem' }}
                    >
                      {formatDate(piece.date)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p
              className="font-cormorant italic font-light"
              style={{ color: 'rgba(245,240,232,0.25)', fontSize: '1.1rem', textAlign: 'center', padding: '4rem 0' }}
            >
              Nothing here yet.
            </p>
          )}
        </div>
      </section>

      {/* ── Footnote ──────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-ink, #0e0d0b)',
          borderTop: '1px solid rgba(126,184,164,0.08)',
          padding: '4rem 0',
        }}
      >
        <div style={{ margin: '0 auto', maxWidth: '1160px', paddingLeft: '3rem', paddingRight: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '3rem' }}>
            <div>
              <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'rgba(126,184,164,0.3)', marginBottom: '1.5rem' }} />
              <p
                className="font-cormorant font-light italic"
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.35)',
                  maxWidth: '540px',
                }}
              >
                The margins are open. If you have written something that belongs in this space — an essay, a piece of criticism, a short fiction, a poem — and you believe it is worth a careful reader's time,{' '}
                <Link
                  href="/contact"
                  style={{
                    color: 'var(--color-accent, #7eb8a4)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(126,184,164,0.3)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(126,184,164,0.8)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(126,184,164,0.3)')}
                >
                  write to us
                </Link>
                .
              </p>
            </div>
            <span
              className="font-cormorant font-light italic"
              style={{ fontSize: '4rem', lineHeight: 1, color: 'rgba(126,184,164,0.06)', userSelect: 'none', whiteSpace: 'nowrap' }}
            >
              ¶
            </span>
          </div>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      {openPiece && (
        <PieceModal piece={openPiece} onClose={() => setOpenPiece(null)} />
      )}
      </Snowfall>
    </>
  )
}