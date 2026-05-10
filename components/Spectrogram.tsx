import AnimatedSection from './AnimatedSection'

interface SpectroCard {
  file: string
  label: string
  sub: string
  switchKey: 'cullinan' | 'ocean'
}

const spectrograms: SpectroCard[] = [
  {
    file: 'cullinan_spacebar_spectrogram.png',
    label: 'Cullinan — Spacebar',
    sub: 'Frequency over time · spacebar press · H key',
    switchKey: 'cullinan',
  },
  {
    file: 'heartoftheocean_spacebar_spectrogram.png',
    label: 'Heart of the Ocean — Spacebar',
    sub: 'Frequency over time · spacebar press · J key',
    switchKey: 'ocean',
  },
  {
    file: 'cullinan_wasd_spectrogram.png',
    label: 'Cullinan — WASD Spam',
    sub: 'Frequency over time · WASD rapid press · H key',
    switchKey: 'cullinan',
  },
  {
    file: 'heartoftheocean_wasd_spectrogram.png',
    label: 'Heart of the Ocean — WASD Spam',
    sub: 'Frequency over time · WASD rapid press · J key',
    switchKey: 'ocean',
  },
]

function SpectroCard({ card }: { card: SpectroCard }) {
  const isC         = card.switchKey === 'cullinan'
  const borderColor = isC ? 'rgba(226,232,240,.09)' : 'rgba(96,165,250,.13)'
  const dotColor    = isC ? 'rgba(255,255,255,.65)'  : 'rgba(96,165,250,.75)'
  const labelColor  = isC ? 'rgba(226,232,240,.8)'   : 'rgba(147,197,253,.85)'

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{ background: 'rgba(255,255,255,.02)', border: `1px solid ${borderColor}` }}
    >
      {/* Spectrogram image — swap this div for <img> once PNG is generated */}
      <div
        className="media-ph rounded-none"
        style={{ borderRadius: 0, border: 'none', minHeight: 140 }}
      >
        <span style={{ fontSize: 18, opacity: .3 }}>◈</span>
        <span style={{ opacity: .7, fontWeight: 600 }}>Pending clean audio extraction</span>
        <span style={{ opacity: .45 }}>{card.file}</span>
        <span style={{ opacity: .3, fontSize: 10 }}>
          Run scripts/generate_spectrograms.py · then replace this block with &lt;img src&gt;
        </span>
      </div>
      {/* Caption */}
      <div className="px-4 py-3 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor, display: 'inline-block' }} />
          <span className="text-xs font-semibold" style={{ color: labelColor }}>{card.label}</span>
        </div>
        <p className="text-xs font-mono" style={{ color: 'rgba(100,116,139,.5)' }}>{card.sub}</p>
      </div>
    </div>
  )
}

export default function Spectrogram() {
  return (
    <section id="spectrogram" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">08 / Spectrogram</div>
            <h2 className="section-heading">Experimental Spectrogram View</h2>
            <p className="text-sm mt-2 max-w-lg mx-auto" style={{ color: 'rgba(100,116,139,.7)' }}>
              A spectrogram shows sound over time — useful for comparing relative pitch,
              high-frequency sharpness, and decay. It should not be treated as a professional
              acoustic measurement. Use it only as a visual companion to the audio clips,
              not as proof of absolute sound quality.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={60}>
          <div
            className="mb-8 rounded-xl px-5 py-3.5 flex gap-3 items-start"
            style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <span style={{ color: 'rgba(100,116,139,.6)', fontSize: 13, flexShrink: 0 }}>▸</span>
            <p className="text-xs font-mono leading-relaxed" style={{ color: 'rgba(100,116,139,.6)' }}>
              <strong className="text-slate-300">To generate:</strong>
              {' '}Place MP4 or WAV clips into{' '}
              <code style={{ color: 'rgba(147,197,253,.7)' }}>public/media/audio-source/</code>
              {', '}name them{' '}
              <code style={{ color: 'rgba(147,197,253,.7)' }}>cullinan_spacebar.mp4</code>,{' '}
              <code style={{ color: 'rgba(147,197,253,.7)' }}>heartoftheocean_wasd.mp4</code>, etc.,
              then run{' '}
              <code style={{ color: 'rgba(147,197,253,.7)' }}>python scripts/generate_spectrograms.py</code>.
              Requires ffmpeg, numpy, scipy, matplotlib.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {spectrograms.map((s, i) => (
            <AnimatedSection key={s.file} delay={i * 60}>
              <SpectroCard card={s} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
