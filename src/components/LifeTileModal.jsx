import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useModalTransition } from '../hooks/useModalTransition.js'

function LifeTileModal({ tile, onClose }) {
  const { isMounted, status } = useModalTransition(Boolean(tile), { duration: 240 })
  const [renderTile, setRenderTile] = useState(tile)

  useEffect(() => {
    if (tile) {
      setRenderTile(tile)
    }
  }, [tile])

  useEffect(() => {
    if (!tile) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [tile, onClose])

  if (!isMounted || !renderTile) {
    return null
  }

  const { title, subtitle, detail } = renderTile

  return (
    <div className={`life-modal life-modal--${status}`} aria-live="assertive">
      <div className="life-modal__backdrop" role="presentation" onClick={onClose} />

      <section
        className="life-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="life-modal-title"
        aria-describedby="life-modal-subtitle"
      >
        <button type="button" className="life-modal__close" onClick={onClose} aria-label="Close life story">
          &times;
        </button>

        <header className="life-modal__header">
          <p id="life-modal-subtitle" className="life-modal__eyebrow">
            {subtitle}
          </p>
          <h2 id="life-modal-title">{title}</h2>
        </header>

        {detail?.intro?.length ? (
          <div className="life-modal__intro">
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {detail?.highlights?.length ? (
          <div className="life-modal__highlights">
            {detail.highlights.map((section) => (
              <section key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  )
}

LifeTileModal.propTypes = {
  tile: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    detail: PropTypes.shape({
      intro: PropTypes.arrayOf(PropTypes.string),
      highlights: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          items: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
      ),
    }),
  }),
  onClose: PropTypes.func.isRequired,
}

LifeTileModal.defaultProps = {
  tile: null,
}

export default LifeTileModal
