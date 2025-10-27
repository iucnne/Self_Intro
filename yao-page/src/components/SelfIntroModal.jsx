import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { SELF_INTRO_PARAGRAPHS } from '../data/selfIntro.js'

function SelfIntroModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
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
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="intro-modal" aria-live="assertive">
      <div className="intro-modal__backdrop" role="presentation" onClick={onClose} />

      <section className="intro-modal__panel" role="dialog" aria-modal="true" aria-label="Self introduction">
        <button type="button" className="intro-modal__close" onClick={onClose} aria-label="Close self intro">
          &times;
        </button>

        <header className="intro-modal__header">
          <p className="intro-modal__eyebrow">Self Intro</p>
          <h2>嗨，我是 Yao</h2>
          <p className="intro-modal__meta">Front-end Intern · Taipei, Taiwan</p>
        </header>

        <div className="intro-modal__content">
          {SELF_INTRO_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  )
}

SelfIntroModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SelfIntroModal
