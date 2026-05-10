'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import Lightbox, { type LightboxImage } from './Lightbox'

interface Photo {
  file: string
  mode: string
  caption: string
}

const cullinanPhotos: Photo[] = [
  {
    file: 'cullinan_rgb.jpg',
    mode: 'RGB',
    caption: 'Clear housing catches saturated RGB strongly. Colours transmit directly with minimal shift — no housing tint. South-facing LEDs shine straight through the transparent PC.',
  },
  {
    file: 'cullinan_bluelight.jpg',
    mode: 'Blue light',
    caption: 'Blue lighting makes the clear housing look icy and clean. Very little housing interference — light passes through almost without modification.',
  },
  {
    file: 'cullinan_nolight.jpg',
    mode: 'No light',
    caption: 'Without lighting, the fully transparent construction is visible. The Transparent PA12 stem and clear PC housing are both easy to inspect — this is what makes it the clearest optical design of the three.',
  },
  {
    file: 'cullinan_whitelight.jpg',
    mode: 'White light',
    caption: 'White lighting shows how directly the switch carries brightness through. Minimal diffusion, minimal tint — the clearest and most direct output of the three.',
  },
]

const oceanPhotos: Photo[] = [
  {
    file: 'heartoftheocean_rgb.jpg',
    mode: 'RGB',
    caption: 'The light blue transparent housing adds a cool tint to all colours under mixed RGB. Warm tones shift noticeably — the most distinctively themed of the three.',
  },
  {
    file: 'heartoftheocean_bluelight.jpg',
    mode: 'Blue light',
    caption: 'Blue lighting reinforces the ocean identity most strongly here. The fully blue-tinted housing amplifies the hue across the whole switch — top, stem, and bottom.',
  },
  {
    file: 'heartoftheocean_nolight.jpg',
    mode: 'No light',
    caption: 'Without lighting, the light blue transparent PC housing and light blue POM stem are visible throughout. Top, bottom, and stem all match — a cohesive material identity.',
  },
  {
    file: 'heartoftheocean_whitelight.jpg',
    mode: 'White light',
    caption: 'White lighting shows the frosted transparent PC light guide diffusing glow through blue-tinted material — a wide, consistently blue character. The most atmospheric of the three under white.',
  },
]

const poseidonPhotos: Photo[] = [
  {
    file: 'poseidon_rgb.jpg',
    mode: 'RGB',
    caption: 'Poseidon sits between Cullinan and HoTO under RGB. The neutral PC top housing and light blue PC base give it a balanced cooler character without the full blue saturation of HoTO.',
  },
  {
    file: 'poseidon_bluelight.jpg',
    mode: 'Blue light',
    caption: 'Blue lighting brings out the light blue POM stem and bottom housing. The frosted PC diffuser gives a softer, more scattered look than either Cullinan or HoTO in this mode.',
  },
  {
    file: 'poseidon_nolight.jpg',
    mode: 'No light',
    caption: 'Without lighting, the light blue stem and bottom housing are visible against the neutral PC top. The frosted diffuser is also visible here — a layered construction compared with the simpler all-clear Cullinan.',
  },
  {
    file: 'poseidon_whitelight.jpg',
    mode: 'White light',
    caption: 'White lighting shows the frosted diffuser scattering — the light output is softer and wider than Cullinan, but more restrained and less themed than HoTO.',
  },
]

type Accent = 'cullinan' | 'poseidon' | 'ocean'

const accentStyles: Record<Accent, { border: string; badgeBg: string; badgeColor: string }> = {
  cullinan: { border: 'rgba(226,232,240,.1)', badgeBg: 'rgba(226,232,240,.07)', badgeColor: 'rgba(226,232,240,.9)' },
  poseidon: { border: 'rgba(6,182,212,.15)',  badgeBg: 'rgba(6,182,212,.09)',   badgeColor: 'rgba(103,232,249,.9)' },
  ocean:    { border: 'rgba(96,165,250,.15)', badgeBg: 'rgba(96,165,250,.1)',   badgeColor: 'rgba(147,197,253,.9)' },
}

interface GalleryProps {
  name: string
  keyLabel: string
  sub: string
  photos: Photo[]
  accent: Accent
  dotColor: string
  baseIndex: number
  onOpen: (flatIndex: number) => void
}

function SwitchGallery({ name, keyLabel, sub, photos, accent, dotColor, baseIndex, onOpen }: GalleryProps) {
  const s = accentStyles[accent]
  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: dotColor, display: 'inline-block' }} />
        <h3 className="font-semibold text-white" style={{ fontSize: 15 }}>{name}</h3>
        <span className="text-xs font-mono" style={{ color: 'rgba(100,116,139,.55)' }}>
          {keyLabel} &nbsp;·&nbsp; {sub}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {photos.map((p, i) => (
          <div key={p.file} className="flex flex-col gap-2">
            <button
              onClick={() => onOpen(baseIndex + i)}
              className="relative overflow-hidden rounded-xl transition-all duration-200 cursor-zoom-in w-full text-left"
              style={{
                border: `1px solid ${s.border}`,
                aspectRatio: '4/3',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.badgeColor }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = s.border }}
              aria-label={`View ${name} — ${p.mode} (opens lightbox)`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/media/photos/${p.file}`}
                alt={`${name} — ${p.mode}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute top-2 left-2">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{ background: s.badgeBg, border: `1px solid ${s.border}`, color: s.badgeColor, backdropFilter: 'blur(4px)' }}
                >
                  {p.mode}
                </span>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(0,0,0,.28)' }}
              >
                <span style={{ color: 'rgba(255,255,255,.85)', fontSize: 24 }}>⊕</span>
              </div>
            </button>
            <p className="leading-relaxed" style={{ fontSize: 13, color: 'rgba(203,213,225,.75)', lineHeight: 1.6 }}>
              {p.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function buildLightboxImages(name: string, photos: Photo[]): LightboxImage[] {
  return photos.map(p => ({
    src: `/media/photos/${p.file}`,
    alt: `${name} — ${p.mode}`,
    caption: p.caption,
    mode: p.mode,
  }))
}

export default function RGBTest() {
  const [lightboxOpen, setLightboxOpen]     = useState(false)
  const [lightboxIndex, setLightboxIndex]   = useState(0)
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([])

  const openLightbox = (images: LightboxImage[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const cullinanLB = buildLightboxImages('Cullinan', cullinanPhotos)
  const oceanLB    = buildLightboxImages('Heart of the Ocean', oceanPhotos)
  const poseidonLB = buildLightboxImages('Poseidon', poseidonPhotos)

  return (
    <section id="rgb-gallery" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-8 text-center">
            <div className="section-label mb-3">06 / RGB Gallery</div>
            <h2 className="section-heading">Light Diffusion & RGB Clarity</h2>
            <p className="mt-3 max-w-lg mx-auto" style={{ fontSize: 15, color: 'rgba(148,163,184,.8)', lineHeight: 1.65 }}>
              Twelve photos, four lighting modes, three switches — same board, same session.
              Click any photo to enlarge.
            </p>
          </div>
        </AnimatedSection>

        {/* Editorial break before galleries */}
        <AnimatedSection delay={50}>
          <div
            className="mb-10 relative overflow-hidden rounded-2xl"
            style={{ minHeight: 160 }}
          >
            {/* Background image */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/media/photos/heartoftheocean_rgb.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
              }}
            />
            {/* Dark overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(6,6,15,.88) 0%, rgba(6,6,15,.65) 60%, rgba(6,6,15,.88) 100%)' }}
            />
            {/* Text */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-10">
              <p
                className="font-light leading-relaxed"
                style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', color: 'rgba(226,232,240,.88)', letterSpacing: '.01em', maxWidth: 560 }}
              >
                Same board. Same lighting modes. Three different visual personalities.
              </p>
              <p className="mt-2 font-mono" style={{ fontSize: 12, color: 'rgba(100,116,139,.55)', letterSpacing: '.1em' }}>
                SOUTH-FACING LEDs · RAINY 75 RT
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Key insight */}
        <AnimatedSection delay={80}>
          <div
            className="mb-8 rounded-xl p-5 flex gap-4 items-start"
            style={{ background: 'rgba(96,165,250,.04)', border: '1px solid rgba(96,165,250,.11)' }}
          >
            <span style={{ color: 'rgba(147,197,253,.6)', fontSize: 18, flexShrink: 0 }}>◈</span>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(203,213,225,.85)' }}>
              <span className="text-white font-semibold">What to look for:</span>{' '}
              South-facing LEDs shine upward through each switch from below. Cullinan passes that light through
              directly — colours appear sharpest and most saturated, with zero housing tint. Heart of the Ocean
              tints everything cooler through its light blue transparent PC and frosted light guide — atmospheric and
              moody. Poseidon sits between the two: the frosted PC diffuser scatters light wider, and the neutral PC
              top keeps the tint more restrained than HoTO. None is objectively better — they serve different
              build aesthetics.
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={110}>
          <SwitchGallery
            name="Cullinan"
            keyLabel="G key"
            sub="Fully transparent PC · Transparent PA12 stem"
            photos={cullinanPhotos}
            accent="cullinan"
            dotColor="rgba(255,255,255,.65)"
            baseIndex={0}
            onOpen={i => openLightbox(cullinanLB, i)}
          />
        </AnimatedSection>

        <AnimatedSection delay={160}>
          <SwitchGallery
            name="Heart of the Ocean"
            keyLabel="H key"
            sub="Light blue transparent PC · Frosted transparent light guide"
            photos={oceanPhotos}
            accent="ocean"
            dotColor="rgba(96,165,250,.75)"
            baseIndex={0}
            onOpen={i => openLightbox(oceanLB, i)}
          />
        </AnimatedSection>

        <AnimatedSection delay={210}>
          <SwitchGallery
            name="Poseidon"
            keyLabel="J key"
            sub="PC top · Light blue PC bottom · Frosted PC diffuser"
            photos={poseidonPhotos}
            accent="poseidon"
            dotColor="rgba(6,182,212,.8)"
            baseIndex={0}
            onOpen={i => openLightbox(poseidonLB, i)}
          />
        </AnimatedSection>

        <AnimatedSection delay={280}>
          <p className="mt-6 text-xs font-mono text-center" style={{ color: 'rgba(100,116,139,.4)' }}>
            Photos show practical visual character, not calibrated brightness ·
            OnePlus 13R Pro Mode · Fixed 6500K white balance · Same board · Same keycap set · Same session · Click to enlarge
          </p>
        </AnimatedSection>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNav={setLightboxIndex}
        />
      )}
    </section>
  )
}
