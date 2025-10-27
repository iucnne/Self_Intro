import Navbar from './components/Navbar.jsx'
import QuoteRotator from './components/QuoteRotator.jsx'
import BackgroundAudioControl from './components/BackgroundAudioControl.jsx'
import { NAV_ITEMS } from './data/navigation.js'
import './styles/main.scss'

function App() {
  return (
    <div className="app-shell">
      <BackgroundAudioControl src="/audio/remember-you.mp3" />

      <Navbar brandLabel="YAO" navItems={NAV_ITEMS} ctaLabel="Let&apos;s Connect" />

      <main className="hero" id="home">
        <section className="hero__content">
          <h1 className="hero__headline">堯 Yao</h1>
          <p className="hero__eyebrow">A young boy exploring the world, step by step, with curiosity and dreams.</p>
          <p className="hero__description">
            宜蘭大學資工系的大四生，目前正打造屬於自己的世界。
            這裡紀錄著我學習的軌跡、專案的故事，以及成長的每一個瞬間。
          </p>
          <QuoteRotator />
        </section>
      </main>
    </div>
  )
}

export default App
