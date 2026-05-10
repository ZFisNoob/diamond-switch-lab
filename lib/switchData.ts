import type { CSSProperties } from 'react'

export type SwitchId = 'cullinan' | 'hoto' | 'poseidon'

export interface AccentConfig {
  border: string
  bg: string
  dot: string
  label: string
  sub: string
  tag: CSSProperties
}

export interface SwitchData {
  id: SwitchId
  name: string
  key: 'G' | 'H' | 'J'
  labelTag: string
  tagline: string
  character: string
  // Materials
  topHousing: string
  bottomHousing: string
  stem: string
  lightGuide: string
  // Mechanics
  springDiameter: string
  springLength: string
  magnet: string
  initialForce: string
  bottomOutForce: string
  totalTravel: string
  // Magnetic flux
  initFlux12: string
  initFlux16: string
  boFlux12: string
  boFlux16: string
  // General
  switchType: string
  lifespan: string
  soundProfile: string | null
  factoryLube: string
  // Visual
  photo: string
  accent: AccentConfig
}

export const SWITCHES: SwitchData[] = [
  {
    id: 'cullinan',
    name: 'Cullinan',
    key: 'G',
    labelTag: 'Clear / Diamond',
    tagline: 'Fully transparent PC throughout · Transparent PA12 stem · Maximum RGB clarity',
    character:
      'Fully transparent PC housing top and bottom, with a transparent PA12 stem. With south-facing LEDs, the clear construction means light travels through the switch with zero tinting — the most direct and articulate RGB output of the three. PA12 (nylon) is uncommon as a stem material and contributes to both the visual clarity and the refined, muted sound character.',
    topHousing: 'Fully Transparent PC',
    bottomHousing: 'Fully Transparent PC',
    stem: 'Transparent PA12',
    lightGuide: 'Transparent PC',
    springDiameter: '6.65 mm',
    springLength: '23 mm',
    magnet: '3.6 mm central large magnet',
    initialForce: '35 ± 5 gf',
    bottomOutForce: '45 ± 7 gf',
    totalTravel: '3.50 ± 0.10 mm',
    initFlux12: '130 ± 15 Gs',
    initFlux16: '115 ± 15 Gs',
    boFlux12: '750 ± 70 Gs',
    boFlux16: '635 ± 50 Gs',
    switchType: 'Linear',
    lifespan: '100 million keystrokes',
    soundProfile: 'Muted',
    factoryLube: 'Factory lubed',
    photo: '/media/photos/cullinan_professional.png',
    accent: {
      border: 'rgba(226,232,240,.12)',
      bg: 'rgba(226,232,240,.03)',
      dot: 'rgba(255,255,255,.75)',
      label: 'rgba(226,232,240,.92)',
      sub: 'rgba(226,232,240,.5)',
      tag: { background: 'rgba(226,232,240,.07)', border: '1px solid rgba(226,232,240,.15)', color: 'rgba(226,232,240,.92)' },
    },
  },
  {
    id: 'hoto',
    name: 'Heart of the Ocean',
    key: 'H',
    labelTag: 'Blue Diamond',
    tagline: 'Light blue transparent PC · Frosted transparent light guide · Deep Thock',
    character:
      'Light blue transparent PC housing top and bottom, light blue POM stem, and a frosted transparent PC light guide. The strongest themed visual identity of the three. With south-facing LEDs, the blue housing tints the light before it reaches your eye — cooler, moodier, and more atmospheric than Cullinan. The frosted light guide adds subtle diffusion that softens the glow without losing directionality.',
    topHousing: 'Light Blue Transparent PC',
    bottomHousing: 'Light Blue Transparent PC',
    stem: 'Light Blue POM',
    lightGuide: 'Frosted Transparent PC',
    springDiameter: '6.65 mm',
    springLength: '23 mm',
    magnet: '3.6 mm central large magnet',
    initialForce: '35 ± 5 gf',
    bottomOutForce: '45 ± 7 gf',
    totalTravel: '3.50 ± 0.10 mm',
    initFlux12: '130 ± 15 Gs',
    initFlux16: '115 ± 15 Gs',
    boFlux12: '750 ± 70 Gs',
    boFlux16: '635 ± 50 Gs',
    switchType: 'Linear',
    lifespan: '100 million keystrokes',
    soundProfile: 'Deep Thock',
    factoryLube: 'Factory lubed',
    photo: '/media/photos/heartoftheocean_professional.png',
    accent: {
      border: 'rgba(96,165,250,.18)',
      bg: 'rgba(96,165,250,.05)',
      dot: 'rgba(96,165,250,.8)',
      label: 'rgba(147,197,253,.92)',
      sub: 'rgba(147,197,253,.5)',
      tag: { background: 'rgba(96,165,250,.1)', border: '1px solid rgba(96,165,250,.22)', color: 'rgba(147,197,253,.92)' },
    },
  },
  {
    id: 'poseidon',
    name: 'Poseidon',
    key: 'J',
    labelTag: 'Balanced Blue · Feel Pick',
    tagline: 'PC top · Frosted PC diffuser · N52 magnet · 50 gf bottom-out',
    character:
      'PC top housing, light blue POM stem, light blue PC bottom housing, and a frosted PC diffuser. The most mechanically distinct of the three — N52 magnet and a 50 gf bottom-out (5 gf heavier than Cullinan and HoTO). The frosted diffuser scatters light more broadly than Cullinan\'s clear pipe. No official sound profile is listed by Wuque.',
    topHousing: 'PC (Polycarbonate)',
    bottomHousing: 'Light Blue PC',
    stem: 'Light Blue POM',
    lightGuide: 'Frosted PC',
    springDiameter: '6.65 mm',
    springLength: '23 mm',
    magnet: 'N52',
    initialForce: '35 ± 5 gf',
    bottomOutForce: '50 ± 7 gf',
    totalTravel: '3.50 ± 0.10 mm',
    initFlux12: '130 ± 15 Gs',
    initFlux16: '115 ± 15 Gs',
    boFlux12: '750 ± 70 Gs',
    boFlux16: '635 ± 50 Gs',
    switchType: 'Linear',
    lifespan: '100 million keystrokes',
    soundProfile: null,
    factoryLube: 'Factory lubed',
    photo: '/media/photos/poseidon_professional.png',
    accent: {
      border: 'rgba(6,182,212,.15)',
      bg: 'rgba(6,182,212,.04)',
      dot: 'rgba(6,182,212,.8)',
      label: 'rgba(103,232,249,.92)',
      sub: 'rgba(103,232,249,.5)',
      tag: { background: 'rgba(6,182,212,.09)', border: '1px solid rgba(6,182,212,.2)', color: 'rgba(103,232,249,.92)' },
    },
  },
]

