import AnimatedSection from './AnimatedSection'

const canTest = [
  'RGB clarity and light diffusion — all three switches under four lighting modes',
  'Material and visual comparison — housing colour, stem colour, diffuser character',
  'Stem wobble — X-axis and Y-axis displacement with keycaps removed (G, H, J keys)',
  'Keycap wobble and clearance — mounted keycap stability across all three switches',
  'Centre press — reference press for all three side-by-side',
  'Off-centre press — top-left and bottom-right corners (all three switches)',
  'WASD spam sound impression — three separate clips under the same recording setup',
]

const cannotTest = [
  'Spacebar sound — stabiliser rattle on this board makes spacebar recording unreliable',
  'Full-board typing sound — not enough switches for a complete board fill',
  'Full-board consistency — G, H, J sample cannot speak for batch-wide quality',
  'Long-term lube behaviour — requires months of use, not a short tester session',
  'Long-term magnetic or actuation consistency — no drift data over time',
  'Switch-to-switch unit variance — limited to three key positions only',
  'Lab-grade acoustic or displacement measurements — these are practical visual comparisons only',
]

export default function Limitations() {
  return (
    <section id="limitations" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">04 / Scope</div>
            <h2 className="section-heading">What This Review Can and Cannot Test</h2>
            <p className="mt-2 max-w-lg mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Transparency, not apology. Understanding the scope makes the evidence more credible, not less.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Can test */}
          <AnimatedSection delay={80}>
            <div
              className="rounded-xl p-6 h-full"
              style={{ background: 'rgba(96,165,250,.04)', border: '1px solid rgba(96,165,250,.12)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: 'rgba(147,197,253,.7)', fontSize: 15 }}>✓</span>
                <h3 className="font-semibold text-white" style={{ fontSize: 14 }}>Can test</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {canTest.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span
                      style={{
                        width: 4, height: 4, borderRadius: '50%',
                        background: 'rgba(147,197,253,.55)',
                        flexShrink: 0, marginTop: 6,
                      }}
                    />
                    <span className="leading-relaxed" style={{ fontSize: 14, color: 'rgba(203,213,225,.85)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Cannot fully test */}
          <AnimatedSection delay={140}>
            <div
              className="rounded-xl p-6 h-full"
              style={{ background: 'rgba(201,168,76,.03)', border: '1px solid rgba(201,168,76,.1)' }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color: 'rgba(253,224,133,.65)', fontSize: 15 }}>✕</span>
                <h3 className="font-semibold text-white" style={{ fontSize: 14 }}>Cannot fully test</h3>
              </div>
              <ul className="flex flex-col gap-2.5">
                {cannotTest.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span
                      style={{
                        width: 4, height: 4, borderRadius: '50%',
                        background: 'rgba(253,224,133,.45)',
                        flexShrink: 0, marginTop: 6,
                      }}
                    />
                    <span className="leading-relaxed" style={{ fontSize: 14, color: 'rgba(203,213,225,.82)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
