import AnimatedSection from './AnimatedSection'
import { SWITCHES } from '@/lib/switchData'

const [CULLINAN, HOTO, POSEIDON] = SWITCHES

interface WASDClip {
  sw: typeof CULLINAN
  file: string
  sub: string
  caption: string
}

const clips: WASDClip[] = [
  {
    sw: CULLINAN,
    file: 'cullinan_wasd.mp4',
    sub: 'Transparent PA12 stem · Fully clear PC housing · Official: Muted',
    caption: "Cullinan sounds the most refined and controlled of the three. It has a clean, muted repeated press character with a slightly sharper and more articulate top note than the POM stem switches. I am mainly listening for whether it sounds softer or sharper than the POM stem variants — in this setup it comes across as premium muted rather than dull.",
  },
  {
    sw: HOTO,
    file: 'heartoftheocean_wasd.mp4',
    sub: 'Light Blue POM stem · Light Blue Transparent PC housing · Official: Deep Thock',
    caption: "Heart of the Ocean sounds slightly deeper and rounder than Cullinan in this setup. The official Deep Thock profile makes sense here. The bottom out has a fuller, more polished thock quality, and the light blue POM stem gives it a softer acoustic character. To my ear, it lands closest to what I associate with a polished HE thock switch.",
  },
  {
    sw: POSEIDON,
    file: 'poseidon_wasd.mp4',
    sub: 'Light Blue POM stem · PC top + Light Blue PC bottom · N52 · 50 gf B/O',
    caption: "Poseidon is the deepest and fullest sounding of the three in my isolated WASD test. The heavier 50 ± 7 gf bottom out and N52 magnet make it feel more mechanically distinct. It has the softest landing and the most satisfying repeated press feel in this session. Coming from the TTC King of Magnetic on a different reference board, Poseidon feels on another level in terms of fullness and overall press satisfaction.",
  },
]

interface CompareRow {
  label: string
  cullinan: string
  hoto: string
  poseidon: string
}

const compareRows: CompareRow[] = [
  {
    label: 'Official sound profile',
    cullinan: 'Muted',
    hoto: 'Deep Thock',
    poseidon: 'Not listed in provided spec sheet',
  },
  {
    label: 'Pitch (in this setup)',
    cullinan: 'Mid · clean and articulate',
    hoto: 'Low-mid · slightly deeper and rounder',
    poseidon: 'Low-mid · fullest and most substantial',
  },
  {
    label: 'Harshness',
    cullinan: 'Low · no harshness detected',
    hoto: 'Low · smooth from start to bottom-out',
    poseidon: 'Low · very smooth, softest landing',
  },
  {
    label: 'Bottom-out character',
    cullinan: 'Clean and muted · decisive without being loud',
    hoto: 'Thocky and rounded · the most polished',
    poseidon: 'Deep and soft · heavier weight adds presence',
  },
  {
    label: 'Obvious ping',
    cullinan: 'None audible in this clip',
    hoto: 'None audible',
    poseidon: 'None audible',
  },
  {
    label: 'Repeated press consistency',
    cullinan: 'Very consistent across the clip',
    hoto: 'Consistent',
    poseidon: 'Consistent',
  },
  {
    label: 'Short overall take',
    cullinan: 'Refined and direct · premium muted character',
    hoto: 'Deeper and more atmospheric · best thock of the three',
    poseidon: 'Fullest and softest · the most satisfying overall',
  },
]

const accentStyles = {
  cullinan: { border: 'rgba(226,232,240,.1)', bg: 'rgba(226,232,240,.025)', dot: 'rgba(255,255,255,.65)', label: 'rgba(226,232,240,.9)', sub: 'rgba(226,232,240,.45)' },
  hoto:     { border: 'rgba(96,165,250,.15)', bg: 'rgba(96,165,250,.03)', dot: 'rgba(96,165,250,.75)', label: 'rgba(147,197,253,.9)', sub: 'rgba(147,197,253,.45)' },
  poseidon: { border: 'rgba(6,182,212,.15)', bg: 'rgba(6,182,212,.03)', dot: 'rgba(6,182,212,.8)', label: 'rgba(103,232,249,.9)', sub: 'rgba(103,232,249,.45)' },
}

