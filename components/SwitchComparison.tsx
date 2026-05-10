import AnimatedSection from './AnimatedSection'
import { SWITCHES, DIFF_FIELDS, SHARED_FIELDS } from '@/lib/switchData'
import type { SwitchData } from '@/lib/switchData'

const [CULLINAN, HOTO, POSEIDON] = SWITCHES

const keyDiffs = [
  {
    title: 'Housing transparency',
    detail: `Cullinan is fully clear throughout. HoTO has light blue transparent PC top and bottom. Poseidon uses neutral PC on top with light blue PC on the bottom.`,
    note: 'This determines how LED light enters the switch — and what colour character it takes on.',
  },
  {
    title: 'Stem material',
    detail: `Cullinan uses Transparent PA12 — a nylon-based material rarely seen in switches. HoTO and Poseidon both use Light Blue POM.`,
    note: 'PA12 has higher light transmission than POM, contributing to Cullinan\'s clearer and more articulate RGB output.',
  },
  {
    title: 'Light guide and diffuser',
    detail: `Cullinan: Transparent PC direct pipe. HoTO: Frosted Transparent PC light guide (blue-tinted, slightly diffused). Poseidon: Frosted PC diffuser (scattered, softer glow).`,
    note: 'The most visible optical difference across all lighting modes, especially under south-facing LEDs.',
  },
  {
    title: 'Poseidon: magnet and bottom-out',
    detail: `N52 magnet (vs 3.6 mm central on Cullinan and HoTO). Bottom-out force 50 ± 7 gf versus 45 ± 7 gf on the others.`,
    note: 'The only mechanical difference in the lineup. The 5 gf extra bottom-out is audible and noticeable in feel.',
  },
]

export default function SwitchComparison() {
  return (
    <section id="comparison" className="py-16 px-6 relative overflow-hidden">

      {/* Faint background switch image */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          right: -80,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 480,
          height: 480,
          backgroundImage: "url('/media/photos/cullinan_professional.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.055,
          filter: 'blur(2px)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="mb-10 text-center">
            <div className="section-label mb-3">03 / Spec Comparison</div>
            <h2 className="section-heading">Cullinan · Heart of the Ocean · Poseidon</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              All three share the same spring, travel, flux values, and HE mechanism.
              The real differences are material choices, optical design, and Poseidon&apos;s distinct magnet and bottom-out force.
            </p>
          </div>
        </AnimatedSection>

        {/* What actually differs — plain English */}
        <AnimatedSection delay={50}>
          <div
            className="mb-8 rounded-xl p-6"
            style={{ background: 'rgba(96,165,250,.04)', border: '1px solid rgba(96,165,250,.12)' }}
          >
            <h3 className="font-semibold mb-3" style={{ fontSize: 14, color: 'rgba(147,197,253,.9)', letterSpacing: '.04em' }}>
              What actually differs
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>
              All three share the same spring dimensions, total travel, and magnetic flux targets. The
              biggest mechanical differences are Poseidon&apos;s N52 magnet and 50 gf bottom-out. The biggest
              material differences are Cullinan&apos;s transparent PA12 stem, HoTO&apos;s frosted transparent PC
              light guide, and the different housing transparency levels across the three models.
            </p>
          </div>
        </AnimatedSection>

        {/* Per-switch summary mini-cards */}
        <AnimatedSection delay={80}>
          <div className="mb-10 grid sm:grid-cols-3 gap-4">
            {SWITCHES.map(sw => (
              <div
                key={sw.id}
                className="card-hover rounded-xl p-5 flex flex-col gap-3"
                style={{ background: sw.accent.bg, border: `1px solid ${sw.accent.border}` }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-xs font-bold px-2 py-1 rounded-md"
                    style={{ background: 'rgba(0,0,0,.3)', color: sw.accent.label, border: `1px solid ${sw.accent.border}` }}
                  >
                    {sw.key}
                  </span>
                  <span className="font-semibold" style={{ fontSize: 14, color: sw.accent.label }}>{sw.name}</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {[
                    { f: 'Housing',  v: sw.topHousing },
                    { f: 'Stem',     v: sw.stem },
                    { f: 'Diffuser', v: sw.lightGuide },
                    { f: 'Magnet',   v: sw.magnet },
                    { f: 'B/O',      v: sw.bottomOutForce },
                  ].map(({ f, v }) => (
                    <div key={f} className="flex gap-2">
                      <span className="font-mono flex-shrink-0" style={{ fontSize: 11, color: 'rgba(100,116,139,.55)', minWidth: 52 }}>{f}</span>
                      <span style={{ fontSize: 12, color: 'rgba(203,213,225,.82)', lineHeight: 1.45 }}>{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto pt-2" style={{ borderTop: `1px solid ${sw.accent.border}` }}>
                  <span className="font-mono" style={{ fontSize: 11, color: 'rgba(100,116,139,.55)' }}>Sound</span>
                  <span style={{ fontSize: 12, color: sw.soundProfile ? sw.accent.label : 'rgba(100,116,139,.45)', fontStyle: sw.soundProfile ? 'normal' : 'italic' }}>
                    {sw.soundProfile ?? 'Not listed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key difference cards */}
        <AnimatedSection delay={110}>
          <div className="mb-10 grid sm:grid-cols-2 gap-4">
            {keyDiffs.map(d => (
              <div
                key={d.title}
                className="card-hover rounded-xl px-5 py-4 flex flex-col gap-2"
                style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.08)' }}
              >
                <span className="font-semibold text-white" style={{ fontSize: 14 }}>{d.title}</span>
                <span style={{ fontSize: 13, color: 'rgba(203,213,225,.82)', lineHeight: 1.65 }}>{d.detail}</span>
                <span className="font-mono mt-0.5" style={{ fontSize: 12, color: 'rgba(100,116,139,.65)' }}>{d.note}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Comparison table */}
        <AnimatedSection delay={140}>
          {/* Column headers */}
          <div className="mb-2 px-2" style={{ display: 'grid', gridTemplateColumns: '26% 18% 18% 18% 20%', gap: '0 8px', alignItems: 'center' }}>
            <div />
            {SWITCHES.map(sw => (
              <div key={sw.id} className="text-center">
                <span
                  className="inline-flex items-center gap-1.5 font-mono px-2.5 py-1 rounded-md"
                  style={{ fontSize: 11, background: sw.accent.bg, border: `1px solid ${sw.accent.border}`, color: sw.accent.label }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: sw.accent.dot, display: 'inline-block', flexShrink: 0 }} />
                  {sw.name.split(' ')[0]}
                </span>
              </div>
            ))}
            <div className="text-center">
              <span className="font-mono" style={{ fontSize: 10, color: 'rgba(100,116,139,.5)', letterSpacing: '.06em' }}>Notes</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,.07)' }}>
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,.04)', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                  <th className="text-left px-4 py-3 font-mono font-normal" style={{ fontSize: 11, letterSpacing: '.08em', color: 'rgba(100,116,139,.7)', width: '26%' }}>Parameter</th>
                  <th className="text-left px-3 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(226,232,240,.7)', width: '18%' }}>Cullinan</th>
                  <th className="text-left px-3 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(147,197,253,.7)', width: '18%' }}>HoTO</th>
                  <th className="text-left px-3 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(103,232,249,.7)', width: '18%' }}>Poseidon</th>
                  <th className="text-left px-3 py-3 font-mono font-normal" style={{ fontSize: 11, color: 'rgba(100,116,139,.5)', width: '20%' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {/* Differing rows — highlighted */}
                {DIFF_FIELDS.map((f, i) => {
                  const vals = SWITCHES.map(sw => sw[f.key] as string | null)
                  return (
                    <tr
                      key={f.key}
                      style={{
                        background: 'rgba(96,165,250,.022)',
                        borderBottom: '1px solid rgba(255,255,255,.05)',
                      }}
                    >
                      <td className="px-4 py-3 font-mono" style={{ fontSize: 12, color: 'rgba(148,163,184,.9)' }}>
                        <span className="flex items-center gap-2">
                          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(96,165,250,.6)', display: 'inline-block', flexShrink: 0 }} />
                          {f.label}
                        </span>
                      </td>
                      <td className="px-3 py-3" style={{ fontSize: 13, color: 'rgba(226,232,240,.9)' }}>{vals[0] ?? '—'}</td>
                      <td className="px-3 py-3" style={{ fontSize: 13, color: 'rgba(147,197,253,.9)' }}>{vals[1] ?? '—'}</td>
                      <td className="px-3 py-3" style={{ fontSize: 13, color: 'rgba(103,232,249,.9)' }}>{vals[2] ?? '—'}</td>
                      <td className="px-3 py-3" style={{ fontSize: 12, color: 'rgba(100,116,139,.62)', lineHeight: 1.55 }}>{f.notes}</td>
                    </tr>
                  )
                })}

                {/* Shared rows */}
                {SHARED_FIELDS.map((f, i) => {
                  const sharedVal = CULLINAN[f.key] as string
                  return (
                    <tr
                      key={f.key}
                      style={{
                        background: i % 2 === 0 ? 'rgba(255,255,255,.01)' : 'transparent',
                        borderBottom: '1px solid rgba(255,255,255,.04)',
                      }}
                    >
                      <td className="px-4 py-2.5 font-mono" style={{ fontSize: 12, color: 'rgba(100,116,139,.6)', paddingLeft: 24 }}>{f.label}</td>
                      <td className="px-3 py-2.5" style={{ fontSize: 13, color: 'rgba(148,163,184,.55)' }}>{sharedVal}</td>
                      <td className="px-3 py-2.5" style={{ fontSize: 13, color: 'rgba(148,163,184,.55)' }}>{sharedVal}</td>
                      <td className="px-3 py-2.5" style={{ fontSize: 13, color: 'rgba(148,163,184,.55)' }}>
                        {f.key === 'factoryLube'
                          ? POSEIDON.factoryLube
                          : sharedVal}
                      </td>
                      <td className="px-3 py-2.5" style={{ fontSize: 12, color: 'rgba(100,116,139,.35)' }}>Identical across all three</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs font-mono text-center" style={{ color: 'rgba(100,116,139,.45)' }}>
            ◆ Blue dot = differs across models &nbsp;·&nbsp; Flux values listed per PCB thickness (1.2 mm and 1.6 mm)
          </p>
          <div
            className="mt-4 rounded-xl px-5 py-3.5 flex gap-3 items-start"
            style={{ background: 'rgba(255,255,255,.018)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <span style={{ color: 'rgba(100,116,139,.5)', fontSize: 11, flexShrink: 0, marginTop: 2 }}>▸</span>
            <p className="font-mono" style={{ fontSize: 12, color: 'rgba(100,116,139,.62)', lineHeight: 1.65 }}>
              Specifications are transcribed from the provided Wuque Studio spec sheets. Where an item is not listed,
              it is marked as not listed rather than guessed. Flux values vary by PCB thickness — both 1.2 mm and
              1.6 mm values are listed where provided.
            </p>
          </div>
        </AnimatedSection>

        {/* Four insight cards */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {[
            {
              title: 'Why PA12 matters for RGB',
              body: "Cullinan's Transparent PA12 stem has higher light transmission than standard POM — it's uncommon in switch design. This, combined with the fully clear housing, gives Cullinan a noticeably more direct and articulate light output through south-facing LEDs.",
              accent: { bg: 'rgba(226,232,240,.03)', border: 'rgba(226,232,240,.1)', heading: 'rgba(226,232,240,.9)' },
            },
            {
              title: 'HoTO light guide vs Poseidon diffuser',
              body: "HoTO's frosted transparent PC light guide channels LED output through blue-tinted material — consistent colour throughput, slightly softened. Poseidon's frosted PC diffuser scatters light wider and softer. Same LED source, different visual results.",
              accent: { bg: 'rgba(96,165,250,.04)', border: 'rgba(96,165,250,.12)', heading: 'rgba(147,197,253,.9)' },
            },
            {
              title: "Poseidon's N52 magnet",
              body: "Poseidon is the only switch here with an N52 magnet. Wuque has not published much detail on how this compares with the 3.6 mm central large magnet in Cullinan and HoTO, so I would avoid making claims about actuation accuracy beyond the spec sheet. In actual use, the switches calibrated normally through the Rainy 75 RT web hub and I did not notice odd behaviour or dropouts during Valorant sessions — the gaming feel was genuinely pleasant, especially because of Poseidon's softer and fuller landing on repeated WASD.",
              accent: { bg: 'rgba(6,182,212,.04)', border: 'rgba(6,182,212,.14)', heading: 'rgba(103,232,249,.9)' },
            },
            {
              title: 'Shared HE core — identity is the differentiator',
              body: "All three use the same spring, travel, and flux targets. Poseidon is the only mechanical outlier. Everything else comes down to how each switch looks, sounds, and behaves as a material object — which is exactly what this tester unit tests.",
              accent: { bg: 'rgba(201,168,76,.04)', border: 'rgba(201,168,76,.12)', heading: 'rgba(253,224,133,.85)' },
            },
          ].map((ins, i) => (
            <AnimatedSection key={ins.title} delay={200 + i * 55}>
              <div
                className="card-hover rounded-xl p-6"
                style={{ background: ins.accent.bg, border: `1px solid ${ins.accent.border}` }}
              >
                <h4 className="font-semibold mb-3" style={{ fontSize: 14, color: ins.accent.heading }}>{ins.title}</h4>
                <p style={{ fontSize: 14, color: 'rgba(203,213,225,.82)', lineHeight: 1.7 }}>{ins.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
