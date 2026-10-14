
import type { Project } from "../types/project"
import styles from "./ProjectCard.module.css"

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  const hasResults = Boolean(project.results?.length)

  return (
    <article
      className={`${styles.card} ${
        featured ? styles.featured : ""
      }`}
    >
      <img
        className={styles.image}
        src={project.image}
        alt={`Skärmbild från ${project.title}`}
      />

      <div className={styles.content}>
        <p>{project.category}</p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        {hasResults && (
          <div className={styles.results}>
            <p className={styles.resultsTitle}>Resultat</p>

            <div className={styles.resultsList}>
              {project.results!.map((result) => (
                <div className={styles.result} key={result.label}>
                  <p className={styles.resultValue}>
                    {result.value}
                  </p>

                  <p className={styles.resultLabel}>
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Besök hemsidan
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