export const CULLINAN = SWITCHES[0]
export const HOTO     = SWITCHES[1]
export const POSEIDON = SWITCHES[2]

// Which spec fields genuinely differ between the three switches
export const DIFF_FIELDS: Array<{ key: keyof SwitchData; label: string; notes: string }> = [
  { key: 'topHousing',    label: 'Top Housing',           notes: 'Clear vs blue-tinted vs neutral PC — biggest visual difference across all lighting modes' },
  { key: 'bottomHousing', label: 'Bottom Housing',        notes: 'Cullinan and HoTO are fully transparent; Poseidon adds blue tint at the base' },
  { key: 'stem',          label: 'Stem Material',         notes: 'PA12 (nylon) on Cullinan only — uncommon material, higher light transmission than POM' },
  { key: 'lightGuide',    label: 'Light Guide / Diffuser',notes: 'Transparent pipe vs frosted diffuse vs frosted scatter — dominant optical difference' },
  { key: 'soundProfile',  label: 'Official Sound Profile',notes: 'Per Wuque product spec · board, plate, and foam will modify actual output significantly' },
  { key: 'magnet',        label: 'Magnet',                notes: 'N52 on Poseidon only — Wuque has not published calibration or compatibility notes' },
  { key: 'bottomOutForce',label: 'Bottom-out Force',      notes: '5 gf heavier on Poseidon — the only mechanical difference and clearly noticeable' },
]

// Spec fields that are identical across all three switches
export const SHARED_FIELDS: Array<{ key: keyof SwitchData; label: string }> = [
  { key: 'switchType',    label: 'Switch Type'         },
  { key: 'initialForce',  label: 'Initial Force'       },
  { key: 'totalTravel',   label: 'Total Travel'        },
  { key: 'springDiameter',label: 'Spring Diameter'     },
  { key: 'springLength',  label: 'Spring Length'       },
  { key: 'initFlux12',    label: 'Init. Flux (1.2 mm PCB)' },
  { key: 'initFlux16',    label: 'Init. Flux (1.6 mm PCB)' },
  { key: 'boFlux12',      label: 'B/O Flux (1.2 mm PCB)'  },
  { key: 'boFlux16',      label: 'B/O Flux (1.6 mm PCB)'  },
  { key: 'lifespan',      label: 'Lifespan'            },
  { key: 'factoryLube',   label: 'Factory Lube'        },
]
