import AnimatedSection from './AnimatedSection'

const timeline = [
  {
    time: 'First 10 minutes',
    cullinan: "Immediately smooth — the factory lube is light and even. No scratchy break-in period. The clear housing is noticeably striking under RGB. The acoustic profile is quieter than expected; this isn't a poppy switch at all.",
    ocean: "A very similar out-of-box feel. The blue housing changes the visual mood of the board entirely. The subtle pop at bottom-out gives it just slightly more feedback than Cullinan — it's barely there, but noticeable if you're listening.",
    impression: 'neutral',
  },
  {
    time: '30 minutes typing',
    cullinan: "Comfort is good. The 45 gf bottom-out doesn't feel heavy over a long passage. The lube is holding. Pitch starts to become familiar — it's dry and controlled rather than thocky. Good for quiet environments.",
    ocean: "Same comfort level. The frosted diffuser creates a beautiful ambient glow that's easy to appreciate mid-session. Acoustics remain consistent. No sign of lube thin spots developing.",
    impression: 'positive',
  },
  {
    time: '1 hour gaming',
    cullinan: 'WASD spam is satisfying. The adjustable actuation means you can tune it shallower for rapid inputs without sacrificing accuracy on diagonals. No finger fatigue. The switch feels slightly different at speed — crisper than during typing.',
    ocean: "Comparable gaming feel. The slight pop at bottom-out becomes more pronounced during rapid gaming spam — whether that's a positive or negative is genuinely personal preference. The blue aesthetic feels intentional in a gaming context.",
    impression: 'positive',
  },
  {
    time: '2 hours mixed use',
    cullinan: "No degradation. The lube is still consistent. The switch doesn't feel like it \"opens up\" the way some factory-lubed switches do — it seems well-calibrated from the start. Sound remains stable.",
    ocean: 'Same story. No rattle developing on the stabs. The pop is still present at the same intensity — no sign of lube burning off. Would want a week of data to say more.',
    impression: 'positive',
  },
  {
    time: 'Final comfort impression',
    cullinan: "The Cullinan is a refined, neutral daily driver. It doesn't demand attention — it just works. The PA12 stem is a curious material choice that seems to pay off in precision. Best for clean, minimal builds where RGB clarity matters.",
    ocean: "Heart of the Ocean has a character that Cullinan doesn't. The blue personality is consistent from the first keystroke to the last. For anyone building a themed board, this is a rare switch that actually delivers on its visual promise.",
    impression: 'positive',
  },
]

const impressionColor = {
  neutral:  'rgba(100,116,139,.55)',
  positive: 'rgba(96,165,250,.55)',
  caution:  'rgba(201,168,76,.55)',
}

export default function DailyUse() {
  return (
    <section id="daily-use" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <div className="section-label mb-3">07 / Daily Use</div>
            <h2 className="section-heading">Living with the Switches</h2>
            <p className="text-sm mt-2 max-w-md mx-auto" style={{ color: 'rgba(100,116,139,.7)' }}>
              Honest, time-stamped impressions from a single extended session.
              No numbers — just what it actually felt like.
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-3 top-3 bottom-3 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(96,165,250,.3), rgba(96,165,250,.05))' }}
          />

          <div className="flex flex-col gap-0">
            {timeline.map((entry, i) => (
              <AnimatedSection key={entry.time} delay={i * 80}>
                <div className="flex gap-6 sm:gap-8 pb-10">
                  {/* Node */}
                  <div className="flex flex-col items-center flex-shrink-0 hidden sm:flex">
                    <div
                      style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: impressionColor[entry.impression as keyof typeof impressionColor],
                        border: `1px solid ${impressionColor[entry.impression as keyof typeof impressionColor]}`,
                        marginTop: 5,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-semibold" style={{ color: 'rgba(96,165,250,.8)' }}>
                        {entry.time}
                      </span>
                      {i < timeline.length - 1 && (
                        <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,.05)' }} />
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div
                        className="rounded-xl p-4"
                        style={{ background: 'rgba(226,232,240,.02)', border: '1px solid rgba(226,232,240,.08)' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,.6)', display: 'inline-block' }} />
                          <span className="text-xs font-mono" style={{ color: 'rgba(226,232,240,.55)' }}>Cullinan</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,.78)' }}>
                          {entry.cullinan}
                        </p>
                      </div>
                      <div
                        className="rounded-xl p-4"
                        style={{ background: 'rgba(96,165,250,.04)', border: '1px solid rgba(96,165,250,.1)' }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(96,165,250,.75)', display: 'inline-block' }} />
                          <span className="text-xs font-mono" style={{ color: 'rgba(147,197,253,.65)' }}>Heart of the Ocean</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,.78)' }}>
                          {entry.ocean}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
