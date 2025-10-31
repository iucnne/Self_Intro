import { useMemo, useState } from 'react'
import { useCareerTrain } from '../hooks/useCareerTrain.js'
import { CAREER_STAGES, STAGE_DETAILS, LIFE_TILES } from '../data/about.js'
import LifeTileModal from '../components/LifeTileModal.jsx'

function AboutPage() {
  const { stages, currentIndex, selectByIndex, currentStage } = useCareerTrain(CAREER_STAGES)
  const detailKey = currentStage?.key ?? 'intern'
  const careerDetail = STAGE_DETAILS[detailKey]
  const [activeTileKey, setActiveTileKey] = useState(null)
  const activeTile = useMemo(() => LIFE_TILES.find((tile) => tile.key === activeTileKey) ?? null, [activeTileKey])

  const handleTileOpen = (key) => {
    setActiveTileKey(key)
  }

  const handleTileClose = () => {
    setActiveTileKey(null)
  }

  return (
    <div className="page page--about">
      <section className="career-path" aria-label="Dream career path">
        <div className="career-path__rail">
          {stages.map((stage, index) => {
            const isCurrent = index === currentIndex
            return (
              <button
                key={stage.label}
                type="button"
                className={`career-step ${isCurrent ? 'is-current' : ''}`}
                onClick={() => selectByIndex(index)}
              >
                <span className="career-step__bullet" aria-hidden="true" />
                <span className="career-step__label">{stage.label}</span>
                {index !== stages.length - 1 ? <span className="career-step__line" /> : null}
              </button>
            )
          })}
        </div>
      </section>

      <section className="career-detail" aria-live="polite">
        <h2>{careerDetail.title}</h2>
        <ul>
          {careerDetail.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="about-gallery">
        {LIFE_TILES.map((tile) => (
          <button
            key={tile.key}
            type="button"
            className={`about-card about-card--${tile.key}`}
            onClick={() => handleTileOpen(tile.key)}
            aria-haspopup="dialog"
            aria-expanded={activeTileKey === tile.key}
          >
            <p className="about-card__subtitle">{tile.subtitle}</p>
            <h2>{tile.title}</h2>
            <p>{tile.body}</p>
          </button>
        ))}
      </div>

      <LifeTileModal tile={activeTile} onClose={handleTileClose} />
    </div>
  )
}

export default AboutPage
