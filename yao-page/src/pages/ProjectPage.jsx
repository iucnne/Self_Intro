import { PROJECTS } from '../data/projects.js'

function ProjectPage() {
  return (
    <section className="page-stack__project" id="project">
      <div className="project-stack">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className="project-banner"
            style={{ '--tone': project.tone, '--order': index }}
          >
            <div className="project-banner__info">
              <header className="project-banner__heading">
                <h2>{project.title}</h2>
                <span>{project.tools}</span>
              </header>
              <p>{project.description}</p>

              <footer className="project-banner__meta">
                <span className="project-banner__role">{project.role}</span>
                <div className="project-banner__tags">
                  {project.tags.map((tag) => (
                    <span key={`${project.title}-${tag}`}>{tag}</span>
                  ))}
                </div>
              </footer>
            </div>

            <div className={`project-banner__preview project-banner__preview--${project.previewClass}`}>
              <button type="button">View project</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectPage
