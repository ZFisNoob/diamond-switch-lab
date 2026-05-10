import AnimatedSection from './AnimatedSection'

const methods = [
  {
    num: '01',
    title: 'Sound Test',
    desc: 'Recorded via a cardioid microphone at fixed 20 cm distance. Gain, room treatment, and recording chain unchanged between sessions. Evaluated for pitch, bottom-out character, harshness, and spacebar thock.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'RGB / Light Diffusion Test',
    desc: 'Camera exposure and white balance locked. Tested across: RGB off, white, blue, and full-rainbow profiles. Both switches mounted in the same PCB position for identical LED proximity.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Stability / Off-centre Press',
    desc: 'Filmed in macro at 120 fps. Tested centre, top-left, bottom-right, and diagonal corners. Stem wobble and keycap clearance measured against a reference linear from the same board.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v8m-4-4h8" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Daily Typing & Gaming',
    desc: 'Continuous use sessions of up to two hours across typing and gaming contexts. Assessed for fatigue, lube feel degradation, actuation consistency, and sound change under heat.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Limitations',
    desc: 'This is not laboratory-grade measurement. All comparisons are controlled using the same board, keycaps, deskmat, recording distance, and camera settings — but listener subjectivity and single-unit sample variance remain real factors.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4m0 4h.01" />
      </svg>
    ),
  },
]

export default function TestMethodology() {
  return (
    <section id="methodology" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <div className="section-label mb-3">03 / Test Methodology</div>
            <h2 className="section-heading">How This Lab Was Run</h2>
            <p className="text-sm mt-2 max-w-md mx-auto" style={{ color: 'rgba(100,116,139,.7)' }}>
              Controlled and repeatable where possible. Honest about where it isn't.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {methods.map((m, i) => (
            <AnimatedSection key={m.num} delay={i * 60}>
              <div
                className="glass rounded-xl p-6 h-full flex flex-col gap-3 transition-all duration-300 hover:brightness-110"
                style={m.num === '05' ? { borderColor: 'rgba(201,168,76,.12)', background: 'rgba(201,168,76,.03)' } : {}}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: m.num === '05' ? 'rgba(201,168,76,.1)' : 'rgba(96,165,250,.1)',
                      color: m.num === '05' ? 'rgba(253,224,133,.8)' : 'rgba(147,197,253,.8)',
                    }}
                  >
                    {m.icon}
                  </div>
                  <span className="font-mono text-xs" style={{ color: 'rgba(100,116,139,.4)' }}>{m.num}</span>
                </div>
                <h3 className="font-semibold text-white text-sm">{m.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,.7)' }}>
                  {m.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={320}>
          <div
            className="mt-6 rounded-xl px-5 py-4 flex gap-3 items-start"
            style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <span style={{ color: 'rgba(96,165,250,.6)', fontSize: 13, flexShrink: 0, marginTop: 1 }}>▸</span>
            <p className="text-xs font-mono leading-relaxed" style={{ color: 'rgba(100,116,139,.65)' }}>
              Hardware: [Your board] · Keycaps: [Your keycap set] · Deskmat: [Your deskmat] ·
              Recording: [Your mic model] · Camera: [Your camera model] · All sessions at [room conditions].
              Replace these placeholders with your actual test setup before publishing.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
