import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import BackgroundAudioControl from './components/BackgroundAudioControl.jsx'
import { SECTIONS } from './data/sections.js'
import './styles/main.scss'

function App() {
  const sections = useMemo(() => SECTIONS, [])
  const [activeKey, setActiveKey] = useState(sections[0].key)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveKey(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.6],
      },
    )

    sections.forEach(({ key }) => {
      const element = document.getElementById(key)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sections])

  const handleSelect = (key) => {
    const element = document.getElementById(key)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app-shell">
      <BackgroundAudioControl src="/audio/remember-you.mp3" />

      <Navbar
        brandLabel="YAO"
        navItems={sections.map(({ key, label }) => ({ key, label }))}
        ctaLabel="Let&apos;s Connect"
        activeKey={activeKey}
        onSelect={handleSelect}
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
