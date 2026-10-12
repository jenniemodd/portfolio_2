
import { useState } from "react"
import { projects } from "../data/project"
import {
  projectFilters,
  type Project,
  type ProjectFilter,
} from "../types/project"
import ProjectCard from "./ProjectCard"
import styles from "./Projects.module.css"

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("Alla")

  const filteredProjects: Project[] =
    activeFilter === "Alla"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter,
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
        <p>Inga projekt matchar det valda filtret ännu.</p>
      )}
    </section>
  )
}

export default Projects
