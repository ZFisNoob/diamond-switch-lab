'use client'

import { useEffect, useRef, useState } from 'react'

const NAV = [
  { id: 'hero',            label: 'Overview',     num: '00' },
  { id: 'quick-verdict',   label: 'At a Glance',  num: '01' },
  { id: 'switch-identity', label: 'The Switches', num: '02' },
  { id: 'comparison',      label: 'Specs',        num: '03' },
  { id: 'limitations',     label: 'Scope',        num: '04' },
  { id: 'tester-log',      label: 'Tester Log',   num: '05' },
  { id: 'rgb-gallery',     label: 'RGB Gallery',  num: '06' },
  { id: 'stability',       label: 'Stability',    num: '07' },
  { id: 'wasd-sound',      label: 'WASD Sound',   num: '08' },
  { id: 'test-setup',      label: 'Setup',        num: '09' },
  { id: 'feedback',        label: 'Feedback',     num: '10' },
  { id: 'final-verdict',   label: 'Verdict',      num: '11' },
  { id: 'share',           label: 'Share',        num: '12' },
]

export default function TableOfContents() {
  const [active, setActive]         = useState('hero')
  const [show, setShow]             = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeIdx = NAV.findIndex(n => n.id === active)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.45)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  // Close mobile overlay when clicking outside
  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileOpen])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ─── Desktop sidebar ─── */}
      <nav
        aria-label="Page sections"
        className="hidden xl:block"
        style={{
          position: 'fixed',
          left: 24,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 50,
          width: 230,
          opacity: show ? 1 : 0,
          pointerEvents: show ? 'auto' : 'none',
          transition: 'opacity .4s ease',
        }}
      >
        {/* Panel */}
        <div
          style={{
            background: 'rgba(8,8,18,.82)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 14,
            padding: '14px 0 14px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 40px rgba(0,0,0,.55)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px 12px',
              borderBottom: '1px solid rgba(255,255,255,.06)',
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: '.16em', color: 'rgba(100,116,139,.6)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
              Contents
            </span>
            <span style={{ fontSize: 10, letterSpacing: '.08em', color: 'rgba(96,165,250,.55)', fontFamily: 'var(--font-mono)' }}>
              {activeIdx + 1} / {NAV.length}
            </span>
          </div>

          {/* Nav items */}
          {NAV.map(({ id, label, num }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '9px 14px 9px 16px',
                  textDecoration: 'none',
                  transition: 'all .18s',
                  position: 'relative',
                  borderLeft: isActive ? '2px solid rgba(96,165,250,.7)' : '2px solid transparent',
                  background: isActive ? 'rgba(96,165,250,.09)' : 'transparent',
                  marginLeft: 2,
                  marginRight: 2,
                  borderRadius: isActive ? '0 8px 8px 0' : '0 8px 8px 0',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(255,255,255,.04)'
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'transparent'
                  }
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontSize: 10,
                    fontFamily: 'var(--font-mono)',
                    color: isActive ? 'rgba(96,165,250,.7)' : 'rgba(100,116,139,.35)',
                    flexShrink: 0,
                    width: 22,
                    letterSpacing: '.05em',
                    transition: 'color .18s',
                  }}
                >
                  {num}
                </span>

                {/* Label */}
                <span
                  style={{
                    fontSize: 14,
                    fontFamily: 'var(--font-mono)',
                    color: isActive ? 'rgba(226,232,240,.96)' : 'rgba(148,163,184,.65)',
                    fontWeight: isActive ? 600 : 400,
                    transition: 'color .18s, font-weight .18s',
                    letterSpacing: '.01em',
                  }}
                >
                  {label}
                </span>

                {/* Active diamond marker */}
                {isActive && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: 8,
                      color: 'rgba(96,165,250,.8)',
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                )}
              </a>
            )
          })}

          {/* Progress bar */}
          <div
            style={{
              margin: '12px 16px 0',
              height: 2,
              background: 'rgba(255,255,255,.05)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${((activeIdx + 1) / NAV.length) * 100}%`,
                background: 'linear-gradient(to right, rgba(96,165,250,.5), rgba(147,197,253,.7))',
                transition: 'width .35s ease',
                borderRadius: 2,
              }}
            />
          </div>
        </div>
      </nav>

      {/* ─── Mobile floating button ─── */}
      <div
        className="xl:hidden"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 20,
          zIndex: 60,
          opacity: show ? 1 : 0,
          pointerEvents: show ? 'auto' : 'none',
          transition: 'opacity .35s ease',
        }}
      >
        <button
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle navigation menu"
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'rgba(8,8,20,.95)',
            border: '1px solid rgba(96,165,250,.4)',
            color: 'rgba(147,197,253,.9)',
            fontSize: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(14px)',
            cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(0,0,0,.6), 0 0 16px rgba(96,165,250,.1)',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {mobileOpen
            ? <span style={{ fontSize: 17, lineHeight: 1 }}>✕</span>
            : (
              <>
                <span style={{ fontSize: 8, letterSpacing: '.12em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>nav</span>
                <span style={{ fontSize: 8, color: 'rgba(96,165,250,.7)' }}>◆</span>
              </>
            )}
        </button>
      </div>

      {/* ─── Mobile nav drawer ─── */}
      {mobileOpen && (
        <div
          ref={overlayRef}
          className="xl:hidden"
          style={{
            position: 'fixed',
            bottom: 84,
            right: 16,
            zIndex: 55,
            background: 'rgba(8,8,20,.97)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: 14,
            padding: '6px 0',
            backdropFilter: 'blur(24px)',
            minWidth: 210,
            boxShadow: '0 8px 48px rgba(0,0,0,.7)',
          }}
        >
          <div
            style={{
              padding: '6px 16px 10px',
              borderBottom: '1px solid rgba(255,255,255,.06)',
              marginBottom: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: '.14em', color: 'rgba(100,116,139,.6)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Contents</span>
            <span style={{ fontSize: 10, color: 'rgba(96,165,250,.55)', fontFamily: 'var(--font-mono)' }}>{activeIdx + 1}/{NAV.length}</span>
          </div>
          {NAV.map(({ id, label, num }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => handleNav(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  padding: '10px 16px',
                  background: isActive ? 'rgba(96,165,250,.1)' : 'transparent',
                  border: 'none',
                  borderLeft: isActive ? '2px solid rgba(96,165,250,.7)' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all .15s',
                }}
              >
                <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: isActive ? 'rgba(96,165,250,.7)' : 'rgba(100,116,139,.4)', width: 22, flexShrink: 0 }}>{num}</span>
                <span style={{ fontSize: 14, fontFamily: 'var(--font-mono)', color: isActive ? 'rgba(147,197,253,.95)' : 'rgba(203,213,225,.72)', fontWeight: isActive ? 600 : 400, textAlign: 'left' }}>
                  {label}
                </span>
                {isActive && <span style={{ marginLeft: 'auto', fontSize: 8, color: 'rgba(96,165,250,.8)' }}>◆</span>}
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}
