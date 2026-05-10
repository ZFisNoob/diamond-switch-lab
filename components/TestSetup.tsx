import AnimatedSection from './AnimatedSection'

const fields: Array<{ label: string; value: string }> = [
  { label: 'Keyboard',              value: 'Rainy 75 RT'                                                              },
  { label: 'Plate',                 value: 'Carbon Fibre Plate'                                                       },
  { label: 'Case',                  value: 'CNC Aluminium Case'                                                       },
  { label: 'Foam',                  value: 'Foam installed'                                                           },
  { label: 'Keycaps',               value: 'KBDiy GMK9009'                                                            },
  { label: 'Switch positions',      value: 'G key = Cullinan · H key = Heart of the Ocean · J key = Poseidon'        },
  { label: 'Switches tested',       value: 'Stock · Factory lubed · No additional lube applied'                       },
  { label: 'Lighting modes',        value: 'RGB (mixed) · Blue · White · Off'                                        },
  { label: 'LED orientation',       value: 'South-facing LEDs'                                                         },
  { label: 'Microphone',            value: 'Maono AU-A04 Cardioid Condenser Mic'                                      },
  { label: 'Mic distance',          value: 'Approximately 10–15 cm'                                                   },
  { label: 'Camera',                value: 'OnePlus 13R · Pro Mode · Fixed 6500K white balance'                      },
  { label: 'Room condition',        value: 'Quiet bedroom with fans · No audio treatment'                             },
  { label: 'Date tested',           value: '9 May 2026'                                                               },
  { label: 'Sample size',           value: 'Limited tester-unit · G, H, and J key positions only'                    },
]

export default function TestSetup() {
  return (
    <section id="test-setup" className="py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">09 / Test Setup</div>
            <h2 className="section-heading">How This Was Shot</h2>
            <p className="mt-2 max-w-md mx-auto" style={{ fontSize: 14, color: 'rgba(100,116,139,.7)' }}>
              Full hardware and conditions for this session. Included so readers can
              judge the evidence in context.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={80}>
          <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,.07)' }}>
            {fields.map((f, i) => (
              <div
                key={f.label}
                className="flex flex-col sm:flex-row gap-1 sm:gap-6 px-5 py-3"
                style={{
                  borderBottom: i < fields.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none',
                  background: i % 2 === 0 ? 'rgba(255,255,255,.015)' : 'transparent',
                }}
              >
                <span
                  className="font-mono flex-shrink-0"
                  style={{ fontSize: 12, color: 'rgba(100,116,139,.6)', minWidth: 200 }}
                >
                  {f.label}
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: 14, color: 'rgba(203,213,225,.85)' }}
                >
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={160}>
          <div
            className="mt-5 rounded-xl px-5 py-4 flex gap-3 items-start"
            style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <span style={{ color: 'rgba(100,116,139,.5)', fontSize: 12, flexShrink: 0 }}>▸</span>
            <p className="font-mono leading-relaxed" style={{ fontSize: 12, color: 'rgba(100,116,139,.65)' }}>
              Recording chain: OnePlus 13R Pro Mode, fixed 6500K white balance + Maono AU-A04 at ~10–15 cm · Quiet bedroom with fans, no treatment ·
              Board resonance, foam, and plate all contribute to audio · Spacebar excluded — stabilisers on this board are rattly and would contaminate the comparison ·
              Sound clips are relative comparisons between the three switches only — not an absolute acoustic measure.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
