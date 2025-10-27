import { useCareerTrain } from '../hooks/useCareerTrain.js'
import { CAREER_STAGES, STAGE_DETAILS, LIFE_TILES } from '../data/about.js'

function AboutPage() {
  const { stages, currentIndex, selectByIndex, currentStage } = useCareerTrain(CAREER_STAGES)
  const detailKey = currentStage?.key ?? 'intern'
  const careerDetail = STAGE_DETAILS[detailKey]

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
          <article key={tile.key} className={`about-card about-card--${tile.key}`}>
            <p className="about-card__subtitle">{tile.subtitle}</p>
            <h2>{tile.title}</h2>
            <p>{tile.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
