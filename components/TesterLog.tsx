import AnimatedSection from './AnimatedSection'

type Confidence = 'medium' | 'low–medium' | 'low'

interface LogRow {
  test: string
  media: string
  lookedFor: string
  confidence: Confidence
}

const rows: LogRow[] = [
  {
    test: 'RGB clarity',
    media: '12 photos: rgb / blue / white / no-light · all three switches',
    lookedFor: 'Brightness, colour diffusion, housing transparency, and how each switch changes the board visual mood',
    confidence: 'medium',
  },
  {
    test: 'Stem wobble',
    media: 'xaxis_stemwobble_all3_rotated.mp4 · yaxis_stemwobble_all3_rotated.mp4',
    lookedFor: 'Visible stem displacement along X and Y with keycaps removed — G, H, J keys',
    confidence: 'low–medium',
  },
  {
    test: 'Keycap wobble & clearance',
    media: 'keycapwobble_clearance_all3_rotated.mp4',
    lookedFor: 'Mounted keycap lateral movement and visible stability across all three switches',
    confidence: 'low–medium',
  },
  {
    test: 'Off-centre press',
    media: 'centrepress_all3.mp4 · topleft_all3.mp4 · bottomright_all3.mp4',
    lookedFor: 'Whether stem binds or tilts away from centre — all three switches at each position',
    confidence: 'medium',
  },
  {
    test: 'WASD spam',
    media: 'cullinan_wasd.mp4 · poseidon_wasd.mp4 · heartoftheocean_wasd.mp4',
    lookedFor: 'Pitch, sharpness, bottom-out character, and audible ping — per-switch isolated WASD clips',
    confidence: 'low–medium',
  },
]

const confStyle: Record<Confidence, React.CSSProperties> = {
  'medium':     { background: 'rgba(96,165,250,.1)',  border: '1px solid rgba(96,165,250,.25)',  color: 'rgba(147,197,253,.9)' },
  'low–medium': { background: 'rgba(201,168,76,.09)', border: '1px solid rgba(201,168,76,.2)',   color: 'rgba(253,224,133,.85)' },
  'low':        { background: 'rgba(239,68,68,.08)',  border: '1px solid rgba(239,68,68,.2)',    color: 'rgba(252,165,165,.85)' },
}

export default function TesterLog() {
  return (
    <section id="tester-log" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">05 / Tester Log</div>
            <h2 className="section-heading">What I Could Actually Test</h2>
            <p className="mt-2 max-w-md mx-auto" style={{ fontSize: 14, color: 'rgba(100,116,139,.7)' }}>
              Every test listed here has associated media. Confidence reflects
              sample size and test conditions — not the quality of the switches.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          {/* Desktop table */}
          <div
            className="hidden sm:block rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,.07)' }}
          >
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="text-left" style={{ width: '15%' }}>Test</th>
                  <th className="text-left" style={{ width: '30%' }}>Media used</th>
                  <th className="text-left" style={{ width: '36%' }}>What I looked for</th>
                  <th className="text-left" style={{ width: '19%' }}>Confidence</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.test}>
                    <td className="param-col font-medium" style={{ color: 'rgba(226,232,240,.85)' }}>{r.test}</td>
                    <td>
                      <span className="font-mono" style={{ fontSize: 12, color: 'rgba(96,165,250,.75)' }}>
                        {r.media}
                      </span>
                    </td>
                    <td style={{ fontSize: 13, color: 'rgba(203,213,225,.78)' }}>{r.lookedFor}</td>
                    <td>
                      <span className="verdict-badge" style={confStyle[r.confidence]}>
                        {r.confidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden flex flex-col gap-3">
            {rows.map(r => (
              <div
                key={r.test}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)' }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-semibold text-white" style={{ fontSize: 14 }}>{r.test}</span>
                  <span className="verdict-badge flex-shrink-0" style={confStyle[r.confidence]}>
                    {r.confidence}
                  </span>
                </div>
                <p className="font-mono mb-2" style={{ fontSize: 12, color: 'rgba(96,165,250,.75)' }}>{r.media}</p>
                <p className="leading-relaxed" style={{ fontSize: 13, color: 'rgba(203,213,225,.75)' }}>{r.lookedFor}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={160}>
          <p className="mt-5 font-mono text-center" style={{ fontSize: 12, color: 'rgba(100,116,139,.5)' }}>
            G = Cullinan &nbsp;·&nbsp; H = Heart of the Ocean &nbsp;·&nbsp; J = Poseidon &nbsp;·&nbsp; All clips taken in the same session
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
