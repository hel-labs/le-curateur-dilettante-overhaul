'use client';

export function ManifestoHero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center"
      style={{
        minHeight: "100svh",
        backgroundColor: "var(--color-ink, #0e0d0b)",
        padding: "0",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.6,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <span
        aria-hidden="true"
        className="absolute left-0 bottom-0 font-cormorant font-light select-none pointer-events-none"
        style={{
          fontSize: "clamp(18rem, 30vw, 36rem)",
          lineHeight: 0.85,
          color: "color-mix(in srgb, var(--color-accent, #7eb8a4) 5%, transparent)",
          zIndex: 1,
          userSelect: "none",
        }}
      >
        D
      </span>

      <div
        className="relative mx-auto w-full"
        style={{
          maxWidth: "1160px",
          padding: "6rem 2rem",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "2.5rem",
            height: "1px",
            backgroundColor: "var(--color-accent, #7eb8a4)",
            marginBottom: "2.5rem",
          }}
        />

        <p
          className="label-caps"
          style={{
            color: "var(--color-accent, #7eb8a4)",
            marginBottom: "2rem",
            fontSize: "0.62rem",
            letterSpacing: "0.22em",
          }}
        >
          Manifesto
        </p>

        <blockquote
          className="font-cormorant font-light"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
            lineHeight: 1.2,
            color: "color-mix(in srgb, #f5f0e8 88%, transparent)",
            maxWidth: "820px",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          The dilettante was never shallow.
          <br />
          <em
            className="italic font-light"
            style={{ color: "var(--color-accent, #7eb8a4)" }}
          >
            They were simply someone who loved knowing things.
          </em>
        </blockquote>

        <div
          style={{
            width: "1px",
            height: "4rem",
            backgroundColor:
              "color-mix(in srgb, var(--color-accent, #7eb8a4) 40%, transparent)",
            marginTop: "3rem",
          }}
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "12rem",
          background:
            "linear-gradient(to bottom, transparent, var(--color-ink, #0e0d0b))",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </section>
  )
}