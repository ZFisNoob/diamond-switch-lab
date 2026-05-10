import AnimatedSection from './AnimatedSection'

interface Clip {
  file: string
  title: string
  caption: string
  note: string
}

const clips: Clip[] = [
  {
    file: 'centrepress_all3.mp4',
    title: 'Centre press — all three',
    caption: 'G = Cullinan, H = HoTO, J = Poseidon. The three samples look broadly consistent on straight-down presses. No obvious binding from centre input — this is mainly the baseline before checking off-centre behaviour.',
    note: 'Reference clip. Compare against the off-centre tests below.',
  },
  {
    file: 'topleft_all3.mp4',
    title: 'Top-left off-centre — all three',
    caption: 'G = Cullinan, H = HoTO, J = Poseidon. This checks whether the stem tilts, hesitates, or introduces scratchiness when force is applied away from centre. In this sample, the behaviour still looks well controlled — no dramatic failure point visible.',
    note: 'Sample-level observation only. Not a batch tolerance result.',
  },
  {
    file: 'bottomright_all3.mp4',
    title: 'Bottom-right off-centre — all three',
    caption: 'G = Cullinan, H = HoTO, J = Poseidon. Opposite corner to top-left. Again, the differences look subtle rather than dramatic. The switches handle uneven input without an obvious change in character across the three samples.',
    note: 'Sample-level only. Cannot be used to predict full-batch consistency.',
  },
  {
    file: 'xaxis_stemwobble_all3_rotated.mp4',
    title: 'X-axis stem wobble — all three',
    caption: 'G = Cullinan, H = HoTO, J = Poseidon. With keycaps removed, side-to-side stem movement appears minimal across all three. Nothing here suggests sloppy tolerance or obvious looseness — wobble is little to non-existent in this axis.',
    note: 'Keycaps removed · Single-unit sample per switch.',
  },
  {
    file: 'yaxis_stemwobble_all3_rotated.mp4',
    title: 'Y-axis stem wobble — all three',
    caption: 'G = Cullinan, H = HoTO, J = Poseidon. Front-to-back movement also appears very low. Combined with the X-axis and keycap-on results, the overall impression is that wobble is impressively well controlled across the sample.',
    note: 'Keycaps removed · Y-axis often differs from X-axis due to stem geometry.',
  },
  {
    file: 'keycapwobble_clearance_all3_rotated.mp4',
    title: 'Keycap wobble and clearance — all three',
    caption: 'G = Cullinan, H = HoTO, J = Poseidon. With caps installed, all three still appear stable. This is closer to real use and the result that matters most in practice. Clearance looks clean and movement is controlled rather than sloppy.',
    note: 'Keycap mounted · The state that matters for actual typing.',
  },
]

export default function StabilityTest() {
  return (
    <section id="stability" className="py-16 px-6 relative overflow-hidden">

      {/* Very subtle background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/media/photos/cullinan_nolight.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.028,
          filter: 'blur(3px)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">07 / Stability & Press Tests</div>
            <h2 className="section-heading">Stem Wobble · Off-centre Press · Keycap Clearance</h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Six clips, all three switch positions side by side. Sample-level observations — not a full production tolerance audit.
            </p>
          </div>
        </AnimatedSection>

        {/* Key finding callout */}
        <AnimatedSection delay={50}>
          <div
            className="mb-8 rounded-xl p-5 flex gap-3 items-start"
            style={{ background: 'rgba(96,165,250,.05)', border: '1px solid rgba(96,165,250,.14)' }}
          >
            <span style={{ color: 'rgba(147,197,253,.7)', fontSize: 14, flexShrink: 0, marginTop: 2 }}>◆</span>
            <p style={{ fontSize: 14, color: 'rgba(203,213,225,.85)', lineHeight: 1.7 }}>
              <span className="font-semibold text-white">Headline finding:</span>{' '}
              X-axis and Y-axis wobble are little to non-existent across all three switches — even with keycaps
              installed. That is genuinely impressive for factory-stock HE switches and speaks well to the build quality
              of the Diamond series. These are sample-level observations, but the consistency across the three positions
              is encouraging.
            </p>
          </div>
        </AnimatedSection>

        {/* Legend */}
        <AnimatedSection delay={80}>
          <div
            className="mb-8 flex flex-wrap gap-4 items-center justify-center px-4 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <span className="flex items-center gap-2 font-mono" style={{ fontSize: 13, color: 'rgba(226,232,240,.8)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(255,255,255,.65)', display: 'inline-block' }} />
              G = Cullinan
            </span>
            <span className="flex items-center gap-2 font-mono" style={{ fontSize: 13, color: 'rgba(147,197,253,.8)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(96,165,250,.75)', display: 'inline-block' }} />
              H = Heart of the Ocean
            </span>
            <span className="flex items-center gap-2 font-mono" style={{ fontSize: 13, color: 'rgba(103,232,249,.8)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(6,182,212,.8)', display: 'inline-block' }} />
              J = Poseidon
            </span>
            <span className="font-mono" style={{ fontSize: 12, color: 'rgba(100,116,139,.5)' }}>
              · Tester-unit samples, G/H/J positions only
            </span>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clips.map((c, i) => (
            <AnimatedSection key={c.file} delay={i * 55}>
              <div
                className="card-hover flex flex-col gap-3 rounded-xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.07)' }}
              >
                <video
                  src={`https://pub-a6dbb7fc556d4f5aac1797af1c90c576.r2.dev/${c.file}`}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full"
                  style={{ maxHeight: 280, background: '#0a0a14', display: 'block' }}
                />
                <div className="px-4 pb-4 flex flex-col gap-2">
                  <p className="font-semibold text-white" style={{ fontSize: 14 }}>{c.title}</p>
                  <p style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.65 }}>
                    {c.caption}
                  </p>
                  <p className="font-mono mt-1" style={{ fontSize: 12, color: 'rgba(100,116,139,.55)' }}>
                    ↳ {c.note}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Sample-level caution */}
        <AnimatedSection delay={340}>
          <div
            className="mt-8 rounded-xl px-5 py-4"
            style={{ background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.11)' }}
          >
            <p style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>
              <span className="font-semibold" style={{ color: 'rgba(253,224,133,.85)' }}>Sample-level note:</span>{' '}
              These clips cover only the three key positions I received — G, H, and J. They are useful for
              relative comparison in this session, but switch behaviour can vary between units and board positions.
              Do not extrapolate these results to full-batch consistency without further testing.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
