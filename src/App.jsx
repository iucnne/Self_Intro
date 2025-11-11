import { useMemo } from 'react'
import Navbar from './components/Navbar.jsx'
import BackgroundAudioControl from './components/BackgroundAudioControl.jsx'
import { SECTIONS } from './data/sections.js'
import { useSectionObserver } from './hooks/useSectionObserver.js'
import './styles/main.scss'

function App() {
  const sections = useMemo(() => SECTIONS, [])
  // 透過自訂 hook 同步目前捲動區塊，並取得平滑捲動的控制函式。
  const { activeKey, scrollToSection } = useSectionObserver(sections)

  return (
    <div className="app-shell">
      <BackgroundAudioControl src="/audio/remember-you.mp3" />

      <Navbar
        brandLabel="YAO"
        navItems={sections.map(({ key, label }) => ({ key, label }))}
        ctaLabel="Let&apos;s Connect"
        activeKey={activeKey}
        onSelect={scrollToSection}
      />

      <main className="page-stack" id="content">
        {sections.map(({ key, label, Component }, index) => (
          <section key={key} id={key} className="page-stack__section">
            {index > 0 ? (
              <div className="section-divider" aria-hidden="true">
                <span>{label}</span>
              </div>
            ) : null}

            <div className="page-layer">
              <Component />
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