export default function WASDSound() {
  return (
    <section id="wasd-sound" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">08 / WASD Sound</div>
            <h2 className="section-heading">WASD Spam — Three Switches</h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Three isolated clips, one per switch, recorded on the same board in the same session.
              WASD spam only — not a full typing test.
            </p>
          </div>
        </AnimatedSection>

        {/* Context note */}
        <AnimatedSection delay={55}>
          <div
            className="mb-8 rounded-xl p-5 flex gap-3 items-start"
            style={{ background: 'rgba(201,168,76,.05)', border: '1px solid rgba(201,168,76,.14)' }}
          >
            <span style={{ color: 'rgba(253,224,133,.65)', fontSize: 14, flexShrink: 0, marginTop: 2 }}>⚠</span>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(203,213,225,.82)' }}>
              <span className="font-semibold text-white">Spacebar excluded.</span>{' '}
              My spacebar stabilisers are not the best and are noticeably rattly, so a spacebar recording would not be
              an accurate representation of the switch itself. It would mostly tell you about my stabilisers and board
              tuning. These clips are WASD only. Board resonance, the carbon fibre plate, foam, and CNC case still
              shape what you hear.
            </div>
          </div>
        </AnimatedSection>

        {/* Video cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {clips.map((c, i) => {
            const s = accentStyles[c.sw.id as keyof typeof accentStyles]
            return (
              <AnimatedSection key={c.file} delay={80 + i * 65}>
                <div
                  className="card-hover rounded-xl overflow-hidden flex flex-col"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}
                >
                  <video
                    src={`https://pub-a6dbb7fc556d4f5aac1797af1c90c576.r2.dev/${c.file}`}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full"
                    style={{ background: '#0a0a14', display: 'block' }}
                  />
                  <div className="px-4 py-4 flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, display: 'inline-block', flexShrink: 0 }} />
                      <span className="font-semibold" style={{ fontSize: 14, color: s.label }}>{c.sw.name}</span>
                      <span className="font-mono ml-auto" style={{ fontSize: 11, color: s.sub }}>{c.sw.key} key</span>
                    </div>
                    <p className="font-mono" style={{ fontSize: 11, color: 'rgba(100,116,139,.6)' }}>{c.sub}</p>
                    <p style={{ fontSize: 13, color: 'rgba(203,213,225,.78)', lineHeight: 1.65 }}>
                      {c.caption}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Personal baseline note */}
        <AnimatedSection delay={250}>
          <div
            className="mb-6 rounded-xl p-5 flex gap-3 items-start"
            style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.08)' }}
          >
            <span style={{ color: 'rgba(100,116,139,.5)', fontSize: 13, flexShrink: 0, marginTop: 2 }}>▸</span>
            <p style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>
              <span className="font-semibold text-white">Personal baseline:</span>{' '}
              My reference for Hall Effect sound is the TTC King of Magnetic on a different reference board.
              Against that: Cullinan sounds more refined and controlled; HoTO comes closest to the deep, rounded
              thock quality I associate with a polished HE press; Poseidon adds the heaviest landing and is the
              most full-bodied of the three. All three are quieter and more composed than I expected on the CF plate.
            </p>
          </div>
        </AnimatedSection>

        {/* Comparison table */}
        <AnimatedSection delay={290}>
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,.07)' }}
          >
            <div className="px-5 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,.06)', background: 'rgba(255,255,255,.025)' }}>
              <span className="font-mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'rgba(100,116,139,.6)', textTransform: 'uppercase' }}>
                Sound impression — per switch
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: 580 }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
                    <th className="text-left px-4 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(100,116,139,.6)', letterSpacing: '.06em', width: '22%' }}>Dimension</th>
                    <th className="text-left px-4 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(226,232,240,.7)', width: '26%' }}>Cullinan (G)</th>
                    <th className="text-left px-4 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(147,197,253,.7)', width: '26%' }}>HoTO (H)</th>
                    <th className="text-left px-4 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(103,232,249,.7)', width: '26%' }}>Poseidon (J)</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r, i) => (
                    <tr
                      key={r.label}
                      style={{
                        borderBottom: i < compareRows.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none',
                        background: i === compareRows.length - 1 ? 'rgba(96,165,250,.025)' : i % 2 === 0 ? 'rgba(255,255,255,.01)' : 'transparent',
                      }}
                    >
                      <td className="px-4 py-2.5 font-mono" style={{ fontSize: 12, color: 'rgba(100,116,139,.65)', lineHeight: 1.45 }}>{r.label}</td>
                      <td className="px-4 py-2.5" style={{ fontSize: 13, color: 'rgba(226,232,240,.85)', lineHeight: 1.55 }}>{r.cullinan}</td>
                      <td className="px-4 py-2.5" style={{ fontSize: 13, color: 'rgba(147,197,253,.85)', lineHeight: 1.55 }}>{r.hoto}</td>
                      <td className="px-4 py-2.5" style={{ fontSize: 13, color: 'rgba(103,232,249,.85)', lineHeight: 1.55 }}>{r.poseidon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={360}>
          <p className="mt-5 text-xs font-mono text-center" style={{ color: 'rgba(100,116,139,.4)' }}>
            Same board · Same keycap set · Same recording chain · G = Cullinan · H = Heart of the Ocean · J = Poseidon
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
