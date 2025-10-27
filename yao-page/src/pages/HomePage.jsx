import QuoteRotator from '../components/QuoteRotator.jsx'
import SelfIntroModal from '../components/SelfIntroModal.jsx'
import SelfIntroFab from '../components/SelfIntroFab.jsx'
import { useModal } from '../hooks/useModal.js'
import { FEATURED_TOOLS, HOME_INTRO } from '../data/home.js'

function HomePage() {
  const { isOpen, open, close } = useModal()

  return (
    <div className="page page--home">
      <header className="home-hero">
        <div className="home-hero__intro">
          <div className="home-hero__avatar" aria-hidden="true" />
          <div className="home-hero__intro-text">
            <p>
              Hi, I&apos;m Yao，一個對世界充滿好奇的大男孩，正在把想像中的生活一步步拉進現實。
            </p>
            <div className="home-hero__badges" aria-label="locations and availability">
              {HOME_INTRO.badges.map((badge, index) => (
                <span key={`${badge}-${index}`} className={badge.includes('●') ? 'home-hero__status' : undefined}>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <h1 className="home-hero__title">
          <span>Front-end</span>
          <span>Intern</span>
          <span>
            Building <span className="home-hero__title-playful">Playful </span> Web
          </span>
        </h1>

        <div className="home-hero__tools" aria-label="Key focus areas">
          {FEATURED_TOOLS.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </header>

      <div className="home-overview">
        <p className="page__body">{HOME_INTRO.summary}</p>

        <div className="home-quote">
          <QuoteRotator />
        </div>
      </div>

      <SelfIntroFab onClick={open} isExpanded={isOpen} />
      <SelfIntroModal isOpen={isOpen} onClose={close} />
    </div>
  )
}

export default HomePage
