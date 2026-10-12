import { useState } from "react"
import { projects } from "../data/project"
import styles from "./Projects.module.css"
import {
  projectFilters,
  type Project,
  type ProjectFilter,
} from "../types/project"

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("Alla")

  const filteredProjects: Project[] =
    activeFilter === "Alla"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.tags.some(
              (tag) =>
                tag.toLowerCase() === activeFilter.toLowerCase(),
            ),
        )

  const featuredProject = filteredProjects[0]
  const otherProjects = filteredProjects.slice(1)

  return (
    <section className={styles.projects} id="projects">
      <header className={styles.header}>
        <p className={styles.eyebrow}>03 · Utvalda projekt</p>

        <h2>
          Idéer som blivit
          <br />
          något på riktigt.
        </h2>

        <div className={styles.filters} aria-label="Filtrera projekt">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filter} ${
                activeFilter === filter ? styles.filterActive : ""
              }`}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      {filteredProjects.length > 0 ? (
        <div className={styles.projectList}>
          <ProjectCard project={featuredProject} featured />

          {otherProjects.length > 0 && (
            <div className={styles.grid}>
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Inga projekt matchar den valda kategorin ännu.</p>
      )}
    </section>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return (
    <article
      className={`${styles.card} ${
        featured ? styles.featured : styles.standard
      }`}
    >
      <div className={styles.preview}>
        <img
          src={project.image}
          alt={`Förhandsvisning av ${project.title}`}
        />
      </div>

      <div className={styles.info}>
        <span className={styles.projectNumber}>
          {String(project.id).padStart(2, "0")}
        </span>

        <p className={styles.projectCategory}>{project.category}</p>

        <h3>{project.title}</h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className={styles.links}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                ↗ <span>Se projekt</span>
              </a>
            )}

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <span aria-hidden="true">⌘</span>
                <span>GitHub</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default Projects