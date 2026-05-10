import AnimatedSection from './AnimatedSection'

const cards = [
  {
    icon: '✓',
    title: 'What Wuque got right',
    body: `Three genuinely distinct identities within one switch family. Cullinan, Heart of the Ocean, and Poseidon each have a clear character that holds across every test condition — and they manage this without changing the core Hall Effect mechanism. That is harder to achieve than it looks.

HoTO's Deep Thock profile is the most characterful of the three in my WASD tests, which lines up with its premium thock marketing. Poseidon's heavier bottom-out and N52 magnet give it a different feel signature, not just a different colour. These are real product differences, not just visual ones.`,
    accent: 'ocean' as const,
  },
  {
    icon: '◎',
    title: 'What could be clearer',
    body: `The real-world impact of Poseidon's N52 magnet versus the 3.6 mm central magnet on the other two is never explained in the tester materials. Does it affect HE calibration sensitivity, actuation resolution accuracy, or the precision of advertised actuation points? A brief technical note from Wuque would help buyers decide.

More detail on manufacturing tolerance expectations would also be useful — specifically, how precisely the switches track to their advertised actuation points, what batch-to-batch variance is acceptable, and how much switch-to-switch variation is considered within spec. Poseidon's sound profile is also notably absent from the spec sheet.`,
    accent: 'caution' as const,
  },
  {
    icon: '→',
    title: 'What I want to test next',
    body: `A full 65-piece set of each variant for a proper board-wide comparison — that is the only way to evaluate full-board sound at scale, long-term lube behaviour, and batch-wide uniformity. Three key positions cannot represent that.

I also want to test each switch in different build configurations. Everything here was on the CF plate with the stock CNC aluminium case. Different plate materials, different cases, with and without foam, and different PCBs would likely produce meaningfully different sound results — especially for Poseidon, where the heavier bottom-out character may behave very differently on a softer mount.

Especially Poseidon across longer Valorant sessions. It currently feels like the strongest feel pick in this limited test, and extended daily gaming use is the most meaningful follow-up I can do before recommending it with confidence.`,
    accent: 'neutral' as const,
  },
]

type Accent = 'ocean' | 'caution' | 'neutral'

const S: Record<Accent, { card: React.CSSProperties; icon: string; heading: string }> = {
  ocean:   { card: { background: 'rgba(96,165,250,.04)',  border: '1px solid rgba(96,165,250,.13)'  }, icon: 'rgba(147,197,253,.75)',  heading: 'rgba(147,197,253,.95)'  },
  caution: { card: { background: 'rgba(201,168,76,.04)',  border: '1px solid rgba(201,168,76,.13)'  }, icon: 'rgba(253,224,133,.7)',   heading: 'rgba(253,224,133,.9)'  },
  neutral: { card: { background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.08)' }, icon: 'rgba(100,116,139,.65)', heading: 'rgba(226,232,240,.9)'  },
}

export default function FeedbackSection() {
  return (
    <section id="feedback" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">10 / Feedback to Wuque Studio</div>
            <h2 className="section-heading">Tester Notes</h2>
            <p className="mt-3 max-w-md mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Honest observations from the three-switch testing round, aimed at being useful for the product team.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map((c, i) => {
            const s = S[c.accent]
            return (
              <AnimatedSection key={c.title} delay={i * 80}>
                <div
                  className="card-hover rounded-xl p-6 h-full flex flex-col gap-3"
                  style={s.card}
                >
                  <div className="flex items-center gap-2">
                    <span style={{ color: s.icon, fontSize: 16 }}>{c.icon}</span>
                    <h3 className="font-semibold" style={{ fontSize: 14, color: s.heading }}>
                      {c.title}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    {c.body.split('\n\n').map((para, j) => (
                      <p key={j} style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
