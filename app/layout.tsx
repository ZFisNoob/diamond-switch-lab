import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Wuque Diamond HE Switch Lab: Cullinan, Poseidon & Heart of the Ocean — Tester Review',
  description:
    "Hands-on limited tester-unit review of three Wuque Studio Diamond HE switches — Cullinan, Poseidon, and Heart of the Ocean. Compared through RGB photos, stem wobble clips, off-centre press tests, and WASD sound. One of 50 selected worldwide.",
  keywords: [
    'Wuque Studio', 'Diamond HE switch', 'Cullinan', 'Heart of the Ocean', 'Poseidon',
    'HE switch review', 'Hall Effect switch', 'mechanical keyboard tester',
    'stem wobble', 'off-centre press', 'RGB light diffusion', 'WASD sound test',
  ],
  openGraph: {
    title: 'Wuque Diamond HE Switch Lab: Cullinan vs Poseidon vs Heart of the Ocean',
    description: "Tester-unit review of three Diamond HE switches with RGB photos, wobble clips, off-centre press tests, and WASD sound comparison.",
    images: [{ url: '/media/photos/heartoftheocean_bluelight.jpg' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased`}
        style={{ background: '#04080f', color: '#e8e8f0' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
