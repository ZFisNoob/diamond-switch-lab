export default function Disclosure() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-6 pb-2">
      <div
        className="rounded-xl px-5 py-3.5 flex gap-3 items-start"
        style={{
          background: 'rgba(201,168,76,.05)',
          border: '1px solid rgba(201,168,76,.15)',
        }}
      >
        <span style={{ color: 'rgba(253,224,133,.65)', fontSize: 13, flexShrink: 0, marginTop: 1 }}>◎</span>
        <p className="text-xs leading-relaxed font-mono" style={{ color: 'rgba(148,163,184,.75)' }}>
          These switches were provided by Wuque Studio for testing and feedback as part of their
          50-tester programme. Wuque did not approve this review before publishing.
          All photos, videos, observations, and conclusions are my own.
        </p>
      </div>
    </div>
  )
}
