import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useModalTransition } from '../hooks/useModalTransition.js'

function ProjectDetailModal({ project, onClose }) {
  const { isMounted, status } = useModalTransition(Boolean(project), { duration: 280 })
  const [renderProject, setRenderProject] = useState(project)

  useEffect(() => {
    if (project) {
      setRenderProject(project)
    }
  }, [project])

  useEffect(() => {
    if (!project) {
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
  }, [project, onClose])

  if (!isMounted || !renderProject) {
    return null
  }

  const { detail, title, role, tools } = renderProject

  const renderListItems = (items) =>
    items.map((item, index) => {
      if (typeof item === 'string') {
        return <li key={`list-item-${index}`}>{item}</li>
      }

      const key = `list-item-${item.title || item.label || item.term || index}`

      return (
        <li key={key}>
          {item.title || item.label ? <strong>{item.title || item.label}</strong> : null}
          {item.description ? <span>{item.description}</span> : null}
          {item.paragraph ? <p>{item.paragraph}</p> : null}
          {item.bullets?.length ? (
            <ul className="project-detail-modal__sublist">
              {item.bullets.map((bullet, bulletIndex) => (
                <li key={`${key}-bullet-${bulletIndex}`}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </li>
      )
    })

  const renderSectionContent = (section) => {
    switch (section.type) {
      case 'list':
        return <ul>{renderListItems(section.items)}</ul>
      case 'dl':
        return (
          <dl>
            {section.items.map((item, index) => (
              <div key={`dl-${item.term || index}`} className="project-detail-modal__definition">
                <dt>{item.term}</dt>
                <dd>{item.description}</dd>
              </div>
            ))}
          </dl>
        )
      case 'code':
        return (
          <pre>
            <code>{section.content}</code>
          </pre>
        )
      case 'steps':
        return (
          <ol className="project-detail-modal__steps">
            {section.items.map((step, index) => (
              <li key={`step-${step.title || index}`}>
                {step.title ? <strong>{step.title}</strong> : null}
                {step.description ? <p>{step.description}</p> : null}
                {step.bullets?.length ? (
                  <ul className="project-detail-modal__sublist">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li key={`step-${index}-bullet-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {step.code ? (
                  <pre>
                    <code>{step.code}</code>
                  </pre>
                ) : null}
              </li>
            ))}
          </ol>
        )
      case 'table':
        return (
          <div className="project-detail-modal__table">
            <table>
              <thead>
                <tr>
                  {section.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {row.map((cell, cellIndex) => (
                      <td key={`row-${rowIndex}-cell-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      case 'qa':
        return (
          <div className="project-detail-modal__qa">
            {section.items.map((item, index) => (
              <div key={`qa-${item.question || index}`} className="project-detail-modal__qa-item">
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        )
      case 'text':
      default:
        return (
          <div className="project-detail-modal__text">
            {(section.paragraphs || []).map((paragraph, index) => (
              <p key={`text-${index}`}>{paragraph}</p>
            ))}
          </div>
        )
    }
  }

  return (
    <div className={`project-detail-modal project-detail-modal--${status}`} aria-live="assertive">
      <div className="project-detail-modal__backdrop" role="presentation" onClick={onClose} />

      <section
        className="project-detail-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >
        <button type="button" className="project-detail-modal__close" onClick={onClose} aria-label="Close project detail">
          &times;
        </button>

        <header className="project-detail-modal__header">
          <p className="project-detail-modal__eyebrow">{role}</p>
          <h2 id="project-detail-title">{title}</h2>
          <p className="project-detail-modal__meta">{tools}</p>
        </header>

        {detail.intro?.length ? (
          <div className="project-detail-modal__intro">
            {detail.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {detail.highlights?.length ? (
          <div className="project-detail-modal__highlights">
            {detail.highlights.map((highlight) => (
              <section key={highlight.title}>
                <h3>{highlight.title}</h3>
                <ul>
                  {highlight.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : null}

        {detail.awards?.length ? (
          <div className="project-detail-modal__awards">
            <h3>獎項紀錄</h3>
            <div className="project-detail-modal__award-grid">
              {detail.awards.map((award) => (
                <figure key={award.title} className="project-detail-modal__award">
                  {award.image ? <img src={award.image} alt={award.imageAlt || award.title} /> : null}
                  <figcaption>
                    <strong>{award.title}</strong>
                    <span>{award.organization}</span>
                    {award.description ? <p>{award.description}</p> : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        {detail.sections?.length ? (
          <div className="project-detail-modal__sections">
            {detail.sections.map((section) => (
              <section
                key={section.title}
                className={`project-detail-modal__section project-detail-modal__section--${section.type || 'text'}`}
              >
                <h3>{section.title}</h3>
                {renderSectionContent(section)}
              </section>
            ))}
          </div>
        ) : null}

        {detail.contact ? <p className="project-detail-modal__contact">{detail.contact}</p> : null}
      </section>
    </div>
  )
}

ProjectDetailModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string,
    tools: PropTypes.string,
    detail: PropTypes.shape({
      intro: PropTypes.arrayOf(PropTypes.string).isRequired,
      highlights: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          items: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
      ),
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string,
          title: PropTypes.string.isRequired,
          items: PropTypes.array,
          content: PropTypes.string,
          language: PropTypes.string,
          headers: PropTypes.arrayOf(PropTypes.string),
          rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
          paragraphs: PropTypes.arrayOf(PropTypes.string),
        }),
      ),
      awards: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          organization: PropTypes.string.isRequired,
          description: PropTypes.string,
          image: PropTypes.string,
          imageAlt: PropTypes.string,
        }),
      ),
      contact: PropTypes.string,
    }).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
}

ProjectDetailModal.defaultProps = {
  project: null,
}

export default ProjectDetailModal
