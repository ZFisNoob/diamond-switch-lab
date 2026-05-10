import AnimatedSection from './AnimatedSection'

interface SoundClip {
  id: string
  label: string
  sub: string
  switchKey: 'cullinan' | 'ocean'
  file: string | null
}

const clips: SoundClip[] = [
  {
    id: 'c-spacebar',
    label: 'Cullinan — Spacebar',
    sub: 'H key · isolated spacebar test',
    switchKey: 'cullinan',
    file: null,
  },
  {
    id: 'h-spacebar',
    label: 'Heart of the Ocean — Spacebar',
    sub: 'J key · isolated spacebar test',
    switchKey: 'ocean',
    file: null,
  },
  {
    id: 'c-wasd',
    label: 'Cullinan — WASD Spam',
    sub: 'H key · rapid key spam, gaming cadence',
    switchKey: 'cullinan',
    file: null,
  },
  {
    id: 'h-wasd',
    label: 'Heart of the Ocean — WASD Spam',
    sub: 'J key · rapid key spam, gaming cadence',
    switchKey: 'ocean',
    file: null,
  },
]

export default function SoundTest() {
  return (
    <section id="sound" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <div className="section-label mb-3">07 / Limited Sound Check</div>
            <h2 className="section-heading">Spacebar and WASD Spam</h2>
            <p className="text-sm mt-2 max-w-lg mx-auto" style={{ color: 'rgba(100,116,139,.7)' }}>
              Because I only have a limited number of switches, this is not a full-board typing sound test.
              These clips compare sharpness, pitch, bottom-out character, and obvious ping
              under the same recording setup — nothing more.
            </p>
          </div>
        </AnimatedSection>

        {/* Honest scope callout */}
        <AnimatedSection delay={60}>
          <div
            className="mb-8 rounded-xl p-5 flex gap-3 items-start"
            style={{ background: 'rgba(201,168,76,.05)', border: '1px solid rgba(201,168,76,.14)' }}
          >
            <span style={{ color: 'rgba(253,224,133,.65)', fontSize: 14, flexShrink: 0, marginTop: 1 }}>⚠</span>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,.78)' }}>
              In my sample clips, I am listening for pitch, harshness, bottom-out character, and obvious
              ping under the same recording chain. Do not treat this as the definitive sound of either switch
              at full-board scale. Based on the spacebar and WASD sample only — not a representation
              of a complete typing experience.
            </p>
          </div>
        </AnimatedSection>

        {/* General footage clip */}
        <AnimatedSection delay={80}>
          <div
            className="mb-8 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,.07)' }}
          >
            <video
              src="https://pub-a6dbb7fc556d4f5aac1797af1c90c576.r2.dev/VID20260509132021.mp4"
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full"
              style={{ background: '#0a0a14', display: 'block', maxHeight: 400 }}
            />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs font-semibold text-white">General session footage</p>
              <p className="text-xs" style={{ color: 'rgba(148,163,184,.7)' }}>
                H = Cullinan, J = Heart of the Ocean. From this limited recording — assign this clip
                to spacebar or WASD test by renaming once you extract the relevant segment.
              </p>
              <p className="text-xs font-mono" style={{ color: 'rgba(100,116,139,.5)' }}>
                ↳ Based on spacebar/WASD sample only — not a full typing test
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Per-switch clip placeholders */}
        <div className="grid sm:grid-cols-2 gap-4">
          {clips.map((c, i) => {
            const isC = c.switchKey === 'cullinan'
            const borderColor = isC ? 'rgba(226,232,240,.09)' : 'rgba(96,165,250,.14)'
            const bg = isC ? 'rgba(226,232,240,.02)' : 'rgba(96,165,250,.03)'
            const dotColor = isC ? 'rgba(255,255,255,.65)' : 'rgba(96,165,250,.75)'
            const labelColor = isC ? 'rgba(226,232,240,.75)' : 'rgba(147,197,253,.8)'

            return (
              <AnimatedSection key={c.id} delay={100 + i * 60}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ background: bg, border: `1px solid ${borderColor}` }}
                >
                  {c.file ? (
                    <video
                      src={`/media/videos/${c.file}`}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full"
                      style={{ background: '#0a0a14', display: 'block' }}
                    />
                  ) : (
                    <div
                      className="media-ph"
                      style={{ minHeight: 80 }}
                    >
                      <span style={{ fontSize: 14, opacity: .35 }}>♫</span>
                      <span>Add audio/video clip here</span>
                      <span style={{ opacity: .38, fontSize: 10 }}>
                        Replace with &lt;video src&gt; or &lt;audio src&gt;
                      </span>
                    </div>
                  )}
                  <div className="px-4 py-3 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor, display: 'inline-block' }} />
                      <span className="text-xs font-semibold" style={{ color: labelColor }}>{c.label}</span>
                    </div>
                    <p className="text-xs font-mono" style={{ color: 'rgba(100,116,139,.55)' }}>{c.sub}</p>
                    <p className="text-xs" style={{ color: 'rgba(100,116,139,.5)' }}>
                      In my sample clip — based on this position only, not full-board
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={340}>
          <p className="mt-6 text-xs font-mono text-center" style={{ color: 'rgba(100,116,139,.4)' }}>
            Same board · Same keycap · Same recording setup · H = Cullinan · J = Heart of the Ocean
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
