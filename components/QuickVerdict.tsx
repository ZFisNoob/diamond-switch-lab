import AnimatedSection from './AnimatedSection'
import { SWITCHES } from '@/lib/switchData'

type Accent = 'cullinan' | 'hoto' | 'poseidon' | 'caution'

interface Card {
  num: string
  title: string
  body: string
  accent: Accent
}

const [CULLINAN, HOTO, POSEIDON] = SWITCHES

const cards: Card[] = [
  {
    num: '01',
    title: `${CULLINAN.name} — clearest RGB showcase`,
    body: `Fully clear PC housing and ${CULLINAN.stem} stem pass light through with zero tinting. Under south-facing LEDs, Cullinan produces the sharpest and most direct colour output of the three. The official sound profile is ${CULLINAN.soundProfile} — refined and articulate, closer to a premium muted linear than anything harsh.`,
    accent: 'cullinan',
  },
  {
    num: '02',
    title: `${HOTO.name} — the Blue Diamond identity`,
    body: `Light blue transparent PC top and bottom, ${HOTO.stem} stem, ${HOTO.lightGuide} light guide. The most cohesive themed aesthetic in the lineup — consistently blue and atmospheric across every lighting mode. Official sound profile: ${HOTO.soundProfile}. The best sounding of the three in my WASD test.`,
    accent: 'hoto',
  },
  {
    num: '03',
    title: `${POSEIDON.name} — the feel pick`,
    body: `PC top housing, ${POSEIDON.stem} stem, ${POSEIDON.lightGuide} diffuser, ${POSEIDON.magnet} magnet, and ${POSEIDON.bottomOutForce} bottom-out. The most mechanically distinct of the three — and in this session, the most satisfying to press. The heavier bottom-out gives it a soft, full-bodied landing. No official sound profile is listed in the provided spec sheet.`,
    accent: 'poseidon',
  },
  {
    num: '04',
    title: 'Biggest unknown — full session still needed',
    body: 'Stability and sound impressions come from G, H, and J key positions only. Full-board feel, long-term lube consistency, batch-wide quality, and extended daily use all remain untested. These are first impressions, not final conclusions.',
    accent: 'caution',
  },
]

const S: Record<Accent, { card: React.CSSProperties; num: string }> = {
  cullinan: { card: { background: 'rgba(226,232,240,.03)', border: '1px solid rgba(226,232,240,.1)'  }, num: 'rgba(226,232,240,.4)' },
  hoto:     { card: { background: 'rgba(96,165,250,.05)',  border: '1px solid rgba(96,165,250,.16)'  }, num: 'rgba(96,165,250,.6)' },
  poseidon: { card: { background: 'rgba(6,182,212,.04)',   border: '1px solid rgba(6,182,212,.14)'   }, num: 'rgba(6,182,212,.6)' },
  caution:  { card: { background: 'rgba(201,168,76,.04)',  border: '1px solid rgba(201,168,76,.12)'  }, num: 'rgba(201,168,76,.6)' },
}

export default function QuickVerdict() {
  return (
    <section id="quick-verdict" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">01 / Quick Verdict</div>
            <h2 className="section-heading">At a Glance</h2>
            <p className="mt-3 max-w-md mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Four observations based on what the available samples, photos, and test media actually show.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <AnimatedSection key={c.num} delay={i * 70}>
              <div
                className="card-hover rounded-xl p-6 h-full flex flex-col gap-3"
                style={S[c.accent].card}
              >
                <div className="flex items-start gap-2">
                  <span className="font-mono flex-shrink-0 mt-0.5" style={{ fontSize: 11, color: S[c.accent].num }}>
                    {c.num}
                  </span>
                  <h3 className="font-semibold text-white leading-tight" style={{ fontSize: 15 }}>{c.title}</h3>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>
                  {c.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
