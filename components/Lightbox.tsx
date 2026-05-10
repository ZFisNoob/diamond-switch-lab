'use client'

import { useEffect, useCallback } from 'react'

export interface LightboxImage {
  src: string
  alt: string
  caption?: string
  mode?: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onNav: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onNav }: LightboxProps) {
  const img = images[index]
  const hasPrev = index > 0
  const hasNext = index < images.length - 1

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft'  && hasPrev) onNav(index - 1)
      if (e.key === 'ArrowRight' && hasNext) onNav(index + 1)
    },
    [onClose, onNav, index, hasPrev, hasNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [handleKey])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(2,2,10,.92)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-4 right-4 flex items-center justify-center rounded-full transition-all hover:brightness-125"
        style={{
          width: 40, height: 40,
          background: 'rgba(255,255,255,.08)',
          border: '1px solid rgba(255,255,255,.14)',
          color: 'rgba(226,232,240,.9)',
          fontSize: 18,
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        ✕
      </button>

      {/* Prev arrow */}
      {hasPrev && (
        <button
          onClick={e => { e.stopPropagation(); onNav(index - 1) }}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all hover:brightness-125"
          style={{
            width: 44, height: 44,
            background: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(255,255,255,.12)',
            color: 'rgba(226,232,240,.85)',
            fontSize: 20,
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          ‹
        </button>
      )}

      {/* Next arrow */}
      {hasNext && (
        <button
          onClick={e => { e.stopPropagation(); onNav(index + 1) }}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all hover:brightness-125"
          style={{
            width: 44, height: 44,
            background: 'rgba(255,255,255,.07)',
            border: '1px solid rgba(255,255,255,.12)',
            color: 'rgba(226,232,240,.85)',
            fontSize: 20,
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          ›
        </button>
      )}

      {/* Image + caption */}
      <div
        className="flex flex-col items-center gap-4 max-w-[88vw]"
        onClick={e => e.stopPropagation()}
        style={{ maxHeight: '92vh' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.src}
          alt={img.alt}
          className="rounded-xl object-contain"
          style={{ maxWidth: '100%', maxHeight: '78vh', display: 'block' }}
        />
        <div className="text-center flex flex-col gap-1">
          {img.mode && (
            <span
              className="font-mono text-xs px-3 py-0.5 rounded-full"
              style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)', color: 'rgba(226,232,240,.7)' }}
            >
              {img.mode}
            </span>
          )}
          {img.caption && (
            <p className="text-sm" style={{ color: 'rgba(203,213,225,.8)', maxWidth: 520 }}>
              {img.caption}
            </p>
          )}
          <p className="font-mono text-xs" style={{ color: 'rgba(100,116,139,.5)' }}>
            {index + 1} / {images.length} &nbsp;·&nbsp; Press Esc or click outside to close
          </p>
        </div>
      </div>
    </div>
  )
}
