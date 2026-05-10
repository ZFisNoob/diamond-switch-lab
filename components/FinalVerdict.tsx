import AnimatedSection from './AnimatedSection'

const verdicts = [
  {
    name: 'Cullinan',
    tag: 'Visual clarity pick',
    desc: "The strongest RGB showcase of the three. Fully clear PC housing and transparent PA12 stem pass light through with zero housing tint. Under south-facing LEDs, colours appear sharp, saturated, and direct. The sound character is refined and muted — a clean premium daily driver. If you are building for maximum RGB output or a crystal-clear switch aesthetic, Cullinan is the one.",
    accent: {
      card:    { background: 'rgba(226,232,240,.03)', border: '1px solid rgba(226,232,240,.1)' } as React.CSSProperties,
      tag:     { background: 'rgba(226,232,240,.07)', border: '1px solid rgba(226,232,240,.15)', color: 'rgba(226,232,240,.92)' } as React.CSSProperties,
      dot:     'rgba(255,255,255,.7)',
      heading: 'rgba(226,232,240,.96)',
    },
  },
  {
    name: 'Heart of the Ocean',
    tag: 'Blue Diamond identity',
    desc: "The clearest aesthetic story of the three. Light blue transparent PC housing runs top and bottom, a frosted transparent light guide channels that blue character upward, and the Deep Thock sound profile is the most polished and thocky in my WASD test. The strongest themed visual identity in the Diamond lineup, and the best sounding one based on this session.",
    accent: {
      card:    { background: 'rgba(96,165,250,.05)', border: '1px solid rgba(96,165,250,.16)' } as React.CSSProperties,
      tag:     { background: 'rgba(96,165,250,.1)',  border: '1px solid rgba(96,165,250,.25)', color: 'rgba(147,197,253,.92)' } as React.CSSProperties,
      dot:     'rgba(96,165,250,.8)',
      heading: 'rgba(147,197,253,.96)',
    },
  },
  {
    name: 'Poseidon',
    tag: 'Personal feel pick',
    desc: "The most mechanically distinct switch here, and in this session the most satisfying to press. The N52 magnet and 50 ± 7 gf bottom-out give it a softer, more full-bodied landing. In Valorant sessions on the Rainy 75 RT, it felt controlled, responsive, and genuinely pleasant under repeated WASD. Against my TTC King of Magnetic baseline, Poseidon comes closest to the feel quality I would want in a daily driver.",
    accent: {
      card:    { background: 'rgba(6,182,212,.04)',  border: '1px solid rgba(6,182,212,.14)'  } as React.CSSProperties,
      tag:     { background: 'rgba(6,182,212,.09)',  border: '1px solid rgba(6,182,212,.2)',  color: 'rgba(103,232,249,.92)' } as React.CSSProperties,
      dot:     'rgba(6,182,212,.8)',
      heading: 'rgba(103,232,249,.96)',
    },
  },
  {
    name: 'Wait for more data',
    tag: 'If full-board feel is the priority',
    desc: "Three key positions cannot speak to full-board consistency, long-term lube behaviour, or batch-wide quality. WASD sound is a starting point, not a conclusion. Extended typing feel, plate and case interactions, and Poseidon's N52 magnet behaviour over time all remain untested. If any of those matter to your purchase decision, hold off until larger-scale reviews are available.",
    accent: {
      card:    { background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.12)' } as React.CSSProperties,
      tag:     { background: 'rgba(201,168,76,.09)', border: '1px solid rgba(201,168,76,.18)', color: 'rgba(253,224,133,.92)' } as React.CSSProperties,
      dot:     'rgba(201,168,76,.7)',
      heading: 'rgba(253,224,133,.85)',
    },
  },
]

export default function FinalVerdict() {
  return (
    <section id="final-verdict" className="py-16 px-6 relative overflow-hidden">

      {/* Cinematic closing background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/media/photos/heartoftheocean_bluelight.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          opacity: 0.08,
          filter: 'blur(2px)',
        }}
      />
      {/* Gradient overlay: ensures cards remain readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(6,6,15,.82) 0%, rgba(6,6,15,.55) 50%, rgba(6,6,15,.88) 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">11 / Final Verdict</div>
            <h2 className="section-heading">The Honest Take</h2>
            <p className="mt-3 max-w-md mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Based only on what three limited samples, RGB photos, wobble clips,
              and WASD sound impressions can actually show.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {verdicts.map((v, i) => (
            <AnimatedSection key={v.name} delay={i * 80}>
              <div
                className="card-hover rounded-xl p-5 h-full flex flex-col gap-4"
                style={v.accent.card}
              >
                <span className="verdict-badge self-start" style={v.accent.tag}>{v.tag}</span>
                <div className="flex items-center gap-2">
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: v.accent.dot, display: 'inline-block', flexShrink: 0 }} />
                  <h3 className="font-bold leading-tight" style={{ fontSize: 14, color: v.accent.heading }}>
                    {v.name}
                  </h3>
                </div>
                <p className="leading-relaxed flex-1" style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing disclaimer */}
        <AnimatedSection delay={340}>
          <div
            className="rounded-xl p-6"
            style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)' }}
          >
            <p style={{ fontSize: 15, color: 'rgba(203,213,225,.88)', lineHeight: 1.75 }}>
              Cullinan is the cleanest RGB showcase. Heart of the Ocean has the strongest themed identity
              and the most polished thock character in this session. Poseidon is my personal feel pick.
              The N52 magnet and heavier 50 ± 7 gf bottom out make it feel fuller, softer, and more
              confident in repeated movement inputs. If I were choosing based only on this tester unit,
              Poseidon is the switch I would want to keep using. If full board consistency matters,
              wait for larger scale testing.
            </p>
            <p className="mt-4" style={{ fontSize: 14, color: 'rgba(148,163,184,.7)', lineHeight: 1.7 }}>
              This is not the final word on the Wuque Diamond HE switches. Full-board sound, long-term lube
              consistency, batch-wide stability, Poseidon N52 magnet behaviour over time, and extended daily
              use all remain untested. These are first impressions from three key positions, one build
              configuration, and one tester unit.
            </p>
            <div className="flex items-center gap-3 mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}>
              <span className="font-mono" style={{ fontSize: 11, color: 'rgba(100,116,139,.45)' }}>
                Limited tester-unit review · G = Cullinan · H = Heart of the Ocean · J = Poseidon ·
                One of 50 selected testers · Wuque Diamond HE Feedback Round · 9 May 2026
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
