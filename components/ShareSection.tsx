'use client'

import { useState } from 'react'

const SITE_URL = 'https://diamond-switch-lab.vercel.app/'
const KOFI_URL = 'https://ko-fi.com/zhanfeng'

const REDDIT_SHARE  = `https://www.reddit.com/r/MechanicalKeyboards/submit?url=${encodeURIComponent(SITE_URL)}&title=${encodeURIComponent('Wuque Diamond HE Switch Lab: Cullinan vs Heart of the Ocean vs Poseidon')}`
const TWITTER_SHARE = `https://twitter.com/intent/tweet?url=${encodeURIComponent(SITE_URL)}&text=${encodeURIComponent('Wuque Diamond HE Switch Lab: Cullinan, Heart of the Ocean, and Poseidon compared through RGB photos, wobble tests, press clips, and WASD sound impressions.')}`

const WUQUE_WEBSITE_URL = 'https://shop.wuquestudio.com/'
const WUQUE_IG_URL      = 'https://www.instagram.com/wuque.studio/'
const WUQUE_REDDIT_URL  = 'https://www.reddit.com/user/WuqueStudio/'

export default function ShareSection() {
  const [copied, setCopied]   = useState(false)
  const [igCopied, setIgCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard.writeText(SITE_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleInstagram = () => {
    navigator.clipboard.writeText(SITE_URL).then(() => {
      setIgCopied(true)
      setTimeout(() => setIgCopied(false), 2500)
    })
    window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="share" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="section-label mb-3">12 / Share</div>
        <h2 className="section-heading mb-3">Share This Review</h2>
        <p className="text-sm mb-10" style={{ color: 'rgba(100,116,139,.65)' }}>
          If this helped your buying decision or sparked a build idea, pass it along.
        </p>

        {/* Share buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-3">

          {/* Reddit */}
          <a
            href={REDDIT_SHARE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Reddit — opens r/MechanicalKeyboards submit page with review pre-filled"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg transition-all duration-300 hover:brightness-125"
            style={{
              background: 'rgba(255,69,0,.08)',
              border: '1px solid rgba(255,69,0,.2)',
              color: 'rgba(255,69,0,.8)',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
            <span>Reddit</span>
            <span style={{ fontSize: 10, opacity: .55, fontFamily: 'var(--font-mono)' }}>r/MechanicalKeyboards</span>
          </a>

          {/* X / Twitter */}
          <a
            href={TWITTER_SHARE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X / Twitter — opens tweet composer with review link and text pre-filled"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg transition-all duration-300 hover:brightness-125"
            style={{
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.12)',
              color: 'rgba(255,255,255,.75)',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X / Twitter</span>
            <span style={{ fontSize: 10, opacity: .55, fontFamily: 'var(--font-mono)' }}>Thread or post</span>
          </a>

          {/* Instagram — copies link then opens Instagram */}
          <button
            onClick={handleInstagram}
            aria-label="Copy review link and open Instagram — paste the link into your caption or story"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-lg transition-all duration-300 hover:brightness-125"
            style={{
              background: igCopied ? 'rgba(225,48,108,.12)' : 'rgba(225,48,108,.07)',
              border: `1px solid ${igCopied ? 'rgba(225,48,108,.35)' : 'rgba(225,48,108,.18)'}`,
              color: 'rgba(225,48,108,.8)',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            <span>Instagram</span>
            <span style={{ fontSize: 10, opacity: .55, fontFamily: 'var(--font-mono)' }}>
              {igCopied ? 'Link copied ✓' : 'Copy link + open'}
            </span>
          </button>
        </div>

        {/* Instagram helper hint */}
        <p className="mb-6 font-mono" style={{ fontSize: 11, color: 'rgba(100,116,139,.45)' }}>
          Instagram: link is copied to clipboard — paste into your caption, story, or reel.
        </p>

        {/* Copy link */}
        <button
          onClick={copyLink}
          aria-label="Copy review link to clipboard"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 hover:brightness-125 font-mono text-xs"
          style={{
            background: copied ? 'rgba(96,165,250,.12)' : 'rgba(255,255,255,.03)',
            border: copied ? '1px solid rgba(96,165,250,.3)' : '1px solid rgba(255,255,255,.09)',
            color: copied ? 'rgba(147,197,253,.9)' : 'rgba(148,163,184,.65)',
            cursor: 'pointer',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {copied
              ? <path d="M20 6L9 17l-5-5" />
              : <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0 3-3m-3 3 3 3" />
            }
          </svg>
          {copied ? 'Link copied!' : 'Copy link'}
        </button>

        {/* Divider */}
        <div className="thin-divider my-10" />

        {/* Wuque Studio official links */}
        <div className="mb-8">
          <p className="font-mono mb-1" style={{ fontSize: 11, letterSpacing: '.12em', color: 'rgba(96,165,250,.55)', textTransform: 'uppercase' }}>
            Wuque Studio — Official
          </p>
          <p className="font-mono mb-4" style={{ fontSize: 10, color: 'rgba(100,116,139,.4)' }}>
            These are Wuque's own channels, not my socials.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <a
              href={WUQUE_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wuque Studio official website"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:brightness-125"
              style={{
                background: 'rgba(96,165,250,.04)',
                border: '1px solid rgba(96,165,250,.12)',
                color: 'rgba(147,197,253,.8)',
                fontSize: 13,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Wuque Studio</span>
              <span className="font-mono" style={{ fontSize: 10, color: 'rgba(96,165,250,.4)' }}>Official website</span>
            </a>
            <a
              href={WUQUE_IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wuque Studio on Instagram"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:brightness-125"
              style={{
                background: 'rgba(96,165,250,.04)',
                border: '1px solid rgba(96,165,250,.12)',
                color: 'rgba(147,197,253,.8)',
                fontSize: 13,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              <span>@wuquestudio</span>
              <span className="font-mono" style={{ fontSize: 10, color: 'rgba(96,165,250,.4)' }}>Instagram</span>
            </a>
            <a
              href={WUQUE_REDDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wuque Studio on Reddit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:brightness-125"
              style={{
                background: 'rgba(96,165,250,.04)',
                border: '1px solid rgba(96,165,250,.12)',
                color: 'rgba(147,197,253,.8)',
                fontSize: 13,
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
              <span>r/WuqueStudio</span>
              <span className="font-mono" style={{ fontSize: 10, color: 'rgba(96,165,250,.4)' }}>Reddit</span>
            </a>
          </div>
        </div>

        {/* Ko-fi support block */}
        {KOFI_URL ? (
          <div
            className="mb-10 rounded-xl px-6 py-5 flex flex-col items-center gap-3"
            style={{ background: 'rgba(255,94,58,.05)', border: '1px solid rgba(255,94,58,.15)' }}
          >
            <p className="font-mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'rgba(255,120,80,.6)', textTransform: 'uppercase' }}>
              Support this review
            </p>
            <p style={{ fontSize: 14, color: 'rgba(203,213,225,.75)', maxWidth: 360 }}>
              These reviews take real time and gear to produce. If it helped, a coffee keeps the lab running.
            </p>
            <a
              href={KOFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Support on Ko-fi"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:brightness-115"
              style={{
                background: 'rgba(255,94,58,.15)',
                border: '1px solid rgba(255,94,58,.3)',
                color: 'rgba(255,140,100,.95)',
                fontSize: 14,
              }}
            >
              ☕ Buy me a coffee on Ko-fi
            </a>
          </div>
        ) : (
          <div
            className="mb-10 rounded-xl px-6 py-5 flex flex-col items-center gap-2"
            style={{ background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)' }}
          >
            <p className="font-mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'rgba(100,116,139,.35)', textTransform: 'uppercase' }}>
              Support this review
            </p>
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs"
              style={{
                background: 'rgba(255,255,255,.025)',
                border: '1px solid rgba(255,255,255,.06)',
                color: 'rgba(100,116,139,.4)',
                cursor: 'default',
              }}
            >
              ☕ Ko-fi link coming soon
            </span>
          </div>
        )}

        <p className="mt-4 text-xs font-mono" style={{ color: 'rgba(100,116,139,.35)' }}>
          This is an independent tester review. No affiliate links. No sponsored content.
          Units were provided by Wuque Studio for the 50-tester feedback programme.
          Wuque did not approve this review before publishing.
        </p>
      </div>
    </section>
  )
}
