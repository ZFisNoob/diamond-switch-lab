import AnimatedSection from './AnimatedSection'
import { SWITCHES } from '@/lib/switchData'

export default function SwitchIdentity() {
  return (
    <section id="switch-identity" className="py-16 px-6 relative overflow-hidden">

      {/* Subtle per-switch background glow zones */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(226,232,240,.018) 0%, rgba(96,165,250,.025) 50%, rgba(6,182,212,.018) 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <div className="section-label mb-3">02 / The Three Switches</div>
            <h2 className="section-heading">Meet the Lineup</h2>
            <p className="mt-3 max-w-md mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Three switches. One Hall Effect mechanism. Different materials, different optical personalities.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5">
          {SWITCHES.map((sw, i) => (
            <AnimatedSection key={sw.id} delay={i * 90}>
              <div
                className="card-hover rounded-2xl overflow-hidden flex flex-col"
                style={{ background: sw.accent.bg, border: `1px solid ${sw.accent.border}` }}
              >
                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '1/1', background: 'rgba(0,0,0,.35)' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sw.photo}
                    alt={`${sw.name} switch product photo`}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                  {/* Key badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        background: 'rgba(0,0,0,.6)',
                        border: `1px solid ${sw.accent.border}`,
                        color: sw.accent.label,
                        backdropFilter: 'blur(6px)',
                        letterSpacing: '.12em',
                      }}
                    >
                      {sw.key} key
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: sw.accent.dot, display: 'inline-block', flexShrink: 0,
                      }}
                    />
                    <h3 className="font-bold text-sm" style={{ color: sw.accent.label }}>
                      {sw.name}
                    </h3>
                  </div>

                  <span
                    className="font-mono text-xs self-start px-2.5 py-1 rounded-md"
                    style={sw.accent.tag}
                  >
                    {sw.labelTag}
                  </span>

                  <div className="flex flex-col gap-2 mt-1">
                    {[
                      { field: 'Housing', value: `${sw.topHousing} (top & bottom)` },
                      { field: 'Stem',    value: sw.stem },
                      { field: 'Diffuser',value: sw.lightGuide },
                      { field: 'Magnet',  value: sw.magnet },
                      { field: 'B/O',     value: sw.bottomOutForce },
                    ].map(({ field, value }) => (
                      <div key={field} className="flex gap-2" style={{ fontSize: 13 }}>
                        <span className="font-mono flex-shrink-0" style={{ color: 'rgba(100,116,139,.5)', minWidth: 58 }}>{field}</span>
                        <span style={{ color: 'rgba(203,213,225,.82)', lineHeight: 1.45 }}>{value}</span>
                      </div>
                    ))}
                    {sw.soundProfile && (
                      <div className="flex gap-2" style={{ fontSize: 13 }}>
                        <span className="font-mono flex-shrink-0" style={{ color: 'rgba(100,116,139,.5)', minWidth: 58 }}>Sound</span>
                        <span style={{ color: 'rgba(203,213,225,.82)' }}>{sw.soundProfile}</span>
                      </div>
                    )}
                  </div>

                  <p
                    className="mt-auto pt-3 leading-relaxed"
                    style={{ fontSize: 13, color: 'rgba(203,213,225,.68)', borderTop: `1px solid ${sw.accent.border}`, lineHeight: 1.65 }}
                  >
                    {sw.character}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
