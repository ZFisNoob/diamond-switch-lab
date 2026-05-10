import TableOfContents  from '@/components/TableOfContents'
import Hero             from '@/components/Hero'
import Disclosure       from '@/components/Disclosure'
import QuickVerdict     from '@/components/QuickVerdict'
import SwitchIdentity   from '@/components/SwitchIdentity'
import SwitchComparison from '@/components/SwitchComparison'
import Limitations      from '@/components/Limitations'
import TesterLog        from '@/components/TesterLog'
import RGBTest          from '@/components/RGBTest'
import StabilityTest    from '@/components/StabilityTest'
import WASDSound        from '@/components/WASDSound'
import TestSetup        from '@/components/TestSetup'
import FeedbackSection  from '@/components/FeedbackSection'
import FinalVerdict     from '@/components/FinalVerdict'
import ShareSection     from '@/components/ShareSection'

export default function Page() {
  return (
    <>
      <TableOfContents />
      <main>
        <Hero />
        <Disclosure />
        <div className="thin-divider" />
        <QuickVerdict />
        <div className="thin-divider" />
        <SwitchIdentity />
        <div className="thin-divider" />
        <SwitchComparison />
        <div className="thin-divider" />
        <Limitations />
        <div className="thin-divider" />
        <TesterLog />
        <div className="thin-divider" />
        <RGBTest />
        <div className="thin-divider" />
        <StabilityTest />
        <div className="thin-divider" />
        <WASDSound />
        <div className="thin-divider" />
        <TestSetup />
        <div className="thin-divider" />
        <FeedbackSection />
        <div className="thin-divider" />
        <FinalVerdict />
        <div className="thin-divider" />
        <ShareSection />
      </main>
      <footer
        className="text-center py-14 border-t"
        style={{
          borderColor: 'rgba(255,255,255,.05)',
          color: 'rgba(100,116,139,.45)',
          fontSize: '11px',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '.06em',
        }}
      >
        <div className="mb-1">Wuque Diamond HE Switch Lab</div>
        <div style={{ color: 'rgba(100,116,139,.25)' }}>
          Limited Tester-Unit Review · May 2026 · G = Cullinan · H = Heart of the Ocean · J = Poseidon
        </div>
      </footer>
    </>
  )
}
