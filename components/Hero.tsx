export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Hero photo background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/media/photos/heartoftheocean_bluelight.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(4,8,15,.88) 0%, rgba(4,8,16,.62) 40%, rgba(4,8,15,.93) 100%)',
        }}
      />
      {/* Fine grid on top */}
      <div className="absolute inset-0 bg-line-grid" style={{ opacity: .3 }} />

      {/* Diamond corner decoration */}
      <DiamondSVG className="absolute top-10 right-10 hidden lg:block" size={160} opacity={0.07} />

      {/* Centre content */}
      <div className="relative z-10 text-center max-w-[800px] w-full">

        {/* Tester badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest uppercase"
          style={{
            background: 'rgba(37,99,235,.1)',
            border: '1px solid rgba(96,165,250,.22)',
            color: 'rgba(147,197,253,.85)',
          }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Tester Unit &nbsp;·&nbsp; 50 Selected Worldwide &nbsp;·&nbsp; May 2026
        </div>

        {/* Main title */}
        <h1
          className="font-bold leading-[1.07] mb-4"
          style={{ fontSize: 'clamp(2.6rem,7.5vw,5.2rem)' }}
        >
          <span className="block">
            <span className="diamond-title">Wuque Diamond</span>
          </span>
          <span className="block text-white mt-1">HE Switch Lab</span>
        </h1>

        {/* Subtitle */}
        <p
          className="leading-relaxed mb-4"
          style={{
            color: 'rgba(203,213,225,.82)',
            fontSize: 'clamp(.92rem,2vw,1.1rem)',
            maxWidth: 560,
            margin: '0 auto 16px',
          }}
        >
          Three switches. One limited tester unit. RGB photos, stem wobble clips,
          off-centre press tests, and WASD sound comparison.
        </p>

        {/* Honest scope note */}
        <div
          className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full font-mono text-xs"
          style={{
            background: 'rgba(201,168,76,.08)',
            border: '1px solid rgba(201,168,76,.2)',
            color: 'rgba(253,224,133,.8)',
          }}
        >
          <span style={{ fontSize: 11 }}>⚠</span>
          Limited sample test — not a full-board typing review.
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href="#rgb-gallery"
            className="transition-all duration-300 hover:brightness-125"
            style={{
              padding: '12px 32px',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '.04em',
              background: 'rgba(59,130,246,.13)',
              border: '1px solid rgba(96,165,250,.3)',
              color: '#93c5fd',
            }}
          >
            View Test Results
          </a>
          <a
            href="#final-verdict"
            className="transition-all duration-300 hover:brightness-125"
            style={{
              padding: '12px 32px',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '.04em',
              background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.1)',
              color: 'rgba(203,213,225,.85)',
            }}
          >
            Jump to Final Verdict
          </a>
        </div>

        {/* Switch identity pills — G / H / J */}
        <div className="flex gap-3 justify-center flex-wrap">
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 99, fontSize: 11,
              fontFamily: 'var(--font-mono)',
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(226,232,240,.1)',
              color: 'rgba(226,232,240,.55)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,.65)', display: 'inline-block' }} />
            G = Cullinan
          </span>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 99, fontSize: 11,
              fontFamily: 'var(--font-mono)',
              background: 'rgba(96,165,250,.07)',
              border: '1px solid rgba(96,165,250,.2)',
              color: 'rgba(147,197,253,.65)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(96,165,250,.75)', display: 'inline-block' }} />
            H = Heart of the Ocean
          </span>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 99, fontSize: 11,
              fontFamily: 'var(--font-mono)',
              background: 'rgba(6,182,212,.06)',
              border: '1px solid rgba(6,182,212,.18)',
              color: 'rgba(103,232,249,.65)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(6,182,212,.8)', display: 'inline-block' }} />
            J = Poseidon
          </span>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 99, fontSize: 11,
              fontFamily: 'var(--font-mono)',
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.08)',
              color: 'rgba(148,163,184,.5)',
            }}
          >
            South-facing LEDs
          </span>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 99, fontSize: 11,
              fontFamily: 'var(--font-mono)',
              background: 'rgba(255,255,255,.03)',
              border: '1px solid rgba(255,255,255,.08)',
              color: 'rgba(148,163,184,.5)',
            }}
          >
            Rainy 75 RT
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(100,116,139,.4)', fontSize: 9, fontFamily: 'var(--font-mono)', letterSpacing: '.16em' }}
      >
        SCROLL
        <span style={{ width: 1, height: 36, display: 'block', background: 'linear-gradient(to bottom, rgba(100,116,139,.4), transparent)' }} />
      </div>
    </section>
  )
}

function DiamondSVG({ size, opacity, className }: { size: number; opacity: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="white" className={className} style={{ opacity }}>
      <polygon points="50,2 98,50 50,98 2,50" strokeWidth=".7" />
      <polygon points="50,20 80,50 50,80 20,50" strokeWidth=".4" opacity={.5} />
      <line x1="50" y1="2"  x2="50" y2="98" strokeWidth=".22" opacity={.2} />
      <line x1="2"  y1="50" x2="98" y2="50" strokeWidth=".22" opacity={.2} />
    </svg>
  )
}
